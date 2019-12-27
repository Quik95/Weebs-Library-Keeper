const shortId = require('shortid');
const db = require('../db/lowdb');
const validator = require('../validators/validateAnimeData');

exports.getAllAnimeHandler = (req, res) => {
  try {
    const animeList = db.get('animeList');
    return res.status(200).json(animeList);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'An error ocurred on the server side. Please try again.',
      error: 'INTERNAL_ERROR',
    });
  }
};

exports.addAnimeHandler = (req, res) => {
  try {
    const errors = validator(req.body);
    if (Object.keys(errors).length > 0) return res.status(400).json(errors);

    const newAnime = db
      .get('animeList')
      .push({
        ...req.body,
        _id: shortId.generate(),
        watchedEpisode: 0,
      })
      .write();

    return res.status(201).json(newAnime);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'An error ocurred on the server side. Please try again.',
      error: 'INTERNAL_ERROR',
    });
  }
};

exports.updateAnimeHandler = (req, res) => {
  try {
    const { _id } = req.params;

    const ifAnimeExists = db
      .get('animeList')
      .find({ _id })
      .value();

    if (!ifAnimeExists)
      return res.status(404).json({
        message: 'Could not find anime with given id.',
        error: 'NOT_FOUND',
      });

    const errors = validator(req.body);
    if (Object.keys(errors).length > 0) return res.status(400).json(errors);

    db.get('animeList')
      .find({ _id })
      .assign({ _id, ...req.body })
      .write();

    const updatedAnimeList = db.get('animeList').value();

    return res.status(200).json(updatedAnimeList);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'An error ocurred on the server side. Please try again.',
      error: 'INTERNAL_ERROR',
    });
  }
};

exports.deleteAnimeHandler = (req, res) => {
  try {
    const { _id } = req.params;

    const deletedAnime = db
      .get('animeList')
      .remove({ _id })
      .write();
    if (deletedAnime.length === 0)
      return res.status(404).json({
        message: 'Could not find anime with given id.',
        error: 'NOT_FOUND',
      });
    return res.status(204).json(deletedAnime);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'An error ocurred on the server side. Please try again.',
      error: 'INTERNAL_ERROR',
    });
  }
};
