import emailjs from 'emailjs-com';
import { Mail, MessageCircle, Phone } from "lucide-react";
import React, { useRef } from 'react';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_aagmail', 'template_pf5syjx', form.current, 'UivTh2wrQxZ2LqeIO')
      .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
        form.current.reset(); 
      }, (error) => {
        console.log(error.text);
        alert("Failed to send message.");
      });
  };

  return (
    <>
      <div className='min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-slate-500 to-sky-500'>
        <div className='h-auto w-[90%] md:w-[75%] lg:w-[70%] flex flex-col md:flex-row bg-white rounded-lg shadow-xl overflow-hidden'>
          {/* Left Side Content */}
          <div className='w-full md:w-[50%] bg-cover bg-center p-8 md:p-12 flex flex-col justify-center items-center' style={{ backgroundImage: "url('https://example.com/volunteer.jpg')" }}>
            <h2 className='text-4xl text-white font-bold mb-4'>WANT TO BECOME A VOLUNTEER?</h2>
            <p className='text-black font-bold text-2xl text-center'>
              Your generous donation can make a lasting impact on the lives of those in need. By contributing, you help us extend support to more individuals and communities.
            </p>
          </div>

          {/* Form Section */}
          <div className='w-full md:w-[50%] p-8 bg-white'>
            <form 
              ref={form} 
              onSubmit={sendEmail} 
              className='rounded-lg w-full h-full p-6 flex flex-col justify-between gap-4'
            >
              <input
                className='w-full p-4 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600'
                placeholder='Name'
                type="text"
                name="user_name" 
                required
              />
              <input
                className='w-full p-4 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600'
                placeholder='Email'
                type="email"
                name="user_email" 
                required
              />
              <input
                className='w-full p-4 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600'
                placeholder='Phone No'
                type="number"
                name="user_phone" 
                required
              />
              <textarea
                className='w-full p-4 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600'
                placeholder='Your message'
                name="message" 
                required
              ></textarea>
              <button
                type="submit"
                className='w-full py-3 mt-4 bg-sky-600 text-white font-semibold rounded-md hover:bg-sky-700 shadow-md transition-all'
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        
        {/* Footer Contact Icons */}
        <div className='mt-10 flex justify-center space-x-10'>
          <a href="tel:+8754363052" className="text-white hover:text-sky-700 transition-colors duration-300">
            <Phone className='w-10 h-10' />
          </a>
          <a href="mailto:dilipkumar.dk2610@gmail.com" className="text-white hover:text-sky-700 transition-colors duration-300">
            <Mail className='w-10 h-10' />
          </a>
          <a href="https://wa.me/8754363052" className="text-white hover:text-sky-700 transition-colors duration-300">
            <MessageCircle className='w-10 h-10' />
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
