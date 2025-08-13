import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import Forums from './pages/Forums';
import Chat from './pages/Chat';
import Profile from './pages/Profile';
import Achievements from './pages/Achievements';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App(){
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container-padded py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/forums" element={<Forums />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="*" element={<div className='card p-6'>Not found</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}