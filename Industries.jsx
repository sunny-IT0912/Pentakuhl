// // // // // // // // // // // // // // // import { Link } from 'react-router-dom';

// // // // // // // // // // // // // // // const Industries = () => {
// // // // // // // // // // // // // // //   const industries = [
// // // // // // // // // // // // // // //     {
// // // // // // // // // // // // // // //       title: "Automotive",
// // // // // // // // // // // // // // //       desc: "Just-in-time delivery for automotive parts and vehicles",
// // // // // // // // // // // // // // //       icon: "🚗",
// // // // // // // // // // // // // // //       color: "bg-blue-50"
// // // // // // // // // // // // // // //     },
// // // // // // // // // // // // // // //     {
// // // // // // // // // // // // // // //       title: "Pharmaceuticals",
// // // // // // // // // // // // // // //       desc: "Temperature-controlled logistics for healthcare",
// // // // // // // // // // // // // // //       icon: "💊",
// // // // // // // // // // // // // // //       color: "bg-emerald-50"
// // // // // // // // // // // // // // //     },
// // // // // // // // // // // // // // //     {
// // // // // // // // // // // // // // //       title: "Retail & E-commerce",
// // // // // // // // // // // // // // //       desc: "Fast and scalable fulfillment solutions",
// // // // // // // // // // // // // // //       icon: "🛍️",
// // // // // // // // // // // // // // //       color: "bg-amber-50"
// // // // // // // // // // // // // // //     },
// // // // // // // // // // // // // // //     {
// // // // // // // // // // // // // // //       title: "Oil & Gas",
// // // // // // // // // // // // // // //       desc: "Heavy lift and project cargo expertise",
// // // // // // // // // // // // // // //       icon: "🛢️",
// // // // // // // // // // // // // // //       color: "bg-slate-50"
// // // // // // // // // // // // // // //     },
// // // // // // // // // // // // // // //     {
// // // // // // // // // // // // // // //       title: "Food & Beverage",
// // // // // // // // // // // // // // //       desc: "Fresh and frozen supply chain management",
// // // // // // // // // // // // // // //       icon: "🍎",
// // // // // // // // // // // // // // //       color: "bg-orange-50"
// // // // // // // // // // // // // // //     },
// // // // // // // // // // // // // // //     {
// // // // // // // // // // // // // // //       title: "Manufacturing",
// // // // // // // // // // // // // // //       desc: "Raw materials to finished goods movement",
// // // // // // // // // // // // // // //       icon: "🏭",
// // // // // // // // // // // // // // //       color: "bg-zinc-50"
// // // // // // // // // // // // // // //     },
// // // // // // // // // // // // // // //   ];

// // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // //     <>
// // // // // // // // // // // // // // //       {/* Hero */}
// // // // // // // // // // // // // // //       <section className="bg-gradient-to-br from-primary to-dark text-white py-24">
// // // // // // // // // // // // // // //         <div className="max-w-7xl mx-auto px-6 text-center">
// // // // // // // // // // // // // // //           <h1 className="text-5xl md:text-6xl font-bold heading-font mb-6">
// // // // // // // // // // // // // // //             Industries We Serve
// // // // // // // // // // // // // // //           </h1>
// // // // // // // // // // // // // // //           <p className="text-xl text-gray-200 max-w-3xl mx-auto">
// // // // // // // // // // // // // // //             Specialized logistics solutions tailored for diverse industry needs with unmatched reliability.
// // // // // // // // // // // // // // //           </p>
// // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // //       </section>

// // // // // // // // // // // // // // //       {/* Industries Grid */}
// // // // // // // // // // // // // // //       <section className="py-20 bg-white">
// // // // // // // // // // // // // // //         <div className="max-w-7xl mx-auto px-6">
// // // // // // // // // // // // // // //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// // // // // // // // // // // // // // //             {industries.map((industry, index) => (
// // // // // // // // // // // // // // //               <div 
// // // // // // // // // // // // // // //                 key={index}
// // // // // // // // // // // // // // //                 className="group border border-gray-100 hover:border-primary rounded-3xl p-10 transition-all hover:shadow-2xl hover:-translate-y-2"
// // // // // // // // // // // // // // //               >
// // // // // // // // // // // // // // //                 <div className={`w-20 h-20 ${industry.color} rounded-2xl flex items-center justify-center text-5xl mb-8 group-hover:scale-110 transition`}>
// // // // // // // // // // // // // // //                   {industry.icon}
// // // // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // // // //                 <h3 className="text-3xl font-semibold mb-4 heading-font">{industry.title}</h3>
// // // // // // // // // // // // // // //                 <p className="text-gray-600 leading-relaxed mb-8">{industry.desc}</p>
// // // // // // // // // // // // // // //                 <Link 
// // // // // // // // // // // // // // //                   to="/pentakuhl" 
// // // // // // // // // // // // // // //                   className="text-primary font-medium flex items-center gap-2 hover:gap-3 transition"
// // // // // // // // // // // // // // //                 >
// // // // // // // // // // // // // // //                   Learn more →
// // // // // // // // // // // // // // //                 </Link>
// // // // // // // // // // // // // // //               </div>
// // // // // // // // // // // // // // //             ))}
// // // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // //       </section>

// // // // // // // // // // // // // // //       {/* Stats Banner */}
// // // // // // // // // // // // // // //       <section className="bg-gray-50 py-16">
// // // // // // // // // // // // // // //         <div className="max-w-7xl mx-auto px-6">
// // // // // // // // // // // // // // //           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
// // // // // // // // // // // // // // //             <div>
// // // // // // // // // // // // // // //               <div className="text-5xl font-bold text-primary">12+</div>
// // // // // // // // // // // // // // //               <div className="mt-2 text-gray-600">Industry Verticals</div>
// // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // //             <div>
// // // // // // // // // // // // // // //               <div className="text-5xl font-bold text-primary">98%</div>
// // // // // // // // // // // // // // //               <div className="mt-2 text-gray-600">Client Retention</div>
// // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // //             <div>
// // // // // // // // // // // // // // //               <div className="text-5xl font-bold text-primary">24/7</div>
// // // // // // // // // // // // // // //               <div className="mt-2 text-gray-600">Support</div>
// // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // //             <div>
// // // // // // // // // // // // // // //               <div className="text-5xl font-bold text-primary">150+</div>
// // // // // // // // // // // // // // //               <div className="mt-2 text-gray-600">Countries</div>
// // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // //       </section>
// // // // // // // // // // // // // // //     </>
// // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // export default Industries;




// // // // // // // // // // // // // // import { motion } from 'framer-motion';

// // // // // // // // // // // // // // const Industries = () => {
// // // // // // // // // // // // // //   const industries = [
// // // // // // // // // // // // // //     { title: "Pharmaceuticals", icon: "💊", desc: "Temperature-controlled logistics and compliant supply chain solutions." },
// // // // // // // // // // // // // //     { title: "Chemicals", icon: "🧪", desc: "Safe handling and transport of hazardous materials." },
// // // // // // // // // // // // // //     { title: "Textiles", icon: "🧵", desc: "Timely delivery across fashion and garment industry." },
// // // // // // // // // // // // // //     { title: "Energy", icon: "⚡", desc: "Project cargo and renewable energy equipment." },
// // // // // // // // // // // // // //     { title: "Automobile", icon: "🚗", desc: "Just-in-time delivery for automotive components." },
// // // // // // // // // // // // // //     { title: "Packaging", icon: "📦", desc: "Efficient global movement of packaging materials." },
// // // // // // // // // // // // // //     { title: "Time Critical", icon: "⏱️", desc: "Express and urgent cargo solutions." },
// // // // // // // // // // // // // //     { title: "Electronics", icon: "📱", desc: "Safe transport of sensitive electronic goods." },
// // // // // // // // // // // // // //   ];

// // // // // // // // // // // // // //   const cardVariants = (index) => ({
// // // // // // // // // // // // // //     hidden: {
// // // // // // // // // // // // // //       opacity: 0,
// // // // // // // // // // // // // //       y: index % 2 === 0 ? 120 : -80,
// // // // // // // // // // // // // //       x: index % 3 === 0 ? -80 : index % 3 === 1 ? 80 : 0,
// // // // // // // // // // // // // //       rotate: index % 2 === 0 ? -12 : 12,
// // // // // // // // // // // // // //       scale: 0.6,
// // // // // // // // // // // // // //     },
// // // // // // // // // // // // // //     visible: {
// // // // // // // // // // // // // //       opacity: 1,
// // // // // // // // // // // // // //       y: 0,
// // // // // // // // // // // // // //       x: 0,
// // // // // // // // // // // // // //       rotate: 0,
// // // // // // // // // // // // // //       scale: 1,
// // // // // // // // // // // // // //       transition: {
// // // // // // // // // // // // // //         type: "spring",
// // // // // // // // // // // // // //         stiffness: 70,
// // // // // // // // // // // // // //         damping: 10,
// // // // // // // // // // // // // //         mass: 0.8,
// // // // // // // // // // // // // //         delay: index * 0.08,
// // // // // // // // // // // // // //       },
// // // // // // // // // // // // // //     },
// // // // // // // // // // // // // //   });

// // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // //     <>
// // // // // // // // // // // // // //       {/* Hero */}
// // // // // // // // // // // // // //       <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
// // // // // // // // // // // // // //         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c83137')] bg-cover bg-center opacity-60"></div>
// // // // // // // // // // // // // //         <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80"></div>

// // // // // // // // // // // // // //         <div className="relative z-10 text-center px-6">
// // // // // // // // // // // // // //           <h1 className="text-6xl md:text-7xl font-bold heading-font text-white mb-6">
// // // // // // // // // // // // // //             Industries We Serve
// // // // // // // // // // // // // //           </h1>
// // // // // // // // // // // // // //           <p className="text-xl text-gray-200 max-w-3xl mx-auto">
// // // // // // // // // // // // // //             Over the past two decades we have been coming up with innovative ways to enable global trade across various industries.
// // // // // // // // // // // // // //           </p>
// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //       </section>

// // // // // // // // // // // // // //       {/* Dancing Cards Section */}
// // // // // // // // // // // // // //       <section className="py-24 bg-white">
// // // // // // // // // // // // // //         <div className="max-w-7xl mx-auto px-6">
// // // // // // // // // // // // // //           <div className="text-center mb-16">
// // // // // // // // // // // // // //             <h2 className="text-5xl font-bold heading-font mb-3">Our Expertise</h2>
// // // // // // // // // // // // // //             <p className="text-gray-600 text-lg">Scroll to see the magic ✨</p>
// // // // // // // // // // // // // //           </div>

// // // // // // // // // // // // // //           <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
// // // // // // // // // // // // // //             {industries.map((industry, index) => (
// // // // // // // // // // // // // //               <motion.div
// // // // // // // // // // // // // //                 key={index}
// // // // // // // // // // // // // //                 className="bg-gradient-to-br from-red-600 to-red-700 text-white p-8 rounded-3xl h-full flex flex-col shadow-xl group"
// // // // // // // // // // // // // //                 variants={cardVariants(index)}
// // // // // // // // // // // // // //                 initial="hidden"
// // // // // // // // // // // // // //                 whileInView="visible"
// // // // // // // // // // // // // //                 viewport={{ once: true, margin: "-50px" }}
// // // // // // // // // // // // // //                 whileHover={{
// // // // // // // // // // // // // //                   y: -15,
// // // // // // // // // // // // // //                   scale: 1.04,
// // // // // // // // // // // // // //                   transition: { duration: 0.4 }
// // // // // // // // // // // // // //                 }}
// // // // // // // // // // // // // //               >
// // // // // // // // // // // // // //                 <div className="text-7xl mb-10 transition-transform group-hover:rotate-12 duration-300">
// // // // // // // // // // // // // //                   {industry.icon}
// // // // // // // // // // // // // //                 </div>

// // // // // // // // // // // // // //                 <h3 className="text-3xl font-bold heading-font mb-5">
// // // // // // // // // // // // // //                   {industry.title}
// // // // // // // // // // // // // //                 </h3>

// // // // // // // // // // // // // //                 <p className="text-red-100 leading-relaxed flex-1">
// // // // // // // // // // // // // //                   {industry.desc}
// // // // // // // // // // // // // //                 </p>

// // // // // // // // // // // // // //                 <div className="mt-8 pt-6 border-t border-red-500/30 text-sm opacity-75 group-hover:opacity-100">
// // // // // // // // // // // // // //                   Learn more →
// // // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // // //               </motion.div>
// // // // // // // // // // // // // //             ))}
// // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //       </section>
// // // // // // // // // // // // // //     </>
// // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // };

// // // // // // // // // // // // // // export default Industries;


// // // // // // // // // // // // // import { motion, AnimatePresence } from 'framer-motion';
// // // // // // // // // // // // // import { useState, useEffect, useRef } from 'react';

// // // // // // // // // // // // // const industries = [
// // // // // // // // // // // // //   {
// // // // // // // // // // // // //     title: "Pharmaceuticals", icon: "💊",
// // // // // // // // // // // // //     desc: "The pharmaceutical industry requires highly customized supply chain solutions. Our temperature-controlled warehouse ensures seamless end-to-end service, prioritizing transparency and attention to detail for precise and reliable shipments.",
// // // // // // // // // // // // //   },
// // // // // // // // // // // // //   {
// // // // // // // // // // // // //     title: "Chemicals", icon: "🧪",
// // // // // // // // // // // // //     desc: "We follow IATA guidelines for chemical imports and exports, offering competitive options. With strong authority relations and continuous monitoring, we ensure a smooth, compliant and efficient supply chain experience.",
// // // // // // // // // // // // //   },
// // // // // // // // // // // // //   {
// // // // // // // // // // // // //     title: "Textiles", icon: "🧵",
// // // // // // // // // // // // //     desc: "We are sensitive to the tightly connected consignments and seasonality within the textile industry. We optimize your supply chain through our distribution and consolidation services.",
// // // // // // // // // // // // //   },
// // // // // // // // // // // // //   {
// // // // // // // // // // // // //     title: "Energy", icon: "⚡",
// // // // // // // // // // // // //     desc: "As an organization we have kept up with the growing consumption of renewable energy. We support transport of cutting edge tools used to generate renewable energy to serve emerging markets.",
// // // // // // // // // // // // //   },
// // // // // // // // // // // // //   {
// // // // // // // // // // // // //     title: "Automobile", icon: "🚗",
// // // // // // // // // // // // //     desc: "Our automobile service handles inventory of any dimensions and value for the automobile industry. We demonstrate core flexibility by catering to dynamic model trends across the global network.",
// // // // // // // // // // // // //   },
// // // // // // // // // // // // //   {
// // // // // // // // // // // // //     title: "Packaging", icon: "📦",
// // // // // // // // // // // // //     desc: "The packaging industry needs forwarders with an established reach. We offer through our global partnerships and diverse network of carriers, customized and cost-effective solutions.",
// // // // // // // // // // // // //   },
// // // // // // // // // // // // //   {
// // // // // // // // // // // // //     title: "Time Critical Cargo", icon: "⏱️",
// // // // // // // // // // // // //     desc: "We have specialized in concentrating on time-critical cargo and ensuring that it moves quickly to its destination, no matter what the circumstances are.",
// // // // // // // // // // // // //   },
// // // // // // // // // // // // //   {
// // // // // // // // // // // // //     title: "Electronics", icon: "📱",
// // // // // // // // // // // // //     desc: "We ensure the safe and efficient transport of electronic goods, providing reliable warehousing from doorstep to doorstep. Our logistics solutions help businesses optimize supply chain time.",
// // // // // // // // // // // // //   },
// // // // // // // // // // // // // ];

// // // // // // // // // // // // // // Group into pairs
// // // // // // // // // // // // // const pairs = [];
// // // // // // // // // // // // // for (let i = 0; i < industries.length; i += 2) {
// // // // // // // // // // // // //   pairs.push([industries[i], industries[i + 1]].filter(Boolean));
// // // // // // // // // // // // // }

// // // // // // // // // // // // // const slideVariants = {
// // // // // // // // // // // // //   // entering from below (scroll down)
// // // // // // // // // // // // //   enterFromBottom: { y: '100%', opacity: 0 },
// // // // // // // // // // // // //   // entering from above (scroll up)
// // // // // // // // // // // // //   enterFromTop:    { y: '-100%', opacity: 0 },
// // // // // // // // // // // // //   center:          { y: 0, opacity: 1 },
// // // // // // // // // // // // //   // exiting downward (scroll up — old pair goes down)
// // // // // // // // // // // // //   exitToBottom:    { y: '100%', opacity: 0 },
// // // // // // // // // // // // //   // exiting upward (scroll down — old pair goes up)
// // // // // // // // // // // // //   exitToTop:       { y: '-60%', opacity: 0 },
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default function Industries() {
// // // // // // // // // // // // //   const [currentPair, setCurrentPair] = useState(0);
// // // // // // // // // // // // //   const [direction, setDirection] = useState(1); // 1 = scrolling down, -1 = up
// // // // // // // // // // // // //   const [isAnimating, setIsAnimating] = useState(false);
// // // // // // // // // // // // //   const sectionRef = useRef(null);
// // // // // // // // // // // // //   const lastWheelTime = useRef(0);

// // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // //     const handleWheel = (e) => {
// // // // // // // // // // // // //       const section = sectionRef.current;
// // // // // // // // // // // // //       if (!section) return;

// // // // // // // // // // // // //       const rect = section.getBoundingClientRect();
// // // // // // // // // // // // //       const inView = rect.top <= 0 && rect.bottom >= window.innerHeight;
// // // // // // // // // // // // //       if (!inView) return;

// // // // // // // // // // // // //       const now = Date.now();
// // // // // // // // // // // // //       if (now - lastWheelTime.current < 800) return; // debounce
// // // // // // // // // // // // //       if (isAnimating) return;

// // // // // // // // // // // // //       lastWheelTime.current = now;

// // // // // // // // // // // // //       if (e.deltaY > 0 && currentPair < pairs.length - 1) {
// // // // // // // // // // // // //         // scrolling down — prevent page scroll, go to next pair
// // // // // // // // // // // // //         e.preventDefault();
// // // // // // // // // // // // //         setDirection(1);
// // // // // // // // // // // // //         setCurrentPair(p => p + 1);
// // // // // // // // // // // // //       } else if (e.deltaY < 0 && currentPair > 0) {
// // // // // // // // // // // // //         // scrolling up — prevent page scroll, go to previous pair
// // // // // // // // // // // // //         e.preventDefault();
// // // // // // // // // // // // //         setDirection(-1);
// // // // // // // // // // // // //         setCurrentPair(p => p - 1);
// // // // // // // // // // // // //       }
// // // // // // // // // // // // //     };

// // // // // // // // // // // // //     window.addEventListener('wheel', handleWheel, { passive: false });
// // // // // // // // // // // // //     return () => window.removeEventListener('wheel', handleWheel);
// // // // // // // // // // // // //   }, [currentPair, isAnimating]);

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <>
// // // // // // // // // // // // //       {/* Hero */}
// // // // // // // // // // // // //       <section className="min-h-screen flex items-center justify-center bg-white">
// // // // // // // // // // // // //         <div className="text-center px-6">
// // // // // // // // // // // // //           <h1 className="text-7xl font-bold heading-font text-gray-900 mb-6 tracking-tight">
// // // // // // // // // // // // //             INDUSTRIES
// // // // // // // // // // // // //           </h1>
// // // // // // // // // // // // //           <p className="text-lg text-gray-400 max-w-xl mx-auto">
// // // // // // // // // // // // //             Over the past two decades we have been coming up with innovative ways
// // // // // // // // // // // // //             to enable global trade across various industries.
// // // // // // // // // // // // //           </p>
// // // // // // // // // // // // //           <p className="mt-12 text-sm text-gray-300 animate-bounce">scroll down ↓</p>
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       </section>

// // // // // // // // // // // // //       {/* Scroll-jacked cards section */}
// // // // // // // // // // // // //       <section
// // // // // // // // // // // // //         ref={sectionRef}
// // // // // // // // // // // // //         className="relative bg-white overflow-hidden"
// // // // // // // // // // // // //         style={{ height: '100vh' }}
// // // // // // // // // // // // //       >
// // // // // // // // // // // // //         {/* Progress dots */}
// // // // // // // // // // // // //         <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
// // // // // // // // // // // // //           {pairs.map((_, i) => (
// // // // // // // // // // // // //             <button
// // // // // // // // // // // // //               key={i}
// // // // // // // // // // // // //               onClick={() => { setDirection(i > currentPair ? 1 : -1); setCurrentPair(i); }}
// // // // // // // // // // // // //               className={`w-2 h-2 rounded-full transition-all duration-300 ${
// // // // // // // // // // // // //                 i === currentPair ? 'bg-red-600 scale-150' : 'bg-gray-300'
// // // // // // // // // // // // //               }`}
// // // // // // // // // // // // //             />
// // // // // // // // // // // // //           ))}
// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //         <AnimatePresence
// // // // // // // // // // // // //           mode="wait"
// // // // // // // // // // // // //           custom={direction}
// // // // // // // // // // // // //           onExitComplete={() => setIsAnimating(false)}
// // // // // // // // // // // // //         >
// // // // // // // // // // // // //           <motion.div
// // // // // // // // // // // // //             key={currentPair}
// // // // // // // // // // // // //             custom={direction}
// // // // // // // // // // // // //             variants={{
// // // // // // // // // // // // //               initial: (dir) => ({
// // // // // // // // // // // // //                 y: dir > 0 ? '100%' : '-100%',
// // // // // // // // // // // // //                 opacity: 0,
// // // // // // // // // // // // //               }),
// // // // // // // // // // // // //               animate: {
// // // // // // // // // // // // //                 y: 0,
// // // // // // // // // // // // //                 opacity: 1,
// // // // // // // // // // // // //                 transition: { type: 'spring', stiffness: 60, damping: 18, mass: 0.8 },
// // // // // // // // // // // // //               },
// // // // // // // // // // // // //               exit: (dir) => ({
// // // // // // // // // // // // //                 y: dir > 0 ? '-40%' : '100%',
// // // // // // // // // // // // //                 opacity: 0,
// // // // // // // // // // // // //                 transition: { type: 'spring', stiffness: 60, damping: 18, mass: 0.8 },
// // // // // // // // // // // // //               }),
// // // // // // // // // // // // //             }}
// // // // // // // // // // // // //             initial="initial"
// // // // // // // // // // // // //             animate="animate"
// // // // // // // // // // // // //             exit="exit"
// // // // // // // // // // // // //             onAnimationStart={() => setIsAnimating(true)}
// // // // // // // // // // // // //             onAnimationComplete={() => setIsAnimating(false)}
// // // // // // // // // // // // //             className="absolute inset-0 flex items-center justify-center px-12"
// // // // // // // // // // // // //           >
// // // // // // // // // // // // //             <div className="w-full max-w-5xl flex items-start gap-8">

// // // // // // // // // // // // //               {/* LEFT card — bigger, positioned higher */}
// // // // // // // // // // // // //               {pairs[currentPair][0] && (
// // // // // // // // // // // // //                 <motion.div
// // // // // // // // // // // // //                   className="bg-gradient-to-br from-red-600 to-red-800 text-white rounded-2xl p-10 shadow-2xl group cursor-pointer flex-1"
// // // // // // // // // // // // //                   style={{ marginTop: '-60px', minHeight: '380px' }}
// // // // // // // // // // // // //                   initial={{ x: -60, opacity: 0 }}
// // // // // // // // // // // // //                   animate={{ x: 0, opacity: 1 }}
// // // // // // // // // // // // //                   transition={{ delay: 0.15, type: 'spring', stiffness: 80, damping: 16 }}
// // // // // // // // // // // // //                   whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.25 } }}
// // // // // // // // // // // // //                 >
// // // // // // // // // // // // //                   <div className="text-6xl mb-8 group-hover:scale-110 transition-transform duration-300">
// // // // // // // // // // // // //                     {pairs[currentPair][0].icon}
// // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // //                   <h3 className="text-3xl font-bold heading-font mb-5">
// // // // // // // // // // // // //                     {pairs[currentPair][0].title}
// // // // // // // // // // // // //                   </h3>
// // // // // // // // // // // // //                   <p className="text-red-100 leading-relaxed">
// // // // // // // // // // // // //                     {pairs[currentPair][0].desc}
// // // // // // // // // // // // //                   </p>
// // // // // // // // // // // // //                 </motion.div>
// // // // // // // // // // // // //               )}

// // // // // // // // // // // // //               {/* RIGHT card — smaller, positioned lower */}
// // // // // // // // // // // // //               {pairs[currentPair][1] && (
// // // // // // // // // // // // //                 <motion.div
// // // // // // // // // // // // //                   className="bg-gradient-to-br from-red-700 to-red-900 text-white rounded-2xl p-8 shadow-2xl group cursor-pointer"
// // // // // // // // // // // // //                   style={{ marginTop: '60px', width: '42%', minHeight: '320px' }}
// // // // // // // // // // // // //                   initial={{ x: 60, opacity: 0 }}
// // // // // // // // // // // // //                   animate={{ x: 0, opacity: 1 }}
// // // // // // // // // // // // //                   transition={{ delay: 0.25, type: 'spring', stiffness: 80, damping: 16 }}
// // // // // // // // // // // // //                   whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.25 } }}
// // // // // // // // // // // // //                 >
// // // // // // // // // // // // //                   <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
// // // // // // // // // // // // //                     {pairs[currentPair][1].icon}
// // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // //                   <h3 className="text-2xl font-bold heading-font mb-4">
// // // // // // // // // // // // //                     {pairs[currentPair][1].title}
// // // // // // // // // // // // //                   </h3>
// // // // // // // // // // // // //                   <p className="text-red-100 text-sm leading-relaxed">
// // // // // // // // // // // // //                     {pairs[currentPair][1].desc}
// // // // // // // // // // // // //                   </p>
// // // // // // // // // // // // //                 </motion.div>
// // // // // // // // // // // // //               )}

// // // // // // // // // // // // //             </div>
// // // // // // // // // // // // //           </motion.div>
// // // // // // // // // // // // //         </AnimatePresence>

// // // // // // // // // // // // //         {/* Pair counter */}
// // // // // // // // // // // // //         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm text-gray-400">
// // // // // // // // // // // // //           {currentPair + 1} / {pairs.length}
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       </section>

// // // // // // // // // // // // //       {/* Footer section after all cards */}
// // // // // // // // // // // // //       <section className="py-32 bg-gray-50 text-center">
// // // // // // // // // // // // //         <h2 className="text-3xl font-bold heading-font text-gray-800">Ready to work with us?</h2>
// // // // // // // // // // // // //         <p className="text-gray-400 mt-4">Get in touch with our team today.</p>
// // // // // // // // // // // // //       </section>
// // // // // // // // // // // // //     </>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // }





// // // // // // // // // // // // import { motion, AnimatePresence } from 'framer-motion';
// // // // // // // // // // // // import { useState, useEffect, useRef } from 'react';

// // // // // // // // // // // // const industries = [
// // // // // // // // // // // //   {
// // // // // // // // // // // //     title: "Pharmaceuticals",
// // // // // // // // // // // //     icon: "💊",
// // // // // // // // // // // //     desc: "The pharmaceutical industry requires highly customized supply chain solutions. Our temperature-controlled warehouse ensures seamless end-to-end service, prioritizing transparency and attention to detail for precise and reliable shipments.",
// // // // // // // // // // // //   },
// // // // // // // // // // // //   {
// // // // // // // // // // // //     title: "Chemicals",
// // // // // // // // // // // //     icon: "🧪",
// // // // // // // // // // // //     desc: "We follow IATA guidelines for chemical imports and exports, offering competitive options. With strong authority relations and continuous monitoring, we ensure a smooth, compliant and efficient supply chain experience.",
// // // // // // // // // // // //   },
// // // // // // // // // // // //   {
// // // // // // // // // // // //     title: "Textiles",
// // // // // // // // // // // //     icon: "🧵",
// // // // // // // // // // // //     desc: "We are sensitive to the tightly connected consignments and seasonality within the textile industry. We optimize your supply chain through our distribution and consolidation services.",
// // // // // // // // // // // //   },
// // // // // // // // // // // //   {
// // // // // // // // // // // //     title: "Energy",
// // // // // // // // // // // //     icon: "⚡",
// // // // // // // // // // // //     desc: "As an organization we have kept up with the growing consumption of renewable energy. We support transport of cutting edge tools used to generate renewable energy to serve emerging markets.",
// // // // // // // // // // // //   },
// // // // // // // // // // // //   {
// // // // // // // // // // // //     title: "Automobile",
// // // // // // // // // // // //     icon: "🚗",
// // // // // // // // // // // //     desc: "Our automobile service handles inventory of any dimensions and value for the automobile industry. We demonstrate core flexibility by catering to dynamic model trends across the global network.",
// // // // // // // // // // // //   },
// // // // // // // // // // // //   {
// // // // // // // // // // // //     title: "Packaging",
// // // // // // // // // // // //     icon: "📦",
// // // // // // // // // // // //     desc: "The packaging industry needs forwarders with an established reach. We offer through our global partnerships and diverse network of carriers, customized and cost-effective solutions.",
// // // // // // // // // // // //   },
// // // // // // // // // // // //   {
// // // // // // // // // // // //     title: "Time Critical Cargo",
// // // // // // // // // // // //     icon: "⏱️",
// // // // // // // // // // // //     desc: "We have specialized in concentrating on time-critical cargo and ensuring that it moves quickly to its destination, no matter what the circumstances are.",
// // // // // // // // // // // //   },
// // // // // // // // // // // //   {
// // // // // // // // // // // //     title: "Electronics",
// // // // // // // // // // // //     icon: "📱",
// // // // // // // // // // // //     desc: "We ensure the safe and efficient transport of electronic goods, providing reliable warehousing from doorstep to doorstep. Our logistics solutions help businesses optimize supply chain time.",
// // // // // // // // // // // //   },
// // // // // // // // // // // // ];

// // // // // // // // // // // // const pairs = [];
// // // // // // // // // // // // for (let i = 0; i < industries.length; i += 2) {
// // // // // // // // // // // //   pairs.push([industries[i], industries[i + 1]].filter(Boolean));
// // // // // // // // // // // // }

// // // // // // // // // // // // const Industries = () => {
// // // // // // // // // // // //   const [currentPair, setCurrentPair] = useState(0);
// // // // // // // // // // // //   const [direction, setDirection] = useState(1);
// // // // // // // // // // // //   const sectionRef = useRef(null);

// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     const handleScroll = () => {
// // // // // // // // // // // //       const section = sectionRef.current;
// // // // // // // // // // // //       if (!section) return;

// // // // // // // // // // // //       const rect = section.getBoundingClientRect();
// // // // // // // // // // // //       const scrollProgress = (window.innerHeight - rect.top) / rect.height;

// // // // // // // // // // // //       // Change cards based on scroll progress
// // // // // // // // // // // //       if (scrollProgress > 0.3 && currentPair < pairs.length - 1) {
// // // // // // // // // // // //         setDirection(1);
// // // // // // // // // // // //         setCurrentPair((prev) => prev + 1);
// // // // // // // // // // // //       } else if (scrollProgress < 0.1 && currentPair > 0) {
// // // // // // // // // // // //         setDirection(-1);
// // // // // // // // // // // //         setCurrentPair((prev) => prev - 1);
// // // // // // // // // // // //       }
// // // // // // // // // // // //     };

// // // // // // // // // // // //     window.addEventListener('scroll', handleScroll, { passive: true });
// // // // // // // // // // // //     return () => window.removeEventListener('scroll', handleScroll);
// // // // // // // // // // // //   }, [currentPair]);

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <>
// // // // // // // // // // // //       {/* Hero Section */}
// // // // // // // // // // // //       <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
// // // // // // // // // // // //         <div
// // // // // // // // // // // //           className="absolute inset-0 bg-cover bg-center opacity-60"
// // // // // // // // // // // //           style={{
// // // // // // // // // // // //             backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c83137?auto=format&fit=crop&w=1920&q=80')",
// // // // // // // // // // // //           }}
// // // // // // // // // // // //         />
// // // // // // // // // // // //         <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />

// // // // // // // // // // // //         <div className="relative z-10 text-center px-6">
// // // // // // // // // // // //           <motion.h1
// // // // // // // // // // // //             className="text-6xl md:text-7xl font-bold heading-font text-white mb-6 tracking-tight"
// // // // // // // // // // // //             initial={{ opacity: 0, y: 40 }}
// // // // // // // // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // // // // // // // //             transition={{ duration: 0.8 }}
// // // // // // // // // // // //           >
// // // // // // // // // // // //             Industries We Serve
// // // // // // // // // // // //           </motion.h1>
// // // // // // // // // // // //           <motion.p
// // // // // // // // // // // //             className="text-xl text-gray-200 max-w-3xl mx-auto"
// // // // // // // // // // // //             initial={{ opacity: 0, y: 20 }}
// // // // // // // // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // // // // // // // //             transition={{ duration: 0.8, delay: 0.2 }}
// // // // // // // // // // // //           >
// // // // // // // // // // // //             Over the past two decades we have been coming up with innovative ways to enable global trade across various industries.
// // // // // // // // // // // //           </motion.p>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </section>

// // // // // // // // // // // //       {/* Scroll Triggered Cards Section */}
// // // // // // // // // // // //       <section
// // // // // // // // // // // //         ref={sectionRef}
// // // // // // // // // // // //         className="relative bg-white min-h-screen flex items-center overflow-hidden py-20"
// // // // // // // // // // // //       >
// // // // // // // // // // // //         <div className="max-w-6xl mx-auto px-6 w-full">
// // // // // // // // // // // //           <AnimatePresence mode="wait" custom={direction}>
// // // // // // // // // // // //             <motion.div
// // // // // // // // // // // //               key={currentPair}
// // // // // // // // // // // //               custom={direction}
// // // // // // // // // // // //               initial="initial"
// // // // // // // // // // // //               animate="animate"
// // // // // // // // // // // //               exit="exit"
// // // // // // // // // // // //               variants={{
// // // // // // // // // // // //                 initial: (dir) => ({
// // // // // // // // // // // //                   y: dir > 0 ? 80 : -80,
// // // // // // // // // // // //                   opacity: 0,
// // // // // // // // // // // //                 }),
// // // // // // // // // // // //                 animate: {
// // // // // // // // // // // //                   y: 0,
// // // // // // // // // // // //                   opacity: 1,
// // // // // // // // // // // //                   transition: { type: 'spring', stiffness: 65, damping: 20 }
// // // // // // // // // // // //                 },
// // // // // // // // // // // //                 exit: (dir) => ({
// // // // // // // // // // // //                   y: dir > 0 ? -80 : 80,
// // // // // // // // // // // //                   opacity: 0,
// // // // // // // // // // // //                   transition: { duration: 0.4 }
// // // // // // // // // // // //                 }),
// // // // // // // // // // // //               }}
// // // // // // // // // // // //               className="flex flex-col md:flex-row gap-8 md:gap-12 items-start justify-center"
// // // // // // // // // // // //             >
// // // // // // // // // // // //               {/* Left Card */}
// // // // // // // // // // // //               <motion.div
// // // // // // // // // // // //                 className="flex-1 bg-gradient-to-br from-red-600 to-red-800 text-white rounded-3xl p-10 shadow-2xl"
// // // // // // // // // // // //                 initial={{ x: -50, opacity: 0 }}
// // // // // // // // // // // //                 animate={{ x: 0, opacity: 1 }}
// // // // // // // // // // // //                 transition={{ delay: 0.1 }}
// // // // // // // // // // // //                 whileHover={{ y: -10, scale: 1.02 }}
// // // // // // // // // // // //               >
// // // // // // // // // // // //                 <div className="text-7xl mb-8">{pairs[currentPair][0].icon}</div>
// // // // // // // // // // // //                 <h3 className="text-4xl font-bold heading-font mb-6">
// // // // // // // // // // // //                   {pairs[currentPair][0].title}
// // // // // // // // // // // //                 </h3>
// // // // // // // // // // // //                 <p className="text-red-100 leading-relaxed">
// // // // // // // // // // // //                   {pairs[currentPair][0].desc}
// // // // // // // // // // // //                 </p>
// // // // // // // // // // // //               </motion.div>

// // // // // // // // // // // //               {/* Right Card */}
// // // // // // // // // // // //               {pairs[currentPair][1] && (
// // // // // // // // // // // //                 <motion.div
// // // // // // // // // // // //                   className="flex-1 bg-gradient-to-br from-red-700 to-red-900 text-white rounded-3xl p-10 shadow-2xl mt-12 md:mt-20"
// // // // // // // // // // // //                   initial={{ x: 50, opacity: 0 }}
// // // // // // // // // // // //                   animate={{ x: 0, opacity: 1 }}
// // // // // // // // // // // //                   transition={{ delay: 0.25 }}
// // // // // // // // // // // //                   whileHover={{ y: -10, scale: 1.02 }}
// // // // // // // // // // // //                 >
// // // // // // // // // // // //                   <div className="text-6xl mb-8">{pairs[currentPair][1].icon}</div>
// // // // // // // // // // // //                   <h3 className="text-3xl font-bold heading-font mb-6">
// // // // // // // // // // // //                     {pairs[currentPair][1].title}
// // // // // // // // // // // //                   </h3>
// // // // // // // // // // // //                   <p className="text-red-100 leading-relaxed text-[15px]">
// // // // // // // // // // // //                     {pairs[currentPair][1].desc}
// // // // // // // // // // // //                   </p>
// // // // // // // // // // // //                 </motion.div>
// // // // // // // // // // // //               )}
// // // // // // // // // // // //             </motion.div>
// // // // // // // // // // // //           </AnimatePresence>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </section>
// // // // // // // // // // // //     </>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // export default Industries;





// // // // // // // // // // // import { motion } from "framer-motion";
// // // // // // // // // // // import { useEffect, useRef, useState } from "react";

// // // // // // // // // // // const industries = [
// // // // // // // // // // //   {
// // // // // // // // // // //     title: "Pharmaceuticals",
// // // // // // // // // // //     icon: "💊",
// // // // // // // // // // //     desc: "The pharmaceutical industry requires highly customized supply chain solutions.",
// // // // // // // // // // //   },
// // // // // // // // // // //   {
// // // // // // // // // // //     title: "Chemicals",
// // // // // // // // // // //     icon: "🧪",
// // // // // // // // // // //     desc: "We follow IATA guidelines for chemical imports and exports.",
// // // // // // // // // // //   },
// // // // // // // // // // //   {
// // // // // // // // // // //     title: "Textiles",
// // // // // // // // // // //     icon: "🧵",
// // // // // // // // // // //     desc: "We optimize your supply chain through distribution services.",
// // // // // // // // // // //   },
// // // // // // // // // // //   {
// // // // // // // // // // //     title: "Energy",
// // // // // // // // // // //     icon: "⚡",
// // // // // // // // // // //     desc: "We support renewable energy logistics globally.",
// // // // // // // // // // //   },
// // // // // // // // // // //   {
// // // // // // // // // // //     title: "Automobile",
// // // // // // // // // // //     icon: "🚗",
// // // // // // // // // // //     desc: "Flexible solutions for dynamic automobile trends.",
// // // // // // // // // // //   },
// // // // // // // // // // //   {
// // // // // // // // // // //     title: "Packaging",
// // // // // // // // // // //     icon: "📦",
// // // // // // // // // // //     desc: "Customized packaging logistics worldwide.",
// // // // // // // // // // //   },
// // // // // // // // // // //   {
// // // // // // // // // // //     title: "Time Critical Cargo",
// // // // // // // // // // //     icon: "⏱️",
// // // // // // // // // // //     desc: "Fast movement for urgent cargo deliveries.",
// // // // // // // // // // //   },
// // // // // // // // // // //   {
// // // // // // // // // // //     title: "Electronics",
// // // // // // // // // // //     icon: "📱",
// // // // // // // // // // //     desc: "Safe and efficient transport of electronics.",
// // // // // // // // // // //   },
// // // // // // // // // // // ];

// // // // // // // // // // // const Industries = () => {
// // // // // // // // // // //   const [visibleCards, setVisibleCards] = useState(2);

// // // // // // // // // // //   const sectionRef = useRef(null);

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     const handleScroll = () => {
// // // // // // // // // // //       const section = sectionRef.current;

// // // // // // // // // // //       if (!section) return;

// // // // // // // // // // //       const rect = section.getBoundingClientRect();

// // // // // // // // // // //       // Scroll progress
// // // // // // // // // // //       const progress =
// // // // // // // // // // //         (window.innerHeight - rect.top) /
// // // // // // // // // // //         (rect.height + window.innerHeight);

// // // // // // // // // // //       // Reveal cards in batches
// // // // // // // // // // //       if (progress > 0.15 && visibleCards < 4) {
// // // // // // // // // // //         setVisibleCards(4);
// // // // // // // // // // //       }

// // // // // // // // // // //       if (progress > 0.35 && visibleCards < 6) {
// // // // // // // // // // //         setVisibleCards(6);
// // // // // // // // // // //       }

// // // // // // // // // // //       if (progress > 0.55 && visibleCards < 8) {
// // // // // // // // // // //         setVisibleCards(8);
// // // // // // // // // // //       }
// // // // // // // // // // //     };

// // // // // // // // // // //     window.addEventListener("scroll", handleScroll);

// // // // // // // // // // //     return () => {
// // // // // // // // // // //       window.removeEventListener("scroll", handleScroll);
// // // // // // // // // // //     };
// // // // // // // // // // //   }, [visibleCards]);

// // // // // // // // // // //   return (
// // // // // // // // // // //     <>
// // // // // // // // // // //       {/* HERO SECTION */}
// // // // // // // // // // //       <section className="relative h-screen bg-black overflow-hidden flex items-center justify-center">
        
// // // // // // // // // // //         {/* Background */}
// // // // // // // // // // //         <div
// // // // // // // // // // //           className="absolute inset-0 bg-cover bg-center opacity-50"
// // // // // // // // // // //           style={{
// // // // // // // // // // //             backgroundImage:
// // // // // // // // // // //               "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c83137?auto=format&fit=crop&w=1920&q=80')",
// // // // // // // // // // //           }}
// // // // // // // // // // //         />

// // // // // // // // // // //         {/* Overlay */}
// // // // // // // // // // //         <div className="absolute inset-0 bg-black/60" />

// // // // // // // // // // //         {/* Content */}
// // // // // // // // // // //         <div className="relative z-10 text-center px-6">
// // // // // // // // // // //           <motion.h1
// // // // // // // // // // //             initial={{
// // // // // // // // // // //               opacity: 0,
// // // // // // // // // // //               y: 80,
// // // // // // // // // // //             }}
// // // // // // // // // // //             animate={{
// // // // // // // // // // //               opacity: 1,
// // // // // // // // // // //               y: 0,
// // // // // // // // // // //             }}
// // // // // // // // // // //             transition={{
// // // // // // // // // // //               duration: 1,
// // // // // // // // // // //             }}
// // // // // // // // // // //             className="text-6xl md:text-7xl font-bold text-white mb-6"
// // // // // // // // // // //           >
// // // // // // // // // // //             Industries We Serve
// // // // // // // // // // //           </motion.h1>

// // // // // // // // // // //           <motion.p
// // // // // // // // // // //             initial={{
// // // // // // // // // // //               opacity: 0,
// // // // // // // // // // //               y: 40,
// // // // // // // // // // //             }}
// // // // // // // // // // //             animate={{
// // // // // // // // // // //               opacity: 1,
// // // // // // // // // // //               y: 0,
// // // // // // // // // // //             }}
// // // // // // // // // // //             transition={{
// // // // // // // // // // //               duration: 1,
// // // // // // // // // // //               delay: 0.2,
// // // // // // // // // // //             }}
// // // // // // // // // // //             className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto"
// // // // // // // // // // //           >
// // // // // // // // // // //             Innovative logistics solutions empowering industries worldwide.
// // // // // // // // // // //           </motion.p>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </section>

// // // // // // // // // // //       {/* INDUSTRIES SECTION */}
// // // // // // // // // // //       <section
// // // // // // // // // // //         ref={sectionRef}
// // // // // // // // // // //         className="relative min-h-[350vh] bg-white py-40 overflow-hidden"
// // // // // // // // // // //       >
// // // // // // // // // // //         <div className="max-w-7xl mx-auto px-6">

// // // // // // // // // // //           {/* Heading */}
// // // // // // // // // // //           <motion.div
// // // // // // // // // // //             initial={{
// // // // // // // // // // //               opacity: 0,
// // // // // // // // // // //               y: 80,
// // // // // // // // // // //             }}
// // // // // // // // // // //             whileInView={{
// // // // // // // // // // //               opacity: 1,
// // // // // // // // // // //               y: 0,
// // // // // // // // // // //             }}
// // // // // // // // // // //             transition={{
// // // // // // // // // // //               duration: 1,
// // // // // // // // // // //             }}
// // // // // // // // // // //             viewport={{
// // // // // // // // // // //               once: true,
// // // // // // // // // // //             }}
// // // // // // // // // // //             className="text-center mb-24"
// // // // // // // // // // //           >
// // // // // // // // // // //             <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
// // // // // // // // // // //               Our Industries
// // // // // // // // // // //             </h2>

// // // // // // // // // // //             <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
// // // // // // // // // // //               We provide world-class logistics and supply chain solutions
// // // // // // // // // // //               tailored for diverse global industries.
// // // // // // // // // // //             </p>
// // // // // // // // // // //           </motion.div>

// // // // // // // // // // //           {/* GRID */}
// // // // // // // // // // //           <div
// // // // // // // // // // //             className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 items-start"
// // // // // // // // // // //             style={{
// // // // // // // // // // //               perspective: "1200px",
// // // // // // // // // // //             }}
// // // // // // // // // // //           >
// // // // // // // // // // //             {industries.slice(0, visibleCards).map((item, index) => (
// // // // // // // // // // //               <motion.div
// // // // // // // // // // //                 key={index}
// // // // // // // // // // //                 initial={{
// // // // // // // // // // //                   opacity: 0,
// // // // // // // // // // //                   y: 140,
// // // // // // // // // // //                   rotateX: 15,
// // // // // // // // // // //                   scale: 0.9,
// // // // // // // // // // //                   filter: "blur(12px)",
// // // // // // // // // // //                 }}
// // // // // // // // // // //                 whileInView={{
// // // // // // // // // // //                   opacity: 1,
// // // // // // // // // // //                   y: 0,
// // // // // // // // // // //                   rotateX: 0,
// // // // // // // // // // //                   scale: 1,
// // // // // // // // // // //                   filter: "blur(0px)",
// // // // // // // // // // //                 }}
// // // // // // // // // // //                 transition={{
// // // // // // // // // // //                   duration: 1,
// // // // // // // // // // //                   delay: index * 0.12,
// // // // // // // // // // //                   ease: [0.22, 1, 0.36, 1],
// // // // // // // // // // //                 }}
// // // // // // // // // // //                 viewport={{
// // // // // // // // // // //                   once: true,
// // // // // // // // // // //                   amount: 0.2,
// // // // // // // // // // //                 }}
// // // // // // // // // // //                 whileHover={{
// // // // // // // // // // //                   y: -12,
// // // // // // // // // // //                   scale: 1.03,
// // // // // // // // // // //                   transition: {
// // // // // // // // // // //                     duration: 0.3,
// // // // // // // // // // //                   },
// // // // // // // // // // //                 }}
// // // // // // // // // // //                 className="group relative bg-gradient-to-br from-red-600 via-red-700 to-red-900 rounded-3xl p-10 shadow-2xl overflow-hidden"
// // // // // // // // // // //               >
// // // // // // // // // // //                 {/* Glow Effect */}
// // // // // // // // // // //                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-white/10" />

// // // // // // // // // // //                 {/* Icon */}
// // // // // // // // // // //                 <div className="relative z-10 text-6xl mb-8">
// // // // // // // // // // //                   {item.icon}
// // // // // // // // // // //                 </div>

// // // // // // // // // // //                 {/* Title */}
// // // // // // // // // // //                 <h3 className="relative z-10 text-3xl font-bold text-white mb-6">
// // // // // // // // // // //                   {item.title}
// // // // // // // // // // //                 </h3>

// // // // // // // // // // //                 {/* Description */}
// // // // // // // // // // //                 <p className="relative z-10 text-red-100 leading-relaxed text-[16px]">
// // // // // // // // // // //                   {item.desc}
// // // // // // // // // // //                 </p>

// // // // // // // // // // //                 {/* Decorative Blur Circle */}
// // // // // // // // // // //                 <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
// // // // // // // // // // //               </motion.div>
// // // // // // // // // // //             ))}
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </section>

// // // // // // // // // // //       {/* NEXT SECTION */}
// // // // // // // // // // //       <section className="h-screen bg-black flex items-center justify-center">
// // // // // // // // // // //         <motion.h2
// // // // // // // // // // //           initial={{
// // // // // // // // // // //             opacity: 0,
// // // // // // // // // // //             y: 80,
// // // // // // // // // // //           }}
// // // // // // // // // // //           whileInView={{
// // // // // // // // // // //             opacity: 1,
// // // // // // // // // // //             y: 0,
// // // // // // // // // // //           }}
// // // // // // // // // // //           transition={{
// // // // // // // // // // //             duration: 1,
// // // // // // // // // // //           }}
// // // // // // // // // // //           viewport={{
// // // // // // // // // // //             once: true,
// // // // // // // // // // //           }}
// // // // // // // // // // //           className="text-white text-5xl md:text-6xl font-bold"
// // // // // // // // // // //         >
// // // // // // // // // // //           Next Section
// // // // // // // // // // //         </motion.h2>
// // // // // // // // // // //       </section>
// // // // // // // // // // //     </>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default Industries;









// // // // // // // // // // import { motion } from "framer-motion";
// // // // // // // // // // import { useEffect, useRef, useState } from "react";

// // // // // // // // // // const industries = [
// // // // // // // // // //   {
// // // // // // // // // //     title: "Pharmaceuticals",
// // // // // // // // // //     icon: "💊",
// // // // // // // // // //     desc: "The pharmaceutical industry requires highly customized supply chain solutions.",
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     title: "Chemicals",
// // // // // // // // // //     icon: "🧪",
// // // // // // // // // //     desc: "We follow IATA guidelines for chemical imports and exports.",
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     title: "Textiles",
// // // // // // // // // //     icon: "🧵",
// // // // // // // // // //     desc: "We optimize your supply chain through distribution services.",
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     title: "Energy",
// // // // // // // // // //     icon: "⚡",
// // // // // // // // // //     desc: "We support renewable energy logistics globally.",
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     title: "Automobile",
// // // // // // // // // //     icon: "🚗",
// // // // // // // // // //     desc: "Flexible solutions for dynamic automobile trends.",
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     title: "Packaging",
// // // // // // // // // //     icon: "📦",
// // // // // // // // // //     desc: "Customized packaging logistics worldwide.",
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     title: "Time Critical Cargo",
// // // // // // // // // //     icon: "⏱️",
// // // // // // // // // //     desc: "Fast movement for urgent cargo deliveries.",
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     title: "Electronics",
// // // // // // // // // //     icon: "📱",
// // // // // // // // // //     desc: "Safe and efficient transport of electronics.",
// // // // // // // // // //   },
// // // // // // // // // // ];

// // // // // // // // // // // Accordion Item Component for FAQ
// // // // // // // // // // const AccordionItem = ({ question, answer, isOpen, onClick }) => {
// // // // // // // // // //   return (
// // // // // // // // // //     <div className="border-b border-gray-200 last:border-b-0">
// // // // // // // // // //       <button
// // // // // // // // // //         onClick={onClick}
// // // // // // // // // //         className="w-full flex items-center justify-between py-5 text-left hover:text-red-600 transition-colors"
// // // // // // // // // //       >
// // // // // // // // // //         <span className="text-gray-800 font-medium text-base">{question}</span>
// // // // // // // // // //         <motion.span
// // // // // // // // // //           animate={{ rotate: isOpen ? 180 : 0 }}
// // // // // // // // // //           transition={{ duration: 0.3 }}
// // // // // // // // // //           className="text-red-600 text-xl"
// // // // // // // // // //         >
// // // // // // // // // //           ▼
// // // // // // // // // //         </motion.span>
// // // // // // // // // //       </button>
// // // // // // // // // //       <motion.div
// // // // // // // // // //         initial={{ height: 0, opacity: 0 }}
// // // // // // // // // //         animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
// // // // // // // // // //         transition={{ duration: 0.3 }}
// // // // // // // // // //         className="overflow-hidden"
// // // // // // // // // //       >
// // // // // // // // // //         <div className="pb-5 text-gray-500 text-sm leading-relaxed">
// // // // // // // // // //           {answer}
// // // // // // // // // //         </div>
// // // // // // // // // //       </motion.div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // const Industries = () => {
// // // // // // // // // //   const [visibleCards, setVisibleCards] = useState(2);
// // // // // // // // // //   const [openFaqIndex, setOpenFaqIndex] = useState(null);
// // // // // // // // // //   const sectionRef = useRef(null);

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     const handleScroll = () => {
// // // // // // // // // //       const section = sectionRef.current;

// // // // // // // // // //       if (!section) return;

// // // // // // // // // //       const rect = section.getBoundingClientRect();

// // // // // // // // // //       // Scroll progress
// // // // // // // // // //       const progress =
// // // // // // // // // //         (window.innerHeight - rect.top) /
// // // // // // // // // //         (rect.height + window.innerHeight);

// // // // // // // // // //       // Reveal cards in batches
// // // // // // // // // //       if (progress > 0.15 && visibleCards < 4) {
// // // // // // // // // //         setVisibleCards(4);
// // // // // // // // // //       }

// // // // // // // // // //       if (progress > 0.35 && visibleCards < 6) {
// // // // // // // // // //         setVisibleCards(6);
// // // // // // // // // //       }

// // // // // // // // // //       if (progress > 0.55 && visibleCards < 8) {
// // // // // // // // // //         setVisibleCards(8);
// // // // // // // // // //       }
// // // // // // // // // //     };

// // // // // // // // // //     window.addEventListener("scroll", handleScroll);

// // // // // // // // // //     return () => {
// // // // // // // // // //       window.removeEventListener("scroll", handleScroll);
// // // // // // // // // //     };
// // // // // // // // // //   }, [visibleCards]);

// // // // // // // // // //   const faqs = [
// // // // // // // // // //     {
// // // // // // // // // //       question: "What industries do you serve?",
// // // // // // // // // //       answer: "We serve a wide range of industries including Pharmaceuticals, Chemicals, Textiles, Energy, Automobile, Packaging, Time Critical Cargo, and Electronics. Our logistics solutions are tailored to meet the unique demands of each sector."
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       question: "How do you handle temperature-sensitive shipments?",
// // // // // // // // // //       answer: "We use advanced temperature-controlled packaging solutions, real-time monitoring systems, and specialized handling procedures to ensure temperature-sensitive products remain within their required temperature range throughout the entire shipping process."
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       question: "What sets your logistics apart?",
// // // // // // // // // //       answer: "Our commitment to innovation, real-time tracking, dedicated customer support, global network, and customized solutions tailored to each industry's specific needs set us apart from traditional logistics providers."
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       question: "How do you ensure compliance with regulations?",
// // // // // // // // // //       answer: "We strictly follow IATA guidelines, international shipping regulations, and industry-specific compliance standards. Our team undergoes regular training to stay updated with the latest regulatory requirements."
// // // // // // // // // //     }
// // // // // // // // // //   ];

// // // // // // // // // //   return (
// // // // // // // // // //     <>
// // // // // // // // // //       {/* HERO SECTION */}
// // // // // // // // // //       <section className="relative h-screen bg-black overflow-hidden flex items-center justify-center">
        
// // // // // // // // // //         {/* Background */}
// // // // // // // // // //         <div
// // // // // // // // // //           className="absolute inset-0 bg-cover bg-center opacity-50"
// // // // // // // // // //           style={{
// // // // // // // // // //             backgroundImage:
// // // // // // // // // //               "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c83137?auto=format&fit=crop&w=1920&q=80')",
// // // // // // // // // //           }}
// // // // // // // // // //         />

// // // // // // // // // //         {/* Overlay */}
// // // // // // // // // //         <div className="absolute inset-0 bg-black/60" />

// // // // // // // // // //         {/* Content */}
// // // // // // // // // //         <div className="relative z-10 text-center px-6">
// // // // // // // // // //           <motion.h1
// // // // // // // // // //             initial={{
// // // // // // // // // //               opacity: 0,
// // // // // // // // // //               y: 80,
// // // // // // // // // //             }}
// // // // // // // // // //             animate={{
// // // // // // // // // //               opacity: 1,
// // // // // // // // // //               y: 0,
// // // // // // // // // //             }}
// // // // // // // // // //             transition={{
// // // // // // // // // //               duration: 1,
// // // // // // // // // //             }}
// // // // // // // // // //             className="text-6xl md:text-7xl font-bold text-white mb-6"
// // // // // // // // // //           >
// // // // // // // // // //             Industries We Serve
// // // // // // // // // //           </motion.h1>

// // // // // // // // // //           <motion.p
// // // // // // // // // //             initial={{
// // // // // // // // // //               opacity: 0,
// // // // // // // // // //               y: 40,
// // // // // // // // // //             }}
// // // // // // // // // //             animate={{
// // // // // // // // // //               opacity: 1,
// // // // // // // // // //               y: 0,
// // // // // // // // // //             }}
// // // // // // // // // //             transition={{
// // // // // // // // // //               duration: 1,
// // // // // // // // // //               delay: 0.2,
// // // // // // // // // //             }}
// // // // // // // // // //             className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto"
// // // // // // // // // //           >
// // // // // // // // // //             Innovative logistics solutions empowering industries worldwide.
// // // // // // // // // //           </motion.p>
// // // // // // // // // //         </div>
// // // // // // // // // //       </section>

// // // // // // // // // //       {/* INDUSTRIES SECTION */}
// // // // // // // // // //       <section
// // // // // // // // // //         ref={sectionRef}
// // // // // // // // // //         className="relative min-h-[350vh] bg-white py-40 overflow-hidden"
// // // // // // // // // //       >
// // // // // // // // // //         <div className="max-w-7xl mx-auto px-6">

// // // // // // // // // //           {/* Heading */}
// // // // // // // // // //           <motion.div
// // // // // // // // // //             initial={{
// // // // // // // // // //               opacity: 0,
// // // // // // // // // //               y: 80,
// // // // // // // // // //             }}
// // // // // // // // // //             whileInView={{
// // // // // // // // // //               opacity: 1,
// // // // // // // // // //               y: 0,
// // // // // // // // // //             }}
// // // // // // // // // //             transition={{
// // // // // // // // // //               duration: 1,
// // // // // // // // // //             }}
// // // // // // // // // //             viewport={{
// // // // // // // // // //               once: true,
// // // // // // // // // //             }}
// // // // // // // // // //             className="text-center mb-24"
// // // // // // // // // //           >
// // // // // // // // // //             <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
// // // // // // // // // //               Our Industries
// // // // // // // // // //             </h2>

// // // // // // // // // //             <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
// // // // // // // // // //               We provide world-class logistics and supply chain solutions
// // // // // // // // // //               tailored for diverse global industries.
// // // // // // // // // //             </p>
// // // // // // // // // //           </motion.div>

// // // // // // // // // //           {/* GRID */}
// // // // // // // // // //           <div
// // // // // // // // // //             className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 items-start"
// // // // // // // // // //             style={{
// // // // // // // // // //               perspective: "1200px",
// // // // // // // // // //             }}
// // // // // // // // // //           >
// // // // // // // // // //             {industries.slice(0, visibleCards).map((item, index) => (
// // // // // // // // // //               <motion.div
// // // // // // // // // //                 key={index}
// // // // // // // // // //                 initial={{
// // // // // // // // // //                   opacity: 0,
// // // // // // // // // //                   y: 140,
// // // // // // // // // //                   rotateX: 15,
// // // // // // // // // //                   scale: 0.9,
// // // // // // // // // //                   filter: "blur(12px)",
// // // // // // // // // //                 }}
// // // // // // // // // //                 whileInView={{
// // // // // // // // // //                   opacity: 1,
// // // // // // // // // //                   y: 0,
// // // // // // // // // //                   rotateX: 0,
// // // // // // // // // //                   scale: 1,
// // // // // // // // // //                   filter: "blur(0px)",
// // // // // // // // // //                 }}
// // // // // // // // // //                 transition={{
// // // // // // // // // //                   duration: 1,
// // // // // // // // // //                   delay: index * 0.12,
// // // // // // // // // //                   ease: [0.22, 1, 0.36, 1],
// // // // // // // // // //                 }}
// // // // // // // // // //                 viewport={{
// // // // // // // // // //                   once: true,
// // // // // // // // // //                   amount: 0.2,
// // // // // // // // // //                 }}
// // // // // // // // // //                 whileHover={{
// // // // // // // // // //                   y: -12,
// // // // // // // // // //                   scale: 1.03,
// // // // // // // // // //                   transition: {
// // // // // // // // // //                     duration: 0.3,
// // // // // // // // // //                   },
// // // // // // // // // //                 }}
// // // // // // // // // //                 className="group relative bg-gradient-to-br from-red-600 via-red-700 to-red-900 rounded-3xl p-10 shadow-2xl overflow-hidden"
// // // // // // // // // //               >
// // // // // // // // // //                 {/* Glow Effect */}
// // // // // // // // // //                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-white/10" />

// // // // // // // // // //                 {/* Icon */}
// // // // // // // // // //                 <div className="relative z-10 text-6xl mb-8">
// // // // // // // // // //                   {item.icon}
// // // // // // // // // //                 </div>

// // // // // // // // // //                 {/* Title */}
// // // // // // // // // //                 <h3 className="relative z-10 text-3xl font-bold text-white mb-6">
// // // // // // // // // //                   {item.title}
// // // // // // // // // //                 </h3>

// // // // // // // // // //                 {/* Description */}
// // // // // // // // // //                 <p className="relative z-10 text-red-100 leading-relaxed text-[16px]">
// // // // // // // // // //                   {item.desc}
// // // // // // // // // //                 </p>

// // // // // // // // // //                 {/* Decorative Blur Circle */}
// // // // // // // // // //                 <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
// // // // // // // // // //               </motion.div>
// // // // // // // // // //             ))}
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </section>

// // // // // // // // // //       {/* FAQ SECTION - NEW */}
// // // // // // // // // //       <section className="py-24 bg-gray-50">
// // // // // // // // // //         <div className="max-w-4xl mx-auto px-6">
// // // // // // // // // //           {/* FAQ Header */}
// // // // // // // // // //           <motion.div
// // // // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // //             transition={{ duration: 0.6 }}
// // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // //             className="text-center mb-12"
// // // // // // // // // //           >
// // // // // // // // // //             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
// // // // // // // // // //               Frequently Asked <span className="text-red-600">Questions</span>
// // // // // // // // // //             </h2>
// // // // // // // // // //             <p className="text-gray-500 text-base max-w-2xl mx-auto">
// // // // // // // // // //               Find answers to common industry questions, ensuring clarity on our services, processes, and solutions.
// // // // // // // // // //             </p>
// // // // // // // // // //             <div className="w-20 h-0.5 bg-red-600 mx-auto mt-6" />
// // // // // // // // // //           </motion.div>

// // // // // // // // // //           {/* FAQ Accordion */}
// // // // // // // // // //           <motion.div
// // // // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // //             transition={{ duration: 0.6, delay: 0.2 }}
// // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // //             className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8"
// // // // // // // // // //           >
// // // // // // // // // //             {faqs.map((faq, idx) => (
// // // // // // // // // //               <AccordionItem
// // // // // // // // // //                 key={idx}
// // // // // // // // // //                 question={faq.question}
// // // // // // // // // //                 answer={faq.answer}
// // // // // // // // // //                 isOpen={openFaqIndex === idx}
// // // // // // // // // //                 onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
// // // // // // // // // //               />
// // // // // // // // // //             ))}
// // // // // // // // // //           </motion.div>

// // // // // // // // // //           {/* Contact CTA */}
// // // // // // // // // //           <motion.div
// // // // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // //             transition={{ duration: 0.6, delay: 0.4 }}
// // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // //             className="mt-10 text-center"
// // // // // // // // // //           >
// // // // // // // // // //             <p className="text-gray-500 text-sm mb-4">
// // // // // // // // // //               Still have questions? We're here to help.
// // // // // // // // // //             </p>
// // // // // // // // // //             <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-md">
// // // // // // // // // //               Contact Our Team →
// // // // // // // // // //             </button>
// // // // // // // // // //           </motion.div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </section>

// // // // // // // // // //       {/* NEXT SECTION */}
// // // // // // // // // //       <section className="h-screen bg-black flex items-center justify-center">
// // // // // // // // // //         <motion.h2
// // // // // // // // // //           initial={{
// // // // // // // // // //             opacity: 0,
// // // // // // // // // //             y: 80,
// // // // // // // // // //           }}
// // // // // // // // // //           whileInView={{
// // // // // // // // // //             opacity: 1,
// // // // // // // // // //             y: 0,
// // // // // // // // // //           }}
// // // // // // // // // //           transition={{
// // // // // // // // // //             duration: 1,
// // // // // // // // // //           }}
// // // // // // // // // //           viewport={{
// // // // // // // // // //             once: true,
// // // // // // // // // //           }}
// // // // // // // // // //           className="text-white text-5xl md:text-6xl font-bold"
// // // // // // // // // //         >
// // // // // // // // // //           Next Section
// // // // // // // // // //         </motion.h2>
// // // // // // // // // //       </section>
// // // // // // // // // //     </>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default Industries;












// // // // // // // // // import { motion, useScroll, useTransform } from "framer-motion";
// // // // // // // // // import { useEffect, useRef, useState } from "react";

// // // // // // // // // const industries = [
// // // // // // // // //   {
// // // // // // // // //     title: "Pharmaceuticals",
// // // // // // // // //     icon: "💊",
// // // // // // // // //     desc: "The pharmaceutical industry requires highly customized supply chain solutions.",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     title: "Chemicals",
// // // // // // // // //     icon: "🧪",
// // // // // // // // //     desc: "We follow IATA guidelines for chemical imports and exports.",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     title: "Textiles",
// // // // // // // // //     icon: "🧵",
// // // // // // // // //     desc: "We optimize your supply chain through distribution services.",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     title: "Energy",
// // // // // // // // //     icon: "⚡",
// // // // // // // // //     desc: "We support renewable energy logistics globally.",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     title: "Automobile",
// // // // // // // // //     icon: "🚗",
// // // // // // // // //     desc: "Flexible solutions for dynamic automobile trends.",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     title: "Packaging",
// // // // // // // // //     icon: "📦",
// // // // // // // // //     desc: "Customized packaging logistics worldwide.",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     title: "Time Critical Cargo",
// // // // // // // // //     icon: "⏱️",
// // // // // // // // //     desc: "Fast movement for urgent cargo deliveries.",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     title: "Electronics",
// // // // // // // // //     icon: "📱",
// // // // // // // // //     desc: "Safe and efficient transport of electronics.",
// // // // // // // // //   },
// // // // // // // // // ];

// // // // // // // // // // Accordion Item Component for FAQ
// // // // // // // // // const AccordionItem = ({ question, answer, isOpen, onClick }) => {
// // // // // // // // //   return (
// // // // // // // // //     <div className="border-b border-gray-200 last:border-b-0">
// // // // // // // // //       <button
// // // // // // // // //         onClick={onClick}
// // // // // // // // //         className="w-full flex items-center justify-between py-5 text-left hover:text-red-600 transition-colors"
// // // // // // // // //       >
// // // // // // // // //         <span className="text-gray-800 font-medium text-base">{question}</span>
// // // // // // // // //         <motion.span
// // // // // // // // //           animate={{ rotate: isOpen ? 180 : 0 }}
// // // // // // // // //           transition={{ duration: 0.3 }}
// // // // // // // // //           className="text-red-600 text-xl"
// // // // // // // // //         >
// // // // // // // // //           ▼
// // // // // // // // //         </motion.span>
// // // // // // // // //       </button>
// // // // // // // // //       <motion.div
// // // // // // // // //         initial={{ height: 0, opacity: 0 }}
// // // // // // // // //         animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
// // // // // // // // //         transition={{ duration: 0.3 }}
// // // // // // // // //         className="overflow-hidden"
// // // // // // // // //       >
// // // // // // // // //         <div className="pb-5 text-gray-500 text-sm leading-relaxed">
// // // // // // // // //           {answer}
// // // // // // // // //         </div>
// // // // // // // // //       </motion.div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // // Parallax Image Component - With working image
// // // // // // // // // const ParallaxImageSection = () => {
// // // // // // // // //   const containerRef = useRef(null);
// // // // // // // // //   const { scrollYProgress } = useScroll({
// // // // // // // // //     target: containerRef,
// // // // // // // // //     offset: ["start end", "end start"],
// // // // // // // // //   });

// // // // // // // // //   // Image position changes based on scroll
// // // // // // // // //   const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

// // // // // // // // //   return (
// // // // // // // // //     <section 
// // // // // // // // //       ref={containerRef}
// // // // // // // // //       className="relative h-[150vh] overflow-hidden"
// // // // // // // // //     >
// // // // // // // // //       {/* Sticky container */}
// // // // // // // // //       <div className="sticky top-0 h-screen overflow-hidden">
        
// // // // // // // // //         {/* Parallax Image */}
// // // // // // // // //         <motion.div
// // // // // // // // //           style={{ y: imageY }}
// // // // // // // // //           className="absolute inset-0 w-full h-[160%]"
// // // // // // // // //         >
// // // // // // // // //           <img 
// // // // // // // // //             src="https://images.pexels.com/photos/2883523/pexels-photo-2883523.jpeg?auto=compress&cs=tinysrgb&w=1600"
// // // // // // // // //             alt="Container Ship Logistics"
// // // // // // // // //             className="w-full h-full object-cover"
// // // // // // // // //             loading="eager"
// // // // // // // // //           />
// // // // // // // // //         </motion.div>

// // // // // // // // //         {/* Dark Overlay */}
// // // // // // // // //         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

// // // // // // // // //         {/* Content Overlay */}
// // // // // // // // //         <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
// // // // // // // // //           {/* Protective Icon */}
// // // // // // // // //           <motion.div
// // // // // // // // //             initial={{ opacity: 0, scale: 0 }}
// // // // // // // // //             whileInView={{ opacity: 1, scale: 1 }}
// // // // // // // // //             transition={{ duration: 0.6 }}
// // // // // // // // //             viewport={{ once: true }}
// // // // // // // // //             className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm"
// // // // // // // // //           >
// // // // // // // // //             <span className="text-4xl">🛡️</span>
// // // // // // // // //           </motion.div>

// // // // // // // // //           {/* Heading */}
// // // // // // // // //           <motion.h2
// // // // // // // // //             initial={{ opacity: 0, y: 50 }}
// // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // //             transition={{ duration: 0.8 }}
// // // // // // // // //             viewport={{ once: true }}
// // // // // // // // //             className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
// // // // // // // // //           >
// // // // // // // // //             Protecting What Matters Most
// // // // // // // // //           </motion.h2>

// // // // // // // // //           {/* Subtext */}
// // // // // // // // //           <motion.p
// // // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // //             transition={{ duration: 0.8, delay: 0.2 }}
// // // // // // // // //             viewport={{ once: true }}
// // // // // // // // //             className="text-lg text-white/80 max-w-2xl mb-8"
// // // // // // // // //           >
// // // // // // // // //             Get in touch to ensure safe and temperature-stable transit for your sensitive products.
// // // // // // // // //           </motion.p>

// // // // // // // // //           {/* Button */}
// // // // // // // // //           <motion.button
// // // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // //             transition={{ duration: 0.8, delay: 0.4 }}
// // // // // // // // //             viewport={{ once: true }}
// // // // // // // // //             whileHover={{ scale: 1.05 }}
// // // // // // // // //             whileTap={{ scale: 0.95 }}
// // // // // // // // //             className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300"
// // // // // // // // //           >
// // // // // // // // //             Contact Us Today →
// // // // // // // // //           </motion.button>

// // // // // // // // //           {/* Scroll Hint */}
// // // // // // // // //           <motion.div
// // // // // // // // //             initial={{ opacity: 0 }}
// // // // // // // // //             whileInView={{ opacity: 1 }}
// // // // // // // // //             transition={{ duration: 0.8, delay: 0.6 }}
// // // // // // // // //             viewport={{ once: true }}
// // // // // // // // //             className="absolute bottom-8 text-white/50 text-xs flex items-center gap-2"
// // // // // // // // //           >
// // // // // // // // //             <span>Scroll to explore</span>
// // // // // // // // //             <span className="text-lg">↓</span>
// // // // // // // // //           </motion.div>
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </section>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // const Industries = () => {
// // // // // // // // //   const [visibleCards, setVisibleCards] = useState(2);
// // // // // // // // //   const [openFaqIndex, setOpenFaqIndex] = useState(null);
// // // // // // // // //   const sectionRef = useRef(null);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const handleScroll = () => {
// // // // // // // // //       const section = sectionRef.current;

// // // // // // // // //       if (!section) return;

// // // // // // // // //       const rect = section.getBoundingClientRect();

// // // // // // // // //       // Scroll progress
// // // // // // // // //       const progress =
// // // // // // // // //         (window.innerHeight - rect.top) /
// // // // // // // // //         (rect.height + window.innerHeight);

// // // // // // // // //       // Reveal cards in batches
// // // // // // // // //       if (progress > 0.15 && visibleCards < 4) {
// // // // // // // // //         setVisibleCards(4);
// // // // // // // // //       }

// // // // // // // // //       if (progress > 0.35 && visibleCards < 6) {
// // // // // // // // //         setVisibleCards(6);
// // // // // // // // //       }

// // // // // // // // //       if (progress > 0.55 && visibleCards < 8) {
// // // // // // // // //         setVisibleCards(8);
// // // // // // // // //       }
// // // // // // // // //     };

// // // // // // // // //     window.addEventListener("scroll", handleScroll);

// // // // // // // // //     return () => {
// // // // // // // // //       window.removeEventListener("scroll", handleScroll);
// // // // // // // // //     };
// // // // // // // // //   }, [visibleCards]);

// // // // // // // // //   const faqs = [
// // // // // // // // //     {
// // // // // // // // //       question: "What industries do you serve?",
// // // // // // // // //       answer: "We serve a wide range of industries including Pharmaceuticals, Chemicals, Textiles, Energy, Automobile, Packaging, Time Critical Cargo, and Electronics. Our logistics solutions are tailored to meet the unique demands of each sector."
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       question: "How do you handle temperature-sensitive shipments?",
// // // // // // // // //       answer: "We use advanced temperature-controlled packaging solutions, real-time monitoring systems, and specialized handling procedures to ensure temperature-sensitive products remain within their required temperature range throughout the entire shipping process."
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       question: "What sets your logistics apart?",
// // // // // // // // //       answer: "Our commitment to innovation, real-time tracking, dedicated customer support, global network, and customized solutions tailored to each industry's specific needs set us apart from traditional logistics providers."
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       question: "How do you ensure compliance with regulations?",
// // // // // // // // //       answer: "We strictly follow IATA guidelines, international shipping regulations, and industry-specific compliance standards. Our team undergoes regular training to stay updated with the latest regulatory requirements."
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       question: "Is there customer support available for Penta Kuhl users?",
// // // // // // // // //       answer: "Yes, we offer 24/7 customer support to assist with any questions or issues regarding your temperature-controlled shipments. Our dedicated team is available via phone, email, and live chat to provide real-time assistance and monitoring."
// // // // // // // // //     }
// // // // // // // // //   ];

// // // // // // // // //   return (
// // // // // // // // //     <>
// // // // // // // // //       {/* HERO SECTION */}
// // // // // // // // //       <section className="relative h-screen bg-black overflow-hidden flex items-center justify-center">
        
// // // // // // // // //         {/* Background */}
// // // // // // // // //         <div
// // // // // // // // //           className="absolute inset-0 bg-cover bg-center opacity-50"
// // // // // // // // //           style={{
// // // // // // // // //             backgroundImage:
// // // // // // // // //               "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c83137?auto=format&fit=crop&w=1920&q=80')",
// // // // // // // // //           }}
// // // // // // // // //         />

// // // // // // // // //         {/* Overlay */}
// // // // // // // // //         <div className="absolute inset-0 bg-black/60" />

// // // // // // // // //         {/* Content */}
// // // // // // // // //         <div className="relative z-10 text-center px-6">
// // // // // // // // //           <motion.h1
// // // // // // // // //             initial={{
// // // // // // // // //               opacity: 0,
// // // // // // // // //               y: 80,
// // // // // // // // //             }}
// // // // // // // // //             animate={{
// // // // // // // // //               opacity: 1,
// // // // // // // // //               y: 0,
// // // // // // // // //             }}
// // // // // // // // //             transition={{
// // // // // // // // //               duration: 1,
// // // // // // // // //             }}
// // // // // // // // //             className="text-6xl md:text-7xl font-bold text-white mb-6"
// // // // // // // // //           >
// // // // // // // // //             Industries We Serve
// // // // // // // // //           </motion.h1>

// // // // // // // // //           <motion.p
// // // // // // // // //             initial={{
// // // // // // // // //               opacity: 0,
// // // // // // // // //               y: 40,
// // // // // // // // //             }}
// // // // // // // // //             animate={{
// // // // // // // // //               opacity: 1,
// // // // // // // // //               y: 0,
// // // // // // // // //             }}
// // // // // // // // //             transition={{
// // // // // // // // //               duration: 1,
// // // // // // // // //               delay: 0.2,
// // // // // // // // //             }}
// // // // // // // // //             className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto"
// // // // // // // // //           >
// // // // // // // // //             Innovative logistics solutions empowering industries worldwide.
// // // // // // // // //           </motion.p>
// // // // // // // // //         </div>
// // // // // // // // //       </section>

// // // // // // // // //       {/* INDUSTRIES SECTION */}
// // // // // // // // //       <section
// // // // // // // // //         ref={sectionRef}
// // // // // // // // //         className="relative min-h-[350vh] bg-white py-40 overflow-hidden"
// // // // // // // // //       >
// // // // // // // // //         <div className="max-w-7xl mx-auto px-6">

// // // // // // // // //           {/* Heading */}
// // // // // // // // //           <motion.div
// // // // // // // // //             initial={{
// // // // // // // // //               opacity: 0,
// // // // // // // // //               y: 80,
// // // // // // // // //             }}
// // // // // // // // //             whileInView={{
// // // // // // // // //               opacity: 1,
// // // // // // // // //               y: 0,
// // // // // // // // //             }}
// // // // // // // // //             transition={{
// // // // // // // // //               duration: 1,
// // // // // // // // //             }}
// // // // // // // // //             viewport={{
// // // // // // // // //               once: true,
// // // // // // // // //             }}
// // // // // // // // //             className="text-center mb-24"
// // // // // // // // //           >
// // // // // // // // //             <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
// // // // // // // // //               Our Industries
// // // // // // // // //             </h2>

// // // // // // // // //             <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
// // // // // // // // //               We provide world-class logistics and supply chain solutions
// // // // // // // // //               tailored for diverse global industries.
// // // // // // // // //             </p>
// // // // // // // // //           </motion.div>

// // // // // // // // //           {/* GRID */}
// // // // // // // // //           <div
// // // // // // // // //             className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 items-start"
// // // // // // // // //             style={{
// // // // // // // // //               perspective: "1200px",
// // // // // // // // //             }}
// // // // // // // // //           >
// // // // // // // // //             {industries.slice(0, visibleCards).map((item, index) => (
// // // // // // // // //               <motion.div
// // // // // // // // //                 key={index}
// // // // // // // // //                 initial={{
// // // // // // // // //                   opacity: 0,
// // // // // // // // //                   y: 140,
// // // // // // // // //                   rotateX: 15,
// // // // // // // // //                   scale: 0.9,
// // // // // // // // //                   filter: "blur(12px)",
// // // // // // // // //                 }}
// // // // // // // // //                 whileInView={{
// // // // // // // // //                   opacity: 1,
// // // // // // // // //                   y: 0,
// // // // // // // // //                   rotateX: 0,
// // // // // // // // //                   scale: 1,
// // // // // // // // //                   filter: "blur(0px)",
// // // // // // // // //                 }}
// // // // // // // // //                 transition={{
// // // // // // // // //                   duration: 1,
// // // // // // // // //                   delay: index * 0.12,
// // // // // // // // //                   ease: [0.22, 1, 0.36, 1],
// // // // // // // // //                 }}
// // // // // // // // //                 viewport={{
// // // // // // // // //                   once: true,
// // // // // // // // //                   amount: 0.2,
// // // // // // // // //                 }}
// // // // // // // // //                 whileHover={{
// // // // // // // // //                   y: -12,
// // // // // // // // //                   scale: 1.03,
// // // // // // // // //                   transition: {
// // // // // // // // //                     duration: 0.3,
// // // // // // // // //                   },
// // // // // // // // //                 }}
// // // // // // // // //                 className="group relative bg-gradient-to-br from-red-600 via-red-700 to-red-900 rounded-3xl p-10 shadow-2xl overflow-hidden"
// // // // // // // // //               >
// // // // // // // // //                 {/* Glow Effect */}
// // // // // // // // //                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-white/10" />

// // // // // // // // //                 {/* Icon */}
// // // // // // // // //                 <div className="relative z-10 text-6xl mb-8">
// // // // // // // // //                   {item.icon}
// // // // // // // // //                 </div>

// // // // // // // // //                 {/* Title */}
// // // // // // // // //                 <h3 className="relative z-10 text-3xl font-bold text-white mb-6">
// // // // // // // // //                   {item.title}
// // // // // // // // //                 </h3>

// // // // // // // // //                 {/* Description */}
// // // // // // // // //                 <p className="relative z-10 text-red-100 leading-relaxed text-[16px]">
// // // // // // // // //                   {item.desc}
// // // // // // // // //                 </p>

// // // // // // // // //                 {/* Decorative Blur Circle */}
// // // // // // // // //                 <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
// // // // // // // // //               </motion.div>
// // // // // // // // //             ))}
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </section>

// // // // // // // // //       {/* FAQ SECTION */}
// // // // // // // // //       <section className="py-24 bg-gray-50">
// // // // // // // // //         <div className="max-w-4xl mx-auto px-6">
// // // // // // // // //           {/* FAQ Header */}
// // // // // // // // //           <motion.div
// // // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // //             transition={{ duration: 0.6 }}
// // // // // // // // //             viewport={{ once: true }}
// // // // // // // // //             className="text-center mb-12"
// // // // // // // // //           >
// // // // // // // // //             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
// // // // // // // // //               Frequently Asked <span className="text-red-600">Questions</span>
// // // // // // // // //             </h2>
// // // // // // // // //             <p className="text-gray-500 text-base max-w-2xl mx-auto">
// // // // // // // // //               Find answers to common industry questions, ensuring clarity on our services, processes, and solutions.
// // // // // // // // //             </p>
// // // // // // // // //             <div className="w-20 h-0.5 bg-red-600 mx-auto mt-6" />
// // // // // // // // //           </motion.div>

// // // // // // // // //           {/* FAQ Accordion */}
// // // // // // // // //           <motion.div
// // // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // //             transition={{ duration: 0.6, delay: 0.2 }}
// // // // // // // // //             viewport={{ once: true }}
// // // // // // // // //             className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8"
// // // // // // // // //           >
// // // // // // // // //             {faqs.map((faq, idx) => (
// // // // // // // // //               <AccordionItem
// // // // // // // // //                 key={idx}
// // // // // // // // //                 question={faq.question}
// // // // // // // // //                 answer={faq.answer}
// // // // // // // // //                 isOpen={openFaqIndex === idx}
// // // // // // // // //                 onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
// // // // // // // // //               />
// // // // // // // // //             ))}
// // // // // // // // //           </motion.div>
// // // // // // // // //         </div>
// // // // // // // // //       </section>

// // // // // // // // //       {/* PARALLAX IMAGE SECTION */}
// // // // // // // // //       <ParallaxImageSection />

// // // // // // // // //       {/* NEXT SECTION */}
// // // // // // // // //       <section className="h-screen bg-black flex items-center justify-center">
// // // // // // // // //         <motion.h2
// // // // // // // // //           initial={{
// // // // // // // // //             opacity: 0,
// // // // // // // // //             y: 80,
// // // // // // // // //           }}
// // // // // // // // //           whileInView={{
// // // // // // // // //             opacity: 1,
// // // // // // // // //             y: 0,
// // // // // // // // //           }}
// // // // // // // // //           transition={{
// // // // // // // // //             duration: 1,
// // // // // // // // //           }}
// // // // // // // // //           viewport={{
// // // // // // // // //             once: true,
// // // // // // // // //           }}
// // // // // // // // //           className="text-white text-5xl md:text-6xl font-bold"
// // // // // // // // //         >
// // // // // // // // //           Next Section
// // // // // // // // //         </motion.h2>
// // // // // // // // //       </section>
// // // // // // // // //     </>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Industries;











// // // // // // // // import { motion, useScroll, useTransform } from "framer-motion";
// // // // // // // // import { useEffect, useRef, useState } from "react";

// // // // // // // // const industries = [
// // // // // // // //   {
// // // // // // // //     title: "Pharmaceuticals",
// // // // // // // //     icon: "💊",
// // // // // // // //     desc: "The pharmaceutical industry requires highly customized supply chain solutions.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     title: "Chemicals",
// // // // // // // //     icon: "🧪",
// // // // // // // //     desc: "We follow IATA guidelines for chemical imports and exports.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     title: "Textiles",
// // // // // // // //     icon: "🧵",
// // // // // // // //     desc: "We optimize your supply chain through distribution services.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     title: "Energy",
// // // // // // // //     icon: "⚡",
// // // // // // // //     desc: "We support renewable energy logistics globally.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     title: "Automobile",
// // // // // // // //     icon: "🚗",
// // // // // // // //     desc: "Flexible solutions for dynamic automobile trends.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     title: "Packaging",
// // // // // // // //     icon: "📦",
// // // // // // // //     desc: "Customized packaging logistics worldwide.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     title: "Time Critical Cargo",
// // // // // // // //     icon: "⏱️",
// // // // // // // //     desc: "Fast movement for urgent cargo deliveries.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     title: "Electronics",
// // // // // // // //     icon: "📱",
// // // // // // // //     desc: "Safe and efficient transport of electronics.",
// // // // // // // //   },
// // // // // // // // ];

// // // // // // // // // Accordion Item Component for FAQ
// // // // // // // // const AccordionItem = ({ question, answer, isOpen, onClick }) => {
// // // // // // // //   return (
// // // // // // // //     <div className="border-b border-gray-200 last:border-b-0">
// // // // // // // //       <button
// // // // // // // //         onClick={onClick}
// // // // // // // //         className="w-full flex items-center justify-between py-5 text-left hover:text-red-600 transition-colors"
// // // // // // // //       >
// // // // // // // //         <span className="text-gray-800 font-medium text-base">{question}</span>
// // // // // // // //         <motion.span
// // // // // // // //           animate={{ rotate: isOpen ? 180 : 0 }}
// // // // // // // //           transition={{ duration: 0.3 }}
// // // // // // // //           className="text-red-600 text-xl"
// // // // // // // //         >
// // // // // // // //           ▼
// // // // // // // //         </motion.span>
// // // // // // // //       </button>
// // // // // // // //       <motion.div
// // // // // // // //         initial={{ height: 0, opacity: 0 }}
// // // // // // // //         animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
// // // // // // // //         transition={{ duration: 0.3 }}
// // // // // // // //         className="overflow-hidden"
// // // // // // // //       >
// // // // // // // //         <div className="pb-5 text-gray-500 text-sm leading-relaxed">
// // // // // // // //           {answer}
// // // // // // // //         </div>
// // // // // // // //       </motion.div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // // Parallax Image Component - With white background
// // // // // // // // const ParallaxImageSection = () => {
// // // // // // // //   const containerRef = useRef(null);
// // // // // // // //   const { scrollYProgress } = useScroll({
// // // // // // // //     target: containerRef,
// // // // // // // //     offset: ["start end", "end start"],
// // // // // // // //   });

// // // // // // // //   // Image position changes based on scroll
// // // // // // // //   const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

// // // // // // // //   return (
// // // // // // // //     <section 
// // // // // // // //       ref={containerRef}
// // // // // // // //       className="relative h-[150vh] bg-white overflow-hidden"
// // // // // // // //     >
// // // // // // // //       {/* Sticky container */}
// // // // // // // //       <div className="sticky top-0 h-screen overflow-hidden">
        
// // // // // // // //         {/* Parallax Image */}
// // // // // // // //         <motion.div
// // // // // // // //           style={{ y: imageY }}
// // // // // // // //           className="absolute inset-0 w-full h-[160%]"
// // // // // // // //         >
// // // // // // // //           <img 
// // // // // // // //             src="https://images.pexels.com/photos/2883523/pexels-photo-2883523.jpeg?auto=compress&cs=tinysrgb&w=1600"
// // // // // // // //             alt="Container Ship Logistics"
// // // // // // // //             className="w-full h-full object-cover"
// // // // // // // //             loading="eager"
// // // // // // // //           />
// // // // // // // //         </motion.div>

// // // // // // // //         {/* Dark Overlay for text readability */}
// // // // // // // //         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

// // // // // // // //         {/* Content Overlay */}
// // // // // // // //         <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
// // // // // // // //           {/* Protective Icon */}
// // // // // // // //           <motion.div
// // // // // // // //             initial={{ opacity: 0, scale: 0 }}
// // // // // // // //             whileInView={{ opacity: 1, scale: 1 }}
// // // // // // // //             transition={{ duration: 0.6 }}
// // // // // // // //             viewport={{ once: true }}
// // // // // // // //             className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm"
// // // // // // // //           >
// // // // // // // //             <span className="text-4xl">🛡️</span>
// // // // // // // //           </motion.div>

// // // // // // // //           {/* Heading */}
// // // // // // // //           <motion.h2
// // // // // // // //             initial={{ opacity: 0, y: 50 }}
// // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // //             transition={{ duration: 0.8 }}
// // // // // // // //             viewport={{ once: true }}
// // // // // // // //             className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
// // // // // // // //           >
// // // // // // // //             Protecting What Matters Most
// // // // // // // //           </motion.h2>

// // // // // // // //           {/* Subtext */}
// // // // // // // //           <motion.p
// // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // //             transition={{ duration: 0.8, delay: 0.2 }}
// // // // // // // //             viewport={{ once: true }}
// // // // // // // //             className="text-lg text-white/80 max-w-2xl mb-8"
// // // // // // // //           >
// // // // // // // //             Get in touch to ensure safe and temperature-stable transit for your sensitive products.
// // // // // // // //           </motion.p>

// // // // // // // //           {/* Button */}
// // // // // // // //           <motion.button
// // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // //             transition={{ duration: 0.8, delay: 0.4 }}
// // // // // // // //             viewport={{ once: true }}
// // // // // // // //             whileHover={{ scale: 1.05 }}
// // // // // // // //             whileTap={{ scale: 0.95 }}
// // // // // // // //             className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300"
// // // // // // // //           >
// // // // // // // //             Contact Us Today →
// // // // // // // //           </motion.button>

// // // // // // // //           {/* Scroll Hint */}
// // // // // // // //           <motion.div
// // // // // // // //             initial={{ opacity: 0 }}
// // // // // // // //             whileInView={{ opacity: 1 }}
// // // // // // // //             transition={{ duration: 0.8, delay: 0.6 }}
// // // // // // // //             viewport={{ once: true }}
// // // // // // // //             className="absolute bottom-8 text-white/50 text-xs flex items-center gap-2"
// // // // // // // //           >
// // // // // // // //             <span>Scroll to explore</span>
// // // // // // // //             <span className="text-lg">↓</span>
// // // // // // // //           </motion.div>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </section>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // const Industries = () => {
// // // // // // // //   const [visibleCards, setVisibleCards] = useState(2);
// // // // // // // //   const [openFaqIndex, setOpenFaqIndex] = useState(null);
// // // // // // // //   const sectionRef = useRef(null);

// // // // // // // //   useEffect(() => {
// // // // // // // //     const handleScroll = () => {
// // // // // // // //       const section = sectionRef.current;

// // // // // // // //       if (!section) return;

// // // // // // // //       const rect = section.getBoundingClientRect();

// // // // // // // //       // Scroll progress
// // // // // // // //       const progress =
// // // // // // // //         (window.innerHeight - rect.top) /
// // // // // // // //         (rect.height + window.innerHeight);

// // // // // // // //       // Reveal cards in batches
// // // // // // // //       if (progress > 0.15 && visibleCards < 4) {
// // // // // // // //         setVisibleCards(4);
// // // // // // // //       }

// // // // // // // //       if (progress > 0.35 && visibleCards < 6) {
// // // // // // // //         setVisibleCards(6);
// // // // // // // //       }

// // // // // // // //       if (progress > 0.55 && visibleCards < 8) {
// // // // // // // //         setVisibleCards(8);
// // // // // // // //       }
// // // // // // // //     };

// // // // // // // //     window.addEventListener("scroll", handleScroll);

// // // // // // // //     return () => {
// // // // // // // //       window.removeEventListener("scroll", handleScroll);
// // // // // // // //     };
// // // // // // // //   }, [visibleCards]);

// // // // // // // //   const faqs = [
// // // // // // // //     {
// // // // // // // //       question: "What industries do you serve?",
// // // // // // // //       answer: "We serve a wide range of industries including Pharmaceuticals, Chemicals, Textiles, Energy, Automobile, Packaging, Time Critical Cargo, and Electronics. Our logistics solutions are tailored to meet the unique demands of each sector."
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       question: "How do you handle temperature-sensitive shipments?",
// // // // // // // //       answer: "We use advanced temperature-controlled packaging solutions, real-time monitoring systems, and specialized handling procedures to ensure temperature-sensitive products remain within their required temperature range throughout the entire shipping process."
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       question: "What sets your logistics apart?",
// // // // // // // //       answer: "Our commitment to innovation, real-time tracking, dedicated customer support, global network, and customized solutions tailored to each industry's specific needs set us apart from traditional logistics providers."
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       question: "How do you ensure compliance with regulations?",
// // // // // // // //       answer: "We strictly follow IATA guidelines, international shipping regulations, and industry-specific compliance standards. Our team undergoes regular training to stay updated with the latest regulatory requirements."
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       question: "Is there customer support available for Penta Kuhl users?",
// // // // // // // //       answer: "Yes, we offer 24/7 customer support to assist with any questions or issues regarding your temperature-controlled shipments. Our dedicated team is available via phone, email, and live chat to provide real-time assistance and monitoring."
// // // // // // // //     }
// // // // // // // //   ];

// // // // // // // //   return (
// // // // // // // //     <>
// // // // // // // //       {/* HERO SECTION */}
// // // // // // // //       <section className="relative h-screen bg-black overflow-hidden flex items-center justify-center">
        
// // // // // // // //         {/* Background */}
// // // // // // // //         <div
// // // // // // // //           className="absolute inset-0 bg-cover bg-center opacity-50"
// // // // // // // //           style={{
// // // // // // // //             backgroundImage:
// // // // // // // //               "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c83137?auto=format&fit=crop&w=1920&q=80')",
// // // // // // // //           }}
// // // // // // // //         />

// // // // // // // //         {/* Overlay */}
// // // // // // // //         <div className="absolute inset-0 bg-black/60" />

// // // // // // // //         {/* Content */}
// // // // // // // //         <div className="relative z-10 text-center px-6">
// // // // // // // //           <motion.h1
// // // // // // // //             initial={{
// // // // // // // //               opacity: 0,
// // // // // // // //               y: 80,
// // // // // // // //             }}
// // // // // // // //             animate={{
// // // // // // // //               opacity: 1,
// // // // // // // //               y: 0,
// // // // // // // //             }}
// // // // // // // //             transition={{
// // // // // // // //               duration: 1,
// // // // // // // //             }}
// // // // // // // //             className="text-6xl md:text-7xl font-bold text-white mb-6"
// // // // // // // //           >
// // // // // // // //             Industries We Serve
// // // // // // // //           </motion.h1>

// // // // // // // //           <motion.p
// // // // // // // //             initial={{
// // // // // // // //               opacity: 0,
// // // // // // // //               y: 40,
// // // // // // // //             }}
// // // // // // // //             animate={{
// // // // // // // //               opacity: 1,
// // // // // // // //               y: 0,
// // // // // // // //             }}
// // // // // // // //             transition={{
// // // // // // // //               duration: 1,
// // // // // // // //               delay: 0.2,
// // // // // // // //             }}
// // // // // // // //             className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto"
// // // // // // // //           >
// // // // // // // //             Innovative logistics solutions empowering industries worldwide.
// // // // // // // //           </motion.p>
// // // // // // // //         </div>
// // // // // // // //       </section>

// // // // // // // //       {/* INDUSTRIES SECTION */}
// // // // // // // //       <section
// // // // // // // //         ref={sectionRef}
// // // // // // // //         className="relative min-h-[350vh] bg-white py-40 overflow-hidden"
// // // // // // // //       >
// // // // // // // //         <div className="max-w-7xl mx-auto px-6">

// // // // // // // //           {/* Heading */}
// // // // // // // //           <motion.div
// // // // // // // //             initial={{
// // // // // // // //               opacity: 0,
// // // // // // // //               y: 80,
// // // // // // // //             }}
// // // // // // // //             whileInView={{
// // // // // // // //               opacity: 1,
// // // // // // // //               y: 0,
// // // // // // // //             }}
// // // // // // // //             transition={{
// // // // // // // //               duration: 1,
// // // // // // // //             }}
// // // // // // // //             viewport={{
// // // // // // // //               once: true,
// // // // // // // //             }}
// // // // // // // //             className="text-center mb-24"
// // // // // // // //           >
// // // // // // // //             <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
// // // // // // // //               Our Industries
// // // // // // // //             </h2>

// // // // // // // //             <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
// // // // // // // //               We provide world-class logistics and supply chain solutions
// // // // // // // //               tailored for diverse global industries.
// // // // // // // //             </p>
// // // // // // // //           </motion.div>

// // // // // // // //           {/* GRID */}
// // // // // // // //           <div
// // // // // // // //             className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 items-start"
// // // // // // // //             style={{
// // // // // // // //               perspective: "1200px",
// // // // // // // //             }}
// // // // // // // //           >
// // // // // // // //             {industries.slice(0, visibleCards).map((item, index) => (
// // // // // // // //               <motion.div
// // // // // // // //                 key={index}
// // // // // // // //                 initial={{
// // // // // // // //                   opacity: 0,
// // // // // // // //                   y: 140,
// // // // // // // //                   rotateX: 15,
// // // // // // // //                   scale: 0.9,
// // // // // // // //                   filter: "blur(12px)",
// // // // // // // //                 }}
// // // // // // // //                 whileInView={{
// // // // // // // //                   opacity: 1,
// // // // // // // //                   y: 0,
// // // // // // // //                   rotateX: 0,
// // // // // // // //                   scale: 1,
// // // // // // // //                   filter: "blur(0px)",
// // // // // // // //                 }}
// // // // // // // //                 transition={{
// // // // // // // //                   duration: 1,
// // // // // // // //                   delay: index * 0.12,
// // // // // // // //                   ease: [0.22, 1, 0.36, 1],
// // // // // // // //                 }}
// // // // // // // //                 viewport={{
// // // // // // // //                   once: true,
// // // // // // // //                   amount: 0.2,
// // // // // // // //                 }}
// // // // // // // //                 whileHover={{
// // // // // // // //                   y: -12,
// // // // // // // //                   scale: 1.03,
// // // // // // // //                   transition: {
// // // // // // // //                     duration: 0.3,
// // // // // // // //                   },
// // // // // // // //                 }}
// // // // // // // //                 className="group relative bg-gradient-to-br from-red-600 via-red-700 to-red-900 rounded-3xl p-10 shadow-2xl overflow-hidden"
// // // // // // // //               >
// // // // // // // //                 {/* Glow Effect */}
// // // // // // // //                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-white/10" />

// // // // // // // //                 {/* Icon */}
// // // // // // // //                 <div className="relative z-10 text-6xl mb-8">
// // // // // // // //                   {item.icon}
// // // // // // // //                 </div>

// // // // // // // //                 {/* Title */}
// // // // // // // //                 <h3 className="relative z-10 text-3xl font-bold text-white mb-6">
// // // // // // // //                   {item.title}
// // // // // // // //                 </h3>

// // // // // // // //                 {/* Description */}
// // // // // // // //                 <p className="relative z-10 text-red-100 leading-relaxed text-[16px]">
// // // // // // // //                   {item.desc}
// // // // // // // //                 </p>

// // // // // // // //                 {/* Decorative Blur Circle */}
// // // // // // // //                 <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
// // // // // // // //               </motion.div>
// // // // // // // //             ))}
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </section>

// // // // // // // //       {/* FAQ SECTION */}
// // // // // // // //       <section className="py-24 bg-gray-50">
// // // // // // // //         <div className="max-w-4xl mx-auto px-6">
// // // // // // // //           {/* FAQ Header */}
// // // // // // // //           <motion.div
// // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // //             transition={{ duration: 0.6 }}
// // // // // // // //             viewport={{ once: true }}
// // // // // // // //             className="text-center mb-12"
// // // // // // // //           >
// // // // // // // //             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
// // // // // // // //               Frequently Asked <span className="text-red-600">Questions</span>
// // // // // // // //             </h2>
// // // // // // // //             <p className="text-gray-500 text-base max-w-2xl mx-auto">
// // // // // // // //               Find answers to common industry questions, ensuring clarity on our services, processes, and solutions.
// // // // // // // //             </p>
// // // // // // // //             <div className="w-20 h-0.5 bg-red-600 mx-auto mt-6" />
// // // // // // // //           </motion.div>

// // // // // // // //           {/* FAQ Accordion */}
// // // // // // // //           <motion.div
// // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // //             transition={{ duration: 0.6, delay: 0.2 }}
// // // // // // // //             viewport={{ once: true }}
// // // // // // // //             className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8"
// // // // // // // //           >
// // // // // // // //             {faqs.map((faq, idx) => (
// // // // // // // //               <AccordionItem
// // // // // // // //                 key={idx}
// // // // // // // //                 question={faq.question}
// // // // // // // //                 answer={faq.answer}
// // // // // // // //                 isOpen={openFaqIndex === idx}
// // // // // // // //                 onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
// // // // // // // //               />
// // // // // // // //             ))}
// // // // // // // //           </motion.div>
// // // // // // // //         </div>
// // // // // // // //       </section>

// // // // // // // //       {/* PARALLAX IMAGE SECTION - White background */}
// // // // // // // //       <ParallaxImageSection />

// // // // // // // //       {/* NEXT SECTION */}
// // // // // // // //       <section className="h-screen bg-black flex items-center justify-center">
// // // // // // // //         <motion.h2
// // // // // // // //           initial={{
// // // // // // // //             opacity: 0,
// // // // // // // //             y: 80,
// // // // // // // //           }}
// // // // // // // //           whileInView={{
// // // // // // // //             opacity: 1,
// // // // // // // //             y: 0,
// // // // // // // //           }}
// // // // // // // //           transition={{
// // // // // // // //             duration: 1,
// // // // // // // //           }}
// // // // // // // //           viewport={{
// // // // // // // //             once: true,
// // // // // // // //           }}
// // // // // // // //           className="text-white text-5xl md:text-6xl font-bold"
// // // // // // // //         >
// // // // // // // //           Next Section
// // // // // // // //         </motion.h2>
// // // // // // // //       </section>
// // // // // // // //     </>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Industries;











// // // // // // // import { motion, useScroll, useTransform } from "framer-motion";
// // // // // // // import { useEffect, useRef, useState } from "react";

// // // // // // // const industries = [
// // // // // // //   {
// // // // // // //     title: "Pharmaceuticals",
// // // // // // //     icon: "💊",
// // // // // // //     desc: "The pharmaceutical industry requires highly customized supply chain solutions.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     title: "Chemicals",
// // // // // // //     icon: "🧪",
// // // // // // //     desc: "We follow IATA guidelines for chemical imports and exports.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     title: "Textiles",
// // // // // // //     icon: "🧵",
// // // // // // //     desc: "We optimize your supply chain through distribution services.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     title: "Energy",
// // // // // // //     icon: "⚡",
// // // // // // //     desc: "We support renewable energy logistics globally.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     title: "Automobile",
// // // // // // //     icon: "🚗",
// // // // // // //     desc: "Flexible solutions for dynamic automobile trends.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     title: "Packaging",
// // // // // // //     icon: "📦",
// // // // // // //     desc: "Customized packaging logistics worldwide.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     title: "Time Critical Cargo",
// // // // // // //     icon: "⏱️",
// // // // // // //     desc: "Fast movement for urgent cargo deliveries.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     title: "Electronics",
// // // // // // //     icon: "📱",
// // // // // // //     desc: "Safe and efficient transport of electronics.",
// // // // // // //   },
// // // // // // // ];

// // // // // // // // Parallax Image Component
// // // // // // // const ParallaxImageSection = () => {
// // // // // // //   const containerRef = useRef(null);
// // // // // // //   const { scrollYProgress } = useScroll({
// // // // // // //     target: containerRef,
// // // // // // //     offset: ["start end", "end start"],
// // // // // // //   });

// // // // // // //   const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

// // // // // // //   return (
// // // // // // //     <section 
// // // // // // //       ref={containerRef}
// // // // // // //       className="relative h-[150vh] bg-white overflow-hidden"
// // // // // // //     >
// // // // // // //       <div className="sticky top-0 h-screen overflow-hidden">
// // // // // // //         <motion.div
// // // // // // //           style={{ y: imageY }}
// // // // // // //           className="absolute inset-0 w-full h-[160%]"
// // // // // // //         >
// // // // // // //           <img 
// // // // // // //             src="https://images.pexels.com/photos/2883523/pexels-photo-2883523.jpeg?auto=compress&cs=tinysrgb&w=1600"
// // // // // // //             alt="Container Ship Logistics"
// // // // // // //             className="w-full h-full object-cover"
// // // // // // //             loading="eager"
// // // // // // //           />
// // // // // // //         </motion.div>
// // // // // // //         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
// // // // // // //         <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
// // // // // // //           <motion.div
// // // // // // //             initial={{ opacity: 0, scale: 0 }}
// // // // // // //             whileInView={{ opacity: 1, scale: 1 }}
// // // // // // //             transition={{ duration: 0.6 }}
// // // // // // //             viewport={{ once: true }}
// // // // // // //             className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm"
// // // // // // //           >
// // // // // // //             <span className="text-4xl">🛡️</span>
// // // // // // //           </motion.div>
// // // // // // //           <motion.h2
// // // // // // //             initial={{ opacity: 0, y: 50 }}
// // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // //             transition={{ duration: 0.8 }}
// // // // // // //             viewport={{ once: true }}
// // // // // // //             className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
// // // // // // //           >
// // // // // // //             Protecting What Matters Most
// // // // // // //           </motion.h2>
// // // // // // //           <motion.p
// // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // //             transition={{ duration: 0.8, delay: 0.2 }}
// // // // // // //             viewport={{ once: true }}
// // // // // // //             className="text-lg text-white/80 max-w-2xl mb-8"
// // // // // // //           >
// // // // // // //             Get in touch to ensure safe and temperature-stable transit for your sensitive products.
// // // // // // //           </motion.p>
// // // // // // //           <motion.button
// // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // //             transition={{ duration: 0.8, delay: 0.4 }}
// // // // // // //             viewport={{ once: true }}
// // // // // // //             whileHover={{ scale: 1.05 }}
// // // // // // //             whileTap={{ scale: 0.95 }}
// // // // // // //             className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300"
// // // // // // //           >
// // // // // // //             Contact Us Today →
// // // // // // //           </motion.button>
// // // // // // //           <motion.div
// // // // // // //             initial={{ opacity: 0 }}
// // // // // // //             whileInView={{ opacity: 1 }}
// // // // // // //             transition={{ duration: 0.8, delay: 0.6 }}
// // // // // // //             viewport={{ once: true }}
// // // // // // //             className="absolute bottom-8 text-white/50 text-xs flex items-center gap-2"
// // // // // // //           >
// // // // // // //             <span>Scroll to explore</span>
// // // // // // //             <span className="text-lg">↓</span>
// // // // // // //           </motion.div>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // };

// // // // // // // const Industries = () => {
// // // // // // //   const [visibleCards, setVisibleCards] = useState(2);
// // // // // // //   const sectionRef = useRef(null);

// // // // // // //   useEffect(() => {
// // // // // // //     const handleScroll = () => {
// // // // // // //       const section = sectionRef.current;

// // // // // // //       if (!section) return;

// // // // // // //       const rect = section.getBoundingClientRect();
// // // // // // //       const progress =
// // // // // // //         (window.innerHeight - rect.top) /
// // // // // // //         (rect.height + window.innerHeight);

// // // // // // //       if (progress > 0.15 && visibleCards < 4) {
// // // // // // //         setVisibleCards(4);
// // // // // // //       }
// // // // // // //       if (progress > 0.35 && visibleCards < 6) {
// // // // // // //         setVisibleCards(6);
// // // // // // //       }
// // // // // // //       if (progress > 0.55 && visibleCards < 8) {
// // // // // // //         setVisibleCards(8);
// // // // // // //       }
// // // // // // //     };

// // // // // // //     window.addEventListener("scroll", handleScroll);
// // // // // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // // // // //   }, [visibleCards]);

// // // // // // //   // FAQ Data with questions and answers
// // // // // // //   const faqItems = [
// // // // // // //     {
// // // // // // //       question: "What industries do you serve?",
// // // // // // //       answers: ["Pharmaceuticals", "Chemicals", "Food & Beverage", "Automotive", "Electronics"]
// // // // // // //     },
// // // // // // //     {
// // // // // // //       question: "How do you handle temperature-sensitive shipments?",
// // // // // // //       answers: ["Real-time temperature monitoring", "Insulated packaging", "Cold chain logistics", "GPS tracking", "Emergency response plan"]
// // // // // // //     },
// // // // // // //     {
// // // // // // //       question: "What sets your logistics apart?",
// // // // // // //       answers: ["24/7 customer support", "Real-time tracking", "Global network", "Customized solutions", "Compliance expertise"]
// // // // // // //     },
// // // // // // //     {
// // // // // // //       question: "How do you ensure compliance with regulations?",
// // // // // // //       answers: ["IATA certified", "FDA compliant", "ISO standards", "Regular audits", "Documentation management"]
// // // // // // //     }
// // // // // // //   ];

// // // // // // //   return (
// // // // // // //     <>
// // // // // // //       {/* HERO SECTION */}
// // // // // // //       <section className="relative h-screen bg-black overflow-hidden flex items-center justify-center">
// // // // // // //         <div
// // // // // // //           className="absolute inset-0 bg-cover bg-center opacity-50"
// // // // // // //           style={{
// // // // // // //             backgroundImage:
// // // // // // //               "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c83137?auto=format&fit=crop&w=1920&q=80')",
// // // // // // //           }}
// // // // // // //         />
// // // // // // //         <div className="absolute inset-0 bg-black/60" />
// // // // // // //         <div className="relative z-10 text-center px-6">
// // // // // // //           <motion.h1
// // // // // // //             initial={{ opacity: 0, y: 80 }}
// // // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // // //             transition={{ duration: 1 }}
// // // // // // //             className="text-6xl md:text-7xl font-bold text-white mb-6"
// // // // // // //           >
// // // // // // //             Industries We Serve
// // // // // // //           </motion.h1>
// // // // // // //           <motion.p
// // // // // // //             initial={{ opacity: 0, y: 40 }}
// // // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // // //             transition={{ duration: 1, delay: 0.2 }}
// // // // // // //             className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto"
// // // // // // //           >
// // // // // // //             Innovative logistics solutions empowering industries worldwide.
// // // // // // //           </motion.p>
// // // // // // //         </div>
// // // // // // //       </section>

// // // // // // //       {/* INDUSTRIES SECTION */}
// // // // // // //       <section
// // // // // // //         ref={sectionRef}
// // // // // // //         className="relative bg-white py-32 overflow-hidden"
// // // // // // //       >
// // // // // // //         <div className="max-w-7xl mx-auto px-6">
// // // // // // //           <motion.div
// // // // // // //             initial={{ opacity: 0, y: 80 }}
// // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // //             transition={{ duration: 1 }}
// // // // // // //             viewport={{ once: true }}
// // // // // // //             className="text-center mb-16"
// // // // // // //           >
// // // // // // //             <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
// // // // // // //               Our Industries
// // // // // // //             </h2>
// // // // // // //             <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
// // // // // // //               We provide world-class logistics and supply chain solutions
// // // // // // //               tailored for diverse global industries.
// // // // // // //             </p>
// // // // // // //           </motion.div>

// // // // // // //           <div
// // // // // // //             className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 items-start"
// // // // // // //             style={{ perspective: "1200px" }}
// // // // // // //           >
// // // // // // //             {industries.slice(0, visibleCards).map((item, index) => (
// // // // // // //               <motion.div
// // // // // // //                 key={index}
// // // // // // //                 initial={{ opacity: 0, y: 140, rotateX: 15, scale: 0.9, filter: "blur(12px)" }}
// // // // // // //                 whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1, filter: "blur(0px)" }}
// // // // // // //                 transition={{ duration: 1, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
// // // // // // //                 viewport={{ once: true, amount: 0.2 }}
// // // // // // //                 whileHover={{ y: -12, scale: 1.03, transition: { duration: 0.3 } }}
// // // // // // //                 className="group relative bg-gradient-to-br from-red-600 via-red-700 to-red-900 rounded-3xl p-10 shadow-2xl overflow-hidden"
// // // // // // //               >
// // // // // // //                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-white/10" />
// // // // // // //                 <div className="relative z-10 text-6xl mb-8">{item.icon}</div>
// // // // // // //                 <h3 className="relative z-10 text-3xl font-bold text-white mb-6">{item.title}</h3>
// // // // // // //                 <p className="relative z-10 text-red-100 leading-relaxed text-[16px]">{item.desc}</p>
// // // // // // //                 <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
// // // // // // //               </motion.div>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </section>

// // // // // // //       {/* FAQ SECTION - MATCHING YOUR SCREENSHOT STYLE */}
// // // // // // //       <section className="py-20 bg-gray-50">
// // // // // // //         <div className="max-w-5xl mx-auto px-6">
// // // // // // //           {/* Header */}
// // // // // // //           <motion.div
// // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // //             transition={{ duration: 0.6 }}
// // // // // // //             viewport={{ once: true }}
// // // // // // //             className="text-center mb-12"
// // // // // // //           >
// // // // // // //             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
// // // // // // //               Frequently Asked <span className="text-red-600">Questions</span>
// // // // // // //             </h2>
// // // // // // //             <p className="text-gray-500 text-base max-w-2xl mx-auto">
// // // // // // //               Find answers to common industry questions, ensuring clarity on our services, processes, and solutions.
// // // // // // //             </p>
// // // // // // //             <div className="w-20 h-0.5 bg-red-600 mx-auto mt-6" />
// // // // // // //           </motion.div>

// // // // // // //           {/* FAQ Grid - 2 columns */}
// // // // // // //           <div className="grid md:grid-cols-2 gap-8">
// // // // // // //             {faqItems.map((item, idx) => (
// // // // // // //               <motion.div
// // // // // // //                 key={idx}
// // // // // // //                 initial={{ opacity: 0, y: 30 }}
// // // // // // //                 whileInView={{ opacity: 1, y: 0 }}
// // // // // // //                 transition={{ duration: 0.5, delay: idx * 0.1 }}
// // // // // // //                 viewport={{ once: true }}
// // // // // // //                 className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
// // // // // // //               >
// // // // // // //                 <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
// // // // // // //                   {item.question}
// // // // // // //                 </h3>
// // // // // // //                 <div className="space-y-2">
// // // // // // //                   {item.answers.map((answer, aidx) => (
// // // // // // //                     <div key={aidx} className="flex items-center gap-3">
// // // // // // //                       <div className="w-5 h-5 border-2 border-red-400 rounded-md flex items-center justify-center">
// // // // // // //                         <div className="w-3 h-3 bg-red-500 rounded-sm opacity-0 group-hover:opacity-100 transition" />
// // // // // // //                       </div>
// // // // // // //                       <span className="text-gray-600 text-sm">{answer}</span>
// // // // // // //                     </div>
// // // // // // //                   ))}
// // // // // // //                 </div>
// // // // // // //               </motion.div>
// // // // // // //             ))}
// // // // // // //           </div>

// // // // // // //           {/* View All Button */}
// // // // // // //           <motion.div
// // // // // // //             initial={{ opacity: 0, y: 20 }}
// // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // //             transition={{ duration: 0.6, delay: 0.4 }}
// // // // // // //             viewport={{ once: true }}
// // // // // // //             className="text-center mt-10"
// // // // // // //           >
// // // // // // //             <button className="text-red-600 font-medium text-sm flex items-center gap-1 mx-auto hover:gap-2 transition-all">
// // // // // // //               View All FAQs <span>→</span>
// // // // // // //             </button>
// // // // // // //           </motion.div>
// // // // // // //         </div>
// // // // // // //       </section>

// // // // // // //       {/* PARALLAX IMAGE SECTION */}
// // // // // // //       <ParallaxImageSection />

// // // // // // //       {/* NEXT SECTION */}
// // // // // // //       <section className="h-screen bg-black flex items-center justify-center">
// // // // // // //         <motion.h2
// // // // // // //           initial={{ opacity: 0, y: 80 }}
// // // // // // //           whileInView={{ opacity: 1, y: 0 }}
// // // // // // //           transition={{ duration: 1 }}
// // // // // // //           viewport={{ once: true }}
// // // // // // //           className="text-white text-5xl md:text-6xl font-bold"
// // // // // // //         >
// // // // // // //           Next Section
// // // // // // //         </motion.h2>
// // // // // // //       </section>
// // // // // // //     </>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Industries;









// // // // // // import { motion, useScroll, useTransform } from "framer-motion";
// // // // // // import { useEffect, useRef, useState } from "react";

// // // // // // const industries = [
// // // // // //   {
// // // // // //     title: "Pharmaceuticals",
// // // // // //     icon: "💊",
// // // // // //     desc: "The pharmaceutical industry requires highly customized supply chain solutions.",
// // // // // //   },
// // // // // //   {
// // // // // //     title: "Chemicals",
// // // // // //     icon: "🧪",
// // // // // //     desc: "We follow IATA guidelines for chemical imports and exports.",
// // // // // //   },
// // // // // //   {
// // // // // //     title: "Textiles",
// // // // // //     icon: "🧵",
// // // // // //     desc: "We optimize your supply chain through distribution services.",
// // // // // //   },
// // // // // //   {
// // // // // //     title: "Energy",
// // // // // //     icon: "⚡",
// // // // // //     desc: "We support renewable energy logistics globally.",
// // // // // //   },
// // // // // //   {
// // // // // //     title: "Automobile",
// // // // // //     icon: "🚗",
// // // // // //     desc: "Flexible solutions for dynamic automobile trends.",
// // // // // //   },
// // // // // //   {
// // // // // //     title: "Packaging",
// // // // // //     icon: "📦",
// // // // // //     desc: "Customized packaging logistics worldwide.",
// // // // // //   },
// // // // // //   {
// // // // // //     title: "Time Critical Cargo",
// // // // // //     icon: "⏱️",
// // // // // //     desc: "Fast movement for urgent cargo deliveries.",
// // // // // //   },
// // // // // //   {
// // // // // //     title: "Electronics",
// // // // // //     icon: "📱",
// // // // // //     desc: "Safe and efficient transport of electronics.",
// // // // // //   },
// // // // // // ];

// // // // // // // Parallax Image Component
// // // // // // const ParallaxImageSection = () => {
// // // // // //   const containerRef = useRef(null);
// // // // // //   const { scrollYProgress } = useScroll({
// // // // // //     target: containerRef,
// // // // // //     offset: ["start end", "end start"],
// // // // // //   });

// // // // // //   const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

// // // // // //   return (
// // // // // //     <section 
// // // // // //       ref={containerRef}
// // // // // //       className="relative h-[150vh] bg-white overflow-hidden"
// // // // // //     >
// // // // // //       <div className="sticky top-0 h-screen overflow-hidden">
// // // // // //         <motion.div
// // // // // //           style={{ y: imageY }}
// // // // // //           className="absolute inset-0 w-full h-[160%]"
// // // // // //         >
// // // // // //           <img 
// // // // // //             src="https://images.pexels.com/photos/2883523/pexels-photo-2883523.jpeg?auto=compress&cs=tinysrgb&w=1600"
// // // // // //             alt="Container Ship Logistics"
// // // // // //             className="w-full h-full object-cover"
// // // // // //             loading="eager"
// // // // // //           />
// // // // // //         </motion.div>
// // // // // //         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
// // // // // //         <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
// // // // // //           <motion.div
// // // // // //             initial={{ opacity: 0, scale: 0 }}
// // // // // //             whileInView={{ opacity: 1, scale: 1 }}
// // // // // //             transition={{ duration: 0.6 }}
// // // // // //             viewport={{ once: true }}
// // // // // //             className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm"
// // // // // //           >
// // // // // //             <span className="text-4xl">🛡️</span>
// // // // // //           </motion.div>
// // // // // //           <motion.h2
// // // // // //             initial={{ opacity: 0, y: 50 }}
// // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // //             transition={{ duration: 0.8 }}
// // // // // //             viewport={{ once: true }}
// // // // // //             className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
// // // // // //           >
// // // // // //             Protecting What Matters Most
// // // // // //           </motion.h2>
// // // // // //           <motion.p
// // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // //             transition={{ duration: 0.8, delay: 0.2 }}
// // // // // //             viewport={{ once: true }}
// // // // // //             className="text-lg text-white/80 max-w-2xl mb-8"
// // // // // //           >
// // // // // //             Get in touch to ensure safe and temperature-stable transit for your sensitive products.
// // // // // //           </motion.p>
// // // // // //           <motion.button
// // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // //             transition={{ duration: 0.8, delay: 0.4 }}
// // // // // //             viewport={{ once: true }}
// // // // // //             whileHover={{ scale: 1.05 }}
// // // // // //             whileTap={{ scale: 0.95 }}
// // // // // //             className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300"
// // // // // //           >
// // // // // //             Contact Us Today →
// // // // // //           </motion.button>
// // // // // //           <motion.div
// // // // // //             initial={{ opacity: 0 }}
// // // // // //             whileInView={{ opacity: 1 }}
// // // // // //             transition={{ duration: 0.8, delay: 0.6 }}
// // // // // //             viewport={{ once: true }}
// // // // // //             className="absolute bottom-8 text-white/50 text-xs flex items-center gap-2"
// // // // // //           >
// // // // // //             <span>Scroll to explore</span>
// // // // // //             <span className="text-lg">↓</span>
// // // // // //           </motion.div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // };

// // // // // // const Industries = () => {
// // // // // //   const [visibleCards, setVisibleCards] = useState(2);
// // // // // //   const sectionRef = useRef(null);

// // // // // //   useEffect(() => {
// // // // // //     const handleScroll = () => {
// // // // // //       const section = sectionRef.current;
// // // // // //       if (!section) return;
// // // // // //       const rect = section.getBoundingClientRect();
// // // // // //       const progress =
// // // // // //         (window.innerHeight - rect.top) / (rect.height + window.innerHeight);
// // // // // //       if (progress > 0.15 && visibleCards < 4) setVisibleCards(4);
// // // // // //       if (progress > 0.35 && visibleCards < 6) setVisibleCards(6);
// // // // // //       if (progress > 0.55 && visibleCards < 8) setVisibleCards(8);
// // // // // //     };
// // // // // //     window.addEventListener("scroll", handleScroll);
// // // // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // // // //   }, [visibleCards]);

// // // // // //   return (
// // // // // //     <>
// // // // // //       {/* HERO SECTION */}
// // // // // //       <section className="relative h-screen bg-black overflow-hidden flex items-center justify-center">
// // // // // //         <div
// // // // // //           className="absolute inset-0 bg-cover bg-center opacity-50"
// // // // // //           style={{
// // // // // //             backgroundImage:
// // // // // //               "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c83137?auto=format&fit=crop&w=1920&q=80')",
// // // // // //           }}
// // // // // //         />
// // // // // //         <div className="absolute inset-0 bg-black/60" />
// // // // // //         <div className="relative z-10 text-center px-6">
// // // // // //           <motion.h1
// // // // // //             initial={{ opacity: 0, y: 80 }}
// // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // //             transition={{ duration: 1 }}
// // // // // //             className="text-6xl md:text-7xl font-bold text-white mb-6"
// // // // // //           >
// // // // // //             Industries We Serve
// // // // // //           </motion.h1>
// // // // // //           <motion.p
// // // // // //             initial={{ opacity: 0, y: 40 }}
// // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // //             transition={{ duration: 1, delay: 0.2 }}
// // // // // //             className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto"
// // // // // //           >
// // // // // //             Innovative logistics solutions empowering industries worldwide.
// // // // // //           </motion.p>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* INDUSTRIES SECTION */}
// // // // // //       <section
// // // // // //         ref={sectionRef}
// // // // // //         className="relative bg-white py-32 overflow-hidden"
// // // // // //       >
// // // // // //         <div className="max-w-7xl mx-auto px-6">
// // // // // //           <motion.div
// // // // // //             initial={{ opacity: 0, y: 80 }}
// // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // //             transition={{ duration: 1 }}
// // // // // //             viewport={{ once: true }}
// // // // // //             className="text-center mb-16"
// // // // // //           >
// // // // // //             <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
// // // // // //               Our Industries
// // // // // //             </h2>
// // // // // //             <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
// // // // // //               We provide world-class logistics and supply chain solutions
// // // // // //               tailored for diverse global industries.
// // // // // //             </p>
// // // // // //           </motion.div>

// // // // // //           <div
// // // // // //             className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 items-start"
// // // // // //             style={{ perspective: "1200px" }}
// // // // // //           >
// // // // // //             {industries.slice(0, visibleCards).map((item, index) => (
// // // // // //               <motion.div
// // // // // //                 key={index}
// // // // // //                 initial={{ opacity: 0, y: 140, rotateX: 15, scale: 0.9, filter: "blur(12px)" }}
// // // // // //                 whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1, filter: "blur(0px)" }}
// // // // // //                 transition={{ duration: 1, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
// // // // // //                 viewport={{ once: true, amount: 0.2 }}
// // // // // //                 whileHover={{ y: -12, scale: 1.03, transition: { duration: 0.3 } }}
// // // // // //                 className="group relative bg-gradient-to-br from-red-600 via-red-700 to-red-900 rounded-3xl p-10 shadow-2xl overflow-hidden"
// // // // // //               >
// // // // // //                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-white/10" />
// // // // // //                 <div className="relative z-10 text-6xl mb-8">{item.icon}</div>
// // // // // //                 <h3 className="relative z-10 text-3xl font-bold text-white mb-6">{item.title}</h3>
// // // // // //                 <p className="relative z-10 text-red-100 leading-relaxed text-[16px]">{item.desc}</p>
// // // // // //                 <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
// // // // // //               </motion.div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* FAQ SECTION - CORRECTED DESIGN */}
// // // // // //       <section className="py-20 bg-white">
// // // // // //         <div className="max-w-3xl mx-auto px-6">
// // // // // //           {/* Header */}
// // // // // //           <motion.div
// // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // //             transition={{ duration: 0.6 }}
// // // // // //             viewport={{ once: true }}
// // // // // //             className="text-center mb-12"
// // // // // //           >
// // // // // //             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
// // // // // //               Frequently Asked <span className="text-red-600">Questions</span>
// // // // // //             </h2>
// // // // // //             <p className="text-gray-500 text-base">
// // // // // //               Find answers to common industry questions, ensuring clarity on our services, processes, and solutions.
// // // // // //             </p>
// // // // // //             <div className="w-16 h-0.5 bg-red-600 mx-auto mt-6" />
// // // // // //           </motion.div>

// // // // // //           {/* FAQ Items - Simple vertical list */}
// // // // // //           <div className="space-y-8">
// // // // // //             {/* Question 1 */}
// // // // // //             <motion.div
// // // // // //               initial={{ opacity: 0, y: 20 }}
// // // // // //               whileInView={{ opacity: 1, y: 0 }}
// // // // // //               transition={{ duration: 0.5 }}
// // // // // //               viewport={{ once: true }}
// // // // // //             >
// // // // // //               <h3 className="text-xl font-semibold text-gray-800 mb-4">
// // // // // //                 What industries do you serve?
// // // // // //               </h3>
// // // // // //               <div className="space-y-2 pl-4">
// // // // // //                 {["Pharmaceuticals", "Chemicals", "Food & Beverage", "Automotive", "Electronics"].map((item, idx) => (
// // // // // //                   <div key={idx} className="flex items-center gap-3">
// // // // // //                     <div className="w-5 h-5 border-2 border-gray-300 rounded-md" />
// // // // // //                     <span className="text-gray-600">{item}</span>
// // // // // //                   </div>
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             </motion.div>

// // // // // //             {/* Question 2 */}
// // // // // //             <motion.div
// // // // // //               initial={{ opacity: 0, y: 20 }}
// // // // // //               whileInView={{ opacity: 1, y: 0 }}
// // // // // //               transition={{ duration: 0.5, delay: 0.1 }}
// // // // // //               viewport={{ once: true }}
// // // // // //             >
// // // // // //               <h3 className="text-xl font-semibold text-gray-800 mb-4">
// // // // // //                 How do you handle temperature-sensitive shipments?
// // // // // //               </h3>
// // // // // //               <div className="space-y-2 pl-4">
// // // // // //                 {["Real-time temperature monitoring", "Insulated packaging", "Cold chain logistics", "GPS tracking", "Emergency response plan"].map((item, idx) => (
// // // // // //                   <div key={idx} className="flex items-center gap-3">
// // // // // //                     <div className="w-5 h-5 border-2 border-gray-300 rounded-md" />
// // // // // //                     <span className="text-gray-600">{item}</span>
// // // // // //                   </div>
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             </motion.div>

// // // // // //             {/* Question 3 */}
// // // // // //             <motion.div
// // // // // //               initial={{ opacity: 0, y: 20 }}
// // // // // //               whileInView={{ opacity: 1, y: 0 }}
// // // // // //               transition={{ duration: 0.5, delay: 0.2 }}
// // // // // //               viewport={{ once: true }}
// // // // // //             >
// // // // // //               <h3 className="text-xl font-semibold text-gray-800 mb-4">
// // // // // //                 What sets your logistics apart?
// // // // // //               </h3>
// // // // // //               <div className="space-y-2 pl-4">
// // // // // //                 {["24/7 customer support", "Real-time tracking", "Global network", "Customized solutions", "Compliance expertise"].map((item, idx) => (
// // // // // //                   <div key={idx} className="flex items-center gap-3">
// // // // // //                     <div className="w-5 h-5 border-2 border-gray-300 rounded-md" />
// // // // // //                     <span className="text-gray-600">{item}</span>
// // // // // //                   </div>
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             </motion.div>

// // // // // //             {/* Question 4 */}
// // // // // //             <motion.div
// // // // // //               initial={{ opacity: 0, y: 20 }}
// // // // // //               whileInView={{ opacity: 1, y: 0 }}
// // // // // //               transition={{ duration: 0.5, delay: 0.3 }}
// // // // // //               viewport={{ once: true }}
// // // // // //             >
// // // // // //               <h3 className="text-xl font-semibold text-gray-800 mb-4">
// // // // // //                 How do you ensure compliance with regulations?
// // // // // //               </h3>
// // // // // //               <div className="space-y-2 pl-4">
// // // // // //                 {["IATA certified", "FDA compliant", "ISO standards", "Regular audits", "Documentation management"].map((item, idx) => (
// // // // // //                   <div key={idx} className="flex items-center gap-3">
// // // // // //                     <div className="w-5 h-5 border-2 border-gray-300 rounded-md" />
// // // // // //                     <span className="text-gray-600">{item}</span>
// // // // // //                   </div>
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             </motion.div>
// // // // // //           </div>

// // // // // //           {/* View All Link */}
// // // // // //           <motion.div
// // // // // //             initial={{ opacity: 0, y: 20 }}
// // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // //             transition={{ duration: 0.5, delay: 0.4 }}
// // // // // //             viewport={{ once: true }}
// // // // // //             className="text-center mt-10"
// // // // // //           >
// // // // // //             <a href="#" className="text-red-600 text-sm font-medium hover:underline">
// // // // // //               View All FAQs →
// // // // // //             </a>
// // // // // //           </motion.div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* PARALLAX IMAGE SECTION */}
// // // // // //       <ParallaxImageSection />

// // // // // //       {/* NEXT SECTION */}
// // // // // //       <section className="h-screen bg-black flex items-center justify-center">
// // // // // //         <motion.h2
// // // // // //           initial={{ opacity: 0, y: 80 }}
// // // // // //           whileInView={{ opacity: 1, y: 0 }}
// // // // // //           transition={{ duration: 1 }}
// // // // // //           viewport={{ once: true }}
// // // // // //           className="text-white text-5xl md:text-6xl font-bold"
// // // // // //         >
// // // // // //           Next Section
// // // // // //         </motion.h2>
// // // // // //       </section>
// // // // // //     </>
// // // // // //   );
// // // // // // };

// // // // // // export default Industries;










// // // // // import { motion, useScroll, useTransform } from "framer-motion";
// // // // // import { useEffect, useRef, useState } from "react";

// // // // // const industries = [
// // // // //   {
// // // // //     title: "Pharmaceuticals",
// // // // //     icon: "💊",
// // // // //     desc: "The pharmaceutical industry requires highly customized supply chain solutions.",
// // // // //   },
// // // // //   {
// // // // //     title: "Chemicals",
// // // // //     icon: "🧪",
// // // // //     desc: "We follow IATA guidelines for chemical imports and exports.",
// // // // //   },
// // // // //   {
// // // // //     title: "Textiles",
// // // // //     icon: "🧵",
// // // // //     desc: "We optimize your supply chain through distribution services.",
// // // // //   },
// // // // //   {
// // // // //     title: "Energy",
// // // // //     icon: "⚡",
// // // // //     desc: "We support renewable energy logistics globally.",
// // // // //   },
// // // // //   {
// // // // //     title: "Automobile",
// // // // //     icon: "🚗",
// // // // //     desc: "Flexible solutions for dynamic automobile trends.",
// // // // //   },
// // // // //   {
// // // // //     title: "Packaging",
// // // // //     icon: "📦",
// // // // //     desc: "Customized packaging logistics worldwide.",
// // // // //   },
// // // // //   {
// // // // //     title: "Time Critical Cargo",
// // // // //     icon: "⏱️",
// // // // //     desc: "Fast movement for urgent cargo deliveries.",
// // // // //   },
// // // // //   {
// // // // //     title: "Electronics",
// // // // //     icon: "📱",
// // // // //     desc: "Safe and efficient transport of electronics.",
// // // // //   },
// // // // // ];

// // // // // // Accordion Item Component
// // // // // const AccordionItem = ({ question, children, isOpen, onClick }) => {
// // // // //   return (
// // // // //     <div className="border-b border-gray-200">
// // // // //       <button
// // // // //         onClick={onClick}
// // // // //         className="w-full flex items-center justify-between py-4 text-left hover:text-red-600 transition-colors"
// // // // //       >
// // // // //         <span className="text-gray-800 font-medium">{question}</span>
// // // // //         <motion.span
// // // // //           animate={{ rotate: isOpen ? 180 : 0 }}
// // // // //           transition={{ duration: 0.3 }}
// // // // //           className="text-red-600 text-xl"
// // // // //         >
// // // // //           ▼
// // // // //         </motion.span>
// // // // //       </button>
// // // // //       <motion.div
// // // // //         initial={{ height: 0, opacity: 0 }}
// // // // //         animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
// // // // //         transition={{ duration: 0.3 }}
// // // // //         className="overflow-hidden"
// // // // //       >
// // // // //         <div className="pb-4 text-gray-500 text-sm leading-relaxed pl-4">
// // // // //           {children}
// // // // //         </div>
// // // // //       </motion.div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // // Parallax Image Component
// // // // // const ParallaxImageSection = () => {
// // // // //   const containerRef = useRef(null);
// // // // //   const { scrollYProgress } = useScroll({
// // // // //     target: containerRef,
// // // // //     offset: ["start end", "end start"],
// // // // //   });

// // // // //   const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

// // // // //   return (
// // // // //     <section 
// // // // //       ref={containerRef}
// // // // //       className="relative h-[150vh] bg-white overflow-hidden"
// // // // //     >
// // // // //       <div className="sticky top-0 h-screen overflow-hidden">
// // // // //         <motion.div
// // // // //           style={{ y: imageY }}
// // // // //           className="absolute inset-0 w-full h-[160%]"
// // // // //         >
// // // // //           <img 
// // // // //             src="https://images.pexels.com/photos/2883523/pexels-photo-2883523.jpeg?auto=compress&cs=tinysrgb&w=1600"
// // // // //             alt="Container Ship Logistics"
// // // // //             className="w-full h-full object-cover"
// // // // //             loading="eager"
// // // // //           />
// // // // //         </motion.div>
// // // // //         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
// // // // //         <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
// // // // //           <motion.div
// // // // //             initial={{ opacity: 0, scale: 0 }}
// // // // //             whileInView={{ opacity: 1, scale: 1 }}
// // // // //             transition={{ duration: 0.6 }}
// // // // //             viewport={{ once: true }}
// // // // //             className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm"
// // // // //           >
// // // // //             <span className="text-4xl">🛡️</span>
// // // // //           </motion.div>
// // // // //           <motion.h2
// // // // //             initial={{ opacity: 0, y: 50 }}
// // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // //             transition={{ duration: 0.8 }}
// // // // //             viewport={{ once: true }}
// // // // //             className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
// // // // //           >
// // // // //             Protecting What Matters Most
// // // // //           </motion.h2>
// // // // //           <motion.p
// // // // //             initial={{ opacity: 0, y: 30 }}
// // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // //             transition={{ duration: 0.8, delay: 0.2 }}
// // // // //             viewport={{ once: true }}
// // // // //             className="text-lg text-white/80 max-w-2xl mb-8"
// // // // //           >
// // // // //             Get in touch to ensure safe and temperature-stable transit for your sensitive products.
// // // // //           </motion.p>
// // // // //           <motion.button
// // // // //             initial={{ opacity: 0, y: 30 }}
// // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // //             transition={{ duration: 0.8, delay: 0.4 }}
// // // // //             viewport={{ once: true }}
// // // // //             whileHover={{ scale: 1.05 }}
// // // // //             whileTap={{ scale: 0.95 }}
// // // // //             className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300"
// // // // //           >
// // // // //             Contact Us Today →
// // // // //           </motion.button>
// // // // //           <motion.div
// // // // //             initial={{ opacity: 0 }}
// // // // //             whileInView={{ opacity: 1 }}
// // // // //             transition={{ duration: 0.8, delay: 0.6 }}
// // // // //             viewport={{ once: true }}
// // // // //             className="absolute bottom-8 text-white/50 text-xs flex items-center gap-2"
// // // // //           >
// // // // //             <span>Scroll to explore</span>
// // // // //             <span className="text-lg">↓</span>
// // // // //           </motion.div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // const Industries = () => {
// // // // //   const [visibleCards, setVisibleCards] = useState(2);
// // // // //   const [openIndex, setOpenIndex] = useState(null);
// // // // //   const sectionRef = useRef(null);

// // // // //   useEffect(() => {
// // // // //     const handleScroll = () => {
// // // // //       const section = sectionRef.current;
// // // // //       if (!section) return;
// // // // //       const rect = section.getBoundingClientRect();
// // // // //       const progress =
// // // // //         (window.innerHeight - rect.top) / (rect.height + window.innerHeight);
// // // // //       if (progress > 0.15 && visibleCards < 4) setVisibleCards(4);
// // // // //       if (progress > 0.35 && visibleCards < 6) setVisibleCards(6);
// // // // //       if (progress > 0.55 && visibleCards < 8) setVisibleCards(8);
// // // // //     };
// // // // //     window.addEventListener("scroll", handleScroll);
// // // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // // //   }, [visibleCards]);

// // // // //   const faqItems = [
// // // // //     {
// // // // //       question: "What industries do you serve?",
// // // // //       answer: "We serve Pharmaceuticals, Chemicals, Food & Beverage, Automotive, and Electronics industries with specialized logistics solutions."
// // // // //     },
// // // // //     {
// // // // //       question: "How do you handle temperature-sensitive shipments?",
// // // // //       answer: "We use real-time temperature monitoring, insulated packaging, cold chain logistics, GPS tracking, and have emergency response plans in place."
// // // // //     },
// // // // //     {
// // // // //       question: "What sets your logistics apart?",
// // // // //       answer: "Our 24/7 customer support, real-time tracking, global network, customized solutions, and compliance expertise set us apart."
// // // // //     },
// // // // //     {
// // // // //       question: "How do you ensure compliance with regulations?",
// // // // //       answer: "We are IATA certified, FDA compliant, follow ISO standards, conduct regular audits, and maintain thorough documentation management."
// // // // //     }
// // // // //   ];

// // // // //   return (
// // // // //     <>
// // // // //       {/* HERO SECTION */}
// // // // //       <section className="relative h-screen bg-black overflow-hidden flex items-center justify-center">
// // // // //         <div
// // // // //           className="absolute inset-0 bg-cover bg-center opacity-50"
// // // // //           style={{
// // // // //             backgroundImage:
// // // // //               "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c83137?auto=format&fit=crop&w=1920&q=80')",
// // // // //           }}
// // // // //         />
// // // // //         <div className="absolute inset-0 bg-black/60" />
// // // // //         <div className="relative z-10 text-center px-6">
// // // // //           <motion.h1
// // // // //             initial={{ opacity: 0, y: 80 }}
// // // // //             animate={{ opacity: 1, y: 0 }}
// // // // //             transition={{ duration: 1 }}
// // // // //             className="text-6xl md:text-7xl font-bold text-white mb-6"
// // // // //           >
// // // // //             Industries We Serve
// // // // //           </motion.h1>
// // // // //           <motion.p
// // // // //             initial={{ opacity: 0, y: 40 }}
// // // // //             animate={{ opacity: 1, y: 0 }}
// // // // //             transition={{ duration: 1, delay: 0.2 }}
// // // // //             className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto"
// // // // //           >
// // // // //             Innovative logistics solutions empowering industries worldwide.
// // // // //           </motion.p>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* INDUSTRIES SECTION */}
// // // // //       <section
// // // // //         ref={sectionRef}
// // // // //         className="relative bg-white py-32 overflow-hidden"
// // // // //       >
// // // // //         <div className="max-w-7xl mx-auto px-6">
// // // // //           <motion.div
// // // // //             initial={{ opacity: 0, y: 80 }}
// // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // //             transition={{ duration: 1 }}
// // // // //             viewport={{ once: true }}
// // // // //             className="text-center mb-16"
// // // // //           >
// // // // //             <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
// // // // //               Our Industries
// // // // //             </h2>
// // // // //             <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
// // // // //               We provide world-class logistics and supply chain solutions
// // // // //               tailored for diverse global industries.
// // // // //             </p>
// // // // //           </motion.div>

// // // // //           <div
// // // // //             className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 items-start"
// // // // //             style={{ perspective: "1200px" }}
// // // // //           >
// // // // //             {industries.slice(0, visibleCards).map((item, index) => (
// // // // //               <motion.div
// // // // //                 key={index}
// // // // //                 initial={{ opacity: 0, y: 140, rotateX: 15, scale: 0.9, filter: "blur(12px)" }}
// // // // //                 whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1, filter: "blur(0px)" }}
// // // // //                 transition={{ duration: 1, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
// // // // //                 viewport={{ once: true, amount: 0.2 }}
// // // // //                 whileHover={{ y: -12, scale: 1.03, transition: { duration: 0.3 } }}
// // // // //                 className="group relative bg-gradient-to-br from-red-600 via-red-700 to-red-900 rounded-3xl p-10 shadow-2xl overflow-hidden"
// // // // //               >
// // // // //                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-white/10" />
// // // // //                 <div className="relative z-10 text-6xl mb-8">{item.icon}</div>
// // // // //                 <h3 className="relative z-10 text-3xl font-bold text-white mb-6">{item.title}</h3>
// // // // //                 <p className="relative z-10 text-red-100 leading-relaxed text-[16px]">{item.desc}</p>
// // // // //                 <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
// // // // //               </motion.div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* FAQ SECTION - SPLIT LAYOUT: LEFT SIDE TEXT, RIGHT SIDE DROPDOWN */}
// // // // //       <section className="py-20 bg-gray-50">
// // // // //         <div className="max-w-6xl mx-auto px-6">
// // // // //           <div className="grid md:grid-cols-2 gap-12">
            
// // // // //             {/* LEFT SIDE - Title and Description */}
// // // // //             <motion.div
// // // // //               initial={{ opacity: 0, x: -30 }}
// // // // //               whileInView={{ opacity: 1, x: 0 }}
// // // // //               transition={{ duration: 0.6 }}
// // // // //               viewport={{ once: true }}
// // // // //               className="sticky top-32 self-start"
// // // // //             >
// // // // //               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
// // // // //                 Frequently Asked <span className="text-red-600">Questions</span>
// // // // //               </h2>
// // // // //               <div className="w-16 h-0.5 bg-red-600 mb-6" />
// // // // //               <p className="text-gray-500 text-base leading-relaxed">
// // // // //                 Find answers to common industry questions, ensuring clarity on our services, processes, and solutions.
// // // // //               </p>
// // // // //             </motion.div>

// // // // //             {/* RIGHT SIDE - Accordion Dropdowns */}
// // // // //             <motion.div
// // // // //               initial={{ opacity: 0, x: 30 }}
// // // // //               whileInView={{ opacity: 1, x: 0 }}
// // // // //               transition={{ duration: 0.6 }}
// // // // //               viewport={{ once: true }}
// // // // //               className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
// // // // //             >
// // // // //               {faqItems.map((item, idx) => (
// // // // //                 <AccordionItem
// // // // //                   key={idx}
// // // // //                   question={item.question}
// // // // //                   isOpen={openIndex === idx}
// // // // //                   onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
// // // // //                 >
// // // // //                   {item.answer}
// // // // //                 </AccordionItem>
// // // // //               ))}
// // // // //             </motion.div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* PARALLAX IMAGE SECTION */}
// // // // //       <ParallaxImageSection />

// // // // //       {/* NEXT SECTION */}
   
// // // // //     </>
// // // // //   );
// // // // // };

// // // // // export default Industries;







// // // // import { motion, useScroll, useTransform } from "framer-motion";
// // // // import { useEffect, useRef, useState } from "react";

// // // // const industries = [
// // // //   {
// // // //     title: "Pharmaceuticals",
// // // //     icon: "💊",
// // // //     desc: "The pharmaceutical industry requires highly customized supply chain solutions.",
// // // //   },
// // // //   {
// // // //     title: "Chemicals",
// // // //     icon: "🧪",
// // // //     desc: "We follow IATA guidelines for chemical imports and exports.",
// // // //   },
// // // //   {
// // // //     title: "Textiles",
// // // //     icon: "🧵",
// // // //     desc: "We optimize your supply chain through distribution services.",
// // // //   },
// // // //   {
// // // //     title: "Energy",
// // // //     icon: "⚡",
// // // //     desc: "We support renewable energy logistics globally.",
// // // //   },
// // // //   {
// // // //     title: "Automobile",
// // // //     icon: "🚗",
// // // //     desc: "Flexible solutions for dynamic automobile trends.",
// // // //   },
// // // //   {
// // // //     title: "Packaging",
// // // //     icon: "📦",
// // // //     desc: "Customized packaging logistics worldwide.",
// // // //   },
// // // //   {
// // // //     title: "Time Critical Cargo",
// // // //     icon: "⏱️",
// // // //     desc: "Fast movement for urgent cargo deliveries.",
// // // //   },
// // // //   {
// // // //     title: "Electronics",
// // // //     icon: "📱",
// // // //     desc: "Safe and efficient transport of electronics.",
// // // //   },
// // // // ];

// // // // // Accordion Item Component
// // // // const AccordionItem = ({ question, children, isOpen, onClick }) => {
// // // //   return (
// // // //     <div className="border-b border-gray-200 last:border-b-0">
// // // //       <button
// // // //         onClick={onClick}
// // // //         className="w-full flex items-center justify-between py-4 text-left hover:text-red-600 transition-colors"
// // // //       >
// // // //         <span className="text-gray-800 font-medium">{question}</span>
// // // //         <motion.span
// // // //           animate={{ rotate: isOpen ? 180 : 0 }}
// // // //           transition={{ duration: 0.3 }}
// // // //           className="text-red-600 text-xl"
// // // //         >
// // // //           ▼
// // // //         </motion.span>
// // // //       </button>
// // // //       <motion.div
// // // //         initial={{ height: 0, opacity: 0 }}
// // // //         animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
// // // //         transition={{ duration: 0.3 }}
// // // //         className="overflow-hidden"
// // // //       >
// // // //         <div className="pb-4 text-gray-500 text-sm leading-relaxed pl-4">
// // // //           {children}
// // // //         </div>
// // // //       </motion.div>
// // // //     </div>
// // // //   );
// // // // };

// // // // // Parallax Image Component - No gap at bottom
// // // // const ParallaxImageSection = () => {
// // // //   const containerRef = useRef(null);
// // // //   const { scrollYProgress } = useScroll({
// // // //     target: containerRef,
// // // //     offset: ["start end", "end start"],
// // // //   });

// // // //   const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

// // // //   return (
// // // //     <section 
// // // //       ref={containerRef}
// // // //       className="relative h-[120vh] bg-white overflow-hidden"
// // // //     >
// // // //       <div className="sticky top-0 h-screen overflow-hidden">
// // // //         <motion.div
// // // //           style={{ y: imageY }}
// // // //           className="absolute inset-0 w-full h-[150%]"
// // // //         >
// // // //           <img 
// // // //             src="https://images.pexels.com/photos/2883523/pexels-photo-2883523.jpeg?auto=compress&cs=tinysrgb&w=1600"
// // // //             alt="Container Ship Logistics"
// // // //             className="w-full h-full object-cover"
// // // //             loading="eager"
// // // //           />
// // // //         </motion.div>
// // // //         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
// // // //         <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
// // // //           <motion.div
// // // //             initial={{ opacity: 0, scale: 0 }}
// // // //             whileInView={{ opacity: 1, scale: 1 }}
// // // //             transition={{ duration: 0.6 }}
// // // //             viewport={{ once: true }}
// // // //             className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm"
// // // //           >
// // // //             <span className="text-4xl">🛡️</span>
// // // //           </motion.div>
// // // //           <motion.h2
// // // //             initial={{ opacity: 0, y: 50 }}
// // // //             whileInView={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 0.8 }}
// // // //             viewport={{ once: true }}
// // // //             className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
// // // //           >
// // // //             Protecting What Matters Most
// // // //           </motion.h2>
// // // //           <motion.p
// // // //             initial={{ opacity: 0, y: 30 }}
// // // //             whileInView={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 0.8, delay: 0.2 }}
// // // //             viewport={{ once: true }}
// // // //             className="text-lg text-white/80 max-w-2xl mb-8"
// // // //           >
// // // //             Get in touch to ensure safe and temperature-stable transit for your sensitive products.
// // // //           </motion.p>
// // // //           <motion.button
// // // //             initial={{ opacity: 0, y: 30 }}
// // // //             whileInView={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 0.8, delay: 0.4 }}
// // // //             viewport={{ once: true }}
// // // //             whileHover={{ scale: 1.05 }}
// // // //             whileTap={{ scale: 0.95 }}
// // // //             className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300"
// // // //           >
// // // //             Contact Us Today →
// // // //           </motion.button>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // const Industries = () => {
// // // //   const [visibleCards, setVisibleCards] = useState(2);
// // // //   const [openIndex, setOpenIndex] = useState(null);
// // // //   const sectionRef = useRef(null);

// // // //   useEffect(() => {
// // // //     const handleScroll = () => {
// // // //       const section = sectionRef.current;
// // // //       if (!section) return;
// // // //       const rect = section.getBoundingClientRect();
// // // //       const progress =
// // // //         (window.innerHeight - rect.top) / (rect.height + window.innerHeight);
// // // //       if (progress > 0.15 && visibleCards < 4) setVisibleCards(4);
// // // //       if (progress > 0.35 && visibleCards < 6) setVisibleCards(6);
// // // //       if (progress > 0.55 && visibleCards < 8) setVisibleCards(8);
// // // //     };
// // // //     window.addEventListener("scroll", handleScroll);
// // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // //   }, [visibleCards]);

// // // //   const faqItems = [
// // // //     {
// // // //       question: "What industries do you serve?",
// // // //       answer: "We serve Pharmaceuticals, Chemicals, Food & Beverage, Automotive, and Electronics industries with specialized logistics solutions."
// // // //     },
// // // //     {
// // // //       question: "How do you handle temperature-sensitive shipments?",
// // // //       answer: "We use real-time temperature monitoring, insulated packaging, cold chain logistics, GPS tracking, and have emergency response plans in place."
// // // //     },
// // // //     {
// // // //       question: "What sets your logistics apart?",
// // // //       answer: "Our 24/7 customer support, real-time tracking, global network, customized solutions, and compliance expertise set us apart."
// // // //     },
// // // //     {
// // // //       question: "How do you ensure compliance with regulations?",
// // // //       answer: "We are IATA certified, FDA compliant, follow ISO standards, conduct regular audits, and maintain thorough documentation management."
// // // //     }
// // // //   ];

// // // //   return (
// // // //     <>
// // // //       {/* HERO SECTION */}
// // // //       <section className="relative h-screen bg-black overflow-hidden flex items-center justify-center">
// // // //         <div
// // // //           className="absolute inset-0 bg-cover bg-center opacity-50"
// // // //           style={{
// // // //             backgroundImage:
// // // //               "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c83137?auto=format&fit=crop&w=1920&q=80')",
// // // //           }}
// // // //         />
// // // //         <div className="absolute inset-0 bg-black/60" />
// // // //         <div className="relative z-10 text-center px-6">
// // // //           <motion.h1
// // // //             initial={{ opacity: 0, y: 80 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 1 }}
// // // //             className="text-6xl md:text-7xl font-bold text-white mb-6"
// // // //           >
// // // //             Industries We Serve
// // // //           </motion.h1>
// // // //           <motion.p
// // // //             initial={{ opacity: 0, y: 40 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 1, delay: 0.2 }}
// // // //             className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto"
// // // //           >
// // // //             Innovative logistics solutions empowering industries worldwide.
// // // //           </motion.p>
// // // //         </div>
// // // //       </section>

// // // //       {/* INDUSTRIES SECTION */}
// // // //       <section
// // // //         ref={sectionRef}
// // // //         className="relative bg-white py-32 overflow-hidden"
// // // //       >
// // // //         <div className="max-w-7xl mx-auto px-6">
// // // //           <motion.div
// // // //             initial={{ opacity: 0, y: 80 }}
// // // //             whileInView={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 1 }}
// // // //             viewport={{ once: true }}
// // // //             className="text-center mb-16"
// // // //           >
// // // //             <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
// // // //               Our Industries
// // // //             </h2>
// // // //             <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
// // // //               We provide world-class logistics and supply chain solutions
// // // //               tailored for diverse global industries.
// // // //             </p>
// // // //           </motion.div>

// // // //           <div
// // // //             className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 items-start"
// // // //             style={{ perspective: "1200px" }}
// // // //           >
// // // //             {industries.slice(0, visibleCards).map((item, index) => (
// // // //               <motion.div
// // // //                 key={index}
// // // //                 initial={{ opacity: 0, y: 140, rotateX: 15, scale: 0.9, filter: "blur(12px)" }}
// // // //                 whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1, filter: "blur(0px)" }}
// // // //                 transition={{ duration: 1, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
// // // //                 viewport={{ once: true, amount: 0.2 }}
// // // //                 whileHover={{ y: -12, scale: 1.03, transition: { duration: 0.3 } }}
// // // //                 className="group relative bg-gradient-to-br from-red-600 via-red-700 to-red-900 rounded-3xl p-10 shadow-2xl overflow-hidden"
// // // //               >
// // // //                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-white/10" />
// // // //                 <div className="relative z-10 text-6xl mb-8">{item.icon}</div>
// // // //                 <h3 className="relative z-10 text-3xl font-bold text-white mb-6">{item.title}</h3>
// // // //                 <p className="relative z-10 text-red-100 leading-relaxed text-[16px]">{item.desc}</p>
// // // //                 <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
// // // //               </motion.div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* FAQ SECTION - SPLIT LAYOUT */}
// // // //       <section className="py-20 bg-gray-50">
// // // //         <div className="max-w-6xl mx-auto px-6">
// // // //           <div className="grid md:grid-cols-2 gap-12">
            
// // // //             {/* LEFT SIDE - Title and Description */}
// // // //             <motion.div
// // // //               initial={{ opacity: 0, x: -30 }}
// // // //               whileInView={{ opacity: 1, x: 0 }}
// // // //               transition={{ duration: 0.6 }}
// // // //               viewport={{ once: true }}
// // // //               className="sticky top-32 self-start"
// // // //             >
// // // //               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
// // // //                 Frequently Asked <span className="text-red-600">Questions</span>
// // // //               </h2>
// // // //               <div className="w-16 h-0.5 bg-red-600 mb-6" />
// // // //               <p className="text-gray-500 text-base leading-relaxed">
// // // //                 Find answers to common industry questions, ensuring clarity on our services, processes, and solutions.
// // // //               </p>
// // // //             </motion.div>

// // // //             {/* RIGHT SIDE - Accordion Dropdowns */}
// // // //             <motion.div
// // // //               initial={{ opacity: 0, x: 30 }}
// // // //               whileInView={{ opacity: 1, x: 0 }}
// // // //               transition={{ duration: 0.6 }}
// // // //               viewport={{ once: true }}
// // // //               className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
// // // //             >
// // // //               {faqItems.map((item, idx) => (
// // // //                 <AccordionItem
// // // //                   key={idx}
// // // //                   question={item.question}
// // // //                   isOpen={openIndex === idx}
// // // //                   onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
// // // //                 >
// // // //                   {item.answer}
// // // //                 </AccordionItem>
// // // //               ))}
// // // //             </motion.div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* PARALLAX IMAGE SECTION - Last section before footer, no gap */}
// // // //       <ParallaxImageSection />
// // // //     </>
// // // //   );
// // // // };

// // // // export default Industries;





// // // import { motion } from "framer-motion";
// // // import { useEffect, useRef, useState } from "react";

// // // const industriesData = [
// // //   {
// // //     title: "Pharmaceuticals",
// // //     icon: "💊",
// // //     image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2070",
// // //     desc: "The pharmaceutical industry requires highly customized supply chain solutions. Our temperature-controlled warehouse ensures seamless end-to-end service, prioritizing transparency and attention to detail for precise and efficient operations.",
// // //     fullDesc: "The pharmaceutical industry requires highly customized supply chain solutions. Our temperature-controlled warehouse ensures seamless end-to-end service, prioritizing transparency and attention to detail for precise and efficient operations."
// // //   },
// // //   {
// // //     title: "Chemicals",
// // //     icon: "🧪",
// // //     image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?q=80&w=1974",
// // //     desc: "We follow IATA guidelines for chemical imports and exports, ensuring safe and compliant transportation of hazardous and non-hazardous chemicals.",
// // //     fullDesc: "We follow IATA guidelines for chemical imports and exports, ensuring safe and compliant transportation of hazardous and non-hazardous chemicals with expert handling."
// // //   },
// // //   {
// // //     title: "Energy",
// // //     icon: "⚡",
// // //     image: "https://images.unsplash.com/photo-1508514177221-1881c59c8d5a?q=80&w=2070",
// // //     desc: "As an organization we have kept up with the growing consumption of renewable energy through our forward looking perspective. We have supported the transport of cutting edge tools used to generate renewable energy.",
// // //     fullDesc: "As an organization we have kept up with the growing consumption of renewable energy through our forward looking perspective. We have supported the transport of cutting edge tools used to generate renewable energy by coming up with creative methods to serve emerging markets."
// // //   },
// // //   {
// // //     title: "Automobile",
// // //     icon: "🚗",
// // //     image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2083",
// // //     desc: "Our adaptable nature allows us to handle inventory of any dimension and value for the automobile industry. We demonstrate the same flexibility by catering to the dynamic market trends.",
// // //     fullDesc: "Our adaptable nature allows us to handle inventory of any dimension and value for the automobile industry. We demonstrate the same flexibility by catering to the dynamic market trends of this industry across our global network."
// // //   },
// // //   {
// // //     title: "Packaging",
// // //     icon: "📦",
// // //     image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=2070",
// // //     desc: "The packaging industry needs forwarders with a widespread reach. We are able to offer this through our global partnerships and diverse network of carriers.",
// // //     fullDesc: "The packaging industry needs forwarders with a widespread reach. We are able to offer this through our global partnerships and diverse network of carriers. Our experienced team uses this network to provide you with timely and affordable solutions."
// // //   },
// // //   {
// // //     title: "Time Critical Cargo",
// // //     icon: "⏱️",
// // //     image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070",
// // //     desc: "We leverage strong carrier relations to secure perishable items while ensuring swift efficient delivery for time-critical cargo.",
// // //     fullDesc: "We leverage strong carrier relations to secure priority pricing while ensuring swift, efficient operations for time-critical cargo. Our dedicated team ensures your urgent shipments arrive on time."
// // //   },
// // //   {
// // //     title: "Glassware",
// // //     icon: "🥂",
// // //     image: "https://images.unsplash.com/photo-1579523315372-bd5b2e3ad3b3?q=80&w=2070",
// // //     desc: "Our team is acquainted with the extensive reach and distribution network of the glassware industry. We ensure ultra-high quality standards.",
// // //     fullDesc: "Our team is acquainted with the extensive reach and distribution network of the glassware industry. We ensure ultra-high quality standards and careful handling of delicate glass products."
// // //   },
// // //   {
// // //     title: "Electronics",
// // //     icon: "📱",
// // //     image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070",
// // //     desc: "We ensure the safe and efficient transport of electronic goods, protecting sensitive components from damage and delays.",
// // //     fullDesc: "We ensure the safe and efficient transport of electronic goods, protecting sensitive components from damage and delays. Our logistics solutions help businesses meet market demands while optimizing supply chain costs."
// // //   }
// // // ];

// // // const Industries = () => {
// // //   const [searchTerm, setSearchTerm] = useState("");
// // //   const [visibleCount, setVisibleCount] = useState(4);
// // //   const sectionRef = useRef(null);

// // //   const filteredIndustries = industriesData.filter(industry =>
// // //     industry.title.toLowerCase().includes(searchTerm.toLowerCase())
// // //   );

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       const section = sectionRef.current;
// // //       if (!section) return;
// // //       const rect = section.getBoundingClientRect();
// // //       const progress =
// // //         (window.innerHeight - rect.top) / (rect.height + window.innerHeight);
      
// // //       if (progress > 0.1 && visibleCount < 4) setVisibleCount(4);
// // //       if (progress > 0.3 && visibleCount < 6) setVisibleCount(6);
// // //       if (progress > 0.5 && visibleCount < 8) setVisibleCount(8);
// // //     };
// // //     window.addEventListener("scroll", handleScroll);
// // //     return () => window.removeEventListener("scroll", handleScroll);
// // //   }, [visibleCount]);

// // //   return (
// // //     <>
// // //       {/* HERO SECTION */}
// // //       <section className="relative min-h-[50vh] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden flex items-center justify-center">
// // //         <div className="absolute inset-0 opacity-10">
// // //           <div className="w-full h-full bg-[radial-gradient(circle_at_center,#000_1px,transparent_1px)] bg-[length:40px_40px]" />
// // //         </div>
        
// // //         <div className="relative z-10 text-center px-6 py-16">
// // //           <motion.h1
// // //             initial={{ opacity: 0, y: 50 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.8 }}
// // //             className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
// // //           >
// // //             Industries
// // //           </motion.h1>
// // //           <motion.p
// // //             initial={{ opacity: 0, y: 30 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.8, delay: 0.2 }}
// // //             className="text-gray-600 text-base max-w-2xl mx-auto"
// // //           >
// // //             Over the past two decades we have been coming up with innovative ways to enable global trade across various industries.
// // //           </motion.p>
// // //         </div>
// // //       </section>

// // //       {/* SEARCH BAR SECTION */}
// // //       <section className="py-8 bg-white border-b border-gray-100">
// // //         <div className="max-w-md mx-auto px-6">
// // //           <div className="relative">
// // //             <input
// // //               type="text"
// // //               placeholder="Search industries..."
// // //               value={searchTerm}
// // //               onChange={(e) => setSearchTerm(e.target.value)}
// // //               className="w-full px-5 py-3 pl-12 border border-gray-200 rounded-xl focus:outline-none focus:border-[#e8521a] focus:ring-2 focus:ring-[#e8521a]/20 transition-all"
// // //             />
// // //             <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">🔍</span>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* INDUSTRIES GRID SECTION */}
// // //       <section
// // //         ref={sectionRef}
// // //         className="bg-white py-12"
// // //       >
// // //         <div className="max-w-7xl mx-auto px-6">
// // //           <div className="grid md:grid-cols-2 gap-8">
// // //             {filteredIndustries.slice(0, visibleCount).map((industry, index) => (
// // //               <motion.div
// // //                 key={index}
// // //                 initial={{ opacity: 0, y: 30 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 transition={{ duration: 0.5, delay: index * 0.05 }}
// // //                 viewport={{ once: true }}
// // //                 className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
// // //               >
// // //                 {/* Image Section */}
// // //                 <div className="h-48 overflow-hidden">
// // //                   <img 
// // //                     src={industry.image} 
// // //                     alt={industry.title}
// // //                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
// // //                   />
// // //                 </div>
                
// // //                 {/* Content Section */}
// // //                 <div className="p-6">
// // //                   <div className="flex items-center gap-3 mb-3">
// // //                     <span className="text-3xl">{industry.icon}</span>
// // //                     <h3 className="text-xl font-bold text-gray-800">{industry.title}</h3>
// // //                   </div>
// // //                   <p className="text-gray-600 text-sm leading-relaxed">
// // //                     {industry.desc}
// // //                   </p>
// // //                   <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// // //                     <span className="text-[#e8521a] text-sm font-medium flex items-center gap-1">
// // //                       Read more <span>→</span>
// // //                     </span>
// // //                   </div>
// // //                 </div>
// // //               </motion.div>
// // //             ))}
// // //           </div>
          
// // //           {visibleCount < filteredIndustries.length && (
// // //             <div className="text-center mt-10">
// // //               <p className="text-gray-400 text-sm animate-pulse">Scroll to discover more industries</p>
// // //             </div>
// // //           )}
          
// // //           {filteredIndustries.length === 0 && (
// // //             <div className="text-center py-12">
// // //               <p className="text-gray-500">No industries found matching your search.</p>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </section>

// // //       {/* FAQ SECTION */}
// // //       <section className="py-16 bg-gray-50">
// // //         <div className="max-w-4xl mx-auto px-6">
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 30 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.6 }}
// // //             viewport={{ once: true }}
// // //             className="text-center mb-10"
// // //           >
// // //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
// // //               Frequently Asked <span className="text-[#e8521a]">Questions</span>
// // //             </h2>
// // //             <p className="text-gray-500 text-sm">
// // //               Find answers to common industry questions, ensuring clarity on our services, processes, and solutions.
// // //             </p>
// // //             <div className="w-16 h-0.5 bg-[#e8521a] mx-auto mt-4" />
// // //           </motion.div>

// // //           <div className="space-y-6">
// // //             {[
// // //               { question: "What industries do you serve?", answer: "We serve a wide range of industries including Pharmaceuticals, Chemicals, Textiles, Energy, Automobile, Packaging, Time Critical Cargo, Glassware, and Electronics. Our logistics solutions are tailored to meet the unique demands of each sector." },
// // //               { question: "How do you handle temperature-sensitive shipments?", answer: "We use advanced temperature-controlled packaging solutions, real-time monitoring systems, and specialized handling procedures to ensure temperature-sensitive products remain within their required temperature range throughout the entire shipping process." },
// // //               { question: "What sets your logistics apart?", answer: "Our commitment to innovation, real-time tracking, dedicated customer support, global network, and customized solutions tailored to each industry's specific needs set us apart from traditional logistics providers." },
// // //               { question: "How do you ensure compliance with regulations?", answer: "We strictly follow IATA guidelines, international shipping regulations, and industry-specific compliance standards. Our team undergoes regular training to stay updated with the latest regulatory requirements." }
// // //             ].map((faq, idx) => (
// // //               <motion.div
// // //                 key={idx}
// // //                 initial={{ opacity: 0, y: 20 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 transition={{ duration: 0.5, delay: idx * 0.1 }}
// // //                 viewport={{ once: true }}
// // //                 className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all"
// // //               >
// // //                 <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3>
// // //                 <p className="text-gray-500 text-sm leading-relaxed">{faq.answer}</p>
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* TAILORED LOGISTICS CTA SECTION */}
// // //       <section className="py-16 bg-white">
// // //         <div className="max-w-4xl mx-auto text-center px-6">
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 30 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.6 }}
// // //             viewport={{ once: true }}
// // //             className="bg-red-50 rounded-2xl p-10 border border-red-100"
// // //           >
// // //             <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
// // //               Tailored Logistics for Every Industry
// // //             </h2>
// // //             <p className="text-gray-600 text-sm max-w-2xl mx-auto mb-6">
// // //               Delivering tailored supply chain solutions to meet the unique needs of industries worldwide.
// // //             </p>
// // //             <motion.button
// // //               whileHover={{ scale: 1.05 }}
// // //               whileTap={{ scale: 0.95 }}
// // //               className="bg-[#e8521a] hover:bg-[#c94415] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-md"
// // //             >
// // //               Contact Us Today →
// // //             </motion.button>
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* INDIA OFFICES SECTION */}
// // //       <section className="py-16 bg-gray-50">
// // //         <div className="max-w-7xl mx-auto px-6">
// // //           <div className="grid md:grid-cols-4 gap-8">
// // //             <div>
// // //               <h2 className="text-2xl font-bold text-gray-900 mb-2">Our India Offices</h2>
// // //               <div className="w-12 h-0.5 bg-[#e8521a] mb-4" />
// // //             </div>
// // //             <div>
// // //               <h3 className="text-lg font-semibold text-gray-800 mb-2">Mumbai</h3>
// // //               <p className="text-gray-500 text-sm">902, 'A' Wing, Times Square, Andheri-Kurla Road, Marol, Andheri (East), Mumbai 400 059</p>
// // //             </div>
// // //             <div>
// // //               <h3 className="text-lg font-semibold text-gray-800 mb-2">Ahmedabad</h3>
// // //               <p className="text-gray-500 text-sm">D21 The Address, True Value West Gate, SG highway, Ahmedabad 380 009</p>
// // //             </div>
// // //             <div>
// // //               <h3 className="text-lg font-semibold text-gray-800 mb-2">Bengaluru</h3>
// // //               <p className="text-gray-500 text-sm">205, 2nd floor, Connection point H.A.L Airport Exit Road, Bangalore 560 017</p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </>
// // //   );
// // // };

// // // export default Industries;









// // import { motion } from "framer-motion";
// // import { useEffect, useRef, useState } from "react";

// // const industriesData = [
// //   {
// //     title: "Pharmaceuticals",
// //     icon: "💊",
// //     image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2070",
// //     desc: "The pharmaceutical industry requires highly customized supply chain solutions. Our temperature-controlled warehouse ensures seamless end-to-end service, prioritizing transparency and attention to detail for precise and efficient operations.",
// //   },
// //   {
// //     title: "Chemicals",
// //     icon: "🧪",
// //     image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?q=80&w=1974",
// //     desc: "We follow IATA guidelines for chemical imports and exports, ensuring safe and compliant transportation of hazardous and non-hazardous chemicals.",
// //   },
// //   {
// //     title: "Energy",
// //     icon: "⚡",
// //     image: "https://images.unsplash.com/photo-1508514177221-1881c59c8d5a?q=80&w=2070",
// //     desc: "As an organization we have kept up with the growing consumption of renewable energy through our forward looking perspective. We have supported the transport of cutting edge tools used to generate renewable energy.",
// //   },
// //   {
// //     title: "Automobile",
// //     icon: "🚗",
// //     image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2083",
// //     desc: "Our adaptable nature allows us to handle inventory of any dimension and value for the automobile industry. We demonstrate the same flexibility by catering to the dynamic market trends.",
// //   },
// //   {
// //     title: "Packaging",
// //     icon: "📦",
// //     image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=2070",
// //     desc: "The packaging industry needs forwarders with a widespread reach. We are able to offer this through our global partnerships and diverse network of carriers.",
// //   },
// //   {
// //     title: "Time Critical Cargo",
// //     icon: "⏱️",
// //     image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070",
// //     desc: "We leverage strong carrier relations to secure perishable items while ensuring swift efficient delivery for time-critical cargo.",
// //   },
// //   {
// //     title: "Glassware",
// //     icon: "🥂",
// //     image: "https://images.unsplash.com/photo-1579523315372-bd5b2e3ad3b3?q=80&w=2070",
// //     desc: "Our team is acquainted with the extensive reach and distribution network of the glassware industry. We ensure ultra-high quality standards.",
// //   },
// //   {
// //     title: "Electronics",
// //     icon: "📱",
// //     image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070",
// //     desc: "We ensure the safe and efficient transport of electronic goods, protecting sensitive components from damage and delays.",
// //   },
// // ];

// // // Accordion Item Component for FAQ
// // const AccordionItem = ({ question, answer, isOpen, onClick }) => {
// //   return (
// //     <div className="border-b border-gray-200 last:border-b-0">
// //       <button
// //         onClick={onClick}
// //         className="w-full flex items-center justify-between py-4 text-left hover:text-[#e8521a] transition-colors"
// //       >
// //         <span className="text-gray-700 font-medium text-base">{question}</span>
// //         <motion.span
// //           animate={{ rotate: isOpen ? 180 : 0 }}
// //           transition={{ duration: 0.3 }}
// //           className="text-[#e8521a] text-lg"
// //         >
// //           ▼
// //         </motion.span>
// //       </button>
// //       <motion.div
// //         initial={{ height: 0, opacity: 0 }}
// //         animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
// //         transition={{ duration: 0.3 }}
// //         className="overflow-hidden"
// //       >
// //         <div className="pb-4 text-gray-500 text-sm leading-relaxed">
// //           {answer}
// //         </div>
// //       </motion.div>
// //     </div>
// //   );
// // };

// // const Industries = () => {
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [visibleCount, setVisibleCount] = useState(4);
// //   const [openFaqIndex, setOpenFaqIndex] = useState(null);
// //   const sectionRef = useRef(null);

// //   const filteredIndustries = industriesData.filter(industry =>
// //     industry.title.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const section = sectionRef.current;
// //       if (!section) return;
// //       const rect = section.getBoundingClientRect();
// //       const progress =
// //         (window.innerHeight - rect.top) / (rect.height + window.innerHeight);
      
// //       if (progress > 0.1 && visibleCount < 4) setVisibleCount(4);
// //       if (progress > 0.3 && visibleCount < 6) setVisibleCount(6);
// //       if (progress > 0.5 && visibleCount < 8) setVisibleCount(8);
// //     };
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, [visibleCount]);

// //   const faqItems = [
// //     {
// //       question: "What industries do you serve?",
// //       answer: "We serve a wide range of industries including Pharmaceuticals, Chemicals, Textiles, Energy, Automobile, Packaging, Time Critical Cargo, Glassware, and Electronics. Our logistics solutions are tailored to meet the unique demands of each sector."
// //     },
// //     {
// //       question: "How do you handle temperature-sensitive shipments?",
// //       answer: "We use advanced temperature-controlled packaging solutions, real-time monitoring systems, and specialized handling procedures to ensure temperature-sensitive products remain within their required temperature range throughout the entire shipping process."
// //     },
// //     {
// //       question: "What sets your logistics apart?",
// //       answer: "Our commitment to innovation, real-time tracking, dedicated customer support, global network, and customized solutions tailored to each industry's specific needs set us apart from traditional logistics providers."
// //     },
// //     {
// //       question: "How do you ensure compliance with regulations?",
// //       answer: "We strictly follow IATA guidelines, international shipping regulations, and industry-specific compliance standards. Our team undergoes regular training to stay updated with the latest regulatory requirements."
// //     }
// //   ];

// //   return (
// //     <>
// //       {/* HERO SECTION */}
// //       <section className="relative min-h-[40vh] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden flex items-center justify-center">
// //         <div className="absolute inset-0 opacity-10">
// //           <div className="w-full h-full bg-[radial-gradient(circle_at_center,#000_1px,transparent_1px)] bg-[length:40px_40px]" />
// //         </div>
        
// //         <div className="relative z-10 text-center px-6 py-16">
// //           <motion.h1
// //             initial={{ opacity: 0, y: 50 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8 }}
// //             className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
// //           >
// //             Industries
// //           </motion.h1>
// //           <motion.p
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8, delay: 0.2 }}
// //             className="text-gray-600 text-base max-w-2xl mx-auto"
// //           >
// //             Over the past two decades we have been coming up with innovative ways to enable global trade across various industries.
// //           </motion.p>
// //         </div>
// //       </section>

// //       {/* SEARCH BAR SECTION */}
// //       <section className="py-8 bg-white border-b border-gray-100">
// //         <div className="max-w-md mx-auto px-6">
// //           <div className="relative">
// //             <input
// //               type="text"
// //               placeholder="Search industries..."
// //               value={searchTerm}
// //               onChange={(e) => setSearchTerm(e.target.value)}
// //               className="w-full px-5 py-3 pl-12 border border-gray-200 rounded-xl focus:outline-none focus:border-[#e8521a] focus:ring-2 focus:ring-[#e8521a]/20 transition-all"
// //             />
// //             <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">🔍</span>
// //           </div>
// //         </div>
// //       </section>

// //       {/* INDUSTRIES GRID SECTION */}
// //       <section
// //         ref={sectionRef}
// //         className="bg-white py-12"
// //       >
// //         <div className="max-w-7xl mx-auto px-6">
// //           <div className="grid md:grid-cols-2 gap-8">
// //             {filteredIndustries.slice(0, visibleCount).map((industry, index) => (
// //               <motion.div
// //                 key={index}
// //                 initial={{ opacity: 0, y: 30 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.5, delay: index * 0.05 }}
// //                 viewport={{ once: true }}
// //                 className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
// //               >
// //                 <div className="h-48 overflow-hidden">
// //                   <img 
// //                     src={industry.image} 
// //                     alt={industry.title}
// //                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
// //                   />
// //                 </div>
// //                 <div className="p-6">
// //                   <div className="flex items-center gap-3 mb-3">
// //                     <span className="text-3xl">{industry.icon}</span>
// //                     <h3 className="text-xl font-bold text-gray-800">{industry.title}</h3>
// //                   </div>
// //                   <p className="text-gray-600 text-sm leading-relaxed">
// //                     {industry.desc}
// //                   </p>
// //                   <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// //                     <span className="text-[#e8521a] text-sm font-medium flex items-center gap-1">
// //                       Read more <span>→</span>
// //                     </span>
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div>
          
// //           {visibleCount < filteredIndustries.length && (
// //             <div className="text-center mt-10">
// //               <p className="text-gray-400 text-sm animate-pulse">Scroll to discover more industries</p>
// //             </div>
// //           )}
          
// //           {filteredIndustries.length === 0 && (
// //             <div className="text-center py-12">
// //               <p className="text-gray-500">No industries found matching your search.</p>
// //             </div>
// //           )}
// //         </div>
// //       </section>

// //       {/* FAQ SECTION - SPLIT LAYOUT: LEFT TEXT, RIGHT ACCORDION */}
// //       <section className="py-16 bg-gray-50">
// //         <div className="max-w-6xl mx-auto px-6">
// //           <div className="grid lg:grid-cols-2 gap-12">
            
// //             {/* LEFT SIDE - Title and Description */}
// //             <motion.div
// //               initial={{ opacity: 0, x: -30 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.6 }}
// //               viewport={{ once: true }}
// //               className="sticky top-32 self-start"
// //             >
// //               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
// //                 Frequently Asked <span className="text-[#e8521a]">Questions</span>
// //               </h2>
// //               <div className="w-16 h-0.5 bg-[#e8521a] mb-6" />
// //               <p className="text-gray-500 text-base leading-relaxed">
// //                 Find answers to common industry questions, ensuring clarity on our services, processes, and solutions.
// //               </p>
// //             </motion.div>

// //             {/* RIGHT SIDE - Accordion Dropdowns */}
// //             <motion.div
// //               initial={{ opacity: 0, x: 30 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.6 }}
// //               viewport={{ once: true }}
// //               className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
// //             >
// //               {faqItems.map((faq, idx) => (
// //                 <AccordionItem
// //                   key={idx}
// //                   question={faq.question}
// //                   answer={faq.answer}
// //                   isOpen={openFaqIndex === idx}
// //                   onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
// //                 />
// //               ))}
// //             </motion.div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* TAILORED LOGISTICS CTA SECTION */}
// //       <section className="py-16 bg-white">
// //         <div className="max-w-4xl mx-auto text-center px-6">
// //           <motion.div
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6 }}
// //             viewport={{ once: true }}
// //             className="bg-red-50 rounded-2xl p-10 border border-red-100"
// //           >
// //             <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
// //               Tailored Logistics for Every Industry
// //             </h2>
// //             <p className="text-gray-600 text-sm max-w-2xl mx-auto mb-6">
// //               Delivering tailored supply chain solutions to meet the unique needs of industries worldwide.
// //             </p>
// //             <motion.button
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //               className="bg-[#e8521a] hover:bg-[#c94415] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-md"
// //             >
// //               Contact Us Today →
// //             </motion.button>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* INDIA OFFICES SECTION */}
// //       <section className="py-16 bg-gray-50">
// //         <div className="max-w-7xl mx-auto px-6">
// //           <div className="grid md:grid-cols-4 gap-8">
// //             <div>
// //               <h2 className="text-2xl font-bold text-gray-900 mb-2">Our India Offices</h2>
// //               <div className="w-12 h-0.5 bg-[#e8521a] mb-4" />
// //             </div>
// //             <div>
// //               <h3 className="text-lg font-semibold text-gray-800 mb-2">Mumbai</h3>
// //               <p className="text-gray-500 text-sm">902, 'A' Wing, Times Square, Andheri-Kurla Road, Marol, Andheri (East), Mumbai 400 059</p>
// //             </div>
// //             <div>
// //               <h3 className="text-lg font-semibold text-gray-800 mb-2">Ahmedabad</h3>
// //               <p className="text-gray-500 text-sm">D21 The Address, True Value West Gate, SG highway, Ahmedabad 380 009</p>
// //             </div>
// //             <div>
// //               <h3 className="text-lg font-semibold text-gray-800 mb-2">Bengaluru</h3>
// //               <p className="text-gray-500 text-sm">205, 2nd floor, Connection point H.A.L Airport Exit Road, Bangalore 560 017</p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </>
// //   );
// // };

// // export default Industries;







// import { motion, useScroll, useTransform } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

// const industriesData = [
//   {
//     title: "Pharmaceuticals",
//     icon: "💊",
//     image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2070",
//     desc: "The pharmaceutical industry requires highly customized supply chain solutions. Our temperature-controlled warehouse ensures seamless end-to-end service, prioritizing transparency and attention to detail for precise and efficient operations.",
//   },
//   {
//     title: "Chemicals",
//     icon: "🧪",
//     image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?q=80&w=1974",
//     desc: "We follow IATA guidelines for chemical imports and exports, ensuring safe and compliant transportation of hazardous and non-hazardous chemicals.",
//   },
//   {
//     title: "Energy",
//     icon: "⚡",
//     image: "https://images.unsplash.com/photo-1508514177221-1881c59c8d5a?q=80&w=2070",
//     desc: "As an organization we have kept up with the growing consumption of renewable energy through our forward looking perspective. We have supported the transport of cutting edge tools used to generate renewable energy.",
//   },
//   {
//     title: "Automobile",
//     icon: "🚗",
//     image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2083",
//     desc: "Our adaptable nature allows us to handle inventory of any dimension and value for the automobile industry. We demonstrate the same flexibility by catering to the dynamic market trends.",
//   },
//   {
//     title: "Packaging",
//     icon: "📦",
//     image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=2070",
//     desc: "The packaging industry needs forwarders with a widespread reach. We are able to offer this through our global partnerships and diverse network of carriers.",
//   },
//   {
//     title: "Time Critical Cargo",
//     icon: "⏱️",
//     image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070",
//     desc: "We leverage strong carrier relations to secure perishable items while ensuring swift efficient delivery for time-critical cargo.",
//   },
//   {
//     title: "Glassware",
//     icon: "🥂",
//     image: "https://images.unsplash.com/photo-1579523315372-bd5b2e3ad3b3?q=80&w=2070",
//     desc: "Our team is acquainted with the extensive reach and distribution network of the glassware industry. We ensure ultra-high quality standards.",
//   },
//   {
//     title: "Electronics",
//     icon: "📱",
//     image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070",
//     desc: "We ensure the safe and efficient transport of electronic goods, protecting sensitive components from damage and delays.",
//   },
// ];

// // Accordion Item Component for FAQ
// const AccordionItem = ({ question, answer, isOpen, onClick }) => {
//   return (
//     <div className="border-b border-gray-200 last:border-b-0">
//       <button
//         onClick={onClick}
//         className="w-full flex items-center justify-between py-4 text-left hover:text-[#e8521a] transition-colors"
//       >
//         <span className="text-gray-700 font-medium text-base">{question}</span>
//         <motion.span
//           animate={{ rotate: isOpen ? 180 : 0 }}
//           transition={{ duration: 0.3 }}
//           className="text-[#e8521a] text-lg"
//         >
//           ▼
//         </motion.span>
//       </button>
//       <motion.div
//         initial={{ height: 0, opacity: 0 }}
//         animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
//         transition={{ duration: 0.3 }}
//         className="overflow-hidden"
//       >
//         <div className="pb-4 text-gray-500 text-sm leading-relaxed">
//           {answer}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// // Parallax Image Component
// const ParallaxImageSection = () => {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });

//   const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

//   return (
//     <section 
//       ref={containerRef}
//       className="relative h-[120vh] bg-white overflow-hidden"
//     >
//       <div className="sticky top-0 h-screen overflow-hidden">
//         <motion.div
//           style={{ y: imageY }}
//           className="absolute inset-0 w-full h-[150%]"
//         >
//           <img 
//             src="https://images.pexels.com/photos/2883523/pexels-photo-2883523.jpeg?auto=compress&cs=tinysrgb&w=1600"
//             alt="Container Ship Logistics"
//             className="w-full h-full object-cover"
//             loading="eager"
//           />
//         </motion.div>
//         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
//         <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
//           <motion.div
//             initial={{ opacity: 0, scale: 0 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm"
//           >
//             <span className="text-4xl">🛡️</span>
//           </motion.div>
//           <motion.h2
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
//           >
//             Protecting What Matters Most
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="text-lg text-white/80 max-w-2xl mb-8"
//           >
//             Get in touch to ensure safe and temperature-stable transit for your sensitive products.
//           </motion.p>
//           <motion.button
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             viewport={{ once: true }}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-white text-[#e8521a] px-8 py-3 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300"
//           >
//             Contact Us Today →
//           </motion.button>
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             viewport={{ once: true }}
//             className="absolute bottom-8 text-white/50 text-xs flex items-center gap-2"
//           >
//             <span>Scroll to explore</span>
//             <span className="text-lg">↓</span>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const Industries = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [visibleCount, setVisibleCount] = useState(4);
//   const [openFaqIndex, setOpenFaqIndex] = useState(null);
//   const sectionRef = useRef(null);

//   const filteredIndustries = industriesData.filter(industry =>
//     industry.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   useEffect(() => {
//     const handleScroll = () => {
//       const section = sectionRef.current;
//       if (!section) return;
//       const rect = section.getBoundingClientRect();
//       const progress =
//         (window.innerHeight - rect.top) / (rect.height + window.innerHeight);
      
//       if (progress > 0.1 && visibleCount < 4) setVisibleCount(4);
//       if (progress > 0.3 && visibleCount < 6) setVisibleCount(6);
//       if (progress > 0.5 && visibleCount < 8) setVisibleCount(8);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [visibleCount]);

//   const faqItems = [
//     {
//       question: "What industries do you serve?",
//       answer: "We serve a wide range of industries including Pharmaceuticals, Chemicals, Textiles, Energy, Automobile, Packaging, Time Critical Cargo, Glassware, and Electronics. Our logistics solutions are tailored to meet the unique demands of each sector."
//     },
//     {
//       question: "How do you handle temperature-sensitive shipments?",
//       answer: "We use advanced temperature-controlled packaging solutions, real-time monitoring systems, and specialized handling procedures to ensure temperature-sensitive products remain within their required temperature range throughout the entire shipping process."
//     },
//     {
//       question: "What sets your logistics apart?",
//       answer: "Our commitment to innovation, real-time tracking, dedicated customer support, global network, and customized solutions tailored to each industry's specific needs set us apart from traditional logistics providers."
//     },
//     {
//       question: "How do you ensure compliance with regulations?",
//       answer: "We strictly follow IATA guidelines, international shipping regulations, and industry-specific compliance standards. Our team undergoes regular training to stay updated with the latest regulatory requirements."
//     }
//   ];

//   return (
//     <>
//       {/* HERO SECTION */}
//       // Change the hero section className
// <section className="relative min-h-[40vh] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden flex items-center justify-center pt-24">
//         <div className="absolute inset-0 opacity-10">
//           <div className="w-full h-full bg-[radial-gradient(circle_at_center,#000_1px,transparent_1px)] bg-[length:40px_40px]" />
//         </div>
        
//         <div className="relative z-10 text-center px-6 py-16">
//           <motion.h1
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
//           >
//             Industries
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-gray-600 text-base max-w-2xl mx-auto"
//           >
//             Over the past two decades we have been coming up with innovative ways to enable global trade across various industries.
//           </motion.p>
//         </div>
//       </section>

//       {/* SEARCH BAR SECTION */}
//       <section className="py-8 bg-white border-b border-gray-100">
//         <div className="max-w-md mx-auto px-6">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search industries..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full px-5 py-3 pl-12 border border-gray-200 rounded-xl focus:outline-none focus:border-[#e8521a] focus:ring-2 focus:ring-[#e8521a]/20 transition-all"
//             />
//             <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">🔍</span>
//           </div>
//         </div>
//       </section>

//       {/* INDUSTRIES GRID SECTION */}
//       <section
//         ref={sectionRef}
//         className="bg-white py-12"
//       >
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid md:grid-cols-2 gap-8">
//             {filteredIndustries.slice(0, visibleCount).map((industry, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.05 }}
//                 viewport={{ once: true }}
//                 className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
//               >
//                 <div className="h-48 overflow-hidden">
//                   <img 
//                     src={industry.image} 
//                     alt={industry.title}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <div className="flex items-center gap-3 mb-3">
//                     <span className="text-3xl">{industry.icon}</span>
//                     <h3 className="text-xl font-bold text-gray-800">{industry.title}</h3>
//                   </div>
//                   <p className="text-gray-600 text-sm leading-relaxed">
//                     {industry.desc}
//                   </p>
//                   <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <span className="text-[#e8521a] text-sm font-medium flex items-center gap-1">
//                       Read more <span>→</span>
//                     </span>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
          
//           {visibleCount < filteredIndustries.length && (
//             <div className="text-center mt-10">
//               <p className="text-gray-400 text-sm animate-pulse">Scroll to discover more industries</p>
//             </div>
//           )}
          
//           {filteredIndustries.length === 0 && (
//             <div className="text-center py-12">
//               <p className="text-gray-500">No industries found matching your search.</p>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* FAQ SECTION - SPLIT LAYOUT */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="grid lg:grid-cols-2 gap-12">
            
//             {/* LEFT SIDE - Title and Description */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="sticky top-32 self-start"
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//                 Frequently Asked <span className="text-[#e8521a]">Questions</span>
//               </h2>
//               <div className="w-16 h-0.5 bg-[#e8521a] mb-6" />
//               <p className="text-gray-500 text-base leading-relaxed">
//                 Find answers to common industry questions, ensuring clarity on our services, processes, and solutions.
//               </p>
//             </motion.div>

//             {/* RIGHT SIDE - Accordion Dropdowns */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
//             >
//               {faqItems.map((faq, idx) => (
//                 <AccordionItem
//                   key={idx}
//                   question={faq.question}
//                   answer={faq.answer}
//                   isOpen={openFaqIndex === idx}
//                   onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
//                 />
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* PARALLAX IMAGE SECTION - Scrolling transparent image */}
//       <ParallaxImageSection />

//       {/* TAILORED LOGISTICS CTA SECTION */}
//       <section className="py-16 bg-white">
//         <div className="max-w-4xl mx-auto text-center px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="bg-red-50 rounded-2xl p-10 border border-red-100"
//           >
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
//               Tailored Logistics for Every Industry
//             </h2>
//             <p className="text-gray-600 text-sm max-w-2xl mx-auto mb-6">
//               Delivering tailored supply chain solutions to meet the unique needs of industries worldwide.
//             </p>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-[#e8521a] hover:bg-[#c94415] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-md"
//             >
//               Contact Us Today →
//             </motion.button>
//           </motion.div>
//         </div>
//       </section>

//       {/* INDIA OFFICES SECTION */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid md:grid-cols-4 gap-8">
//             <div>
//               <h2 className="text-2xl font-bold text-gray-900 mb-2">Our India Offices</h2>
//               <div className="w-12 h-0.5 bg-[#e8521a] mb-4" />
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold text-gray-800 mb-2">Mumbai</h3>
//               <p className="text-gray-500 text-sm">902, 'A' Wing, Times Square, Andheri-Kurla Road, Marol, Andheri (East), Mumbai 400 059</p>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold text-gray-800 mb-2">Ahmedabad</h3>
//               <p className="text-gray-500 text-sm">D21 The Address, True Value West Gate, SG highway, Ahmedabad 380 009</p>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold text-gray-800 mb-2">Bengaluru</h3>
//               <p className="text-gray-500 text-sm">205, 2nd floor, Connection point H.A.L Airport Exit Road, Bangalore 560 017</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Industries;





import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const industriesData = [
  {
    title: "Pharmaceuticals",
    icon: "💊",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2070",
    desc: "The pharmaceutical industry requires highly customized supply chain solutions. Our temperature-controlled warehouse ensures seamless end-to-end service, prioritizing transparency and attention to detail for precise and efficient operations.",
  },
  {
    title: "Chemicals",
    icon: "🧪",
    image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?q=80&w=1974",
    desc: "We follow IATA guidelines for chemical imports and exports, ensuring safe and compliant transportation of hazardous and non-hazardous chemicals.",
  },
  {
    title: "Energy",
    icon: "⚡",
    image: "https://images.unsplash.com/photo-1508514177221-1881c59c8d5a?q=80&w=2070",
    desc: "As an organization we have kept up with the growing consumption of renewable energy through our forward looking perspective. We have supported the transport of cutting edge tools used to generate renewable energy.",
  },
  {
    title: "Automobile",
    icon: "🚗",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2083",
    desc: "Our adaptable nature allows us to handle inventory of any dimension and value for the automobile industry. We demonstrate the same flexibility by catering to the dynamic market trends.",
  },
  {
    title: "Packaging",
    icon: "📦",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=2070",
    desc: "The packaging industry needs forwarders with a widespread reach. We are able to offer this through our global partnerships and diverse network of carriers.",
  },
  {
    title: "Time Critical Cargo",
    icon: "⏱️",
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070",
    desc: "We leverage strong carrier relations to secure perishable items while ensuring swift efficient delivery for time-critical cargo.",
  },
  {
    title: "Glassware",
    icon: "🥂",
    image: "https://images.unsplash.com/photo-1579523315372-bd5b2e3ad3b3?q=80&w=2070",
    desc: "Our team is acquainted with the extensive reach and distribution network of the glassware industry. We ensure ultra-high quality standards.",
  },
  {
    title: "Electronics",
    icon: "📱",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070",
    desc: "We ensure the safe and efficient transport of electronic goods, protecting sensitive components from damage and delays.",
  },
];

// Accordion Item Component for FAQ
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-4 text-left hover:text-[#e8521a] transition-colors"
      >
        <span className="text-gray-700 font-medium text-base">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-[#e8521a] text-lg"
        >
          ▼
        </motion.span>
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="pb-4 text-gray-500 text-sm leading-relaxed">
          {answer}
        </div>
      </motion.div>
    </div>
  );
};

// Parallax Image Component
const ParallaxImageSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section 
      ref={containerRef}
      className="relative h-[120vh] bg-white overflow-hidden"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ y: imageY }}
          className="absolute inset-0 w-full h-[150%]"
        >
          <img 
            src="https://images.pexels.com/photos/2883523/pexels-photo-2883523.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Container Ship Logistics"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm"
          >
            <span className="text-4xl">🛡️</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            Protecting What Matters Most
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-white/80 max-w-2xl mb-8"
          >
            Get in touch to ensure safe and temperature-stable transit for your sensitive products.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#e8521a] px-8 py-3 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Contact Us Today →
          </motion.button>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="absolute bottom-8 text-white/50 text-xs flex items-center gap-2"
          >
            <span>Scroll to explore</span>
            <span className="text-lg">↓</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Dancing/Flying Card Animation Variants
const dancingCardVariants = {
  hidden: (index) => ({
    opacity: 0,
    y: -100,
    rotateX: -30,
    scale: 0.8,
  }),
  visible: (index) => ({
    opacity: 1,
    y: [0, -15, 0, -8, 0],
    rotateX: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      delay: index * 0.1,
      duration: 0.8,
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: index * 0.15,
      },
    },
  }),
};

const Industries = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(4);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const sectionRef = useRef(null);

  const filteredIndustries = industriesData.filter(industry =>
    industry.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const progress =
        (window.innerHeight - rect.top) / (rect.height + window.innerHeight);
      
      if (progress > 0.1 && visibleCount < 4) setVisibleCount(4);
      if (progress > 0.3 && visibleCount < 6) setVisibleCount(6);
      if (progress > 0.5 && visibleCount < 8) setVisibleCount(8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleCount]);

  const faqItems = [
    {
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including Pharmaceuticals, Chemicals, Textiles, Energy, Automobile, Packaging, Time Critical Cargo, Glassware, and Electronics. Our logistics solutions are tailored to meet the unique demands of each sector."
    },
    {
      question: "How do you handle temperature-sensitive shipments?",
      answer: "We use advanced temperature-controlled packaging solutions, real-time monitoring systems, and specialized handling procedures to ensure temperature-sensitive products remain within their required temperature range throughout the entire shipping process."
    },
    {
      question: "What sets your logistics apart?",
      answer: "Our commitment to innovation, real-time tracking, dedicated customer support, global network, and customized solutions tailored to each industry's specific needs set us apart from traditional logistics providers."
    },
    {
      question: "How do you ensure compliance with regulations?",
      answer: "We strictly follow IATA guidelines, international shipping regulations, and industry-specific compliance standards. Our team undergoes regular training to stay updated with the latest regulatory requirements."
    }
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[40vh] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden flex items-center justify-center pt-24">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,#000_1px,transparent_1px)] bg-[length:40px_40px]" />
        </div>
        
        <div className="relative z-10 text-center px-6 py-16">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
          >
            Industries
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-600 text-base max-w-2xl mx-auto"
          >
            Over the past two decades we have been coming up with innovative ways to enable global trade across various industries.
          </motion.p>
        </div>
      </section>

      {/* SEARCH BAR SECTION */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-md mx-auto px-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search industries..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-3 pl-12 border border-gray-200 rounded-xl focus:outline-none focus:border-[#e8521a] focus:ring-2 focus:ring-[#e8521a]/20 transition-all"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">🔍</span>
          </div>
        </div>
      </section>

      {/* INDUSTRIES GRID SECTION - WITH DANCING/FLYING CARDS */}
      <section
        ref={sectionRef}
        className="bg-white py-12 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredIndustries.slice(0, visibleCount).map((industry, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={dancingCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={industry.image} 
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{industry.icon}</span>
                    <h3 className="text-xl font-bold text-gray-800">{industry.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {industry.desc}
                  </p>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[#e8521a] text-sm font-medium flex items-center gap-1">
                      Read more <span>→</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {visibleCount < filteredIndustries.length && (
            <div className="text-center mt-10">
              <p className="text-gray-400 text-sm animate-pulse">Scroll to discover more industries</p>
            </div>
          )}
          
          {filteredIndustries.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No industries found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* FAQ SECTION - SPLIT LAYOUT */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* LEFT SIDE - Title and Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="sticky top-32 self-start"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked <span className="text-[#e8521a]">Questions</span>
              </h2>
              <div className="w-16 h-0.5 bg-[#e8521a] mb-6" />
              <p className="text-gray-500 text-base leading-relaxed">
                Find answers to common industry questions, ensuring clarity on our services, processes, and solutions.
              </p>
            </motion.div>

            {/* RIGHT SIDE - Accordion Dropdowns */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
            >
              {faqItems.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFaqIndex === idx}
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* PARALLAX IMAGE SECTION */}
      <ParallaxImageSection />

      {/* TAILORED LOGISTICS CTA SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-red-50 rounded-2xl p-10 border border-red-100"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Tailored Logistics for Every Industry
            </h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto mb-6">
              Delivering tailored supply chain solutions to meet the unique needs of industries worldwide.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#e8521a] hover:bg-[#c94415] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-md"
            >
              Contact Us Today →
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* INDIA OFFICES SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Our India Offices</h2>
              <div className="w-12 h-0.5 bg-[#e8521a] mb-4" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Mumbai</h3>
              <p className="text-gray-500 text-sm">902, 'A' Wing, Times Square, Andheri-Kurla Road, Marol, Andheri (East), Mumbai 400 059</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Ahmedabad</h3>
              <p className="text-gray-500 text-sm">D21 The Address, True Value West Gate, SG highway, Ahmedabad 380 009</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Bengaluru</h3>
              <p className="text-gray-500 text-sm">205, 2nd floor, Connection point H.A.L Airport Exit Road, Bangalore 560 017</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Industries;