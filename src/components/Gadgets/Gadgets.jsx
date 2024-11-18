import Catagories from "./Catagories";

const Gadgets = () => {
  const categories = [
    {
      id: "P001",
      category: "Smartphones",
    },
    {
      id: "P007",
      category: "Laptops",
    },
    {
      id: "P009",
      category: "Accessories",
    },
    {
      id: "P011",
      category: "Smart Watches",
    },
  ];
  return (
    <div className="mx-auto">
      <div>
        {categories?.map((category, id) => (
          <Catagories key={id} categories={category}></Catagories>
        ))}
      </div>
    </div>
  );
};

export default Gadgets;
