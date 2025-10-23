const express = require('express');
const cors = require('cors');
require('dotenv').config();

const itemRoutes = require('./routes/itemRoutes');
const { supabase } = require('./config/supabaseClient');

const app = express();
app.use(cors());
app.use(express.json());

// routes utama
app.use('/items', itemRoutes);

const port = process.env.PORT || 5000;

app.get('/', async (req, res) => {
  try {
    const { error } = await supabase.from('items').select('id').limit(1);
    if (error) throw error;
    res.send('✅ API berjalan dan terkoneksi ke Supabase! Silakan akses /items');
  } catch (err) {
    res
      .status(503)
      .send(
        '❌ Terjadi kesalahan saat menjalankan server: API belum siap atau koneksi database gagal.'
      );
  }
});


// 🧠 Cek koneksi Supabase di awal
let isConnected = false;

(async () => {
  try {
    const { error } = await supabase.from('items').select('id').limit(1);
    if (error) throw error;
    isConnected = true;
    console.log('🟢 Koneksi ke Supabase berhasil!');
  } catch (err) {
    console.error('🔴 Gagal terhubung ke Supabase:', err.message);
  }
})();

// 🧩 Middleware untuk handle kalau server “belum siap”
app.use('*', (req, res) => {
  if (!isConnected) {
    return res.status(503).send('❌ Terjadi kesalahan saat menjalankan server: API belum siap atau koneksi database gagal.');
  }
  res.status(404).send('❌ Endpoint tidak ditemukan.');
});

// Jalankan server
const server = app.listen(port, () => {
  console.log(`✅ Server berjalan di http://localhost:${port}`);
});

server.on('error', (err) => {
  console.error('❌ Terjadi kesalahan saat menjalankan server:', err.message);
});
