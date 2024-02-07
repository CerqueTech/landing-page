import CounterItem from "./CounterItem";
import Decos from "./Decos";
import getData from "../../../services/data";
import { useState, useEffect } from "react";
const CounterSection = (props) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData(`${props.lang}/index/counter`);
      setData(result);
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <CounterItem
            count={8}
            title={data.counter1title}
            supText="+"
            dataParallax='{"y" : 30, "smoothness": 10}'
          />

          <CounterItem count={4} title={data.counter2title} supText="+" />

          <CounterItem
            count={5}
            title={data.counter3title}
            supText="+"
            dataParallax='{"y" : -30, "smoothness": 10}'
          />
        </div>
      </div>
      <Decos />
    </>
  );
};
export default CounterSection;
