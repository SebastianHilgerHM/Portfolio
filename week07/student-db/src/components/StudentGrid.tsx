//@Author: Sebastian Hilger

import { Student } from "@/types/student";
import StudentCard from "./StudentCard";

interface StudentGridProps {
  students: Student[];
}

/**
 * StudentGrid component displays students in a 3x3 grid layout
 * Reusable on both Students page and Filter page
 */
export default function StudentGrid({ students }: StudentGridProps) {
  if (students.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">No students found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {students.map((student, index) => (
        <StudentCard key={`${student.email}-${index}`} student={student} />
      ))}
    </div>
  );
}
