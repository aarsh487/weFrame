"use client";

import Image from "next/image";
import React from "react";

export const Insights = () => {
  return (
    <div className="max-w-md mx-auto ">
      <div className="p-6 bg-white border border-neutral-200 rounded-2xl space-y-6">
        {/* Key Insights & Feedback */}
        <h2 className="text-base font-semibold text-black">
          Key Insights & Feedback
        </h2>
        <section className="space-y-6">
          <div className="flex items-center justify-between pb-3">
            <div>
              <div className="text-4xl font-bold text-gray-900">10%</div>
              <p className="mt-0.5 text-sm text-gray-500">Sales Growth</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <Image
                alt="Acme Group logo"
                src="/images/image.svg"
                height={36}
                width={36}
              />
              <span className="text-sm bg-[#BAE9FF]/50 text-[#279DD4] px-3 py-0.5 rounded-full">
                Top Performer
              </span>
            </div>
          </div>

          <div className="bg-gray-100 py-4 px-2 rounded-xl">
            <p className="text-sm font-semibold text-[#1C222B] mb-1.5">
              Feedback
            </p>
            <div className="flex gap-2">
              <span className="w-[10px] h-[10px] mt-1 rounded-full bg-[#D9D9D9]" />
              <p className="text-xs text-[#455468]">
                Franchisees are requesting more detailed training materials.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Prospect Leads */}
      <div className="mt-5 p-6 bg-white border border-neutral-200 rounded-2xl space-y-6">
        <section className="space-y-5">
          <h2 className="text-base text-black font-semibold">Prospect Leads</h2>

          <ul className="space-y-5">
            {[
              {
                name: "Wade Warren",
                stage: "Initial Inquiry",
                image: "/images/Avatar7.svg",
              },
              {
                name: "Ava Wright",
                stage: "Initial Inquiry",
                image: "/images/Avatar8.svg",
              },
              {
                name: "Cody Fisher",
                stage: "Initial Inquiry",
                image: "/images/Avatar9.svg",
              },
            ].map((lead, idx) => (
              <li key={idx} className="flex items-center justify-between px-4 py-2.5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={lead.image}
                      alt={lead.name}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm font-medium text-gray-800">
                    {lead.name}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Stage: <span className="text-[#1C222BE5]">{lead.stage}</span></p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};
