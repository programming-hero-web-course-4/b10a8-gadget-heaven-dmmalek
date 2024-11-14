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
      {/* <h1 className="text-center text-4xl font-bold">
        Explore Cutting-Edge Gadgets
      </h1> */}
      {categories?.map((category, id) => (
        <Catagories key={id} categories={category}></Catagories>
      ))}
    </div>
  );
};

export default Gadgets;
