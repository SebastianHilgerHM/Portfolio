//@Author: Sebastian Hilger

import Link from "next/link";
import { fetchStudents } from "@/lib/api";
import StudentGrid from "@/components/StudentGrid";

interface FilterPageProps {
  searchParams: Promise<{ gender?: string }>;
}

/**
 * Filter Page - Displays filtered students based on URL parameters
 * Supports gender filter (male/female) via query parameter
 * URL structure: /filter?gender=male or /filter?gender=female
 */
export default async function FilterPage({ searchParams }: FilterPageProps) {
  const params = await searchParams;
  const gender = params.gender;
  const isValidGender = gender === "male" || gender === "female";

  // Only fetch if a valid gender filter is provided
  const data = isValidGender ? await fetchStudents(9, gender) : null;

  return (
    <main className="container mx-auto px-4 py-8 flex-1">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Filter Students
      </h2>

      {/* Filter Controls */}
      <div className="flex justify-center gap-4 mb-8">
        <Link
          href="/filter?gender=male"
          className={`px-6 py-2 rounded-lg transition-colors ${
            gender === "male"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Male
        </Link>
        <Link
          href="/filter?gender=female"
          className={`px-6 py-2 rounded-lg transition-colors ${
            gender === "female"
              ? "bg-pink-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Female
        </Link>
        <Link
          href="/filter"
          className="px-6 py-2 rounded-lg bg-gray-500 text-white hover:bg-gray-600 transition-colors"
        >
          Reset
        </Link>
      </div>

      {/* Results */}
      {!isValidGender ? (
        <div className="text-center py-8">
          <p className="text-gray-600 mb-4">
            Please select a gender filter above to display students.
          </p>
          <p className="text-sm text-gray-500">
            The filter parameter is passed via URL: <code>/filter?gender=male</code> or{" "}
            <code>/filter?gender=female</code>
          </p>
        </div>
      ) : (
        <>
          <p className="text-gray-600 text-center mb-8">
            Showing {gender} students ({data?.results.length || 0} results)
          </p>
          {data && <StudentGrid students={data.results} />}
        </>
      )}
    </main>
  );
}
