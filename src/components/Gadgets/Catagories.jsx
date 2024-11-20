import { NavLink } from "react-router-dom";

const Catagories = ({ categories }) => {
  const { category } = categories;
  return (
    <>
      <div className="space-x-4">
        <NavLink
          to={`/productscards/${category}`}
          role="tab"
          className="btn p-2 w-32 my-2 rounded-3xl"
        >
          {category}
        </NavLink>
      </div>
    </>
  );
};

export default Catagories;
