function Hero() {
  const handleScrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id='hero'>
      <div className='hero-content'>
        <h1>Web Development, one step at a time</h1>
        <button onClick={handleScrollToProjects}>Explore my work</button>
      </div>
      <div className='hero-arrow'>
        <i className='fas fa-arrow-down'></i>
      </div>
    </section>
  );
}

export default Hero;
