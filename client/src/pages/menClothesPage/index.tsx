import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Header from "../../components/common/header";
import { dataMen } from "./data";
import { Link } from "react-router-dom";

const MensClothesPage = () => {
  return (
    <>
      <Header />
      <div>
        {/* Image section */}
        <div className="relative -mt-[140px]">
          <img
            src="https://www.thestylease.com/cdn/shop/collections/JR2_9594_1728x.jpg?v=1553605776"
            alt="Background Image"
            className="w-full h-[550px] object-cover"
          />
          <div className="absolute top-[80%] left-[25%] transform -translate-x-1/2 -translate-y-1/2 text-white text-[2.5rem] sm:text-[1rem] sm:left-[30%] font-bold shadow-lg">
            Mens Wear (All)
          </div>
        </div>

        {/* Grid section */}
        <div className="h-full w-100% bg-white py-[2rem]">
          <div className="w-[83%] m-auto">
            <div className="flex sm:block justify-between items-center">
              <p>Home › Mens Wear on Rent</p>
              <div className="flex sm:block">
                <div className="pr-[15px]">
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel htmlFor="grouped-native-select">
                      FIlter
                    </InputLabel>
                    <Select
                      defaultValue=""
                      id="grouped-select"
                      label="Grouping"
                    >
                      <MenuItem value={1}>4 Days</MenuItem>
                      <MenuItem value={2}>8 Days</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="flex sm:block items-center">
                  <p>Sort By</p>
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel htmlFor="grouped-native-select">All</InputLabel>
                    <Select
                      defaultValue=""
                      id="grouped-select"
                      label="Grouping"
                    >
                      <MenuItem value={1}>Best Selling</MenuItem>
                      <MenuItem value={2}>Price: Low to High</MenuItem>
                      <MenuItem value={2}>Price: High to Low</MenuItem>
                      <MenuItem value={1}>A-Z</MenuItem>
                      <MenuItem value={1}>Z-A</MenuItem>
                      <MenuItem value={1}>Oldest to Newest</MenuItem>
                      <MenuItem value={1}>Newest to Oldest</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
          </div>

          {/* Products mapping section */}
          <div className="w-[80%] grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1 m-auto gap-[5rem]">
            {dataMen?.map((items) => (
              <Link
                to={`/singleProduct/men/${items.id}`}
                key={items.id}
                className=" m-auto cursor-pointer"
              >
                <div className="group inline-block relative">
                  <img
                    src={items.img1}
                    alt="First Image"
                    className="w-[300px] h-[400px] p-[1rem] object-cover transition duration-300 ease-in-out transform "
                  />
                  <img
                    src={items.img2}
                    alt="Second Image"
                    className="w-[300px] h-[400px] p-[1rem] object-cover absolute inset-0 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100"
                  />
                </div>
                <h1 className="font-bold text-[1.1rem] text-center">
                  {items.title}
                </h1>
                <p className="underline text-center">{items.by}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default MensClothesPage;
