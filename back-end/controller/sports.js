const mongoose = require("mongoose");
const sports = require("../models/sports");

exports.getNews = (req, res) => {
    sports
        .find()
        .then((data) => {
            console.info(data);
            return res.status(200).send(data);
        })
        .catch((error) => {
            console.error(error);
            return res.status(500).send(error);
        });
};
