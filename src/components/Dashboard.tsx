import React from "react";
import { AccountProgressCard } from "./AccountProgressCard";
import { FranchiseOverviewCard } from "./FranchiseOverviewCard";
import { Insights } from "./Insights";
import PendingQuestions from "./PendingQuestions";
import ChatWelcome from "./Chat";

const DashboardOverview = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-6 px-8">
        <AccountProgressCard />
        <FranchiseOverviewCard />
        <Insights />
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 border border-neutral-300">
        <PendingQuestions />
        <ChatWelcome />
      </div>
    </>
  );
};

export default DashboardOverview;
