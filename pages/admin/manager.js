import React, { useEffect, useMemo } from "react";
import { fetchProduct } from "utils/api";

const ManagePage = () => {
  useEffect(async () => {
    const product = await fetchProduct();
    console.log("product", product);
  }, [fetchProduct]);
  return <div>ManagePage</div>;
};

export default ManagePage;
