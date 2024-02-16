import { useEffect, useState } from "react";
import Apiservices from "../services/Apiservices";
const Bags = () => {
  const [bags, setBags] = useState([]);

  useEffect(() => {
    Apiservices.getBags((response) => {
      setBags(response);
    });
  }, []);

  return (
    <div className="py-6">
      <ul className=" gap-2  grid grid-cols-6     ">
        {bags?.map((item) => {
          return (
            <li key={item.id} className="flex flex-col  justify-between items-center">
              <a className="">
                <img className="h-[35px] w-[35px] sel" src={item.image} />
              </a>
              <p className=" text-center py-2">{item.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Bags;
