"use client";

// Track custom events for user actions
export const trackEvent = (
    eventName: string,
    eventParams?: Record<string, any>
) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", eventName, eventParams);
    }
};

// Predefined events for ResumeStudio
export const analytics = {
    // Resume Builder Events
    resumeCreated: () => trackEvent("resume_created"),
    resumeDownloaded: () => trackEvent("resume_downloaded"),
    resumeImported: () => trackEvent("resume_imported"),

    // ATS Checker Events
    atsCheckStarted: () => trackEvent("ats_check_started"),
    atsCheckCompleted: (score: number) =>
        trackEvent("ats_check_completed", { score }),

    // Form Events
    profileFormCompleted: () => trackEvent("profile_form_completed"),
    workExperienceAdded: () => trackEvent("work_experience_added"),
    educationAdded: () => trackEvent("education_added"),
    skillsAdded: () => trackEvent("skills_added"),

    // Theme Events
    themeChanged: (theme: string) => trackEvent("theme_changed", { theme }),

    // Navigation Events
    pageView: (page: string) => trackEvent("page_view", { page }),
};
