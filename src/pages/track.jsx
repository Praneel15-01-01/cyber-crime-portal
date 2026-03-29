import { useState } from "react";

function Track({ reports }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredReports =
    searchQuery.trim() === ""
      ? []
      : reports.filter((report) =>
        report.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        report.id.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <div className="page-container">
      <h2>Track Complaint Status</h2>

      <p style={{ maxWidth: "600px", marginBottom: "20px" }}>
        Enter your Complaint ID or name to check the current status of
        your reported cybercrime incident.
      </p>

      <input
        type="text"
        placeholder="Enter Complaint ID or Name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #334155",
          width: "100%",
          maxWidth: "400px",
          marginBottom: "25px",
          backgroundColor: "rgba(255,255,255,0.05)",
          color: "#e2e8f0"
        }}
      />

      {searchQuery && filteredReports.length === 0 && (
        <p>No matching complaints found.</p>
      )}

      {filteredReports.map((report) => (
        <div key={report.id} className="report-card">
          <div className="report-header">
            <strong>Complaint ID: {report.id}</strong>

            <span
              className={`status-badge ${report.status === "Pending"
                ? "status-pending"
                : report.status === "Resolved"
                  ? "status-resolved"
                  : "status-investigating"
                }`}
            >
              {report.status}
            </span>
          </div>

          <p><strong>Name:</strong> {report.name}</p>
          <p><strong>Incident:</strong> {report.incident}</p>

          {report.image && (
            <img
              src={report.image}
              alt="Evidence"
              style={{
                marginTop: "15px",
                maxWidth: "220px",
                borderRadius: "6px",
                border: "1px solid #334155"
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default Track;