import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const userLoggedIn = localStorage.getItem('loggedIn') === 'true';
    const user = JSON.parse(localStorage.getItem('user'));
    setLoggedIn(userLoggedIn);
    setUserRole(user?.role || null);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdown = document.querySelector('.profile-dropdown');
      if (dropdown && !dropdown.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setLoggedIn(false);
    navigate('/login');
  };

  const navLinks = {
    ROLE_ADMIN: [
      { name: 'Dashboard', path: '/dashboard', icon: 'fa-chart-line' },
      { name: 'Manage Events', path: '/manage-events', icon: 'fa-calendar-alt' },
      { name: 'Users', path: '/manage-users', icon: 'fa-users' },
      { name: 'Reports', path: '/reports', icon: 'fa-file-alt' },
    ],
    ROLE_USER: [
      { name: 'Home', path: '/home', icon: 'fa-home' },
      { name: 'Resources', path: '/resources', icon: 'fa-book' },
      { name: 'Community', path: '/community', icon: 'fa-user-friends' },
      { name: 'About', path: '/about', icon: 'fa-info-circle' },
      { name: 'Contact', path: '/contact', icon: 'fa-envelope' },
    ],
    // ... other role links remain the same
  };

  const profileDropdownOptions = [
    { name: 'My Profile', path: '/profile', icon: 'fa-user' },
    { name: 'Settings', path: '/settings', icon: 'fa-cog' },
    { name: 'Logout', action: handleLogout, icon: 'fa-sign-out-alt' },
  ];

  const links = navLinks[userRole] || [];

  return (
    <header className="navbar">
      <div className="navbar-brand">
        <img
          src={process.env.PUBLIC_URL + '/images/farmpulse.png'}
          alt="FarmPulse Logo"
          className="navbar-logo"
        />
        <h1 className="navbar-name">FarmPulse</h1>
      </div>

      {loggedIn ? (
        <nav className={`navbar-nav ${isMobile ? 'mobile-nav' : ''}`}>
          {isMobile && (
            <button
              className="mobile-menu-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
          )}
          {(isMenuOpen || !isMobile) && (
            <ul>
              {links.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>
                    <i className={`fas ${link.icon}`}></i>
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="profile-dropdown">
                <button
                  onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                  className="profile-button"
                >
                  <i className="fas fa-user-circle profile-icon"></i>
                  Profile
                </button>
                {isProfileDropdownOpen && (
                  <ul className="dropdown-menu">
                    {profileDropdownOptions.map((option, index) => (
                      <li key={index}>
                        {option.action ? (
                          <button onClick={option.action}>
                            <i className={`fas ${option.icon}`}></i>
                            {option.name}
                          </button>
                        ) : (
                          <Link to={option.path}>
                            <i className={`fas ${option.icon}`}></i>
                            {option.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          )}
        </nav>
      ) : (
        <div className="navbar-buttons">
          <Link to="/signup">
            <button className="login-signup">Login/Signup</button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;