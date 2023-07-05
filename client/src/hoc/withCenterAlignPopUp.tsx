import {
  forwardRef,
  ReactElement,
  SetStateAction,
  Ref,
  Dispatch,
  ComponentType,
} from "react";
import Dialog from "@mui/material/Dialog";

import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

export function withCenterAlignPopup<P>(Component: ComponentType<P>) {
  interface IComponentSpecificProps {
    isCustomizableProductPopupOpen: boolean;
    setIsCustomizableProductPopupOpen: Dispatch<SetStateAction<boolean>>;
    isCloseButtonHidden?: boolean;
    className?: string;
  }
  const Transition = forwardRef(function Transition(
    props: TransitionProps & {
      children: ReactElement;
    },
    ref: Ref<unknown>
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  return function AddProductToCartPopup(props: P & IComponentSpecificProps) {
    const {
      isCustomizableProductPopupOpen,
      setIsCustomizableProductPopupOpen,
      isCloseButtonHidden,
      className = "",
    } = props;
    const handleClose = () => {
      if (setIsCustomizableProductPopupOpen) {
        setIsCustomizableProductPopupOpen(false);
      }
    };

    return (
      <Dialog
        open={isCustomizableProductPopupOpen}
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          backdropFilter: "blur(15px)",
          transition: "all",
          transitionDuration: 500,
          transitionTimingFunction: "ease-in-out",
        }}
        classes={{
          paperScrollPaper:
            "m-0  w-full bg-[transparent] shadow-none overflow-visible	max-w-[none] max-h-[none]",
        }}
      >
        <div
          className={`max-h-[90vh] w-full flex justify-center items-center galaxyFold:max-w-[calc(100%-35px)] iphoneSE:max-w-[calc(100%-50px)] max-w-[calc(100%-60px)] mx-auto${className} relative `}
        >
          <div className="relative w-max">
            {!isCloseButtonHidden && (
              <img
                src={"/"}
                alt=""
                className="absolute -top-[0px] -right-[0px] iphoneSE:h-[30px] h-[46px] iphoneSE:w-[30px]  w-[46px] z-[2]"
                style={{
                  transform: "translate(50%,-50%)",
                }}
                onClick={() => setIsCustomizableProductPopupOpen(false)}
              />
            )}
            <Component {...props}></Component>
          </div>
        </div>
      </Dialog>
    );
  };
}
