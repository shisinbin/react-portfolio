import { Link } from 'react-router-dom';

function Footer() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer>
      <div className='wrapper'>
        <hr />
        <nav>
          <Link to='/#about' onClick={() => handleScroll('about')}>
            About
          </Link>
          <Link to='/#projects' onClick={() => handleScroll('projects')}>
            Work
          </Link>
          <Link to='/#contact' onClick={() => handleScroll('contact')}>
            Contact
          </Link>
          <Link to='/#source-code' onClick={() => handleScroll('source-code')}>
            Source code
          </Link>
          {/* <a href='#projects'>Work</a>
          <a href='#contact'>Contact</a>
          <a href='#source-code'>Source Code</a> */}
        </nav>
        <hr />
        <div className='links'>
          <a
            href='https://github.com/shisinbin'
            target='_blank'
            rel='noreferrer'
            title='github'
          >
            <i className='fab fa-github'></i>
          </a>
          <a
            href='https://www.google.com/drive'
            target='_blank'
            rel='noreferrer'
            title='resume'
          >
            <i className='far fa-file'></i>
          </a>
          <a
            href='https://www.linkedin.com/in/shivraj-binepal-95336325b/'
            target='_blank'
            rel='noreferrer'
            title='linked in'
          >
            <i className='fab fa-linkedin'></i>
          </a>
        </div>
        <p>&copy; 2023</p>
      </div>
    </footer>
  );
}

export default Footer;
