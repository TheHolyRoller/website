'use client'
// components/SignupForm.js
// import { useState } from 'react';
import { ChangeEvent, FormEvent, useState } from "react";
// import api from '../../api/subscribe'
// import api from '/api'

const SignupForm = () => {
    const [emailInput, setEmailInput] = useState('');
    const [buttonLoading, setButtonLoading] = useState(false);

    const handleFormSubmit =  async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!emailInput) {
            console.error('Email is required'); // Log the error message to the console
            alert('Email is required'); // Alternatively, you can use alert to notify the user
        }
      
          setButtonLoading(true);
          try {
             const res = await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email: emailInput }) });
             const data = await res.json();
      
            if (data.success) {
            console.log('Joined successfully.'); // Log success message to console
            alert("Thank you for joining the waitlist!"); // Display alert to the user
            } else {
                throw new Error(data?.error || 'Something went wrong, please try again later');
             }
      
          } catch (e) {
            console.error('Error:', (e as Error).message); // Log the error message to the console
            alert('Error: ' + (e as Error).message); // Display an alert to the user
        }




    };
    

    return (
        <form onSubmit={handleFormSubmit}>
            <input
                type="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Enter your email"
                required
            />
            <button type="submit" >
                { 'Subscribe'}
            </button>
            {/* {message && <p>{message}</p>} */}
        </form>
    );
};

export default SignupForm;
