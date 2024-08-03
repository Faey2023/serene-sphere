const Register = () => {
  return (
    <div className="flex justify-between gap-5 py-7 px-40 h-[100vh]">
      <div className="space-y-3 max-w-md">
        <h1>LOGO</h1>
        <h1 className="text-3xl font-semibold">Sign In To Your Account</h1>
        <p className="text-gray">
          Welcome Back! By clicking the sign up button, you&#39;re agreeing to
          Zenitood Terms and Service and acknowledge the{" "}
          <span className="text-blue">Privacy and Policy</span>
        </p>

        <form className="">
          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium">Name</label>
            <input
              type="email"
              className="w-full p-4 ps-5 text-sm text-gray-900 rounded-lg outline-[#E7E7E7] border border-[#E7E7E7]"
              placeholder="@username"
              required
            />
          </div>
          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full p-4 ps-5 text-sm text-gray-900 rounded-lg outline-[#E7E7E7] border border-[#E7E7E7]"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium">Password</label>
            <input
              type="email"
              className="w-full p-4 ps-5 text-sm text-gray-900 rounded-lg outline-[#E7E7E7] border border-[#E7E7E7]"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Confirm Password
            </label>
            <input
              type="email"
              className="w-full p-4 ps-5 text-sm text-gray-900 rounded-lg outline-[#E7E7E7] border border-[#E7E7E7]"
              placeholder="Re-type password"
              required
            />
          </div>
          <div className="flex items-start mb-3">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                defaultValue
                className="w-4 h-4 border border-gray rounded"
                required
              />
            </div>
            <label htmlFor="remember" className="ms-2 text-sm text-[#4285F3]">
              Accept Terms of Service
            </label>
          </div>
          <div className="flex flex-col space-y-3 justify-center items-center">
            <button
              type="submit"
              className="text-white bg-[#4285F3] font-medium rounded-lg text-sm w-full sm:w-72 px-5 py-2.5 text-center justify-center"
            >
              Sign Up
            </button>
            <p>
              Already Have an Account?{" "}
              <span className="text-[#156BCA] font-medium underline">
                Log in
              </span>
            </p>
          </div>
        </form>
      </div>
      <img src="https://i.ibb.co/B6TxdZk/Group-1000001745.png" alt="" />
    </div>
  );
};

export default Register;
