import "./GigCard.scss"

function GigCard({ card }) {
    console.log(card)
    return (
        <div className="gigCard shadow">
            <img src={`${card.projectCardImg}`} alt="" />
            <div className="info">
              <img src={`${card.pp}`} alt="" />
              <div className="texts">
                <h2>{card.cat}</h2>
                <span>by {card.userName}</span>
              </div>
        </div>
        </div>
      
    );
  }
  
  export default GigCard;