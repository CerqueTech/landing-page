export default function ProvidingElement(props) {
  return (
    <div className="col">
      <div className="service_item style_4">
        <div
          className="item_icon"
          style={{ backgroundImage: `url(${props.shape})` }}
        >
          <img src={props.iconImage} alt={props.title} />
        </div>
        <div className="item_content">
          <h3 className="item_title">{props.title}</h3>
          <p className="item_description">{props.description}</p>
        </div>
        <a className="item_details_btn" data-cursor="-opaque">
          <span className="btn_icon">
            <img
              src="assets/images/icons/icon_arrow_down_right_dark_2.svg"
              alt="Arrow icon"
            />
          </span>
        </a>
      </div>
    </div>
  );
}
