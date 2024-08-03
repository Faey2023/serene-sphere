import { useEffect, useState } from "react";

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
        {testimonials.map((testimonial, index) => (
          <Card key={index} testimonial={testimonial} />
        ))}
      </div>
    </>
  );
};

export default Testimonial;
