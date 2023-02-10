import aboutImage from '../assets/images/ab1.jpg';

function AboutMe() {
  return (
    <main id='about'>
      {/* <img src={aboutImage} alt='about' /> */}
      <div className='about-content'>
        <h4 className='trail'>About</h4>
        <h2>Freelance Web Developer</h2>
        <p>
          I'm Shiv, a freelance web developer constantly striving to create
          clean, functional, and aesthetically pleasing websites. My passion
          lies in finding solutions to complex problems through code, and I'm
          eager to continue learning and growing in the field of web
          development. As a freelancer, I'm available for hire and ready to
          bring your vision to life. Let's work together to create something
          awesome.
        </p>
      </div>
    </main>
  );
}

export default AboutMe;
