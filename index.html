import React, { useState, useEffect } from 'react';

// Main App component that orchestrates the entire application
const App = () => {
  // State to manage the current active page, initialized to 'home'
  const [currentPage, setCurrentPage] = useState('home');
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Effect to handle navigation and scroll to top when page changes
  useEffect(() => {
    // Scroll to the top of the window whenever the currentPage state changes
    window.scrollTo(0, 0);
    // Close the mobile menu if it's open when a new page is navigated to
    setIsMobileMenuOpen(false);
  }, [currentPage]);

  // Function to render the correct component based on the currentPage state
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'education':
        return <Education />;
      case 'projects':
        return <Projects />;
      case 'resources':
        return <Resources />;
      default:
        // Default to Home page if an unknown page is requested
        return <Home />;
    }
  };

  return (
    // Main container for the application with styling for the overall look
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-['Fira Code'] antialiased">
      {/* Custom style for scrollbar - this is global for the body, but included here for completeness */}
      <style>{`
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #0d1117;
        }
        ::-webkit-scrollbar-thumb {
          background: #34d399;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #10b981;
        }
        /* Style for the active navigation link with a neon green glow */
        .nav-link.active {
          color: #34d399; /* Emerald-400 for a bright green */
          text-shadow: 0 0 5px #34d399;
        }
      `}</style>

      {/* Header component with navigation links */}
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* Main content area where different pages are rendered */}
      <main className="container mx-auto px-6 py-12">
        {renderPage()} {/* Call the function to display the current page component */}
      </main>

      {/* Footer component */}
      <Footer />
    </div>
  );
};

// Header component responsible for navigation and mobile menu
const Header = ({ currentPage, setCurrentPage, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  // Function to handle navigation link clicks
  const handleNavLinkClick = (pageId) => {
    setCurrentPage(pageId); // Update the current page state
    setIsMobileMenuOpen(false); // Close the mobile menu on navigation
  };

  return (
    // Header container with sticky positioning and styling
    <header className="bg-gray-900/70 backdrop-blur-md shadow-lg sticky top-0 z-50 transition-all duration-300 border-b border-gray-700/50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Your Name/Logo - navigates to home page */}
        <a
          href="#"
          onClick={() => handleNavLinkClick('home')}
          className="text-xl font-bold text-white hover:text-emerald-400 transition-colors"
        >
          Matthew T. Valdez
        </a>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <div className="md:hidden">
          <button
            id="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Toggle mobile menu visibility
            className="text-gray-300 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <ul id="desktop-menu" className="hidden md:flex items-center space-x-8 font-medium">
          <li>
            <a
              href="#"
              onClick={() => handleNavLinkClick('about')}
              className={`nav-link text-gray-400 hover:text-emerald-400 transition-colors duration-300 ${
                currentPage === 'about' ? 'active' : ''
              }`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleNavLinkClick('education')}
              className={`nav-link text-gray-400 hover:text-emerald-400 transition-colors duration-300 ${
                currentPage === 'education' ? 'active' : ''
              }`}
            >
              Credentials
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleNavLinkClick('projects')}
              className={`nav-link text-gray-400 hover:text-emerald-400 transition-colors duration-300 ${
                currentPage === 'projects' ? 'active' : ''
              }`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleNavLinkClick('resources')}
              className={`nav-link text-gray-400 hover:text-emerald-400 transition-colors duration-300 ${
                currentPage === 'resources' ? 'active' : ''
              }`}
            >
              Resources
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu - conditionally rendered based on isMobileMenuOpen state */}
      <div id="mobile-menu" className={`md:hidden border-t border-gray-700/50 ${isMobileMenuOpen ? '' : 'hidden'}`}>
        <ul className="flex flex-col items-center space-y-4 py-4 font-medium">
          <li>
            <a
              href="#"
              onClick={() => handleNavLinkClick('about')}
              className={`nav-link text-gray-400 hover:text-emerald-400 transition-colors duration-300 ${
                currentPage === 'about' ? 'active' : ''
              }`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleNavLinkClick('education')}
              className={`nav-link text-gray-400 hover:text-emerald-400 transition-colors duration-300 ${
                currentPage === 'education' ? 'active' : ''
              }`}
            >
              Credentials
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleNavLinkClick('projects')}
              className={`nav-link text-gray-400 hover:text-emerald-400 transition-colors duration-300 ${
                currentPage === 'projects' ? 'active' : ''
              }`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleNavLinkClick('resources')}
              className={`nav-link text-gray-400 hover:text-emerald-400 transition-colors duration-300 ${
                currentPage === 'resources' ? 'active' : ''
              }`}
            >
              Resources
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

// Home/Hero Section component
const Home = () => {
  return (
    <section id="home-page" className="min-h-screen flex items-center justify-center text-center">
      <div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg text-gray-400">Network Ops Tech upskilling into OffSec Professional</p>
      </div>
    </section>
  );
};

// About Section component
const About = () => {
  return (
    <section id="about-page" className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">About Me</h2>
        <p className="text-gray-400 mb-12">Who is this person, and why should you care?</p>
        <div className="bg-gray-900 p-8 rounded-xl shadow-lg text-left border border-gray-700">
          <p className="text-gray-300 leading-relaxed">
            The short answer to | [ ValM@Archbox]: whoami | is that I'm a current Network Operations Tech for an Oil
            and Gas Company who got so burnt out on Jira they opened up a book and started to learn Python, then didn't
            know what to do with it, and learned Rust. I began Uni education at the "right" age, but sucked at exams,
            so now I write in Rust, Python, and Go and only vibe code Somtimes^tm. I'm mostly self-learning and using
            courses I can find for "free" and or as cheap as possible. I'm actively looking to escape the NOC and find
            a new job doing something besides JIRA. Atlassian, you're a great company if you're reading this, but I
            SWEAR TO THE DEV IN THE SKY, my current position has given me PTSD for using your ticketing system and I
            hope I can just be project based for the rest of my life.
            <br />
            <br />
            However, since I'm in a NOC, I don't get a lot of time to do useful things for society like learn to program,
            maybe learn some Ethical Hacking to the extent I woudl like to. What I do get time for though, is working on
            my Git. Case and point, this portfolio. Does it have a bunch of high level super advanced regular college
            kid with hope in their eyes and 100k in College debt? No. Will it eventually? Hopefully. I may not have the
            skills entirely yet (At the time of this init commit) but I have the drive to get better and work on what I
            need to work on. Plus, I love OffSec in that it's fun to think of things from an Attacker's POV and it's how
            I approach most engagements that I've had the chance to be a part of.
            <br />
            <br />
            This port will slowly fill up, and with it, I hope whoever is reading this is able to grow along with me.
            Even if we can't all be Suma Cum Laude and or live in a country with free education and job programmes. But
            that aside, I will continue to improve this portfolio over time and maybe even make it more professional.
            who knows? :3
          </p>
        </div>
      </div>
    </section>
  );
};

// Education/Certifications Section component
const Education = () => {
  return (
    <section id="education-page" className="min-h-screen py-20 my-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">Education & Certifications</h2>
        <p className="text-gray-400 mb-12">My academic background and professional credentials.</p>
        <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700">
          <ul className="text-gray-300 text-left list-disc list-inside space-y-2">
            <li>Associates of Arts - Houston Community College</li>
            <li>Comptia Security+ (The Learner's Permit of OffSec)</li>
            <li>Western Governor's University - Did Not Graduate (Sucked at tests)</li>
            <li>INE eJPT (Currently working on getting this one.)</li>
            <li>Comptia PenTest+ (Considering)</li>
            <li>TCM Sec Certs PJPT (Planning to get after eJPT)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

// Projects Section component
const Projects = () => {
  return (
    <section id="projects-page" className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">Projects</h2>
        <p className="text-gray-400 mb-12">Here are some of the things I've built and secured.</p>

        {/* Project Card Example */}
        <div className="bg-gray-900 rounded-xl shadow-lg border border-gray-700 p-6 flex flex-col hover:border-emerald-500 hover:shadow-emerald-500/10 transition-all duration-300">
          <h3 className="text-xl font-bold text-white mb-2">Learning Rust Lang for Ethical Hacking</h3>
          <p className="text-gray-400 mb-4 flex-grow">
            Basically the first few exercises in The Rust Book: Cornell Edition
          </p>
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="inline-block bg-gray-800 text-emerald-400 text-xs font-mono px-2 py-1 rounded-full">
              C++ but Zesty
            </span>
            <span className="inline-block bg-gray-800 text-emerald-400 text-xs font-mono px-2 py-1 rounded-full">
              Fun to obsfucate
            </span>
            <span className="inline-block bg-gray-800 text-emerald-400 text-xs font-mono px-2 py-1 rounded-full">
              Meme language for srs work
            </span>
          </div>
          <div className="mt-auto text-right">
            <a href="https://github.com/ValM23/rustlang" className="text-emerald-400 hover:text-white font-semibold">
              Where the wild files are. &rarr;
            </a>
          </div>
        </div>
        {/* Add more project cards here following the same structure */}
      </div>
    </section>
  );
};

// Resources Section component
const Resources = () => {
  return (
    <section id="resources-page" className="min-h-screen py-20 my-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">Resources</h2>
        <p className="text-gray-400 mb-12">
          A collection of useful tools, articles, and documentation for security analysts.
        </p>
        <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700">
          <p className="text-gray-500">//UNDER CONSTRUCTION at time of init commit //</p>
        </div>
      </div>
    </section>
  );
};

// Footer component
const Footer = () => {
  return (
    <footer className="text-center py-6 bg-gray-900 border-t border-gray-700/50 text-gray-400">
      <p>&copy; 2025 Matthew Valdez All Rights Reserved.</p>
    </footer>
  );
};

export default App; // Export the main App component
