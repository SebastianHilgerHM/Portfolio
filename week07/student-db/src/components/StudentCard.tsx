//@Author: Sebastian Hilger

import Image from "next/image";
import { Student } from "@/types/student";

interface StudentCardProps {
  student: Student;
}

/**
 * StudentCard component displays a single student's information
 * Reusable card component showing profile picture, name, and email
 */
export default function StudentCard({ student }: StudentCardProps) {
  const fullName = `${student.name.first} ${student.name.last}`;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-lg transition-shadow">
      <div className="relative w-24 h-24 mb-3">
        <Image
          src={student.picture.large}
          alt={`Profile picture of ${fullName}`}
          fill
          className="rounded-full object-cover"
          sizes="96px"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 text-center">
        {fullName}
      </h3>
      <p className="text-sm text-gray-600 text-center break-all">
        {student.email}
      </p>
      <p className="text-xs text-gray-500 mt-1">
        {student.location.city}, {student.location.country}
      </p>
    </div>
  );
}
