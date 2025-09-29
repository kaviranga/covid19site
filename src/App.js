import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('Home');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Home':
        return <div><h2>Welcome to Our Website</h2><p>This is the Home tab.</p></div>;
      case 'About':
        return <div><h2>About Us</h2><p>We are a team of developers building cool stuff.</p></div>;
      case 'Services':
        return <div><h2>Our Services</h2><p>We offer web and mobile app development.</p></div>;
      case 'Contact':
        return <div><h2>Contact Us</h2><p>Email us at info@example.com.</p></div>;
      default:
        return null;
    }
  };

  return (
    <div className="app">
      {/* Title Section */}
      <header className="title-section">
        <h1 align="center">
        <a 
          href="https://shiny-lollipop-95ae25.netlify.app/" 
          target="_blank" 
          rel="noopener noreferrer"
        >

          {/* SVG Icon */}
          <svg 
            width="24" 
            height="24" 
            viewBox="60 10 10 25" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="title-icon"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M67.4573 31.2161H64.3318L64.0713 30.9569V13.3378L64.3318 13.0786H67.4573L67.7178 13.3378V30.9569L67.4573 31.2161Z" fill="white" />
          </svg>

          My Awesome Landing Page
        </a>
        </h1>
        <p>Your one-stop solution for web apps</p>
      </header>

      {/* Tabs Navigation */}
      <nav className="tab-nav">
        {['Home', 'About', 'Services', 'Contact'].map(tab => (
          <button
            key={tab}
            className={activeTab === tab ? 'active' : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>
      <div className="tab-content">
        {renderTabContent()}
      </div>
    </div>
  );
}

export default App;
