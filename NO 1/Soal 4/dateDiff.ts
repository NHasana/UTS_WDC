function hitungSelisihHari(tanggal1: string, tanggal2: string): number {
    const t1 = new Date(tanggal1);
    const t2 = new Date(tanggal2);
    
    const selisihWaktu = Math.abs(t2.getTime() - t1.getTime());
    const selisihHari = selisihWaktu / (1000 * 3600 * 24);
    
    return selisihHari;
}

// Contoh penggunaan:
const tanggal1 = "2024-03-19";
const tanggal2 = "2024-03-21";

console.log(`Selisih hari: ${hitungSelisihHari(tanggal1, tanggal2)}`); // Output: 2
