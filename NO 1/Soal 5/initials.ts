function ambilInisialNama(nama: string): string {
    return nama
      .split(" ")                             // Memisahkan nama berdasarkan spasi
      .map(kata => kata[0].toUpperCase())     // Ambil huruf pertama dari setiap kata dan ubah ke huruf besar
      .join("");                              // Gabungkan huruf-huruf tersebut
  }
  
  // Contoh penggunaan:
  const namaLengkap = "John Doe";
  const inisial = ambilInisialNama(namaLengkap);
  
  console.log(`Inisial nama: ${inisial}`); // Output: JD
  