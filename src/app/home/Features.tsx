import Image from "next/image";
import featureFreeSrc from "public/assets/feature-free.svg";
import featureUSSrc from "public/assets/feature-us.svg";
import featurePrivacySrc from "public/assets/feature-privacy.svg";

const FEATURES = [
  {
    src: featureFreeSrc,
    title: "Professional Quality",
    text: "ResumeStudio is built with the belief that everyone deserves access to a modern, professional resume design that stands out to employers",
  },
  {
    src: featureUSSrc,
    title: "ATS Optimized",
    text: "ResumeStudio has built-in best practices for the U.S. job market and works well with top ATS platforms such as Greenhouse and Lever",
  },
  {
    src: featurePrivacySrc,
    title: "Privacy Focused",
    text: "ResumeStudio stores data locally in your browser so only you have access to your data and with complete control",
  },
];

export const Features = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-primary mb-4 text-4xl font-bold lg:text-5xl">
            Why Choose ResumeStudio?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Everything you need to create a professional, ATS-friendly resume that gets you noticed
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {FEATURES.map(({ src, title, text }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-purple-200 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 p-3 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={src}
                    className="h-full w-full"
                    alt={`${title} icon`}
                  />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-2xl font-bold text-gray-900">
                  {title}
                </h3>

                {/* Description */}
                <p className="leading-relaxed text-gray-600">
                  {text}
                </p>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
