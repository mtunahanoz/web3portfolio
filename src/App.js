import { Route, BrowserRouter as  Router, Routes } from 'react-router-dom';

import Profile from './components/Profile';
import CertificateUpload from './components/UploadCert';
import ProfileDashboard from './components/ProfileDashboard';
import Wallet from './components/SignIn';


// ! ROUTER YÖNETİMİ

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="/uploadcert" element={<CertificateUpload />} />
      <Route path="/profiledashboard" element={<ProfileDashboard />} />
      <Route path="/wallet" element={<Wallet />} />
    </Routes>
    </Router>
  );
}

export default App;
