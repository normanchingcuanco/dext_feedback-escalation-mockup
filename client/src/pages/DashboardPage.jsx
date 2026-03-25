import { useMemo } from "react";
import AppShell from "../components/layout/AppShell";
import Card from "../components/ui/Card";
import { getAllCases } from "../utils/caseStorage";

function DashboardPage() {
  const cases = useMemo(() => getAllCases(), []);

  const totalCases = cases.length;

  const newCases = cases.filter((c) => c.status === "New").length;
  const inReviewCases = cases.filter((c) => c.status === "In Review").length;
  const resolvedCases = cases.filter((c) => c.status === "Resolved").length;

  const highCriticalCases = cases.filter(
    (c) => c.severity === "High" || c.severity === "Critical"
  ).length;

  return (
    <AppShell title="Dashboard">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card>
          <p className="text-sm text-slate-500">Total Cases</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            {totalCases}
          </h2>
        </Card>

        <Card>
          <p className="text-sm text-slate-500">High / Critical</p>
          <h2 className="mt-2 text-3xl font-bold text-red-600">
            {highCriticalCases}
          </h2>
        </Card>

        <Card>
          <p className="text-sm text-slate-500">Resolved</p>
          <h2 className="mt-2 text-3xl font-bold text-green-600">
            {resolvedCases}
          </h2>
        </Card>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card>
          <p className="text-sm text-slate-500">New</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            {newCases}
          </h2>
        </Card>

        <Card>
          <p className="text-sm text-slate-500">In Review</p>
          <h2 className="mt-2 text-2xl font-bold text-amber-600">
            {inReviewCases}
          </h2>
        </Card>

        <Card>
          <p className="text-sm text-slate-500">Resolved</p>
          <h2 className="mt-2 text-2xl font-bold text-green-600">
            {resolvedCases}
          </h2>
        </Card>
      </div>

      <div className="mt-6">
        <Card>
          <h3 className="text-lg font-semibold text-slate-900">
            Recent Feedback Activity
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            This reflects real mock case data including classification,
            severity, and lifecycle status.
          </p>
        </Card>
      </div>
    </AppShell>
  );
}

export default DashboardPage;