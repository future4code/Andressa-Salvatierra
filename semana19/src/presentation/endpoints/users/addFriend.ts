import { Request, Response } from "express";
import { JWTAuthentication } from "../../../utils/JWTAuthentication";
import { AddFriendUC } from "../../../business/usecases/users/addFriendUC";
import { UserDB } from "../../../data/userDB";

export const addFriendEndpoint = async (req: Request, res: Response) => {
  try {
    const jwtAuth = new JWTAuthentication();

    const userDataBase = new UserDB();

    const userId = jwtAuth.verifyToken(req.headers.auth as string);

    const useCase = new AddFriendUC(userDataBase);

    const input = {
      userId,
      friendId: req.body.friendId
    };


    await useCase.execute(input);
    res.send({
      message: "User added to friend list"
    });
    
  } catch (err) {
      console.log(err)
    res.status(400).send({
      message: err.message
    });
  }
};
