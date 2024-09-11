import { Router } from 'express';
import UserController from '../controller/UserController';

const userController = new UserController();

export default (router: Router): void => {
  router.get('/user/data', userController.getUserData.bind(userController));
}

