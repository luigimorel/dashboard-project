import React from 'react';

interface ProductCardProps {
  name: string;
  description?: string;
  price: number;
  id: string;
  photo: string;
  quantity: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  photo,
  description,
  quantity,
}) => {
  return (
    <div
      key={id}
      className="w-full max-w-sm flex flex-col bg-white border border-gray-200 rounded shadow"
    >
      <img
        className="p-4 h-auto rounded-t-lg"
        src={photo}
        alt="product photo"
      />

      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold mb-3 first-letter:uppercase tracking-tight text-gray-900">
          {name}
        </h5>

        <span className="text-xl first-letter:uppercase mb-2   font-semibold tracking-tight text-gray-900">
          {description}
        </span>

        <div className="flex flex-col justify-between">
          <span className="text-base font-bold mb-4 text-gray-900">
            UGX {price.toLocaleString()}
          </span>

          <span className="text-base font-bold mb-4 text-gray-900">
            {quantity} left
          </span>

          <button className="text-white bg-primary hover:bg-primary/70 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
