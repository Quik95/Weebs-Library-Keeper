const express = require('express');

// handlers
const {
  getAllAnimeHandler,
  addAnimeHandler,
  updateAnimeHandler,
  deleteAnimeHandler,
  getAnimeHandler
} = require('./routesHandlers');

const router = express.Router();

router.get('/getAllAnime', getAllAnimeHandler);
router.get('/getAnime/:_id', getAnimeHandler);
router.post('/addAnime', addAnimeHandler);
router.patch('/updateAnime/:_id', updateAnimeHandler);
router.delete('/deleteAnime/:_id', deleteAnimeHandler);

module.exports = router;
