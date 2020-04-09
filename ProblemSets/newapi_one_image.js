const NewsAPI = require("newsapi");
const axios = require('axios');
const fs = require("fs");
const newsapi = new NewsAPI("15ef8d90cef04507b6704adb2194bdc9");

newsapi.v2
  .topHeadlines({
    country: "us"
  })
  .then(response => {
    console.log(response.articles[1].urlToImage);
    return axios({
      method: "get",
      url: response.articles[1].urlToImage,
      responseType: "stream"
    });
  })
  .then(response => {
    console.log(response);
    response.data.pipe(fs.createWriteStream("downloaded.jpg"));
  })
  .catch(err => console.log(err));


  
