import Card from '../../components/Card'

const Project = ({project}) => {
  return (
    <div>
     <Card className="portfolio__project">
      <img src={project.image} alt="portfolio Project" />
      <h4>{project.title}</h4>
      <p>{project.desc}</p>
      <div className="portfolio__project-cta">
        <a href={project.demo} className ="btn sm" target= '_blank'
         rel="noopener nonreferrer">Demo</a>
         <a href={project.github} className ="btn sm primary" target= '_blank'
         rel="noopener nonreferrer">Github</a>
      </div>

     </Card>

    </div>
  )
}

export default Project
