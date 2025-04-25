import DashboardOverview from "@/components/Dashboard";
import { Sidebar } from "@/components/Sidebar";
import { Topbar } from "@/components/Topbar";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="flex">
        <Sidebar />
        <div>
          <Topbar />
          <DashboardOverview />
        </div>
      </div>
    </div>
  );
}
