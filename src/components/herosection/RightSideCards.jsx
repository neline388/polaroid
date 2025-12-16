import "./RightSideCards.css";

const RightSideCards = () => {
  return (
    <div className="right-cards">
      <div className="stat-card">
        <span className="card-label">CARD</span>
        <hr className="divider" />
        <h3 className="card-value">55%</h3>
        <p className="card-text">
          Camera-based customer experience solutions
        </p>
      </div>

      <div className="stat-card">
        <span className="card-label">CARD</span>
        <hr className="divider" />
        <h3 className="card-value">34%</h3>
        <p className="card-text">
          Camera-based operational optimization
        </p>
      </div>

      <div className="stat-card">
        <span className="card-label">CARD</span>
        <hr className="divider" />
        <h3 className="card-value">12%</h3>
        <p className="card-text">
          Camera-assisted automation efficiency
        </p>
      </div>
    </div>
  );
};

export default RightSideCards;
