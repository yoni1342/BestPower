import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductSwiper from "./ProductSwiper";

function ProductCard({ product }) {
  const [active, setActive] = useState(0);
  const [images, setImages] = useState(product.images);

  useEffect(() => {
    setImages(product.images);
  }, [product]);
  console.log(product)
  return (
    <div className="bg-white w-[360px] h-[400px] border-[1px] border-black">
      <div className="flex flex-col rounded p-1">
        <Link to={`/product/${product.cat_id}/${product.id}`}>
          <ProductSwiper images={images} />
        </Link>
        <div className="mt-2 px-3">
          <Link to={`/product/${product.cat_id}/${product.id}`}>
            <h3 className="text-xl">
              {product?.name?.length > 45
                ? `${product.name.substring(0, 45)}`
                : product.name}
            </h3>
            <p className="text-sm font-light text-gray-500">
              {product.desc}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
