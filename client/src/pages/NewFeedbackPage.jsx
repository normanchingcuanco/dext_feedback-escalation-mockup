import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppShell from "../components/layout/AppShell";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { createMockCase, getAllCases } from "../utils/caseStorage";

function NewFeedbackPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    clientName: "",
    assignedAccountant: "",
    feedbackType: "Choose feedback type",
    feedbackDetails: "",
    preferredContactBack: "Choose an option",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const allCases = getAllCases();
    const nextCaseNumber = String(allCases.length + 1).padStart(3, "0");
    const nextCaseId = `CASE-${nextCaseNumber}`;

    const classification =
      formData.feedbackType === "Choose feedback type"
        ? "Incident"
        : formData.feedbackType;

    const severity =
      classification === "Complaint"
        ? "Critical"
        : classification === "Incident"
        ? "High"
        : classification === "Near Miss"
        ? "Medium"
        : "Low";

    const owner =
      severity === "Critical"
        ? "SDM + CAT + FAM"
        : severity === "High"
        ? "Direct Manager"
        : "Direct Manager";

    const newCase = {
      id: nextCaseId,
      client: formData.clientName || "New Client",
      classification,
      severity,
      owner,
      status: "New",
      assignedAccountant: formData.assignedAccountant,
      feedbackDetails: formData.feedbackDetails,
      preferredContactBack: formData.preferredContactBack,
    };

    createMockCase(newCase);
    navigate(`/cases/${nextCaseId}`);
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
                name="clientName"
                value={formData.clientName}
                onChange={handleChange}
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
                name="assignedAccountant"
                value={formData.assignedAccountant}
                onChange={handleChange}
                placeholder="Enter accountant name"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Feedback Type
              </label>
              <select
                name="feedbackType"
                value={formData.feedbackType}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-500"
              >
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
                name="feedbackDetails"
                value={formData.feedbackDetails}
                onChange={handleChange}
                placeholder="Describe the experience, issue, or concern"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Preferred Contact Back
              </label>
              <select
                name="preferredContactBack"
                value={formData.preferredContactBack}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-500"
              >
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