function Contact() {
  return (
    <section id='contact'>
      <div className='contact-content'>
        <h4 className='trail'>Contact</h4>
        <h2>Let's Connect!</h2>
        <p>
          Whether you need a hand with a project or just want to say hi, I'm
          here. Shoot me a message and let's chat!
        </p>
        <a href='mailto:sb1664@gmail.com'>
          <i className='far fa-envelope'></i> sb1664@gmail.com
        </a>
      </div>
      <form>
        <input type='text' placeholder='NAME' />
        <input type='email' placeholder='EMAIL' />
        <textarea placeholder='YOUR MESSAGE'></textarea>
        <button>
          Reach out &nbsp; <i className='fas fa-paper-plane'></i>
        </button>
      </form>
    </section>
  );
}

export default Contact;
