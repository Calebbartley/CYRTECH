import React from 'react';
import '../home/HomePage.css';


const HomePage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to CYRTECH</h1>
        <p>We build innovative tech solutions that drive the future of WEB 3</p>
        <button>Contact Us</button>
      </header>
      <section className="Features">
        <div className="Feature">
          <i className="fas fa-laptop"></i>
          <h2>Web3 Technology</h2>
          <p>Stay ahead of the curve with decentralized technology</p>
        </div>
        <div className="Feature">
          <i className="fas fa-cogs"></i>
          <h2>Customizable Products</h2>
          <p>Our products are tailored to fit your specific needs.</p>
        </div>
        <div className="Feature">
          <i className="fas fa-users"></i>
          <h2>User Friendly</h2>
          <p>Intuitive interfaces for seamless user experiences.</p>
        </div>
      </section>
      <footer className="App-footer">
        <p>&copy; {new Date().getFullYear()} Tech Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
