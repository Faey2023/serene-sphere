import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex justify-between gap-10 py-10 px-28 h-[100vh]">
      <div className="space-y-3 max-w-lg">
        <h1>LOGO</h1>
        <h1 className="text-3xl font-semibold">Log In To Your Account</h1>
        <p className="text-gray">Welcome Back! Select a method to log in.</p>
        <div>
          <div className="mb-5 flex justify-between gap-5">
            <button className="inline-flex justify-center items-center gap-2 bg-gradient-to-r from-[#E4E4E4] to-[#FFFFFF] rounded-md px-7 py-3 shadow-xl">
              <FcGoogle className="text-2xl" /> Google
            </button>
            <button className="text-white inline-flex justify-center items-center gap-2 bg-gradient-to-r from-[#298FFF] to-[#0778F5] rounded-md px-7 py-3 shadow-xl">
              <FaFacebookF className="text-2xl" /> Facebook
            </button>
          </div>
          <div className="flex items-center">
            <div className="flex-grow border-t border-lightGray" />
            <p className="text-gray text-sm">Or Continue with Email</p>
            <div className="flex-grow border-t border-lightGray" />
          </div>
        </div>
        <form >
          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full p-4 ps-5 text-sm text-gray-900 rounded-lg outline-lightGray border border-lightGray"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full p-4 ps-5 text-sm text-gray-900 rounded-lg outline-lightGray border border-lightGray"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex justify-between gap-5 mb-3">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  defaultValue
                  className="w-4 h-4 border border-gray rounded"
                  required
                />
              </div>
              <label className="ms-2 text-sm text-gray">Remember me</label>
            </div>
            <p className="text-[#156BCA] font-medium underline text-sm">
              Forgot password?
            </p>
          </div>
          <div className="flex flex-col space-y-3 justify-center items-center">
            <button
              type="submit"
              className="text-white bg-[#4285F3] font-medium rounded-lg text-sm w-full sm:w-72 px-5 py-2.5 text-center justify-center"
            >
              Sign In
            </button>
            <p>
              Don’t Have an Account?{" "}
              <span className="text-[#156BCA] font-medium underline">
                Create Account
              </span>
            </p>
          </div>
        </form>
      </div>
      <div
        className="h-[100vh] w-1/2 bg-cover bg-center rounded-xl flex justify-center items-center"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/B6TxdZk/Group-1000001745.png')",
        }}
      >
        <div className="inset-0 flex flex-col items-center justify-center bg-[#152A16] bg-opacity-70 h-36 rounded-xl p-5 text-[22px]">
          <h1 className="text-white">
            <span className="text-blue font-semibold">Sign In</span> to view all
            the <br /> massage therapists
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
