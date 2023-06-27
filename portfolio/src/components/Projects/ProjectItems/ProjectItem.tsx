import { Link } from "react-router-dom";

interface ProjectItemProps {
    image: string;
    route: string;
    title: string;
}

const ProjectItem = (props: ProjectItemProps) => {
    return (
        <Link to={props.route} className='project-item' style={{
            backgroundImage: `url(${props.image})`
        }}>
            <h3><b>{props.title}</b></h3>
        </Link>
    )
}

export default ProjectItem