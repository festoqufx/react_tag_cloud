import React,{useEffect} from 'react'
import TagCloud from "TagCloud";


import "../Skills/skills.css"

export default function Skills() {

  // scrolltoupp



  // rotating 3d sphere
  useEffect(() => {
      const container = ".tagcloudanimation";
      const texts = [
        "HTML",
        "CSS",
        "C",
        "JavaScript",
        "React",
        "Java",
        "python",
        "NodeJS",
        "R",
        "SQL",
        "Data structure",
        "GIT",
        "GITHUB",
        "express",
        "MongoDB",
        "Photoshop",
        "Illustrator",
        "After Effects",
        "Figma",
        "Fire-base",
        "sanity",
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

  // filter fuc
 
  

  // now mapping
  


  return (
    <div className='container'>
    


     
        <div className='hidden md:flex justify-center capitalize text-2xl text-violet-900 container cursor-pointer'>
          <span className="tagcloudanimation"></span>
        </div>
        
        
    </div>
  )
}
