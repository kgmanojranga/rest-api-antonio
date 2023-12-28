import express from "express";
import { register, login } from "../controllers/authentication";

export default (router: express.Router) => {
  router.route("/auth/register").post(register);
  router.route("/auth/login").post(login);
};
