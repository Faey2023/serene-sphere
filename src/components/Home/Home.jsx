import Cities from "./Cities";
import Featured from "./Featured/Featured";
import SearchBar from "./SearchBar";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="space-y-5 m-5">
      <SearchBar />
      <div className="container mx-auto">
        <Featured />
      </div>
      <div className="flex flex-wrap gap-5 container mx-auto">
        <div className="w-full md:w-1/2">
          <Testimonial />
        </div>
        <div className="w-full md:w-1/2">
          <Cities />
        </div>
      </div>
    </div>
  );
};

export default Home;
