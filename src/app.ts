import express, { Request, Response, NextFunction } from "express";
import routes from "./routes";
import appRoute from "./routes";
import connectDB from "./utils/database/database";
import { appErrorHandler } from "./utils/middleware/errorHandler.middleware";
import cors from "cors";


const app = express();
app.use(express.json());
app.use(cors({
  origin:"*"
}))

app.get("/", (req: Request, res: Response) => {
  return res.send("Api is working 🚀");
});

app.listen(5000, () => {
  console.log("Server listening on port 5000 🦅");
});

connectDB() 
app.use(appRoute);
app.use(appErrorHandler);