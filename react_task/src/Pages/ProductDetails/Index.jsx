import ProductView from "./Components/ProductView";
import useServices from "./hooks/useServices";

const ProductDetails = () => {
  const services = useServices();
  const { productDetails } = services;
  console.log(productDetails);
  return (
    <>
      <ProductView product={productDetails} />
    </>
  );
};
export default ProductDetails;
