import express = require('express')
import { createUserEndpoint } from "./endpoints/users/createUser";
import { loginEndpoint } from './endpoints/users/login';

const app = express();
app.use(express.json());

app.post("/createUser", createUserEndpoint);
app.post("/login", loginEndpoint)

export default app;
