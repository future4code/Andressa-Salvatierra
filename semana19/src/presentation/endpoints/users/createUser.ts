import { Request, Response } from "express";
import { CreateUserUC } from "../../../business/usecases/users/createUserUC";
import { UserDB } from "../../../data/userDB";

export const createUserEndpoint = async (req: Request, res: Response) => {
  try {
    const createUserUC = new CreateUserUC(new UserDB());
    const result = await createUserUC.execute({
      email: req.body.email,
      name: req.body.name,
      password: req.body.password
    });
    
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({
      message: err.message,
      ...err
    });
  }
};