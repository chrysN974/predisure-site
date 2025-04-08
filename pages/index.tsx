export default function Home() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial", color: "#fff", backgroundColor: "#0f172a", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "2.5rem", color: "#fbbf24", textAlign: "center" }}>
        Welcome to PrediSure
      </h1>
      <p style={{ textAlign: "center", marginBottom: "2rem" }}>
        The AI-powered platform that predicts hidden health risks before they become real problems.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#fbbf24" }}>Request a Live Demo</h2>
      <form action="https://formspree.io/f/mzzekjvq" method="POST" style={{ maxWidth: "500px", margin: "2rem auto" }}>
        <input name="name" placeholder="Your Name" required style={{ padding: "0.5rem", width: "100%", marginBottom: "1rem" }} />
        <input type="email" name="email" placeholder="Your Email" required style={{ padding: "0.5rem", width: "100%", marginBottom: "1rem" }} />
        <input name="company" placeholder="Your Company" style={{ padding: "0.5rem", width: "100%", marginBottom: "1rem" }} />
        <button type="submit" style={{ backgroundColor: "#fbbf24", padding: "0.75rem 2rem", border: "none", cursor: "pointer", borderRadius: "4px" }}>
          Send Request
        </button>
      </form>
    </div>
  );
}
