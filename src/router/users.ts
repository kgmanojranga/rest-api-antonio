import express from "express";

import {deleteUser, getAllUsers, updateUser} from "../controllers/users";
import {isAuthenticated, isOwner} from "../middlewares";

export default (router: express.Router) => {
  router.route("/").get(isAuthenticated, getAllUsers);
  router.route("/:id").patch(isAuthenticated, isOwner, updateUser).delete(isAuthenticated, isOwner, deleteUser);
};
