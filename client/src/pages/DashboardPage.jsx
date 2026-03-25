import AppShell from "../components/layout/AppShell";
import Card from "../components/ui/Card";

function DashboardPage() {
  return (
    <AppShell title="Dashboard">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card>
          <p className="text-sm text-slate-500">Open Cases</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">12</h2>
        </Card>

        <Card>
          <p className="text-sm text-slate-500">High / Critical</p>
          <h2 className="mt-2 text-3xl font-bold text-red-600">5</h2>
        </Card>

        <Card>
          <p className="text-sm text-slate-500">Resolved Today</p>
          <h2 className="mt-2 text-3xl font-bold text-green-600">8</h2>
        </Card>
      </div>

      <div className="mt-6">
        <Card>
          <h3 className="text-lg font-semibold text-slate-900">
            Recent Feedback Activity
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            This will show latest feedback entries, classification, severity,
            and assigned teams.
          </p>
        </Card>
      </div>
    </AppShell>
  );
}

export default DashboardPage;