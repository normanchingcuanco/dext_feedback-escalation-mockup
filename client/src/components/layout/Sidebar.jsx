import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Dexterous</h2>
        <p className="text-sm text-slate-300">Feedback Escalation</p>
      </div>

      <nav className="space-y-3">
        <Link to="/" className="block rounded-lg px-3 py-2 hover:bg-slate-800">
          Dashboard
        </Link>

        <Link
          to="/new-feedback"
          className="block rounded-lg px-3 py-2 hover:bg-slate-800"
        >
          Mock MS Form
        </Link>

        <Link
          to="/cases"
          className="block rounded-lg px-3 py-2 hover:bg-slate-800"
        >
          Cases
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;