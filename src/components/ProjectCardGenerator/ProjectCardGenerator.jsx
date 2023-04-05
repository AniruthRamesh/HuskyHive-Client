import ProjectCard from "../ProjectCard/ProjectCard";


const ProjectCardGenerator = () => {
    const projects = [
        {
          id: 1,
          img: "https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600",
          pp: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
          cat: "Web and Mobile Design",
          username: "Anna Bell",
        },
        {
          id: 2,
          img: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
          pp: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
          cat: "Logo Design",
          username: "Morton Green",
        },
        {
          id: 3,
          img: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1600",
          pp: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
          cat: "Animated GIFs",
          username: "Emmett Potter",
        },
        {
          id: 4,
          img: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1600",
          pp: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1600",
          cat: "Packaging Design",
          username: "Freddie Johnston",
        },
        
      ];

    return (  
        <div className="container text-center my-5">
            <div className="container row">
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3">
                    {
                         <ProjectCard key={projects[0].id} card={projects[0]}/>
                        }
                    </div>

                    <div className="d-none d-md-block col-md-6 col-lg-4 col-xl-4 col-xxl-3">
                    {
                         <ProjectCard key={projects[1].id} card={projects[1]}/>
                        }
                    </div>

                    <div className="d-none d-lg-block col-lg-4 col-xl-4 col-xxl-3">
                    {
                         <ProjectCard key={projects[2].id} card={projects[2]}/>
                        }
                    </div>

                    <div className="d-none d-xxl-block col-xxl-3">
                    {
                         <ProjectCard key={projects[3].id} card={projects[3]}/>
                        }
                    </div>
                
            </div>
        </div>
            
    );
}
 
export default ProjectCardGenerator;