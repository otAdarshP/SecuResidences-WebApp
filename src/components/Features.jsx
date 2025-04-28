import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaBroom, FaTools, FaIdCard, FaBell, FaLock } from 'react-icons/fa';

const Features = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-gray-800 bg-gradient-to-b from-indigo-50 via-purple-50 to-white">
      {/* Header Section */}
      <header className="px-6 py-12 text-center">
        <h1 className="mb-4 text-5xl font-bold text-purple-800">Transforming Hostel Living</h1>
        <p className="max-w-3xl mx-auto text-xl text-indigo-700">
          Discover how SecuResidences is revolutionizing the hostel experience with smart, secure, and seamless management solutions.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl px-6 pb-16 mx-auto">
        {/* Introduction */}
        <section className="p-8 mb-16 bg-white border border-purple-200 shadow-xl rounded-2xl">
          <h2 className="mb-6 text-3xl font-bold text-purple-800">Redefining Hostel Management</h2>
          <p className="mb-6 text-lg leading-relaxed">
            SecuResidences is not just another hostel management application—it's a comprehensive ecosystem designed to address the unique challenges faced by modern student accommodations. Born from a deep understanding of the inefficiencies in traditional hostel operations, our platform seamlessly integrates cutting-edge technology with practical solutions to create a safer, more efficient, and truly paperless hostel experience.
          </p>
          <p className="text-lg leading-relaxed">
            With the hostel facility management market projected to reach $10.2 billion by 2030, SecuResidences positions itself at the forefront of digital transformation in an industry where over 80% of facilities in India remain unorganized. Our mobile-first approach ensures that students, wardens, and administrators can access powerful management tools directly from their smartphones, eliminating the need for physical paperwork and outdated systems.
          </p>
        </section>

        {/* Core Features */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-center text-purple-800">Core Features</h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            {/* Feature 1 */}
            <div className="p-6 transition duration-300 bg-white border-l-4 border-blue-500 shadow-lg rounded-xl hover:shadow-xl">
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="mr-4 text-3xl text-blue-500" />
                <h3 className="text-2xl font-semibold text-gray-800">GPS-Based Attendance Tracking</h3>
              </div>
              <p className="leading-relaxed text-gray-600">
                Say goodbye to manual roll calls and outdated RFID systems. SecuResidences employs advanced geofencing technology that automatically registers when students enter or leave hostel premises. This contactless system generates daily attendance reports, instantly identifies absentees, and sends real-time notifications to wardens and parents when students don't return by curfew—all without requiring any manual input from students or staff.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 transition duration-300 bg-white border-l-4 border-green-500 shadow-lg rounded-xl hover:shadow-xl">
              <div className="flex items-center mb-4">
                <FaBroom className="mr-4 text-3xl text-green-500" />
                <h3 className="text-2xl font-semibold text-gray-800">Intelligent Room Cleaning System</h3>
              </div>
              <p className="leading-relaxed text-gray-600">
                Our innovative slot-based cleaning management eliminates the chaos of unpredictable cleaning schedules. Students can book specific time slots that fit their academic schedule, ensuring their rooms are cleaned when they're in class. Cleaning staff receive optimized routes each day, increasing efficiency while reducing wait times. The system tracks cleaning history, monitors satisfaction ratings, and ensures no room is overlooked—creating a healthier living environment for everyone.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 transition duration-300 bg-white border-l-4 border-red-500 shadow-lg rounded-xl hover:shadow-xl">
              <div className="flex items-center mb-4">
                <FaTools className="mr-4 text-3xl text-red-500" />
                <h3 className="text-2xl font-semibold text-gray-800">Streamlined Maintenance Portal</h3>
              </div>
              <p className="leading-relaxed text-gray-600">
                From leaky faucets to broken furniture, our maintenance portal transforms how issues are reported and resolved. Students can submit detailed reports with photos, categorize problems by urgency, and track resolution status in real-time. Maintenance staff receive prioritized task lists, automated reminders for pending issues, and can update progress directly through the app. This transparency creates accountability, dramatically reducing resolution times and improving student satisfaction with living conditions.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 transition duration-300 bg-white border-l-4 border-yellow-500 shadow-lg rounded-xl hover:shadow-xl">
              <div className="flex items-center mb-4">
                <FaIdCard className="mr-4 text-3xl text-yellow-500" />
                <h3 className="text-2xl font-semibold text-gray-800">Regulated Outing Pass System</h3>
              </div>
              <p className="leading-relaxed text-gray-600">
                Our secure digital outing pass system replaces outdated paper registers with a structured multi-level approval process. Students can request passes with specific return times, destination details, and purpose. Wardens receive instant notifications and can approve or deny requests with a single tap. Parents are automatically notified of approved outings, return status, and any delays. This system dramatically improves student safety while providing flexibility for legitimate outings—all within a framework that ensures proper authorization.
              </p>
            </div>
          </div>
        </section>

        {/* Additional Benefits */}
        <section className="p-8 mb-16 bg-white border border-purple-200 shadow-xl rounded-2xl">
          <h2 className="mb-6 text-3xl font-bold text-purple-800">Beyond Basic Management</h2>
          
          <div className="grid gap-8 mb-8 md:grid-cols-2">
            <div className="flex items-start">
              <FaBell className="mt-1 mr-4 text-2xl text-purple-600" />
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800">Smart Notifications & Alerts</h3>
                <p className="text-gray-600">
                  Never miss important updates with our intelligent notification system. Receive personalized alerts for cleaning reminders, maintenance updates, outing approvals, curfew warnings, and more—all tailored to user roles and preferences.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <FaLock className="mt-1 mr-4 text-2xl text-purple-600" />
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800">Enterprise-Grade Security</h3>
                <p className="text-gray-600">
                  Rest easy knowing all sensitive data is protected with end-to-end encryption, JWT authentication, and OAuth 2.0 protocols. Our GDPR-compliant platform ensures student privacy while maintaining complete visibility for authorized personnel.
                </p>
              </div>
            </div>
          </div>
          
          <h3 className="mb-4 text-2xl font-semibold text-gray-800">Real Impact, Measurable Results</h3>
          <p className="mb-6 leading-relaxed text-gray-600">
            Institutions using SecuResidences report up to 85% reduction in administrative workload, 70% faster maintenance resolution times, and significant improvements in student satisfaction scores. Our paperless approach eliminates thousands of paper forms annually per hostel, while the absence of RFID cards reduces e-waste and associated costs.
          </p>
          
          <p className="leading-relaxed text-gray-600">
            Built on a microservices architecture with React Native for cross-platform compatibility, SecuResidences delivers enterprise-level performance with consumer-grade usability. The system scales effortlessly from small hostels to large university campuses with multiple residences, all managed from a single unified dashboard.
          </p>
        </section>

        {/* CTA Section */}
        <section className="p-10 text-center text-white shadow-2xl bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl">
          <h2 className="mb-6 text-3xl font-bold">Ready to Transform Your Hostel Experience?</h2>
          <p className="max-w-3xl mx-auto mb-8 text-xl">
            Join the growing community of forward-thinking institutions that are embracing the future of hostel management. Whether you're managing a single residence hall or an entire campus housing system, SecuResidences scales to meet your needs.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            
            <button className="px-8 py-3 text-lg font-semibold text-white transition duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-purple-700" onClick={()=> alert('🚀 APK release is on the way!')}>
              Download App
            </button>
          </div>
        </section>
      </main>

      {/* Back Button */}
      <div className="pb-10 text-center">
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 font-semibold text-purple-700 transition duration-300 bg-white border-2 border-purple-700 shadow-md rounded-xl hover:bg-purple-700 hover:text-white"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Features;