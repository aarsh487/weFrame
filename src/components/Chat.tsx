"use client";

import { ChevronUp, SendHorizontal } from "lucide-react";
import Image from "next/image";

export default function ChatWelcome() {
  return (
    <div className="relative col-span-2 flex flex-col items-center text-center px-8 py-18 bg-white">
      <div className="absolute right-4 top-4  bg-blue-100 hover:bg-blue-200 text-blue-500 p-1 rounded-full">
        <ChevronUp className="w-4 h-4" />
      </div>
      <div className="relative mb-5 w-16 aspect-video">
        <Image alt="logo" src="/images/logo.svg" fill className="object-contain"/>
      </div>
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">
        Welcome to the AI Chat Assistant
      </h1>
      <div className="w-full max-w-full flex items-center border border-gray-300 rounded-lg px-4 py-3 bg-gray-50">
        <input
          type="text"
          placeholder="Ask your question here.."
          className="flex-grow bg-transparent outline-none text-base text-neutral-600"
        />
        <button className="text-gray-500 hover:text-blue-600">
          <SendHorizontal size={18} />
        </button>
      </div>
    </div>
  );
}
