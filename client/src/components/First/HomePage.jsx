import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const schemes = [
  {
    text: "FAME II Subsidy Available - Click to Learn More",
    link: "https://heavyindustries.gov.in/fame-ii"
  },
  {
    text: "Retrofitting Incentives Announced by MoRTH",
    link: "https://morth.nic.in/"
  },
  {
    text: "State EV Policy: 30% Incentive on Conversion",
    link: "https://powermin.gov.in/en/content/electric-vehicle"
  },
  {
    text: "Scrappage Policy Rewards – Check Eligibility",
    link: "https://morth.nic.in/en/vehicle-scrapping-policy-overview"
  }
];

const initiatives = [
  {
    title: "FAME II",
    image: "https://www.theindianiris.com/wp-content/uploads/2021/09/FAME-India-Scheme-1.jpg",
    desc: "Incentives for electric vehicle retrofitting and new EVs under the national policy.",
    link: "https://heavyindustries.gov.in/fame-ii"
  },
  {
    title: "Scrappage Policy",
    image: "https://images.91wheels.com/news/wp-content/uploads/2022/12/scrap1.jpg?width=360&&q=70",
    desc: "2021 policy for removal of old, polluting vehicles with financial benefits.",
    link: "https://morth.nic.in/en/vehicle-scrapping-policy-overview"
  },
  {
    title: "PLI Scheme",
    image: "https://www.constructionworld.in/assets/uploads/a550a88688a1a741e4164581dff158fe.jpg",
    desc: "Production-linked incentives for automotive and component manufacturers.",
    link: "https://mnre.gov.in/en/production-linked-incentive-pli/"
  },
  {
    title: "State EV Schemes",
    image: "https://www.shutterstock.com/shutterstock/photos/612180866/display_1500/stock-vector-four-eco-friendly-busses-poster-of-a-green-electric-buses-with-plug-electric-eco-friendly-612180866.jpg",
    desc: "State-level policies supporting electric vehicle adoption and conversion.",
    link: "https://powermin.gov.in/en/content/electric-vehicle"
  }
];

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login"); // Navigate to login page
  };

  const handleSignup = () => {
    navigate("/signup"); // Navigate to signup page
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("user");
    navigate("/"); // Back to home page
  };

  const isLoggedIn = !!localStorage.getItem("token"); // Check if user is logged in

  return (
    <div className="home-container">
      <header className="header">
        <h2 className="site-name">EngineEx</h2>
        <div className="user-controls">
          {isLoggedIn ? (
            <button 
              className="btn" 
              onClick={handleLogout}
            >
              Sign Out
            </button>
          ) : (
            <>
              <button 
                className="btn" 
                onClick={handleLogin}
              >
                Login
              </button>
              <button 
                className="btn" 
                onClick={handleSignup}
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </header>

      <marquee className="marquee">
        {schemes.map((item, index) => (
          <span key={index} style={{ marginRight: "2rem" }}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.text}
            </a>
          </span>
        ))}
      </marquee>

      <main className="main-content">
        <section className="feature-section">
          <h3>Why Upgrade Your Engine?</h3>
          <p>Old diesel engines emit 10–20x more pollutants than newer models. Upgrading reduces emissions, improves mileage, and qualifies you for subsidies.</p>
        </section>

        <section className="feature-section">
          <h3>How EngineEx Helps</h3>
          <p>We assess your vehicle, recommend upgrade paths, show relevant subsidies, and help you find nearby certified engine shops.</p>
        </section>

        <h3>Government Initiatives</h3>
        <div className="card-grid">
          {initiatives.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer">Know More</a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;