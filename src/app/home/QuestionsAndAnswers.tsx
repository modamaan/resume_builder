import { Link } from "components/documentation";
import { BuyMeCoffeeButton } from "components/BuyMeCoffeeButton";

const QAS = [
  {
    question:
      "Q1. What is a resume builder? Why is a resume builder better than a resume template?",
    answer: (
      <>
        <p>
          There are two ways to create a resume today. One option is to use a
          resume template, such as an office/google doc, and customize it
          according to your needs. The other option is to use a resume builder,
          an online tool that allows you to input your information and
          automatically generates a resume for you.
        </p>
        <p>
          Using a resume template requires manual formatting work, like copying
          and pasting text sections and adjusting spacing, which can be
          time-consuming and error-prone. It is easy to run into formatting
          issues, such as using different bullet points or font styles after
          copying and pasting. On the other hand, a resume builder like
          ResumeStudio saves time and prevents formatting mistakes by
          automatically formatting the resume. It also offers the convenience of
          easily changing font types or sizes with a simple click. In summary, a
          resume builder is easier to use compared to a resume template.
        </p>
      </>
    ),
  },
  {
    question:
      "Q2. What makes ResumeStudio different from other resume builders?",
    answer: (
      <>
        <p>
          ResumeStudio stands out with distinctive features designed for modern job seekers:
        </p>{" "}
        <p>
          <span className="font-semibold">
            1. ResumeStudio is optimized specifically for the U.S. job market and
            ATS systems.
          </span>
          <br />
          Unlike other resume builders that target a global audience and offer
          many customization options, ResumeStudio intentionally only offers
          options that are aligned with U.S. best practices. For example, it
          excludes the option to add a profile picture to avoid bias and
          discrimination. It offers only the core sections, e.g. profile, work
          experience, education, and skills, while omitting unnecessary sections
          like references. Additionally, ResumeStudio uses a top-down
          single-column resume design, which is recommended by ATS and
          recruitment experts for maximum readability and ATS compatibility.
        </p>
        <p>
          <span className="font-semibold">
            2. ResumeStudio is completely free with no sign-up required and 100% private.
          </span>
          <br />
          Your resume data never leaves your browser and is stored locally on your device.
          We don't collect any personal information or track what you build.
        </p>
      </>
    ),
  },
  {
    question: "Q3. Who created ResumeStudio?",
    answer: (
      <p>
        ResumeStudio is built and maintained by developers who believe everyone deserves
        access to professional resume tools. If you find this tool helpful, consider
        supporting its development!
      </p>
    ),
  },
];

export const QuestionsAndAnswers = () => {
  return (
    <section className="mx-auto max-w-3xl divide-y divide-gray-300 px-2 sm:px-4 lg:mt-4 lg:px-2">
      <h2 className="text-center text-2xl font-bold sm:text-3xl">Questions & Answers</h2>
      <div className="mt-4 divide-y divide-gray-300 sm:mt-6">
        {QAS.map(({ question, answer }) => (
          <div key={question} className="py-4 sm:py-6">
            <h3 className="text-sm font-semibold leading-7 sm:text-base">{question}</h3>
            <div className="mt-2 grid gap-2 text-sm leading-7 text-gray-600 sm:mt-3 sm:text-base">
              {answer}
            </div>
          </div>
        ))}
      </div>

      {/* Support Section */}
      <div className="mt-8 rounded-xl border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50 p-6 text-center sm:p-8">
        <h3 className="mb-3 text-xl font-bold text-gray-900 sm:text-2xl">
          ☕ Enjoying ResumeStudio?
        </h3>
        <p className="mb-6 text-sm text-gray-700 sm:text-base">
          ResumeStudio is free and always will be. If you find it helpful,
          consider buying me a coffee to support development!
        </p>
        <div className="flex justify-center">
          <BuyMeCoffeeButton username={process.env.NEXT_PUBLIC_BMC_USERNAME || ""} />
        </div>
        <p className="mt-4 text-xs text-gray-500">
          Your support helps keep ResumeStudio free for everyone 💜
        </p>
      </div>
    </section>
  );
};
