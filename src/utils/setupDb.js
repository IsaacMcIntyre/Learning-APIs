import mongoose from "mongoose";
import log from "./log";

export default (mongoDbUri, databaseName) => {

  const connectionString = createConnString(mongoDbUri, databaseName);

  // Create the database connection
  mongoose.connect(connectionString);

  // CONNECTION EVENTS
  // When successfully connected
  mongoose.connection.on("connected", function() {
  	log.verbose("Mongoose default connection open to database " + databaseName);
  });

  // If the connection throws an error
  mongoose.connection.on("error", function(err) {
  	log.verbose("Mongoose default connection error: " + err);
  });

  // When the connection is disconnected
  mongoose.connection.on("disconnected", function() {
  	log.verbose("Mongoose default connection disconnected");
  });

  // If the Node process ends, close the Mongoose connection
  process.on("SIGINT", function() {
  	mongoose.connection.close(function() {
  		log.verbose(
  			"Mongoose default connection disconnected through app termination"
  		);
  		process.exit(0);
  	});
  });

  return mongoose;
};

const createConnString = (mongoDbUri, databaseName) => `${mongoDbUri}/${databaseName}`;
