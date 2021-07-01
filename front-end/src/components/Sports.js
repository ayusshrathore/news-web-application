import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../css/general.css";

const Sports = () => {
    const [news, setNews] = useState([]);
    const fetchNews = async () => {
        await Axios.get("http://localhost:8080/sports")
            .then(({ data }) => {
                console.info(data);
                setNews(data);
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
                <p>{article.description}</p>
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
                <a href={article.url}>Read More</a>
            </div>
        );
    });
    const headlines = news.filter((article, index) => {
        return index <= 3;
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
            <h1 id="sh1">Sports</h1>
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

export default Sports;
