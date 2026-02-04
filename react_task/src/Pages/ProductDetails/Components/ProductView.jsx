const ProductView = ({ product }) => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-lg shadow-sm p-6">
        {/* Image Section */}
        <div className="flex items-center justify-center bg-gray-100 rounded-lg p-6">
          <img
            src={product?.image}
            alt={product?.title}
            className="h-80 object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold text-gray-800">
            {product?.title}
          </h1>

          <div className="flex items-center gap-2 text-sm">
            <div className="flex items-center text-yellow-500 gap-1">
              <span>&#9733;</span>
              <span className="font-medium">{product?.rating?.rate}</span>
            </div>
            <span className="text-gray-500">
              ({product?.rating?.count} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="text-3xl font-bold text-gray-900">
            ₹{product?.price}
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">
            {product?.description}
          </p>

          {/* Quantity */}
          <div className="flex items-center gap-4 mt-4">
            <span className="text-sm font-medium text-gray-700">Quantity:</span>
            <select className="border rounded-md px-3 py-1">
              {[1, 2, 3, 4, 5].map((qty) => (
                <option key={qty}>{qty}</option>
              ))}
            </select>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black py-3 rounded-md font-semibold transition">
              Add to Cart
            </button>
            <button className="flex-1 border border-gray-800 text-gray-800 hover:bg-gray-100 py-3 rounded-md font-semibold transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
