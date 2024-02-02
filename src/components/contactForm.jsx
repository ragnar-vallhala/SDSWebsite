import React, { useState } from 'react';
import SendButton from './sendButton';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
    
    
    // handle form submission here
  }

  return (
    <div>
        <p className='center-text'>CONTACT US!</p>
        <div className='flex justify-center'>
            <form onSubmit={handleSubmit} className='flex-col' method='POST'>
            <input
                required
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Name'
                className='input-field m-8'
            />
            
            <input
                type="email"
                id="email"
                value={email}
                placeholder='Email*'
                required
                onChange={(e) => setEmail(e.target.value)}
                className='input-field m-8'
            />

            <textarea
                required
                id="message"
                value={message}
                placeholder='Message'
                onChange={(e) => setMessage(e.target.value)}
                className='input-field-message m-8'
            />
            <div className='flex justify-center'>
            <button type="submit"><SendButton/></button>
            </div>
            </form>
        </div>
    </div>
  );
}

export default ContactForm;