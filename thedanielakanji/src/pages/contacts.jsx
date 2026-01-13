import React from "react";

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start px-6 py-12"
      style={{ backgroundColor: "#0E1D34", color: "#FFFFFF" }}
    >
      <h1 className="text-3xl font-semibold mb-8" style={{ color: "#FF9A4A" }}>
        Contact Daniel Akanji
      </h1>

      {/* Contact Phone */}
      <section className="mb-8 w-full max-w-xl text-center">
        <h2 className="text-xl font-semibold mb-2">Phone</h2>
        <p className="text-lg">
          <a href="tel:+2347010025486" style={{ color: "#FFFFFF" }}>
            +234 701 002 5486
          </a>
        </p>
      </section>

      {/* Social Media */}
      <section className="mb-8 w-full max-w-xl text-center">
        <h2 className="text-xl font-semibold mb-4">Social Media</h2>
        <div className="flex flex-wrap justify-center gap-6">

          {/* X */}
          <a href="https://x.com/TheDanielAkanji" target="_blank" rel="noreferrer">
            <svg width="30" height="30" fill="#FFFFFF" viewBox="0 0 24 24">
              <path d="M13.795 10.533L20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/thedanielakanji" target="_blank" rel="noreferrer">
            <svg width="30" height="30" fill="#FFFFFF" viewBox="0 0 24 24">
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z"/>
            </svg>
          </a>

          {/* Facebook */}
          <a href="https://www.facebook.com/share/1DPx3fpRU9/" target="_blank" rel="noreferrer">
            <svg width="30" height="30" fill="#FFFFFF" viewBox="0 0 24 24">
              <path d="M13 6h3V3h-3a4 4 0 0 0-4 4v2H7v3h2v9h3v-9h3l1-3h-4V7a1 1 0 0 1 1-1Z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/the-daniel-akanji-931276198" target="_blank" rel="noreferrer">
            <svg width="30" height="30" fill="#FFFFFF" viewBox="0 0 24 24">
              <path d="M4 8h4v12H4zM6 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm6 6h4v2c.6-1.2 2-2.2 4-2.2 4 0 4 3 4 6v6h-4v-5c0-1.2 0-3-2-3s-2 1.6-2 3v5h-4Z"/>
            </svg>
          </a>

          {/* TikTok */}
          <a href="https://tiktok.com/@thedanielakanji" target="_blank" rel="noreferrer">
            <svg width="30" height="30" fill="#FFFFFF" viewBox="0 0 24 24">
              <path d="M9 13a3 3 0 1 0 3 3V5h2c.4 2 2 3 4 3v2c-1.5 0-3-.5-4-1.5V16a5 5 0 1 1-5-5Z"/>
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}
