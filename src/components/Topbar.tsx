import { Settings } from "lucide-react";
import Image from "next/image";
import React from "react";

export const Topbar = () => {
  return (
    <div className="bg-white flex gap-4 justify-end px-5 py-3">
      <div>
        <Settings size={15} color="#5E718D" className="cursor-pointer mt-2" />
      </div>
      <div>
        <Image
          alt="User avatar"
          src="/images/Avatar.svg"
          width={32}
          height={32}
          className="rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
};
