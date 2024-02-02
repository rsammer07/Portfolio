import "./Projects.css";

const Projects = () => {
    const projects = [
        {
            name: "Star Wars Trivia",
            image: require("./Images/Star-Wars-Trivia.png"),
            githubFront: "https://github.com/rsammer07/Star-Wars-Trivia",
            githubBack: false,
            deployed: "https://rsammer07.github.io/Star-Wars-Trivia/"
        },
        {
            name: "Movie-Planner",
            image: require("./Images/movie-planner.png"),
            githubFront: "https://github.com/rsammer07/Project-2-Movie-Planner",
            githubBack: false,
            deployed: "https://project-2-movie-planner-cbd864d43518.herokuapp.com/profile"
        },
        {
            name: "Sharmer News",
            image: require("./Images/Sharmer-News.png"),
            githubFront: "https://github.com/rsammer07/Sharmer-News",
            githubBack: false,
            deployed: false
        },
        {
            name: "What Should I Play?",
            image: require("./Images/What Should I play.png"),
            githubFront: "https://github.com/rsammer07/What-should-I-Play-front-end",
            githubBack: "https://github.com/rsammer07/What-should-I-Play",
            deployed: false
        }
    ];

    return (
        <div>
            <h1>Projects</h1>
            <div className="projects-display">
                {projects.map((project) => (
                    <div className="project-card" key={project.name}>
                        <div className="project-image">
                            <img className="project-screenshot" src={project.image} alt={project.name} />
                        </div>
                        <div className="project-info">
                            <h2>{project.name}</h2>
                            <div className="project-links">
                                <a href={project.githubFront} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
                                    Front-End
                                </a>
                                {project.githubBack && (
                                    <a href={project.githubBack} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
                                        Back-End
                                    </a>
                                )}
                                {project.deployed && (
                                    <a href={project.deployed} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
                                        Deployed
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;