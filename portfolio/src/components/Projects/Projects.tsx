import cards from '../../images/PremiumCreditCards1.jpg';
import test2 from '../../images/Untitled-2.png';
import test from '../../images/Untitled-1.png';
import test3 from '../../images/GettyImages-696622564-674ca3ef12af48cf85d27874dc7cc263.jpg';
import ProjectItem from './ProjectItems/ProjectItem';
import urls from '../../routes/routes.urls';

const Projects = () => {
    return (
        <div className="projects">
            <div className="my-projects">
                <h2>My Projects:</h2>
            </div>

            <ProjectItem image={cards} route={urls.CARD_SERVICING} title='Card Servicing System' />
            <ProjectItem image={test3} route={urls.TEMP_ROUTE} title='Loanbook' />
            <ProjectItem image={test2} route={urls.TEMP_ROUTE} title='Ping Pong' />
            <ProjectItem image={test} route={urls.TEMP_ROUTE} title='Random Website' />

        </div>
    )
}

export default Projects