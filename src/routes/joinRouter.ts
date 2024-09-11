import { Router } from 'express';
import JoinController from "../controller/JoinContoller";

const Join = new JoinController();

export default (router: Router): void => {
  router.post('/join', Join.createSession.bind(Join))
}

