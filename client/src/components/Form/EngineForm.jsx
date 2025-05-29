// import React, { useState, useEffect } from 'react';
// import { useNavigate } from "react-router-dom";
// import App from '../UserProfile/App';
// import { Link } from 'react-router-dom';
// import ServiceCenterWebpage from '../Service/ServiceCenterWebpage';
//  // Import your existing user profile component
// import "./App.css";

// const EngineForm = () => {
//   const userId = '6657bdcce7c1a5f167177f1a'; // Replace with actual logic if needed

//   const [formData, setFormData] = useState({
//     EngineNumber: '',
//     Displacement: '',
//     Power_Output: '',
//     Emmision_Norm: '',
//     FuelType: '',
//     userId
//   });

//   const [result, setResult] = useState([]);
//   const [profile, setProfile] = useState(null);
//   const navigate = useNavigate();

//   // Fetch user profile on component mount
//   useEffect(() => {
//     fetchUserProfileFromMongoDB();
//   }, [userId]);

//   const fetchUserProfileFromMongoDB = async () => {
//     try {
//       const response = await fetch(`http://localhost:8080/api/profile/${userId}`);
      
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
      
//       const data = await response.json();
//       console.log("Profile fetched from MongoDB:", data);
      
//       // Set the profile state for local use
//       setProfile(data);
      
//       // Prepare user data for the profile component
//       const userData = {
//         email: data.email || 'user@example.com',
//         name: data.name || data.firstName || 'User',
//         firstName: data.firstName,
//         lastName: data.lastName,
//         _id: data._id || data.userId,
//         engineInputs: data.engineInputs || []
//       };
      
//       // Store in both localStorage and sessionStorage for the profile component
//       localStorage.setItem('user', JSON.stringify(userData));
//       localStorage.setItem('userEmail', userData.email);
//       localStorage.setItem('userName', userData.name);
      
//       // Also store in sessionStorage as backup
//       sessionStorage.setItem('user', JSON.stringify(userData));
//       sessionStorage.setItem('userEmail', userData.email);
//       sessionStorage.setItem('userName', userData.name);
      
//     } catch (error) {
//       console.error('Error fetching user profile from MongoDB:', error);
      
//       // Set fallback data if API fails
//       const fallbackUser = {
//         email: 'user@example.com',
//         name: 'User',
//         _id: userId
//       };
      
//       localStorage.setItem('user', JSON.stringify(fallbackUser));
//       localStorage.setItem('userEmail', fallbackUser.email);
//       localStorage.setItem('userName', fallbackUser.name);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:8080/api/engine-info', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData)
//       });

//       const data = await response.json();
//       setResult(data.result);

//       // Refetch profile from MongoDB to update the engine entries list
//       await fetchUserProfileFromMongoDB();

//       // Reset form after successful submission
//       setFormData({
//         EngineNumber: '',
//         Displacement: '',
//         Power_Output: '',
//         Emmision_Norm: '',
//         FuelType: '',
//         userId
//       });

//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const handleLogout = () => {
//     // Clear all stored data
//     localStorage.clear();
//     sessionStorage.clear();
//     navigate("/");
//   };

//   const handleSettings = () => {
//     console.log("Settings clicked");
//     // Add your settings logic here
//   };

//   const handleNotifications = () => {
//     console.log("Notifications clicked");
//     // Add your notifications logic here
//   };

//   return (
//     <div className="dashboard-layout">
//       {/* Your existing user profile header component */}
//       <App 
//         onLogout={handleLogout}
//         onSettings={handleSettings}
//         onNotifications={handleNotifications}
//       />

//       {/* Main form content */}
//       <div className="form-container">
//         <div className="form-content">
//           <h1>Enter Engine Details</h1>

//           <form onSubmit={handleSubmit} className="engine-form">
//             {['EngineNumber', 'Displacement', 'Power_Output', 'Emmision_Norm', 'FuelType'].map((field) => (
//               <div key={field} className="form-group">
//                 <label>
//                   {field.replace('_', ' ')}:
//                   <input
//                     type="text"
//                     name={field}
//                     value={formData[field]}
//                     onChange={handleChange}
//                     required
//                   />
//                 </label>
//               </div>
//             ))}
//             <button type="submit" className="submit-btn-check">Check</button>
//             <br></br>
//             <Link to="/service-center">
//               <button className="submit-btn-gov">Proceed to Government Schemes</button>
//             </Link>
            
//           </form>

//           {/* Results Display */}
//           {Array.isArray(result) && result.length > 0 && (
//             <div className="results-section">
//               <h2>Results:</h2>
//               <div className="results-container">
//                 {result.map((item, idx) => (
//                   <div key={idx} className="result-item">
//                     {item.message ? (
//                       <div className="error-message">
//                         <strong>{item.message}</strong>
//                       </div>
//                     ) : (
//                       <div className="engine-info">
//                         <h3>Engine Information</h3>
//                         <div className="info-grid">
//                           <p><strong>Engine Number:</strong> {item.EngineNumber}</p>
//                           <p><strong>Emission Norm:</strong> {item.EmissionNorm}</p>
//                           <p><strong>Power Output:</strong> {item.Power_Output}</p>
//                           <p><strong>Fuel Type:</strong> {item.FuelType}</p>
//                           <p><strong>Approximate Cost:</strong> {item.ApproximateCost}</p>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
              
//             </div>
//           )}

//           {/* Optional: Display user's engine history */}
//           {profile && profile.engineInputs && profile.engineInputs.length > 0 && (
//             <div className="history-section">
//               <h2>Your Recent Engine Searches</h2>
//               <div className="history-grid">
//                 {profile.engineInputs.slice(-5).map((entry, index) => (
//                   <div key={index} className="history-item">
//                     <span className="engine-number">{entry.EngineNumber}</span>
//                     <span className="engine-details">{entry.Power_Output} - {entry.FuelType}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EngineForm;


import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import App from '../UserProfile/App';
import { Link } from 'react-router-dom';
import ServiceCenterWebpage from '../Service/ServiceCenterWebpage';
import "./App.css";

const EngineForm = () => {
  const userId = '6657bdcce7c1a5f167177f1a'; // Replace with actual logic if needed

  const [formData, setFormData] = useState({
    EngineNumber: '',
    Displacement: '',
    Power_Output: '',
    Emmision_Norm: '',
    FuelType: '',
    userId
  });

  const [result, setResult] = useState([]);
  const [profile, setProfile] = useState(null);
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();

  // Fetch user profile and email on component mount
  useEffect(() => {
    console.log('=== EngineForm DEBUG ===');
    console.log('localStorage userEmail on mount:', localStorage.getItem('userEmail'));
    console.log('All localStorage keys:', Object.keys(localStorage));
    console.log('========================');
    
    // Get email from localStorage (stored during login)
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setUserEmail(storedEmail);
      console.log('Set userEmail state to:', storedEmail);
    } else {
      console.log('No userEmail found in localStorage');
    }
    
    // Only fetch profile if we have a user email from login
    if (storedEmail) {
      fetchUserProfileFromMongoDB();
    } else {
      console.log('Skipping profile fetch - no logged in user');
    }
  }, [userId]);

  const fetchUserProfileFromMongoDB = async () => {
    try {
      // Get the logged-in user's email from localStorage (DON'T overwrite this!)
      const loggedInEmail = localStorage.getItem('userEmail');
      
      // Only fetch profile if we have a logged-in email, otherwise skip API call
      if (!loggedInEmail) {
        console.log('No logged-in email found, skipping profile fetch');
        return;
      }
      
      const response = await fetch(`http://localhost:8080/api/profile/${userId}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log("Profile fetched from MongoDB:", data);
      
      // Set the profile state for local use
      setProfile(data);
      
      // Prepare user data for the profile component, ALWAYS prioritizing the logged-in email
      const userData = {
        email: loggedInEmail, // Always use the login email, never overwrite it
        name: data.name || data.firstName || loggedInEmail.split('@')[0],
        firstName: data.firstName,
        lastName: data.lastName,
        _id: data._id || data.userId,
        engineInputs: data.engineInputs || []
      };
      
      // Update localStorage with the profile data but KEEP the original email
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('userName', userData.name);
      // DON'T update userEmail here - it should remain from login
      
      // Also store in sessionStorage as backup
      sessionStorage.setItem('user', JSON.stringify(userData));
      sessionStorage.setItem('userName', userData.name);
      // DON'T update userEmail here - it should remain from login
      
    } catch (error) {
      console.error('Error fetching user profile from MongoDB:', error);
      
      // Get the logged-in email even if API fails
      const loggedInEmail = localStorage.getItem('userEmail');
      
      // Only set fallback if we actually have a logged-in email
      if (loggedInEmail) {
        const fallbackUser = {
          email: loggedInEmail, // Use the actual logged-in email
          name: loggedInEmail.split('@')[0], // Generate name from email
          _id: userId
        };
        
        localStorage.setItem('user', JSON.stringify(fallbackUser));
        localStorage.setItem('userName', fallbackUser.name);
        // DON'T overwrite userEmail - it should remain from login
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/engine-info', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      setResult(data.result);

      // Refetch profile from MongoDB to update the engine entries list
      await fetchUserProfileFromMongoDB();

      // Reset form after successful submission
      setFormData({
        EngineNumber: '',
        Displacement: '',
        Power_Output: '',
        Emmision_Norm: '',
        FuelType: '',
        userId
      });

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleLogout = () => {
    // Clear all stored data
    localStorage.clear();
    sessionStorage.clear();
    navigate("/");
  };

  const handleSettings = () => {
    console.log("Settings clicked");
    // Add your settings logic here
  };

  const handleNotifications = () => {
    console.log("Notifications clicked");
    // Add your notifications logic here
  };

  return (
    <div className="dashboard-layout">
      {/* Your existing user profile header component */}
      <App 
        onLogout={handleLogout}
        onSettings={handleSettings}
        onNotifications={handleNotifications}
        userEmail={userEmail} // Pass the email as a prop if needed
      />

      {/* Main form content */}
      <div className="form-container">
        <div className="form-content">
          <h1>Enter Engine Details</h1>
          
          {/* Display logged-in user email */}
          {userEmail && (
            <div className="user-info">
              <p><strong>Logged in as:</strong> {userEmail}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="engine-form">
            {['EngineNumber', 'Displacement', 'Power_Output', 'Emmision_Norm', 'FuelType'].map((field) => (
              <div key={field} className="form-group">
                <label>
                  {field.replace('_', ' ')}:
                  <input
                    type="text"
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
            ))}
            <button type="submit" className="submit-btn-check">Check</button>
            <br></br>
            <Link to="/service-center">
              <button className="submit-btn-gov">Proceed to Government Schemes</button>
            </Link>
          </form>

          {/* Results Display */}
          {Array.isArray(result) && result.length > 0 && (
            <div className="results-section">
              <h2>Results:</h2>
              <div className="results-container">
                {result.map((item, idx) => (
                  <div key={idx} className="result-item">
                    {item.message ? (
                      <div className="error-message">
                        <strong>{item.message}</strong>
                      </div>
                    ) : (
                      <div className="engine-info">
                        <h3>Engine Information</h3>
                        <div className="info-grid">
                          <p><strong>Engine Number:</strong> {item.EngineNumber}</p>
                          <p><strong>Emission Norm:</strong> {item.EmissionNorm}</p>
                          <p><strong>Power Output:</strong> {item.Power_Output}</p>
                          <p><strong>Fuel Type:</strong> {item.FuelType}</p>
                          <p><strong>Approximate Cost:</strong> {item.ApproximateCost}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Optional: Display user's engine history */}
          {profile && profile.engineInputs && profile.engineInputs.length > 0 && (
            <div className="history-section">
              <h2>Your Recent Engine Searches</h2>
              <div className="history-grid">
                {profile.engineInputs.slice(-5).map((entry, index) => (
                  <div key={index} className="history-item">
                    <span className="engine-number">{entry.EngineNumber}</span>
                    <span className="engine-details">{entry.Power_Output} - {entry.FuelType}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EngineForm;