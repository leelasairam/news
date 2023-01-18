const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 8000
const NewsAPI = require('newsapi');
const { response } = require('express');
require('dotenv').config();

const newsapi = new NewsAPI(process.env.API_KEY);

app.use(cors({
    origin: "https://get-global-news.netlify.app"
}));

app.get('/', async(req, res) => {
    let response = await newsapi.v2.topHeadlines({
        category: `${req.query.category}`,
        language: 'en',
        country: `${req.query.country}`
      })
    //console.log(`${req.query.category}` + `${req.query.country}`);
    res.send({articles : response.articles});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})