import CounterItem from './CounterItem';
const CounterSection = () => {
  return (
    <div classNameName="container">
      <div className="row">
        <CounterItem
          count={2400}
          title="Cliente feliz en todo el mundo"
          supText="+"
        />
        <CounterItem count={1690} title="Proyecto completado" supText="+" />
        <CounterItem count={100} title="Satisfacción del cliente" supText="%" />
      </div>
      {/* <div className="deco_item shape_1">
        <img src="assets/images/shapes/shape_line_flow.svg" alt="Paradox Shapes Image Line Flow" />
      </div>
      <div className="deco_item shape_2">
        <img src="assets/images/shapes/shape_circle_2.svg" alt="Paradox Shapes Circle" />
      </div>
      <div className="deco_item shape_3">
        <img src="assets/images/shapes/shape_circle_1.svg" alt="Paradox Shapes Circle" />
      </div>
      <div className="deco_item shape_4">
        <img src="assets/images/shapes/shape_8.svg" alt="Paradox Shape" />
      </div> */}
    </div>
  );
};



export default CounterSection;
