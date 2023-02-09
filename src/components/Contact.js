import { useState } from 'react';

function Contact() {
  const [success, setSuccess] = useState(false);

  const [isSending, setIsSending] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    access_key: '5173651c-9d37-405d-92ab-7063a90bc333',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsSending(true);

    const data = JSON.stringify(formData);

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setIsSending(false);
        setSuccess(true);
        setFormData({
          ...formData,
          name: '',
          email: '',
          message: '',
        });

        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <section id='contact'>
      <div className='contact-content'>
        <h4 className='trail'>Contact</h4>
        <h2>Let's Connect!</h2>
        <p>
          Whether you're interested in hiring a freelance web developer, looking
          to collaborate on a project, or just want to say hi, I'd love to hear
          from you. Fill out the form below and let's start a conversation.
        </p>
        {/* <a href='mailto:sb1664@gmail.com'>
          <i className='far fa-envelope'></i> sb1664@gmail.com
        </a> */}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          name='name'
          onChange={handleChange}
          type='text'
          placeholder='NAME'
          value={formData.name}
        />
        <input
          name='email'
          onChange={handleChange}
          type='email'
          placeholder='EMAIL'
          value={formData.email}
        />
        <textarea
          name='message'
          onChange={handleChange}
          placeholder='YOUR MESSAGE'
          rows='4'
          value={formData.message}
        ></textarea>
        <div className='form-container'>
          <button>
            Reach out &nbsp; <i className='fas fa-paper-plane'></i>
          </button>
        </div>
      </form>

      {isSending && <p style={{ color: '#128bad' }}>Sending message...</p>}

      {success && (
        <p style={{ color: '#128bad' }}>Message successfully sent!</p>
      )}
    </section>
  );
}

export default Contact;
