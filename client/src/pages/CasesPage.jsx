import { useMemo } from "react";
import { Link } from "react-router-dom";
import AppShell from "../components/layout/AppShell";
import Card from "../components/ui/Card";
import { getAllCases } from "../utils/caseStorage";

function CasesPage() {
  const cases = useMemo(() => getAllCases(), []);

  return (
    <AppShell title="Cases">
      <Card>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-slate-900">Active Cases</h2>
          <p className="mt-2 text-sm text-slate-600">
            This view shows cases generated from feedback intake, classification,
            severity scoring, and escalation routing.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="px-4 py-3 font-medium">Case ID</th>
                <th className="px-4 py-3 font-medium">Client</th>
                <th className="px-4 py-3 font-medium">Classification</th>
                <th className="px-4 py-3 font-medium">Severity</th>
                <th className="px-4 py-3 font-medium">Owner</th>
                <th className="px-4 py-3 font-medium">Status</th>
              </tr>
            </thead>

            <tbody>
              {cases.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-slate-100 transition hover:bg-slate-50"
                >
                  <td className="px-4 py-4 font-medium text-slate-900">
                    <Link
                      to={`/cases/${item.id}`}
                      className="text-slate-900 underline-offset-4 hover:underline"
                    >
                      {item.id}
                    </Link>
                  </td>
                  <td className="px-4 py-4 text-slate-700">{item.client}</td>
                  <td className="px-4 py-4 text-slate-700">
                    {item.classification}
                  </td>
                  <td className="px-4 py-4 text-slate-700">{item.severity}</td>
                  <td className="px-4 py-4 text-slate-700">{item.owner}</td>
                  <td className="px-4 py-4 text-slate-700">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </AppShell>
  );
}

export default CasesPage;