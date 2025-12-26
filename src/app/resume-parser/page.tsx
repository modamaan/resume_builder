"use client";
import { useState, useEffect, useMemo } from "react";
import { readPdf } from "lib/parse-resume-from-pdf/read-pdf";
import type { TextItems } from "lib/parse-resume-from-pdf/types";
import { groupTextItemsIntoLines } from "lib/parse-resume-from-pdf/group-text-items-into-lines";
import { groupLinesIntoSections } from "lib/parse-resume-from-pdf/group-lines-into-sections";
import { extractResumeFromSections } from "lib/parse-resume-from-pdf/extract-resume-from-sections";
import { ResumeDropzone } from "components/ResumeDropzone";
import { cx } from "lib/cx";
import { Heading, Link, Paragraph } from "components/documentation";
import { ResumeTable } from "resume-parser/ResumeTable";
import { FlexboxSpacer } from "components/FlexboxSpacer";
import { CircularProgress } from "components/CircularProgress";
import { calculateATSScore, getScoreLabel, getScoreBgColor } from "lib/ats-score";

const RESUME_EXAMPLES = [
  {
    fileUrl: "resume-example/laverne-resume.pdf",
    description: (
      <span>
        Sample Resume Example -{" "}
        <Link href="https://laverne.edu/careers/wp-content/uploads/sites/15/2010/12/Undergraduate-Student-Resume-Examples.pdf">
          Source
        </Link>
      </span>
    ),
  },
  {
    fileUrl: "resume-example/openresume-resume.pdf",
    description: (
      <span>
        Created with ResumeStudio -{" "}
        <Link href="/resume-builder">Try Builder</Link>
      </span>
    ),
  },
];

const defaultFileUrl = RESUME_EXAMPLES[0]["fileUrl"];
export default function ResumeParser() {
  const [fileUrl, setFileUrl] = useState(defaultFileUrl);
  const [textItems, setTextItems] = useState<TextItems>([]);
  const lines = groupTextItemsIntoLines(textItems || []);
  const sections = groupLinesIntoSections(lines);
  const resume = extractResumeFromSections(sections);

  // Calculate ATS score
  const atsScore = useMemo(() => calculateATSScore(resume), [resume]);

  useEffect(() => {
    async function test() {
      const textItems = await readPdf(fileUrl);
      setTextItems(textItems);
    }
    test();
  }, [fileUrl]);

  return (
    <main className="h-full w-full overflow-hidden">
      <div className="grid md:grid-cols-6">
        <div className="flex justify-center px-2 md:col-span-3 md:h-[calc(100vh-var(--top-nav-bar-height))] md:justify-end">
          <section className="mt-5 grow px-4 md:max-w-[600px] md:px-0">
            <div className="aspect-h-[9.5] aspect-w-7">
              <iframe src={`${fileUrl}#navpanes=0`} className="h-full w-full" />
            </div>
          </section>
          <FlexboxSpacer maxWidth={45} className="hidden md:block" />
        </div>
        <div className="flex px-6 text-gray-900 md:col-span-3 md:h-[calc(100vh-var(--top-nav-bar-height))] md:overflow-y-scroll">
          <FlexboxSpacer maxWidth={45} className="hidden md:block" />
          <section className="max-w-[600px] grow">
            <Heading className="text-primary !mt-4">
              ATS Resume Checker
            </Heading>
            <Paragraph smallMarginTop={true}>
              Check how well your resume works with Applicant Tracking Systems (ATS).
              Upload your resume to see what information employers' systems can read from it.
            </Paragraph>

            <div className="mt-6 rounded-lg border-2 border-purple-200 bg-purple-50 p-4">
              <div className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-semibold text-purple-900">Why this matters</p>
                  <p className="mt-1 text-sm text-purple-800">
                    Most companies use ATS software to screen resumes. If the system can't read your information correctly,
                    your resume might be rejected before a human ever sees it.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              {RESUME_EXAMPLES.map((example, idx) => (
                <article
                  key={idx}
                  className={cx(
                    "flex-1 cursor-pointer rounded-md border-2 px-4 py-3 shadow-sm outline-none hover:bg-gray-50 focus:bg-gray-50",
                    example.fileUrl === fileUrl
                      ? "border-purple-400 bg-purple-50"
                      : "border-gray-300"
                  )}
                  onClick={() => setFileUrl(example.fileUrl)}
                  onKeyDown={(e) => {
                    if (["Enter", " "].includes(e.key))
                      setFileUrl(example.fileUrl);
                  }}
                  tabIndex={0}
                >
                  <h1 className="font-semibold">Example {idx + 1}</h1>
                  <p className="mt-2 text-sm text-gray-500">
                    {example.description}
                  </p>
                </article>
              ))}
            </div>

            <Heading level={2} className="!mt-8">
              Upload Your Resume
            </Heading>
            <Paragraph smallMarginTop={true}>
              Upload your resume PDF below to check how well it can be read by ATS systems.
              The more information we can extract, the better formatted your resume is.
            </Paragraph>
            <div className="mt-3">
              <ResumeDropzone
                onFileUrlChange={(fileUrl) =>
                  setFileUrl(fileUrl || defaultFileUrl)
                }
                playgroundView={true}
              />
            </div>

            {/* ATS Score Section */}
            <div className="mt-8 rounded-xl border-2 border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm">
              <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">
                ATS Compatibility Score
              </h2>

              {/* Overall Score */}
              <div className="mb-8 flex flex-col items-center">
                <CircularProgress percentage={atsScore.overall} size={140} strokeWidth={10} />
                <div className="mt-4 text-center">
                  <p className={`text-xl font-bold bg-gradient-to-r ${getScoreBgColor(atsScore.overall)} bg-clip-text text-transparent`}>
                    {getScoreLabel(atsScore.overall)}
                  </p>
                  <p className="mt-1 text-sm text-gray-600">Overall ATS Readability</p>
                </div>
              </div>

              {/* Score Breakdown */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="mb-4 text-center text-sm font-semibold uppercase tracking-wide text-gray-700">
                  Score Breakdown
                </h3>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  <CircularProgress
                    percentage={atsScore.breakdown.contactInfo}
                    size={90}
                    strokeWidth={6}
                    label="Contact Info"
                  />
                  <CircularProgress
                    percentage={atsScore.breakdown.workExperience}
                    size={90}
                    strokeWidth={6}
                    label="Experience"
                  />
                  <CircularProgress
                    percentage={atsScore.breakdown.education}
                    size={90}
                    strokeWidth={6}
                    label="Education"
                  />
                  <CircularProgress
                    percentage={atsScore.breakdown.skills}
                    size={90}
                    strokeWidth={6}
                    label="Skills"
                  />
                </div>
              </div>
            </div>

            <Heading level={2} className="!mt-8">
              What We Found
            </Heading>
            <Paragraph smallMarginTop={true}>
              Here's the information we were able to extract from your resume:
            </Paragraph>
            <ResumeTable resume={resume} />

            <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
              <h3 className="font-semibold text-gray-900">💡 Tips for Better ATS Results</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">✓</span>
                  <span>Use standard section headings like "Work Experience" and "Education"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">✓</span>
                  <span>Stick to simple, clean formatting without tables or columns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">✓</span>
                  <span>Make sure your name and contact info are clearly visible at the top</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">✓</span>
                  <span>Use standard fonts and avoid images or graphics</span>
                </li>
              </ul>
            </div>

            <div className="pb-24" />
          </section>
        </div>
      </div>
    </main>
  );
}
