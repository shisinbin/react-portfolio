import { Link } from 'react-router-dom';

function Header() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <nav className='navbar navbar-dark bg-dark fixed-top navbar-expand-md'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            SSB
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='offcanvas'
            data-bs-target='#offcanvasNavbar'
            aria-controls='offcanvasNavbar'
            // onClick={handleTogglerClick}
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='offcanvas offcanvas-end text-bg-dark'
            tabIndex='-1'
            id='offcanvasNavbar'
            aria-labelledby='offcanvasNavbarLabel'
          >
            <div className='offcanvas-header'>
              <h5
                className='offcanvas-title text-bg-dark'
                id='offcanvasNavbarLabel'
              >
                SSB
              </h5>
              <button
                type='button'
                className='btn-close btn-close-white'
                data-bs-dismiss='offcanvas'
                aria-label='Close'
              ></button>
            </div>
            <div className='offcanvas-body'>
              <ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
                <li className='nav-item'>
                  <Link
                    className='nav-link'
                    to='/#about'
                    onClick={() => handleScroll('about')}
                  >
                    About
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    className='nav-link'
                    to='/#projects'
                    onClick={() => handleScroll('projects')}
                  >
                    Projects
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    className='nav-link'
                    to='/#skills'
                    onClick={() => handleScroll('skills')}
                  >
                    Skills
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    className='nav-link'
                    to='/#contact'
                    onClick={() => handleScroll('contact')}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
