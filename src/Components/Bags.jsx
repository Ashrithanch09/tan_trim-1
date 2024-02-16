import { useEffect, useState } from "react";
import Apiservices from "../services/Apiservices";
const Bags = () => {
  const [bags, setBags] = useState([]);

  useEffect(() => {
    Apiservices.getBags();
  }, []);

  return <div>Bags</div>;
};

export default Bags;
