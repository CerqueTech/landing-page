const PortafolioElement = (props) => {
  return (
    <div className="carousel_item">
      <div className="portfolio_item layout_fullimage">
        <div className="item_image">
          <a href="portfolio_details.html">
            <img
              src={props.portfolioImage}
            />
          </a>
        </div>
        <div className="item_content">
          <ul className="category_list unordered_list">
            <li>
              <a href="#!">{props.signTitle}</a>
            </li>
          </ul>
          <h3 className="item_title mb-0">
            <a href="portfolio_details.html">{props.signDescription}</a>
          </h3>
        </div>
      </div>
    </div>
  );
};
export default PortafolioElement;
