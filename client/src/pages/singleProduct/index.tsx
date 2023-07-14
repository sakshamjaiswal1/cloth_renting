import React, { useMemo } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import MySlider from "../../components/slider";
import Footer from "../../components/common/footer";
import Header from "../../components/common/header";
import { useLocation, useParams } from "react-router-dom";
import { dataWomen } from "../womenClothesPage/data";
import { dataMen } from "../menClothesPage/data";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const SingleProduct = () => {
  const { id } = useParams();
  const location = useLocation();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const currentData = useMemo(() => {
    return location.pathname?.split("/")?.[2] === "women" ? dataWomen : dataMen;
  }, [location.pathname]);

  return (
    <div className="h-full w-full">
      <Header className="text-black" />
      <div className="pt-[1rem] w-[80%] m-auto flex justify-between">
        <div className="w-[50%] ">
          {" "}
          <MySlider
            image1={currentData?.[parseInt(id || "")]?.img1}
            image2={currentData?.[parseInt(id || "")]?.img2}
          />
        </div>
        <div className="w-[50%] border-[1px solid red] ">
          <h3 className="underline">Stylease Exclusive</h3>
          <h1 className="text-[2rem]">
            {currentData?.[parseInt(id || "")].title}
          </h1>
          <h3 className="pt-[1rem] text-[1.5rem]">Rent: Rs. 3,500.00</h3>
          <h4>Refundable Deposit: Rs. 3,500.00</h4>

          <div className="flex py-[2rem]">
            <div>
              <p className="text-[#9090B0]">Rental Duration</p>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="grouped-native-select">
                  Duration
                </InputLabel>
                <Select defaultValue="" id="grouped-select" label="Grouping">
                  <MenuItem value={1}>4 Days</MenuItem>
                  <MenuItem value={2}>8 Days</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div>
              <p className="text-[#9090B0]">Size</p>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="grouped-select">Size</InputLabel>
                <Select defaultValue="" id="grouped-select" label="Grouping">
                  <MenuItem value={1}>XS</MenuItem>
                  <MenuItem value={2}>XL</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          {/* Date section */}

          <div>
            <div className="py-[1rem]">
              <p className="text-[#9090B0]">Start date</p>
              <input type="date" />
            </div>
            <div>
              <p></p>
              <div>
                <p className="cursor-pointer" onClick={handleOpen}>
                  See the chart
                </p>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Men's Chart
                    </Typography>
                    <div className="flex justify-between">
                      <div>
                        <p>XS</p>
                        <p>XS</p>
                        <p>XS</p>
                        <p>XS</p>
                        <p>XS</p>
                      </div>
                      <div>
                        <h3>Chest</h3>
                        <p>35</p>
                        <p>35</p>
                        <p>35</p>
                        <p>35</p>
                        <p>35</p>
                      </div>
                      <div>
                        <h3>Waist</h3>
                        <p>30-32</p>
                        <p>30-32</p>
                        <p>30-32</p>
                        <p>30-32</p>
                        <p>30-32</p>
                      </div>
                    </div>
                  </Box>
                </Modal>
              </div>
            </div>
          </div>

          {/* Button */}

          <button className="px-[3rem] py-[0.7rem] my-[1rem] bg-black text-[white] ">
            Add To Cart
          </button>

          {/* Discription */}

          <div className="py-[1rem]">
            <p className="font-bold">Description</p>
            <p>
              Suit yourself! Put on this black formal staple with self-stripes
              in an elite imported woolen polyester blend.
            </p>
          </div>
          <div className="py-[1rem]">
            <p className="font-bold">Stylist's Notes</p>
            <p>
              Style this with the wooden musk bow tie for an outlandish look.
            </p>
          </div>
          <div className="py-[1rem]">
            <p className="font-bold">Material and Care</p>
            <p>
              All our outfits are sanitized and dry cleaned by us prior to
              delivery. If you must, please get it professional steam ironed
              only.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleProduct;
