import { Resume } from "lib/redux/types";

/**
 * Calculate ATS score based on extracted resume data
 * Returns a score from 0-100 based on completeness of extracted information
 */
export const calculateATSScore = (resume: Resume): {
    overall: number;
    breakdown: {
        contactInfo: number;
        workExperience: number;
        education: number;
        skills: number;
    };
} => {
    // Contact Info Score (25 points)
    let contactScore = 0;
    if (resume.profile.name) contactScore += 10;
    if (resume.profile.email) contactScore += 8;
    if (resume.profile.phone) contactScore += 4;
    if (resume.profile.location) contactScore += 3;

    // Work Experience Score (35 points)
    let workScore = 0;
    const workExperiences = resume.workExperiences.filter(
        (exp) => exp.company || exp.jobTitle
    );
    if (workExperiences.length > 0) {
        workScore = Math.min(35, workExperiences.length * 12);
    }

    // Education Score (25 points)
    let educationScore = 0;
    const educations = resume.educations.filter((edu) => edu.school || edu.degree);
    if (educations.length > 0) {
        educationScore = Math.min(25, educations.length * 13);
    }

    // Skills Score (15 points)
    let skillsScore = 0;
    const hasSkills =
        resume.skills.descriptions.some((desc) => desc.trim()) ||
        resume.skills.featuredSkills.some((skill) => skill.skill.trim());
    if (hasSkills) skillsScore = 15;

    const overall = contactScore + workScore + educationScore + skillsScore;

    return {
        overall: Math.round(overall),
        breakdown: {
            contactInfo: Math.round((contactScore / 25) * 100),
            workExperience: Math.round((workScore / 35) * 100),
            education: Math.round((educationScore / 25) * 100),
            skills: Math.round((skillsScore / 15) * 100),
        },
    };
};

/**
 * Get color class based on score
 */
export const getScoreColor = (score: number): string => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    if (score >= 40) return "text-orange-600";
    return "text-red-600";
};

/**
 * Get background color class based on score
 */
export const getScoreBgColor = (score: number): string => {
    if (score >= 80) return "from-green-500 to-emerald-500";
    if (score >= 60) return "from-yellow-500 to-amber-500";
    if (score >= 40) return "from-orange-500 to-red-500";
    return "from-red-500 to-rose-600";
};

/**
 * Get score label
 */
export const getScoreLabel = (score: number): string => {
    if (score >= 80) return "Excellent";
    if (score >= 60) return "Good";
    if (score >= 40) return "Fair";
    return "Needs Work";
};
