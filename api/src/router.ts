import * as Router from "koa-router";

import { signUp } from "./signUp";
import { login } from "./login";
import { getUser } from "./user";
import { validateSignUp, validateLogin } from "./validation";
import { checkAuth } from "./middleware";

const router = new Router();

// test endpoint
router.get("/", ctx => (ctx.status = 200));

router.get("/user", checkAuth, getUser);

router.post("/login", validateLogin, login);

router.post("/signup", validateSignUp, signUp);

export default router;
