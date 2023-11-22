const ReviewElement = (props) => {
  return (
    <div className="carousel_item col">
      <div className="review_item style_3">
        <h3 className="review_title">{props.title}</h3>
        <ul className="rating_star unordered_list">
          {[...Array(5)].map((_, index) => (
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
            <img src={props.imgAdmin} alt="Admin Avatar" />
          </div>
          <div className="admin_info">
            <h3 className="admin_name">{props.adminName}</h3>
            <span className="admin_designation">{props.adminDesignation}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReviewElement;
