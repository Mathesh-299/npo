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
      <div className='min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-slate-700 via-sky-700 to-blue-900'>
        {/* Form Wrapper */}
        <div className='h-auto w-[90%] md:w-[75%] lg:w-[70%] flex flex-col md:flex-row bg-white rounded-xl shadow-2xl overflow-hidden'>

          {/* Left Side Content */}
          <div className='w-full md:w-[50%] bg-cover bg-center p-10 flex flex-col justify-center items-center' style={{ backgroundImage: "url('https://example.com/volunteer.jpg')" }}>
            <h2 className='text-5xl text-white font-extrabold mb-4 leading-tight font-[Poppins]'>Join Our Team</h2>
            <p className='text-black text-xl text-center'>
              Your contributions help us change lives. Become a volunteer and make an impact!
            </p>
            <button className='mt-6 py-2 px-6 bg-white text-blue-700 font-bold rounded-lg shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300'>
              Learn More
            </button>
          </div>

          {/* Form Section */}
          <div className='w-full md:w-[50%] p-10 bg-white'>
            <form
              ref={form}
              onSubmit={sendEmail}
              className='rounded-lg w-full h-full flex flex-col justify-between gap-6 transition-all duration-300 ease-in-out'
            >
              {/* Input Fields */}
              <input
                className='w-full p-4 rounded-lg border border-gray-300 shadow-lg hover:border-blue-600 focus:outline-none focus:border-blue-800 focus:ring-4 focus:ring-blue-800 transition-all duration-200 ease-in-out'
                placeholder='Name'
                type="text"
                name="user_name"
                required
              />
              <input
                className='w-full p-4 rounded-lg border border-gray-300 shadow-lg hover:border-blue-600 focus:outline-none focus:border-blue-800 focus:ring-4 focus:ring-blue-800 transition-all duration-200 ease-in-out'
                placeholder='Email'
                type="email"
                name="user_email"
                required
              />
              <input
                className='w-full p-4 rounded-lg border border-gray-300 shadow-lg hover:border-blue-600 focus:outline-none focus:border-blue-800 focus:ring-4 focus:ring-blue-800 transition-all duration-200 ease-in-out'
                placeholder='Phone No'
                type="number"
                name="user_phone"
                required
              />
              <textarea
                className='w-full p-4 rounded-lg border border-gray-300 shadow-lg hover:border-blue-600 focus:outline-none focus:border-blue-800 focus:ring-4 focus:ring-blue-800 transition-all duration-200 ease-in-out'
                placeholder='Your message'
                name="message"
                required
              ></textarea>

              {/* Send Message Button */}
              <button
                type="submit"
                className='w-full py-3 bg-gradient-to-r from-purple-500 to-red-400 text-white font-semibold rounded-lg hover:shadow-2xl hover:bg-gradient-to-l from-red-500 to-purple-500 transition-all duration-300 ease-in-out'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer Contact Icons */}
        <div className='mt-10 flex justify-center space-x-12'>
          <a href="tel:+8754363052" className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-sky-600 to-blue-800 shadow-lg hover:shadow-2xl transition-all duration-300">
            <Phone className='w-7 h-7 text-white group-hover:text-purple-500 transition-colors duration-300' />
            <span className="absolute bottom-[-30px] text-xs text-white bg-black px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">Call</span>
          </a>
          <a href="mailto:dilipkumar.dk2610@gmail.com" className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-gray-600 to-blue-800 shadow-lg hover:shadow-2xl transition-all duration-300">
            <Mail className='w-7 h-7 text-white group-hover:text-purple-500 transition-colors duration-300' />
            <span className="absolute bottom-[-30px] text-xs text-white bg-black px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">Email</span>
          </a>
          <a href="https://wa.me/8754363052" className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-sky-600 to-blue-800 shadow-lg hover:shadow-2xl transition-all duration-300">
            <MessageCircle className='w-7 h-7 text-white group-hover:text-purple-500 transition-colors duration-300' />
            <span className="absolute bottom-[-30px] text-xs text-white bg-black px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">WhatsApp</span>
          </a>
        </div>

      </div>
    </>
  );
}

export default Contact;
