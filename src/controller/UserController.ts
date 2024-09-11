import { Request, Response } from "express";
import UserSessionModel from "../models/users";

class UserController {
  public async getUserData(req: Request, res: Response): Promise<any> {
    try {
      const { token } = req.query;

      const userData = await UserSessionModel.findById(token);

      if (!userData) {
        return res.status(500).send({
          status: "error"
        });
      }

      return res.send(userData)
    } catch (error) {
      console.error(error);
      return res.send({
        status: "error",
        error: error
      })
    }
  }
}

export default UserController;