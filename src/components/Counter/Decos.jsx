const Decos = () => {
  return (
    <>
      <div className="deco_item shape_1">
        <img src="assets/images/shapes/shape_line_flow.svg" />
      </div>
      <div className="deco_item shape_2">
        <img src="assets/images/shapes/shape_circle_2.svg" />
      </div>
      <div
        className="deco_item shape_3"
        data-parallax='{"y" : 100, "smoothness": 20}'
      >
        <img src="assets/images/shapes/shape_circle_1.svg" />
      </div>
      <div
        className="deco_item shape_4"
        data-parallax='{"y" : -200, "smoothness": 20}'
      >
        <img src="assets/images/shapes/shape_8.svg" />
      </div>
    </>
  );
};
export default Decos;
