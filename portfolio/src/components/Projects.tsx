import faqPage from '../images/Untitled-1.png';
import orderSummery from '../images/Untitled-2.png';
import pingPong from '../images/pingpong.png';

const Projects = () => {
    return (
        <div className="projects">
            <div className="my-projects">
                <h2>My Projects.</h2>
            </div>
            <a href="#"><img className="project-thumbnail" src={faqPage} alt="" /></a>
            <a href="#"><img className="project-thumbnail" src={orderSummery} alt="" /></a>
            <a href="https://goofy-pare-7af638.netlify.app" target="blank"><img className="project-thumbnail"
                src={pingPong} alt="" /></a>

        </div>
    )
}

export default Projects