import { useState } from "react";

export default function PrediSureLanding() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial", color: "#fff", backgroundColor: "#0f172a", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "2.5rem", color: "#fbbf24", textAlign: "center" }}>Welcome to PrediSure</h1>
      <p style={{ textAlign: "center", marginBottom: "2rem" }}>
        The AI-powered platform that predicts hidden health risks before they become real problems.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#fbbf24" }}>What PrediSure Delivers</h2>
      <ul>
        <li>✔ AI-based risk prediction</li>
        <li>✔ Real-time health scoring</li>
        <li>✔ Personalized prevention plans</li>
        <li>✔ Dashboard for insurers & labs</li>
      </ul>

      <div style={{ marginTop: "2rem" }}>
        <h2 style={{ fontSize: "1.5rem", color: "#fbbf24" }}>Request a Live Demo</h2>
        {!formSubmitted ? (
          <form action="https://formspree.io/f/mzzekjvq" method="POST">
  <input
    type="text"
    name="name"
    placeholder="Name"
    required
    style={{ padding: "0.5rem", width: "100%", marginBottom: "1rem" }}
  />
  <input
    type="email"
    name="email"
    placeholder="Email"
    required
    style={{ padding: "0.5rem", width: "100%", marginBottom: "1rem" }}
  />
  <input
    type="text"
    name="company"
    placeholder="Company / Organization"
    style={{ padding: "0.5rem", width: "100%", marginBottom: "1rem" }}
  />
  <button
    type="submit"
    style={{ padding: "0.5rem 1rem", backgroundColor: "#fbbf24", border: "none", cursor: "pointer" }}
  >
    Submit
  </button>
</form>

        ) : (
          <p style={{ color: "lightgreen" }}>Thank you! We'll get back to you shortly.</p>
        )}
      </div>
    </div>
  );
}
