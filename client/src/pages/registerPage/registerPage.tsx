import React from "react";
import registerSvg from "../../assets/registerPage/registerSvg.svg";
import Header from "../../components/common/header";
import Footer from "../../components/common/footer";

const RegisterPage = () => {
  return (
    <>
      <Header />
      <div className=" flex items-center justify-center md:block sm:block w-90 mx-auto gap-4 pb-[1rem]">
        <div className="rounded-lg h-auto w-[30%] md:w-90 sm:w-90 py-12 px-8 shadow-md">
          <form>
            <h1 className="py-[2rem] text-[1.8rem]">Register Your Account</h1>
            <div className="flex gap-2">
              <div className="mb-4">
                <label className="block">First Name</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter first name"
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block">Last Name</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter last name"
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block">Email address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-[black] text-white mt-4"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="mt-8">
          <img src={registerSvg} alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterPage;
