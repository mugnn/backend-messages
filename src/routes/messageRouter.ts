import { Router } from 'express';
import MessagesController from '../controller/MessagesController';

const Messages = new MessagesController();

export default (router: Router): void => {
  router.post('/send/all', Messages.sendMessage.bind(Messages));
  router.get('/load/messages', Messages.getMessages.bind(Messages));
}

