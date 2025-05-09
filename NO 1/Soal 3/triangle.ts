export function findThirdAngle(a: number, b: number): number {
  return 180 - (a + b);
}

// Contoh penggunaan:
const angleA = 80;
const angleB = 65;
const angleC = findThirdAngle(angleA, angleB);

console.log(`Sudut ketiga adalah: ${angleC}`); // Output: 35
