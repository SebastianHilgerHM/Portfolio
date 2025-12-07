//@Author: Sebastian Hilger

/**
 * Type definitions for the Random User API response
 */

export interface Student {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  location: {
    city: string;
    country: string;
  };
  dob: {
    age: number;
  };
  nat: string;
}

export interface RandomUserApiResponse {
  results: Student[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}
