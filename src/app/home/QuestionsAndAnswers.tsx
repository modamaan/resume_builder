import { Link } from "components/documentation";

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
          single column resume design as opposed to two column design, because
          single column design works best for ATS. <br />{" "}
        </p>
        <p>
          <span className="font-semibold">
            2. ResumeStudio is privacy-focused.
          </span>{" "}
          <br />
          Your resume data remains private and accessible only on your local machine.
          ResumeStudio doesn't require sign up to use the app, and all inputted
          data is stored in your browser that only you have access to.
        </p>
      </>
    ),
  },
  {
    question: "Q3. Is my data safe with ResumeStudio?",
    answer: (
      <p>
        Absolutely. ResumeStudio stores all your resume data locally in your browser's
        storage. We never send your personal information to our servers. This means
        your data is completely private and under your control. You can export your
        resume as a PDF at any time, and your data persists in your browser for future
        editing sessions.
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
    </section>
  );
};
