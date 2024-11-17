import { useEffect } from "react";

const Statistics = () => {
  useEffect(() => {
    document.title = "Statistics | Gadget Heaven";
  }, []);
  return (
    <div>
      <p>Satistics</p>
    </div>
  );
};

export default Statistics;
