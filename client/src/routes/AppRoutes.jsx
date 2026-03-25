import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import NewFeedbackPage from "../pages/NewFeedbackPage";
import CasesPage from "../pages/CasesPage";
import IntakeResultPage from "../pages/IntakeResultPage";
import CaseDetailsPage from "../pages/CaseDetailsPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/new-feedback" element={<NewFeedbackPage />} />
        <Route path="/cases" element={<CasesPage />} />
        <Route path="/cases/:caseId" element={<CaseDetailsPage />} />
        <Route path="/intake-result" element={<IntakeResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;