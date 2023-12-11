import CounterItem from './CounterItem';
const CounterSection = () => {
    return (
      <div className="container">
        <div className="row">
          <CounterItem count={2400} title="Cliente felix en todo el mundo" supText="+" parallaxY={30} smoothness={10} />
          <CounterItem count={1690} title="Proyecto completado" supText="+" parallaxY={0} smoothness={10} />
          <CounterItem count={100} title="Satisfacción del cliente" supText="%" parallaxY={-30} smoothness={10} />
        </div>
      </div>
    );
  };
  
  export default CounterSection;