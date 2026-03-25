import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppShell from "../components/layout/AppShell";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { getCaseById } from "../utils/caseStorage";

const createInitialFormData = () => ({
  rootCause: "",
  actionsTaken: "",
  clientCommunication: "",
  preventiveMeasures: "",
  closureNotes: "",
});

function CaseDetailsPage() {
  const { caseId } = useParams();

  const selectedCase = getCaseById(caseId);

  const [formData, setFormData] = useState(createInitialFormData);
  const [saveMessage, setSaveMessage] = useState("");
  const [status, setStatus] = useState("New");

  useEffect(() => {
    const currentCase = getCaseById(caseId);

    if (!currentCase) {
      return;
    }

    const storedValue = localStorage.getItem(
      `case-documentation-${currentCase.id}`
    );

    if (storedValue) {
      try {
        const parsedValue = JSON.parse(storedValue);
        setFormData({
          ...createInitialFormData(),
          ...parsedValue,
        });
      } catch (error) {
        setFormData(createInitialFormData());
      }
    } else {
      setFormData(createInitialFormData());
    }

    const storedStatus = localStorage.getItem(`case-status-${currentCase.id}`);

    if (storedStatus) {
      setStatus(storedStatus);
    } else {
      setStatus(currentCase.status);
    }

    setSaveMessage("");
  }, [caseId]);

  useEffect(() => {
    if (!saveMessage) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setSaveMessage("");
    }, 2500);

    return () => window.clearTimeout(timeoutId);
  }, [saveMessage]);

  if (!selectedCase) {
    return (
      <AppShell title="Case Details">
        <Card>
          <h2 className="text-2xl font-bold text-slate-900">Case Not Found</h2>
          <p className="mt-2 text-sm text-slate-600">
            No mock case exists for ID: {caseId}
          </p>
        </Card>
      </AppShell>
    );
  }

  const severityColor =
    selectedCase.severity === "Critical"
      ? "text-red-600"
      : selectedCase.severity === "High"
      ? "text-amber-600"
      : selectedCase.severity === "Medium"
      ? "text-yellow-600"
      : "text-green-600";

  const triggeredRules =
    selectedCase.severity === "Critical"
      ? ["Payroll risk or payroll error", "Formal client escalation"]
      : selectedCase.severity === "High"
      ? ["Significant impact requiring senior visibility"]
      : selectedCase.severity === "Medium"
      ? ["Moderate impact requiring manager attention"]
      : ["Low impact issue with no mandatory escalation override"];

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const payload = {
      ...formData,
      savedAt: new Date().toISOString(),
      caseId: selectedCase.id,
    };

    localStorage.setItem(
      `case-documentation-${selectedCase.id}`,
      JSON.stringify(payload)
    );

    setSaveMessage("Documentation saved locally for this mock case.");
  };

  const handleStatusChange = () => {
    const nextStatus =
      status === "New"
        ? "In Review"
        : status === "In Review"
        ? "Resolved"
        : "Resolved";

    setStatus(nextStatus);
    localStorage.setItem(`case-status-${selectedCase.id}`, nextStatus);
  };

  return (
    <AppShell title="Case Details">
      <div className="space-y-6">
        <Card>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p
                className={`text-sm font-semibold uppercase tracking-wide ${severityColor}`}
              >
                {selectedCase.severity} Case
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">
                {selectedCase.id} — {selectedCase.client}
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Mock case generated from automated feedback classification,
                severity scoring, and escalation routing.
              </p>
            </div>

            <Button variant="secondary" onClick={handleStatusChange}>
              {status === "New"
                ? "Mark In Review"
                : status === "In Review"
                ? "Mark Resolved"
                : "Resolved"}
            </Button>
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
                <p className="font-medium text-slate-900">
                  {selectedCase.classification}
                </p>
              </div>

              <div>
                <p className="text-slate-500">Severity</p>
                <p className={`font-medium ${severityColor}`}>
                  {selectedCase.severity}
                </p>
              </div>

              <div>
                <p className="text-slate-500">Assigned Team</p>
                <p className="font-medium text-slate-900">
                  {selectedCase.owner}
                </p>
              </div>

              <div>
                <p className="text-slate-500">Status</p>
                <p className="font-medium text-slate-900">{status}</p>
              </div>

              <div>
                <p className="text-slate-500">Case ID</p>
                <p className="font-medium text-slate-900">{selectedCase.id}</p>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-slate-900">
              Triggered Rules
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              {triggeredRules.map((rule) => (
                <li
                  key={rule}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-3"
                >
                  {rule}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <Card>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-900">
              Incident Documentation Form
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Pre-filled with the automated intake output. Complete the required
              documentation fields below.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Client</p>
              <p className="mt-1 font-medium text-slate-900">
                {selectedCase.client}
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Case ID</p>
              <p className="mt-1 font-medium text-slate-900">
                {selectedCase.id}
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Classification</p>
              <p className="mt-1 font-medium text-slate-900">
                {selectedCase.classification}
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Severity</p>
              <p className={`mt-1 font-medium ${severityColor}`}>
                {selectedCase.severity}
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Triggered Rules</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
              {triggeredRules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </div>

          <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Root Cause
              </label>
              <textarea
                name="rootCause"
                rows="4"
                value={formData.rootCause}
                onChange={handleChange}
                placeholder="Describe the underlying cause of the issue"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Actions Taken
              </label>
              <textarea
                name="actionsTaken"
                rows="4"
                value={formData.actionsTaken}
                onChange={handleChange}
                placeholder="Describe the immediate actions taken"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Client Communication
              </label>
              <textarea
                name="clientCommunication"
                rows="4"
                value={formData.clientCommunication}
                onChange={handleChange}
                placeholder="Document what was communicated to the client"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Preventive Measures
              </label>
              <textarea
                name="preventiveMeasures"
                rows="4"
                value={formData.preventiveMeasures}
                onChange={handleChange}
                placeholder="List the measures to prevent recurrence"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Closure Notes
              </label>
              <textarea
                name="closureNotes"
                rows="4"
                value={formData.closureNotes}
                onChange={handleChange}
                placeholder="Add final resolution or closure notes"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-500"
              />
            </div>

            <div className="flex items-center justify-between gap-4">
              <p className="text-sm text-emerald-600">{saveMessage}</p>
              <Button type="submit">Save Documentation</Button>
            </div>
          </form>
        </Card>
      </div>
    </AppShell>
  );
}

export default CaseDetailsPage;