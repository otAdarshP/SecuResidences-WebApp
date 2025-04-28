// // ScrollToSection.jsx
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const ScrollToSection = ({ targetId }) => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Navigate to home
//     navigate('/');
    
//     // Delay to ensure the component has mounted
//     setTimeout(() => {
//       const el = document.getElementById(targetId);
//       if (el) el.scrollIntoView({ behavior: 'smooth' });
//     }, 100); // 100ms delay
//   }, [navigate, targetId]);

//   return null;
// };

// export default ScrollToSection;
