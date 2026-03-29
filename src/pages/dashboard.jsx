function Dashboard({ reports, setReports }) {

  const updateStatus = (id, newStatus) => {
    const updatedReports = reports.map((report) =>
      report.id === id
        ? { ...report, status: newStatus }
        : report
    );

    setReports(updatedReports);
  };

  const deleteReport = (id) => {
    const confirmDelete = window.confirm(
      "This action cannot be undone. Delete this complaint permanently?"
    );

    if (!confirmDelete) return;

    const updatedReports = reports.filter(
      (report) => report.id !== id
    );

    setReports(updatedReports);
  };

  const total = reports.length;
  const pending = reports.filter(r => r.status === "Pending").length;
  const investigating = reports.filter(r => r.status === "Investigating").length;
  const resolved = reports.filter(r => r.status === "Resolved").length;

  return (
    <>
      <div className="stats-grid">
        <div className="stat-card stat-total">
          <h4>Total Complaints</h4>
          <div className="stat-number">{total}</div>
        </div>

        <div className="stat-card stat-pending">
          <h4>Pending</h4>
          <div className="stat-number">{pending}</div>
        </div>

        <div className="stat-card stat-investigating">
          <h4>Investigating</h4>
          <div className="stat-number">{investigating}</div>
        </div>

        <div className="stat-card stat-resolved">
          <h4>Resolved</h4>
          <div className="stat-number">{resolved}</div>
        </div>
      </div>

      {reports.map((report) => (
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

          {report.image && (
            <img
              src={report.image}
              alt="Evidence"
              style={{
                marginTop: "12px",
                maxWidth: "220px",
                borderRadius: "6px",
                border: "1px solid #334155"
              }}
            />
          )}

          <div className="report-actions">

            {report.status === "Pending" && (
              <>
                <button
                  onClick={() =>
                    updateStatus(report.id, "Investigating")
                  }
                >
                  Mark Investigating
                </button>

                <button
                  onClick={() =>
                    updateStatus(report.id, "Resolved")
                  }
                >
                  Mark Resolved
                </button>
              </>
            )}

            {report.status === "Investigating" && (
              <button
                onClick={() =>
                  updateStatus(report.id, "Resolved")
                }
              >
                Mark Resolved
              </button>
            )}

            {report.status === "Resolved" && (
              <button disabled>
                Resolved ✓
              </button>
            )}

            <button
              onClick={() => deleteReport(report.id)}
              className="delete-btn"
            >
              Delete
            </button>

          </div>

        </div>
      ))}
    </>
  );
}

export default Dashboard;