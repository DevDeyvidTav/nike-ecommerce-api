import fastify from "fastify";
import { Register } from "./controllers/user/register";

export const app = fastify()

app.post('/users', Register)