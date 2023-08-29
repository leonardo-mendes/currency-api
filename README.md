## Currency-API

This API was built to retrieve the exchange history between **BRL** and **USD** currencies, [requirements](https://github.com/smartrr-hello/senior_engineer_homework).

### Development Tools

- [Node](https://nodejs.org/en/download) - v16.17.0
- [Nvm](https://github.com/nvm-sh/nvm) - v0.39.5
- [Docker-compose](https://docs.docker.com/compose/install/) - v1.25.0
 
### Running the project

- **First Step:** It'll be necessary to create an `.env` file in the root of the project, example:
```
PORT=7001

API_KEY={Use a valid key}
API_HOST=currency-converter5.p.rapidapi.com
API_URL=https://currency-converter5.p.rapidapi.com/currency/convert

MONGO_HOST=mongodb://127.0.0.1:27017
```

- **Second Step:** Install the Development Tools.
- **Third Step:** `docker-compose up -d` 
- **Fourth Step:** `nvm use` 
- **Fifth Step:** `npm run dev` 

Following the steps above, you will be able to open the endpoint: `http://localhost:7001/currency`

```
Response Structure:
[
  {
    "firstCurrency": {
      "name": "BRL",
      "amount": 1
    },
    "secondCurrency": {
      "name": "USD",
      "amount": 4.8608
    },
    "specificDate": "2023-08-29T19:12:51.118Z"
  }
]
```

##### My thoughts:

It was a very challenging project in which I had to solve many, many development problems, this was my first project using TS and JS in general, but with 3 days this is what I managed to build following some guides:

- https://auth0.com/blog/node-js-and-typescript-tutorial-build-a-crud-api/
- https://rapidapi.com/guides/api-call-typescript
- https://thecodebarbarian.com/working-with-mongoose-in-typescript.html

##### What could have been built better:
- I couldn't write unit tests
- I couldn't put the service in the same mongodb docker-compose file
- I couldn't create a fallback for the rest call, I need to study more about this with ts + fetch
- I've built a simple cron job, but for professional project i think is common to use the node-schedule, right? To handle the concurrency
- As I followed the guides above, I followed their project organization (folder structure, class names, gitignore and etc), but I don't feel confident it was the best structure