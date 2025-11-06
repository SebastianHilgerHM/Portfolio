declare module 'readline-sync' {
  // Minimal typing for the question() API used in this project.
  function question(prompt?: string): string;
  const readlineSync: { question(prompt?: string): string };
  export = readlineSync;
}
