const NewsAPI = require("newsapi");
const axios = require("axios");
const fs = require("fs");
const newsapi = new NewsAPI("15ef8d90cef04507b6704adb2194bdc9");

newsapi.v2
  .topHeadlines({
    country: "us"
  })
  .then(response => {
    let arraypromise = [];
    for (i = 0; i < response.articles.length; i++) {
      let promise = axios({
        method: "get",
        url: response.articles[i].urlToImage,
        responseType: "stream"
      });
      arraypromise.push(promise);
    }
    return Promise.all(arraypromise);
  })
  .then(response => {
    for (i = 0; i < response.length; i++) {
      response[i].data.pipe(fs.createWriteStream(`./images/downloaded${i}.jpg`));
    }
  })
  .catch(err => console.log(err));
