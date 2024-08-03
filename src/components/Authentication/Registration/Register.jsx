import Form from "./Form";

const Register = () => {
  return (
    <div className="flex justify-between gap-10 py-10 px-28 h-[100vh]">
      <div className="space-y-3 max-w-md">
        <h1>LOGO</h1>
        <h1 className="text-3xl font-semibold">Sign In To Your Account</h1>
        <p className="text-gray">
          Welcome Back! By clicking the sign up button, you&#39;re agreeing to
          Zenitood Terms and Service and acknowledge the{" "}
          <span className="text-blue">Privacy and Policy</span>
        </p>

        <Form />
      </div>
      <div
        className="h-[100vh] w-full bg-cover bg-center rounded-xl flex justify-center items-center"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/B6TxdZk/Group-1000001745.png')",
        }}
      >
        <div className="inset-0 flex flex-col items-center justify-center bg-[#152A16] bg-opacity-70 h-36 rounded-xl p-5 text-[22px]">
          <h1 className="text-blue font-semibold">Create Account</h1>
          <h1 className="text-white font-medium">Fill in Your Information</h1>
        </div>
      </div>
    </div>
  );
};

export default Register;
