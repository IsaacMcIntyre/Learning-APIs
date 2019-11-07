import express from 'express';
import config from './config';

const port = config.SERVER_PORT;
const app = express();

// Enable pasrsing of request bodies to json
app.use(express.json());

app.listen(port, () => console.log(`Listening on port ${port}!`));

export default app;
