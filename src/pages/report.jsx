import { useState } from "react";

function Report({ reports, setReports }) {

  const [name, setName] = useState("");
  const [incident, setIncident] = useState("");
  const [image, setImage] = useState(null);
  const [generatedID, setGeneratedID] = useState(null);

  const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Only image files are allowed.");
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      alert("Image size must be less than 2MB.");
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const generateComplaintID = () => {
    return "CC" + Date.now();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = generateComplaintID();

    const newReport = {
      id,
      name,
      incident,
      image,
      status: "Pending"
    };

    setReports([...reports, newReport]);

    setGeneratedID(id);

    setName("");
    setIncident("");
    setImage(null);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedID);
    alert("Complaint ID copied to clipboard!");
  };

  return (
    <div className="page-container">

      <h2>Report Cyber Crime</h2>

      <p style={{ marginBottom: "30px", maxWidth: "600px" }}>
        Use this form to report suspected cyber crimes such as phishing,
        identity theft, online fraud, harassment, or unauthorized account
        access. Supporting evidence may be uploaded if available.
      </p>

      <div className="form-card">
        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Incident Details</label>
            <textarea
              placeholder="Provide a detailed description of the incident..."
              value={incident}
              onChange={(e) => setIncident(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Upload Evidence (Optional)</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>

          <button type="submit">Submit Report</button>

        </form>
      </div>

      {generatedID && (
        <div className="complaint-id-box">

          <strong>Your Complaint ID:</strong> {generatedID}

          <button
            onClick={copyToClipboard}
            style={{ marginLeft: "12px" }}
          >
            Copy ID
          </button>

          <p style={{ marginTop: "8px", fontSize: "0.85rem", opacity: 0.7 }}>
            Save this ID to track your complaint later.
          </p>

        </div>
      )}

    </div>
  );
}

export default Report;