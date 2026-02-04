import { useEffect, useState } from "react";
import APIRequest from "../../../utilis/APIRequest";
import ConfigAPIURL from "../../../config/ConfigAPIURL";
import { useSearchParams } from "react-router-dom";

const useServices = () => {
  const [productDetails, setProductDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("id");

  useEffect(() => {
    if (productId) {
      fetchProductDetails(productId);
    }
  }, [productId]);

  const fetchProductDetails = async (id) => {
    if (loading) return; // it will prevent multiple requests at same time
    setLoading(true);
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProductDetails(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };
  return { productDetails, setProductDetails };
};
export default useServices;
