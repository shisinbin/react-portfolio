import { useNavigate, useParams } from 'react-router-dom';
import projectData from '../data/db.json';
import workInProgress from '../assets/images/work-in-progress.png';

function Project() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectData.projects.find(
    (project) => project.id === Number(id)
  );

  return (
    <main>
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
        <button onClick={() => navigate('/#projects')}>Back</button>
      </div>
    </main>
  );
}

export default Project;
