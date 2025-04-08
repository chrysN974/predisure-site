export default function Home() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial", backgroundColor: "#001f3d", color: "#fff", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", color: "#fbbf24" }}>Welcome to PrediSure</h1>
      <p style={{ textAlign: "center", marginBottom: "2rem" }}>
        The AI-powered platform that predicts hidden health risks before they become real problems.
      </p>

      <h2 style={{ textAlign: "center", color: "#fbbf24" }}>Request a Live Demo</h2>
      <form action="https://formspree.io/f/xblgpvwg" method="POST" style={{ maxWidth: "500px", margin: "0 auto" }}>
        <input type="text" name="name" placeholder="Your Name" required style={{ display: "block", width: "100%", marginBottom: "1rem", padding: "0.5rem" }} />
        <input type="email" name="email" placeholder="Your Email" required style={{ display: "block", width: "100%", marginBottom: "1rem", padding: "0.5rem" }} />
        <input type="text" name="company" placeholder="Your Company" style={{ display: "block", width: "100%", marginBottom: "1rem", padding: "0.5rem" }} />
        <button type="submit" style={{ backgroundColor: "#fbbf24", padding: "0.75rem", border: "none", cursor: "pointer", borderRadius: "4px", color: "#fff" }}>
          Send Request
        </button>
      </form>
    </div>
  );
} 
