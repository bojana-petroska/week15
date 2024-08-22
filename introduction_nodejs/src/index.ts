import dotenv from 'dotenv';
import express from 'express';
import router from './routes.js';

dotenv.config();

const port = process.env.PORT;
const app = express();

// middleware to pass data as json
app.use(express.json());

app.use(router);

// create a server with express
app.listen(port, () => {
  console.log(`server is running at: http://localhost:${port}`);
});
