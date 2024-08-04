import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
// import './style.css'

import Card from "./Card";
const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("/testimonial.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTestimonials(data);
      });
  }, []);
  return (
    <>
      <div className="container">
        <h1 className="text-lg font-medium my-3">Featured Testimonial</h1>
        <div className="bg-white rounded-[10px] p-5">
          {testimonials.map((testimonial, index) => (
            <Card key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonial;
