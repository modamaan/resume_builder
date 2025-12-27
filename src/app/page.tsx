import { Hero } from "home/Hero";
import { Steps } from "home/Steps";
import { Features } from "home/Features";
import { Testimonials } from "home/Testimonials";
import { SuggestionForm } from "components/SuggestionForm";
import { QuestionsAndAnswers } from "home/QuestionsAndAnswers";

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-2xl bg-dot px-4 pb-16 text-gray-900 sm:px-6 md:px-8 lg:px-12 lg:pb-32">
      <Hero />
      <Steps />
      <Features />
      <Testimonials />
      <SuggestionForm />
      <QuestionsAndAnswers />
    </main>
  );
}
