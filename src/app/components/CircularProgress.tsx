"use client";

interface CircularProgressProps {
    percentage: number;
    size?: number;
    strokeWidth?: number;
    label?: string;
    showPercentage?: boolean;
}

export const CircularProgress = ({
    percentage,
    size = 120,
    strokeWidth = 8,
    label,
    showPercentage = true,
}: CircularProgressProps) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (percentage / 100) * circumference;

    // Color based on percentage
    const getColor = () => {
        if (percentage >= 80) return "#10b981"; // green
        if (percentage >= 60) return "#eab308"; // yellow
        if (percentage >= 40) return "#f97316"; // orange
        return "#ef4444"; // red
    };

    return (
        <div className="flex flex-col items-center gap-2">
            <div className="relative" style={{ width: size, height: size }}>
                <svg className="rotate-[-90deg]" width={size} height={size}>
                    {/* Background circle */}
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        stroke="#e5e7eb"
                        strokeWidth={strokeWidth}
                        fill="none"
                    />
                    {/* Progress circle */}
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        stroke={getColor()}
                        strokeWidth={strokeWidth}
                        fill="none"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        className="transition-all duration-1000 ease-out"
                    />
                </svg>
                {/* Percentage text */}
                {showPercentage && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold" style={{ color: getColor() }}>
                            {percentage}%
                        </span>
                    </div>
                )}
            </div>
            {label && (
                <span className="text-sm font-medium text-gray-700">{label}</span>
            )}
        </div>
    );
};
