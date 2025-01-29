import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <>
      
      <footer className="bg-[#c7cfb7] text-white py-12">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 px-4 md:px-16">
        
          <div className="flex flex-col items-center sm:items-start">
            <img src="image.png" className="h-[100px] ml-10 w-[100px] rounded-full" alt="Logo" />
            <div className="pl-8 mt-4 sm:pl-0">
              <h1 className="text-5xl">
                <span className="text-red-600">Forth</span>
                <span className="text-black">Tech</span>
              </h1>
              <p className="text-black text-xl">Forward with ForthTech</p>
            </div>
          </div>
        </div>

        <hr className="text-black mx-4 mt-8 sm:mx-16" />

        <div className="flex flex-col mx-[100px] sm:flex-row justify-center sm:justify-between gap-12 sm:gap-16 mt-8">
          <div className="flex flex-col items-center sm:items-start">
            <h1 className="text-black text-2xl mb-4">Learn More</h1>
            <hr className="w-24 border-t-2 border-green-800 mb-6" />
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" color="gray" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
                <HashLink to="#Home" smooth className="hover:text-gray-500 transition duration-300 text-xl font-semibold text-black">
                  Home
                </HashLink>
              </div>
              <div className="flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" color="gray" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
                <HashLink to="#About" smooth className="hover:text-gray-500 transition duration-300 text-xl font-semibold text-black">
                  About
                </HashLink>
              </div>
              <div className="flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" color="gray" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
                <HashLink to="#Service" smooth className="hover:text-gray-500 transition duration-300 text-xl font-semibold text-black">
                  Service
                </HashLink>
              </div>
              <div className="flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" color="gray" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
                <HashLink to="#Product" smooth className="hover:text-gray-500 transition duration-300 text-xl font-semibold text-black">
                  Product
                </HashLink>
              </div>
              <div className="flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" color="gray" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
                <HashLink to="#Contact" smooth className="hover:text-gray-500 transition duration-300 text-xl font-semibold text-black">
                  <span>ContactUs</span>
                </HashLink>
              </div>
            </div>
          </div>

        
          <div className="flex flex-col items-center sm:items-start">
            <h1 className="text-black text-2xl mb-4">Address</h1>
            <hr className="w-24 border-t-2 border-green-800 mb-6" />
            <p className="text-black text-center sm:text-left w-60 sm:w-auto">518/19, White House, opposite Swaminarayan Mandir, Bapunagar, Ahmedabad, Gujarat 380024</p>
            <div className="mt-6 text-center sm:text-left">
              <p className="text-gray-700">info@forthtech.in</p>
              <p className="text-gray-700">+91 78748 48430</p>
            </div>
            <div className="flex justify-center gap-8 mt-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" color="black" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" color="black" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" color="black" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>
        </div>
          </div>

          
          <div className="bg-blue-100 mt-8 sm:mt-0 w-full sm:w-[500px] h-[300px]">
            {/* <iframe
              src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&callback=myMap"
              width="100%"
              height="100%"
              title="Google Map"
              frameBorder="0"
            ></iframe> */}
          </div>
        </div>

        
        
      </footer>
    </>
  );
}

export default Footer;
