import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAuth } from "../../../custom hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  //login
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label className="block mb-2 text-sm font-medium">Email</label>
        <input
          {...register("email", { required: true })}
          type="email"
          className="w-full p-4 ps-5 text-sm text-gray-900 rounded-lg outline-lightGray border border-lightGray"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="mb-3">
        <label className="block mb-2 text-sm font-medium">Password</label>
        <input
          {...register("password", { required: true })}
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
  );
};

export default Form;
