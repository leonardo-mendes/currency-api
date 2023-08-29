  export interface CurrencyResponse {
    amount: number;
    base_currency_code: string;
    rates: RatesResponse
  } 

  export interface RatesResponse {
    rate: number
  }