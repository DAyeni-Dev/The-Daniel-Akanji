import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Book() {
  // FORM STATE
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

  // FORM VALIDITY (for button disable)
  const isFormValid =
    formData.name.trim() &&
    formData.email.trim() &&
    emailRegex.test(formData.email) &&
    formData.service.trim() &&
    formData.message.trim();

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // VALIDATE FORM
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.service.trim()) {
      newErrors.service = "Please select a service";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please provide a brief message";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // SUBMIT FORM
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    // 1️⃣ Send admin email
    emailjs
      .send(
        "service_2ld1mqk",
        "template_0m9r2xv",
        {
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
        },
        "d-yO8sfsteJA757u0"
      )
      // 2️⃣ Send client confirmation email
      .then(() => {
        return emailjs.send(
          "service_2ld1mqk",
          "template_n6l7nva",
          {
            name: formData.name,
            email: formData.email,
            service: formData.service,
          },
          "d-yO8sfsteJA757u0"
        );
      })
      // 3️⃣ Success
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
      // 4️⃣ Error handling
      .catch((error) => {
        console.error(error);
        alert("Something went wrong. Please try again.");
      })
      // 5️⃣ Stop loading
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <main className="py-24">
      <div className="max-w-5xl mx-auto px-8 grid md:grid-cols-2 gap-16">
        {/* LEFT CONTENT */}
        <section>
          <h1 className="text-4xl font-bold mb-6">Book a Consultation</h1>
          <p className="text-gray-600 mb-8">
            This private consultation is designed to help you gain clarity on
            your communication challenges, brand positioning, and reputation
            strategy.
          </p>

          <ul className="space-y-5 text-gray-700">
            <li>
              <span className="font-semibold">What to expect:</span>
              <br />
              A focused, one-on-one discussion tailored to your needs.
            </li>

            <li>
              <span className="font-semibold">Who it’s for:</span>
              <br />
              Business owners, corporate professionals, and public figures.
            </li>

            <li>
              <span className="font-semibold">Duration:</span>
              <br />
              30–60 minutes depending on scope.
            </li>

            <li>
              <span className="font-semibold">Confidentiality:</span>
              <br />
              All conversations are handled professionally.
            </li>
          </ul>
        </section>

        {/* FORM */}

                        {success && (
            <div className="mb-6 bg-green-100 text-green-700 p-4 rounded-md">
              Your consultation request has been sent successfully. We’ll be in touch shortly.
            </div>
)}


                  <div className="mt-8 text-center">
            <p className="mb-4 text-gray-600">
              Prefer to book directly?
            </p>

            <a
              href="https://calendly.com/oluwadamilolaayeni321/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-700 text-white px-8 py-4 rounded-md font-semibold hover:bg-blue-800 transition"
            >
              Book via Calendar
            </a>
          </div>

        <section className="bg-gray-50 p-10 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">
            Request a Consultation
          </h2>

          {success && (
            <div className="mb-6 bg-green-100 text-green-700 p-4 rounded-md">
              Consultation request submitted successfully. We’ll be in touch
              shortly.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* NAME */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-md px-4 py-3"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

                    
            {/* EMAIL */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-md px-4 py-3"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* SERVICE */}
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

              {errors.service && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.service}
                </p>
              )}
            </div>

            {/* MESSAGE */}
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
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={!isFormValid || loading}
              className={`w-full py-4 rounded-md font-semibold transition ${
                isFormValid && !loading
                  ? "bg-blue-700 text-white hover:bg-blue-800"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              {loading ? "Sending..." : "Submit Request"}
            </button>
              <section className="mt-24">
            <h2 className="text-3xl font-semibold text-center mb-6">
              Book a Time Instantly
            </h2>

            <p className="text-center text-gray-600 mb-10">
              Prefer to secure a time immediately? Choose a slot that works for you.
            </p>

            <div className="w-full h-[700px]">
              <iframe
                src="https://calendly.com/oluwadamilolaayeni321/30min"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Calendly Booking"
              ></iframe>
            </div>
          </section>


          </form>
        </section>
      </div>
    </main>
  );
}
