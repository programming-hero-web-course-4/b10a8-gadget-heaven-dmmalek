import { useNavigate } from "react-router-dom";

const Card = ({ productData }) => {
  const { product_id, product_title, price, product_image } = productData;

  const navigate = useNavigate();
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={product_image} alt={product_title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p>
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
