const SearchBar = () => {
  return (
    <div className="bg-[#FFFFFF] rounded-[10px] flex justify-between flex-col md:flex-row p-10 m-5 md:m-10">
      <div className="space-y-5">
        <h1 className="text-xs md:text-xl font-medium">
          I&#39;m Looking for Massage Therapist Near...
        </h1>
        <p className="text-xs md:text-base">
          In using this site, I agree to be bound by the
          <span className="text-blue underline font-medium">
            Terms of Service
          </span>{" "}
          <br /> and {""}
          <span className="text-blue underline font-medium">
            Privacy Policy
          </span>
        </p>
        {/* search button */}

        <form className="mx-auto">
          <div className="relative">
            <input
              type="search"
              className="w-full p-4 ps-5 text-sm text-gray-900 rounded-lg bg-cream outline-none"
              placeholder="ZIP code or city name"
              required
            />
            <button
              type="submit"
              className="bg-blue text-white absolute end-2.5 bottom-2.5 bg-blue-700 font-medium rounded-lg text-sm px-6 py-2"
            >
              GO
            </button>
          </div>
        </form>
      </div>
      <img src="https://i.ibb.co/pWrf6YP/Group-1000001700.pngs" alt="" />
    </div>
  );
};

export default SearchBar;
