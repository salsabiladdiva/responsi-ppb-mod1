const express = require('express');
const { ItemController } = require('../controllers/itemController');

const router = express.Router();

router.get('/', ItemController.getAll);
router.get('/:id', ItemController.getById);
router.post('/', ItemController.create);
router.put('/:id', ItemController.update);
router.delete('/:id', ItemController.remove);

module.exports = router;