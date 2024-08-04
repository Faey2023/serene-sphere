import Cities from "./Cities";
import SearchBar from "./SearchBar";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="space-y-5 m-5 md:m-10">
      <SearchBar />
      <div className="flex container gap-5">
        <div className="w-1/2">
          <Testimonial />
        </div>
        {/* <div className="w-1/2">
          <Cities />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
