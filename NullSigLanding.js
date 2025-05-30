import React from "react";

export default function NullSigLanding() {
  return (
    <div className="bg-black text-white min-h-screen font-mono">
      <header className="text-center py-20 border-b border-neutral-800">
        <h1 className="text-5xl font-bold tracking-widest">NullSig</h1>
        <p className="text-xl mt-4 italic text-gray-400">
          There is no signal. Only traces.
        </p>
        <p className="uppercase text-sm text-neutral-500 mt-2">Passive Intelligence</p>
      </header>

      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 border-b pb-2 border-neutral-700">
          About NullSig
        </h2>
        <p className="text-gray-300 leading-relaxed">
          NullSig (Null Signature) is an independent OSINT project built on the principle
          of zero signal: observe without interference, collect without exposure.
          Our team consists of former military intelligence operatives and special
          service analysts, bringing real-world expertise in surveillance and digital forensics.
          We operate in the gray zone — ethically, strategically, and precisely.
        </p>
        <blockquote className="mt-4 text-neutral-500 italic border-l-4 pl-4 border-neutral-700">
          “Those who leave traces end up in reports. Those who detect them shape outcomes.”
        </blockquote>
      </section>

      <section className="bg-neutral-900 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "Subject Profiling",
              desc: "Search by name, phone, email, national ID, and social media."
            },
            {
              title: "Partner / Employee Screening",
              desc: "Background, affiliations, reputation risk."
            },
            {
              title: "OSINT Reports",
              desc: "PDF/PPTX reports with verified sources and risk conclusions."
            },
            {
              title: "Digital Footprint Analysis",
              desc: "Accounts, activities, leaks, metadata pattern recognition."
            },
            {
              title: "Custom Intelligence Requests",
              desc: "Tailored investigations using open-source intelligence."
            }
          ].map((service, i) => (
            <div key={i} className="bg-neutral-800 border border-neutral-700 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 border-b pb-2 border-neutral-700">Case Files</h2>
        <p className="text-gray-400">
          We don’t reveal clients. But we show what our methods can do.
        </p>
        <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
          <li>Linked businesses uncovered via shared phone signatures</li>
          <li>Timeline reconstruction through social media echo trails</li>
          <li>Tracking aliases across platforms without direct matches</li>
        </ul>
      </section>

      <section className="bg-neutral-950 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Contact</h2>
        <div className="max-w-md mx-auto text-gray-300">
          <p className="mb-2">Telegram: <a href="https://t.me/NullSig_" className="underline">@NullSig_</a></p>
          <p className="mb-2">Email: <a href="mailto:nullsig@protonmail.com" className="underline">nullsig@protonmail.com</a></p>
          <p className="text-sm text-gray-500 mt-4">All intelligence is collected through open sources. No unauthorized access. No illegal activity.</p>
        </div>
      </section>

      <footer className="text-center text-xs text-neutral-600 py-6 border-t border-neutral-800">
        &copy; {new Date().getFullYear()} NullSig. All rights reserved.
      </footer>
    </div>
  );
}