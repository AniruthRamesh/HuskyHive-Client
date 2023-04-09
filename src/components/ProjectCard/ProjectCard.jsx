import "./ProjectCard.scss"

function ProjectCard({ card }) {

    return (
        <div className="projectCard shadow">
            <img src={card.img} alt="" />
            <div className="info">
              <img src={card.pp} alt="" />
              <div className="texts">
                <h2>{card.cat}</h2>
                <span>by {card.username}</span>
              </div>
        </div>
        </div>
      
    );
  }
  
  export default ProjectCard;