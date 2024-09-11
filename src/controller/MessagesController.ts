import { Request, Response } from "express";
import mongoose, { Types } from "mongoose";
import MessageModel from "../models/messages";
import pusher from "../config/pusher";

const { DateTime } = require("luxon");

interface Message {
  content: string;
  user_id: string;
}

class MessagesController {

  public async sendMessage(req: Request, res: Response): Promise<any> {
    try {
      const { content, user_id }: Message = req.body as Message;

      if (!Types.ObjectId.isValid(user_id)) {
        return res.send({
          status: "error",
          message: "invalid user id.",
        });
      }

      const userRef = new Types.ObjectId(user_id);

      await MessageModel.create({
        time: DateTime.now().setZone("America/Sao_Paulo").toISO(),
        content: content,
        user: userRef,
      });

      const messages_document = await MessageModel.find({}).populate('user');
      this.broadcastingMessages(messages_document);

      return res.send({
        status: "sent",
        message: "message sent to general chat.",
      });
    } catch (error) {
      console.error(error);
      res.send({
        status: "error",
        message: error
      })
    }
  }

  public async getMessages(req: Request, res: Response): Promise<any> {
    try {
      const doc = await MessageModel.find({}).populate('user');

      return res.send(doc)
    } catch (error) {
      console.error(error)
      res.send({
        status: "error",
        message: error
      })
    }
  }

  private broadcastingMessages(document: object[]): void {
    pusher.trigger('messages-channel', 'inserted', document);
  }
}

export default MessagesController;
