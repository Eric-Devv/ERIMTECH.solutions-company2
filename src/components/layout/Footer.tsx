import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-lighter mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">ERIMTECH Solutions</h3>
            <p className="text-gray-400 mb-4">
              Leading Technology Solutions Provider in Kenya and worldwide
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1A241qMMnS/" className="text-gray-400 hover:text-neon-cyan transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-neon-cyan transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/in/erimtechsolutions?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-400 hover:text-neon-cyan transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-neon-cyan transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-400 hover:text-neon-cyan transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-400 hover:text-neon-cyan transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-neon-cyan transition-colors">
                  Jobs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone size={16} />
                <a href="tel:+254725910500" className="hover:text-neon-cyan transition-colors">
                  +254 725910500
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail size={16} />
                <a href="mailto:brightgainscompany@gmail.com" className="hover:text-neon-cyan transition-colors">
                  brightgainscompany@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2 text-gray-400">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-dark border border-gray-700 rounded-lg focus:outline-none focus:border-neon-cyan text-white"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-gradient-to-r from-neon-cyan to-neon-pink text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} ERIMTECH Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}