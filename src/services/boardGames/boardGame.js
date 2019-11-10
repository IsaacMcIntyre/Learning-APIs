import db from '../../db';

const { model, Schema } = db;

const boardGameSchema = new Schema({
	'name': String,
	'price': Number,
	'category': String,
  'minPlayers': Number,
  'maxPlayers': Number
},
{ collection : 'boardGames' });

const BoardGame = model('boardGame', boardGameSchema);

export default BoardGame;
