const express = require('express');

// handlers
const {
  getAllAnimeHandler,
  addAnimeHandler,
  updateAnimeHandler,
  deleteAnimeHandler,
} = require('./routesHandlers');

const router = express.Router();

router.get('/getAllAnime', getAllAnimeHandler);
router.post('/addAnime', addAnimeHandler);
router.patch('/updateAnime/:id', updateAnimeHandler);
router.delete('/deleteAnime/:id', deleteAnimeHandler);

module.exports = router;
