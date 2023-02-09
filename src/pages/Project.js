import { useNavigate, useParams } from 'react-router-dom';
import projectData from '../data/db.json';

function Project() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectData.projects.find(
    (project) => project.id === Number(id)
  );

  return (
    <main>
      <div className='project-wrapper'>
        <h2>{project.title}</h2>
        <p>{project.description_long}</p>
        <p>So here, I'll include screenshots too.</p>
        <button onClick={() => navigate('/#projects')}>Back</button>
      </div>
    </main>
  );
}

export default Project;