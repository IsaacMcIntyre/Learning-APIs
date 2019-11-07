import mongoose from "mongoose";

export default (mongoDbUri, databaseName) => {

  const connectionString = createConnString(mongoDbUri, databaseName);

  // Create the database connection
  mongoose.connect(connectionString);

  // CONNECTION EVENTS
  // When successfully connected
  mongoose.connection.on("connected", function() {
  	console.log("Mongoose default connection open to database " + databaseName);
  });

  // If the connection throws an error
  mongoose.connection.on("error", function(err) {
  	console.log("Mongoose default connection error: " + err);
  });

  // When the connection is disconnected
  mongoose.connection.on("disconnected", function() {
  	console.log("Mongoose default connection disconnected");
  });

  // If the Node process ends, close the Mongoose connection
  process.on("SIGINT", function() {
  	mongoose.connection.close(function() {
  		console.log(
  			"Mongoose default connection disconnected through app termination"
  		);
  		process.exit(0);
  	});
  });

  return mongoose;
};

const createConnString = (mongoDbUri, databaseName) => `${mongoDbUri}/${databaseName}`;
