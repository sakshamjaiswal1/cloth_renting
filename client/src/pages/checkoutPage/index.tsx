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
    <div>
      {/* Image section  */}
      <div className="w-full bg-gray-300 h-full object-cover">
        <div className="relative">
          <img
            src="https://cdn.shopify.com/s/files/1/0086/9177/7632/files/Womenswear_All_1440_13e92690-c76b-4fe9-af42-540af324c696_2000x.png?v=1613782322"
            alt="Wide Image"
            className="w-full"
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
      <div className="flex gap-x-[2rem] bg-red h-full w-full border border.black">
        <div className="pl-[3rem] py-[2rem] w-[50%]">
          <p>Cart Information Shipping Payment</p>
          <h2 className="font-medium py-[1rem]">Contact</h2>
          <h2 className="font-medium py-[1rem]">Shipping address</h2>
          <div className=" flex flex-col gap-y-4">
            <div>
              <TextField id="outlined-input" label="First name" />
              <TextField id="outlined-input" label="Last name" />
            </div>
            <TextField id="outlined-input" label="Company (optional)" />
            <TextField id="outlined-input" label="Address" />
            <TextField
              id="outlined-input"
              label="Apartment, suite, etc. (optional)"
            />
            <div className="flex ">
              <TextField id="outlined-input" label="City" />
              <FormControl fullWidth>
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
              <TextField id="outlined-input" label="Pin code" />
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
        <div className="py-[2rem] w-[40%] pl-[1rem]">
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
          <div className="w-full flex justify-between py-[2rem]">
            <TextField
              sx={{ width: "350px" }}
              id="outlined-input"
              label="Discount code"
            />
            <button className="py-[1rem] bg-black text-[white] px-[2rem] rounded">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
