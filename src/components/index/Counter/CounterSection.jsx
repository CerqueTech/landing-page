import CounterItem from './CounterItem';
import Decos from './Decos';
const CounterSection = () => {
  return (
    <>
      <div className="container">
        <div className="row">
        <CounterItem
            count={7}
            title="Clientes satisfechos en todo el mundo"
            supText="+"
            dataParallax='{"y" : 30, "smoothness": 10}'
          />

          <CounterItem
            count={4}
            title="Proyectos exitosos"
            supText="+"
          />

          <CounterItem
            count={5} 
            title="Profesionales talentosos"
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
