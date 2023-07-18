import { Link } from "react-router-dom";
import logo from "../../assets/home/jainLogo.png";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const CheckoutPage = () => {
  return (
    <div className="">
      {/* Image section  */}
      <div className="w-full bg-gray-300 h-full object-cover">
        <div className="relative">
          <img
            src="https://cdn.shopify.com/s/files/1/0086/9177/7632/files/Womenswear_All_1440_13e92690-c76b-4fe9-af42-540af324c696_2000x.png?v=1613782322"
            alt="Wide Image"
            className="w-full h-[200px] object-cover"
          />
          <div className="absolute top-0 left-0 mt-8 ml-8 w-[206px] h-[80px]">
            <Link to="/">
              {" "}
              <img src={logo} alt="" className="h-full w-full" />
            </Link>
          </div>
        </div>
      </div>

      {/* checkout section  */}
      <div className="flex w-[90%] gap-x-[2rem] justify-between bg-red h-full m-auto">
        <div className=" py-[2rem] w-[50%]">
          <p>Cart Information Shipping Payment</p>
          <div>
            <h2 className="font-semibold py-[1rem] text-[1.1rem] ">Contact</h2>
            <p>Nitin sharma (yecami5187@muzitp.com)</p>
          </div>
          <h2 className="font-semibold py-[1rem] text-[1.1rem]">
            Shipping address
          </h2>
          <div className=" flex flex-col gap-y-4">
            <div className="flex justify-between">
              <TextField
                sx={{
                  width: "278px",
                }}
                id="outlined-input"
                label="First name"
              />
              <TextField
                sx={{
                  width: "278px",
                }}
                id="outlined-input"
                label="Last name"
              />
            </div>
            <TextField id="outlined-input" label="Company (optional)" />
            <TextField id="outlined-input" label="Address" />
            <TextField
              id="outlined-input"
              label="Apartment, suite, etc. (optional)"
            />
            <div className="flex justify-between ">
              <TextField
                sx={{
                  width: "180px",
                }}
                id="outlined-input"
                label="City"
              />
              <FormControl
                sx={{
                  width: "180px",
                }}
              >
                <InputLabel id="demo-simple-select-label">State</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Age"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Haryana</MenuItem>
                  <MenuItem value={20}>Punjab</MenuItem>
                  <MenuItem value={30}>Bhihar</MenuItem>
                </Select>
              </FormControl>
              <TextField
                sx={{
                  width: "180px",
                }}
                id="outlined-input"
                label="Pin code"
              />
            </div>
            <TextField id="outlined-input" label="Phone" />
            <div className="flex justify-between items-center ">
              <p className="text-[rgba(229,123,101,1)]">Return to Cart</p>
              <button className="py-[1rem] bg-black text-[white] px-[2rem] rounded">
                Continue to shipping
              </button>
            </div>
          </div>
        </div>

        {/* Price section */}
        <div className="py-[2rem] w-[40%]">
          <div className="flex justify-between h-auto w-full">
            <div>
              <img src="" alt="" />
              <p>Refundable Deposit</p>
            </div>
            <p>₹3,500.00</p>
          </div>
          <div className="flex justify-between h-auto w-full items-center py-[1.5rem]">
            <div className="flex ">
              <img
                src="https://cdn.shopify.com/s/files/1/0086/9177/7632/products/JR2_2215_128x128.jpg?v=1558701141"
                alt=""
                className="h-[100px] w-[100px] object-contain"
              />
              <div>
                <p>Tan Blazer</p>
                <p className="text-[rgba(108,108,108,1)]">4 Days / M</p>
                <p className="text-[rgba(108,108,108,1)]">Date: 26/07/2023</p>
                <p className="text-[rgba(108,108,108,1)]">Return: 30/07/2023</p>
              </div>
            </div>
            <p>₹3,500.00</p>
          </div>
          <div className="w-full flex justify-between pb-[1rem]">
            <TextField
              sx={{ width: "350px" }}
              id="outlined-input"
              label="Discount code"
            />
            <button className="py-[1rem] bg-black text-[white] px-[2rem] rounded">
              Apply
            </button>
          </div>
          <div className="flex justify-between pb-[0.3rem]">
            <span>Subtotal</span>
            <span>₹ 7,000.00</span>
          </div>
          <div className="flex justify-between items-center pb-[0.3rem]">
            <span>Shipping</span>
            <span className="text-[12px]">Calculated at next step</span>
          </div>
          <div className="flex justify-between pb-[0.3rem]">
            <span>Estimated taxes</span>
            <span>₹630.00</span>
          </div>
          <div className="flex justify-between ">
            <span className="text-[1.1rem] font-semibold">Total</span>
            <div className="flex items-center">
              <span className="text-[rgba(108,108,108,1)] mr-[6px] text-[12px]">
                INR
              </span>
              <span className="text-[1.1rem] font-semibold">₹630.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
