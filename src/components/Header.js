import { useState } from 'react';

function Header() {
  // const [show, setShow] = useState(false);

  // const handleLinkClick = () => {
  //   setShow(false);
  // };

  // const handleTogglerClick = () => {
  //   setShow(true);
  // };

  return (
    <header>
      <nav className='navbar navbar-dark bg-dark fixed-top navbar-expand-md'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            SSB
          </a>
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
                  <a className='nav-link' href='#about'>
                    About
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#projects'>
                    Projects
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#skills'>
                    Skills
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#contact'>
                    Contact
                  </a>
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
