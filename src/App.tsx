import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import Footer from './components/Footer';
import Login from './components/Login';
import Courses from './pages/Courses';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import Community from './pages/Community';
import Resources from './pages/Resources';
import StudyRooms from './pages/StudyRooms';
import Quizzes from './pages/Quizzes';
import CareerGuidance from './pages/CareerGuidance';
import CompetitiveExams from './pages/CompetitiveExams';
import Dashboard from './pages/Dashboard';
import CourseDetails from './pages/CourseDetails';
import AIFeatures from './components/AIFeatures';
import WellnessComponent from './components/WellnessComponent';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-[#0f172a] relative">
          <ParticleBackground />
          <Navbar />
          <div className="pt-16 relative z-10 flex-1">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/about" element={<About />} />
              <Route path="/features" element={<Features />} />
              <Route path="/community" element={<Community />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/study-rooms" element={<StudyRooms />} />
              <Route path="/quizzes" element={<Quizzes />} />
              <Route path="/career-guidance" element={<CareerGuidance />} />
              <Route path="/competitive-exams" element={<CompetitiveExams />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/course-details/:courseId" element={<CourseDetails />} />
              <Route path="/ai-features" element={<AIFeatures />} />
              <Route path="/wellness" element={<WellnessComponent />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App; 