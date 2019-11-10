import express from 'express';
import {
  getBoardGameById,
  createBoardGame,
  getAllBoardGames,
  searchBoardGames,
  playersSearchBoardGames
} from "../services/boardGames/boardGameRepo";

// Create a new rouer to handle board games
const router = express.Router();

router.get("/", async (req, res) => {
  const boardGames = await getAllBoardGames();
  
  res.status(200).send(boardGames);
});

router.get("/search", async (req, res) => {
  const searchValue = req.query.search;
  const boardGames = await searchBoardGames(searchValue);
  if (!boardGames) {
    res.status(404).send();
  } else {
    res.send(boardGames);
  }
});

router.get("/players-search", async (req, res) => {
  const playersNumber = req.query.players;
  const boardGames = await playersSearchBoardGames(playersNumber);
  if (!boardGames) {
    res.status(404).send();
  } else {
    res.send(boardGames);
  }
});

router.get("/:id", async (req, res) => {
  const {
    id
  } = req.params;

  const boardGame = await getBoardGameById(id);

  if (!boardGame) {
    res.status(404).send();
  } else {
    res.send(boardGame);
  }
});

export default router;