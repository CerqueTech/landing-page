import CounterItem from './CounterItem';
const CounterSection = () => {
    return (
      <div className="container">
        <div className="row">
          <CounterItem count={2400} title="Worldwide Happy Client" supText="+" parallaxY={30} smoothness={10} />
          <CounterItem count={1690} title="Completed Project" supText="+" parallaxY={0} smoothness={10} />
          <CounterItem count={100} title="Client Satisfaction" supText="%" parallaxY={-30} smoothness={10} />
        </div>
      </div>
    );
  };
  
  export default CounterSection;