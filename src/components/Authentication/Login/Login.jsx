import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import Form from "./Form";
import { useAuth } from "../../../custom hooks/useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();

  //google login
  const handleSocialLogin = (data) => {
    data().then((res) => {
      console.log(res.user);
      toast.success("Google Login successful!!!");
      navigate("/");
    });
  };
  return (
    <div className="flex justify-between gap-10 py-10 px-28 h-[100vh]">
      <div className="space-y-3 max-w-lg">
        <h1>LOGO</h1>
        <h1 className="text-3xl font-semibold">Log In To Your Account</h1>
        <p className="text-gray">Welcome Back! Select a method to log in.</p>
        <div>
          <div className="mb-5 flex justify-between gap-5">
            <button
              onClick={() => handleSocialLogin(googleLogin)}
              className="inline-flex justify-center items-center gap-2 bg-gradient-to-r from-[#E4E4E4] to-[#FFFFFF] rounded-md px-7 py-3 shadow-xl"
            >
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
        <Form />
      </div>
      <div
        className="h-[90vh] w-1/2 bg-cover bg-center rounded-xl flex justify-center items-center"
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
