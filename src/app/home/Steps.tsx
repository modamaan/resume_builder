const STEPS = [
  { title: "Add a resume pdf", text: "or create from scratch" },
  { title: "Preview design", text: "and make edits" },
  { title: "Download new resume", text: "and apply with confidence" },
];

export const Steps = () => {
  return (
    <section className="mx-auto mt-6 rounded-2xl bg-sky-50 bg-dot px-4 pb-10 pt-8 sm:px-6 md:px-8 lg:mt-2 lg:pb-12 lg:pt-10">
      <h1 className="text-center text-2xl font-bold sm:text-3xl">3 Simple Steps</h1>
      <div className="mt-6 flex justify-center sm:mt-8">
        <dl className="flex w-full max-w-4xl flex-col gap-y-6 sm:gap-y-8 lg:flex-row lg:justify-center lg:gap-x-20 lg:gap-y-10">
          {STEPS.map(({ title, text }, idx) => (
            <div className="relative self-start pl-14 sm:pl-16" key={idx}>
              <dt className="text-base font-bold sm:text-lg">
                <div className="bg-primary absolute left-0 top-0.5 flex h-10 w-10 select-none items-center justify-center rounded-full p-[3.5px] opacity-80 sm:top-1">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                    <div className="text-primary -mt-0.5 text-xl sm:text-2xl">
                      {idx + 1}
                    </div>
                  </div>
                </div>
                {title}
              </dt>
              <dd className="text-sm text-gray-600 sm:text-base">{text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
