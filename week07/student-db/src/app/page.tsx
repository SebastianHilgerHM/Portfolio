//@Author: Sebastian Hilger

import { fetchStudents } from "@/lib/api";
import StudentGrid from "@/components/StudentGrid";

/**
 * Students Page - Main page displaying 9 random students in a 3x3 grid
 * Server component that fetches data from Random User API
 */
export default async function StudentsPage() {
  const data = await fetchStudents(9);

  return (
    <main className="container mx-auto px-4 py-8 flex-1">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Students
      </h2>
      <p className="text-gray-600 text-center mb-8">
        Displaying 9 random students from the Random User API
      </p>
      <StudentGrid students={data.results} />
    </main>
  );
}
