import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Styles from "../Styles/Component-Styles/DataSlider.module.css";

import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import GitHubIcon from "@mui/icons-material/GitHub";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Autoplay, Mousewheel } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import "swiper/css/effect-fade ";

const DataSlider = () => {
  const [data, setData] = useState([]);

  const url = `https://fakestoreapi.com/products/category/electronics`;

  const getPersonelData = useCallback(async () => {
    try {
      const request = await axios.get(url);
      console.log(request);
      setData(request.data);
    } catch (err) {
      console.log(err);
    }
  }, [url]);

  useEffect(() => {
    getPersonelData();
  }, [getPersonelData]);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 100) {
  //       setBackToTop(true);
  //     } else {
  //       setBackToTop(false);
  //     }
  //   });
  // }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={Styles.Slider_Container}>
      <h3 className={Styles.Slider_Title}>Product</h3>

      <Swiper
        speed={800}
        modules={[Navigation, FreeMode, Mousewheel, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        loop
        pagination={{
          dynamicBullets: true,
        }}
        mousewheel={true}
        className={Styles.Swiper}
        breakpoints={{
          360: {
            width: 360,
            slidesPerView: 1,
            spaceBetween: 10,
          },
          380: {
            width: 380,
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          480: {
            width: 480,
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          768: {
            width: 768,
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1920: {
            width: 1920,
            slidesPerView: 5,
            spaceBetween: 0,
          },
        }}
      >
        {data &&
          data.map((value) => {
            return (
              <SwiperSlide className={Styles.Slide} key={value.id}>
                <Link onClick={scrollUp} to={"/Personel/" + value.id}>
                  <div className={Styles.Card}>
                    <div className={Styles.Header}>
                      <div className={Styles.Avatar_Container}>
                        <img
                          src={value.image}
                          alt=""
                          className={Styles.Avatar}
                        />
                      </div>

                      <div className={Styles.Header_Information_Box}>
                        {/* <h3 className={Styles.Large_Text}>
                          {value.first_name}
                          &nbsp;
                          {value.last_name}
                        </h3>

                        <p className={Styles.Small_Text}>
                          {value?.address?.state}
                        </p> */}
                      </div>
                    </div>

                    <div className={Styles.Body}>
                      <p className={Styles.Small_Text}>
                        <span>id:</span>
                        &nbsp;
                        {value?.id}
                      </p>
                      <p className={Styles.Small_Text}>
                        <span>Title:</span>
                        &nbsp;
                        {value?.title}
                      </p>
                      <p className={Styles.Small_Text}>
                        <span>Category:</span>
                        &nbsp;
                        {value?.category}
                      </p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default DataSlider;
