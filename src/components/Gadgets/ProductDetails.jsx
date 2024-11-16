import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import {
  addToStoreData,
  addToWishList,
  getWishListData,
} from "../../utility/utility";

const ProductDetails = () => {
  const products = useLoaderData();
  const { id } = useParams();
  const [findData, setFindData] = useState({});
  const [isWish, setIsWish] = useState(false);

  useEffect(() => {
    const findDataDetails = [...products].find(
      (data) => data.product_id === id
    );
    setFindData(findDataDetails);
    const strWishList = getWishListData();
    const isExist = strWishList.find(
      (products) => products.product_id == findDataDetails.product_id
    );
    if (isExist) {
      setIsWish(true);
    }
  }, [products, id]);

  const handleCart = (data) => {
    addToStoreData(data);
  };

  const handleWishList = (wishlist) => {
    addToWishList(wishlist);
    setIsWish(true);
  };
  const {
    product_id,
    product_title,
    product_image,
    category,
    price,
    description,
    specification,
    availability,
    rating,
  } = findData;
  return (
    <div>
      <h1> Product ID : {product_id}</h1>
      <div></div>
      <div className="navbar-end flex gap-4">
        <a onClick={() => handleCart(findData)} className="btn">
          Add to Cart <IoCartOutline />
        </a>
        <button
          disabled={isWish}
          onClick={() => handleWishList(findData)}
          className="btn btn-circle text-2xl"
        >
          <CiHeart />
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
