"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CashToCrypto() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      toast.error("Please enter a valid email", { position: "top-center" });
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Thank you! You'll be notified when it goes live.", {
        position: "top-center",
      });
      setEmail("");
    }, 1500);
  };

  return (
    <div className=" min-h-[70vh] mx-auto w-[90%] p-4">
      <div>
        <h2 className="text-2xl font-semibold text-center text-gray-900 mb-4">
          Coming Soon!
        </h2>
        <p className="text-gray-600 text-center">
          Cash to Crypto is almost here.
        </p>
        <p className="text-gray-600 text-center mb-6">
          Enter your email and we’ll let you know the moment it’s live.
        </p>

        <div className="flex flex-col mb-6">
          <label
            htmlFor="email"
            className="text-sm font-semibold text-gray-900 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-900"
          />
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className="w-full py-3 rounded-full bg-teal-900 text-white font-medium hover:bg-teal-800 disabled:opacity-60 transition"
        >
          {loading ? "Processing..." : "Update me"}
        </button>

        <ToastContainer
          autoClose={3000}
          pauseOnFocusLoss={false}
          pauseOnHover={false}
        />
      </div>
    </div>
  );
}
