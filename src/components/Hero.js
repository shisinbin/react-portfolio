import { Link } from 'react-router-dom';

import profileImage from '../assets/images/profile.png';

function Hero() {
  const handleClick = () => {
    console.log('button clicked!');
  };

  return (
    <main id='hero'>
      <div className='hero-content'>
        {/* <img src={profileImage} alt='profile' /> */}
        <div className='profile-picture'></div>
        <h1>
          Shivraj Binepal
          <br />
          Web Developer
        </h1>
        <h4>
          Building better online experiences
          <br />
          through clean and functional design
        </h4>
        <Link to='/projects'>Explore my work</Link>
      </div>
    </main>
  );
}

export default Hero;
