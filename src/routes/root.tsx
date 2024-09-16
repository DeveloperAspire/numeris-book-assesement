import Sidebar from "@/components/fragments/Sidebar";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="flex h-full border-2 bg-[#F5F6FA] overflow-hidden">
      <Sidebar />

      <main className="w-full overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
