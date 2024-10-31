'use client'
import React, { useState } from 'react';

export default function MailchimpForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // The Mailchimp action URL
    const url = `https://gmail.us21.list-manage.com/subscribe/post?u=6a6e1d3b82b7f5fd9681d599d&amp;id=6ac8e7a420&amp;f_id=00708ce6f0`;

    const formData = new FormData();
    formData.append('EMAIL', email);
    formData.append('b_abc123_def456', ''); // Hidden input field for spam prevention

    const res = await fetch(url, {
      method: 'POST',
      body: formData,
      mode: 'no-cors',
    });

    if (res.ok) {
      setStatus('Thank you for subscribing!');
    } else {
      setStatus('Subscription failed. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Subscribe to our newsletter</label>
        <input
          type="email"
          id="email"
          name="EMAIL"
          placeholder="Your email address"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {/* Honeypot field */}
        <input type="text" name="b_abc123_def456" style={{ display: 'none' }} aria-hidden="true" />
        <button type="submit">Subscribe</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}
