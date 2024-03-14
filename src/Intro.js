import "./App.css";

const Intro = () => {
    return (
        <div class="homepage">
            <div className='introduction'>
                <div className='title'>
                    <h1>Ryan Sammer</h1>
                    <h1>Full Stack Developer</h1>
                </div>
                <img className='portrait' src={require('./Images/headshot.jpg')} alt="portrait"/>
            </div>
            <div className='about-me'>
                <p>Welcome to my portfolio!</p>
                <p>Hello, I'm Ryan Sammer, a passionate Full Stack Developer dedicated to crafting exceptional digital experiences. <br /> As you explore my portfolio, you'll get a glimpse into my journey, projects, and the skills I bring to the table.</p>
                <p>In this space, I showcase a collection of my latest projects, each reflecting my commitment to clean code, responsive design, and user-friendly interfaces. <br /> From building robust backends to crafting engaging frontends, I thrive on turning ideas into reality through code.</p>
                <p>I'm a creative problem solver with a keen interest in web development. <br /> My journey in the world of technology started with a immersive software engineering course at General Assembly, <br /> where I honed my skills in HTML, CSS, JavaScript and much more. Check out my skills page to see everything I worked on.</p>
            </div>
        </div>
    );
}

export default Intro;