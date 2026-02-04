import { useNavigate } from "react-router-dom";
import useServices from "./hooks/useSerivces";
import ProductCard from "../Products/Components/ProductCard";

const ViewedItems = () => {
  const services = useServices();
  const navigate = useNavigate();
  const { products, loading } = services;
  const handleProductClick = (productId) => {
    navigate(`/products?id=${productId}`);
  };
  console.log(products);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (products.length === 0) {
    return <p className="text-sm text-gray-500">No recently viewed products</p>;
  }
  return (
    <>
      <div className="space-y-4">
        <h1 className="pt-8 text-sm font-semibold text-gray-900">
          Recently Viewed
        </h1>
        <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {products?.map((product) => (
            <ProductCard
              key={product?.id}
              product={product}
              onClick={() => handleProductClick(product.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default ViewedItems;
