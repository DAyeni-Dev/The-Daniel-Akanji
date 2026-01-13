import danielImage from "../assets/The-daniel-Akanji.jpeg";

export default function Home() {
  return (
    <main style={{ backgroundColor: "#FFFFFF" }}>
      
      <section
        className="min-h-screen relative overflow-hidden flex items-center"
        style={{ backgroundColor: "#F5F5F5", color: "#000000"  }}
      >
        <div className="max-w-7xl mx-auto px-8 py-20">
          <h1
            className="text-4xl md:text-5xl font-bold max-w-3xl leading-tight"
            style={{ color: "#FF9A4A" }}
          >
            Strategic Public Relations & Communications for Leaders Who Care About Reputation
          </h1>

          <p
            className="mt-6 text-lg max-w-2xl"
            style={{ color: "#000000" }}
          >
            Helping business owners, corporate professionals, and public figures
            communicate with clarity and protect their brand image.
          </p>

          <div className="mt-10 flex space-x-6">
            <a
              href="/about"
              className="border px-8 py-4 rounded-md transition"
              style={{
                borderColor: "#FF9A4A",
                color: "#FF9A4A",
              }}
            >
              Know More
            </a>
          </div>
        </div>
      </section>

     
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: "#FF9A4A" }}
            >
              Why Daniel Akanji Is the Right Fit for Your Brand
            </h2>
            <p style={{ color: "#000000" }} className="leading-relaxed">
              Daniel Akanji is a seasoned Public Relations and Communications
              consultant with a deep understanding of brand perception,
              stakeholder engagement, and reputation management. He works closely
              with business leaders and public personalities to craft narratives
              that inspire trust and authority.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src={danielImage}
              alt="Daniel Akanji"
              className="rounded-lg object-cover w-full h-full max-h-96 md:max-h-125"
            />
          </div>
        </div>
      </section>

      
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <h2
            className="text-3xl font-bold mb-12 text-center"
            style={{ color: "#FF9A4A" }}
          >
            Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Public Relations Strategy",
                text: "Developing clear PR roadmaps that align your brand’s messaging with your business goals and public perception.",
              },
              {
                title: "Corporate Communications",
                text: "Crafting internal and external communication frameworks that build trust, clarity, and consistency across stakeholders.",
              },
              {
                title: "Event Consultation",
                text: "Strategic advisory for corporate and public events to ensure strong messaging, brand alignment, and audience impact.",
              },
              {
                title: "Reputation Management",
                text: "Proactively managing how your brand is perceived while strengthening credibility and long-term public trust.",
              },
              {
                title: "Crisis Communications",
                text: "Guiding brands through sensitive situations with calm, structured communication that protects reputation and authority.",
              },
              {
                title: "Media Relations",
                text: "Building and managing relationships with the media to ensure accurate, strategic, and favorable brand coverage.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-lg shadow-sm"
                style={{ backgroundColor: "#F5F5F5", color: "#000000" }}
              >
                <h3 className="font-semibold text-lg mb-3" style={{ color: "#FF9A4A" }}>
                  {service.title}
                </h3>
                <p className="text-sm">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <h2
            className="text-3xl font-bold mb-12 text-center"
            style={{ color: "#FF9A4A" }}
          >
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
                className="p-8 rounded-lg shadow-sm"
                style={{ backgroundColor: "#F5F5F5", color: "#000000" }}
              >
                <p className="mb-4">“{testimonial.text}”</p>
                <span className="font-semibold text-sm" style={{ color: "#FF9A4A" }}>
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
