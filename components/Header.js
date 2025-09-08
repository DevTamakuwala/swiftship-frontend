'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getCurrentUser } from '../utils/auth';
import axios from 'axios';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function checkAuth() {
      const user = await getCurrentUser();
      setIsLoggedIn(!!user);
    }
    checkAuth();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(
        'http://localhost:5000/api/auth/logout',
        {},
        { withCredentials: true }
      );
      setIsLoggedIn(false);
      router.push('/login');
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['track', 'quote', 'info', 'contact'];
      let current = '';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = id;
            break;
          }
        }
      }
      if (!current && window.scrollY < 200) {
        current = 'home';
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // run once on load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActivePage = (path) => router.pathname === path;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        {/* Logo */}
        <Link href="/" className="navbar-brand fw-bold text-primary">
          <i className="fas fa-shipping-fast me-2"></i> QUORA CARGO
        </Link>

        {/* Mobile toggle */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 position-relative">
         <li className="nav-item">
          <Link
            href="/"
            className={`nav-link px-3 py-2 ${
              isActivePage('/') || activeSection === 'home' ? 'active-link' : ''
            }`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
        </li>

            <li className="nav-item">
              <a
                href="#track"
                className={`nav-link px-3 py-2 ${
                  activeSection === 'track' ? 'active-link' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                Track
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#quote"
                className={`nav-link px-3 py-2 ${
                  activeSection === 'quote' ? 'active-link' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                Quote
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#info"
                className={`nav-link px-3 py-2 ${
                  activeSection === 'info' ? 'active-link' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                className={`nav-link px-3 py-2 ${
                  activeSection === 'contact' ? 'active-link' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Auth buttons */}
          <div className="d-flex ms-lg-3 gap-2">
            {isLoggedIn ? (
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="btn btn-danger btn-sm"
              >
                <i className="fas fa-sign-out-alt me-1"></i> Logout
              </button>
            ) : (
              <>
                <Link
                  href="/login"
                  className={`btn btn-outline-primary btn-sm ${
                    isActivePage('/login') ? 'active-link' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <i className="fas fa-user me-1"></i> Login
                </Link>
                <Link
                  href="/register"
                  className={`btn btn-primary btn-sm ${
                    isActivePage('/register') ? 'active-link' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <i className="fas fa-user-plus me-1"></i> Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Custom styles */}
      <style jsx>{`
        .active-link {
          color: #ff7a18 !important;
          font-weight: 600;
          position: relative;
        }
        .active-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #ff7a18, #ffb347);
          border-radius: 2px;
          transform: scaleX(1);
          transition: transform 0.3s ease-in-out;
        }
        .nav-link {
          transition: color 0.3s ease;
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #ff7a18, #ffb347);
          border-radius: 2px;
          transform: scaleX(0);
          transition: transform 0.3s ease-in-out;
        }
        .nav-link:hover::after {
          transform: scaleX(1);
        }
        .nav-link:hover {
          color: #ff7a18 !important;
        }
      `}</style>
    </nav>
  );
}
