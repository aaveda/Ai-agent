import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [report, setReport] = useState(null);

  const handleScan = async () => {
    const response = await fetch("/api/scan", {
      method: "POST",
      body: JSON.stringify({ url }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setReport(data);
  };

  return (
    <div>
      <h1>Website Security Scanner</h1>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter website URL"
      />
      <button onClick={handleScan}>Scan</button>
      {report && (
        <div>
          <h3>Scan Report</h3>
          <p>{JSON.stringify(report)}</p>
        </div>
      )}
    </div>
  );
}
