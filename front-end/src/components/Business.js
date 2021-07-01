import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../css/general.css";

const Business = () => {
    const [news, setNews] = useState([]);
    const fetchNews = async () => {
        await Axios.get("http://localhost:8080/business")
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
    const article = news[0];
    console.log(article);
    return (
        <>
            <h1 id="sh1">Business</h1>
            <br />
            <div id="scontainer">
                <div id="smaincard">
                    {/* <img src={article.image} alt="close" />
                    <p>
                        {article.title}
                        <br />
                    </p>
                    <a href={news.url}>Read More</a> */}
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
            <div id="scontainer1">{renderNews}</div>
        </>
    );
};

export default Business;
