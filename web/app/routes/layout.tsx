import { Outlet } from "react-router";
import { Nav } from "@/components/nav";
import { Aside } from "@/components/aside";
import { Login } from "@/components/login";
export default function Layout() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Nav />
      <Aside />
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
      <Login />
    </div>
  );
}
