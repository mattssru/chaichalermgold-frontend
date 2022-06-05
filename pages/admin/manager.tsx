import React, { useCallback, useEffect, useState } from "react";
import {
  fetchProduct,
  uploadImage,
  createProduct,
  deleteProduct,
} from "utils/api";
import { makeStyles, styled } from "@mui/styles";
import {
  Container,
  TextField,
  Grid,
  TableIcons,
  ButtonTransform,
  UploadImage,
} from "components";
import { useSnackbar } from "notistack";
import { Box, Hidden, Typography } from "@mui/material";
import MaterialTable from "material-table";
import Delete from "@mui/icons-material/Delete";

const useStyles = makeStyles((theme: any) => ({
  root: {
    paddingTop: 40,
    "& .imageTable": {
      height: 100,
      width: 100,
      margin: "0 auto",
      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: 8,
      },
    },
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
  const [imageFile, setImageFile] = useState();
  const [imageName, setImageName] = useState("");

  useEffect(() => {
    const fetch: any = async () => {
      const data = await fetchProduct();
      setProduct(data);
      return data;
    };
    fetch();
  }, [fetchProduct]);

  const { enqueueSnackbar } = useSnackbar();
  const handleSubmit = useCallback(async () => {
    setToggle(false);
    const values: any = {
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
  const handleFileInput = (e: any) => {
    console.log("handleFileInput working!");
    console.log(e.target.files[0]);
    const formData = new FormData();
    formData.append("myFile", e.target.files[0]);
    //@ts-ignore
    setImageFile(formData);
    setImageName(e.target.files[0].name);
  };
  const handleDelete = useCallback(async (item: any) => {
    enqueueSnackbar(`ลบข้อมูลเรียบร้อย!! ${item.name}`, {
      variant: "success",
    });
  }, []);

  return (
    <section className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" sx={{ mb: "25px" }}>
          รายการข้อมูล
        </Typography>
        <Box className="data-table">
          <Grid container spacing={0} sx={{ mb: { xs: "25px", sm: "30px" } }}>
            <Grid item sm={6} xs={12}>
              <TextField
                id="outlined-basic"
                label="ประเภทข้อมูล"
                variant="outlined"
                fullWidth
                select
                SelectProps={{
                  native: true,
                }}
                sx={{
                  backgroundColor: "#fff !important",
                  border: "none !important",
                }}
              >
                <option value="product">สินค้า</option>
                <option value="content">บทความ</option>
                <option value="promotion">โปรโมชั่น</option>
              </TextField>
            </Grid>
          </Grid>
          <MaterialTable
            // title=""
            icons={TableIcons}
            columns={[
              {
                title: "รูปภาพ",
                field: "image",
                cellStyle: {
                  textAlign: "center" as "center",
                },
                render: (rowData: any) => (
                  <Box className="imageTable">
                    <img src={rowData.image} />
                  </Box>
                ),
              },
              {
                title: "ชื่อ",
                field: "name",
                cellStyle: {
                  textAlign: "center" as "center",
                },
              },
              {
                title: "รายละเอียด",
                field: "descriptions",
                cellStyle: {
                  textAlign: "center" as "center",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                },
              },
              {
                title: "ราคา",
                field: "price",
                cellStyle: {
                  textAlign: "center" as "center",
                },
              },
            ]}
            data={product}
            actions={[
              {
                icon: Delete,
                tooltip: "ลบรายการ",
                onClick: (item: any) => handleDelete(item),
              },
            ]}
            options={{
              pageSize: 5,
              pageSizeOptions: [5, 10, 20, 50, 100],
              actionsColumnIndex: -1,
              showTitle: false,
              headerStyle: {
                textAlign: "center",
              },
              emptyRowsWhenPaging: false,
            }}
          />
        </Box>
        <Typography variant="h2" align="center" sx={{ mb: "25px" }}>
          เพิ่มข้อมูล
        </Typography>
        <Box
          sx={{
            maxWidth: 1000,
            borderRadius: "8px",
            margin: "0 auto",
            boxShadow: { xs: "none", sm: "0 3px 6px rgba(0,0,0,0.16)" },
            padding: { xs: 0, sm: "40px 25px" },
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="ประเภทข้อมูล"
                variant="outlined"
                fullWidth
                select
                SelectProps={{
                  native: true,
                }}
              >
                <option value="product">สินค้า</option>
                <option value="content">บทความ</option>
                <option value="promotion">โปรโมชั่น</option>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="ชื่อหัวข้อ"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="รายละเอียด"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="ราคา"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <UploadImage
                name={"thumbnail"}
                text="อัปโหลดรูปภาพ"
                label="อัปโหลดรูปภาพ"
                handleChange={handleFileInput}
              />
            </Grid>
          </Grid>
          <ButtonTransform title="บันทึก" onClick={handleSubmit} />
        </Box>
      </Container>
    </section>
  );
};

export default ManagePage;
