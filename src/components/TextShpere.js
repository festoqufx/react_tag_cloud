import React, { useEffect } from "react";
import "./TextShpere.css";
import TagCloud from "TagCloud";

const TextShpere = () => {
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
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
        radius: 500,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <>
      <div className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default TextShpere;
