import "globals.css";
import { TopNavBar } from "components/TopNavBar";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "components/GoogleAnalytics";
import { FloatingBuyMeCoffee } from "components/BuyMeCoffeeButton";

export const metadata = {
  title: "ResumeStudio - Professional Resume Builder & ATS Parser",
  description:
    "ResumeStudio is a powerful resume builder that helps you create modern, professional resumes optimized for ATS systems. Build your perfect resume in minutes with our intuitive builder and verify ATS compatibility with our advanced parser.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TopNavBar />
        {children}
        <Analytics />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        {/* Floating Buy Me a Coffee Button */}
        <FloatingBuyMeCoffee username={process.env.NEXT_PUBLIC_BMC_USERNAME || "yourusername"} />
      </body>
    </html>
  );
}
