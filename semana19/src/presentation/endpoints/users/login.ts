import { Request, Response } from "express";
import { LoginUC } from "../../../business/usecases/users/loginUC";
import { UserDB } from "../../../data/userDB";

export const loginEndpoint = async (req: Request, res: Response) => {
  try {
    const loginUC = new LoginUC(new UserDB());
    const token = await loginUC.execute({
      email: req.body.email,
      password: req.body.password
    });
    
    res.send({ message: "Usuário logado com sucesso", token })

  } catch (err) {
    res.status(400).send({
      message: err.message,
      ...err
    });
  }
};