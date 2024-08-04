import { useEffect, useState } from "react";

const Cities = () => {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    fetch("/cities.json")
      .then((res) => res.json())
      .then((data) => setCities(data.name));
  }, []);

  return (
    <div>
      <h1 className="text-lg font-medium my-3">Popular Cities</h1>
      <div className="bg-white rounded-[10px] p-2">
        <div className="grid grid-cols-3 text-center">
          {cities.map((city, index) => (
            <div key={index} className="w-full">
              <p className="text-blue underline border-b border-lightGray pb-2">
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
