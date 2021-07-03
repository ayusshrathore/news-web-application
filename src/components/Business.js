import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../css/general.css";

const Business = () => {
    const [news, setNews] = useState([]);
    const url =
        "https://api.currentsapi.services/v1/latest-news?apiKey=2pTytc0fCfwtIH5e7F16sYiP70MRteZHswUtjaW4i5uMU9Gm&language=en&country=in&category=business";
    const fetchNews = async () => {
        await Axios.get(url)
            .then((response) => {
                console.info(response.data.news);
                setNews(response.data.news);
            })
            .catch((error) => {
                console.error(error);
            });
    };
    useEffect(() => {
        fetchNews();
    }, []);
    const renderNews = news.map((article, index) => {
        return (
            <div id="scontainer1-news" key={index}>
                <img src={article.image} alt={"news"} /> <br />
                <p>{article.title}</p>
            </div>
        );
    });
    const main = news.filter((article, index) => {
        return index === 0;
    });
    const renderMain = main.map((article, index) => {
        return (
            <div id="smaincard" key={index}>
                <img src={article.image} alt="close" />
                <p>
                    {article.title}
                    <br />
                </p>
                {/* <a href={article.url}>Read More</a> */}
            </div>
        );
    });
    const headlines = news.filter((article, index) => {
        return index <= 2;
    });
    console.log(headlines);
    const renderHeadlines = headlines.map((article, index) => {
        return (
            <div id="sheadlines-news" key={index}>
                <p> {article.title}</p>
            </div>
        );
    });
    return (
        <>
            <h1 id="sh1">Business</h1>
            <br />
            <div id="scontainer">
                {renderMain}
                <div id="sheadlines">
                    <h2 id="sh2">Headlines</h2>
                    {renderHeadlines}
                </div>
            </div>
            <div id="scontainer1">{renderNews}</div>
        </>
    );
};

export default Business;
