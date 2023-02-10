function Footer() {
  return (
    <footer>
      <nav className='outward-links'>
        <a
          href='https://github.com/shisinbin'
          target='_blank'
          rel='noopener noreferrer'
          title='GitHub'
        >
          <i className='fab fa-github'></i>
        </a>
        <a
          href='https://drive.google.com/file/d/16Cs59tkQoyxxdXv6DsD3p4niQABcKFB0/view?usp=sharing'
          target='_blank'
          rel='noopener noreferrer'
          title='Resume'
        >
          <i className='far fa-file'></i>
        </a>
        <a
          href='https://www.linkedin.com/in/shivraj-binepal-95336325b/'
          target='_blank'
          rel='noopener noreferrer'
          title='Linked-In'
        >
          <i className='fab fa-linkedin'></i>
        </a>
      </nav>
      <p>&copy; 2023</p>
    </footer>
  );
}

export default Footer;
