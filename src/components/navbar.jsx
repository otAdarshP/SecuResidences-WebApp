// import React from 'react'
// import logo from '../assets/img/image.png'
// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//      <nav className='flex items-center justify-between px-8 py-4'>
//           <img src={logo} alt="SecuResidences Logo"
//           className='w-auto h-16 ml-2 ' />
          
//           <ul className="flex ml-10 mr-6 space-x-8">
//       {["Home", "About", "Contact", "Survey"].map((item) => (
//         <li
//           key={item}
//           className="relative px-4 text-xl text-purple-700 cursor-pointer group"
//         >
//           <span className="transition-colors duration-200 group-hover:text-purple-400">
//             {item}
//           </span>
//           <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
//         </li>
//       ))}
//     </ul>
   

//           <button className='px-4 py-2 mb-1 text-base text-white transition-all bg-purple-700 hover:bg-purple-600 rounded-xl'>Download App</button>
//         </nav>
//   )
// }

// export default Navbar



import React from 'react'
import logo from '../assets/img/image.png'
import { Link, useLocation } from 'react-router-dom';


function Navbar() {
  const location = useLocation();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section && location.pathname === "/") {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      // navigate to home first then scroll
      window.location.href = `/#${id}`;
    }
  };

  return (
    <nav className='flex items-center justify-between px-8 py-4 shadow-md bg-slate-100'>
      <img src={logo} alt="SecuResidences Logo" className='w-auto h-16 ml-2' />

      <ul className="flex ml-10 mr-6 space-x-8">
  <li
    onClick={() => scrollToSection('home')}
    className="text-xl text-purple-700 transition cursor-pointer nav-underline"
  >
    Home
  </li>
  <li
    onClick={() => scrollToSection('about')}
    className="text-xl text-purple-700 transition cursor-pointer nav-underline"
  >
    About
  </li>
  <li>
    <Link to="/contact" className="text-xl text-purple-700 transition nav-underline">
      Contact
    </Link>
  </li>
  <li>
    {/* <Link to="/survey" className="text-xl text-purple-700 transition nav-underline">
      Survey
    </Link> */}
  </li>
</ul>



      <button className='px-4 py-2 text-base text-white transition bg-purple-700 hover:bg-purple-600 rounded-xl' onClick={()=> alert("🚀 APK release is on the way!")}>
        Download App
      </button>
    </nav>
  );
}

export default Navbar;
