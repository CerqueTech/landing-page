import CounterItem from './CounterItem';
import Decos from './Decos';
import getData from '../../../services/data';

const data = await getData('es/index/counter');


const CounterSection = () => {
  return (
    <>
      <div className="container">
        <div className="row">
        <CounterItem
            count={7}
            title={data.counter1title}
            supText="+"
            dataParallax='{"y" : 30, "smoothness": 10}'
          />

          <CounterItem
            count={4}
            title={data.counter2title}
            supText="+"
          />

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
