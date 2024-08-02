import { useEffect, useState } from "react";

const Cities = () => {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    fetch("../../../public/cities.json")
      .then((res) => res.json())
      .then((data) => setCities(data.name));
  }, []);

  return (
    <div>
      <h1 className="text-lg font-medium my-3">Popular Cities</h1>
      <div className="bg-white rounded-[10px] p-5">
        <div className="grid grid-cols-3 gap-5">
          {cities.map((city, index) => (
            <div key={index} className="w-full">
              <p className="text-blue underline border-b border-[#E7E7E7] pb-2">
                {city}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cities;
