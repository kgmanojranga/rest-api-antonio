import express from "express";
import { get, merge } from "lodash";
import { getUserBySessionToken } from "./../models/userModel";

export const isAuthenticated = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const sessionToken = req.cookies["MANOJ-AUTH"];
    if (!sessionToken) {
      return res.sendStatus(403);
    }

    const existingUser = await getUserBySessionToken(sessionToken);

    if (!existingUser) {
      return res.sendStatus(403);
    }
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
