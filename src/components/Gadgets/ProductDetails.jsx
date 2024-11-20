import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import ReactStars from "react-rating-stars-component";
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
    product_title,
    product_image,
    price,
    description,
    specification,
    availability,
    rating,
  } = findData;

  return (
    <>
      <div className="pb-20">
        <div className="mx-auto max-w-5xl bg-white rounded-lg shadow-2xl -mt-28">
          <div className="hero ">
            <div className="hero-content flex-col lg:flex-row">
              <img src={product_image} className="max-w-sm rounded-lg" />
              <div>
                <div>
                  <h1 className="text-3xl font-bold ">{product_title}</h1>
                  <p className="text-[#09080FCC] font-bold text-xl">
                    Price : {price}
                  </p>
                  <p className="bg-[#309C081A] text-[#309C08] px-4 py-1 inline-block rounded-3xl border-[#309C08] border">
                    {availability ? "In Stock" : "Not Availaible"}
                  </p>
                  <p className="text-[#09080F99] font-normal text-lg">
                    {description}
                  </p>
                  <p>Specification:</p>
                  <ul className="pl-5">
                    {Array.isArray(specification) &&
                    specification.length > 0 ? (
                      specification.map((list, idx) => (
                        <li className="list-decimal" key={idx}>
                          {list}
                        </li>
                      ))
                    ) : (
                      <p>No specifications available.</p>
                    )}
                  </ul>
                  <div className="flex items-center">
                    <span>Rating</span>
                    <div className="w-4 h-4 bg-black ml-2"></div>
                  </div>

                  <div>
                    {rating && (
                      <ReactStars
                        count={5}
                        value={rating}
                        edit={false}
                        size={24}
                        isHalf={true}
                        activeColor="#ffd700"
                      />
                    )}
                  </div>
                  <div className=" flex gap-4">
                    <a
                      onClick={() => handleCart(findData)}
                      className="btn bg-customPurple text-white font-bold text-lg rounded-3xl"
                    >
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
