import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!fullName || !email || !message) {
      toast.error("❌ Please fill in all required fields!");
      return;
    }

    emailjs
      .sendForm("service_d36lzv4", "template_bayn3or", form.current, {
        publicKey: "g_aq-uDeSczFuOdtD",
      })
      .then(
        () => {
          toast.success("✅ Message sent successfully!");
          setFullName("");
          setEmail("");
          setPhone("");
          setMessage("");
        },
        (error) => {
          toast.error(`❌ Failed to send: ${error.text}`);
        }
      );
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-900 via-indigo-700 to-blue-600 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d483.69581013799214!2d69.30751108382437!3d41.31591310254676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef50945e14a17%3A0xfdee1a527b6eaf2c!2sUZTELECOM%20UZ!5e0!3m2!1sen!2s!4v1705897306716!5m2!1sen!2s"
          width="600"
          height="450"
          className="w-full h-[400px] md:h-[450px] rounded-lg shadow-lg border border-white/30"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-4 bg-gradient-to-br from-indigo-800 to-blue-700 text-white p-6 rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-semibold mb-2 text-center">Contact Us</h2>

          <input
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
            className="border-2 border-white/50 bg-transparent p-3 rounded-md focus:border-white outline-none transition-all"
            type="text"
            name="user_name"
            placeholder="Full Name *"
          />

          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="border-2 border-white/50 bg-transparent p-3 rounded-md focus:border-white outline-none transition-all"
            type="email"
            name="user_email"
            placeholder="Email *"
          />

          <input
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            className="border-2 border-white/50 bg-transparent p-3 rounded-md focus:border-white outline-none transition-all"
            type="tel"
            name="user_phone"
            placeholder="Phone"
          />

          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="border-2 border-white/50 bg-transparent p-3 rounded-md resize-none focus:border-white outline-none transition-all"
            name="message"
            placeholder="Message *"
            rows="4"
          ></textarea>

          <button
            type="submit"
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-2 rounded-md hover:scale-105 transition-transform shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Contact;
