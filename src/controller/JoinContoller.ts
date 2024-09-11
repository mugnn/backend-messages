import { Request, Response } from "express";
import UserSessionModel from "../models/users";

interface User {
  name: string;
  alias: string;
}

class JoinController {
  public async createSession(req: Request, res: Response): Promise<any> {
    try {
      const { name, alias }: User = req.body as User;

      if (!name) {
        return res.status(500).send('request must conatain "name"');
      }

      const response = await UserSessionModel.create({
        name: name,
        alias: alias,
        icon_color: this.getRandomRgbColor(),
      });

      console.log(`user: ${name} join`);
      return res.send({
        status: "ok",
        data: response,
      });
    } catch (error) {
      console.error(error);
    }
  }

  private getRandomRgbColor(): string {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
}

export default JoinController;
