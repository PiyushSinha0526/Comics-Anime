import React from "react";
import "./css/Top.css";

// components and custom hook
import Card from "./Card";
import useAxios from "./useAxios";

// from npm package
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CardSlider({type}) {
  const [resource, loading] = useAxios(
    `https://api.jikan.moe/v3/top/${type}/1`
  );

  const settings = {
    className: "CardSlider__container",
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "ease-in-out",
    responsive: [{
      breakpoint: 1260,
      settings: {
        slidesToShow: 4,
        infinite: true,
      },
    },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (loading) return "loading";
  return (
    <>
      <div className="CardSlider">
        <h1>Top {type}</h1>
        <Slider {...settings}>
          {resource.top.slice(0,20).map((res) => {
            return <Card key={res.mal_id} data={res} />;
          })}
        </Slider>
      </div>
    </>
  );
}
