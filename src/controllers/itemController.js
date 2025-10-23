const { ItemModel } = require('../models/itemModel');

const ItemController = {
  async getAll(req, res) {
    try {
      const { status } = req.query;
      const items = await ItemModel.getAll(status);
      res.json(items);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params;
      const item = await ItemModel.getById(id);
      res.json(item);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },

  async create(req, res) {
    try {
      const item = await ItemModel.create(req.body);
      res.status(201).json(item);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const item = await ItemModel.update(id, req.body);
      res.json(item);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async remove(req, res) {
  try {
    const { id } = req.params;
    const result = await ItemModel.remove(id);
    res.json(result);
  } catch (err) {
    console.error(err); // <--- tambahkan ini
    res.status(400).json({ error: err.message });
  }}

};

module.exports = { ItemController };
