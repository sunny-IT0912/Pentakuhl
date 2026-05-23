// import { Link, useLocation } from 'react-router-dom';
// import { useState } from 'react';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();

//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'Industries', path: '/industries' },
//     { name: 'Pentakuhl', path: '/pentakuhl' },
//   ];

//   return (
//     <header className="bg-white shadow-sm sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-3">
//           <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-2xl">
//             P
//           </div>
//           <div>
//             <span className="text-2xl font-bold text-primary heading-font">Penta</span>
//             <span className="text-2xl font-bold text-accent heading-font">Freight</span>
//           </div>
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center gap-8">
//           {navLinks.map((link) => (
//             <Link
//               key={link.path}
//               to={link.path}
//               className={`font-medium hover:text-primary transition-colors ${
//                 location.pathname === link.path ? 'text-primary' : 'text-gray-600'
//               }`}
//             >
//               {link.name}
//             </Link>
//           ))}
//           <a href="#" className="bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-dark transition">
//             Get Quote
//           </a>
//         </nav>

//         {/* Mobile Menu Button */}
//         <button 
//           className="md:hidden text-2xl"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           {isMenuOpen ? '✕' : '☰'}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white border-t">
//           <div className="flex flex-col px-6 py-6 gap-4">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className="py-3 text-lg font-medium"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {link.name}
//               </Link>
//             ))}
//             <a href="#" className="bg-primary text-white text-center py-4 rounded-2xl font-medium mt-4">
//               Get Quote
//             </a>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;










// import { Link, useLocation } from 'react-router-dom';
// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isPentakuhlOpen, setIsPentakuhlOpen] = useState(false);
//   const location = useLocation();

//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'Industries', path: '/industries' },
//   ];

//   // Pentakuhl dropdown items - Only 2 options as per screenshot
//   const pentakuhlItems = [
//     { name: 'Temperature Control', path: '/pentakuhl/temperature' },
//     { name: 'FAQs', path: '/pentakuhl/faqs' },
//   ];

//   // Check if current path is Pentakuhl or its subpages
//   const isPentakuhlActive = location.pathname === '/pentakuhl' || 
//                             location.pathname === '/pentakuhl/temperature' || 
//                             location.pathname === '/pentakuhl/faqs';

//   return (
//     <header className="bg-white shadow-sm sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-3">
//           <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-2xl">
//             P
//           </div>
//           <div>
//             <span className="text-2xl font-bold text-primary heading-font">Penta</span>
//             <span className="text-2xl font-bold text-accent heading-font">Freight</span>
//           </div>
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center gap-8">
//           {navLinks.map((link) => (
//             <Link
//               key={link.path}
//               to={link.path}
//               className={`font-medium hover:text-primary transition-colors ${
//                 location.pathname === link.path ? 'text-primary' : 'text-gray-600'
//               }`}
//             >
//               {link.name}
//             </Link>
//           ))}
          
//           {/* Pentakuhl Dropdown - Hover to show options, Click on PentaKÜHL to go to page */}
//           <div 
//             className="relative"
//             onMouseEnter={() => setIsPentakuhlOpen(true)}
//             onMouseLeave={() => setIsPentakuhlOpen(false)}
//           >
//             {/* PentaKÜHL Button - Click to navigate to page */}
//             <Link
//               to="/pentakuhl"
//               className={`font-medium hover:text-primary transition-colors flex items-center gap-1 ${
//                 isPentakuhlActive ? 'text-primary' : 'text-gray-600'
//               }`}
//             >
//               PentaKÜHL
//               <motion.span
//                 animate={{ rotate: isPentakuhlOpen ? 180 : 0 }}
//                 transition={{ duration: 0.3 }}
//                 className="text-xs"
//               >
//                 ▼
//               </motion.span>
//             </Link>

//             {/* Dropdown Menu - Shows on Hover only */}
//             <AnimatePresence>
//               {isPentakuhlOpen && (
//                 <motion.div
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.2 }}
//                   className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50"
//                 >
//                   {pentakuhlItems.map((item, index) => (
//                     <Link
//                       key={index}
//                       to={item.path}
//                       className="block px-5 py-3 hover:bg-orange-50 transition-colors"
//                       onClick={() => setIsPentakuhlOpen(false)}
//                     >
//                       <span className="text-gray-700 hover:text-orange-600 transition-colors">
//                         {item.name}
//                       </span>
//                     </Link>
//                   ))}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           <a href="#" className="bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-dark transition">
//             Get Quote
//           </a>
//         </nav>

//         {/* Mobile Menu Button */}
//         <button 
//           className="md:hidden text-2xl"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           {isMenuOpen ? '✕' : '☰'}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden bg-white border-t overflow-hidden"
//           >
//             <div className="flex flex-col px-6 py-6 gap-4">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   className="py-3 text-lg font-medium text-gray-700 hover:text-primary transition-colors"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {link.name}
//                 </Link>
//               ))}
              
//               {/* Pentakuhl Section in Mobile */}
//               <div className="border-t border-gray-100 pt-3">
//                 <Link
//                   to="/pentakuhl"
//                   className="py-3 text-lg font-medium text-primary block"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   PentaKÜHL
//                 </Link>
//                 <div className="pl-4 flex flex-col gap-3 mt-2">
//                   {pentakuhlItems.map((item, index) => (
//                     <Link
//                       key={index}
//                       to={item.path}
//                       className="py-2 text-gray-600 hover:text-orange-600 transition-colors"
//                       onClick={() => setIsMenuOpen(false)}
//                     >
//                       {item.name}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
              
//               <a href="#" className="bg-primary text-white text-center py-4 rounded-2xl font-medium mt-4">
//                 Get Quote
//               </a>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Header;






import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPentakuhlOpen, setIsPentakuhlOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Industries', path: '/industries' },
  ];

  // Pentakuhl dropdown items
  const pentakuhlItems = [
    { name: 'Temperature Control', path: '/pentakuhl/temperature' },
    { name: 'FAQs', path: '/pentakuhl/faqs' },
  ];

  // Check if current path is Pentakuhl or its subpages
  const isPentakuhlActive = location.pathname === '/pentakuhl' || 
                            location.pathname === '/pentakuhl/temperature' || 
                            location.pathname === '/pentakuhl/faqs';

  // Handle navbar hide/show on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down - hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up - show navbar
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Handle navigation with scroll to top
  const handleNavigation = (path) => {
    if (location.pathname === path) {
      // If already on the same page, just scroll to top
      scrollToTop();
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header 
      className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50"
      animate={{ 
        y: isVisible ? 0 : -100 
      }}
      transition={{ 
        duration: 0.3, 
        ease: "easeInOut" 
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-3"
          onClick={() => handleNavigation('/')}
        >
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-2xl">
            P
          </div>
          <div>
            <span className="text-2xl font-bold text-primary heading-font">Penta</span>
            <span className="text-2xl font-bold text-accent heading-font">Freight</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => handleNavigation(link.path)}
              className={`font-medium hover:text-primary transition-colors ${
                location.pathname === link.path ? 'text-primary' : 'text-gray-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Pentakuhl Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsPentakuhlOpen(true)}
            onMouseLeave={() => setIsPentakuhlOpen(false)}
          >
            {/* PentaKÜHL Button */}
            <Link
              to="/pentakuhl"
              onClick={() => handleNavigation('/pentakuhl')}
              className={`font-medium hover:text-primary transition-colors flex items-center gap-1 ${
                isPentakuhlActive ? 'text-primary' : 'text-gray-600'
              }`}
            >
              PentaKÜHL
              <motion.span
                animate={{ rotate: isPentakuhlOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-xs"
              >
                ▼
              </motion.span>
            </Link>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isPentakuhlOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50"
                >
                  {pentakuhlItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="block px-5 py-3 hover:bg-orange-50 transition-colors"
                      onClick={() => setIsPentakuhlOpen(false)}
                    >
                      <span className="text-gray-700 hover:text-orange-600 transition-colors">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="py-3 text-lg font-medium text-gray-700 hover:text-primary transition-colors"
                  onClick={() => handleNavigation(link.path)}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Pentakuhl Section in Mobile */}
              <div className="border-t border-gray-100 pt-3">
                <Link
                  to="/pentakuhl"
                  className="py-3 text-lg font-medium text-primary block"
                  onClick={() => handleNavigation('/pentakuhl')}
                >
                  PentaKÜHL
                </Link>
                <div className="pl-4 flex flex-col gap-3 mt-2">
                  {pentakuhlItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="py-2 text-gray-600 hover:text-orange-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;