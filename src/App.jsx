import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLayout from './components/AdminLayout';
import StudentLayout from './components/StudentLayout';
import Dashboard from './pages/Dashboard';
import HostelView from './pages/HostelView';
import LandingPage from './pages/LandingPage';
import StudentHome from './pages/student/StudentHome';
import BookingPage from './pages/student/BookingPage';
import MyBookings from './pages/student/MyBookings';

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="hostel/:id" element={<HostelView />} />
        </Route>

        {/* Student Routes */}
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<StudentHome />} />
          <Route path="book/:id" element={<BookingPage />} />
          <Route path="my-bookings" element={<MyBookings />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
