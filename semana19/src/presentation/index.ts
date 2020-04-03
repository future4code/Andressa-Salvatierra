import express = require('express')
import { createUserEndpoint } from "./endpoints/users/createUser";
import { loginEndpoint } from './endpoints/users/login';
import { addFriendEndpoint } from './endpoints/users/addFriend';
import { deleteFriendEndpoint } from './endpoints/users/deleteFriend';

const app = express();
app.use(express.json());

app.post("/createUser", createUserEndpoint)
app.post("/login", loginEndpoint)
app.post("/addFriend", addFriendEndpoint)
app.delete("/deleteFriend", deleteFriendEndpoint)

export default app;
