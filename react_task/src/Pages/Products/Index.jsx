import { useNavigate } from "react-router-dom";
import ProductCard from "./Components/ProductCard";
import useServices from "./hooks/useServices";
import { addRecentlyViewedId } from "../../utilis/recentView";
import useInfiniteScroll from "./hooks/useInfiniteScroll";

const Products = () => {
  const services = useServices();
  const {
    productsList,
    loading,
    error,
    loadMore,
    hasMore,
    pageSize,
    setPageSize,
  } = services;
  const navigate = useNavigate();
  const loaderRef = useInfiniteScroll(loadMore, hasMore, loading);

  const handleProductClick = (productId) => {
    addRecentlyViewedId(productId);
    navigate(`/products?id=${productId}`);
  };

  console.log(productsList);
  return (
    <>
      {/* navbar */}

      <main className="pt-5">
        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* if it is empty */}
        {!loading && productsList.length === 0 && !error && (
          <p className="text-center text-gray-500">No products available</p>
        )}
        {productsList.length > 0 ? (
          <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {productsList.map((product) => (
              <ProductCard
                key={product?.id}
                product={product}
                onClick={() => handleProductClick(product.id)}
              />
            ))}
          </div>
        ) : (
          <p className="mt-10 text-center text-gray-500">
            No products available
          </p>
        )}

        {loading && (
          <p className="mt-6 text-center text-gray-500">Loading...</p>
        )}

        {/* Infinite scroll trigger */}
        <div ref={loaderRef} className="h-10" />

        {/* Load more button (fallback) */}
        {hasMore && !loading && (
          <div className="mt-6 text-center">
            <button
              onClick={loadMore}
              className="rounded bg-black px-6 py-2 text-white hover:bg-gray-800"
            >
              Load More
            </button>
          </div>
        )}
      </main>
    </>
  );
};
export default Products;
