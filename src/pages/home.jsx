function Home() {
  return (
    <div className="page-container">


      <p style={{ maxWidth: "650px", marginBottom: "25px" }}>
        This platform allows citizens to report cybercrime incidents,
        monitor complaint progress, and assess their cybersecurity
        vulnerability using a structured risk analyzer.
      </p>

      <hr />

      <h2 style={{ marginTop: "30px" }}><strong><u>What You Can Do?</u></strong></h2>

      <ul>
        <li>Submit cybercrime complaints securely</li>
        <li>Track complaint status using your Complaint ID</li>
        <li>Upload supporting evidence</li>
        <li>Evaluate your cybersecurity risk level</li>
      </ul>

      <h2><strong><u>Recent Cybercrime Alerts</u></strong></h2>

      <div className="alerts-container">

        <details className="alert-card">
          <summary>Fake Banking SMS Phishing Campaign</summary>
          <p>
            Fraudulent SMS messages impersonating banks are requesting users to verify
            account details through malicious links. Avoid clicking unknown verification
            links received via SMS.
          </p>
        </details>

        <details className="alert-card">
          <summary>Job Offer Scam Targeting Students</summary>
          <p>
            Attackers are sending fake internship offers requesting payment for
            application processing. Legitimate employers never charge recruitment fees.
          </p>
        </details>

        <details className="alert-card">
          <summary>WhatsApp Account Takeover Attempts</summary>
          <p>
            Attackers request OTP codes claiming accidental delivery. Never share
            verification codes with anyone.
          </p>
        </details>

      </div>
    </div>
  );
}

export default Home;
