import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function AppShell({ children, title = "Dashboard" }) {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1">
          <Topbar title={title} />
          <main className="p-6">{children}</main>
        </div>
      </div>
    </div>
  );
}

export default AppShell;