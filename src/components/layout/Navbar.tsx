import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Jobs', path: '/careers' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-panel py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-300 gradient-text">ERIMTECH Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-neon-cyan ${
                  location.pathname === item.path ? 'text-neon-cyan' : 'text-gray-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:+254725910500"
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-neon-cyan to-neon-pink text-white font-medium hover:opacity-90 transition-opacity"
            >
              <Phone size={16} />
              <span>Call Us</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden rounded-lg p-2 hover:bg-gray-500 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden glass-panel mt-4 rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-neon-cyan ${
                    location.pathname === item.path ? 'text-neon-cyan' : 'text-gray-300'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:+254725910500"
                className="flex items-center justify-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-neon-cyan to-neon-pink text-white font-medium hover:opacity-90 transition-opacity"
              >
                <Phone size={16} />
                <span>Call Us</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}