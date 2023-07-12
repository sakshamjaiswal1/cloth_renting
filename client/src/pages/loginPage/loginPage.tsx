import { Link } from "react-router-dom";
import loginSvg from "../../assets/loginPage/login_svg.svg";
import Header from "../../components/common/header";
import Footer from "../../components/common/footer";

const LoginPage = () => {
  return (
    <>
      <Header />
      <div className=" flex items-center justify-center md:block sm:block w-90 mx-auto gap-4 pb-[1rem]">
        <div className="rounded-lg h-auto w-30 md:w-90 sm:w-90 py-12 px-8 shadow-md">
          <form>
            <h1 className="py-[2rem] text-[1.8rem]">Login</h1>
            <div className="mb-4">
              <label className="block">Email address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                // value={loginFormData.email}
                // onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                // value={loginFormData.password}
                // onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-[black] text-white mt-4"
            >
              Sign In
            </button>
            <Link
              to="/register"
              className="block text-main-color hover:text-black-color text-sm pt-4"
            >
              Don't have an account? SignUp...
            </Link>
            <Link to="/" className="block text-[black] text-sm pt-[1rem]">
              Return to Store
            </Link>
            <Link to="/" className="block text-[black] text-sm pt-[1rem]">
              Recover Password
            </Link>
          </form>
        </div>
        <div className="mt-8">
          <img src={loginSvg} alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
