import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Book() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isFormValid =
    formData.name.trim() &&
    formData.email.trim() &&
    emailRegex.test(formData.email) &&
    formData.service.trim() &&
    formData.message.trim();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.service.trim())
      newErrors.service = "Please select a service";
    if (!formData.message.trim())
      newErrors.message = "Please provide a brief message";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    emailjs
      .send(
        "service_2ld1mqk",
        "template_0m9r2xv",
        formData,
        "d-yO8sfsteJA757u0"
      )
      .then(() =>
        emailjs.send(
          "service_2ld1mqk",
          "template_n6l7nva",
          {
            name: formData.name,
            email: formData.email,
            service: formData.service,
          },
          "d-yO8sfsteJA757u0"
        )
      )
      .then(() => {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          service: "",
          message: "",
        });
        setErrors({});
      })
      .finally(() => setLoading(false));
  };

  return (
    <main className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        
        <section>
          <h1 className="text-4xl font-bold mb-6 text-[#FF9A4A]">
            Book a Consultation
          </h1>

          <p className="text-gray-700 mb-10 leading-relaxed">
            This private consultation is designed to help you gain clarity on
            your communication challenges, brand positioning, and reputation
            strategy.
          </p>

          <ul className="space-y-6 text-[#B7743F]">
            <li>
              <span className="font-semibold">What to expect</span>
              <p className="text-gray-600">
                A focused, one-on-one discussion tailored to your needs.
              </p>
            </li>
            <li>
              <span className="font-semibold">Who it’s for</span>
              <p className="text-gray-600">
                Business owners, corporate professionals, and public figures.
              </p>
            </li>
            <li>
              <span className="font-semibold">Duration</span>
              <p className="text-gray-600">30–60 minutes depending on scope.</p>
            </li>
            <li>
              <span className="font-semibold">Confidentiality</span>
              <p className="text-gray-600">
                All conversations are handled professionally.
              </p>
            </li>
          </ul>

          
          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-[#FF9A4A] mb-4">
              Prefer to book instantly?
            </h2>
            <p className="text-gray-600 mb-8">
              Choose a time that works for you and secure your session
              immediately.
            </p>

            <div className="w-full h-[500px] border rounded-lg overflow-hidden">
              <iframe
                src="https://calendly.com/oluwadamilolaayeni321/30min"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Calendly Booking"
              />
            </div>
          </div>
        </section>

        
        <section className="bg-[#FFFFFF] border border-[#132347]/10 p-10 rounded-xl shadow-sm">
          {!success ? (
            <>
              <h2 className="text-2xl font-semibold mb-6 text-[#FF9A4A]">
                Request a Consultation
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {["name", "email"].map((field, i) => (
                  <div key={i}>
                    <label className="block text-sm font-medium mb-2 capitalize">
                      {field === "name" ? "Full Name" : "Email Address"}
                    </label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF9A4A]"
                    />
                    {errors[field] && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors[field]}
                      </p>
                    )}
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Service of Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full border rounded-md px-4 py-3"
                  >
                    <option value="">Select a Service</option>
                    <option>Public Relations Strategy</option>
                    <option>Corporate Communications</option>
                    <option>Event Consultation</option>
                    <option>Reputation Management</option>
                    <option>Crisis Communications</option>
                    <option>Media Relations</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Brief Message
                  </label>
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border rounded-md px-4 py-3"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid || loading}
                  className={`w-full py-4 rounded-md font-semibold transition-all duration-300 ${
                    isFormValid && !loading
                      ? "bg-[#132347] text-white hover:bg-[#FF9A4A]"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {loading ? "Sending..." : "Submit Request"}
                </button>
              </form>
            </>
          ) : (
            
            <div className="flex flex-col items-center text-center animate-[fadeIn_0.6s_ease-out]">
              <div className="w-16 h-16 rounded-full bg-[#FF9A4A]/20 flex items-center justify-center mb-6">
                <span className="text-3xl text-[#B7743F]">✓</span>
              </div>

              <h3 className="text-2xl font-semibold text-[#FF9A4A] mb-3">
                Request Sent Successfully
              </h3>

              <p className="text-gray-600 max-w-sm">
                Thank you for reaching out. Your consultation request has been
                received, and you’ll be contacted shortly.
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
