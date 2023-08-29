import { CurrencyResponse } from './externalCurrency.interface'


async function getConvertedData(): Promise<CurrencyResponse> {

  const url = `${process.env.API_URL}?format=json&from=USD&to=BRL&amount=1`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY as string,
      'X-RapidAPI-Host': process.env.API_HOST as string
    }
  };

  const response = await fetch(url, options);
  const result = await response.json();
  return result as Promise<CurrencyResponse>
}

export { getConvertedData }