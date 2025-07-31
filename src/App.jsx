import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboard from './pages/AdminDashboard';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLoginPage />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}
