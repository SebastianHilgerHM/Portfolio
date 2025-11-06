declare module 'readline-sync' {
  function question(prompt?: string): string;
  const readlineSync: { question(prompt?: string): string };
  export = readlineSync;
}
