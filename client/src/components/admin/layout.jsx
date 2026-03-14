import { Outlet } from "react-router-dom";
import AdminSidebar from "./sidebar";
import AdminHeader from "./header";
import { useState } from "react";

const AdminLayout = () => {
  const [openSidebar, setOpenSidebar] = useState(false)
  return (
    <div className="felx min-h-screen w-full">
      <AdminSidebar open={openSidebar} setOpen={setOpenSidebar}/>
      <div className="flex flex-1 flex-col">
        <AdminHeader setOpen={setOpenSidebar}/>
        <main className="flex-1 flex bg-muted/40 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
