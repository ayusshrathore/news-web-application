import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../css/general.css";

const General = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        const fetchNews = async () => {
            await Axios.get("http://localhost:8080/general")
                .then(({ data }) => {
                    console.info(data);
                    setNews(data[2]);
                    console.log(news);
                })
                .catch((error) => {
                    console.error(error);
                });
        };
        fetchNews();
    }, []);
    return (
        <>
            <h1 id="sh1">General</h1>
            <br />
            <div id="scontainer">
                <div id="smaincard">
                    <img src={news.image} alt="close" />
                    <p>
                        {news.title}
                        <br />
                    </p>
                    <a href={news.url}>Read More</a>
                </div>
                <div id="sheadlines">
                    <h2 id="sh2">Headlines</h2>
                    <div id="sheadlines-news">
                        <p>
                            What is Lorem Ipsum?Where does it come from?
                            <br />
                            Lorem Ipsum is simply dummy text of the typesetting
                            industry.
                        </p>
                    </div>
                    <div id="sheadlines-news">
                        <p>
                            What is Lorem Ipsum?Where does it come from?
                            <br />
                            Lorem Ipsum is simply dummy text of the typesetting
                            industry.
                        </p>
                    </div>
                    <div id="sheadlines-news">
                        <p>
                            What is Lorem Ipsum?Where does it come from?
                            <br />
                            Lorem Ipsum is simply dummy text of the typesetting
                            industry.
                        </p>
                    </div>
                </div>
            </div>
            <div id="scontainer1">
                <div id="scontainer1-news">
                    <img src={news.image} /> <br />
                    <p>{news.description}</p>
                </div>
                <div id="scontainer1-news">
                    <img src={news.image} /> <br />
                    <p>{news.description}</p>
                </div>
                <div id="scontainer1-news">
                    <img src={news.image} /> <br />
                    <p>{news.description}</p>
                </div>
            </div>
        </>
    );
};

export default General;
