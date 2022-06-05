import { Button } from "@mui/material";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const ButtonTransform = (props: any) => {
  return (
    <Button
      className={props.className}
      variant="contained"
      component={props.component}
      color="secondary"
      endIcon={<ArrowRightAltIcon />}
      startIcon={props.startIcon}
      onClick={props.onClick}
      sx={{
        height: props.height || 50,
        maxWidth: props.maxwidth || { xs: "100%", sm: 250 },
        width: "100%",
        margin: props.margin || { xs: "30px auto 0", md: "50px auto 0" },
        justifyContent: "center",
        "& .MuiButton-endIcon": {
          transition: "all 0.2s ease-in",
          transform:
            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          transformStyle: "preserve-3d",
        },
        "&:hover .MuiButton-endIcon": {
          transform:
            "translate3d(8px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          transformStyle: "preserve-3d",
          outline: 0,
        },
      }}
    >
      {props.title}
    </Button>
  );
};

export default ButtonTransform;
