import Catagories from "./Catagories";

const Gadgets = () => {
  const categories = [
    {
      id: "P000",
      category: "All Product",
    },
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
    {
      id: "P002",
      category: "Monitor",
    },
  ];
  return (
    <div className="mx-auto">
      <div className="p-4 bg-white shadow-2xl rounded-md">
        {categories?.map((category, id) => (
          <Catagories key={id} categories={category}></Catagories>
        ))}
      </div>
    </div>
  );
};

export default Gadgets;
