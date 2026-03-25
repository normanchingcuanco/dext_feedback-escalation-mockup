import { useNavigate } from "react-router-dom";
import AppShell from "../components/layout/AppShell";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

function NewFeedbackPage() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("SUBMIT CLICKED");
    navigate("/intake-result");
  };

  return (
    <AppShell title="Mock Microsoft Form Intake">
      <div className="max-w-4xl">
        <Card>
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              Microsoft Forms Mockup
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              Customer Feedback Submission
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              This simulates the customer-facing feedback form linked to an
              assigned accountant.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Client Name
              </label>
              <input
                type="text"
                placeholder="Enter client name"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Assigned Accountant
              </label>
              <input
                type="text"
                placeholder="Enter accountant name"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Feedback Type
              </label>
              <select className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-500">
                <option>Choose feedback type</option>
                <option>Compliment</option>
                <option>Near Miss</option>
                <option>Incident</option>
                <option>Complaint</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Feedback Details
              </label>
              <textarea
                rows="6"
                placeholder="Describe the experience, issue, or concern"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Preferred Contact Back
              </label>
              <select className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-500">
                <option>Choose an option</option>
                <option>Email</option>
                <option>Phone</option>
                <option>No callback needed</option>
              </select>
            </div>

            <div className="flex justify-end">
              <Button type="submit">Submit Feedback</Button>
            </div>
          </form>
        </Card>
      </div>
    </AppShell>
  );
}

export default NewFeedbackPage;