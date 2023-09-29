import React, { useState } from "react";
import ProductCard from "./ProductCard";
import styles from "../../style";
function ProductCategory({ category }) {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;
  const products = category.products.slice(firstIndex, lastIndex);
  const npages = Math.ceil(category.products.length / productsPerPage);
  const numbers = [...Array(npages + 1).keys()].slice(1);
  console.log(products);
  function nextPage() {
    console.log(products);
    if (currentPage != lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  }

  function prePage() {
    if (currentPage != firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCPage(id) {
    setCurrentPage(id);
  }

  return (
    <div>
      <div>
        <h2 className={`${styles.heading3} ${styles.flexCenter} text-red-500`}>
          {category.name}
        </h2>
        <p
          className={`${styles.paragraph} ${styles.paddingX} ${styles.paddingY}`}
        >
          {category.desc}
        </p>
      </div>
      <div className="bg-gray-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {products.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
      <div className="my-3">
        <nav>
          <ul className="flex items-center space-x-2">
            <li>
              <div className="cursor-pointer" onClick={prePage}>
                Prev
              </div>
            </li>
            {numbers.map((n, i) => (
              <li
                className={`${
                  currentPage === n ? "bg-red-500" : "bg-gray-200"
                } w-5 h-5 text-center text-white font-bold`}
              >
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    changeCPage(n);
                  }}
                >
                  {n}
                </div>
              </li>
            ))}
            <li>
              <div className="cursor-pointer" onClick={nextPage}>
                Next
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default ProductCategory;
