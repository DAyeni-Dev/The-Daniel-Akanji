import heroBg from "../assets/hero-bg.jpeg";


export default function Home() {
  return (
    <main>
      <section className="min-h-screen relative overflow-hidden bg-no-repeat bg-contain"
      style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="max-w-7xl mx-auto px-8 py-32">
          <h1 className="text-4xl md:text-5xl font-bold max-w-3xl leading-tight">
            Strategic Public Relations & Communications for Leaders Who Care About Reputation
          </h1>

          <p className="mt-6 text-lg text-blue-100 max-w-2xl">
            Helping business owners, corporate professionals, and public figures
            communicate with clarity and protect their brand image.
          </p>

          <div className="mt-10 flex space-x-6">
            
            <a
              href="/about"
              className="border border-white px-8 py-4 rounded-md hover:bg-white hover:text-blue-700 transition"
            >
              Know More
            </a>
          </div>
        </div>
      </section>

      
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Why Daniel Akanji Is the Right Fit for Your Brand
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Daniel Akanji is a seasoned Public Relations and Communications
              consultant with a deep understanding of brand perception,
              stakeholder engagement, and reputation management. He works closely
              with business leaders and public personalities to craft narratives
              that inspire trust and authority.
            </p>
          </div>

          <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center text-gray-400">
            Image Placeholder
          </div>
        </div>
      </section>

      
      <section className="  bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <div className="bg-white p-8 rounded-lg shadow-sm">
    <h3 className="font-semibold text-lg mb-3">Public Relations Strategy</h3>
    <p className="text-gray-600 text-sm">
      Developing clear PR roadmaps that align your brand’s messaging with your
      business goals and public perception.
    </p>
  </div>

  <div className="bg-white p-8 rounded-lg shadow-sm">
    <h3 className="font-semibold text-lg mb-3">Corporate Communications</h3>
    <p className="text-gray-600 text-sm">
      Crafting internal and external communication frameworks that build trust,
      clarity, and consistency across stakeholders.
    </p>
  </div>

  <div className="bg-white p-8 rounded-lg shadow-sm">
    <h3 className="font-semibold text-lg mb-3">Event Consultation</h3>
    <p className="text-gray-600 text-sm">
      Strategic advisory for corporate and public events to ensure strong
      messaging, brand alignment, and audience impact.
    </p>
  </div>

  <div className="bg-white p-8 rounded-lg shadow-sm">
    <h3 className="font-semibold text-lg mb-3">Reputation Management</h3>
    <p className="text-gray-600 text-sm">
      Proactively managing how your brand is perceived while strengthening
      credibility and long-term public trust.
    </p>
  </div>

  <div className="bg-white p-8 rounded-lg shadow-sm">
    <h3 className="font-semibold text-lg mb-3">Crisis Communications</h3>
    <p className="text-gray-600 text-sm">
      Guiding brands through sensitive situations with calm, structured
      communication that protects reputation and authority.
    </p>
  </div>

  <div className="bg-white p-8 rounded-lg shadow-sm">
    <h3 className="font-semibold text-lg mb-3">Media Relations</h3>
    <p className="text-gray-600 text-sm">
      Building and managing relationships with the media to ensure accurate,
      strategic, and favorable brand coverage.
    </p>
  </div>
</div>
        </div>
      </section>

      
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Why Choose Daniel Akanji
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
  <div className="p-8 border rounded-lg text-center">
    <h3 className="font-semibold text-lg mb-3">Strategic Thinking</h3>
    <p className="text-gray-600 text-sm">
      Every recommendation is driven by strategy, not guesswork, ensuring your
      communication aligns with long-term brand positioning.
    </p>
  </div>

  <div className="p-8 border rounded-lg text-center">
    <h3 className="font-semibold text-lg mb-3">Industry Experience</h3>
    <p className="text-gray-600 text-sm">
      Years of hands-on experience working with business leaders, corporate
      professionals, and public figures across diverse industries.
    </p>
  </div>

  <div className="p-8 border rounded-lg text-center">
    <h3 className="font-semibold text-lg mb-3">Personalized Approach</h3>
    <p className="text-gray-600 text-sm">
      No generic solutions, each engagement is tailored to your unique goals,
      challenges, and brand identity.
    </p>
  </div>
</div>
        </div>
      </section>

      
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            What Clients Say
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Peculiar Views",
                text: "Daniel’s strategic approach completely transformed how our brand communicates with the public.",
              },
              {
                name: "Tobzy Shot it",
                text: "Professional, insightful, and deeply intentional. Highly recommended.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <p className="text-gray-600 mb-4">“{testimonial.text}”</p>
                <span className="font-semibold text-sm">
                  — {testimonial.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
