import { useEffect, useState, useCallback } from "react";

const useServices = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [pageSize, setPageSize] = useState(10);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, []);

  // we are reseting the pagination when page size changes
  useEffect(() => {
    // here using slice manually cause api won't support offset
    setProductsList(allProducts.slice(0, pageSize));
    setOffset(pageSize);
  }, [pageSize, allProducts]);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) throw new Error("API failed");

      const data = await res.json();
      setAllProducts(data);
      setProductsList(data.slice(0, pageSize));
      setOffset(pageSize);
    } catch (err) {
      setError("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = useCallback(() => {
    if (loading) return;

    const nextItems = allProducts.slice(offset, offset + pageSize);
    setProductsList((prev) => [...prev, ...nextItems]);
    setOffset((prev) => prev + pageSize);
  }, [offset, pageSize, allProducts, loading]);

  const hasMore = offset < allProducts.length;

  return {
    productsList,
    loading,
    error,
    loadMore,
    hasMore,
    pageSize,
    setPageSize,
  };
};

export default useServices;
