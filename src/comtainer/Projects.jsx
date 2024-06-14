import React from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

// gets the projects from the state first
// That means we need to push the project to the state first in redux store
// so somewhere we need to get the data
const Projects = () => {

  const projects = useSelector((state)=>state.projects?.projects)
  return (
    <div
    className=' w-full py-6 flex items-center justify-center gap-6 flex-wrap'>
      {projects && projects.map((project,index)=>(
        <ProjectCard key={project.id} project={project} index={index}/>
      ))}
      </div>
  )
}

// project card
const ProjectCard = ({project,index}) => {
  console.log(project)
  return(
    <motion.div key={index} className=' w-full cursor-pointer md:w-[450px] h-[375px] bg-secondary rounded-md p-4 flex flex-col items-center justify-center gap-4'>
    {/* display output */}
      <div
              className=" bg-primary w-full h-full rounded-md overflow-hidden"
              style={{ overflow: "hidden", height: "100%" }}
            >
              {/* combine all the outputs and load it into an inframe */}
              <iframe
                title="Result"
                srcDoc={project.output}
                style={{ border: "none", width: "100%", height: "100%" }}
              />
            </div>

            {/* image name and icons etc */}
            <div className=' flex items-center justify-start gap-3 w-full'>

              {/* image */}
              

              {/* name */}
            </div>
    </motion.div>
  )
}

export default Projects