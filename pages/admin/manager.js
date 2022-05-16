import React, { useCallback, useEffect, useState } from "react";
import {
  fetchProduct,
  uploadImage,
  createProduct,
  deleteProduct,
} from "utils/api";
import { makeStyles, styled } from "@mui/styles";
import { Select, Container, TextField, Button, Grid } from "components";
import { useSnackbar } from "notistack";
import { Box, IconButton } from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 40,
  },
  item: {
    "& > div": {
      margin: "10px",
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      [theme.breakpoints.down("sm")]: {
        margin: "0",
        justifyContent: "flex-start",
      },
    },
  },
  wrapSection: {
    maxHeight: "600px",
    overflowY: "scroll",
  },
  wrapText: {
    [theme.breakpoints.between("sm", "lg")]: {
      "& > div": {
        "text-overflow": "ellipsis",
        overflow: "hidden",
        display: "-webkit-box !important",
        "-webkit-line-clamp": "4",
        "-webkit-box-orient": "vertical",
        "white-space": "normal",
        minWidth: "200px",
      },
    },
  },
}));

const Input = styled("input")({
  display: "none",
});

const ManagePage = () => {
  const classes = useStyles();
  const [type, setType] = useState(null);
  const [filter, setFilter] = useState("");
  const [product, setProduct] = useState([]);
  const [show, setToggle] = useState(false);
  useEffect(async () => {
    const product = await fetchProduct();
    setProduct(product);
  }, [fetchProduct]);

  const { enqueueSnackbar } = useSnackbar();
  const handleSubmit = useCallback(async () => {
    setToggle(false);
    const values = {
      type: "product",
      name: "สร้อยคอแฟนซี 4 สลึง",
      descriptions: "ทองคำแท้ 96.5%",
      image: "/uploads/" + imageName,
      price: 24000,
    };
    await createProduct(values);
    enqueueSnackbar("Success!!", {
      variant: "success",
    });
  }, []);

  const typeOptions = [
    { value: "product", label: "สินค้า" },
    { value: "content", label: "บทความ" },
    { value: "promotion", label: "โปรโมชั่น" },
  ];
  const [imageFile, setImageFile] = useState(null);
  const [imageName, setImageName] = useState("Upload");

  const handleFileInput = (e) => {
    console.log("handleFileInput working!");
    console.log(e.target.files[0]);
    const formData = new FormData();
    formData.append("myFile", e.target.files[0]);
    setImageFile(formData);
    setImageName(e.target.files[0].name);
  };

  const handleDelete = useCallback(async (item) => {
    // await deleteProduct(item);
    enqueueSnackbar(`Delete Success!! ${item.name}`, {
      variant: "success",
    });
  }, []);

  return (
    <section className={classes.root}>
      <Container maxWidth="lg">
        <Box className={classes.wrapSection}>
          <Grid container>
            {product.map((item, index) => {
              return (
                <Grid
                  item
                  xs={12}
                  key={index}
                  sx={{ borderBottom: "1px solid #efefef" }}
                >
                  <Grid container spacing={3} className={classes.item}>
                    <Grid item lg sm xs={12}>
                      <Box sx={{ maxWidth: { lg: 100 }, mt: "15px" }}>
                        <img
                          src={item.image}
                          style={{ maxWidth: "100%", height: "100%" }}
                        />
                      </Box>
                    </Grid>
                    <Grid item lg sm>
                      <Box>{item.name}</Box>
                    </Grid>
                    <Grid item lg={4} sm xs={12} className={classes.wrapText}>
                      <Box>{item.descriptions}</Box>
                    </Grid>
                    <Grid item lg sm xs={10}>
                      <Box>{item.price}</Box>
                    </Grid>
                    <Grid item lg sm xs={2}>
                      <Box>
                        {/* <IconButton
                        color="primary"
                        aria-label="Edit"
                        component="span"
                        onClick={() => console.log("Edit", item)}
                      >
                        <EditIcon />
                      </IconButton> */}
                        <IconButton
                          color="primary"
                          aria-label="Delete"
                          component="span"
                          onClick={() => handleDelete(item)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </Box>
        <Grid container alignItems="center" spacing={3} justifyContent="center">
          {!show ? (
            <Grid item lg={4} sm={4} xs={4}>
              <Button
                onClick={() => setToggle(true)}
                variant="outlined"
                sx={{ width: "100%", margin: "20px" }}
              >
                Add
              </Button>
            </Grid>
          ) : (
            <>
              <Grid item lg={6}>
                <Select
                  size="small"
                  options={typeOptions}
                  label="Type"
                  handleChange={(e) => console.log("e", e)}
                />
              </Grid>
              <Grid item lg={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  size="small"
                  label="Title"
                  variant="outlined"
                />
              </Grid>
              <Grid item lg={6}>
                <TextField
                  fullWidth
                  size="small"
                  id="outlined-basic"
                  label="Description"
                  variant="outlined"
                />
              </Grid>
              <Grid item lg={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  size="small"
                  label="Price"
                  variant="outlined"
                />
              </Grid>
              <Grid item lg={6}>
                <label htmlFor="contained-button-file">
                  <Input
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    type="file"
                    onChange={handleFileInput}
                  />
                  <Button
                    variant="outlined"
                    sx={{ width: "100%" }}
                    component="span"
                  >
                    {imageName}
                  </Button>
                </label>
              </Grid>
              <Grid item lg={6} />
              <Grid item lg={4} sm={4} xs={4}>
                <Button
                  onClick={handleSubmit}
                  variant="outlined"
                  sx={{ width: "100%", margin: "20px" }}
                >
                  Submit
                </Button>
              </Grid>
            </>
          )}
        </Grid>
      </Container>
    </section>
  );
};

export default ManagePage;
