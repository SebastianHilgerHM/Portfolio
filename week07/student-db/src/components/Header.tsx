//@Author: Sebastian Hilger

"use client";

import Navigation from "./Navigation";

/**
 * Header component with logo/title and navigation
 * Reusable across all pages for consistent layout
 */
export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold mb-2 sm:mb-0">Student DB</h1>
        <Navigation />
      </div>
    </header>
  );
}
