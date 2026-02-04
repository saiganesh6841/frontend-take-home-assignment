const ProductCard = ({ product, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md cursor-pointer transition-all duration-300 ease-in-out   hover:-translate-y-1"
    >
      <div className="h-48 w-full overflow-hidden rounded-md bg-gray-100 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </h3>

        <p className="text-xs text-gray-600 line-clamp-2">
          {product.description}
        </p>
      </div>

      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-1 text-sm text-yellow-500">
          <span>&#9733;</span>
          {product.rating.rate}
          <span className="text-gray-500 text-xs">
            ({product.rating.count})
          </span>
        </div>

        <div className=" text-lg font-bold text-gray-900">₹{product.price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
