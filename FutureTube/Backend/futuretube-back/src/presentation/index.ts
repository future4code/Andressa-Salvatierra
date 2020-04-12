import express, { Request, Response } from "express";
import cors from "cors";
import { createUserEndpoint } from "./endpoints/user/createUser";
import { loginUserEndpoint } from "./endpoints/user/loginUser";
import { changePasswordEndpoint } from "./endpoints/user/changePassword";
import { uploadVideoEndpoint } from "./endpoints/video/uploadVideo";

const app = express();
app.use(express.json());
app.use(cors());


app.post("/users/create", createUserEndpoint);
app.post("/users/changePassword", changePasswordEndpoint);
app.post("/login", loginUserEndpoint);
app.post("/videos/uploadVideo", uploadVideoEndpoint)
// app.post("/users", getUserByTypeEndpoint);

// app.get("/users/students", getAllStudentsEndpoint);

export default app;
