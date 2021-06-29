import React, { useEffect, useState } from "react";
import "../css/home.css";
import body from "./images/body.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/core";
import Axios from "axios";

SwiperCore.use([EffectFade, Autoplay, Navigation, Pagination]);

const Home = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      await Axios.get("http://localhost:8080/general")
        .then(({ data }) => {
          console.info(data);
          setNews(data[7]);
          console.log(news);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    fetchNews();
  }, []);

  return (
    <div>
      <div className="navbar">
        <div id="navbar-items">
          <div>
            <i className="fas fa-home"></i> Home
          </div>
          <div>
            <i className="far fa-file-alt"></i> General
          </div>
          <div>
            <i className="fas fa-landmark"></i> Politics
          </div>
          <div>
            <i className="fas fa-futbol"></i> Sports
          </div>
          <div>
            <i className="fas fa-business-time"></i> Business
          </div>
        </div>
      </div>
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
          <div className={"carousel"}>
            <Swiper
              spaceBetween={30}
              loop={true}
              effect={"fade"}
              autoplay={{ delay: 5000 }}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={news.image} />
                <div id={"title"}>{news.title}</div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
