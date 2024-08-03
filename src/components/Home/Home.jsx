import Cities from "./Cities";
import SearchBar from "./SearchBar";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="space-y-5 m-5 md:m-10">
      <SearchBar />
      <div className="flex gap-5">
        <div className="flex-1">
          <Testimonial />
        </div>
        <div className="flex-1">
          <Cities />
        </div>
      </div>
    </div>
  );
};

export default Home;
