import Card from '../../components/Card'

const Project = ({project}) => {
  return (
    <div>
     <Card className="portfolio__project">
      <img src={project.image} alt="portfolio Project" />
      <h4>{project.title}</h4>
      <p>{project.desc}</p>
      <div className="portfolio__project-cta">
        <a href={project.demo} target= '_blank' rel="noopener noreferrer" className ="btn sm">Demo</a>
        {/* target= '_blank' rel="noopener nonreferrer" */}
         <a href={project.github} className ="btn sm primary" >Github</a>
      </div>

     </Card>

    </div>
  )
}

export default Project
