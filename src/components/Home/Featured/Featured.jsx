// import { useEffect, useState } from "react";
// import Card from "./Card";

// const Featured = () => {
//   const [therapist, setTherapist] = useState([]);

//   useEffect(() => {
//     fetch("/featured.json")
//       .then((res) => res.json())
//       .then((data) => setTherapist(data));
//   }, []);

//   return (
//     <div>
//       <h1 className="text-lg font-medium my-3">Featured Therapist</h1>
//       <div className="bg-white p-10 rounded-[10px]">
//         <div className="flex gap-5">
//           {therapist.map((therapy, index) => (
//             <Card key={index} therapy={therapy} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Featured;

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

  // buttons
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
        onClick={onClick}
      >
        <FaChevronLeft />
      </button>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
        onClick={onClick}
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
    centerMode: false,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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

  return (
    <div>
      <h1 className="text-lg font-medium my-3">Featured Therapist</h1>
      <div className="bg-white p-5 rounded-[10px] w-full overflow-hidden">
        <Slider {...settings}>
          {therapist.map((therapy, index) => (
            <Card key={index} therapy={therapy} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Featured;
