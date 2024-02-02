import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      image: require("./Images/html.png"),
    },
    {
      name: "CSS",
      image: require("./Images/css.png"),
    },
    {
      name: "JavaScript",
      image: require("./Images/javascript.png"),
    },
    {
        name: "Python",
        image: require("./Images/python.png"),
      },
    {
      name: "React",
      image: require("./Images/react.png"),
    },
    {
      name: "Node.js",
      image: require("./Images/node.png"),
    },
    {
      name: "Express",
      image: require("./Images/express.png"),
    },
    {
      name: "MongoDB",
      image: require("./Images/mongodb.jpg"),
    },
    {
      name: "PostgreSQL",
      image: require("./Images/postgresql.png"),
    },
    {
      name: "Django",
      image: require("./Images/django.png"),
    }

  ];

  return (
    <>
    <h1>My Skills</h1>
    <div className="skills-display">
      {skills.map((skill, index) => (
        <div key={index} className="each-skill">
          <img className="skill-icon" src={skill.image} alt={skill.name} />
          <p>{skill.name}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default Skills;