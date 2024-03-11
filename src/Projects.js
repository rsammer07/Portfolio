import "./Projects.css";
const Projects = () => {
    const projects = [
        {
            name: "Star Wars Trivia",
            key: "Star_Wars_Trivia",
            image: require("./Images/Star-Wars-Trivia_1.png"),
            image2: require("./Images/Star-Wars-Trivia_2.png"),
            image3: require("./Images/Star-Wars-Trivia_3.png"),
            githubFront: "https://github.com/rsammer07/Star-Wars-Trivia",
            githubBack: false,
            deployed: "https://rsammer07.github.io/Star-Wars-Trivia/",
            description: 'Stars Wars Trivia Website! - Used HTML CSS and JavaScript to make a basic trivia game.'
        },
        {
            name: "Movie-Planner",
            key: "movie_planner",
            image: require("./Images/movie-planner_1.png"),
            image2: require("./Images/movie-planner_2.png"),
            image3: require("./Images/movie-planner_3.png"),
            githubFront: "https://github.com/rsammer07/Project-2-Movie-Planner",
            githubBack: false,
            deployed: "https://project-2-movie-planner-cbd864d43518.herokuapp.com/profile",
            description: 'Movie Planner Webapp! Used Express, MongoDB, EJS, JavaScript and CSS to make a movie watchlist app that allows users to add movies to their database and remove them from their watchlists.'
        },
        {
            name: "Sharmer News",
            key: "Sharmer_News",
            image: require("./Images/Sharmer-News.png"),
            image2: false,
            image3: false,
            githubFront: "https://github.com/rsammer07/Sharmer-News",
            githubBack: false,
            deployed: false,
            description: 'Sharmer News, A React one page application, pulled data from third party APIs and displayed information sorted on the page.'
        },
        {
            name: "What Should I Play?",
            key: "What_Should_I_Play",
            image: require("./Images/What Should I play.png"),
            image2: false,
            image3: false,
            githubFront: "https://github.com/rsammer07/What-should-I-Play-front-end",
            githubBack: "https://github.com/rsammer07/What-should-I-Play",
            deployed: false,
            description: 'What Should I Play? A React one page application in which a user can create an account with JWT web token. User can then create a database of games that they have and hit the randomize button to get a random game to play.'
        }
    ];
    
    return (
        <div>
            <div class="container mw-100 w-100 px-5 py-5" id="custom-cards">
                <h1 class="pb-2 border-bottom">Projects</h1>
                <div className="projects-display row row-cols-1 row-cols-lg-2 g-4 py-4">
                    {projects.map((project) => (
                        <div class="col">
                            <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{}}>
                                <div className="project-card d-flex flex-column h-100 p-4 pb-3 text-white text-shadow-1" key={project.name}>
                                    <div id={project.key} class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-indicators">
                                        {project.image && (<button type="button" data-bs-target={'#' + project.key} data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>)}
                                        {project.image2 && (<button type="button" data-bs-target={'#' + project.key} data-bs-slide-to="1" aria-label="Slide 2"></button>)}
                                        {project.image3 && (<button type="button" data-bs-target={'#' + project.key} data-bs-slide-to="2" aria-label="Slide 3"></button> )}
                                    </div>
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img src={project.image} class="d-block w-100 caro-img" alt="..."/> 
                                            </div>
                                            {project.image2 && (
                                                <div class="carousel-item">
                                                <img src={project.image2} class="d-block w-100 caro-img" alt="..." /> 
                                                </div>
                                            )}
                                            {project.image3 && (
                                                <div class="carousel-item">
                                                <img src={project.image3} class="d-block w-100 caro-img" alt="..." /> 
                                                </div>
                                            )}
                                        </div>
                                        <button class="carousel-control-prev" type="button" data-bs-target={'#' + project.key} data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Previous</span>
                                        </button>
                                        <button class="carousel-control-next" type="button" data-bs-target={'#' + project.key} data-bs-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Next</span>
                                        </button>
                                        </div>
                                    <div className="project-info">
                                        <h2 class="pt-4 display-6 lh-1 fw-bold">{project.name}</h2>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <p class="card-text">{project.description}</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                        {project.githubFront && (
                                        <button type="button" class="btn btn-sm btn-outline-secondary">
                                        <a href={project.githubFront} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'white' }}>                                                
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                            </svg> {project.githubBack && ( <span> (Front End) </span>   )}
                                        </a>
                                        </button>
                                        )}
                                        {project.githubBack && (
                                        <button type="button" class="btn btn-sm btn-outline-secondary">
                                        <a href={project.githubBack} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                            </svg> (Back End)
                                        </a>
                                    </button>
                                )}
                                        {project.deployed && (
                                        <button type="button" class="btn btn-sm btn-outline-secondary">
                                        <a href={project.deployed} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'white' }}> 
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-window-fullscreen" viewBox="0 0 16 16">
                                                <path d="M3 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
                                                <path d="M.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5zM1 5V2h14v3zm0 1h14v8H1z"/>
                                            </svg>  
                                                </a>
                                        </button>
                                         )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Projects;