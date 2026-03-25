import AppShell from "../components/layout/AppShell";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

function CaseDetailsPage() {
  return (
    <AppShell title="Case Details">
      <div className="space-y-6">
        <Card>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-red-600">
                Critical Case
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">
                CASE-001 — ABC Holdings
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Client reported a serious payroll issue with formal escalation.
              </p>
            </div>

            <Button variant="secondary">Mark In Review</Button>
          </div>
        </Card>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold text-slate-900">
              Automated Assessment
            </h3>

            <div className="mt-4 space-y-4 text-sm">
              <div>
                <p className="text-slate-500">Classification</p>
                <p className="font-medium text-slate-900">Complaint</p>
              </div>

              <div>
                <p className="text-slate-500">Severity</p>
                <p className="font-medium text-red-600">Critical</p>
              </div>

              <div>
                <p className="text-slate-500">Assigned Team</p>
                <p className="font-medium text-slate-900">SDM + CAT + FAM</p>
              </div>

              <div>
                <p className="text-slate-500">Client Revenue Tier</p>
                <p className="font-medium text-slate-900">High Value</p>
              </div>

              <div>
                <p className="text-slate-500">Client Tenure</p>
                <p className="font-medium text-slate-900">4+ years</p>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-slate-900">
              Triggered Rules
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="rounded-xl border border-red-200 bg-red-50 p-3">
                Payroll risk or payroll error
              </li>
              <li className="rounded-xl border border-red-200 bg-red-50 p-3">
                Formal client escalation
              </li>
              <li className="rounded-xl border border-amber-200 bg-amber-50 p-3">
                High-value long-tenure client
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}

export default CaseDetailsPage;