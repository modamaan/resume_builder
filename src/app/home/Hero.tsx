import Link from "next/link";
import { FlexboxSpacer } from "components/FlexboxSpacer";
import { AutoTypingResume } from "home/AutoTypingResume";

export const Hero = () => {
  return (
    <section className="lg:flex lg:h-[825px] lg:justify-center">
      <FlexboxSpacer maxWidth={75} minWidth={0} className="hidden lg:block" />
      <div className="mx-auto max-w-xl px-4 pt-8 text-center sm:px-6 lg:mx-0 lg:grow lg:px-0 lg:pt-32 lg:text-left">
        {/* SaaS Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 px-4 py-2 text-sm font-medium text-purple-700">
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>ATS-Optimized Resume Builder</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-primary pb-2 text-4xl font-bold leading-tight lg:text-5xl">
          Create a professional
          <br />
          resume easily
        </h1>

        {/* Subheadline */}
        <p className="mt-4 text-lg leading-relaxed text-gray-600 sm:mt-6 lg:text-2xl">
          With our powerful, ATS-optimized resume builder
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col items-center gap-4 sm:mt-8 lg:mt-12 lg:flex-row lg:items-start">
          <Link href="/resume-import" className="btn-primary group relative overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Create Resume
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>

          <Link
            href="/resume-parser"
            className="inline-flex items-center gap-2 rounded-full border-2 border-gray-300 bg-white px-8 py-3 text-base font-semibold text-gray-700 shadow-sm transition-all hover:border-purple-600 hover:text-purple-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Check ATS Compatibility
          </Link>
        </div>

        {/* Trust Badge */}
        <p className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500 lg:justify-start">
          <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          No sign up required • 100% private
        </p>

        {/* Social Proof */}
        <div className="mt-8 lg:mt-24">
          <p className="text-sm font-medium text-gray-500">Trusted by job seekers at</p>
          <div className="mt-3 flex items-center justify-center gap-6 lg:justify-start">
            <span className="text-lg font-semibold text-gray-400">Google</span>
            <span className="text-lg font-semibold text-gray-400">Meta</span>
            <span className="text-lg font-semibold text-gray-400">Amazon</span>
          </div>
        </div>
      </div>
      <FlexboxSpacer maxWidth={100} minWidth={50} className="hidden lg:block" />
      {/* Hide resume preview on mobile/tablet, show only on desktop */}
      <div className="hidden lg:mt-4 lg:block lg:grow">
        <AutoTypingResume />
      </div>
    </section>
  );
};
