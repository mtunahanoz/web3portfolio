import React, { useState } from 'react';
import { FaHome, FaUser, FaCog, FaCertificate, FaSignOutAlt, FaUserGraduate } from 'react-icons/fa';
import CertificateUpload from './UploadCert';
import { RiUserStarFill } from "react-icons/ri";
import AddExperience from './AddExperience';
import AddEducation from './AddEducation';
import AddProfile from './AddProfile';

const ProfileDashboard = () => {
  const [activeSection, setActiveSection] = useState('addExperience');

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-600 text-white flex flex-col fixed h-full">
        <div className="p-6 bg-blue-800">
          <img
            src="https://cdn-icons-png.flaticon.com/512/10337/10337609.png"
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
          />
      {/*     <h2 className="text-center text-2xl font-semibold">Tunahan Öz</h2>
          <p className="text-center text-sm text-blue-200">Exacate CEO</p> */}
        </div>
        <nav className="flex-grow p-6">
          <ul>
            <li
              className={`mb-3 p-2 rounded-lg cursor-pointer flex items-center space-x-4 ${
                activeSection === 'profile' ? 'bg-blue-700' : 'hover:bg-blue-500'
              }`}
              onClick={() => setActiveSection('profile')}
            >
              <FaUser />
              <span>Profile</span>
            </li>
          
            <li
              className={`mb-3 p-2 rounded-lg cursor-pointer flex items-center space-x-4 ${
                activeSection === 'experience' ? 'bg-blue-700' : 'hover:bg-blue-500'
              }`}
              onClick={() => setActiveSection('experience')}
            >
              <RiUserStarFill />
              <span>Experience</span>
            </li>
            <li
              className={`mb-3 p-2 rounded-lg cursor-pointer flex items-center space-x-4 ${
                activeSection === 'education' ? 'bg-blue-700' : 'hover:bg-blue-500'
              }`}
              onClick={() => setActiveSection('education')}
            >
              <FaUserGraduate />
              <span>Education</span>
            </li>
            <li
              className={`mb-3 p-2 rounded-lg cursor-pointer flex items-center space-x-4 ${
                activeSection === 'certificates' ? 'bg-blue-700' : 'hover:bg-blue-500'
              }`}
              onClick={() => setActiveSection('certificates')}
            >
              <FaCertificate />
              <span>Certificates</span>
            </li>


          </ul>
        </nav>
        <div className="p-6 bg-blue-800">
          <button className="w-full py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-900 flex items-center justify-center space-x-2">
            <FaSignOutAlt />
            <span>Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6 ml-64">
     
        {activeSection === 'profile' && (
         <AddProfile></AddProfile>
        )}
        {activeSection === 'settings' && (
          <section>
            <h1 className="text-3xl font-semibold mb-4">Settings</h1>
            <p>This is the settings section where user preferences can be changed.</p>
          </section>
        )}
        {activeSection === 'experience' && (
          <AddExperience />
        )}
        {activeSection === 'education' && (
          <AddEducation />
        )}
        {activeSection === 'certificates' && (
          <CertificateUpload />
        )}
      </main>
    </div>
  );
};

export default ProfileDashboard;
