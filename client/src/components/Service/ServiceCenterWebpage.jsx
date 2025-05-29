import React, { useState, useEffect } from 'react';

const ServiceCenterWebpage = () => {
  const [selectedScheme, setSelectedScheme] = useState(null);

  const schemes = [
    { id: 1, name: "FAME II Subsidy Available", description: "Comprehensive basic maintenance package", link: "https://heavyindustries.gov.in/fame-ii" },
    { id: 2, name: "Retrofitting Incentives Announced by MoRTH", description: "Extended warranty and premium services", link: "https://morth.nic.in/" },
    { id: 3, name: "State EV Policy: 30% Incentive on Conversion", description: "24/7 emergency breakdown support", link: "https://powermin.gov.in/en/content/electric-vehicle" }
  ];

  const exchangeMethods = [
    {
      id: 1,
      name: "Engine Number : BharatBenz 4D34i CRDI",
      description: " Displacement =9.3 l, Power_Output =170 hp , Emmision_Norm =BS-VI ,FuelType =Diesel",
      icon: "🔧",
      features: ["Quality Assurance", "7-Day Processing", "Warranty Included"]
    },
    {
      id: 2,
      name: "Engine Name: Mercedes-Benz OM 457",
      description: "Displacement = 12L,Emmision_Norm = BS-VI ,FuelType = Diesel",
      icon: "⚡",
      features: ["48-Hour Service", "Priority Handling", "Premium Support"]
    }
  ];

  const shops = [
    {
      id: 1,
      name: "Motionounty Repairow",
      location: "Banglore",
      phone: "8140385672",
      rating: 4.8,
      speciality: "Engine Specialists",
      locationFile: "motionounty_location.html"
    },
    {
      id: 2,
      name: "KML DIESEL AUTOWORKS",
      location: "Opp Redbridge",
      phone: "9606302762",
      rating: 4.9,
      speciality: "Quick Service",
      locationFile: "kml_location.html"
    },
    {
      id: 3,
      name: "Scania Service center",
      location: "Sheshagirihallim",
      phone: "7760032306",
      rating: 4.7,
      speciality: "Premium Care",
      locationFile: "scania_location.html"
    }
  ];

  const handleSchemeClick = (scheme) => {
    setSelectedScheme(scheme);
    window.location.href = scheme.link;
  };

  const handleBookNow = (shop) => {
    alert(`Booking appointment at ${shop.name} is successful`);
  };

  const handleLocationClick = (shop) => {
    // Create location HTML content dynamically with real Google Maps
    let locationHTML = '';
    
    if (shop.id === 1) {
      // Motionounty Repairow location
      locationHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${shop.name} - Location</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; }
                .container { max-width: 900px; margin: 0 auto; background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
                h1 { color: #333; text-align: center; margin-bottom: 30px; }
                .info { margin: 20px 0; }
                .info h3 { color: #ff6f00; margin-bottom: 10px; }
                .info p { margin-bottom: 15px; line-height: 1.6; }
                .map-container { width: 100%; margin-top: 30px; text-align: center; }
                .map-container iframe { border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>📍 ${shop.name}</h1>
                <div class="info">
                    <h3>📍 Address:</h3>
                    <p>Motionounty Repairow Service Center<br>Bangalore, Karnataka, India</p>
                    
                    <h3>📞 Contact:</h3>
                    <p>${shop.phone}</p>
                    
                    <h3>🕒 Working Hours:</h3>
                    <p>Monday - Saturday: 9:00 AM - 7:00 PM<br>Sunday: 10:00 AM - 5:00 PM</p>
                    
                    <h3>🛠️ Speciality:</h3>
                    <p>${shop.speciality}</p>
                    
                    <h3>⭐ Rating:</h3>
                    <p>${shop.rating}/5.0</p>
                </div>
                
                <div class="map-container">
                    <h3 style="color: #ff6f00; margin-bottom: 15px;">🗺️ Google Maps Location</h3>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124445.65967446021!2d77.64462390362534!3d12.91242202181481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11ccead319db%3A0xd0dca602f97ba5fa!2sMotionounty%20Repairow!5e0!3m2!1sen!2sin!4v1748454936594!5m2!1sen!2sin" width="100%" height="450" style="border:0; max-width: 800px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </body>
        </html>
      `;
    } else if (shop.id === 2) {
      // KML DIESEL AUTOWORKS location
      locationHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${shop.name} - Location</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; }
                .container { max-width: 900px; margin: 0 auto; background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
                h1 { color: #333; text-align: center; margin-bottom: 30px; }
                .info { margin: 20px 0; }
                .info h3 { color: #ff6f00; margin-bottom: 10px; }
                .info p { margin-bottom: 15px; line-height: 1.6; }
                .map-container { width: 100%; margin-top: 30px; text-align: center; }
                .map-container iframe { border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>📍 ${shop.name}</h1>
                <div class="info">
                    <h3>📍 Address:</h3>
                    <p>KML DIESEL AUTOWORKS<br>Opposite Redbridge Complex<br>Bangalore, Karnataka, India</p>
                    
                    <h3>📞 Contact:</h3>
                    <p>${shop.phone}</p>
                    
                    <h3>🕒 Working Hours:</h3>
                    <p>Monday - Friday: 8:30 AM - 6:30 PM<br>Saturday: 9:00 AM - 5:00 PM<br>Sunday: Closed</p>
                    
                    <h3>🛠️ Speciality:</h3>
                    <p>${shop.speciality}</p>
                    
                    <h3>⭐ Rating:</h3>
                    <p>${shop.rating}/5.0</p>
                </div>
                
                <div class="map-container">
                    <h3 style="color: #ff6f00; margin-bottom: 15px;">🗺️ Google Maps Location</h3>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.5191875766304!2d77.62625797591528!3d12.809691418405613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b99fd6c8593%3A0xb5f095ef24cceebc!2sKML%20DIESEL%20AUTOWORKS!5e0!3m2!1sen!2sin!4v1748455015336!5m2!1sen!2sin" width="100%" height="450" style="border:0; max-width: 800px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </body>
        </html>
      `;
    } else if (shop.id === 3) {
      // Scania Service center location
      locationHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${shop.name} - Location</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; }
                .container { max-width: 900px; margin: 0 auto; background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
                h1 { color: #333; text-align: center; margin-bottom: 30px; }
                .info { margin: 20px 0; }
                .info h3 { color: #ff6f00; margin-bottom: 10px; }
                .info p { margin-bottom: 15px; line-height: 1.6; }
                .map-container { width: 100%; margin-top: 30px; text-align: center; }
                .map-container iframe { border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>📍 ${shop.name}</h1>
                <div class="info">
                    <h3>📍 Address:</h3>
                    <p>Scania Service Center<br>Sheshagirihalli Area<br>Bangalore, Karnataka, India</p>
                    
                    <h3>📞 Contact:</h3>
                    <p>${shop.phone}</p>
                    
                    <h3>🕒 Working Hours:</h3>
                    <p>Monday - Saturday: 9:00 AM - 6:00 PM<br>Sunday: 10:00 AM - 4:00 PM</p>
                    
                    <h3>🛠️ Speciality:</h3>
                    <p>${shop.speciality}</p>
                    
                    <h3>⭐ Rating:</h3>
                    <p>${shop.rating}/5.0</p>
                </div>
                
                <div class="map-container">
                    <h3 style="color: #ff6f00; margin-bottom: 15px;">🗺️ Google Maps Location</h3>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.975429903805!2d77.41869827591563!3d12.844863417642514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae47a1d2d97661%3A0x9cbe2de7669a8d9c!2sScania%20Service%20Center!5e0!3m2!1sen!2sin!4v1748455074507!5m2!1sen!2sin" width="100%" height="450" style="border:0; max-width: 800px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </body>
        </html>
      `;
    }

    // Open location in new window
    const newWindow = window.open('', '_blank');
    newWindow.document.write(locationHTML);
    newWindow.document.close();
  };

  return (
    <div className="page">
      <style>{`
       .page {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  background-color: #eceff1;
  padding: 20px;
  color: white;
  margin: 0;
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  overflow-x: hidden;
}

header {
  background: #ffffff;
  padding: 10px 20px;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #e9ecef;
  color: white;
}

h1, h2, h3, h4 {
  color: white;
}

.nav a {
  margin-right: 20px;
  color: white;
  text-decoration: none;
  font-weight: 500;
}

.nav a:hover {
  color: #ffab00;
}

.section {
  margin: 40px 0;
}

.card {
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  color: white;
  background-color: #263238;
  
}

.button {
  background: #ff6f00;
  color: white;
  border: none;
  padding: 0.6em 1.2em;
  margin-top: 10px;
  margin-right: 10px;
  border-radius: 6px;
  font-size: 1em;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s;
}

.button:hover {
  background: #e65100;
  transform: scale(1.05);
}

.button:focus,
.button:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(255, 111, 0, 0.1);
}

.location-button {
  background: #2196F3;
  color: white;
  border: none;
  padding: 0.6em 1.2em;
  margin-top: 10px;
  border-radius: 6px;
  font-size: 1em;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s;
}

.location-button:hover {
  background: #1976D2;
  transform: scale(1.05);
}

.button-group {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
}

.shop-card {
  border: 1px solid #e9ecef;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 20px;
  background: #263238;
  color: white;
}

.section{
  color:#e9ecef
}

.footer {
  background: #ffffff;
  color: white;
  padding: 20px;
  text-align: center;
  margin-top: 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #263238;
}

.footer a {
  color: white;
  margin: 0 10px;
  text-decoration: none;
}

.footer a:hover {
  color: #ffab00;
}

@media (prefers-color-scheme: dark) {
  .page {
    background-color: #263238;
    color: white;
  }
  header {
    background: #37474f;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    border-bottom: 1px solid #546e7a;
    color: white;
  }
  h1, h2, h3, h4 {
    color: white;
  }
  .nav a {
    color: white;
  }
  .nav a:hover {
    color: #ffab00;
  }
  .card,
  .shop-card {
    background: #37474f;
    border: 1px solid #546e7a;
    color: white;
  }
  .button {
    background-color: #ff6f00;
    color: white;
  }
  .button:hover {
    background-color: #e65100;
  }
  .location-button {
    background-color: #2196F3;
    color: white;
  }
  .location-button:hover {
    background-color: #1976D2;
  }
  .footer {
    background: #37474f;
    color: white;
  }
  .footer a {
    color: white;
  }
  .footer a:hover {
    color: #ffab00;
  }
}
      `}</style>

      <header>
        <h1>ENGINE-EX</h1>
        <nav className="nav">
          <a href="#schemes">Schemes</a>
          <a href="#exchange">Exchange</a>
          <a href="#shops">Shops</a>
        </nav>
      </header>

      <main>
        <section className="section">
          <h2>Government Schemes </h2>
          <p>Explore range of schemes from government of for financial assistance</p>
        </section>

        <section id="schemes" className="section">
          <h3>Service Schemes</h3>
          {schemes.map((scheme) => (
            <div key={scheme.id} className="card">
              <h4>{scheme.name}</h4>
              <p>{scheme.description}</p>
              <button className="button" onClick={() => handleSchemeClick(scheme)}>Explore →</button>
            </div>
          ))}
        </section>

        <section id="exchange" className="section">
          <h3>Engine Exchange</h3>
          {exchangeMethods.map((method) => (
            <div key={method.id} className="card">
              <h4>{method.icon} {method.name}</h4>
              <p>{method.description}</p>
              <ul>
                {method.features.map((f, i) => (
                  <li key={i}>- {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section id="shops" className="section">
          <h3>Authorized Service Centers</h3>
          {shops.map((shop) => (
            <div key={shop.id} className="shop-card">
              <h4>{shop.name} ⭐ {shop.rating}</h4>
              <p>📍 {shop.location}</p>
              <p>📞 {shop.phone}</p>
              <p><strong>{shop.speciality}</strong></p>
              <div className="button-group">
                <button className="button" onClick={() => handleBookNow(shop)}>Book Now →</button>
                <button className="location-button" onClick={() => handleLocationClick(shop)}>📍 Location</button>
              </div>
            </div>
          ))}
        </section>
      </main>

      <footer className="footer">
        <h4>ServiceHub Pro</h4>
        <p>Your trusted partner for automotive excellence</p>
        <div>
          <a href="#">Privacy Policy</a> | 
          <a href="#">Terms of Service</a> | 
          <a href="#">Contact Us</a>
        </div>
        <p>© 2024 ServiceHub Pro. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ServiceCenterWebpage;