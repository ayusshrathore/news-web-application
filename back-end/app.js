const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const News = require("./models/general");
const axios = require("axios");
const route = require("./routes/newsRoute");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

mongoose
    .connect("mongodb://localhost:27017/news", {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => {
        console.info("--- Database Connected Successfully ---");
    })
    .catch(() => {
        console.error("--- Database connection failed ---");
    });

const PORT = 8080;

app.listen(PORT, () => {
    console.info(`Server listening on PORT ${PORT}`);
});

// const url =
//     "https://api.currentsapi.services/v1/latest-news?apiKey=2pTytc0fCfwtIH5e7F16sYiP70MRteZHswUtjaW4i5uMU9Gm&language=en&country=in&category=business";
// const fetchNews = async () => {
//     await axios
//         .get(url)
//         .then(({ data }) => {
//             // console.info(data.news);
//             for (let index in data.news) {
//                 //console.log(data.news[index].title);
//                 let title = data.news[index].title;
//                 let description = data.news[index].description;
//                 let url = data.news[index].url;
//                 let image = data.news[index].image;
//                 let category = data.news[index].category[0];
//                 let business = new News({
//                     title,
//                     description,
//                     url,
//                     image,
//                     category,
//                 });
//                 business
//                     .save()
//                     .then()
//                     .catch((error) => {
//                         console.error(error);
//                     });
//             }
//             console.info("News Saved");
//         })
//         .catch((error) => {
//             console.error(error);
//         });
// };

// fetchNews();
app.use(route);
