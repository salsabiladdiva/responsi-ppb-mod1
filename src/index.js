const express = require('express');
const cors = require('cors');
require('dotenv').config();

const itemRoutes = require('./routes/itemRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// routes
app.use('/items', itemRoutes);

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('API berjalan! Silakan akses /items');
});

app.listen(port, () => console.log(`Server running on port ${port}`));
