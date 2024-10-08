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
      <div className='min-h-[45rem] flex flex-col justify-center items-center bg-gradient-to-r from-slate-700 via-sky-700 to-blue-900'>
        {/* Form Wrapper */}
        <div className='h-auto w-[90%] md:w-[75%] lg:w-[70%] flex flex-col md:flex-row bg-black rounded-xl shadow-2xl overflow-hidden'>

          {/* Left Side Content */}
          <div className='w-full md:w-[50%] bg-cover bg-center p-12 flex flex-col justify-center items-center bg-white' style={{ backgroundImage: "url('https://example.com/volunteer.jpg')" }}>
            <h2 className='text-6xl text-white bg-gradient-to-r from-pink-300 to-teal-500 font-extrabold mb-6 leading-tight font-[Poppins] tracking-wide shadow-md drop-shadow-lg rounded-md'>
              Join Our Team
            </h2>
            <p className='text-black text-2xl text-center font-light leading-relaxed max-w-md'>
              Your contributions help us change lives. Become a volunteer and make an impact with your support!
            </p>
            <button className='mt-8 py-3 px-8 bg-gradient-to-r from-white to-gray-200 text-blue-700 font-bold rounded-full shadow-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 hover:text-white transform hover:scale-105 transition-all duration-300 ease-in-out'>
              Learn More
            </button>
          </div>


          {/* Form Section */}
          <div className='w-full md:w-[50%] p-10 bg-white'>
            <form
              ref={form}
              onSubmit={sendEmail}
              className='rounded-lg w-full h-full flex flex-col justify-between gap-6 transition-all duration-300 ease-in-out bg-black p-8 shadow-2xl'
            >
              {/* Input Fields */}
              <input
                className='w-full p-4 rounded-lg border border-gray-300 shadow-lg hover:border-purple-500 focus:outline-none focus:border-purple-700 focus:ring-2 focus:ring-purple-700 transition-all duration-300 ease-in-out'
                placeholder='Name'
                type="text"
                name="user_name"
                required
              />
              <input
                className='w-full p-4 rounded-lg border border-gray-300 shadow-lg hover:border-purple-500 focus:outline-none focus:border-purple-700 focus:ring-2 focus:ring-purple-700 transition-all duration-300 ease-in-out'
                placeholder='Email'
                type="email"
                name="user_email"
                required
              />
              <input
                className='w-full p-4 rounded-lg border border-gray-300 shadow-lg hover:border-purple-500 focus:outline-none focus:border-purple-700 focus:ring-2 focus:ring-purple-700 transition-all duration-300 ease-in-out'
                placeholder='Phone No'
                type="number"
                name="user_phone"
                required
              />
              <textarea
                className='w-full p-4 rounded-lg border border-gray-300 shadow-lg hover:border-purple-500 focus:outline-none focus:border-purple-700 focus:ring-2 focus:ring-purple-700 transition-all duration-300 ease-in-out'
                placeholder='Your message'
                name="message"
                required
              ></textarea>

              {/* Send Message Button */}
              <button
                type="submit"
                className='w-full py-3 bg-gradient-to-r from-gray-600 to-blue-500 text-white font-semibold rounded-lg hover:shadow-2xl hover:from-blue-500 hover:to-gray-600 hover:scale-105 transition-all duration-300 ease-in-out'
              >
                Send Message
              </button>
            </form>

          </div>
        </div>

        {/* Footer Contact Icons */}
        <div className='mt-10 flex justify-center space-x-12'>
          <a href="tel:+8754363052" className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-gray-800 to-gray-600 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <Phone className='w-8 h-8 text-white group-hover:text-blue-300 transition-colors duration-300' />
            <span className="absolute bottom-[-35px] text-sm text-white bg-black px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Call
            </span>
          </a>

          <a href="mailto:dilipkumar.dk2610@gmail.com" className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-gray-800 to-gray-600 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <Mail className='w-8 h-8 text-white group-hover:text-blue-300 transition-colors duration-300' />
            <span className="absolute bottom-[-35px] text-sm text-white bg-black px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Email
            </span>
          </a>

          <a href="https://wa.me/8754363052" className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-gray-800 to-gray-600 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <MessageCircle className='w-8 h-8 text-white group-hover:text-blue-300 transition-colors duration-300' />
            <span className="absolute bottom-[-35px] text-sm text-white bg-black px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              WhatsApp
            </span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;