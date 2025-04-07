import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function PrediSureLanding() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white p-10 flex flex-col items-center justify-center space-y-10">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold text-gold-400 mb-4">Welcome to PrediSure</h1>
        <p className="text-xl text-slate-300">
          The AI-powered platform that predicts hidden health risks before they become clinical problems. Empower prevention. Reduce costs. Save lives.
        </p>
      </div>

      <div className="bg-slate-800 rounded-xl shadow-xl p-6 max-w-4xl w-full border border-slate-700">
        <h2 className="text-2xl font-bold text-center text-gold-300 mb-4">What PrediSure Delivers</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-200 text-lg">
          <li>✔ AI-based risk prediction</li>
          <li>✔ Real-time health scoring</li>
          <li>✔ Personalized prevention plans</li>
          <li>✔ Live population analytics dashboard</li>
          <li>✔ Insurance cost reduction</li>
          <li>✔ Clinical trial targeting for labs</li>
        </ul>
      </div>

      <div className="bg-slate-800 rounded-xl shadow-xl p-6 max-w-2xl w-full border border-slate-700">
        <h2 className="text-2xl font-bold text-center text-gold-300 mb-4">Request a Live Demo</h2>
        {!formSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-slate-200">Name</Label>
              <Input id="name" type="text" required className="bg-slate-700 text-white" />
            </div>
            <div>
              <Label htmlFor="email" className="text-slate-200">Email</Label>
              <Input id="email" type="email" required className="bg-slate-700 text-white" />
            </div>
            <div>
              <Label htmlFor="company" className="text-slate-200">Company / Organization</Label>
              <Input id="company" type="text" className="bg-slate-700 text-white" />
            </div>
            <Button type="submit" className="bg-gold-500 hover:bg-gold-600 w-full">Submit</Button>
          </form>
        ) : (
          <p className="text-center text-green-400 text-lg">Thank you! We'll get back to you shortly.</p>
        )}
      </div>

      <div className="bg-slate-800 rounded-xl shadow-xl p-6 max-w-4xl w-full border border-slate-700">
        <h2 className="text-2xl font-bold text-center text-gold-300 mb-4">Interactive Demo Preview</h2>
        <p className="text-center text-slate-300 mb-4">
          Explore how PrediSure delivers instant AI-driven risk scores and personalized health guidance.
        </p>
        <div className="aspect-w-16 aspect-h-9 w-full">
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="PrediSure Interactive Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-96 rounded-lg border border-slate-600"
          ></iframe>
        </div>
      </div>

      <footer className="text-center text-slate-500 text-sm mt-10">
        © 2025 PrediSure. All rights reserved.
      </footer>
    </div>
  );
}