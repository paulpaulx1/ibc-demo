"use client";
import { useState } from "react";

export default function Contact() {
  const [note, setNote] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name")?.toString() ?? "";
    const email = fd.get("email")?.toString() ?? "";
    const message = fd.get("message")?.toString() ?? "";

    if (!email || !message) {
      setNote("Please complete all fields.");
      return;
    }

    setNote(`Thanks, ${name || "there"}! We'll get back to you shortly.`);
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="py-20">
      <div className="container grid grid-cols-1 md:grid-cols-[1.2fr,0.8fr] gap-8">
        <div>
          <h2 className="h1 text-navy mb-3">Schedule a Consultation</h2>
          <p className="section-lead mb-8">
            Tell us a bit about your needs and we’ll follow up shortly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="font-semibold text-sm">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Jane Doe"
                className="w-full border border-muted rounded-md px-3 py-2 mt-1"
              />
            </div>
            <div>
              <label htmlFor="email" className="font-semibold text-sm">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="w-full border border-muted rounded-md px-3 py-2 mt-1"
              />
            </div>
            <div>
              <label htmlFor="message" className="font-semibold text-sm">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="How can we help?"
                required
                className="w-full border border-muted rounded-md px-3 py-2 mt-1 min-h-[120px]"
              />
            </div>
            <div className="flex items-center gap-3">
              <button
                type="submit"
                className="btn bg-navy text-white hover:opacity-90"
              >
                Send Message
              </button>
              <span className="text-accent-2 text-sm">{note}</span>
            </div>
          </form>
        </div>

        <aside className="card p-6">
          <h3 className="font-semibold text-lg mb-2">Contact</h3>
          <p>
            <strong>Email:</strong> info@integritybco.com
          </p>
          <p>
            <strong>Phone:</strong> (317) 752-8649
          </p>
          <p className="text-sm text-accent-2 mt-2">
            Serving clients across Indiana and beyond.
          </p>
        </aside>
      </div>
    </section>
  );
}
