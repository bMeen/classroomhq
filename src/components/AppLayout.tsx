//import { Sidebar } from "lucide-react";
import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";
//import Logo from "./Logo";

function AppLayout() {
  return (
    <div className="grid h-screen w-screen grid-rows-[auto_auto_1fr] md:grid-cols-[14rem_1fr] md:grid-rows-[auto_1fr] lg:grid-cols-[16rem_1fr]">
      <Sidebar />
      <Header />
      <Main />
    </div>
  );
}

export default AppLayout;
