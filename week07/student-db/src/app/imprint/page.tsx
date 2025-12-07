//@Author: Sebastian Hilger

/**
 * Imprint Page - Static page with author information
 * Contains legal information and website author details
 */
export default function ImprintPage() {
  return (
    <main className="container mx-auto px-4 py-8 flex-1">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Imprint
      </h2>

      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
        <section className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Website Author
          </h3>
          <div className="text-gray-600 space-y-2">
            <p>
              <strong>Name:</strong> Sebastian Hilger
            </p>
            <p>
              <strong>Email:</strong> s.hilger@hm.edu
            </p>
            <p>
              <strong>Course:</strong> Webtechnologien (ID3)
            </p>
            <p>
              <strong>Semester:</strong> WS 2025/26
            </p>
          </div>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            About This Project
          </h3>
          <p className="text-gray-600">
            This Student Database application was created as part of the
            Webtechnologien course (Praktikum 05). It demonstrates the use of
            React components in a Next.js application, fetching data from the
            Random User API.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Technologies Used
          </h3>
          <ul className="text-gray-600 list-disc list-inside space-y-1">
            <li>Next.js 15 (React Framework)</li>
            <li>React 19</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>Random User API</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Data Source
          </h3>
          <p className="text-gray-600">
            Student data is provided by the{" "}
            <a
              href="https://randomuser.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Random User API
            </a>
            . This API generates random user data for testing and prototyping
            purposes.
          </p>
        </section>
      </div>
    </main>
  );
}
