import { useNavigate, useParams } from 'react-router-dom';
import projectData from '../data/db.json';
import workInProgress from '../assets/images/work-in-progress.png';
import { useEffect } from 'react';

function Project() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectData.projects.find(
    (project) => project.id === Number(id)
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    document.body.scrollTop = 0;
  });

  return (
    <main id='project'>
      <div className='project-wrapper'>
        <img src={workInProgress} width='100' height='100' />
        <h2>{project.title}</h2>
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
        <p>{project.description_long}</p>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </main>
  );
}

export default Project;
