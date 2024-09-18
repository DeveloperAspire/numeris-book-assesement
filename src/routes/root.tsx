import Sidebar from "@/components/fragments/Sidebar";
import { Outlet } from "react-router-dom";
import Invoice from "./invoice";

function Root() {
  return (
    <div className="h-full border-2 bg-[#F5F6FA] overflow-hidden grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />

      <main className="w-full overflow-hidden">
        <Invoice />
      </main>
    </div>
  );
}

export default Root;
