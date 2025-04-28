import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Survey from "./components/Survey";
import Features from "./components/Features";
import Footer from "./components/Footer";
// import About from "./components/About";
// import ScrollToSection from './components/ScrollToSection';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/features" element={<Features />} />
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;



//     <nav className='flex items-center justify-between px-8 py-4'>
//       <img src={logo} alt="SecuResidences Logo"
//       className='w-auto h-16 ml-2 ' />
//       {/* <ul className='flex ml-10 mr-6 text-green-700'>
//         <li className='mr-8 text-xl text-purple-400 text-purple-700 cursor-pointer hover:underline'>Home</li>
//         <li className='mr-8 text-xl text-purple-700 cursor-pointer hover:text-purple-400'>About</li>
//         <li className='mr-8 text-xl text-purple-700 cursor-pointer hover:text-purple-400'>Features</li>
//         <li className='mr-8 text-xl text-purple-700 cursor-pointer hover:text-purple-400'>Contact</li>
//         <li className='mr-8 text-xl text-purple-700 cursor-pointer hover:text-purple-400'>Survey</li>
//       </ul> */}
//       <ul className="flex ml-10 mr-6 space-x-8">
//   {["Home", "About", "Features", "Contact", "Survey"].map((item) => (
//     <li
//       key={item}
//       className="relative text-xl text-purple-700 cursor-pointer group"
//     >
//       <span className="transition-colors duration-200 group-hover:text-purple-400">
//         {item}
//       </span>
//       <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
//     </li>
//   ))}
// </ul>
//       <button className='px-4 py-2 text-base text-white transition-all bg-purple-700 hover:bg-purple-600 rounded-xl'>Download App</button>
//     </nav>