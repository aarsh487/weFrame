import React from "react";

const stepsCompleted = ["Profile Setup", "Initial Training", "Legal Documents"];
const stepsRemaining = ["Financial Integration", "Final Review"];

export const AccountProgressCard = () => {
  return (
    <div className="bg-white rounded-xl border border-neutral-200 p-6 flex flex-col gap-6 w-full">
      {/* Title */}
      <h2 className="text-base text-black font-semibold text-center">
        Account Progress
      </h2>

      {/* Progress */}
      <div className="flex justify-center">
        <div className="relative w-[148px] h-[148px]">
          <svg className="w-full h-full" viewBox="0 0 36 36">
            <path
              className="text-gray-200"
              d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="text-[#279DD4]"
              d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeDasharray="85, 100"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold text-gray-800">
            85%
          </span>
        </div>
      </div>

      {/* Steps */}
      <div className="flex flex-col gap-4">
        {/* Completed */}
        <div className="bg-[#F9FAFB] rounded-lg p-4">
          <h3 className="font-semibold text-black text-sm mb-4">
            Steps Completed
          </h3>
          <ul className="space-y-2.5">
            {stepsCompleted.map((step) => (
              <li
                key={step}
                className="flex items-center justify-between text-sm text-gray-600"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                  {step}
                </div>
                <div className="text-emerald-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check-icon lucide-circle-check"
                  >
                    <circle cx="12" cy="12" r="10" fill="currentColor" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Remaining */}
        <div className="bg-[#F9FAFB] rounded-lg p-4">
          <h3 className="font-semibold text-black text-sm mb-4">
            Steps Remaining
          </h3>
          <ul className="space-y-2">
            {stepsRemaining.map((step) => (
              <li
                key={step}
                className="flex items-center justify-between text-sm text-gray-600"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                  {step}
                </div>
                <div className="text-emerald-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check-icon lucide-circle-check"
                  >
                    <circle cx="12" cy="12" r="10" fill="currentColor" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
