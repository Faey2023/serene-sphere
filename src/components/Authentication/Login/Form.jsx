import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAuth } from "../../../custom hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

const Form = () => {
  const { googleLogin, facebookLogin } = useAuth();

  // Google login
  const handleSocialLogin = (data) => {
    data().then((res) => {
      console.log(res.user);
      toast.success("Google Login successful!!!");
      navigate("/");
    });
  };

  const { login } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Login
  const onSubmit = (data) => {
    console.log(data);
    login(data.email, data.password)
      .then((result) => {
        console.log(result);
        toast.success("Login successful!!!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.code);
        toast.error(error.message);
      });
  };

  return (
    <>
      <div className="space-y-1 md:space-y-3 max-w-lg lg:max-w-full">
        <h1 className="text-xl md:text-3xl font-semibold text-center">
          Log In To Your Account
        </h1>
        <p className="text-gray text-[13px] md:text-base text-center">
          Welcome Back! Select a method to log in.
        </p>
        <div>
          <div className="md:mb-5 mb-2 flex justify-between gap-5">
            <button
              onClick={() => handleSocialLogin(googleLogin)}
              className="inline-flex justify-center items-center gap-2 bg-gradient-to-r from-[#E4E4E4] to-[#FFFFFF] rounded-md px-7 py-1 md:py-3 shadow-xl text-xs md:text-base"
            >
              <FcGoogle className="text-2xl" /> Google
            </button>
            <button
              onClick={() => handleSocialLogin(facebookLogin)}
              className="text-white inline-flex justify-center items-center gap-2 bg-gradient-to-r from-[#298FFF] to-[#0778F5] rounded-md px-7 py-1 md:py-3 shadow-xl text-xs md:text-base"
            >
              <FaFacebookF className="text-2xl" /> Facebook
            </button>
          </div>
          <div className="flex items-center">
            <div className="flex-grow border-t border-lightGray" />
            <p className="text-gray text-sm">Or Continue with Email</p>
            <div className="flex-grow border-t border-lightGray" />
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              {...register("email", { required: true })}
              type="email"
              className="w-full p-4 ps-5 text-xs md:text-sm text-gray-900 rounded-lg outline-lightGray border border-lightGray"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium">Password</label>
            <input
              {...register("password", { required: true })}
              type="password"
              className="w-full p-4 ps-5 text-xs md:text-sm text-gray-900 rounded-lg outline-lightGray border border-lightGray"
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
              <label className="ms-2 text-xs md:text-sm text-gray">
                Remember me
              </label>
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
            <p className="text-xs md:text-base">
              Don’t Have an Account?{" "}
              <Link
                to="/register"
                className="text-[#156BCA] font-medium underline cursor-pointer"
              >
                Create Account
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
