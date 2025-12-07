# Source Code  
Files contain at least one comment indicating the author.
e.g. //@Author: Sebastian Hilger

---

# Best Practices and Coding Standards

## 1. General Software & Web Development
- **Modularization:** Divide the application into small, well-defined components with clear responsibilities.  
- **Separation of Concerns:** Keep structure (HTML), styling (CSS), and logic (JavaScript/TypeScript) clearly separated.  
- **Use Version Control Properly:**  
  - Commit frequently with clear, descriptive messages.  
  - Exclude generated folders such as `node_modules`.  
- **Terminal Proficiency:** Use command-line tools for navigation, automation, and project operations.  
- **Consistent Project Structure:** Organize code into directories like `src/`, `public/`, `dist/`.

---

## 2. HTML, CSS, and Frontend Practices
- **Semantic HTML:** Use correct elements (`header`, `main`, `section`, etc.) for structure and accessibility.  
- **Responsive Design:**  
  - Apply flexible layouts and media queries.  
  - Ensure compatibility across various devices.  
- **Browser Developer Tools:**  
  - Inspect network requests and responses.  
  - Debug DOM and styling issues.  
  - Analyze performance.

---

## 3. JavaScript Best Practices
- **Modern Variable Declarations:** Prefer `const` and `let` over `var`.  
- **Strict Equality:** Use `===` and `!==` rather than relying on type coercion.  
- **Template Literals:** Use backtick strings for cleaner interpolation and multiline text.  
- **Array Methods:** Use `.map()`, `.filter()`, `.reduce()`, `.find()`, etc. for cleaner iteration.  
- **Destructuring:** Simplify extraction of values from objects and arrays.  
- **Arrow Functions:** Use concise syntax where appropriate.  
- **Runtime Awareness:** Recognize the differences between browser-based and Node.js execution.

---

## 4. Node.js and Package Management
- **Proper Project Initialization:** Use `npm init` to generate a descriptive `package.json`.  
- **Meaningful npm Scripts:** Define scripts for development, builds, and testing.  
- **Use Standard Node Modules:** Examples include `fs`, `path`, `http`, and `os`.  
- **Prefer Local Dependencies:** Avoid global installations unless required.  
- **Development Tools:**  
  - Use `nodemon` for automatic restarts during development.  
  - Use `concurrently` to run multiple scripts in parallel (e.g., TypeScript compiler + local server).

---

## 5. TypeScript Best Practices
- **Static Typing:** Use explicit types to improve clarity and reliability.  
- **Avoid `any`:** Maintain type safety by avoiding untyped variables.  
- **Language Features:** Use classes, interfaces, and enums to structure code.  
- **Configure TypeScript:** Adjust `tsconfig.json` with options such as:  
  - `target`  
  - `outDir`  
  - `strict`  
  - `noEmitOnError`  
- **Transpilation:** Convert TypeScript to JavaScript using `npx tsc` or watch mode.

---

## 6. Express & Backend Development
- **Middleware Ordering:** Ensure middleware is declared in a logical sequence.  
- **Serving Static Content:** Use `express.static` to serve files such as images, CSS, and JS.  
- **Structured Routing:** Separate route handlers into dedicated modules.  
- **Environment Variables:** Manage configuration with `dotenv` instead of hardcoded values.  
- **Error Handling:** Implement centralized error-handling middleware.  
- **Diagnostics:** Use network tools and logs to identify routing and resource issues.

---

## 7. Networking & HTTP Standards
- **URL Structure:** Understand scheme, authority, path, query, and fragment.  
- **HTTP Method Semantics:** Use GET, POST, PUT, DELETE, and HEAD according to intent.  
- **HTTP Status Codes:** Know the ranges for success, redirection, client errors, and server errors.  
- **Headers Inspection:** Review request and response headers for debugging and integration.

---
