import { useNavigate } from "react-router-dom";

const Card = ({ productData }) => {
  const { product_id, product_title, price, product_image } = productData;

  const navigate = useNavigate();
  return (
    <div>
      <div className="card bg-base-100 max-w-96 shadow-xl p-1">
        <figure>
          <img className="w-36 h-40" src={product_image} alt={product_title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p className="text-[#09080F] opacity-60 font-semibold">
            Price:
            {price}
            <span>k</span>
          </p>
          <div className="card-actions justify-start">
            <button
              onClick={() => navigate(`/products/${product_id}`)}
              className="btn btn-primary"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
