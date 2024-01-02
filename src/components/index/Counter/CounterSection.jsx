import CounterItem from './CounterItem';
import Decos from './Decos';
const CounterSection = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <CounterItem
            count={2400}
            title="Cliente feliz en todo el mundo"
            supText="+"
            dataParallax='{"y" : 30, "smoothness": 10}'
          />

          <CounterItem count={1690} title="Proyecto completado" supText="+" />
          <CounterItem
            count={100}
            title="Satisfacción del cliente"
            supText="%"
            dataParallax='{"y" : -30, "smoothness": 10}'
          />
        </div>
      </div>
      <Decos />
    </>
  );
};
export default CounterSection;
