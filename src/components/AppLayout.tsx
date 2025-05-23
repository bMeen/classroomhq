import Header from "./Header";
import Logo from "./Logo";
import Main from "./Main";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="grid h-screen w-screen grid-rows-[auto_auto_auto_1fr] md:grid-cols-[14rem_1fr] md:grid-rows-[auto_auto_auto_1fr] lg:grid-cols-[16rem_1fr]">
      <Logo />
      <Sidebar />
      <Header />
      <Main />
    </div>
  );
}

export default AppLayout;
