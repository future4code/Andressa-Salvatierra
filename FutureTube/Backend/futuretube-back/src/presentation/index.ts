import express from "express";
import cors from "cors";
import { createUserEndpoint } from "./endpoints/user/createUser";
import { loginUserEndpoint } from "./endpoints/user/loginUser";
import { changePasswordEndpoint } from "./endpoints/user/changePassword";
import { uploadVideoEndpoint } from "./endpoints/video/uploadVideo";
import { GetVideoByUserIdEndpoint } from "./endpoints/video/getVideoByUserId";
import { EditVideoInfoEndpoint } from "./endpoints/video/editVideoInfo";
import { DeleteVideoEndpoint } from "./endpoints/video/deleteVideo";

const app = express();
app.use(express.json());
app.use(cors());


app.post("/users/create", createUserEndpoint);
app.post("/users/changePassword", changePasswordEndpoint);
app.post("/login", loginUserEndpoint);
app.post("/videos/uploadVideo", uploadVideoEndpoint)
app.post("/videos/editVideoInfo/:videoId", EditVideoInfoEndpoint)

app.get("/videos/:userId" || "/videos/", GetVideoByUserIdEndpoint)

app.delete("/videos/delete/:videoId", DeleteVideoEndpoint)


export default app;
