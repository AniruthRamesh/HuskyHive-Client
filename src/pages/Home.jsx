import ProjectCardGenerator from "../components/ProjectCardGenerator/ProjectCardGenerator"
import AdThoughts from "../components/AdThoughts/AdThoughts";
import Featured from "../components/Featured/Featured";

const Home = () => {
    return (  
        <div>
            <Featured/>
            <AdThoughts/>
            <ProjectCardGenerator/>
         </div>
    );
}
 
export default Home;