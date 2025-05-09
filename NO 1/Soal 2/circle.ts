function getDateDifferenceInDays(date1: string, date2: string): number {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  
  const diffInTime = Math.abs(d2.getTime() - d1.getTime());
  const diffInDays = diffInTime / (1000 * 3600 * 24);
  
  return diffInDays;
}

// Contoh penggunaan:
const date1 = "2024-03-19";
const date2 = "2024-03-21";
console.log(getDateDifferenceInDays(date1, date2)); // Output: 2
