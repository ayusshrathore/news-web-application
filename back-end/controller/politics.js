const mongoose = require("mongoose");
const politics = require("../models/politics");

exports.getNews = (req, res) => {
    politics
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
