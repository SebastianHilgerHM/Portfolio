//@Author: Sebastian Hilger

"use client";

import { useEffect, useState } from "react";

/**
 * Footer component with copyright and timestamp
 * Shows the time when the page was loaded
 */
export default function Footer() {
  const [timestamp, setTimestamp] = useState<string>("");

  useEffect(() => {
    // Set timestamp on client-side to avoid hydration mismatch
    const now = new Date();
    const formattedDate = now.toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    const formattedTime = now.toLocaleTimeString("de-DE", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    setTimestamp(`${formattedDate}, ${formattedTime}`);
  }, []);

  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © 2025 Student DB | Seitenaufruf: {timestamp || "Loading..."}
        </p>
      </div>
    </footer>
  );
}
