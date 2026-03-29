import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/navbar";
import Home from "./pages/home";
import Report from "./pages/report";
import Track from "./pages/Track";
import RiskAnalyzer from "./pages/riskAnalyzer";
import Dashboard from "./pages/dashboard";

function App() {
  const [reports, setReports] = useState(() => {
    const saved = localStorage.getItem("reports");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("reports", JSON.stringify(reports));
  }, [reports]);

  return (
    <Router>
      <>
        {/* HEADER */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "30px",
            paddingBottom: "20px",
            borderBottom: "1px solid #444",
          }}
        >
          <h1 style={{ margin: 0 }}>
            Cyber Crime Reporting Portal
          </h1>

          <div style={{ marginTop: "15px" }}>
            <Navbar />
          </div>
        </div>

        
        <div
          style={{
            maxWidth: "900px",
            margin: "30px auto",
            padding: "0 20px",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/report"
              element={
                <Report reports={reports} setReports={setReports} />
              }
            />
            <Route
              path="/track"
              element={<Track reports={reports} />}
            />
            <Route
              path="/risk"
              element={<RiskAnalyzer />}
            />
            <Route
              path="/dashboard"
              element={
                <Dashboard reports={reports} setReports={setReports} />
              }
            />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;