import cron from 'node-cron';
import { getConvertedData } from "../external/externalCurrency.integration";
import { CurrencyResponse } from "../external/externalCurrency.interface";
import { ICurrency, Currency as CurrencySchema } from '../database/currency.model'

export default function startCron(): void {
    cron.schedule('*/10 * * * * *', async () => {

      const data: CurrencyResponse = await getConvertedData();
      
      (async function() {  
        const currency: ICurrency = await CurrencySchema.create({
          name: data.base_currency_code,
          value : data.rates["BRL"].rate,
          specificDate: Date.now()
        });
      
        console.log(`Created new row for the ${data.base_currency_code} exchange`);
      })();
      });  
}