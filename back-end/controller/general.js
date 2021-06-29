const mongoose = require("mongoose");
const general = require("../models/general");

exports.getNews = (req, res) => {
    general
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
