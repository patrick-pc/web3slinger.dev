import { ProjectData } from '../../data/projects'
import { ProjectCard } from './ProjectCard'

export const Projects = () => {
  return (
    <div className="grid gap-6">
      {ProjectData.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          icon={project.icon}
          href={project.href}
        />
      ))}
    </div>
  )
}
