import React, { useEffect, useMemo, useState } from "react";
import { fetchProduct } from "utils/api";
import { makeStyles, styled } from "@mui/styles";
import { Select, Container, TextField, Button, Grid } from "components";
import { useSnackbar } from "notistack";

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 40,
  },
}));

const Input = styled("input")({
  display: "none",
});

const ManagePage = () => {
  const classes = useStyles();
  const [type, setType] = useState(null);

  useEffect(async () => {
    const product = await fetchProduct();
    console.log("product", product);
  }, [fetchProduct]);

  const { enqueueSnackbar } = useSnackbar();
  const handleSubmit = () => {
    enqueueSnackbar("Success!!", {
      variant: "success",
    });
  };

  const typeOptions = [
    { value: "product", label: "สินค้า" },
    { value: "content", label: "บทความ" },
    { value: "promotion", label: "โปรโมชั่น" },
  ];

  return (
    <section className={classes.root}>
      <Container maxWidth="lg">
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          columns={{ xs: 4, sm: 8, md: 8 }}
        >
          <Grid item xs={2} sm={4} md={4}>
            <Select
              options={typeOptions}
              label="Type"
              handleChange={(e) => console.log("e", e)}
            />
          </Grid>
          <TextField id="outlined-basic" label="Title" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
          />
          <TextField id="outlined-basic" label="Price" variant="outlined" />
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
          />

          <Button onClick={handleSubmit} variant="outlined">
            Submit
          </Button>
        </Grid>
      </Container>
    </section>
  );
};

export default ManagePage;
