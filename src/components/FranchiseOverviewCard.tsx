import Image from "next/image";
import { TrendingUp } from "lucide-react";

export const FranchiseOverviewCard = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-4 bg-white border border-[#EAECF0] rounded-xl p-6 w-full">
        {/* Total Franchisees Onboard */}
        <div>
          <h2 className="text-base font-semibold text-gray-900">
            Total Franchisees Onboard
          </h2>
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-4">
              <h1 className="text-[40px] text-black font-bold">14</h1>
              <div className="flex items-center">
                <div className="flex items-center gap-1 font-[500px] text-[#079455] text-xs outline-2 outline-[#079455] px-4 py-0.5 rounded-full">
                  <TrendingUp size={14} />
                  7.4%
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-[-8px]">
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src={`/images/Avatar${i + 2}.svg`}
                  alt={`avatar-${i}`}
                  width={30}
                  height={30}
                  className="rounded-full border-2 border-white"
                />
              ))}
              <span className="text-xs text-gray-500 bg-gray-100 rounded-full px-1.5 py-0.5 ml-1">
                +7
              </span>
            </div>
          </div>

          {/* Progress Bars */}
          <div className="mt-6 flex space-x-2">
            <div className="h-3 bg-[#1F7EAA] rounded-sm w-[29.59%]" />
            <div className="h-3 bg-[#2FBDFF] rounded-sm w-[22.49%]" />
            <div className="h-3 bg-[#97DEFF] rounded-sm w-[43.20%]" />
          </div>

          {/* Stages */}
          <div className="mt-6 space-y-4 text-sm text-gray-700">
            <div className="flex justify-between">
              <div className="flex gap-3 items-center">
                <span className="w-[10px] h-[10px] rounded-sm bg-[#1F7EAA]" />
                Stage 1 (Initial Inquiry)
              </div>
              <span className="font-semibold text-[18px]">02</span>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-3 items-center">
                <span className="w-[10px] h-[10px] rounded-sm bg-[#2FBDFF]" />
                Stage 2 (Document Submission)
              </div>
              <span className="font-semibold text-[18px]">07</span>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-3 items-center">
                <span className="w-[10px] h-[10px] rounded-sm bg-[#97DEFF]" />
                Stage 3 (Training)
              </div>
              <span className="font-semibold text-[18px]">05</span>
            </div>
          </div>
        </div>
      </div>

      {/* Financial Wellbeing */}
      <div className="mt-5 flex flex-col p-6 gap-4 bg-white border border-neutral-200 rounded-xl w-full">
        <h2 className="text-base font-semibold text-gray-900">
          Financial Wellbeing
        </h2>
        <div className="flex items-center justify-between pb-3">
          <div>
            <p className="text-3xl font-semibold text-black">20</p>
            <p className="text-sm text-[#475467]">Total Franchisees</p>
          </div>

          <div className="flex items-center gap-1 font-[500px] text-[#079455] text-xs outline-2 outline-[#079455] px-3 py-0.5 rounded-full">
            <TrendingUp size={14} />
            2.1%
          </div>
        </div>

        {/* Target vs Current */}
        <div className="mt-5 grid grid-cols-2 gap-4 text-sm text-gray-700">
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <p className="text-xs text-gray-500">Target</p>
            <p className="mt-4 text-xl font-semibold">$500,000</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <p className="text-xs text-gray-500">Current</p>
            <p className="mt-4 font-semibold text-xl">$450,000</p>
          </div>
        </div>
      </div>    
    </div>
  );
};
