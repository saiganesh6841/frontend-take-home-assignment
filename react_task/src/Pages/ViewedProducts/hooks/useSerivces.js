import { useEffect, useState } from "react";
import { getRecentlyViewedIds } from "../../../utilis/recentView";

const useServices = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchRecentlyViewedProducts();
  }, []);

  const fetchRecentlyViewedProducts = async () => {
    const ids = getRecentlyViewedIds();

    // if there are no recently viewed items, clear the list
    if (!ids || ids.length === 0) {
      setProducts([]);
      return;
    }

    setLoading(true);

    try {
      // fetch product details for all stored ids
      const productRequests = ids.map(
        (id) =>
          fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
              if (!res.ok) {
                throw new Error("Failed to fetch product");
              }
              return res.json();
            })
            .catch(() => null), // ignore failed products
      );

      const productResponses = await Promise.all(productRequests);

      // remove null values in case any product failed
      setProducts(productResponses.filter(Boolean));
    } catch (error) {
      console.error("Error while fetching recently viewed products", error);
    } finally {
      setLoading(false);
    }
  };

  return { products, loading };
};

export default useServices;
