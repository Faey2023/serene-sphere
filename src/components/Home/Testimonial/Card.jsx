import { IoLocationSharp } from "react-icons/io5";

const Card = ({ testimonial }) => {
  console.log(testimonial);
  const { doctor, image, location, review, title } = testimonial || {};
  return (
    <div className="flex gap-2 border border-lightGray rounded-[10px] p-3">
      <img
        // className="w-32 h-36"
        src={image}
        alt=""
      />
      <div className="flex justify-center items-center">
        <div className="space-y-3">
          <p className="inline-flex gap-2 text-gray justify-center items-center">
            <IoLocationSharp />
            {location}
          </p>
          <p className="text-sm font-medium">
            {title}{" "}
            <span className="italic text-blue font-semibold">{doctor}</span>
          </p>
          <p className="text-xs text-gray">{review}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
