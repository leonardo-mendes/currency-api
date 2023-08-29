import express, { Request, Response } from "express";
import * as CurrencyService from "./currencyConverter.service";
import { BaseCurrency, Currency } from "./currency.interface";
import { CurrencyConverter } from "./currencyConverter.interface";

export const currencyRouter = express.Router();


currencyRouter.get("/", async (req: Request, res: Response) => {
    try {
      const conversion: Array<CurrencyConverter> = await CurrencyService.convert();
  
      res.status(200).send(conversion);
    } catch (e) {
      console.log(e)
      res.status(500).send(e);
    }
  });