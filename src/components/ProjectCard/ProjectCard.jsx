import "./ProjectCard.scss"

function ProjectCard({ card }) {

    return (
        <div className="projectCard shadow">
            <img src={card.projectCardImg} alt="" />
            <div className="info">
              <img src={card.pp} alt="" />
              <div className="texts">
                <h2>{card.cat}</h2>
                <span>by {card.userName}</span>
              </div>
        </div>
        </div>
      
    );
  }
  
  export default ProjectCard;