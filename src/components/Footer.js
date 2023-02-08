function Footer() {
  return (
    <footer>
      <div className='wrapper'>
        <hr />
        <nav>
          <a href='#about'>About</a>
          <a href='#projects'>Work</a>
          <a href='#contact'>Contact</a>
          <a href='#source-code'>Source Code</a>
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
