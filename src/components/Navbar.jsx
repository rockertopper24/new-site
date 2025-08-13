import { useEffect, useState } from 'react';
import { watchAuth, loginWithGoogle, logout } from '../services/auth';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar(){
  const [user, setUser] = useState(null);
  useEffect(()=>watchAuth(setUser),[]);

  return (
    <header className="border-b border-white/5 bg-black/30 backdrop-blur sticky top-0 z-50">
      <div className="container-padded py-3 flex items-center gap-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-winBlue" />
          <span className="font-semibold text-lg">New Site</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4">
          <NavLink className="nav-link" to="/news">News</NavLink>
          <NavLink className="nav-link" to="/forums">Forums</NavLink>
          <NavLink className="nav-link" to="/chat">Live Chat</NavLink>
          <NavLink className="nav-link" to="/achievements">Achievements</NavLink>
          {user ? (
            <>
              <NavLink className="nav-link" to="/profile">Profile</NavLink>
              <button className="btn" onClick={logout}>Logout</button>
            </>
          ) : (
            <button className="btn-primary" onClick={loginWithGoogle}>Sign In</button>
          )}
        </nav>
      </div>
    </header>
  );
}