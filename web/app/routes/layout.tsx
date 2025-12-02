import { Outlet } from "react-router";
import { Nav } from "@/components/nav";
import { Aside } from "@/components/aside";
import { Login } from "@/components/login";
export default function Layout() {
  return (
    <div className="flex">
      <Nav />
      <Aside />
      <Outlet />
      <Login />
    </div>
  );
}
