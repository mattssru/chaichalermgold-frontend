import React, { useState, useEffect } from "react";
import { Box, InputLabel, Button, FormHelperText } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ButtonTransform from "./ButtonTransform";
import { IconUpload } from "./icon";

const useStyles = makeStyles((theme: any) => ({
  root: {
    marginBottom: "20px",
    "& .btnUpload": {
      [theme.breakpoints.down("sm")]: {
        maxWidth: "100%",
      },
      "& .MuiButton-endIcon": {
        display: "none",
      },
    },
  },
  input: {
    display: "none",
  },
  boxDropzone: {
    height: 350,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px dashed #DBDBDB",
    borderRadius: "12px",
    marginTop: 20,
    backgroundColor: "#efefef",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      borderRadius: "12px",
    },
  },
}));

const getBase64 = (image: any, callback: any) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(image);
};

const UploadImage = (props: any) => {
  const { name, handleImageChange, value = null, handleChange } = props;
  const classes = useStyles();
  const [imageUrl, setImageUrl] = useState("");
  const [imageName, setImageName] = useState("");

  useEffect(() => {
    if (value != null) {
      setImageUrl(value);
    }
  }, [value]);
  const handleImage = async (e: any) => {
    getBase64(e.target.files[0], (imageUrl: any) => {
      setImageUrl(imageUrl);
    });
    setImageName(e.target.files[0].name);
    const keyName = name != undefined ? name : "thumbnail";
    handleImageChange && handleImageChange({ [keyName]: e.target.files[0] });
    handleChange(e);
  };

  return (
    <Box className={classes.root}>
      <Box>
        <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
          onChange={handleImage}
        />
        <label htmlFor="contained-button-file" style={{ width: "auto" }}>
          <ButtonTransform
            className="btnUpload"
            title="อัปโหลดรูปภาพ"
            maxwidth="300px"
            margin="0 !important"
            component="span"
            startIcon={<IconUpload />}
          />
        </label>
      </Box>
      {imageUrl !== "" ? (
        <>
          <Box className={classes.boxDropzone}>
            <img src={imageUrl} alt="" />
          </Box>
          {imageName}
        </>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default UploadImage;
