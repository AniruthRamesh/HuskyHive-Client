import ProjectCard from "../ProjectCard/ProjectCard";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios"

const ProjectCardGenerator = () => {

    const [projects,setProjects] = useState([])
    useEffect(() => {
      const gettingData = async () => {
        const response = await axios.get("http://localhost:4000/api/gigs");
        setProjects(response.data);
      };
  
      gettingData();
    }, []);



    return (  
        <div className="container text-center my-5 w-80">
          <div className="container bg-dark justify-content-center p-3 rounded mb-3">
  <p className="text-white text-center mb-0">Recent Gigs Posted</p>

</div>
            <div className="container row">
                   { projects.length>0 ? <><div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3">
                    <Link to ={`/gig/${projects[0]._id}`} className=" text-dark">
                    {
                         <ProjectCard key={projects[0]._id} card={projects[0]}/>
                        }                 
                    </Link>
                    </div>

                    <div className="d-none d-md-block col-md-6 col-lg-4 col-xl-4 col-xxl-3" >
                    <Link to ={`/gig/${projects[1]._id}`} className="text-dark">
                    {
                         <ProjectCard key={projects[1]._id} card={projects[1]}/>
                        }
                    </Link>
                    </div>

                    <div className="d-none d-lg-block col-lg-4 col-xl-4 col-xxl-3" >
                    <Link to ={`/gig/${projects[2]._id}`} className="text-dark">
                    {
                         <ProjectCard key={projects[2]._id} card={projects[2]}/>
                        }
                    </Link>
                    </div>

                    <div className="d-none d-xxl-block col-xxl-3" >
                    <Link to ={`/gig/${projects[3]._id}`} className="text-dark">
                    {
                         <ProjectCard key={projects[3]._id} card={projects[3]}/>
                        }
                    </Link>
                    </div>
                      </> : <>
                              <div>
                              <ion-icon name="reload-outline"></ion-icon>
                              </div>
                            </>
                   }
                
            </div>
        </div>
            
    );
}
 
export default ProjectCardGenerator;