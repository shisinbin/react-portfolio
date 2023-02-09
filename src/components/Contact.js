function Contact({ contactRef }) {
  return (
    <section id='contact' ref={contactRef}>
      <div className='contact-content'>
        <h4 className='trail'>Contact</h4>
        <h2>Need some help?</h2>
        <p>Tell me what you want, and I'll build it. Well, I can try.</p>
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
