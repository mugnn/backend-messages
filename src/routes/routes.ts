import express from "express"

import joinRouter from "./joinRouter";
import defaultRouter from "./defaultRouter";
import messageRouter from "./messageRouter";
import userRouter from "./userRouter";


export default (app: express.Application): void => {
  const router = express.Router();

  joinRouter(router);
  defaultRouter(router);
  messageRouter(router);
  userRouter(router);

  app.use('/api', router);
}