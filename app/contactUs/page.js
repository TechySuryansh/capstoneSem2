"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [otpSent, setOtpSent] = useState(false);
  const [enteredOtp, setEnteredOtp] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! ✅");
    setForm({ name: "", email: "", subject: "", message: "" });
    setEnteredOtp("");
    setOtpSent(false);
  };

  const sendOtp = async () => {
    if (!form.email) {
      alert("Please enter an email before sending OTP.");
      return;
    }

    try {
      const res = await fetch("/api/send-otp", {
        method: "POST",
        body: JSON.stringify({ email: form.email }),
      });

      const data = await res.json();

      if (data.success) {
        alert(`OTP sent to ${form.email}`);
        setOtpSent(true);
      } else {
        alert("❌ Failed to send OTP. Try again.");
      }
    } catch (error) {
      alert("⚠️ Error sending OTP");
      console.error("OTP Error:", error);
    }
  };

  return (
    <div className="min-h-screen px-6 py-12 bg-gray-50">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-2 text-blue-600">
          Contact Us
        </h1>
        <p className="text-center mb-6 text-gray-500">
          Have a question, feedback, or sleep-related issue? We're here for you!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-xl"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-xl"
            />

            <button
              type="button"
              onClick={sendOtp}
              className="bg-yellow-500 text-white w-full p-3 rounded-xl hover:bg-yellow-600 transition"
            >
              Send OTP
            </button>
          </div>

          {otpSent && (
            <input
              type="text"
              placeholder="Enter OTP"
              value={enteredOtp}
              onChange={(e) => setEnteredOtp(e.target.value)}
              required
              className="w-full p-3 border border-indigo-500 rounded-xl bg-indigo-50"
            />
          )}

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-xl"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-xl h-32"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        <div className="text-center mt-8 text-gray-600">
          Or email us directly at{" "}
          <a href="mailto:support@sleeptrackr.com" className="text-blue-600">
            support@sleeptrackr.com
          </a>
        </div>
      </div>
    </div>
  );
}
