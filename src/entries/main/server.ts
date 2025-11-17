import { static as expressStatic, Router } from "express";
import { render } from "./render.ts";

export let server = Router();

server.use("/_main/", expressStatic("src/entries/main/public"));
server.get("/", render());
