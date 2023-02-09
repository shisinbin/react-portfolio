import aboutImage from '../assets/images/ab1.jpg';

function About() {
  return (
    <section id='about'>
      <img src={aboutImage} alt='about' />
      <div className='about-content'>
        <h4 className='trail'>About</h4>
        <h2>Web Developer</h2>
        <p>
          Hi, I'm Shiv, that's my name. Don't wear it out. I design web sites,
          or try to. I'm not too hot on the design element. I don't have any
          illustrating skills and already I can see how that's going to put me
          at a disadvantage. But I'm good at logic, so maybe there's a spot for
          me somewhere here.
        </p>
      </div>
    </section>
  );
}

export default About;
