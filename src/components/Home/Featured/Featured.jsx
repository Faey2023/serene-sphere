import { useEffect, useState } from "react";
import Slider from "react-slick";
import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Featured = () => {
  const [therapist, setTherapist] = useState([]);

  useEffect(() => {
    fetch("/featured.json")
      .then((res) => res.json())
      .then((data) => setTherapist(data));
  }, []);

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-lightBlue hover:bg-blue hover:text-white p-2 rounded-full shadow-lg"
        onClick={onClick}
        style={{ zIndex: 1 }}
      >
        <FaChevronLeft />
      </button>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-lightBlue hover:bg-blue hover:text-white p-2 rounded-full shadow-lg"
        onClick={onClick}
        style={{ zIndex: 1 }}
      >
        <FaChevronRight />
      </button>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <div className="relative w-full md:max-w-[1100px] mx-auto">
      <h1 className="text-lg font-medium my-3">Featured Therapists</h1>
      <div className="bg-white px-4 md:px-7 py-5 md:py-10 rounded-[10px] relative">
        <Slider {...settings}>
          {therapist.map((therapy, index) => (
            <div key={index} className="px-2">
              <Card therapy={therapy} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Featured;
