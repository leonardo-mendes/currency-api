import { Currency } from "./currency.interface";

export interface CurrencyConverter {
  firstCurrency: Currency;
  secondCurrency: Currency;
  specificDate: Date;
}