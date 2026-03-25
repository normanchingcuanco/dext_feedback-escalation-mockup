import { useNavigate } from "react-router-dom";
import AppShell from "../components/layout/AppShell";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

function IntakeResultPage() {
  const navigate = useNavigate();

  return (
    <AppShell title="Automated Intake Result">
      <div className="space-y-6">
        <Card>
          <div className="mb-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">
              Automation Output
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              Feedback Successfully Processed
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              This simulates what happens after a Microsoft Forms submission is
              received and processed automatically.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Classification</p>
              <p className="mt-1 text-lg font-semibold text-slate-900">
                Complaint
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Severity</p>
              <p className="mt-1 text-lg font-semibold text-red-600">
                Critical
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Assigned Team</p>
              <p className="mt-1 text-lg font-semibold text-slate-900">
                SDM + CAT + FAM
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Case ID</p>
              <p className="mt-1 text-lg font-semibold text-slate-900">
                CASE-001
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-slate-900">
            Triggered Escalation Rules
          </h3>

          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            <li className="rounded-xl border border-red-200 bg-red-50 p-3">
              Payroll risk or payroll error
            </li>
            <li className="rounded-xl border border-red-200 bg-red-50 p-3">
              Formal client escalation
            </li>
          </ul>

          <div className="mt-6 flex justify-end">
            <Button onClick={() => navigate("/cases/CASE-001")}>
              View Case Record
            </Button>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}

export default IntakeResultPage;