import { useState } from "react";
import './Dropdown.css';

    const links = [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/ryansammer07/",
            image: require('./Images/linkedin.webp')
        },
        {
            name: "GitHub",
            url: "https://github.com/rsammer07",
            image: require('./Images/github.png')
        },
        {
            name: "Gmail",
            url: "mailto:ryan.sammer07@gmail.com",
            image: require('./Images/gmail.png')
        },
        {
            name: "Resume",
            url: "https://docs.google.com/document/d/1NX3fC_XpAO8eUFlAdizYU6oa-93XZ_ob/edit?usp=sharing&ouid=116630576021888709262&rtpof=true&sd=true",
            image: require('./Images/resume.png')
        }
    ]

const Collapsible = () => {
    const [open, setOPen] = useState(false)


    const toggle = () => {
        setOPen(!open);
    }



    return (
        <div className="container">
            <button className="toggle" onClick={toggle}>Contact</button>
            {open && (
                <div className='contact-wrapper'>
                    {links.map((link, index) => (
                        <div className='contact' key={index}>
                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                                <img className="site-logo" src={link.image} alt={link.name} />
                            </a>
                            <p>{link.name}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Collapsible;
