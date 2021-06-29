const express = require("express");
const route = express();
const general = require("../controller/general");
const politics = require("../controller/politics");
const sports = require("../controller/sports");
const business = require("../controller/business");

route.get("/general", general.getNews);
route.get("/politics", politics.getNews);
route.get("/sports", sports.getNews);
route.get("/business", business.getNews);

module.exports = route;
