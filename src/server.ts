import dotenv from "dotenv";
import app from "./app";
import connectMongoDB from "./config/mongodb";

dotenv.config({ path: "./config.env" });

let MONGO_DB;

if (process.env.DATABASE && process.env.PASSWORD) {
  MONGO_DB = process.env.DATABASE?.replace("<PASSWORD>", process.env.PASSWORD);
  connectMongoDB(MONGO_DB);
} else {
  console.log("Connecting string is or password not available");
}

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
