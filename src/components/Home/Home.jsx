import Cities from "./Cities";
import SearchBar from "./SearchBar";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="space-y-5 m-5 md:m-10">
      <SearchBar />
      <div className="flex justify-between">
        <Testimonial />
        <Cities />
      </div>
    </div>
  );
};

export default Home;
