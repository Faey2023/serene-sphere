import { useState, useRef, useEffect } from "react";
import Form from "./Form";

const Register = () => {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  // Close the form when clicking outside
  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      setShowForm(false);
    }
  };

  useEffect(() => {
    if (showForm) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showForm]);

  return (
    // <div className="flex justify-between gap-10 py-10 px-28 h-[100vh]">
    //   <div className="space-y-3 max-w-md">
    //     <Form />
    //   </div>
    //   <div
    //     className="h-[100vh] w-full bg-cover bg-center rounded-xl flex justify-center items-center"
    //     style={{
    //       backgroundImage:
    //         "url('https://i.ibb.co/B6TxdZk/Group-1000001745.png')",
    //     }}
    //   >
    //     <div className="inset-0 flex flex-col items-center justify-center bg-[#152A16] bg-opacity-70 h-36 rounded-xl p-5 text-[22px]">
    //       <h1 className="text-blue font-semibold">Create Account</h1>
    //       <h1 className="text-white font-medium">Fill in Your Information</h1>
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="hidden lg:flex flex-col lg:flex-row justify-between gap-10 py-10 px-5 lg:px-28 h-[100vh]">
        <Form />
        <div
          className="h-[90vh] w-full lg:w-1/2 bg-cover bg-center rounded-xl flex justify-center items-center relative"
          style={{
            backgroundImage:
              "url('https://i.ibb.co/B6TxdZk/Group-1000001745.png')",
          }}
        >
          <div className="hidden lg:flex inset-0 flex-col items-center justify-center bg-[#152A16] bg-opacity-70 h-36 rounded-xl p-5 text-[22px]">
            <h1 className="text-white">
              <h1 className="text-blue font-semibold">Create Account</h1>
              <h1 className="text-white font-medium">
                Fill in Your Information
              </h1>
            </h1>
          </div>
          <div className="lg:hidden flex inset-0 flex-col items-center justify-center bg-[#152A16] bg-opacity-70 h-36 rounded-xl p-5 text-[22px]">
            <h1
              className="text-white cursor-pointer"
              onClick={() => setShowForm(true)}
            >
              <h1 className="text-blue font-semibold">Create Account</h1>
              <h1 className="text-white font-medium">
                Fill in Your Information
              </h1>
            </h1>
          </div>
        </div>
      </div>
      {/* Sliding Form for Small Screen */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end lg:hidden">
          <div
            ref={formRef}
            className="bg-white w-full md:w-2/3 p-5 rounded-t-3xl animate-slide-up h-[85vh]"
          >
            <Form />
            <button
              className="mt-4 text-red-500"
              onClick={() => setShowForm(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {/* End of Sliding Form */}

      <div
        className="h-screen lg:hidden bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/gMbvNsK/i-Phone-14-15-Pro-Max-6.png')",
        }}
      >
        <div className="inset-0 flex flex-col items-center justify-center bg-[#152A16] bg-opacity-70 h-36 rounded-xl p-5 text-[22px]">
          <h1
            className="text-white cursor-pointer"
            onClick={() => setShowForm(true)}
          >
            <span className="text-blue font-semibold">Sign In</span> to view all
            the <br /> massage therapists
          </h1>
        </div>
      </div>
    </>
  );
};

export default Register;
