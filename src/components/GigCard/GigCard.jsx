import "./GigCard.scss"

function GigCard({ card }) {

    return (
        <div className="gigCard shadow">
            <img src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <div className="info">
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d" alt="" />
              <div className="texts">
                <h2>{card.cat}</h2>
                <span>by {card.userName}</span>
              </div>
        </div>
        </div>
      
    );
  }
  
  export default GigCard;