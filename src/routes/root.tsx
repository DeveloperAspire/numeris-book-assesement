import Sidebar from "@/components/fragments/Sidebar";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="flex h-full border-2 bg-[#F5F6FA]">
      <Sidebar />

      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
