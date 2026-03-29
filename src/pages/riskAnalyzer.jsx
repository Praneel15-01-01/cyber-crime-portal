import { useState } from "react";

function RiskAnalyzer() {
  const initialState = {
    passwordReuse: 1,
    unknownLinks: 1,
    publicWifi: 1,
    twoFA: 1,
    updates: 1,
    socialSharing: 1
  };

  const [answers, setAnswers] = useState(initialState);
  const [result, setResult] = useState(null);
  const [riskClass, setRiskClass] = useState("");

  const handleChange = (question, value) => {
    setAnswers({
      ...answers,
      [question]: Number(value)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const adjustedTwoFA = 11 - answers.twoFA;
    const adjustedUpdates = 11 - answers.updates;

    const totalScore =
      answers.passwordReuse +
      answers.unknownLinks +
      answers.publicWifi +
      adjustedTwoFA +
      adjustedUpdates +
      answers.socialSharing;

    const averageScore = totalScore / 6;

    if (averageScore < 3) {
      setResult(
        `Low Risk (Score: ${averageScore.toFixed(
          2
        )}) — Your cybersecurity habits are strong.`
      );
      setRiskClass("risk-low");
    } else if (averageScore < 7) {
      setResult(
        `Moderate Risk (Score: ${averageScore.toFixed(
          2
        )}) — Some improvements recommended.`
      );
      setRiskClass("risk-medium");
    } else {
      setResult(
        `High Risk (Score: ${averageScore.toFixed(
          2
        )}) — Immediate improvements suggested.`
      );
      setRiskClass("risk-high");
    }
  };

  const handleReset = () => {
    setAnswers(initialState);
    setResult(null);
    setRiskClass("");
  };

  const questions = {
    passwordReuse:
      "How often do you reuse the same password across websites?",
    unknownLinks:
      "How often do you click links from unknown emails or messages?",
    publicWifi:
      "How often do you use public Wi-Fi for sensitive activity?",
    twoFA:
      "How often do you enable two-factor authentication?",
    updates:
      "How often do you update your device software?",
    socialSharing:
      "How often do you share personal information publicly online?"
  };

  return (
    <div className="page-container">
      <h2>Cybersecurity Risk Analyzer</h2>

      <p style={{ maxWidth: "650px", marginBottom: "25px" }}>
        Rate your online behaviour from 1 (Never) to 10 (Always). Your
        responses estimate exposure to common cybersecurity risks.
      </p>

      <form onSubmit={handleSubmit} className="form-card">
        {Object.entries(questions).map(([key, question]) => (
          <div className="form-group" key={key}>
            <label>{question}</label>

            <input
              type="range"
              min="1"
              max="10"
              value={answers[key]}
              onChange={(e) => handleChange(key, e.target.value)}
            />

            <small>
              1 = Never &nbsp;&nbsp;|&nbsp;&nbsp;
              10 = Always &nbsp;&nbsp;|&nbsp;&nbsp;
              Selected: {answers[key]}
            </small>
          </div>
        ))}

        <div style={{ marginTop: "10px" }}>
          <button type="submit">Calculate Risk Level</button>
          <button
            type="button"
            onClick={handleReset}
            style={{ marginLeft: "10px", backgroundColor: "#475569" }}
          >
            Reset
          </button>
        </div>
      </form>

      {result && (
        <div className={`risk-result ${riskClass}`}>
          {result}
        </div>
      )}
    </div>
  );
}

export default RiskAnalyzer;