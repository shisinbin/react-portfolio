import projectData from '../data/db.json';
import CarouselIndicator from './CarouselIndicator';
import CarouselItem from './CarouselItem';

function Projects({ projectsRef }) {
  const projects = projectData.projects;
  return (
    <section id='projects' ref={projectsRef}>
      <div className='projects-header'>
        <h4 className='trail'>Projects</h4>
        <h2>Adventures in Web Development</h2>
      </div>
      <div id='project-carousel' className='carousel slide'>
        <div className='carousel-indicators'>
          {projects.map((project, index) => (
            <CarouselIndicator
              id={Number(project.id)}
              title={project.title}
              index={index}
            />
          ))}
        </div>

        <div className='carousel-inner'>
          {projects.map((project) => (
            <CarouselItem project={project} />
          ))}
        </div>

        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#project-carousel'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>

        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#project-carousel'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>

        <div className='overlay'></div>
      </div>
    </section>
  );
}

export default Projects;
