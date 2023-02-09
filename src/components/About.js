import aboutImage from '../assets/images/ab1.jpg';

function About() {
  return (
    <section id='about'>
      <img src={aboutImage} alt='about' />
      <div className='about-content'>
        <h4 className='trail'>About</h4>
        <h2>Web Developer</h2>
        <p>
          Hi there! My name is Shiv and I'm a web developer on a mission. While
          I may not have a background in design, I've got a passion for solving
          problems with code and making beautiful, functional websites. I know I
          still have a lot to learn, but I'm excited to continue growing and
          finding my place in the world of web development. So, let's see what I
          can do!
        </p>
      </div>
    </section>
  );
}

export default About;
