import { Request, Response } from "express";
import { JWTAuthentication } from "../../../utils/JWTAuthentication";
import { DeleteFriendUC } from "../../../business/usecases/users/deleteFriendUC";
import { UserDB } from "../../../data/userDB";

export const deleteFriendEndpoint = async (req: Request, res: Response) => {
  try {
    const jwtAuth = new JWTAuthentication();

    const userDataBase = new UserDB();

    const userId = jwtAuth.verifyToken(req.headers.auth as string);

    const useCase = new DeleteFriendUC(userDataBase);

    const input = {
      userId,
      friendId: req.body.friendId
    };


    await useCase.execute(input);
    res.send({
      message: "User deleted succesfully"
    });
    
  } catch (err) {
      console.log(err)
    res.status(400).send({
      message: err.message
    });
  }
};
