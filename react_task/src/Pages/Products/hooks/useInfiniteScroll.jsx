import { useEffect, useRef } from "react";

const useInfiniteScroll = (callback, hasMore, loading) => {
  const observerRef = useRef(null);

  useEffect(() => {
    // we can preent multiple api calls
    if (loading) return;

    //it will watch element enter viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasMore) {
          callback();
        }
      },
      { threshold: 1 },
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [callback, hasMore, loading]);

  return observerRef;
};

export default useInfiniteScroll;
