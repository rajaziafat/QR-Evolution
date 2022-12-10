import HomePage from "pages/HomePage";
import PrivacyAndPolicy from "pages/PrivacyAndPolicy";
import TermsAndConditions from "pages/TermsAndConditions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyAndPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
    </Router>
  );
}

export default App;
