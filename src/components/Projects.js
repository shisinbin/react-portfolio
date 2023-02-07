import projectData from '../data/db.json';

function Projects() {
  return (
    <section id='projects'>
      <div className='projects-header'>
        <h4 className='trail'>Projects</h4>
        <h2>Adventures in Web Development</h2>
      </div>
      <div id='project-carousel' className='carousel slide'>
        <div className='carousel-indicators'>
          <button
            type='button'
            data-bs-target='#project-carousel'
            data-bs-slide-to='0'
            className='active'
            aria-current='true'
            aria-label='Slide 1'
          ></button>
          <button
            type='button'
            data-bs-target='#project-carousel'
            data-bs-slide-to='1'
            aria-label='Slide 2'
          ></button>
        </div>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            {/* <img
              src='https://picsum.photos/414/896'
              className='d-block w-100'
              alt='...'
            /> */}
            <div className='carousel-caption'>
              <p className='carousel-date'>December 2022</p>
              <h3>Weather Dashboard</h3>
              <p>
                Some representative placeholder content for the first slide.
              </p>
              <p className='topics'>
                <span>JavaScript</span>
                <span>CSS</span>
                <span>HTML</span>
              </p>
            </div>
          </div>
          <div className='carousel-item'>
            {/* <img
              src='https://picsum.photos/400/600'
              className='d-block w-100'
              alt='...'
            /> */}
            <div className='carousel-caption'>
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
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
