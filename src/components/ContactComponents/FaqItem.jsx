import { useState, useEffect } from "react";

const FaqItem = (props) => {
  const [expan, setExpan] = useState(props.expanded);

  useEffect(() => {
    setExpan(props.expanded);
  }, [props.expanded]);

  const toggleAccordion = () => {
    setExpan(!expan);
  };
  return (
    <div className="accordion_item">
      <h3 className="accordion_header m-0" id={"heading_" + props.id}>
        <button
          className={"accordion_button " + (expan ? "" : "collapsed")}
          type="button"
          onClick={toggleAccordion}
          aria-expanded={expan}
          aria-controls={"collapse_" + props.id}
        >
          {props.txtHeader}
        </button>
      </h3>
      <div
        id={"collapse_" + props.id}
        className={"accordion-collapse collapse " + (expan ? "show" : "")}
        aria-labelledby={"heading_" + props.id}
      >
        <div className="accordion_body">
          <p className="m-0">{props.txtBody}</p>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
