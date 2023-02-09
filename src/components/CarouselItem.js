import { Link } from 'react-router-dom';

function CarouselItem({ project }) {
  return (
    <div className={`carousel-item ${project.id === 1 ? 'active' : ''}`}>
      <img src={project.url_img} className='d-block w-100' alt='project' />
      <div className='carousel-caption'>
        <p className='carousel-date'>December 2022</p>
        <h3>{project.title}</h3>
        <p>{project.description_short}</p>
        <p className='topics'>
          {project.technologies_used.map((tech, i) => (
            <span key={i}>{tech}</span>
          ))}
        </p>
        <p>
          <a href={project.url_repo} target='_blank' rel='noreferrer'>
            Repo
          </a>
        </p>
        <p>
          <a href={project.url_deployed} target='_blank' rel='noreferrer'>
            Deployed
          </a>
        </p>
        <p>
          <Link to={`/projects/${project.id}`}>Explore</Link>
        </p>
      </div>
    </div>
  );
}

export default CarouselItem;
