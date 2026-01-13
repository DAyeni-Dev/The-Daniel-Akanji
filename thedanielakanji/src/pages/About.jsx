import danielImage from "../assets/The-daniel-Akanji.jpeg";

export default function About() {
  return (
    <main style={{ backgroundColor: "#FFFFFF" }}>
      
      <section
        className="bg-blue-900 text-white py-24"
        style={{ backgroundColor: '#0D1932' }}
      >
        <div className="max-w-5xl mx-auto px-8 flex flex-col md:flex-row items-center gap-8">
          
          <div className="shrink-0">
            <img
              src={danielImage}
              alt="Daniel Akanji"
              className="rounded-lg object-cover w-64 h-64 md:w-80 md:h-80"
            />
          </div>

          
          <div>
            <h1 className="text-4xl font-bold mb-4" style={{ color: "#FF9A4A" }}>
              About Daniel Akanji
            </h1>
            <p className="text-lg max-w-3xl" style={{ color: "#FFFFFF" }}>
              A detail-oriented communications professional driven by excellence,
              integrity, and purposeful impact.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-3xl font-semibold mb-6" style={{ color: "#FF9A4A" }}>
            A Communicator Rooted in Excellence
          </h2>
          <p style={{ color: "#0E1D34" }} className="leading-relaxed">
            Daniel Akanji is a passionate and highly detail-oriented Public
            Relations and Communications professional. Known for his strong work
            ethic and commitment to excellence, Daniel approaches every task
            with intentionality, precision, and a deep sense of responsibility.
            His work is guided by the belief that communication should be clear,
            strategic, and impactful.
          </p>
        </div>
      </section>

      
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-3xl font-semibold mb-10" style={{ color: "#FF9A4A" }}>
            Government & Corporate Experience
          </h2>

          <div className="space-y-8" style={{ color: "#0E1D34" }}>
            <div>
              <h3 className="font-semibold text-lg">Personal Assistant – Office of the Specail Adviser to the Governor</h3>
              <p>
                Daniel served as Personal Assistant to Hon. Shete, Special Adviser
                to Governor Seyi Makinde on Housing and Urban Affairs. In this
                role, he supported high-level administrative operations,
                stakeholder engagement, and strategic communication within a
                government environment.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Lagos State Internal Revenue Service (LIRS)</h3>
              <p>
                Daniel has also worked with the Lagos State Tax Corporation,
                contributing to structured public communication and institutional
                engagement within a large government organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-3xl font-semibold mb-10" style={{ color: "#FF9A4A" }}>
            Events, Media & Reputation Management
          </h2>

          <ul className="space-y-6 list-disc list-inside" style={{ color: "#0E1D34" }}>
            <li>Member of the Planning Committee for Babatunmise Live in Concert (BLIC), contributing to event coordination and media strategy.</li>
            <li>Planning Committee Member for Ibadan City Praise for over seven years, supporting event planning, communications, and stakeholder alignment.</li>
            <li>Part of the Public Relations team for Davido’s “5 Alive Tour” in Ibadan, managing media presence and public perception.</li>
          </ul>
        </div>
      </section>

      
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-3xl font-semibold mb-6" style={{ color: "#FF9A4A" }}>
            Trusted by Leaders & Institutions
          </h2>
          <p style={{ color: "#0E1D34" }} className="leading-relaxed">
            Daniel has worked closely with kings, traditional rulers, and other
            respected dignitaries across Ibadan. His professionalism, discretion,
            and cultural intelligence have earned him trust in high-level and
            sensitive engagements.
          </p>
        </div>
      </section>

      
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-3xl font-semibold mb-6" style={{ color: "#FF9A4A" }}>
            Service Beyond Professional Work
          </h2>
          <p style={{ color: "#0E1D34" }} className="leading-relaxed">
            Beyond corporate and government work, Daniel actively volunteers for
            rural and urban outreach programs as well as mission work. His
            commitment to service reflects his belief that true impact goes
            beyond visibility and recognition.
          </p>
        </div>
      </section>

      
      <section className="bg-blue-900 text-white py-20" style={{ backgroundColor: "#132347" }}>
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-3xl font-semibold mb-6" style={{ color: "#FF9A4A" }}>
            Why Work With Daniel Akanji
          </h2>

          <ul className="space-y-4 list-disc list-inside" style={{ color: "#FFFFFF" }}>
            <li>Detail-oriented with a strong culture of excellence</li>
            <li>Proven experience across government, corporate, and media spaces</li>
            <li>Trusted by leaders, institutions, and creatives</li>
            <li>Purpose-driven, people-focused, and values-led</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
