import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Home";

export default function Root() {
  return (
    <>
      {/* all the other elements */}
      <div id="detail">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}