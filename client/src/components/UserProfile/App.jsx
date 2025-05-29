import React, { useState, useRef, useEffect } from 'react';
import { User, Settings, LogOut, Bell } from 'lucide-react';
import './App.css'; // Assuming you have a CSS file for styles

const App = ({ onLogout, onSettings, onNotifications }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const dropdownRef = useRef(null);

  // Get user data from storage on component mount
  useEffect(() => {
    const getUserData = () => {
      try {
        // First priority: Get user email from login (stored in localStorage)
        const userEmail = localStorage.getItem('userEmail');
        const userName = localStorage.getItem('userName');
        
        if (userEmail) {
          setUser({
            email: userEmail,
            name: userName || userEmail.split('@')[0]
          });
          return;
        }

        // Second priority: Try to get full user object from localStorage
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
          return;
        }

        // Third priority: Try sessionStorage as backup
        const sessionUser = sessionStorage.getItem('user');
        if (sessionUser) {
          const parsedUser = JSON.parse(sessionUser);
          setUser(parsedUser);
          return;
        }

        // Fourth priority: Try to get from sessionStorage individually
        const sessionUserEmail = sessionStorage.getItem('userEmail');
        const sessionUserName = sessionStorage.getItem('userName');
        
        if (sessionUserEmail) {
          setUser({
            email: sessionUserEmail,
            name: sessionUserName || sessionUserEmail.split('@')[0]
          });
          return;
        }

        // If no user data found, leave user as null
        console.log('No user data found in storage');
        
      } catch (error) {
        console.error('Error getting user data:', error);
      }
    };

    getUserData();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Generate avatar from email first letter
  const getAvatarLetter = (email) => {
    return email ? email.charAt(0).toUpperCase() : 'U';
  };

  // Generate consistent color based on email
  const getAvatarColor = (email) => {
    if (!email) return 'avatar-gray';
    
    const colors = [
      'avatar-blue', 'avatar-green', 'avatar-purple', 'avatar-red',
      'avatar-yellow', 'avatar-indigo', 'avatar-pink', 'avatar-teal'
    ];
    
    let hash = 0;
    for (let i = 0; i < email.length; i++) {
      hash = email.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    return colors[Math.abs(hash) % colors.length];
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Clear stored user data
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userEmail');
    sessionStorage.removeItem('userName');
    
    setUser(null);
    if (onLogout) onLogout();
  };

  // Debug: let's see what's in storage (you can remove this later)
  useEffect(() => {
    console.log('=== DEBUG USER DATA ===');
    console.log('localStorage userEmail:', localStorage.getItem('userEmail'));
    console.log('localStorage user:', localStorage.getItem('user'));
    console.log('Current user state:', user);
    console.log('=====================');
  }, [user]);

  // Use actual user data or fallback only if no user is logged in
  const displayUser = user || { 
    email: 'user@example.com', 
    name: 'Guest User' 
  };

  return (
    <div className="header-container">
      {/* Left side - App branding */}
      <div className="header-brand">
        <h1 className="brand-title">EngineEx</h1>
        <span className="brand-subtitle">Clean Engine Solutions</span>
      </div>

      {/* Right side - User profile */}
      <div className="header-actions">
        {/* Notifications */}
        <button
          onClick={onNotifications}
          className="notification-btn"
        >
          <Bell size={20} />
        </button>

        {/* User Profile Dropdown */}
        <div className="profile-dropdown" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="profile-btn"
          >
            {/* Avatar */}
            <div className={`avatar ${getAvatarColor(displayUser?.email)}`}>
              {getAvatarLetter(displayUser?.email)}
            </div>
            
            {/* User Info */}
            <div className="user-info">
              <p className="user-name">
                {displayUser?.name || displayUser?.email?.split('@')[0] || 'User'}
              </p>
              <p className="user-email">
                {displayUser?.email || 'user@example.com'}
              </p>
            </div>

            {/* Dropdown Arrow */}
            <svg
              className={`dropdown-arrow ${isDropdownOpen ? 'rotated' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="dropdown-menu">
              {/* User Info in Mobile */}
              <div className="mobile-user-info">
                <p className="mobile-user-name">
                  {displayUser?.name || displayUser?.email?.split('@')[0] || 'User'}
                </p>
                <p className="mobile-user-email">
                  {displayUser?.email || 'No email available'}
                </p>
              </div>

              {/* Menu Items */}
              <button
                onClick={() => {
                  setIsDropdownOpen(false);
                  // Handle profile view
                }}
                className="menu-item"
              >
                <User size={16} className="menu-icon" />
                View Profile
              </button>

              <button
                onClick={() => {
                  setIsDropdownOpen(false);
                  onSettings && onSettings();
                }}
                className="menu-item"
              >
                <Settings size={16} className="menu-icon" />
                Settings
              </button>

              <hr className="menu-divider" />

              <button
                onClick={() => {
                  setIsDropdownOpen(false);
                  handleLogout();
                }}
                className="menu-item logout"
              >
                <LogOut size={16} className="menu-icon" />
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;