import React, { useState } from 'react';

// Main App Component
const App = () => {
  // State to manage the active section for navigation
  const [activeSection, setActiveSection] = useState('home');

  // Navigation component
  const NavBar = () => (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 shadow-lg">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="text-white text-2xl font-bold rounded-lg p-2">
          Snappy Rentals Photo Booths {/* Updated Name */}
        </div>
        <div className="flex space-x-4 md:space-x-8 text-lg font-medium">
          <NavItem section="home" label="Home" />
          <NavItem section="services" label="Services" />
          <NavItem section="gallery" label="Gallery" />
          <NavItem section="about" label="About Us" />
          <NavItem section="contact" label="Contact" />
        </div>
      </div>
    </nav>
  );

  // Helper component for navigation items
  const NavItem = ({ section, label }) => (
    <button
      onClick={() => setActiveSection(section)}
      className={`px-3 py-2 rounded-lg transition-colors duration-300
        ${activeSection === section ? 'bg-white text-blue-700 shadow-md' : 'text-white hover:bg-white hover:text-blue-700 hover:shadow-md'}`}
    >
      {label}
    </button>
  );

  // Section components
  const Home = () => (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-8">
      <div className="text-center bg-white bg-opacity-90 p-10 rounded-3xl shadow-xl max-w-4xl transform hover:scale-105 transition-transform duration-500">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6 animate-pulse">
          Your Event, Elevated!
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
          Capture unforgettable moments with Snappy Rentals Photo Booths – bringing joy, laughter, and high-quality memories to North County San Diego! {/* Updated Name */}
        </p>
        <button
          onClick={() => setActiveSection('contact')}
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-8 rounded-full text-lg md:text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
        >
          Get a Free Quote Today!
        </button>
      </div>
    </section>
  );

  const Services = () => (
    <section id="services" className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 mt-8 text-center">Our Amazing Photo Booth Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        <ServiceCard
          title="Modern Open-Air Booths"
          description="Sleek and stylish designs that fit any event aesthetic, accommodating large groups for maximum fun."
          icon="📸"
        />
        <ServiceCard
          title="Custom Backdrops & Props"
          description="Choose from a wide array of curated backdrops and fun props, or we can create custom themes just for you!"
          icon="✨"
        />
        <ServiceCard
          title="Instant Prints & Digital Sharing"
          description="Guests get high-quality prints in seconds, plus easy sharing to social media, email, or text."
          icon="🖨️📱"
        />
        <ServiceCard
          title="Personalized Photo Strips"
          description="Design custom logos, names, and dates on your photo strips to perfectly match your event's theme."
          icon="🎨"
        />
        <ServiceCard
          title="Online Gallery Access"
          description="All your event photos are uploaded to a private online gallery for easy viewing and downloading after the event."
          icon="🖼️"
        />
      </div>
    </section>
  );

  const ServiceCard = ({ title, description, icon }) => (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-blue-100">
      <div className="text-5xl mb-4 text-center">{icon}</div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-3 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );

  const Gallery = () => (
    <section id="gallery" className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-8 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 mt-8 text-center">Moments Captured by Snappy Rentals</h2> {/* Updated Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {/* Placeholder Images - Replace with your actual event photos! */}
        <GalleryImage src="https://placehold.co/600x400/87CEEB/FFFFFF?text=Wedding+Fun" alt="Wedding Photo Booth" />
        <GalleryImage src="https://placehold.co/600x400/DDA0DD/FFFFFF?text=Birthday+Party" alt="Birthday Party Photo Booth" />
        <GalleryImage src="https://placehold.co/600x400/FFD700/FFFFFF?text=Corporate+Event" alt="Corporate Event Photo Booth" />
        <GalleryImage src="https://placehold.co/600x400/FF6347/FFFFFF?text=Holiday+Party" alt="Holiday Party Photo Booth" />
        <GalleryImage src="https://placehold.co/600x400/98FB98/FFFFFF?text=Graduation+Celebration" alt="Graduation Photo Booth" />
        <GalleryImage src="https://placehold.co/600x400/BA55D3/FFFFFF?text=Brand+Activation" alt="Brand Activation Photo Booth" />
      </div>
      <p className="text-gray-700 text-lg mt-8 text-center">
        *These are placeholder images. We'd love to fill this with your amazing event photos soon!
      </p>
    </section>
  );

  const GalleryImage = ({ src, alt }) => (
    <div className="relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer transform hover:scale-105 transition-transform duration-300">
      <img src={src} alt={alt} className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80" />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-xl font-bold">{alt}</p>
      </div>
    </div>
  );

  const About = () => (
    <section id="about" className="min-h-screen bg-white p-8 flex flex-col items-center justify-center">
      <div className="max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 mt-8">About Snappy Rentals Photo Booths</h2> {/* Updated Name */}
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
          Hello! We're Snappy Rentals Photo Booths, your local mobile photo booth rental service based right here in beautiful North County San Diego. We're passionate about bringing fun, laughter, and lasting memories to events of all shapes and sizes. {/* Updated Name */}
        </p>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
          Whether it's a wedding, birthday party, corporate gathering, or any special celebration, our mission is to provide a seamless and exciting experience for you and your guests. We believe every event deserves a touch of magic, and our modern photo booths, high-quality prints, and friendly attendants are here to make that happen.
        </p>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          We love being a part of the vibrant San Diego community and look forward to helping you create unforgettable moments!
        </p>
      </div>
    </section>
  );

  const Contact = () => {
    // Basic state for form inputs (no actual submission logic for this example)
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      eventDate: '',
      message: ''
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // In a real application, you would send this data to a backend service (e.g., Firestore, email service)
      console.log('Form Submitted:', formData);
      alert('Thank you for your inquiry! We will get back to you shortly.'); // Using alert for demo purposes
      setFormData({ // Clear form
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        message: ''
      });
    };

    return (
      <section id="contact" className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 mt-8 text-center">Get a Free Quote & Let's Chat!</h2>
        <div className="bg-white p-8 rounded-3xl shadow-xl max-w-3xl w-full border border-blue-100">
          <p className="text-lg text-gray-700 mb-6 text-center">
            Ready to add some extra fun to your next event? Fill out the form below, and we'll get back to you with a personalized quote!
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-lg font-medium mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 text-lg"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-lg font-medium mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 text-lg"
                placeholder="john.doe@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 text-lg font-medium mb-2">Phone Number (Optional)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 text-lg"
                placeholder="(555) 123-4567"
              />
            </div>
            <div>
              <label htmlFor="eventType" className="block text-gray-700 text-lg font-medium mb-2">Type of Event</label>
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 text-lg bg-white"
                required
              >
                <option value="">Select Event Type</option>
                <option value="Wedding">Wedding</option>
                <option value="Birthday">Birthday Party</option>
                <option value="Corporate">Corporate Event</option>
                <option value="Graduation">Graduation Party</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="eventDate" className="block text-gray-700 text-lg font-medium mb-2">Event Date</label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 text-lg"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-lg font-medium mb-2">Tell Us About Your Event!</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 text-lg resize-y"
                placeholder="Number of guests, venue, special requests, etc."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-6 rounded-full text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Send My Inquiry
            </button>
          </form>
        </div>
      </section>
    );
  };

  // Render the appropriate section based on activeSection state
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'services':
        return <Services />;
      case 'gallery':
        return <Gallery />;
      // Removed case for 'theme-ideas'
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="font-sans antialiased">
      {/* Moved to public/index.html: <script src="https://cdn.tailwindcss.com"></script> */}
      {/* Moved to public/index.html: <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" /> */}
      <style>
        {`
          body {
            font-family: 'Inter', sans-serif;
            scroll-behavior: smooth;
          }
        `}
      </style>

      <NavBar />
      <main>
        {renderSection()}
      </main>
      <footer className="bg-gray-800 text-white p-6 text-center mt-auto">
        <p>&copy; {new Date().getFullYear()} Snappy Rentals Photo Booths. All rights reserved.</p> {/* Updated Name */}
        <p>Serving North County San Diego.</p>
      </footer>
    </div>
  );
};

export default App;
