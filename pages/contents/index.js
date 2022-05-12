import React, { useEffect, useState } from "react";
import axios from "axios";
const ContentPage = () => {
  const [imageFile, setImageFile] = useState(null);
  const [imageName, setImageName] = useState(null);
  const [product, setProduct] = useState([]);
  const [goldPrice, setGoldPrice] = useState([]);
  const [data, setData] = useState("");
  const handleFileInput = (e) => {
    console.log("handleFileInput working!");
    console.log(e.target.files[0]);
    const formData = new FormData();
    formData.append("myFile", e.target.files[0]);
    setImageFile(formData);
    setImageName(e.target.files[0].name);
  };

  useEffect(() => {
    axios.get("http://localhost:3000/server/get").then((res) => {
      setProduct(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("https://thai-gold-api.herokuapp.com/latest").then((res) => {
      setGoldPrice(res.data.response);
    });

    const interval = setInterval(() => {
      axios.get("https://thai-gold-api.herokuapp.com/latest").then((res) => {
        setGoldPrice(res.data.response);
      });
    }, 43000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container">
      <div>
        <div>ราคาทองวันนี้</div>
        <div>วันที่ {goldPrice.date}</div>
        <div>ราคาซื้อ {goldPrice.price.gold_bar.buy}</div>
        <div>ราคาขาย {goldPrice.price.gold_bar.sell}</div>
        <div>ราคารับซื้อทองรูปพรรณ {goldPrice.price.gold.sell}</div>
        <div>อัปเดตล่าสุด {goldPrice.update_time}</div>
        <div>====================</div>
      </div>
      {product.map((item, index) => {
        return (
          <div key={index}>
            <div>{item.name}</div>
            <div>{item.descriptions}</div>
            <img src={item.image} width="200" />
          </div>
        );
      })}
      <input type="file" onChange={handleFileInput} />
      <input
        type="text"
        name="product"
        onBlur={(e) => setData({ product: e.target.value })}
      />
      <input type="text" name="description" />
      <aside>
        <button
          onClick={async () => {
            await axios.post(
              "http://localhost:3000/server/upload-image",
              imageFile,
              {
                headers: {
                  "content-type": "multipart/form-data",
                },
              }
            );
          }}
        >
          Save
        </button>
        <button
          onClick={async () => {
            await axios.post("http://localhost:3000/server/update", {
              type: "product",
              name: "สร้อยคอแฟนซี 2 สลึง",
              descriptions: "ทองคำแท้ 96.5%",
              image: "/uploads/" + imageName,
            });
          }}
        >
          Data
        </button>
      </aside>
    </section>
  );
};

export default ContentPage;
