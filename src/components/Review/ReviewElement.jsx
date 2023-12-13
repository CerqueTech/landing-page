const ReviewElement = (props) => {
  return (
    <div className="carousel_item col">
      <div className="review_item style_2 text-center">
        <h3 className="review_title">{props.title}</h3>
        <ul className="rating_star unordered_list">
          {[...Array(parseInt (props.start))].map((_, index) => (
            <li key={index}>
              <i className="fas fa-star"></i>
            </li>
          ))}
        </ul>
        <p className="review_content">
          {props.content}
        </p>
        <span className="quote_icon">
          <img
            src={props.icon}
          />
        </span>
        <div className="admin_item">
          <div className="admin_thumbnail">
            <img src={props.img} alt="Admin Avatar" />
          </div>
          <div className="admin_info">
            <h3 className="admin_name">{props.name}</h3>
            <span className="admin_designation">{props.designation}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReviewElement;
