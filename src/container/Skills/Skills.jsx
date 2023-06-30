// import React , {useState, useEffect} from 'react'
import ReactTooltip from 'react-tooltip';
import {motion} from 'framer-motion';
import{Appwrap} from '../../wrapper';
import {images} from '../../constants';
import {urlFor,client} from '../../client';
import './Skills.scss'
const Skill=[
  {
  name:'React',icon:images.react
  
},
{name:'git' , icon:images.git},
{name:'Apex', icon:images.ApexSalesforce

}
,{name:'LWC', icon:images.Lightning

}
];
const Skills = () => {
  // const [experience ,setExperience] = useState([])
  return (
    <>
     
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {Skill.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
    </div>
    
    </>
  )
}

// export default Skills;

export default Appwrap(Skills,'skills');