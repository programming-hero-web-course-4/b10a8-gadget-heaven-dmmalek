import { IoCartOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const WishList = ({ wish }) => {
  const { product_image, product_title, description, price } = wish;
  return (
    <div className="card bg-base-100 max-w-5xl mx-auto shadow-2xl mb-4">
      <div className="flex gap-5 mb-4 p-4">
        <div>
          <img className="w-44" src={product_image} alt={product_title} />
        </div>
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">{product_title}</h1>
          <p className="text-base">
            <span className="font-bold "> Description: </span>
            <span className="text-[#09080F99] ">{description}</span>
          </p>
          <p className="font-bold">
            <span>Price:$</span>
            {price}
          </p>
          <a className="btn bg-customPurple text-white font-bold text-base rounded-3xl">
            Add to Cart <IoCartOutline />
          </a>
        </div>
        <button className="btn btn-primary btn-circle btn-outline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default WishList;
