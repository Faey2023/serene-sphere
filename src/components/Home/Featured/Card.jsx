import { IoLocationSharp } from "react-icons/io5";
import { FaCar } from "react-icons/fa";

const Card = ({ therapy }) => {
  const { name, image, location, therapyPlace } = therapy || {};
  return (
    <div className="w-full sm:w-56 h-auto sm:h-72 mb-5 sm:mb-0">
      <div className="p-3 space-y-2 rounded-[10px] border border-lightGray rounded-b-none flex flex-col justify-center bg-white">
        <img src={image} alt={`image of ${name}`} className="w-full h-32 object-cover rounded-t-[10px]" />
        <h1 className="font-medium text-sm">{name}</h1>
        <div className="text-gray text-xs flex flex-col space-y-2">
          <p className="inline-flex items-center gap-2">
            <IoLocationSharp />
            {location}
          </p>
          <p className="inline-flex items-center gap-2">
            <FaCar />
            {therapyPlace}
          </p>
        </div>
      </div>
      <button className="rounded-2xl rounded-t-none bg-lightBlue hover:bg-blue text-black hover:text-white text-sm font-medium w-full pb-2 pl-2 h-11 underline hover:cursor-pointer">
        See Details
      </button>
    </div>
  );
};

export default Card;
