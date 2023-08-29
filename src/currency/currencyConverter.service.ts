import { CurrencyConverter } from "./currencyConverter.interface";
import { ICurrency, Currency as CurrencySchema } from '../database/currency.model'


export const convert = async (): Promise<Array<CurrencyConverter>> => {


  const currencies: Array<ICurrency> = await CurrencySchema.find({}).sort({createdAt: 'desc'}).limit(24);

  return currencies.map(
    (databaseData) => {
      return {
        firstCurrency : {
            name: "BRL",
            amount: 1
          },
          secondCurrency: {
            name: databaseData.name,
            amount: databaseData.value
          },
          specificDate : databaseData.specificDate
        }
    }
  )
}