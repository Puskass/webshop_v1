import { Outlet } from "react-router-dom";
import AdminSidebar from "./sidebar";
import AdminHeader from "./header";
import { useState } from "react";

const AdminLayout = () => {
  const [openSidebar, setOpenSidebar] = useState(false)
  return (
    <div className="flex min-h-screen w-full">
      <AdminSidebar open={openSidebar} setOpen={setOpenSidebar}/>
      <div className="flex flex-1 flex-col">
        <AdminHeader setOpen={setOpenSidebar}/>
        <main className="bg-muted/40 flex-1 flex p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
