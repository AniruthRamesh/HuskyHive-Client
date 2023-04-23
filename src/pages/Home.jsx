import ProjectCardGenerator from "../components/ProjectCardGenerator/ProjectCardGenerator"
import AdThoughts from "../components/AdThoughts/AdThoughts";
import Featured from "../components/Featured/Featured";
import { useSelector } from "react-redux";
import GigCardUserGenerator from "../components/GigByUser/GigCardUserGenerator";
const Home = () => {
    const currentUser = useSelector((state) =>state.auth.user);
    return (  
        <div>
            <Featured/>
            <AdThoughts/>
            <ProjectCardGenerator/>
            {currentUser && <GigCardUserGenerator />}
         </div>
    );
}
 
export default Home;