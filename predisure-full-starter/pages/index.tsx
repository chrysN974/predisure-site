import { useState } from "react";

export default function PrediSureLanding() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial", color: "#fff", backgroundColor: "#0f172a", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "2.5rem", color: "#fbbf24", textAlign: "center" }}>Welcome to PrediSure</h1>
      <p style={{ textAlign: "center", marginBottom: "2rem" }}>
        The AI-powered platform that predicts hidden health risks before they become real problems.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#fbbf24" }}>Request a Live Demo</h2>

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
    </div>
  );
}
