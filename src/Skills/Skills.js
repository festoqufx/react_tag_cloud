import React,{useEffect} from 'react'
import TagCloud from "TagCloud";
import "../Skills/skills.css"

export default function Skills() {
  useEffect(() => {
      const container = ".tagcloudanimation";
      const texts = [
		"HTML5",
        "CSS",
        "SASS",
		"NEXTjs",
        "PHP",
        "Laravel",
        "NodeJS",
		"Webpack",
        "Babel",
        "Jquery",
        "ES6",
        "GIT",
        "GITHUB",
		"Netlify",
		"Vercel",
		"Wordpress",
		"AEM",
		"Photoshop",
        "Illustrator",
        "After Effects",
        "InDesign",
		"Premiere Pro",
		"XD",
		"Audition",
		"Figma",
		"SharePoint",
		"Jira",
        "JavaScript",
        "React",
        "NodeJS",
        "SQL", 
        "MongoDB",
        "Firebase",
        "Material UI",
        "Tailwindcss",
        "Bootstrap",
      ];

      const options = {
        radius: 360,
        maxSpeed: "fast",
        initSpeed: "normal",
        direction: 90,
        keep: true,
      };
      TagCloud(container, texts, options);
  }, []);

  return (
        <div className='tagCloud_Container'>
          <span className="tagcloudanimation"></span>
        </div>
  )
}
