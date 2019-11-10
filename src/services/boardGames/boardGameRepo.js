import BoardGame from "./boardGame";

export const getBoardGameById = id => BoardGame.findById(id).exec();

export const getAllBoardGames = () => BoardGame.find().exec();

export const createBoardGame = boardGame => {
  let newBoardGame = new BoardGame(boardGame);

  return new Promise((success, fail) => {
      newBoardGame
          .save()
          .then(success)
          .catch(fail);
  });

};

export const searchBoardGames = searchValue => BoardGame.find({name: {$regex : "(?i).*"+searchValue+".*"}});
