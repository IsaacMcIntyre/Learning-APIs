import express from 'express';
import config from './config';
import loggerMiddleware from './utils/loggerMiddleware';

const port = config.SERVER_PORT;
const app = express();

// Enable pasrsing of request bodies to json
app.use(express.json());

// Add logging to each request
app.use(loggerMiddleware);

app.listen(port, () => console.log(`Listening on port ${port}!`));

export default app;
