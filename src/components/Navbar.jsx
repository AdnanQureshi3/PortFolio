import { useState } from 'react';
import { NAVIGATION_LINKS } from '../constants';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-4 left-0 right-0 z-50">
      {/* Desktop Navbar */}
      <div className="hidden lg:flex max-w-3xl mx-auto items-center justify-center bg-black/20 py-3 backdrop-blur-md rounded-xl shadow-md">
        <ul className="flex gap-6">
          <li>
            <a href="#" className="text-lg font-semibold text-white hover:text-yellow-400">
              Home
            </a>
          </li>
          {NAVIGATION_LINKS.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="text-lg font-semibold text-white hover:text-yellow-400"
                onClick={(e) => handleLinkClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden mx-5 flex items-center justify-between bg-black/20 py-3 px-4 rounded-xl backdrop-blur-md shadow-md">
        <button className="text-white focus:outline-none" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-3 px-5">
          <ul className="flex flex-col gap-4 bg-black/30 p-4 rounded-xl backdrop-blur-md shadow-md">
            <li>
              <a href="#" className="text-lg font-semibold text-white hover:text-yellow-400" onClick={toggleMobileMenu}>
                Home
              </a>
            </li>
            {NAVIGATION_LINKS.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-lg font-semibold text-white hover:text-yellow-400"
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;