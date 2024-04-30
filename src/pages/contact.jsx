import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Header from '../components/header-contact';

const Contact = () => {
  
    return (
      <>
        <Navbar />
        <Header />
        <p className="pt-5 ml-10 text-3xl font-bold text-amber-900"> Get in Touch</p>
        <p className="ml-10 text-xl text-amber-800">Have a question or need assistance? Feel free to reach out to us!</p>
        <div className="flex flex-col md:flex-row  p-4 md:p-10">
            <div className="md:w-1/2 text-amber-900">
                <p className="mt-6 font-bold">Email</p>
                <p>furniture@contact.com</p>
                <p className="mt-6 font-bold">Phone</p>
                <p>+62 812 2345 6789</p>
                <p className="mt-6 font-bold">Office</p>
                <p>Jl. Baru, Bandung</p>
            </div>                   
            <div className="md:w-1/2 text-amber-900">
                <form className='flex flex-col'>
                    <div className="mb-4 flex flex-col">
                        <label htmlFor="fullName" className="text-left mb-1">Name:</label>
                        <input type="text" id="fullName" className="border rounded-md p-2" />
                    </div>
                    <div className="mb-4 flex flex-col">
                        <label htmlFor="email" className="text-left mb-1">Email:</label>
                        <input type="email" id="email"  className="border rounded-md p-2" />
                    </div>
                    <div className="mb-4 flex flex-col">
                        <label htmlFor="subject" className="text-left mb-1">Subject:</label>
                        <input type="text" id="subject" className="border rounded-md p-2" />
                    </div>
                    <div className="mb-4 flex flex-col">
                        <label htmlFor="message" className="text-left mb-1">Message:</label>
                        <textarea id="message" className="border rounded-md p-2" rows="5" />
                    </div>
                    <button className="bg-amber-900 px-2 py-1 text-white rounded hover:bg-amber-700">
                        Submit
                    </button>
                </form>
            </div> 
        </div>      
        <Footer />
      </>
    );
  };
  
  export default Contact;