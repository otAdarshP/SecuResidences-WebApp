import React from 'react';
import { useNavigate } from 'react-router-dom';
import aboutImg from '../assets/img/aboutimg.png';
import appVideo from '../assets/img/video.mp4';
import Footer from './Footer';


const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <section id="home" className="flex flex-col items-center justify-center min-h-screen text-black bg-purple-400">
        <h1 className="text-4xl font-bold">Welcome to SecuResidences</h1>
        <p className="max-w-2xl mt-4 text-xl text-center">Smart hostel management with attendance, maintenance & cleaning slot features.</p>
      </section> */}

<section
  id="home"
  className="flex flex-col items-center justify-between min-h-screen px-8 py-16 bg-purple-100 md:flex-row"
>
  {/* Left Content */}
  <div className="text-left md:w-1/2 ml-11">
    <h1 className="mb-4 text-5xl font-bold text-purple-800 ">
      Welcome to SecuResidences
    </h1>
    <p className="max-w-md mb-6 text-xl text-gray-800">
    Tired of messy hostels and missed cleanups?
    </p>
    <p className="max-w-md mb-6 -mt-4 text-2xl text-gray-800">
    "We make your stay smart, automated and secure.”
    </p>
    <div className="space-x-4">
      <button className="px-4 py-2 text-base text-white transition bg-purple-700 hover:bg-purple-600 rounded-xl" onClick={()=> alert("🚀 APK release is on the way!")}>
        Download Now
      </button>
      <button className="px-6 py-2 text-purple-700 transition border-2 border-purple-700 rounded-xl hover:bg-purple-700 hover:text-white"  onClick={() => navigate('/features')}>
        See Features
      </button>
    </div>
  </div>

  {/* Right Content - Bigger Phone Frame */}
  <div className="flex justify-center mt-10 md:w-1/2 md:mt-0">
    <div className="w-[330px] h-[650px] rounded-[2.5rem] border-[6px] border-gray-400 shadow-2xl overflow-hidden bg-black">
    <video
  src={appVideo} // Make sure this is correctly imported
  autoPlay
  loop
  muted={false}
  playsInline
  key={appVideo} // Ensures reloading starts it from the beginning
  className="object-cover w-full h-full"
  controls // optional if you want user control
></video>

    </div>
  </div>
</section>

<section id="about" className="min-h-screen px-8 py-16 text-black bg-purple-300">
  <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
    {/* Left - Image */}
    <div className="w-full md:w-1/2">
      <img
        src={aboutImg} // Make sure image path is correct
        alt="SecuResidences Preview"
        className="w-full shadow-2xl rounded-3xl"
      />
    </div>

    {/* Right - Content */}
    <div className="w-full md:w-1/2">
      <h2 className="mb-6 text-5xl font-extrabold leading-tight text-purple-800">
        Why SecuResidences?
      </h2>

      <p className="mb-10 text-xl text-gray-900 leading-relaxed max-w-[600px]">
        We’re redefining hostel life for students and wardens alike — no more registers, confusion, or mess. 
        Manage everything from attendance to maintenance in a single tap.
      </p>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="p-5 bg-white shadow-md rounded-xl">
          <h3 className="mb-1 text-xl font-semibold">📍 Location-Based Attendance</h3>
          <p className="text-base text-gray-700">GPS-locked check-in ensures only on-campus attendance marking.</p>
        </div>
        <div className="p-5 bg-white shadow-md rounded-xl">
          <h3 className="mb-1 text-xl font-semibold">🧼 Cleaning Slot Booking</h3>
          <p className="text-base text-gray-700">Book and manage room-cleaning slots efficiently.</p>
        </div>
        <div className="p-5 bg-white shadow-md rounded-xl">
          <h3 className="mb-1 text-xl font-semibold">🔧 Maintenance Management</h3>
          <p className="text-base text-gray-700">Log issues instantly and track maintenance status.</p>
        </div>
        <div className="p-5 bg-white shadow-md rounded-xl">
          <h3 className="mb-1 text-xl font-semibold">📊 Admin Dashboard</h3>
          <p className="text-base text-gray-700">Warden dashboard with analytics, logs & real-time reports.</p>
        </div>
      </div>

      {/* Social Proof */}
      <p className="mt-8 text-lg font-medium text-purple-900">
        🎉 Trusted by <span className="font-bold"> students, managers</span> and growing!
      </p>
    </div>
  </div>
</section>






      {/* <section id="about" className="min-h-screen px-8 py-16 text-black bg-purple-300">
        <h2 className="mb-4 text-3xl font-semibold">About SecuResidences</h2>
        <p className="max-w-3xl text-lg">
          This platform automates and streamlines hostel management for students and wardens. Attendance via geofencing, cleaning slot bookings, and maintenance reporting are all handled smoothly.
        </p>
      </section> */}
      <Footer/>
    </>
  );
};

export default Home;
