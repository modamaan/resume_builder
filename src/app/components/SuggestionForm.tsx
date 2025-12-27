"use client";
import { useState } from "react";

export const SuggestionForm = () => {
    const [formData, setFormData] = useState({ name: "", suggestion: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Get admin email from environment or use default
        const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL || "admin@resumestudio.com";

        // Create email subject and body
        const subject = encodeURIComponent(`Suggestion from ${formData.name}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\n\nSuggestion:\n${formData.suggestion}`
        );

        // Open Gmail with pre-filled information
        window.open(
            `https://mail.google.com/mail/?view=cm&fs=1&to=${adminEmail}&su=${subject}&body=${body}`,
            "_blank"
        );

        // Clear form
        setFormData({ name: "", suggestion: "" });
    };

    return (
        <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="rounded-2xl border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50 p-6 sm:p-8">
                <div className="text-center">
                    <h2 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">
                        💡 Share Your Suggestions
                    </h2>
                    <p className="mb-6 text-sm text-gray-600 sm:text-base">
                        Help us improve ResumeStudio! Your feedback matters.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Input */}
                    <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="John Doe"
                        />
                    </div>

                    {/* Suggestion Textarea */}
                    <div>
                        <label htmlFor="suggestion" className="mb-2 block text-sm font-medium text-gray-700">
                            Your Suggestion
                        </label>
                        <textarea
                            id="suggestion"
                            required
                            rows={4}
                            value={formData.suggestion}
                            onChange={(e) => setFormData({ ...formData, suggestion: e.target.value })}
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="I'd love to see..."
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 font-semibold text-white shadow-md transition-all hover:scale-[1.02] hover:shadow-lg"
                    >
                        Submit via Gmail
                    </button>

                    {/* Info Text */}
                    <p className="text-center text-xs text-gray-500">
                        Clicking submit will open Gmail with your suggestion pre-filled
                    </p>
                </form>
            </div>
        </section>
    );
};
