export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#0f172a', color: '#fff', padding: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', textAlign: 'center', color: '#fbbf24' }}>
        Smart Insurance Powered by Predictive Analytics
      </h1>
      <p style={{ textAlign: 'center', maxWidth: '600px', margin: '1rem auto 2rem' }}>
        Reduce risk, save lives, and revolutionize preventive healthcare with PrediSure — the platform that helps insurers and labs see the future of patient health.
      </p>

      <section style={{ marginTop: '3rem' }}>
        <h2 style={{ color: '#fbbf24' }}>Why Choose PrediSure?</h2>
        <ul>
          <li>✔ Predict chronic diseases before symptoms appear</li>
          <li>✔ AI-powered risk scoring for entire populations</li>
          <li>✔ Custom dashboards for insurers and labs</li>
        </ul>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2 style={{ color: '#fbbf24' }}>How PrediSure Works</h2>
        <ol>
          <li>1. Collect anonymized health data</li>
          <li>2. Run predictive AI models</li>
          <li>3. Deliver insights to decision-makers</li>
        </ol>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2 style={{ color: '#fbbf24' }}>What Our Customers Say</h2>
        <blockquote style={{ fontStyle: 'italic' }}>
          "PrediSure helped us identify 34% of at-risk individuals before diagnosis. Game changer for preventive care."
        </blockquote>
        <cite>– HealthTech Insurance Group</cite>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2 style={{ color: '#fbbf24' }}>Simple, Transparent Pricing</h2>
        <p>Choose a plan that works for your population size. Custom pricing available for large-scale deployment.</p>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2 style={{ color: '#fbbf24' }}>Frequently Asked Questions</h2>
        <p><strong>Is PrediSure compliant with HIPAA?</strong> Yes, we use encrypted, anonymized data workflows.</p>
        <p><strong>Can we integrate it into our existing platform?</strong> Absolutely. We offer full API support and technical onboarding.</p>
      </section>

      <section style={{ marginTop: '4rem', padding: '2rem', backgroundColor: '#1e293b', borderRadius: '8px' }}>
        <h2 style={{ textAlign: 'center', color: '#fbbf24' }}>Request a Live Demo</h2>
        <form action="https://formspree.io/f/mzzekjvq" method="POST" style={{ maxWidth: '500px', margin: '2rem auto' }}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            style={{ padding: '0.75rem', width: '100%', marginBottom: '1rem', borderRadius: '4px' }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            style={{ padding: '0.75rem', width: '100%', marginBottom: '1rem', borderRadius: '4px' }}
          />
          <input
            type="text"
            name="company"
            placeholder="Your Company"
            style={{ padding: '0.75rem', width: '100%', marginBottom: '1.5rem', borderRadius: '4px' }}
          />
          <button
            type="submit"
            style={{ backgroundColor: '#fbbf24', color: '#000', padding: '0.75rem 2rem', border: 'none', cursor: 'pointer', borderRadius: '4px' }}
          >
            Send Request
          </button>
        </form>
      </section>

      <footer style={{ textAlign: 'center', marginTop: '4rem', fontSize: '0.875rem', color: '#94a3b8' }}>
        &copy; 2025 PrediSure. All rights reserved.
      </footer>
    </div>
  );
}
