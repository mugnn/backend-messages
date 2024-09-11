import express, { Express } from 'express';
const cors = require('cors');
import routes from '../routes/routes';

const app: Express = express();
app.use(cors())
app.use(express.json())


routes(app)
module.exports = app;