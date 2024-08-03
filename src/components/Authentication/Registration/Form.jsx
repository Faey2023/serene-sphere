import { useForm } from "react-hook-form";
import { useAuth } from "../../../custom hooks/useAuth";
import toast from "react-hot-toast";

const Form = () => {
  const { createUser, profile } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  //register
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result);
        profile(data.name)
          .then((result) => {
            console.log(result);
            toast.success("User created successfully!!!");
            reset();
          })
          .catch((error) => {
            console.log(error.code);
            toast.error(error.message);
          });
      })
      .catch((error) => {
        console.log(error.code);
        toast.error(error.message);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label className="block mb-2 text-sm font-medium">Name</label>
        <input
          {...register("name", { required: true })}
          type="text"
          className="w-full p-4 ps-5 text-sm text-gray-900 rounded-lg outline-lightGray border border-lightGray"
          placeholder="@username"
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">Name is required</p>
        )}
      </div>
      <div className="mb-3">
        <label className="block mb-2 text-sm font-medium">Email</label>
        <input
          {...register("email", { required: true })}
          type="email"
          className="w-full p-4 ps-5 text-sm text-gray-900 rounded-lg outline-lightGray border border-lightGray"
          placeholder="Enter your email"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">Email is required</p>
        )}
      </div>
      <div className="mb-3">
        <label className="block mb-2 text-sm font-medium">Password</label>
        <input
          {...register("password", { required: true })}
          type="password"
          className="w-full p-4 ps-5 text-sm text-gray-900 rounded-lg outline-lightGray border border-lightGray"
          placeholder="Enter your password"
        />
        {errors.password && (
          <p className="text-red-500 text-xs mt-1">Password is required</p>
        )}
      </div>
      <div className="mb-3">
        <label className="block mb-2 text-sm font-medium">
          Confirm Password
        </label>
        <input
          {...register("confirmPassword", {
            required: true,
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          })}
          type="password"
          className="w-full p-4 ps-5 text-sm text-gray-900 rounded-lg outline-lightGray border border-lightGray"
          placeholder="Re-type password"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-xs mt-1">
            {errors.confirmPassword.message}
          </p>
        )}
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
        <label className="ms-2 text-sm text-[#4285F3]">
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
          <span className="text-[#156BCA] font-medium underline">Log in</span>
        </p>
      </div>
    </form>
  );
};

export default Form;
