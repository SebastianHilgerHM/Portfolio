//@Author: Sebastian Hilger

import { RandomUserApiResponse } from "@/types/student";

const API_BASE_URL = "https://randomuser.me/api";

/**
 * Fetches students from Random User API
 * @param count - Number of students to fetch (default: 9 for 3x3 grid)
 * @param gender - Optional gender filter ('male' or 'female')
 * @returns Promise with array of students
 */
export async function fetchStudents(
  count: number = 9,
  gender?: string
): Promise<RandomUserApiResponse> {
  let url = `${API_BASE_URL}/?results=${count}`;

  if (gender && (gender === "male" || gender === "female")) {
    url += `&gender=${gender}`;
  }

  const response = await fetch(url, {
    // Disable caching to get fresh data on each request
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch students: ${response.statusText}`);
  }

  return response.json();
}
