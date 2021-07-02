import React, { useEffect, useState } from "react";
import "../css/home.css";
import body from "./images/body.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";
import SwiperCore, { EffectFade, Autoplay } from "swiper/core";
import Axios from "axios";

SwiperCore.use([EffectFade, Autoplay]);

const Home = () => {
  const [news, setNews] = useState([]);
  const fetchNews = async () => {
    await Axios.get("http://localhost:8080/general")
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
      <SwiperSlide key={index}>
        <img src={article.image} alt={"news"} />
        <div id={"title"}>
          {article.title}
          <br /> <br />
          <a href={article.url}>Read More</a>
        </div>
      </SwiperSlide>
    );
  });
  return (
    <>
      <div className="container">
        <div id="item1">
          <img src={body} alt={"alt"} />
        </div>
        <div id="item2">
          <h1>DISCOVER...</h1>
          <p>
            Take some time and discover <br /> what's happening around the
            globe.
          </p>
          <div className="carousel">
            <Swiper
              spaceBetween={30}
              loop={true}
              effect={"fade"}
              autoplay={{ delay: 3000 }}
              className="mySwiper"
            >
              {renderNews}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
