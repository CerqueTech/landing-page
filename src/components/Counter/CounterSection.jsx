import CounterItem from './CounterItem';
const CounterSection = () => {
  return (
    <div className="container">
      <div className="row">
        <CounterItem
          count={2400}
          title="Cliente felix en todo el mundo"
          supText="+"
        />
        <CounterItem count={1690} title="Proyecto completado" supText="+" />
        <CounterItem count={100} title="Satisfacción del cliente" supText="%" />
      </div>
    </div>
  );
};

export default CounterSection;
