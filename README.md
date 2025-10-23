# REST API Daftar Barang Cuci Sepatu
Proyek ini merupakan tugas responsi untuk modul Pembuatan API menggunakan Node.js dan Express.js.

## Tujuan
1. Mengimplementasikan konsep CRUD (Create, Read, Update, Delete).
2. Meningkatkan pemahaman Express.js.
3. Mengelola data dengan JSON.
4. Membangun sistem pencatatan digital.

## Fitur Utama API
- Tambah data sepatu
- Lihat semua data sepatu
- Update status cucian
- Hapus data berdasarkan ID

| Metode | Endpoint | Deskripsi |
|--------|----------|-----------|
| GET    | `/items` | Menampilkan seluruh daftar sepatu yang sedang dicuci. |
| POST   | `/items` | Menambahkan data sepatu baru ke dalam daftar. |
| PUT    | `/items/:id` | Memperbarui status sepatu (misalnya dari Sedang Dicuci menjadi Selesai). |
| DELETE | `/items/:id` | Menghapus data sepatu yang sudah selesai dicuci. |
| GET    | `/items?status=Selesai` | Lihat status selesai. |

## Struktur Data
Struktur data yang disimpan
```json
 {
        "id": 4,
        "name": "Adidas Ultraboost",
        "customer": "Salsabila Diva",
        "status": "Proses",
        "price": 75000,
        "tanggal_selesai": "2025-10-25T00:00:00",
        "created_at": "2025-10-23T09:50:03.80784+00:00"
    }
```
Keterangan:
- id : nomor unik sepatu
- name : nama jenis sepatu
- customer : nama customer
- status : status proses
- price : harga yang diberikan
- tanggal_selesai: tanggal selesai sepatu dicuci 
- created_at : tanggal sepatu diterima

## Contoh Request dan Response
GET /items
Response:
```
[
    {
        "id": 4,
        "name": "Adidas Ultraboost",
        "customer": "Salsabila Diva",
        "status": "Proses",
        "price": 75000,
        "tanggal_selesai": "2025-10-25T00:00:00",
        "created_at": "2025-10-23T09:50:03.80784+00:00"
    }
]
```
Body: POST/items
```
{
  "name": "Adidas Ultraboost",
  "customer": "John",
  "status": "Proses",
  "price": 45000,
  "tanggal_selesai": null
}

```
Response:
```
{
    "id": 5,
    "name": "Adidas Ultraboost",
    "customer": "John",
    "status": "Proses",
    "price": 45000,
    "tanggal_selesai": null,
    "created_at": "2025-10-23T10:38:29.818853+00:00"
}
```

PUT /items/:id Body:
```
{
  "status": "Selesai"
}
```

Response:
```
{
    "id": 4,
    "name": "Adidas Ultraboost",
    "customer": "Salsabila Diva",
    "status": "Selesai",
    "price": 75000,
    "tanggal_selesai": "2025-10-25T00:00:00",
    "created_at": "2025-10-23T09:50:03.80784+00:00"
}
```

DELETE /items/:id Response:
```
{
    "message": "Deleted successfully",
    "deleted": {
        "id": 4,
        "name": "Adidas Ultraboost",
        "customer": "Salsabila Diva",
        "status": "Selesai",
        "price": 75000,
        "tanggal_selesai": "2025-10-25T00:00:00",
        "created_at": "2025-10-23T09:50:03.80784+00:00"
    }
}
```
GET /items?status=Selesai Response:
```
[
    {
        "id": 6,
        "name": "Converse All Star",
        "customer": "Diva",
        "status": "Selesai",
        "price": 30000,
        "tanggal_selesai": "2025-10-22T00:00:00",
        "created_at": "2025-10-23T10:45:30.151439+00:00"
    }
]
```

## Langkah Instalasi dan Cara menjalankan API
1. Clone repository dari GitHub
```
   git clone https://github.com/salsabiladdiva/responsi-ppb-mod1.git
```
3. Masuk ke folder proyek
```
   cd responsi-ppb-mod1
```
5. Install semua dependensi (Pastikan sudah menginstal Node.js di komputer) Jalankan perintah berikut di terminal:
```
    npm install
```
7. Buat file konfigurasi .env isi dengan data berikut
```
   SUPABASE_URL=https://xxxxx.supabase.co
   SUPABASE_KEY=your-anon-key
   PORT=5000
```
9. Jalankan server dengan perintah
```
   npm run start
```
11. Uji API di Postman
   - Untuk melihat semua data: send link dibawah dengan method GET
```
👉 http://localhost:5000/items
```
   - Untuk menambah data: kirim request POST ke endpoint /items 
   - Untuk memperbarui data: kirim request PUT /items/:id
   - Untuk menghapus data: kirim request DELETE /items/:id
   
## Link Vercel
https://responsi-ppb-mod1.vercel.app/
