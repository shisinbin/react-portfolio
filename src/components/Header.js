import { NavLink } from 'react-router-dom';

function Header() {
  const handleSClick = () => {
    console.log('button clicked');
  };

  return (
    <header>
      <div className='wrapper'>
        <h4>
          <NavLink to='/'>SSB</NavLink>
        </h4>
        <nav>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/projects'>Projects</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
