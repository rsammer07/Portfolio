import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './DropDownButton.css';

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
];

function BasicButtonExample() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Contact">
      {links.map((link, index) => (
        <Dropdown.Item key={index} href={link.url} target="_blank">
          <img className='site-logo' src={link.image} alt={link.name} style={{ width: '20px', marginRight: '5px' }} />
          {link.name}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}

export default BasicButtonExample