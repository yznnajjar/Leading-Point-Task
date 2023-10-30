// Components
import Statistics from "components/Statistics";
import HomeList from "components/HomeList";
import TopBar from "components/TopBar";

// Style
import './Projects.scss';

const Projects = () => {
    return (
        <div className="projects full-width">
            <Statistics />
            <HomeList/>
           
            </div>
    )
};

export default Projects;