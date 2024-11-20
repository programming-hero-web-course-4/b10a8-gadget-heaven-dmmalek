import { useEffect } from "react";
import Graph from "../components/Statistics/graph";
import StatBannner from "../components/Statistics/StatBannner";

const Statistics = () => {
  useEffect(() => {
    document.title = "Statistics | Gadget Heaven";
  }, []);
  return (
    <>
      <StatBannner />
      <Graph />
    </>
  );
};

export default Statistics;
