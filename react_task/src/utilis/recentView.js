const KEY = "recentlyViewedProducts";
const MAX_ITEMS = 5;

export const getRecentlyViewedIds = () => {
  const stored = localStorage.getItem(KEY);
  return stored ? JSON.parse(stored) : [];
};

export const addRecentlyViewedId = (id) => {
  const existing = getRecentlyViewedIds();

  // here we remove the id if it already exists
  const updated = existing.filter((item) => item !== id);

  // adding in front of list
  updated.unshift(id);

  // Limit to 5
  const finalList = updated.slice(0, MAX_ITEMS);

  localStorage.setItem(KEY, JSON.stringify(finalList));
};
