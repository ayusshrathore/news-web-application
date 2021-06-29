const mongoose = require("mongoose");
const business = require("../models/business");

exports.getNews = (req, res) => {
    business
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
