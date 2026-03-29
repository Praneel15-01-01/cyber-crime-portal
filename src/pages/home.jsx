function Home() {
  return (
    <div className="page-container">
      <h1>Cyber Crime Reporting Portal</h1>

      <p style={{ maxWidth: "650px", marginBottom: "25px" }}>
        This platform allows citizens to report cybercrime incidents,
        monitor complaint progress, and assess their cybersecurity
        vulnerability using a structured risk analyzer.
      </p>

      <hr />

      <h2 style={{ marginTop: "30px" }}>What You Can Do</h2>

      <ul>
        <li>Submit cybercrime complaints securely</li>
        <li>Track complaint status using your Complaint ID</li>
        <li>Upload supporting evidence</li>
        <li>Evaluate your cybersecurity risk level</li>
      </ul>

      <div className="alert-section">
        <div className="alert-section">
          <h2>Recent Cybercrime Alerts</h2>

          <details className="alert-card">
            <summary className="alert-title">
              Fake Banking SMS Phishing Campaign
            </summary>
            Fraudulent SMS messages impersonating banks are requesting users
            to verify account details through malicious links. Avoid clicking
            unknown verification links received via SMS.
          </details>

          <details className="alert-card">
            <summary className="alert-title">
              Job Offer Scam Targeting Students
            </summary>
            Attackers are sending fake internship offers requesting payment
            for application processing. Legitimate employers never charge
            recruitment fees.
          </details>

          <details className="alert-card">
            <summary className="alert-title">
              WhatsApp Account Takeover Attempts
            </summary>
            Attackers request OTP codes claiming accidental delivery. Never
            share verification codes with anyone.
          </details>
        </div>
      </div>
    </div>
  );
}

export default Home;
