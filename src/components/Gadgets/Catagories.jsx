import { NavLink } from "react-router-dom";

const Catagories = ({ categories }) => {
  const { category } = categories;
  return (
    <>
      <div className="space-x-4">
        <NavLink
          to={`/productscards/${category}`}
          role="tab"
          className="btn btn-outline btn-primary p-2"
        >
          {category}
        </NavLink>
      </div>
    </>
  );
};

export default Catagories;
