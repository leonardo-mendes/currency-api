import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { currencyRouter } from "./currency/currencyConverter.router";
import { errorHandler } from "./middleware/error.middleware";
import connectToMongoDB from "./database/database";
import startCron from "./config/currency.job";

dotenv.config();


if (!process.env.PORT) {
    process.exit(1);
 }
 
 const PORT: number = parseInt(process.env.PORT as string, 10);
 
 const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/currency", currencyRouter);
app.use(errorHandler);

connectToMongoDB()
startCron()

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
  
  dotenv.config();  