import reactLogo from '../assets/images/react-logo.svg';
import bootstrapLogo from '../assets/images/bootstrap-logo.svg';
import cssLogo from '../assets/images/css-logo.svg';
import jsLogo from '../assets/images/js-logo.svg';

function Skills({ skillsRef }) {
  return (
    <section id='skills' ref={skillsRef}>
      <div className='skills-header'>
        <h4 className='trail'>Skills</h4>
        <h2>Things I Can Do</h2>
      </div>
      <ul className='grid'>
        <li>
          <div className='img-container'>
            <img src={jsLogo} alt='javascript logo' />
          </div>
          <h4>JavaScript</h4>
        </li>
        <li>
          <div className='img-container'>
            <img src={cssLogo} alt='' />
          </div>
          <h4>CSS</h4>
        </li>
        <li>
          <div className='img-container'>
            <img src={reactLogo} alt='' />
          </div>
          <h4>React</h4>
        </li>
        <li>
          <div className='img-container'>
            <img src={bootstrapLogo} alt='' />
          </div>
          <h4>Bootstrap</h4>
        </li>
      </ul>
    </section>
  );
}

export default Skills;
