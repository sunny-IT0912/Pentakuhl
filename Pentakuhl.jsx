// // // // // // // // // // // // // // const Pentakuhl = () => {
// // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // //     <>
// // // // // // // // // // // // // //       {/* Hero Section */}
// // // // // // // // // // // // // //       <section className="bg-gradient-to-br from-primary via-dark to-black text-white py-28 relative overflow-hidden">
// // // // // // // // // // // // // //         <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
// // // // // // // // // // // // // //           <div className="inline-block bg-accent/20 text-accent text-sm font-medium px-6 py-2 rounded-full mb-6">
// // // // // // // // // // // // // //             AI-Powered Logistics
// // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // //           <h1 className="text-6xl md:text-7xl font-bold heading-font leading-tight mb-8">
// // // // // // // // // // // // // //             Meet <span className="text-accent">Pentakuhl</span>
// // // // // // // // // // // // // //           </h1>
// // // // // // // // // // // // // //           <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
// // // // // // // // // // // // // //             Your intelligent logistics assistant. Instant quotes, smart routing, and predictive insights.
// // // // // // // // // // // // // //           </p>
// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //       </section>

// // // // // // // // // // // // // //       {/* Features */}
// // // // // // // // // // // // // //       <section className="py-20 bg-white">
// // // // // // // // // // // // // //         <div className="max-w-7xl mx-auto px-6">
// // // // // // // // // // // // // //           <div className="text-center mb-16">
// // // // // // // // // // // // // //             <h2 className="text-4xl font-bold heading-font mb-4">Why Pentakuhl?</h2>
// // // // // // // // // // // // // //             <p className="text-gray-600 max-w-xl mx-auto">
// // // // // // // // // // // // // //               Revolutionizing logistics with artificial intelligence
// // // // // // // // // // // // // //             </p>
// // // // // // // // // // // // // //           </div>

// // // // // // // // // // // // // //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
// // // // // // // // // // // // // //             {[
// // // // // // // // // // // // // //               {
// // // // // // // // // // // // // //                 title: "Instant Quote Engine",
// // // // // // // // // // // // // //                 desc: "Get accurate freight quotes in under 10 seconds",
// // // // // // // // // // // // // //                 icon: "⚡"
// // // // // // // // // // // // // //               },
// // // // // // // // // // // // // //               {
// // // // // // // // // // // // // //                 title: "Smart Route Optimizer",
// // // // // // // // // // // // // //                 desc: "AI suggests the fastest and most cost-effective routes",
// // // // // // // // // // // // // //                 icon: "🧠"
// // // // // // // // // // // // // //               },
// // // // // // // // // // // // // //               {
// // // // // // // // // // // // // //                 title: "Predictive ETA",
// // // // // // // // // // // // // //                 desc: "Real-time tracking with 98% accurate arrival predictions",
// // // // // // // // // // // // // //                 icon: "📍"
// // // // // // // // // // // // // //               },
// // // // // // // // // // // // // //               {
// // // // // // // // // // // // // //                 title: "Document Intelligence",
// // // // // // // // // // // // // //                 desc: "Auto-extracts data from bills of lading and invoices",
// // // // // // // // // // // // // //                 icon: "📄"
// // // // // // // // // // // // // //               },
// // // // // // // // // // // // // //               {
// // // // // // // // // // // // // //                 title: "Risk Analyzer",
// // // // // // // // // // // // // //                 desc: "Predicts delays due to weather, port congestion, etc.",
// // // // // // // // // // // // // //                 icon: "🌧️"
// // // // // // // // // // // // // //               },
// // // // // // // // // // // // // //               {
// // // // // // // // // // // // // //                 title: "Carbon Calculator",
// // // // // // // // // // // // // //                 desc: "Track and reduce your shipping carbon footprint",
// // // // // // // // // // // // // //                 icon: "🌍"
// // // // // // // // // // // // // //               },
// // // // // // // // // // // // // //             ].map((feature, i) => (
// // // // // // // // // // // // // //               <div key={i} className="bg-gray-50 border border-gray-100 p-10 rounded-3xl hover:shadow-xl transition hover:border-accent group">
// // // // // // // // // // // // // //                 <div className="text-6xl mb-6 group-hover:scale-110 transition">{feature.icon}</div>
// // // // // // // // // // // // // //                 <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
// // // // // // // // // // // // // //                 <p className="text-gray-600">{feature.desc}</p>
// // // // // // // // // // // // // //               </div>
// // // // // // // // // // // // // //             ))}
// // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //       </section>

// // // // // // // // // // // // // //       {/* Demo / CTA Section */}
// // // // // // // // // // // // // //       <section className="py-24 bg-gradient-to-br from-gray-900 to-primary text-white">
// // // // // // // // // // // // // //         <div className="max-w-4xl mx-auto text-center px-6">
// // // // // // // // // // // // // //           <h2 className="text-5xl font-bold heading-font mb-8">
// // // // // // // // // // // // // //             Experience Pentakuhl Now
// // // // // // // // // // // // // //           </h2>
// // // // // // // // // // // // // //           <p className="text-xl text-gray-300 mb-12">
// // // // // // // // // // // // // //             Try our AI logistics assistant and get a free quote in seconds
// // // // // // // // // // // // // //           </p>

// // // // // // // // // // // // // //           <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 max-w-2xl mx-auto">
// // // // // // // // // // // // // //             <div className="mb-8">
// // // // // // // // // // // // // //               <input 
// // // // // // // // // // // // // //                 type="text" 
// // // // // // // // // // // // // //                 placeholder="What are you shipping? (e.g. 5 tons electronics from Mumbai to Dubai)"
// // // // // // // // // // // // // //                 className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-5 text-white placeholder-gray-400 focus:outline-none focus:border-accent"
// // // // // // // // // // // // // //               />
// // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // //             <button className="w-full bg-accent hover:bg-white hover:text-dark transition py-6 text-xl font-semibold rounded-2xl">
// // // // // // // // // // // // // //               Get AI Quote Now →
// // // // // // // // // // // // // //             </button>
// // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //       </section>

// // // // // // // // // // // // // //       {/* Final CTA */}
// // // // // // // // // // // // // //       <section className="py-16 bg-white text-center">
// // // // // // // // // // // // // //         <div className="max-w-2xl mx-auto px-6">
// // // // // // // // // // // // // //           <h3 className="text-3xl font-semibold mb-6">Ready to transform your logistics?</h3>
// // // // // // // // // // // // // //           <p className="text-gray-600 mb-10">
// // // // // // // // // // // // // //             Join hundreds of companies already using Pentakuhl AI
// // // // // // // // // // // // // //           </p>
// // // // // // // // // // // // // //           <button className="bg-primary text-white px-12 py-5 rounded-full text-lg font-medium hover:bg-dark transition">
// // // // // // // // // // // // // //             Start Free Trial
// // // // // // // // // // // // // //           </button>
// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //       </section>
// // // // // // // // // // // // // //     </>
// // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // };

// // // // // // // // // // // // // // export default Pentakuhl;











// // // // // // // // // // // // // // import { motion } from "framer-motion";

// // // // // // // // // // // // // // const Pentakuhl = () => {
// // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // //     <>
// // // // // // // // // // // // // //       {/* Hero Section with Video Background - Same as Home Page */}
// // // // // // // // // // // // // //       <section className="relative h-screen overflow-hidden">
// // // // // // // // // // // // // //         {/* Background Video - Same as Home Page */}
// // // // // // // // // // // // // //         <video
// // // // // // // // // // // // // //           autoPlay
// // // // // // // // // // // // // //           loop
// // // // // // // // // // // // // //           muted
// // // // // // // // // // // // // //           playsInline
// // // // // // // // // // // // // //           className="absolute inset-0 w-full h-full object-cover"
// // // // // // // // // // // // // //         >
// // // // // // // // // // // // // //           <source src="/Industrial_Factory 1080P.mp4" type="video/mp4" />
// // // // // // // // // // // // // //         </video>

// // // // // // // // // // // // // //         {/* Dark Overlay */}
// // // // // // // // // // // // // //         <div className="absolute inset-0 bg-black/45 z-10" />

// // // // // // // // // // // // // //         {/* Gradient Overlay */}
// // // // // // // // // // // // // //         <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20 z-10" />

// // // // // // // // // // // // // //         {/* Content */}
// // // // // // // // // // // // // //         <div className="relative z-20 h-full flex items-center justify-center">
// // // // // // // // // // // // // //           <div className="max-w-7xl mx-auto px-6 text-center">
// // // // // // // // // // // // // //             <motion.div
// // // // // // // // // // // // // //               initial={{ opacity: 0, y: 30 }}
// // // // // // // // // // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // // // // // // // // // //               transition={{ duration: 0.8 }}
// // // // // // // // // // // // // //               className="inline-block bg-accent/20 text-accent text-sm font-medium px-6 py-2 rounded-full mb-6 backdrop-blur-sm"
// // // // // // // // // // // // // //             >
// // // // // // // // // // // // // //               AI-Powered Logistics
// // // // // // // // // // // // // //             </motion.div>

// // // // // // // // // // // // // //             <motion.h1
// // // // // // // // // // // // // //               initial={{ opacity: 0, y: 80 }}
// // // // // // // // // // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // // // // // // // // // //               transition={{ duration: 1 }}
// // // // // // // // // // // // // //               className="text-6xl md:text-7xl font-bold text-white leading-tight mb-8"
// // // // // // // // // // // // // //             >
// // // // // // // // // // // // // //               Meet <span className="text-accent">Pentakuhl</span>
// // // // // // // // // // // // // //             </motion.h1>

// // // // // // // // // // // // // //             <motion.p
// // // // // // // // // // // // // //               initial={{ opacity: 0, y: 40 }}
// // // // // // // // // // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // // // // // // // // // //               transition={{ duration: 1, delay: 0.2 }}
// // // // // // // // // // // // // //               className="text-2xl text-gray-200 max-w-3xl mx-auto"
// // // // // // // // // // // // // //             >
// // // // // // // // // // // // // //               Your intelligent logistics assistant. Instant quotes, smart routing, and predictive insights.
// // // // // // // // // // // // // //             </motion.p>

// // // // // // // // // // // // // //             {/* CTA Button in Hero */}
// // // // // // // // // // // // // //             <motion.div
// // // // // // // // // // // // // //               initial={{ opacity: 0, y: 40 }}
// // // // // // // // // // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // // // // // // // // // //               transition={{ duration: 1, delay: 0.4 }}
// // // // // // // // // // // // // //               className="mt-10"
// // // // // // // // // // // // // //             >
// // // // // // // // // // // // // //               <button className="bg-accent hover:bg-white hover:text-dark transition px-10 py-4 rounded-full text-lg font-semibold shadow-2xl">
// // // // // // // // // // // // // //                 Try Pentakuhl AI →
// // // // // // // // // // // // // //               </button>
// // // // // // // // // // // // // //             </motion.div>
// // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // //         {/* Scroll Indicator */}
// // // // // // // // // // // // // //         <motion.div
// // // // // // // // // // // // // //           initial={{ opacity: 0 }}
// // // // // // // // // // // // // //           animate={{ opacity: 1 }}
// // // // // // // // // // // // // //           transition={{ delay: 1.5, duration: 1 }}
// // // // // // // // // // // // // //           className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
// // // // // // // // // // // // // //         >
// // // // // // // // // // // // // //           <div className="w-[35px] h-[60px] border-2 border-white/60 rounded-full flex justify-center p-2">
// // // // // // // // // // // // // //             <motion.div
// // // // // // // // // // // // // //               animate={{ y: [0, 18, 0] }}
// // // // // // // // // // // // // //               transition={{ repeat: Infinity, duration: 1.5 }}
// // // // // // // // // // // // // //               className="w-1.5 h-4 bg-white rounded-full"
// // // // // // // // // // // // // //             />
// // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // //         </motion.div>
// // // // // // // // // // // // // //       </section>

// // // // // // // // // // // // // //       {/* Features Section */}
// // // // // // // // // // // // // //       <section className="py-20 bg-white">
// // // // // // // // // // // // // //         <div className="max-w-7xl mx-auto px-6">
// // // // // // // // // // // // // //           <motion.div
// // // // // // // // // // // // // //             initial={{ opacity: 0, y: 50 }}
// // // // // // // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // // // // // //             transition={{ duration: 0.8 }}
// // // // // // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // // // // // //             className="text-center mb-16"
// // // // // // // // // // // // // //           >
// // // // // // // // // // // // // //             <h2 className="text-4xl md:text-5xl font-bold heading-font mb-4">Why Pentakuhl?</h2>
// // // // // // // // // // // // // //             <p className="text-gray-600 text-lg max-w-xl mx-auto">
// // // // // // // // // // // // // //               Revolutionizing logistics with artificial intelligence
// // // // // // // // // // // // // //             </p>
// // // // // // // // // // // // // //           </motion.div>

// // // // // // // // // // // // // //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
// // // // // // // // // // // // // //             {[
// // // // // // // // // // // // // //               {
// // // // // // // // // // // // // //                 title: "Instant Quote Engine",
// // // // // // // // // // // // // //                 desc: "Get accurate freight quotes in under 10 seconds",
// // // // // // // // // // // // // //                 icon: "⚡"
// // // // // // // // // // // // // //               },
// // // // // // // // // // // // // //               {
// // // // // // // // // // // // // //                 title: "Smart Route Optimizer",
// // // // // // // // // // // // // //                 desc: "AI suggests the fastest and most cost-effective routes",
// // // // // // // // // // // // // //                 icon: "🧠"
// // // // // // // // // // // // // //               },
// // // // // // // // // // // // // //               {
// // // // // // // // // // // // // //                 title: "Predictive ETA",
// // // // // // // // // // // // // //                 desc: "Real-time tracking with 98% accurate arrival predictions",
// // // // // // // // // // // // // //                 icon: "📍"
// // // // // // // // // // // // // //               },
// // // // // // // // // // // // // //               {
// // // // // // // // // // // // // //                 title: "Document Intelligence",
// // // // // // // // // // // // // //                 desc: "Auto-extracts data from bills of lading and invoices",
// // // // // // // // // // // // // //                 icon: "📄"
// // // // // // // // // // // // // //               },
// // // // // // // // // // // // // //               {
// // // // // // // // // // // // // //                 title: "Risk Analyzer",
// // // // // // // // // // // // // //                 desc: "Predicts delays due to weather, port congestion, etc.",
// // // // // // // // // // // // // //                 icon: "🌧️"
// // // // // // // // // // // // // //               },
// // // // // // // // // // // // // //               {
// // // // // // // // // // // // // //                 title: "Carbon Calculator",
// // // // // // // // // // // // // //                 desc: "Track and reduce your shipping carbon footprint",
// // // // // // // // // // // // // //                 icon: "🌍"
// // // // // // // // // // // // // //               },
// // // // // // // // // // // // // //             ].map((feature, i) => (
// // // // // // // // // // // // // //               <motion.div
// // // // // // // // // // // // // //                 key={i}
// // // // // // // // // // // // // //                 initial={{ opacity: 0, y: 50 }}
// // // // // // // // // // // // // //                 whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // // // // // //                 transition={{ duration: 0.6, delay: i * 0.1 }}
// // // // // // // // // // // // // //                 viewport={{ once: true }}
// // // // // // // // // // // // // //                 whileHover={{ y: -10 }}
// // // // // // // // // // // // // //                 className="bg-gray-50 border border-gray-100 p-10 rounded-3xl hover:shadow-xl transition hover:border-accent group cursor-pointer"
// // // // // // // // // // // // // //               >
// // // // // // // // // // // // // //                 <div className="text-6xl mb-6 group-hover:scale-110 transition">{feature.icon}</div>
// // // // // // // // // // // // // //                 <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
// // // // // // // // // // // // // //                 <p className="text-gray-600">{feature.desc}</p>
// // // // // // // // // // // // // //               </motion.div>
// // // // // // // // // // // // // //             ))}
// // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //       </section>

// // // // // // // // // // // // // //       {/* Demo / CTA Section */}
// // // // // // // // // // // // // //       <section className="py-24 bg-gradient-to-br from-gray-900 to-primary text-white relative overflow-hidden">
// // // // // // // // // // // // // //         {/* Background Pattern */}
// // // // // // // // // // // // // //         <div className="absolute inset-0 opacity-10">
// // // // // // // // // // // // // //           <div className="w-full h-full bg-[radial-gradient(circle_at_center,#fff_1px,transparent_1px)] bg-[length:40px_40px]" />
// // // // // // // // // // // // // //         </div>
        
// // // // // // // // // // // // // //         <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
// // // // // // // // // // // // // //           <motion.h2
// // // // // // // // // // // // // //             initial={{ opacity: 0, y: 50 }}
// // // // // // // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // // // // // //             transition={{ duration: 0.8 }}
// // // // // // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // // // // // //             className="text-5xl md:text-6xl font-bold heading-font mb-8"
// // // // // // // // // // // // // //           >
// // // // // // // // // // // // // //             Experience Pentakuhl Now
// // // // // // // // // // // // // //           </motion.h2>
          
// // // // // // // // // // // // // //           <motion.p
// // // // // // // // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // // // // // //             transition={{ duration: 0.8, delay: 0.2 }}
// // // // // // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // // // // // //             className="text-xl text-gray-300 mb-12"
// // // // // // // // // // // // // //           >
// // // // // // // // // // // // // //             Try our AI logistics assistant and get a free quote in seconds
// // // // // // // // // // // // // //           </motion.p>

// // // // // // // // // // // // // //           <motion.div
// // // // // // // // // // // // // //             initial={{ opacity: 0, scale: 0.9 }}
// // // // // // // // // // // // // //             whileInView={{ opacity: 1, scale: 1 }}
// // // // // // // // // // // // // //             transition={{ duration: 0.6, delay: 0.4 }}
// // // // // // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // // // // // //             className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 max-w-2xl mx-auto"
// // // // // // // // // // // // // //           >
// // // // // // // // // // // // // //             <div className="mb-8">
// // // // // // // // // // // // // //               <input 
// // // // // // // // // // // // // //                 type="text" 
// // // // // // // // // // // // // //                 placeholder="What are you shipping? (e.g. 5 tons electronics from Mumbai to Dubai)"
// // // // // // // // // // // // // //                 className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-5 text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 transition"
// // // // // // // // // // // // // //               />
// // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // //             <motion.button 
// // // // // // // // // // // // // //               whileHover={{ scale: 1.02 }}
// // // // // // // // // // // // // //               whileTap={{ scale: 0.98 }}
// // // // // // // // // // // // // //               className="w-full bg-accent hover:bg-white hover:text-dark transition py-6 text-xl font-semibold rounded-2xl"
// // // // // // // // // // // // // //             >
// // // // // // // // // // // // // //               Get AI Quote Now →
// // // // // // // // // // // // // //             </motion.button>
// // // // // // // // // // // // // //           </motion.div>
// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //       </section>

// // // // // // // // // // // // // //       {/* Final CTA */}
// // // // // // // // // // // // // //       <section className="py-20 bg-white text-center">
// // // // // // // // // // // // // //         <div className="max-w-2xl mx-auto px-6">
// // // // // // // // // // // // // //           <motion.h3
// // // // // // // // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // // // // // //             transition={{ duration: 0.6 }}
// // // // // // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // // // // // //             className="text-3xl md:text-4xl font-semibold mb-6"
// // // // // // // // // // // // // //           >
// // // // // // // // // // // // // //             Ready to transform your logistics?
// // // // // // // // // // // // // //           </motion.h3>
          
// // // // // // // // // // // // // //           <motion.p
// // // // // // // // // // // // // //             initial={{ opacity: 0, y: 20 }}
// // // // // // // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // // // // // //             transition={{ duration: 0.6, delay: 0.2 }}
// // // // // // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // // // // // //             className="text-gray-600 text-lg mb-10"
// // // // // // // // // // // // // //           >
// // // // // // // // // // // // // //             Join hundreds of companies already using Pentakuhl AI
// // // // // // // // // // // // // //           </motion.p>
          
// // // // // // // // // // // // // //           <motion.button
// // // // // // // // // // // // // //             initial={{ opacity: 0, y: 20 }}
// // // // // // // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // // // // // //             transition={{ duration: 0.6, delay: 0.4 }}
// // // // // // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // // // // // //             whileHover={{ scale: 1.05 }}
// // // // // // // // // // // // // //             whileTap={{ scale: 0.95 }}
// // // // // // // // // // // // // //             className="bg-primary text-white px-12 py-5 rounded-full text-lg font-medium hover:bg-dark transition shadow-xl"
// // // // // // // // // // // // // //           >
// // // // // // // // // // // // // //             Start Free Trial
// // // // // // // // // // // // // //           </motion.button>
// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //       </section>
// // // // // // // // // // // // // //     </>
// // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // };

// // // // // // // // // // // // // // export default Pentakuhl;









// // // // // // // // // // // // // import { motion } from "framer-motion";

// // // // // // // // // // // // // const Pentakuhl = () => {
// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <>
// // // // // // // // // // // // //       {/* Hero Section with Video Background - Same as Home Page */}
// // // // // // // // // // // // //       <section className="relative h-screen overflow-hidden">
// // // // // // // // // // // // //         {/* Background Video - Same as Home Page */}
// // // // // // // // // // // // //         <video
// // // // // // // // // // // // //           autoPlay
// // // // // // // // // // // // //           loop
// // // // // // // // // // // // //           muted
// // // // // // // // // // // // //           playsInline
// // // // // // // // // // // // //           className="absolute inset-0 w-full h-full object-cover"
// // // // // // // // // // // // //         >
// // // // // // // // // // // // //           <source src="/Industrial_Factory 1080P.mp4" type="video/mp4" />
// // // // // // // // // // // // //         </video>

// // // // // // // // // // // // //         {/* Dark Overlay */}
// // // // // // // // // // // // //         <div className="absolute inset-0 bg-black/45 z-10" />

// // // // // // // // // // // // //         {/* Gradient Overlay */}
// // // // // // // // // // // // //         <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20 z-10" />

// // // // // // // // // // // // //         {/* Content */}
// // // // // // // // // // // // //         <div className="relative z-20 h-full flex items-center justify-center">
// // // // // // // // // // // // //           <div className="max-w-7xl mx-auto px-6 text-center">
// // // // // // // // // // // // //             <motion.div
// // // // // // // // // // // // //               initial={{ opacity: 0, y: 30 }}
// // // // // // // // // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // // // // // // // // //               transition={{ duration: 0.8 }}
// // // // // // // // // // // // //               className="inline-block bg-accent/20 text-accent text-sm font-medium px-6 py-2 rounded-full mb-6 backdrop-blur-sm"
// // // // // // // // // // // // //             >
// // // // // // // // // // // // //               AI-Powered Logistics
// // // // // // // // // // // // //             </motion.div>

// // // // // // // // // // // // //             <motion.h1
// // // // // // // // // // // // //               initial={{ opacity: 0, y: 80 }}
// // // // // // // // // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // // // // // // // // //               transition={{ duration: 1 }}
// // // // // // // // // // // // //               className="text-6xl md:text-7xl font-bold text-white leading-tight mb-8"
// // // // // // // // // // // // //             >
// // // // // // // // // // // // //               Meet <span className="text-accent">Pentakuhl</span>
// // // // // // // // // // // // //             </motion.h1>

// // // // // // // // // // // // //             <motion.p
// // // // // // // // // // // // //               initial={{ opacity: 0, y: 40 }}
// // // // // // // // // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // // // // // // // // //               transition={{ duration: 1, delay: 0.2 }}
// // // // // // // // // // // // //               className="text-2xl text-gray-200 max-w-3xl mx-auto"
// // // // // // // // // // // // //             >
// // // // // // // // // // // // //               Your intelligent logistics assistant. Instant quotes, smart routing, and predictive insights.
// // // // // // // // // // // // //             </motion.p>

// // // // // // // // // // // // //             {/* CTA Button in Hero */}
// // // // // // // // // // // // //             <motion.div
// // // // // // // // // // // // //               initial={{ opacity: 0, y: 40 }}
// // // // // // // // // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // // // // // // // // //               transition={{ duration: 1, delay: 0.4 }}
// // // // // // // // // // // // //               className="mt-10"
// // // // // // // // // // // // //             >
// // // // // // // // // // // // //               <button className="bg-accent hover:bg-white hover:text-dark transition px-10 py-4 rounded-full text-lg font-semibold shadow-2xl">
// // // // // // // // // // // // //                 Try Pentakuhl AI →
// // // // // // // // // // // // //               </button>
// // // // // // // // // // // // //             </motion.div>
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //         {/* Scroll Indicator */}
// // // // // // // // // // // // //         <motion.div
// // // // // // // // // // // // //           initial={{ opacity: 0 }}
// // // // // // // // // // // // //           animate={{ opacity: 1 }}
// // // // // // // // // // // // //           transition={{ delay: 1.5, duration: 1 }}
// // // // // // // // // // // // //           className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
// // // // // // // // // // // // //         >
// // // // // // // // // // // // //           <div className="w-[35px] h-[60px] border-2 border-white/60 rounded-full flex justify-center p-2">
// // // // // // // // // // // // //             <motion.div
// // // // // // // // // // // // //               animate={{ y: [0, 18, 0] }}
// // // // // // // // // // // // //               transition={{ repeat: Infinity, duration: 1.5 }}
// // // // // // // // // // // // //               className="w-1.5 h-4 bg-white rounded-full"
// // // // // // // // // // // // //             />
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //         </motion.div>
// // // // // // // // // // // // //       </section>

// // // // // // // // // // // // //       {/* About Penta KÜHL Section - New Section matching screenshot */}
// // // // // // // // // // // // //       <section className="py-24 bg-white">
// // // // // // // // // // // // //         <div className="max-w-7xl mx-auto px-6">
// // // // // // // // // // // // //           <div className="grid md:grid-cols-2 gap-16 items-center">
// // // // // // // // // // // // //             {/* Left Side - Title */}
// // // // // // // // // // // // //             <motion.div
// // // // // // // // // // // // //               initial={{ opacity: 0, x: -50 }}
// // // // // // // // // // // // //               whileInView={{ opacity: 1, x: 0 }}
// // // // // // // // // // // // //               transition={{ duration: 0.8 }}
// // // // // // // // // // // // //               viewport={{ once: true }}
// // // // // // // // // // // // //             >
// // // // // // // // // // // // //               <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
// // // // // // // // // // // // //                 ABOUT <br />
// // // // // // // // // // // // //                 <span className="text-accent">PENTA KÜHL</span>
// // // // // // // // // // // // //               </h2>
// // // // // // // // // // // // //             </motion.div>

// // // // // // // // // // // // //             {/* Right Side - Description */}
// // // // // // // // // // // // //             <motion.div
// // // // // // // // // // // // //               initial={{ opacity: 0, x: 50 }}
// // // // // // // // // // // // //               whileInView={{ opacity: 1, x: 0 }}
// // // // // // // // // // // // //               transition={{ duration: 0.8, delay: 0.2 }}
// // // // // // // // // // // // //               viewport={{ once: true }}
// // // // // // // // // // // // //               className="space-y-6"
// // // // // // // // // // // // //             >
// // // // // // // // // // // // //               <p className="text-gray-700 text-lg leading-relaxed">
// // // // // // // // // // // // //                 At <span className="font-semibold text-accent">Pentakuhl</span>, we specialize in providing durable, 
// // // // // // // // // // // // //                 effective packaging solutions that maintain temperature 
// // // // // // // // // // // // //                 <span className="font-semibold text-accent"> stability </span> 
// // // // // // // // // // // // //                 during transit, 
// // // // // // // // // // // // //                 <span className="font-semibold text-accent"> protecting </span> 
// // // // // // // // // // // // //                 your valuable products.
// // // // // // // // // // // // //               </p>
// // // // // // // // // // // // //               <p className="text-gray-700 text-lg leading-relaxed">
// // // // // // // // // // // // //                 Our innovative designs cater to various industries, including pharmaceuticals, 
// // // // // // // // // // // // //                 food, and biotechnology.
// // // // // // // // // // // // //               </p>
              
// // // // // // // // // // // // //               {/* Decorative Line */}
// // // // // // // // // // // // //               <div className="w-20 h-1 bg-accent rounded-full mt-6" />
// // // // // // // // // // // // //             </motion.div>
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       </section>

// // // // // // // // // // // // //       {/* FAQ Section Header - As shown in screenshot */}
// // // // // // // // // // // // //       <section className="py-16 bg-gray-50">
// // // // // // // // // // // // //         <div className="max-w-4xl mx-auto text-center px-6">
// // // // // // // // // // // // //           <motion.div
// // // // // // // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // // // // //             transition={{ duration: 0.6 }}
// // // // // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // // // // //           >
// // // // // // // // // // // // //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
// // // // // // // // // // // // //               Explore our frequently asked questions to gain clarity about 
// // // // // // // // // // // // //               <span className="text-accent"> Penta Kuhl's</span> services and features
// // // // // // // // // // // // //             </h2>
// // // // // // // // // // // // //           </motion.div>
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       </section>

// // // // // // // // // // // // //       {/* Features Section */}
// // // // // // // // // // // // //       <section className="py-20 bg-white">
// // // // // // // // // // // // //         <div className="max-w-7xl mx-auto px-6">
// // // // // // // // // // // // //           <motion.div
// // // // // // // // // // // // //             initial={{ opacity: 0, y: 50 }}
// // // // // // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // // // // //             transition={{ duration: 0.8 }}
// // // // // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // // // // //             className="text-center mb-16"
// // // // // // // // // // // // //           >
// // // // // // // // // // // // //             <h2 className="text-4xl md:text-5xl font-bold heading-font mb-4">Why Pentakuhl?</h2>
// // // // // // // // // // // // //             <p className="text-gray-600 text-lg max-w-xl mx-auto">
// // // // // // // // // // // // //               Revolutionizing logistics with artificial intelligence
// // // // // // // // // // // // //             </p>
// // // // // // // // // // // // //           </motion.div>

// // // // // // // // // // // // //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
// // // // // // // // // // // // //             {[
// // // // // // // // // // // // //               {
// // // // // // // // // // // // //                 title: "Instant Quote Engine",
// // // // // // // // // // // // //                 desc: "Get accurate freight quotes in under 10 seconds",
// // // // // // // // // // // // //                 icon: "⚡"
// // // // // // // // // // // // //               },
// // // // // // // // // // // // //               {
// // // // // // // // // // // // //                 title: "Smart Route Optimizer",
// // // // // // // // // // // // //                 desc: "AI suggests the fastest and most cost-effective routes",
// // // // // // // // // // // // //                 icon: "🧠"
// // // // // // // // // // // // //               },
// // // // // // // // // // // // //               {
// // // // // // // // // // // // //                 title: "Predictive ETA",
// // // // // // // // // // // // //                 desc: "Real-time tracking with 98% accurate arrival predictions",
// // // // // // // // // // // // //                 icon: "📍"
// // // // // // // // // // // // //               },
// // // // // // // // // // // // //               {
// // // // // // // // // // // // //                 title: "Document Intelligence",
// // // // // // // // // // // // //                 desc: "Auto-extracts data from bills of lading and invoices",
// // // // // // // // // // // // //                 icon: "📄"
// // // // // // // // // // // // //               },
// // // // // // // // // // // // //               {
// // // // // // // // // // // // //                 title: "Risk Analyzer",
// // // // // // // // // // // // //                 desc: "Predicts delays due to weather, port congestion, etc.",
// // // // // // // // // // // // //                 icon: "🌧️"
// // // // // // // // // // // // //               },
// // // // // // // // // // // // //               {
// // // // // // // // // // // // //                 title: "Carbon Calculator",
// // // // // // // // // // // // //                 desc: "Track and reduce your shipping carbon footprint",
// // // // // // // // // // // // //                 icon: "🌍"
// // // // // // // // // // // // //               },
// // // // // // // // // // // // //             ].map((feature, i) => (
// // // // // // // // // // // // //               <motion.div
// // // // // // // // // // // // //                 key={i}
// // // // // // // // // // // // //                 initial={{ opacity: 0, y: 50 }}
// // // // // // // // // // // // //                 whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // // // // //                 transition={{ duration: 0.6, delay: i * 0.1 }}
// // // // // // // // // // // // //                 viewport={{ once: true }}
// // // // // // // // // // // // //                 whileHover={{ y: -10 }}
// // // // // // // // // // // // //                 className="bg-gray-50 border border-gray-100 p-10 rounded-3xl hover:shadow-xl transition hover:border-accent group cursor-pointer"
// // // // // // // // // // // // //               >
// // // // // // // // // // // // //                 <div className="text-6xl mb-6 group-hover:scale-110 transition">{feature.icon}</div>
// // // // // // // // // // // // //                 <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
// // // // // // // // // // // // //                 <p className="text-gray-600">{feature.desc}</p>
// // // // // // // // // // // // //               </motion.div>
// // // // // // // // // // // // //             ))}
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       </section>

// // // // // // // // // // // // //       {/* Demo / CTA Section */}
// // // // // // // // // // // // //       <section className="py-24 bg-gradient-to-br from-gray-900 to-primary text-white relative overflow-hidden">
// // // // // // // // // // // // //         {/* Background Pattern */}
// // // // // // // // // // // // //         <div className="absolute inset-0 opacity-10">
// // // // // // // // // // // // //           <div className="w-full h-full bg-[radial-gradient(circle_at_center,#fff_1px,transparent_1px)] bg-[length:40px_40px]" />
// // // // // // // // // // // // //         </div>
        
// // // // // // // // // // // // //         <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
// // // // // // // // // // // // //           <motion.h2
// // // // // // // // // // // // //             initial={{ opacity: 0, y: 50 }}
// // // // // // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // // // // //             transition={{ duration: 0.8 }}
// // // // // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // // // // //             className="text-5xl md:text-6xl font-bold heading-font mb-8"
// // // // // // // // // // // // //           >
// // // // // // // // // // // // //             Experience Pentakuhl Now
// // // // // // // // // // // // //           </motion.h2>
          
// // // // // // // // // // // // //           <motion.p
// // // // // // // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // // // // //             transition={{ duration: 0.8, delay: 0.2 }}
// // // // // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // // // // //             className="text-xl text-gray-300 mb-12"
// // // // // // // // // // // // //           >
// // // // // // // // // // // // //             Try our AI logistics assistant and get a free quote in seconds
// // // // // // // // // // // // //           </motion.p>

// // // // // // // // // // // // //           <motion.div
// // // // // // // // // // // // //             initial={{ opacity: 0, scale: 0.9 }}
// // // // // // // // // // // // //             whileInView={{ opacity: 1, scale: 1 }}
// // // // // // // // // // // // //             transition={{ duration: 0.6, delay: 0.4 }}
// // // // // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // // // // //             className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 max-w-2xl mx-auto"
// // // // // // // // // // // // //           >
// // // // // // // // // // // // //             <div className="mb-8">
// // // // // // // // // // // // //               <input 
// // // // // // // // // // // // //                 type="text" 
// // // // // // // // // // // // //                 placeholder="What are you shipping? (e.g. 5 tons electronics from Mumbai to Dubai)"
// // // // // // // // // // // // //                 className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-5 text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 transition"
// // // // // // // // // // // // //               />
// // // // // // // // // // // // //             </div>
// // // // // // // // // // // // //             <motion.button 
// // // // // // // // // // // // //               whileHover={{ scale: 1.02 }}
// // // // // // // // // // // // //               whileTap={{ scale: 0.98 }}
// // // // // // // // // // // // //               className="w-full bg-accent hover:bg-white hover:text-dark transition py-6 text-xl font-semibold rounded-2xl"
// // // // // // // // // // // // //             >
// // // // // // // // // // // // //               Get AI Quote Now →
// // // // // // // // // // // // //             </motion.button>
// // // // // // // // // // // // //           </motion.div>
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       </section>

// // // // // // // // // // // // //       {/* Final CTA */}
// // // // // // // // // // // // //       <section className="py-20 bg-white text-center">
// // // // // // // // // // // // //         <div className="max-w-2xl mx-auto px-6">
// // // // // // // // // // // // //           <motion.h3
// // // // // // // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // // // // //             transition={{ duration: 0.6 }}
// // // // // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // // // // //             className="text-3xl md:text-4xl font-semibold mb-6"
// // // // // // // // // // // // //           >
// // // // // // // // // // // // //             Ready to transform your logistics?
// // // // // // // // // // // // //           </motion.h3>
          
// // // // // // // // // // // // //           <motion.p
// // // // // // // // // // // // //             initial={{ opacity: 0, y: 20 }}
// // // // // // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // // // // //             transition={{ duration: 0.6, delay: 0.2 }}
// // // // // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // // // // //             className="text-gray-600 text-lg mb-10"
// // // // // // // // // // // // //           >
// // // // // // // // // // // // //             Join hundreds of companies already using Pentakuhl AI
// // // // // // // // // // // // //           </motion.p>
          
// // // // // // // // // // // // //           <motion.button
// // // // // // // // // // // // //             initial={{ opacity: 0, y: 20 }}
// // // // // // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // // // // //             transition={{ duration: 0.6, delay: 0.4 }}
// // // // // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // // // // //             whileHover={{ scale: 1.05 }}
// // // // // // // // // // // // //             whileTap={{ scale: 0.95 }}
// // // // // // // // // // // // //             className="bg-primary text-white px-12 py-5 rounded-full text-lg font-medium hover:bg-dark transition shadow-xl"
// // // // // // // // // // // // //           >
// // // // // // // // // // // // //             Start Free Trial
// // // // // // // // // // // // //           </motion.button>
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       </section>
// // // // // // // // // // // // //     </>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default Pentakuhl;












// // // // // // // // // // // // import { motion } from "framer-motion";

// // // // // // // // // // // // const Pentakuhl = () => {
// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <>
// // // // // // // // // // // //       {/* Hero Section with Video Background - Same as Home Page */}
// // // // // // // // // // // //       <section className="relative h-screen overflow-hidden">
// // // // // // // // // // // //         {/* Background Video - Same as Home Page */}
// // // // // // // // // // // //         <video
// // // // // // // // // // // //           autoPlay
// // // // // // // // // // // //           loop
// // // // // // // // // // // //           muted
// // // // // // // // // // // //           playsInline
// // // // // // // // // // // //           className="absolute inset-0 w-full h-full object-cover"
// // // // // // // // // // // //         >
// // // // // // // // // // // //           <source src="/Industrial_Factory 1080P.mp4" type="video/mp4" />
// // // // // // // // // // // //         </video>

// // // // // // // // // // // //         {/* Dark Overlay */}
// // // // // // // // // // // //         <div className="absolute inset-0 bg-black/45 z-10" />

// // // // // // // // // // // //         {/* Gradient Overlay */}
// // // // // // // // // // // //         <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20 z-10" />

// // // // // // // // // // // //         {/* Content */}
// // // // // // // // // // // //         <div className="relative z-20 h-full flex items-center justify-center">
// // // // // // // // // // // //           <div className="max-w-7xl mx-auto px-6 text-center">
// // // // // // // // // // // //             <motion.div
// // // // // // // // // // // //               initial={{ opacity: 0, y: 30 }}
// // // // // // // // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // // // // // // // //               transition={{ duration: 0.8 }}
// // // // // // // // // // // //               className="inline-block bg-accent/20 text-accent text-sm font-medium px-6 py-2 rounded-full mb-6 backdrop-blur-sm"
// // // // // // // // // // // //             >
// // // // // // // // // // // //               AI-Powered Logistics
// // // // // // // // // // // //             </motion.div>

// // // // // // // // // // // //             <motion.h1
// // // // // // // // // // // //               initial={{ opacity: 0, y: 80 }}
// // // // // // // // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // // // // // // // //               transition={{ duration: 1 }}
// // // // // // // // // // // //               className="text-6xl md:text-7xl font-bold text-white leading-tight mb-8"
// // // // // // // // // // // //             >
// // // // // // // // // // // //               Meet <span className="text-accent">Pentakuhl</span>
// // // // // // // // // // // //             </motion.h1>

// // // // // // // // // // // //             <motion.p
// // // // // // // // // // // //               initial={{ opacity: 0, y: 40 }}
// // // // // // // // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // // // // // // // //               transition={{ duration: 1, delay: 0.2 }}
// // // // // // // // // // // //               className="text-2xl text-gray-200 max-w-3xl mx-auto"
// // // // // // // // // // // //             >
// // // // // // // // // // // //               Your intelligent logistics assistant. Instant quotes, smart routing, and predictive insights.
// // // // // // // // // // // //             </motion.p>

// // // // // // // // // // // //             {/* CTA Button in Hero */}
// // // // // // // // // // // //             <motion.div
// // // // // // // // // // // //               initial={{ opacity: 0, y: 40 }}
// // // // // // // // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // // // // // // // //               transition={{ duration: 1, delay: 0.4 }}
// // // // // // // // // // // //               className="mt-10"
// // // // // // // // // // // //             >
// // // // // // // // // // // //               <button className="bg-accent hover:bg-white hover:text-dark transition px-10 py-4 rounded-full text-lg font-semibold shadow-2xl">
// // // // // // // // // // // //                 Try Pentakuhl AI →
// // // // // // // // // // // //               </button>
// // // // // // // // // // // //             </motion.div>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         </div>

// // // // // // // // // // // //         {/* Scroll Indicator */}
// // // // // // // // // // // //         <motion.div
// // // // // // // // // // // //           initial={{ opacity: 0 }}
// // // // // // // // // // // //           animate={{ opacity: 1 }}
// // // // // // // // // // // //           transition={{ delay: 1.5, duration: 1 }}
// // // // // // // // // // // //           className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
// // // // // // // // // // // //         >
// // // // // // // // // // // //           <div className="w-[35px] h-[60px] border-2 border-white/60 rounded-full flex justify-center p-2">
// // // // // // // // // // // //             <motion.div
// // // // // // // // // // // //               animate={{ y: [0, 18, 0] }}
// // // // // // // // // // // //               transition={{ repeat: Infinity, duration: 1.5 }}
// // // // // // // // // // // //               className="w-1.5 h-4 bg-white rounded-full"
// // // // // // // // // // // //             />
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         </motion.div>
// // // // // // // // // // // //       </section>

// // // // // // // // // // // //       {/* About Penta KÜHL Section */}
// // // // // // // // // // // //       <section className="py-24 bg-white">
// // // // // // // // // // // //         <div className="max-w-7xl mx-auto px-6">
// // // // // // // // // // // //           <div className="grid md:grid-cols-2 gap-16 items-center">
// // // // // // // // // // // //             {/* Left Side - Title */}
// // // // // // // // // // // //             <motion.div
// // // // // // // // // // // //               initial={{ opacity: 0, x: -50 }}
// // // // // // // // // // // //               whileInView={{ opacity: 1, x: 0 }}
// // // // // // // // // // // //               transition={{ duration: 0.8 }}
// // // // // // // // // // // //               viewport={{ once: true }}
// // // // // // // // // // // //             >
// // // // // // // // // // // //               <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
// // // // // // // // // // // //                 ABOUT <br />
// // // // // // // // // // // //                 <span className="text-accent">PENTA KÜHL</span>
// // // // // // // // // // // //               </h2>
// // // // // // // // // // // //             </motion.div>

// // // // // // // // // // // //             {/* Right Side - Description */}
// // // // // // // // // // // //             <motion.div
// // // // // // // // // // // //               initial={{ opacity: 0, x: 50 }}
// // // // // // // // // // // //               whileInView={{ opacity: 1, x: 0 }}
// // // // // // // // // // // //               transition={{ duration: 0.8, delay: 0.2 }}
// // // // // // // // // // // //               viewport={{ once: true }}
// // // // // // // // // // // //               className="space-y-6"
// // // // // // // // // // // //             >
// // // // // // // // // // // //               <p className="text-gray-700 text-lg leading-relaxed">
// // // // // // // // // // // //                 At <span className="font-semibold text-accent">Pentakuhl</span>, we specialize in providing durable, 
// // // // // // // // // // // //                 effective packaging solutions that maintain temperature 
// // // // // // // // // // // //                 <span className="font-semibold text-accent"> stability </span> 
// // // // // // // // // // // //                 during transit, 
// // // // // // // // // // // //                 <span className="font-semibold text-accent"> protecting </span> 
// // // // // // // // // // // //                 your valuable products.
// // // // // // // // // // // //               </p>
// // // // // // // // // // // //               <p className="text-gray-700 text-lg leading-relaxed">
// // // // // // // // // // // //                 Our innovative designs cater to various industries, including pharmaceuticals, 
// // // // // // // // // // // //                 food, and biotechnology.
// // // // // // // // // // // //               </p>
              
// // // // // // // // // // // //               {/* Decorative Line */}
// // // // // // // // // // // //               <div className="w-20 h-1 bg-accent rounded-full mt-6" />
// // // // // // // // // // // //             </motion.div>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </section>

// // // // // // // // // // // //       {/* Authorized Distributors Section - NEW */}
// // // // // // // // // // // //       <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
// // // // // // // // // // // //         <div className="max-w-7xl mx-auto px-6">
// // // // // // // // // // // //           <motion.div
// // // // // // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // // // //             transition={{ duration: 0.6 }}
// // // // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // // // //             className="text-center mb-12"
// // // // // // // // // // // //           >
// // // // // // // // // // // //             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
// // // // // // // // // // // //               PENTA FREIGHT
// // // // // // // // // // // //             </h2>
// // // // // // // // // // // //             <div className="w-24 h-1 bg-accent mx-auto mb-8" />
// // // // // // // // // // // //           </motion.div>

// // // // // // // // // // // //           <motion.div
// // // // // // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // // // //             transition={{ duration: 0.6, delay: 0.2 }}
// // // // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // // // //             className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-shadow duration-300"
// // // // // // // // // // // //           >
// // // // // // // // // // // //             <div className="grid md:grid-cols-2 gap-0">
// // // // // // // // // // // //               {/* Left Side - Image/Icon */}
// // // // // // // // // // // //               <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-12 flex items-center justify-center">
// // // // // // // // // // // //                 <div className="text-center">
// // // // // // // // // // // //                   <div className="text-7xl mb-4">❄️</div>
// // // // // // // // // // // //                   <div className="text-2xl font-bold text-gray-800">Pelican BioThermal™</div>
// // // // // // // // // // // //                   <div className="text-gray-500 mt-2">Trusted Partner</div>
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //               </div>

// // // // // // // // // // // //               {/* Right Side - Content */}
// // // // // // // // // // // //               <div className="p-12">
// // // // // // // // // // // //                 <h3 className="text-3xl font-bold text-gray-900 mb-4">
// // // // // // // // // // // //                   Authorized Distributors for 
// // // // // // // // // // // //                   <span className="text-accent block mt-2">Pelican BioThermal™ Products</span>
// // // // // // // // // // // //                 </h3>
// // // // // // // // // // // //                 <p className="text-gray-600 text-lg leading-relaxed mb-8">
// // // // // // // // // // // //                   Penta Freight is proud to be an authorized distributor for Pelican BioThermal™, 
// // // // // // // // // // // //                   offering world-class temperature-controlled packaging solutions for 
// // // // // // // // // // // //                   pharmaceutical, biotech, and life sciences industries.
// // // // // // // // // // // //                 </p>
// // // // // // // // // // // //                 <motion.button
// // // // // // // // // // // //                   whileHover={{ x: 10 }}
// // // // // // // // // // // //                   className="text-accent font-semibold text-lg flex items-center gap-2 group"
// // // // // // // // // // // //                 >
// // // // // // // // // // // //                   Read more 
// // // // // // // // // // // //                   <span className="text-accent group-hover:translate-x-2 transition-transform duration-300">→</span>
// // // // // // // // // // // //                 </motion.button>
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //           </motion.div>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </section>

// // // // // // // // // // // //       {/* FAQ Section Header */}
// // // // // // // // // // // //       <section className="py-16 bg-gray-50">
// // // // // // // // // // // //         <div className="max-w-4xl mx-auto text-center px-6">
// // // // // // // // // // // //           <motion.div
// // // // // // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // // // //             transition={{ duration: 0.6 }}
// // // // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // // // //           >
// // // // // // // // // // // //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
// // // // // // // // // // // //               Explore our frequently asked questions to gain clarity about 
// // // // // // // // // // // //               <span className="text-accent"> Penta Kuhl's</span> services and features
// // // // // // // // // // // //             </h2>
// // // // // // // // // // // //           </motion.div>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </section>

// // // // // // // // // // // //       {/* Features Section */}
// // // // // // // // // // // //       <section className="py-20 bg-white">
// // // // // // // // // // // //         <div className="max-w-7xl mx-auto px-6">
// // // // // // // // // // // //           <motion.div
// // // // // // // // // // // //             initial={{ opacity: 0, y: 50 }}
// // // // // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // // // //             transition={{ duration: 0.8 }}
// // // // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // // // //             className="text-center mb-16"
// // // // // // // // // // // //           >
// // // // // // // // // // // //             <h2 className="text-4xl md:text-5xl font-bold heading-font mb-4">Why Pentakuhl?</h2>
// // // // // // // // // // // //             <p className="text-gray-600 text-lg max-w-xl mx-auto">
// // // // // // // // // // // //               Revolutionizing logistics with artificial intelligence
// // // // // // // // // // // //             </p>
// // // // // // // // // // // //           </motion.div>

// // // // // // // // // // // //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
// // // // // // // // // // // //             {[
// // // // // // // // // // // //               {
// // // // // // // // // // // //                 title: "Instant Quote Engine",
// // // // // // // // // // // //                 desc: "Get accurate freight quotes in under 10 seconds",
// // // // // // // // // // // //                 icon: "⚡"
// // // // // // // // // // // //               },
// // // // // // // // // // // //               {
// // // // // // // // // // // //                 title: "Smart Route Optimizer",
// // // // // // // // // // // //                 desc: "AI suggests the fastest and most cost-effective routes",
// // // // // // // // // // // //                 icon: "🧠"
// // // // // // // // // // // //               },
// // // // // // // // // // // //               {
// // // // // // // // // // // //                 title: "Predictive ETA",
// // // // // // // // // // // //                 desc: "Real-time tracking with 98% accurate arrival predictions",
// // // // // // // // // // // //                 icon: "📍"
// // // // // // // // // // // //               },
// // // // // // // // // // // //               {
// // // // // // // // // // // //                 title: "Document Intelligence",
// // // // // // // // // // // //                 desc: "Auto-extracts data from bills of lading and invoices",
// // // // // // // // // // // //                 icon: "📄"
// // // // // // // // // // // //               },
// // // // // // // // // // // //               {
// // // // // // // // // // // //                 title: "Risk Analyzer",
// // // // // // // // // // // //                 desc: "Predicts delays due to weather, port congestion, etc.",
// // // // // // // // // // // //                 icon: "🌧️"
// // // // // // // // // // // //               },
// // // // // // // // // // // //               {
// // // // // // // // // // // //                 title: "Carbon Calculator",
// // // // // // // // // // // //                 desc: "Track and reduce your shipping carbon footprint",
// // // // // // // // // // // //                 icon: "🌍"
// // // // // // // // // // // //               },
// // // // // // // // // // // //             ].map((feature, i) => (
// // // // // // // // // // // //               <motion.div
// // // // // // // // // // // //                 key={i}
// // // // // // // // // // // //                 initial={{ opacity: 0, y: 50 }}
// // // // // // // // // // // //                 whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // // // //                 transition={{ duration: 0.6, delay: i * 0.1 }}
// // // // // // // // // // // //                 viewport={{ once: true }}
// // // // // // // // // // // //                 whileHover={{ y: -10 }}
// // // // // // // // // // // //                 className="bg-gray-50 border border-gray-100 p-10 rounded-3xl hover:shadow-xl transition hover:border-accent group cursor-pointer"
// // // // // // // // // // // //               >
// // // // // // // // // // // //                 <div className="text-6xl mb-6 group-hover:scale-110 transition">{feature.icon}</div>
// // // // // // // // // // // //                 <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
// // // // // // // // // // // //                 <p className="text-gray-600">{feature.desc}</p>
// // // // // // // // // // // //               </motion.div>
// // // // // // // // // // // //             ))}
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </section>

// // // // // // // // // // // //       {/* Demo / CTA Section */}
// // // // // // // // // // // //       <section className="py-24 bg-gradient-to-br from-gray-900 to-primary text-white relative overflow-hidden">
// // // // // // // // // // // //         {/* Background Pattern */}
// // // // // // // // // // // //         <div className="absolute inset-0 opacity-10">
// // // // // // // // // // // //           <div className="w-full h-full bg-[radial-gradient(circle_at_center,#fff_1px,transparent_1px)] bg-[length:40px_40px]" />
// // // // // // // // // // // //         </div>
        
// // // // // // // // // // // //         <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
// // // // // // // // // // // //           <motion.h2
// // // // // // // // // // // //             initial={{ opacity: 0, y: 50 }}
// // // // // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // // // //             transition={{ duration: 0.8 }}
// // // // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // // // //             className="text-5xl md:text-6xl font-bold heading-font mb-8"
// // // // // // // // // // // //           >
// // // // // // // // // // // //             Experience Pentakuhl Now
// // // // // // // // // // // //           </motion.h2>
          
// // // // // // // // // // // //           <motion.p
// // // // // // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // // // //             transition={{ duration: 0.8, delay: 0.2 }}
// // // // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // // // //             className="text-xl text-gray-300 mb-12"
// // // // // // // // // // // //           >
// // // // // // // // // // // //             Try our AI logistics assistant and get a free quote in seconds
// // // // // // // // // // // //           </motion.p>

// // // // // // // // // // // //           <motion.div
// // // // // // // // // // // //             initial={{ opacity: 0, scale: 0.9 }}
// // // // // // // // // // // //             whileInView={{ opacity: 1, scale: 1 }}
// // // // // // // // // // // //             transition={{ duration: 0.6, delay: 0.4 }}
// // // // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // // // //             className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 max-w-2xl mx-auto"
// // // // // // // // // // // //           >
// // // // // // // // // // // //             <div className="mb-8">
// // // // // // // // // // // //               <input 
// // // // // // // // // // // //                 type="text" 
// // // // // // // // // // // //                 placeholder="What are you shipping? (e.g. 5 tons electronics from Mumbai to Dubai)"
// // // // // // // // // // // //                 className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-5 text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 transition"
// // // // // // // // // // // //               />
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //             <motion.button 
// // // // // // // // // // // //               whileHover={{ scale: 1.02 }}
// // // // // // // // // // // //               whileTap={{ scale: 0.98 }}
// // // // // // // // // // // //               className="w-full bg-accent hover:bg-white hover:text-dark transition py-6 text-xl font-semibold rounded-2xl"
// // // // // // // // // // // //             >
// // // // // // // // // // // //               Get AI Quote Now →
// // // // // // // // // // // //             </motion.button>
// // // // // // // // // // // //           </motion.div>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </section>

// // // // // // // // // // // //       {/* Final CTA */}
// // // // // // // // // // // //       <section className="py-20 bg-white text-center">
// // // // // // // // // // // //         <div className="max-w-2xl mx-auto px-6">
// // // // // // // // // // // //           <motion.h3
// // // // // // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // // // //             transition={{ duration: 0.6 }}
// // // // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // // // //             className="text-3xl md:text-4xl font-semibold mb-6"
// // // // // // // // // // // //           >
// // // // // // // // // // // //             Ready to transform your logistics?
// // // // // // // // // // // //           </motion.h3>
          
// // // // // // // // // // // //           <motion.p
// // // // // // // // // // // //             initial={{ opacity: 0, y: 20 }}
// // // // // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // // // //             transition={{ duration: 0.6, delay: 0.2 }}
// // // // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // // // //             className="text-gray-600 text-lg mb-10"
// // // // // // // // // // // //           >
// // // // // // // // // // // //             Join hundreds of companies already using Pentakuhl AI
// // // // // // // // // // // //           </motion.p>
          
// // // // // // // // // // // //           <motion.button
// // // // // // // // // // // //             initial={{ opacity: 0, y: 20 }}
// // // // // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // // // //             transition={{ duration: 0.6, delay: 0.4 }}
// // // // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // // // //             whileHover={{ scale: 1.05 }}
// // // // // // // // // // // //             whileTap={{ scale: 0.95 }}
// // // // // // // // // // // //             className="bg-primary text-white px-12 py-5 rounded-full text-lg font-medium hover:bg-dark transition shadow-xl"
// // // // // // // // // // // //           >
// // // // // // // // // // // //             Start Free Trial
// // // // // // // // // // // //           </motion.button>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </section>
// // // // // // // // // // // //     </>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // export default Pentakuhl;










// // // // // // // // // // // import { motion } from "framer-motion";
// // // // // // // // // // // import { useRef, useState, useEffect } from "react";

// // // // // // // // // // // const Pentakuhl = () => {
// // // // // // // // // // //   const productSectionRef = useRef(null);
// // // // // // // // // // //   const [stage, setStage] = useState(0); // 0: heading only, 1: containers slide in, 2: data appears

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     const handleScroll = () => {
// // // // // // // // // // //       if (productSectionRef.current) {
// // // // // // // // // // //         const rect = productSectionRef.current.getBoundingClientRect();
// // // // // // // // // // //         const windowHeight = window.innerHeight;
        
// // // // // // // // // // //         // How far we've scrolled into the section (0 to 1)
// // // // // // // // // // //         const scrollProgress = Math.max(0, Math.min(1, 
// // // // // // // // // // //           (windowHeight - rect.top) / (windowHeight * 0.8)
// // // // // // // // // // //         ));
        
// // // // // // // // // // //         // Stage 0: Heading only (0-20% scroll)
// // // // // // // // // // //         if (scrollProgress < 0.2) {
// // // // // // // // // // //           setStage(0);
// // // // // // // // // // //         }
// // // // // // // // // // //         // Stage 1: Containers slide in (20-50% scroll)
// // // // // // // // // // //         else if (scrollProgress >= 0.2 && scrollProgress < 0.5) {
// // // // // // // // // // //           setStage(1);
// // // // // // // // // // //         }
// // // // // // // // // // //         // Stage 2: Data appears, heading fades (50-80% scroll)
// // // // // // // // // // //         else if (scrollProgress >= 0.5) {
// // // // // // // // // // //           setStage(2);
// // // // // // // // // // //         }
// // // // // // // // // // //       }
// // // // // // // // // // //     };

// // // // // // // // // // //     window.addEventListener("scroll", handleScroll);
// // // // // // // // // // //     handleScroll();
    
// // // // // // // // // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // // // // // // // // //   }, []);

// // // // // // // // // // //   return (
// // // // // // // // // // //     <>
// // // // // // // // // // //       {/* Hero Section with Video Background */}
// // // // // // // // // // //       <section className="relative h-screen overflow-hidden">
// // // // // // // // // // //         <video
// // // // // // // // // // //           autoPlay
// // // // // // // // // // //           loop
// // // // // // // // // // //           muted
// // // // // // // // // // //           playsInline
// // // // // // // // // // //           className="absolute inset-0 w-full h-full object-cover"
// // // // // // // // // // //         >
// // // // // // // // // // //           <source src="/Industrial_Factory 1080P.mp4" type="video/mp4" />
// // // // // // // // // // //         </video>

// // // // // // // // // // //         <div className="absolute inset-0 bg-black/45 z-10" />
// // // // // // // // // // //         <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20 z-10" />

// // // // // // // // // // //         <div className="relative z-20 h-full flex items-center justify-center">
// // // // // // // // // // //           <div className="max-w-7xl mx-auto px-6 text-center">
// // // // // // // // // // //             <motion.div
// // // // // // // // // // //               initial={{ opacity: 0, y: 30 }}
// // // // // // // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // // // // // // //               transition={{ duration: 0.8 }}
// // // // // // // // // // //               className="inline-block bg-accent/20 text-accent text-sm font-medium px-6 py-2 rounded-full mb-6 backdrop-blur-sm"
// // // // // // // // // // //             >
// // // // // // // // // // //               AI-Powered Logistics
// // // // // // // // // // //             </motion.div>

// // // // // // // // // // //             <motion.h1
// // // // // // // // // // //               initial={{ opacity: 0, y: 80 }}
// // // // // // // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // // // // // // //               transition={{ duration: 1 }}
// // // // // // // // // // //               className="text-6xl md:text-7xl font-bold text-white leading-tight mb-8"
// // // // // // // // // // //             >
// // // // // // // // // // //               Meet <span className="text-accent">Pentakuhl</span>
// // // // // // // // // // //             </motion.h1>

// // // // // // // // // // //             <motion.p
// // // // // // // // // // //               initial={{ opacity: 0, y: 40 }}
// // // // // // // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // // // // // // //               transition={{ duration: 1, delay: 0.2 }}
// // // // // // // // // // //               className="text-2xl text-gray-200 max-w-3xl mx-auto"
// // // // // // // // // // //             >
// // // // // // // // // // //               Your intelligent logistics assistant. Instant quotes, smart routing, and predictive insights.
// // // // // // // // // // //             </motion.p>

// // // // // // // // // // //             <motion.div
// // // // // // // // // // //               initial={{ opacity: 0, y: 40 }}
// // // // // // // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // // // // // // //               transition={{ duration: 1, delay: 0.4 }}
// // // // // // // // // // //               className="mt-10"
// // // // // // // // // // //             >
// // // // // // // // // // //               <button className="bg-accent hover:bg-white hover:text-dark transition px-10 py-4 rounded-full text-lg font-semibold shadow-2xl">
// // // // // // // // // // //                 Try Pentakuhl AI →
// // // // // // // // // // //               </button>
// // // // // // // // // // //             </motion.div>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         <motion.div
// // // // // // // // // // //           initial={{ opacity: 0 }}
// // // // // // // // // // //           animate={{ opacity: 1 }}
// // // // // // // // // // //           transition={{ delay: 1.5, duration: 1 }}
// // // // // // // // // // //           className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
// // // // // // // // // // //         >
// // // // // // // // // // //           <div className="w-[35px] h-[60px] border-2 border-white/60 rounded-full flex justify-center p-2">
// // // // // // // // // // //             <motion.div
// // // // // // // // // // //               animate={{ y: [0, 18, 0] }}
// // // // // // // // // // //               transition={{ repeat: Infinity, duration: 1.5 }}
// // // // // // // // // // //               className="w-1.5 h-4 bg-white rounded-full"
// // // // // // // // // // //             />
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </motion.div>
// // // // // // // // // // //       </section>

// // // // // // // // // // //       {/* About Penta KÜHL Section */}
// // // // // // // // // // //       <section className="py-24 bg-white">
// // // // // // // // // // //         <div className="max-w-7xl mx-auto px-6">
// // // // // // // // // // //           <div className="grid md:grid-cols-2 gap-16 items-center">
// // // // // // // // // // //             <motion.div
// // // // // // // // // // //               initial={{ opacity: 0, x: -50 }}
// // // // // // // // // // //               whileInView={{ opacity: 1, x: 0 }}
// // // // // // // // // // //               transition={{ duration: 0.8 }}
// // // // // // // // // // //               viewport={{ once: true }}
// // // // // // // // // // //             >
// // // // // // // // // // //               <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
// // // // // // // // // // //                 ABOUT <br />
// // // // // // // // // // //                 <span className="text-accent">PENTA KÜHL</span>
// // // // // // // // // // //               </h2>
// // // // // // // // // // //             </motion.div>

// // // // // // // // // // //             <motion.div
// // // // // // // // // // //               initial={{ opacity: 0, x: 50 }}
// // // // // // // // // // //               whileInView={{ opacity: 1, x: 0 }}
// // // // // // // // // // //               transition={{ duration: 0.8, delay: 0.2 }}
// // // // // // // // // // //               viewport={{ once: true }}
// // // // // // // // // // //               className="space-y-6"
// // // // // // // // // // //             >
// // // // // // // // // // //               <p className="text-gray-700 text-lg leading-relaxed">
// // // // // // // // // // //                 At <span className="font-semibold text-accent">Pentakuhl</span>, we specialize in providing durable, 
// // // // // // // // // // //                 effective packaging solutions that maintain temperature 
// // // // // // // // // // //                 <span className="font-semibold text-accent"> stability </span> 
// // // // // // // // // // //                 during transit, 
// // // // // // // // // // //                 <span className="font-semibold text-accent"> protecting </span> 
// // // // // // // // // // //                 your valuable products.
// // // // // // // // // // //               </p>
// // // // // // // // // // //               <p className="text-gray-700 text-lg leading-relaxed">
// // // // // // // // // // //                 Our innovative designs cater to various industries, including pharmaceuticals, 
// // // // // // // // // // //                 food, and biotechnology.
// // // // // // // // // // //               </p>
// // // // // // // // // // //               <div className="w-20 h-1 bg-accent rounded-full mt-6" />
// // // // // // // // // // //             </motion.div>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </section>

// // // // // // // // // // //       {/* Authorized Distributors Section */}
// // // // // // // // // // //       <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
// // // // // // // // // // //         <div className="max-w-7xl mx-auto px-6">
// // // // // // // // // // //           <motion.div
// // // // // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // // //             transition={{ duration: 0.6 }}
// // // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // // //             className="text-center mb-12"
// // // // // // // // // // //           >
// // // // // // // // // // //             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
// // // // // // // // // // //               PENTA FREIGHT
// // // // // // // // // // //             </h2>
// // // // // // // // // // //             <div className="w-24 h-1 bg-accent mx-auto mb-8" />
// // // // // // // // // // //           </motion.div>

// // // // // // // // // // //           <motion.div
// // // // // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // // //             transition={{ duration: 0.6, delay: 0.2 }}
// // // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // // //             className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
// // // // // // // // // // //           >
// // // // // // // // // // //             <div className="grid md:grid-cols-2 gap-0">
// // // // // // // // // // //               <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-12 flex items-center justify-center">
// // // // // // // // // // //                 <div className="text-center">
// // // // // // // // // // //                   <div className="text-7xl mb-4">❄️</div>
// // // // // // // // // // //                   <div className="text-2xl font-bold text-gray-800">Pelican BioThermal™</div>
// // // // // // // // // // //                   <div className="text-gray-500 mt-2">Trusted Partner</div>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               </div>
// // // // // // // // // // //               <div className="p-12">
// // // // // // // // // // //                 <h3 className="text-3xl font-bold text-gray-900 mb-4">
// // // // // // // // // // //                   Authorized Distributors for 
// // // // // // // // // // //                   <span className="text-accent block mt-2">Pelican BioThermal™ Products</span>
// // // // // // // // // // //                 </h3>
// // // // // // // // // // //                 <p className="text-gray-600 text-lg leading-relaxed mb-8">
// // // // // // // // // // //                   Penta Freight is proud to be an authorized distributor for Pelican BioThermal™, 
// // // // // // // // // // //                   offering world-class temperature-controlled packaging solutions for 
// // // // // // // // // // //                   pharmaceutical, biotech, and life sciences industries.
// // // // // // // // // // //                 </p>
// // // // // // // // // // //                 <motion.button
// // // // // // // // // // //                   whileHover={{ x: 10 }}
// // // // // // // // // // //                   className="text-accent font-semibold text-lg flex items-center gap-2 group"
// // // // // // // // // // //                 >
// // // // // // // // // // //                   Read more 
// // // // // // // // // // //                   <span className="text-accent group-hover:translate-x-2 transition-transform duration-300">→</span>
// // // // // // // // // // //                 </motion.button>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </motion.div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </section>

// // // // // // // // // // //       {/* PRODUCT SOLUTIONS SECTION - SEQUENTIAL EFFECT */}
// // // // // // // // // // //       <section 
// // // // // // // // // // //         ref={productSectionRef}
// // // // // // // // // // //         className="relative min-h-screen bg-black overflow-hidden"
// // // // // // // // // // //       >
// // // // // // // // // // //         {/* Background pattern */}
// // // // // // // // // // //         <div className="absolute inset-0 opacity-10">
// // // // // // // // // // //           <div className="w-full h-full bg-[radial-gradient(circle_at_center,#fff_1px,transparent_1px)] bg-[length:40px_40px]" />
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* Sticky Container */}
// // // // // // // // // // //         <div className="sticky top-0 h-screen flex items-center justify-center">
          
// // // // // // // // // // //           {/* PRODUCT SOLUTIONS HEADING - Fades out in Stage 2 */}
// // // // // // // // // // //           <motion.div
// // // // // // // // // // //             animate={{ 
// // // // // // // // // // //               opacity: stage === 2 ? 0 : 1,
// // // // // // // // // // //               scale: stage === 2 ? 0.8 : 1,
// // // // // // // // // // //               y: stage === 2 ? -50 : 0
// // // // // // // // // // //             }}
// // // // // // // // // // //             transition={{ duration: 0.6 }}
// // // // // // // // // // //             className="absolute z-20"
// // // // // // // // // // //           >
// // // // // // // // // // //             <h2 className="text-6xl md:text-8xl font-bold text-white text-center">
// // // // // // // // // // //               Product <span className="text-accent">Solutions</span>
// // // // // // // // // // //             </h2>
// // // // // // // // // // //           </motion.div>

// // // // // // // // // // //           {/* CONTAINERS - Slide in during Stage 1 */}
// // // // // // // // // // //           <div className="absolute inset-0 flex items-center justify-center">
// // // // // // // // // // //             <div className="w-full max-w-6xl mx-auto px-6">
// // // // // // // // // // //               <div className="grid lg:grid-cols-2 gap-8">
                
// // // // // // // // // // //                 {/* LEFT CONTAINER - Slides from left */}
// // // // // // // // // // //                 <motion.div
// // // // // // // // // // //                   initial={{ x: "-100%", opacity: 0 }}
// // // // // // // // // // //                   animate={{ 
// // // // // // // // // // //                     x: stage >= 1 ? "0%" : "-100%",
// // // // // // // // // // //                     opacity: stage >= 1 ? 1 : 0
// // // // // // // // // // //                   }}
// // // // // // // // // // //                   transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
// // // // // // // // // // //                   className="bg-gray-900/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/10 min-h-[500px] overflow-y-auto"
// // // // // // // // // // //                 >
// // // // // // // // // // //                   {/* Left Container Content - Appears in Stage 2 */}
// // // // // // // // // // //                   <motion.div
// // // // // // // // // // //                     animate={{ opacity: stage === 2 ? 1 : 0 }}
// // // // // // // // // // //                     transition={{ duration: 0.6, delay: 0.3 }}
// // // // // // // // // // //                   >
// // // // // // // // // // //                     <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
// // // // // // // // // // //                       Parcel <span className="text-accent">Shippers</span>
// // // // // // // // // // //                     </h3>
// // // // // // // // // // //                     <p className="text-gray-300 text-lg mb-8 leading-relaxed">
// // // // // // // // // // //                       We understand the unique challenges faced by parcel shippers and offer 
// // // // // // // // // // //                       tailored solutions for seamless shipping.
// // // // // // // // // // //                     </p>

// // // // // // // // // // //                     {/* Single Use */}
// // // // // // // // // // //                     <div className="mb-8">
// // // // // // // // // // //                       <h4 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">
// // // // // // // // // // //                         <span className="text-2xl">📦</span> Single Use
// // // // // // // // // // //                       </h4>
// // // // // // // // // // //                       <div className="space-y-3">
// // // // // // // // // // //                         {["COOLGUARD", "COOLGUARD RM", "COOLGUARD ADVANCE"].map((item, idx) => (
// // // // // // // // // // //                           <div key={idx} className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl hover:bg-accent/20 transition-all duration-300 cursor-pointer group">
// // // // // // // // // // //                             <span className="text-2xl group-hover:scale-110 transition-transform">📦</span>
// // // // // // // // // // //                             <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{item}</span>
// // // // // // // // // // //                           </div>
// // // // // // // // // // //                         ))}
// // // // // // // // // // //                       </div>
// // // // // // // // // // //                     </div>

// // // // // // // // // // //                     {/* Reusable */}
// // // // // // // // // // //                     <div>
// // // // // // // // // // //                       <h4 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">
// // // // // // // // // // //                         <span className="text-2xl">🔄</span> Reusable
// // // // // // // // // // //                       </h4>
// // // // // // // // // // //                       <div className="space-y-3">
// // // // // // // // // // //                         {["Credo Cube"].map((item, idx) => (
// // // // // // // // // // //                           <div key={idx} className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl hover:bg-accent/20 transition-all duration-300 cursor-pointer group">
// // // // // // // // // // //                             <span className="text-2xl group-hover:scale-110 transition-transform">🔄</span>
// // // // // // // // // // //                             <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{item}</span>
// // // // // // // // // // //                           </div>
// // // // // // // // // // //                         ))}
// // // // // // // // // // //                       </div>
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                   </motion.div>
// // // // // // // // // // //                 </motion.div>

// // // // // // // // // // //                 {/* RIGHT CONTAINER - Slides from right */}
// // // // // // // // // // //                 <motion.div
// // // // // // // // // // //                   initial={{ x: "100%", opacity: 0 }}
// // // // // // // // // // //                   animate={{ 
// // // // // // // // // // //                     x: stage >= 1 ? "0%" : "100%",
// // // // // // // // // // //                     opacity: stage >= 1 ? 1 : 0
// // // // // // // // // // //                   }}
// // // // // // // // // // //                   transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
// // // // // // // // // // //                   className="bg-gray-900/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/10 min-h-[500px] overflow-y-auto"
// // // // // // // // // // //                 >
// // // // // // // // // // //                   {/* Right Container Content - Appears in Stage 2 */}
// // // // // // // // // // //                   <motion.div
// // // // // // // // // // //                     animate={{ opacity: stage === 2 ? 1 : 0 }}
// // // // // // // // // // //                     transition={{ duration: 0.6, delay: 0.4 }}
// // // // // // // // // // //                   >
// // // // // // // // // // //                     <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
// // // // // // // // // // //                       Pallet <span className="text-accent">Shippers</span>
// // // // // // // // // // //                     </h3>
// // // // // // // // // // //                     <p className="text-gray-300 text-lg mb-8 leading-relaxed">
// // // // // // // // // // //                       We provide tailored services for pallet shippers, ensuring your cargo arrives 
// // // // // // // // // // //                       safely and efficiently.
// // // // // // // // // // //                     </p>

// // // // // // // // // // //                     {/* Single Use */}
// // // // // // // // // // //                     <div className="mb-8">
// // // // // // // // // // //                       <h4 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">
// // // // // // // // // // //                         <span className="text-2xl">📦</span> Single Use
// // // // // // // // // // //                       </h4>
// // // // // // // // // // //                       <div className="space-y-3">
// // // // // // // // // // //                         {["COOLPALL VERTOS", "COOLPALL VERTOS ADVANCE"].map((item, idx) => (
// // // // // // // // // // //                           <div key={idx} className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl hover:bg-accent/20 transition-all duration-300 cursor-pointer group">
// // // // // // // // // // //                             <span className="text-2xl group-hover:scale-110 transition-transform">📦</span>
// // // // // // // // // // //                             <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{item}</span>
// // // // // // // // // // //                           </div>
// // // // // // // // // // //                         ))}
// // // // // // // // // // //                       </div>
// // // // // // // // // // //                     </div>

// // // // // // // // // // //                     {/* Reusable */}
// // // // // // // // // // //                     <div>
// // // // // // // // // // //                       <h4 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">
// // // // // // // // // // //                         <span className="text-2xl">🔄</span> Reusable
// // // // // // // // // // //                       </h4>
// // // // // // // // // // //                       <div className="space-y-3">
// // // // // // // // // // //                         {["Credo XTEND", "CREDO CARGO"].map((item, idx) => (
// // // // // // // // // // //                           <div key={idx} className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl hover:bg-accent/20 transition-all duration-300 cursor-pointer group">
// // // // // // // // // // //                             <span className="text-2xl group-hover:scale-110 transition-transform">🔄</span>
// // // // // // // // // // //                             <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{item}</span>
// // // // // // // // // // //                           </div>
// // // // // // // // // // //                         ))}
// // // // // // // // // // //                       </div>
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                   </motion.div>
// // // // // // // // // // //                 </motion.div>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </section>

// // // // // // // // // // //       {/* FAQ Section Header */}
// // // // // // // // // // //       <section className="py-16 bg-gray-50">
// // // // // // // // // // //         <div className="max-w-4xl mx-auto text-center px-6">
// // // // // // // // // // //           <motion.div
// // // // // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // // //             transition={{ duration: 0.6 }}
// // // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // // //           >
// // // // // // // // // // //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
// // // // // // // // // // //               Explore our frequently asked questions to gain clarity about 
// // // // // // // // // // //               <span className="text-accent"> Penta Kuhl's</span> services and features
// // // // // // // // // // //             </h2>
// // // // // // // // // // //           </motion.div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </section>

// // // // // // // // // // //       {/* Features Section */}
// // // // // // // // // // //       <section className="py-20 bg-white">
// // // // // // // // // // //         <div className="max-w-7xl mx-auto px-6">
// // // // // // // // // // //           <motion.div
// // // // // // // // // // //             initial={{ opacity: 0, y: 50 }}
// // // // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // // //             transition={{ duration: 0.8 }}
// // // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // // //             className="text-center mb-16"
// // // // // // // // // // //           >
// // // // // // // // // // //             <h2 className="text-4xl md:text-5xl font-bold heading-font mb-4">Why Pentakuhl?</h2>
// // // // // // // // // // //             <p className="text-gray-600 text-lg max-w-xl mx-auto">
// // // // // // // // // // //               Revolutionizing logistics with artificial intelligence
// // // // // // // // // // //             </p>
// // // // // // // // // // //           </motion.div>

// // // // // // // // // // //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
// // // // // // // // // // //             {[
// // // // // // // // // // //               {
// // // // // // // // // // //                 title: "Instant Quote Engine",
// // // // // // // // // // //                 desc: "Get accurate freight quotes in under 10 seconds",
// // // // // // // // // // //                 icon: "⚡"
// // // // // // // // // // //               },
// // // // // // // // // // //               {
// // // // // // // // // // //                 title: "Smart Route Optimizer",
// // // // // // // // // // //                 desc: "AI suggests the fastest and most cost-effective routes",
// // // // // // // // // // //                 icon: "🧠"
// // // // // // // // // // //               },
// // // // // // // // // // //               {
// // // // // // // // // // //                 title: "Predictive ETA",
// // // // // // // // // // //                 desc: "Real-time tracking with 98% accurate arrival predictions",
// // // // // // // // // // //                 icon: "📍"
// // // // // // // // // // //               },
// // // // // // // // // // //               {
// // // // // // // // // // //                 title: "Document Intelligence",
// // // // // // // // // // //                 desc: "Auto-extracts data from bills of lading and invoices",
// // // // // // // // // // //                 icon: "📄"
// // // // // // // // // // //               },
// // // // // // // // // // //               {
// // // // // // // // // // //                 title: "Risk Analyzer",
// // // // // // // // // // //                 desc: "Predicts delays due to weather, port congestion, etc.",
// // // // // // // // // // //                 icon: "🌧️"
// // // // // // // // // // //               },
// // // // // // // // // // //               {
// // // // // // // // // // //                 title: "Carbon Calculator",
// // // // // // // // // // //                 desc: "Track and reduce your shipping carbon footprint",
// // // // // // // // // // //                 icon: "🌍"
// // // // // // // // // // //               },
// // // // // // // // // // //             ].map((feature, i) => (
// // // // // // // // // // //               <motion.div
// // // // // // // // // // //                 key={i}
// // // // // // // // // // //                 initial={{ opacity: 0, y: 50 }}
// // // // // // // // // // //                 whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // // //                 transition={{ duration: 0.6, delay: i * 0.1 }}
// // // // // // // // // // //                 viewport={{ once: true }}
// // // // // // // // // // //                 whileHover={{ y: -10 }}
// // // // // // // // // // //                 className="bg-gray-50 border border-gray-100 p-10 rounded-3xl hover:shadow-xl transition hover:border-accent group cursor-pointer"
// // // // // // // // // // //               >
// // // // // // // // // // //                 <div className="text-6xl mb-6 group-hover:scale-110 transition">{feature.icon}</div>
// // // // // // // // // // //                 <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
// // // // // // // // // // //                 <p className="text-gray-600">{feature.desc}</p>
// // // // // // // // // // //               </motion.div>
// // // // // // // // // // //             ))}
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </section>

// // // // // // // // // // //       {/* Demo / CTA Section */}
// // // // // // // // // // //       <section className="py-24 bg-gradient-to-br from-gray-900 to-primary text-white relative overflow-hidden">
// // // // // // // // // // //         <div className="absolute inset-0 opacity-10">
// // // // // // // // // // //           <div className="w-full h-full bg-[radial-gradient(circle_at_center,#fff_1px,transparent_1px)] bg-[length:40px_40px]" />
// // // // // // // // // // //         </div>
        
// // // // // // // // // // //         <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
// // // // // // // // // // //           <motion.h2
// // // // // // // // // // //             initial={{ opacity: 0, y: 50 }}
// // // // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // // //             transition={{ duration: 0.8 }}
// // // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // // //             className="text-5xl md:text-6xl font-bold heading-font mb-8"
// // // // // // // // // // //           >
// // // // // // // // // // //             Experience Pentakuhl Now
// // // // // // // // // // //           </motion.h2>
          
// // // // // // // // // // //           <motion.p
// // // // // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // // //             transition={{ duration: 0.8, delay: 0.2 }}
// // // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // // //             className="text-xl text-gray-300 mb-12"
// // // // // // // // // // //           >
// // // // // // // // // // //             Try our AI logistics assistant and get a free quote in seconds
// // // // // // // // // // //           </motion.p>

// // // // // // // // // // //           <motion.div
// // // // // // // // // // //             initial={{ opacity: 0, scale: 0.9 }}
// // // // // // // // // // //             whileInView={{ opacity: 1, scale: 1 }}
// // // // // // // // // // //             transition={{ duration: 0.6, delay: 0.4 }}
// // // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // // //             className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 max-w-2xl mx-auto"
// // // // // // // // // // //           >
// // // // // // // // // // //             <div className="mb-8">
// // // // // // // // // // //               <input 
// // // // // // // // // // //                 type="text" 
// // // // // // // // // // //                 placeholder="What are you shipping? (e.g. 5 tons electronics from Mumbai to Dubai)"
// // // // // // // // // // //                 className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-5 text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 transition"
// // // // // // // // // // //               />
// // // // // // // // // // //             </div>
// // // // // // // // // // //             <motion.button 
// // // // // // // // // // //               whileHover={{ scale: 1.02 }}
// // // // // // // // // // //               whileTap={{ scale: 0.98 }}
// // // // // // // // // // //               className="w-full bg-accent hover:bg-white hover:text-dark transition py-6 text-xl font-semibold rounded-2xl"
// // // // // // // // // // //             >
// // // // // // // // // // //               Get AI Quote Now →
// // // // // // // // // // //             </motion.button>
// // // // // // // // // // //           </motion.div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </section>

// // // // // // // // // // //       {/* Final CTA */}
// // // // // // // // // // //       <section className="py-20 bg-white text-center">
// // // // // // // // // // //         <div className="max-w-2xl mx-auto px-6">
// // // // // // // // // // //           <motion.h3
// // // // // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // // //             transition={{ duration: 0.6 }}
// // // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // // //             className="text-3xl md:text-4xl font-semibold mb-6"
// // // // // // // // // // //           >
// // // // // // // // // // //             Ready to transform your logistics?
// // // // // // // // // // //           </motion.h3>
          
// // // // // // // // // // //           <motion.p
// // // // // // // // // // //             initial={{ opacity: 0, y: 20 }}
// // // // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // // //             transition={{ duration: 0.6, delay: 0.2 }}
// // // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // // //             className="text-gray-600 text-lg mb-10"
// // // // // // // // // // //           >
// // // // // // // // // // //             Join hundreds of companies already using Pentakuhl AI
// // // // // // // // // // //           </motion.p>
          
// // // // // // // // // // //           <motion.button
// // // // // // // // // // //             initial={{ opacity: 0, y: 20 }}
// // // // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // // //             transition={{ duration: 0.6, delay: 0.4 }}
// // // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // // //             whileHover={{ scale: 1.05 }}
// // // // // // // // // // //             whileTap={{ scale: 0.95 }}
// // // // // // // // // // //             className="bg-primary text-white px-12 py-5 rounded-full text-lg font-medium hover:bg-dark transition shadow-xl"
// // // // // // // // // // //           >
// // // // // // // // // // //             Start Free Trial
// // // // // // // // // // //           </motion.button>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </section>
// // // // // // // // // // //     </>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default Pentakuhl;











// // // // // // // // // // import { motion } from "framer-motion";
// // // // // // // // // // import { useRef, useState, useEffect } from "react";

// // // // // // // // // // const Pentakuhl = () => {
// // // // // // // // // //   const productSectionRef = useRef(null);
// // // // // // // // // //   const [stage, setStage] = useState(0); // 0: heading only, 1: containers slide in, 2: data appears

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     const handleScroll = () => {
// // // // // // // // // //       if (productSectionRef.current) {
// // // // // // // // // //         const rect = productSectionRef.current.getBoundingClientRect();
// // // // // // // // // //         const windowHeight = window.innerHeight;
        
// // // // // // // // // //         // How far we've scrolled into the section (0 to 1) - SLOWER TRANSITIONS
// // // // // // // // // //         const scrollProgress = Math.max(0, Math.min(1, 
// // // // // // // // // //           (windowHeight - rect.top) / (windowHeight * 1.2) // Changed from 0.8 to 1.2 for slower progression
// // // // // // // // // //         ));
        
// // // // // // // // // //         // Stage 0: Heading only (0-15% scroll) - wider range
// // // // // // // // // //         if (scrollProgress < 0.15) {
// // // // // // // // // //           setStage(0);
// // // // // // // // // //         }
// // // // // // // // // //         // Stage 1: Containers slide in (15-50% scroll) - longer transition
// // // // // // // // // //         else if (scrollProgress >= 0.15 && scrollProgress < 0.5) {
// // // // // // // // // //           setStage(1);
// // // // // // // // // //         }
// // // // // // // // // //         // Stage 2: Data appears, heading fades (50-100% scroll)
// // // // // // // // // //         else if (scrollProgress >= 0.5) {
// // // // // // // // // //           setStage(2);
// // // // // // // // // //         }
// // // // // // // // // //       }
// // // // // // // // // //     };

// // // // // // // // // //     window.addEventListener("scroll", handleScroll);
// // // // // // // // // //     handleScroll();
    
// // // // // // // // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // // // // // // // //   }, []);

// // // // // // // // // //   return (
// // // // // // // // // //     <>
// // // // // // // // // //       {/* Hero Section with Video Background */}
// // // // // // // // // //       <section className="relative h-screen overflow-hidden">
// // // // // // // // // //         <video
// // // // // // // // // //           autoPlay
// // // // // // // // // //           loop
// // // // // // // // // //           muted
// // // // // // // // // //           playsInline
// // // // // // // // // //           className="absolute inset-0 w-full h-full object-cover"
// // // // // // // // // //         >
// // // // // // // // // //           <source src="/Industrial_Factory 1080P.mp4" type="video/mp4" />
// // // // // // // // // //         </video>

// // // // // // // // // //         <div className="absolute inset-0 bg-black/45 z-10" />
// // // // // // // // // //         <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20 z-10" />

// // // // // // // // // //         <div className="relative z-20 h-full flex items-center justify-center">
// // // // // // // // // //           <div className="max-w-7xl mx-auto px-6 text-center">
// // // // // // // // // //             <motion.div
// // // // // // // // // //               initial={{ opacity: 0, y: 30 }}
// // // // // // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // // // // // //               transition={{ duration: 0.8 }}
// // // // // // // // // //               className="inline-block bg-accent/20 text-accent text-sm font-medium px-6 py-2 rounded-full mb-6 backdrop-blur-sm"
// // // // // // // // // //             >
// // // // // // // // // //               AI-Powered Logistics
// // // // // // // // // //             </motion.div>

// // // // // // // // // //             <motion.h1
// // // // // // // // // //               initial={{ opacity: 0, y: 80 }}
// // // // // // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // // // // // //               transition={{ duration: 1 }}
// // // // // // // // // //               className="text-6xl md:text-7xl font-bold text-white leading-tight mb-8"
// // // // // // // // // //             >
// // // // // // // // // //               Meet <span className="text-accent">Pentakuhl</span>
// // // // // // // // // //             </motion.h1>

// // // // // // // // // //             <motion.p
// // // // // // // // // //               initial={{ opacity: 0, y: 40 }}
// // // // // // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // // // // // //               transition={{ duration: 1, delay: 0.2 }}
// // // // // // // // // //               className="text-2xl text-gray-200 max-w-3xl mx-auto"
// // // // // // // // // //             >
// // // // // // // // // //               Your intelligent logistics assistant. Instant quotes, smart routing, and predictive insights.
// // // // // // // // // //             </motion.p>

// // // // // // // // // //             <motion.div
// // // // // // // // // //               initial={{ opacity: 0, y: 40 }}
// // // // // // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // // // // // //               transition={{ duration: 1, delay: 0.4 }}
// // // // // // // // // //               className="mt-10"
// // // // // // // // // //             >
// // // // // // // // // //               <button className="bg-accent hover:bg-white hover:text-dark transition px-10 py-4 rounded-full text-lg font-semibold shadow-2xl">
// // // // // // // // // //                 Try Pentakuhl AI →
// // // // // // // // // //               </button>
// // // // // // // // // //             </motion.div>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>

// // // // // // // // // //         <motion.div
// // // // // // // // // //           initial={{ opacity: 0 }}
// // // // // // // // // //           animate={{ opacity: 1 }}
// // // // // // // // // //           transition={{ delay: 1.5, duration: 1 }}
// // // // // // // // // //           className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
// // // // // // // // // //         >
// // // // // // // // // //           <div className="w-[35px] h-[60px] border-2 border-white/60 rounded-full flex justify-center p-2">
// // // // // // // // // //             <motion.div
// // // // // // // // // //               animate={{ y: [0, 18, 0] }}
// // // // // // // // // //               transition={{ repeat: Infinity, duration: 1.5 }}
// // // // // // // // // //               className="w-1.5 h-4 bg-white rounded-full"
// // // // // // // // // //             />
// // // // // // // // // //           </div>
// // // // // // // // // //         </motion.div>
// // // // // // // // // //       </section>

// // // // // // // // // //       {/* About Penta KÜHL Section */}
// // // // // // // // // //       <section className="py-24 bg-white">
// // // // // // // // // //         <div className="max-w-7xl mx-auto px-6">
// // // // // // // // // //           <div className="grid md:grid-cols-2 gap-16 items-center">
// // // // // // // // // //             <motion.div
// // // // // // // // // //               initial={{ opacity: 0, x: -50 }}
// // // // // // // // // //               whileInView={{ opacity: 1, x: 0 }}
// // // // // // // // // //               transition={{ duration: 0.8 }}
// // // // // // // // // //               viewport={{ once: true }}
// // // // // // // // // //             >
// // // // // // // // // //               <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
// // // // // // // // // //                 ABOUT <br />
// // // // // // // // // //                 <span className="text-accent">PENTA KÜHL</span>
// // // // // // // // // //               </h2>
// // // // // // // // // //             </motion.div>

// // // // // // // // // //             <motion.div
// // // // // // // // // //               initial={{ opacity: 0, x: 50 }}
// // // // // // // // // //               whileInView={{ opacity: 1, x: 0 }}
// // // // // // // // // //               transition={{ duration: 0.8, delay: 0.2 }}
// // // // // // // // // //               viewport={{ once: true }}
// // // // // // // // // //               className="space-y-6"
// // // // // // // // // //             >
// // // // // // // // // //               <p className="text-gray-700 text-lg leading-relaxed">
// // // // // // // // // //                 At <span className="font-semibold text-accent">Pentakuhl</span>, we specialize in providing durable, 
// // // // // // // // // //                 effective packaging solutions that maintain temperature 
// // // // // // // // // //                 <span className="font-semibold text-accent"> stability </span> 
// // // // // // // // // //                 during transit, 
// // // // // // // // // //                 <span className="font-semibold text-accent"> protecting </span> 
// // // // // // // // // //                 your valuable products.
// // // // // // // // // //               </p>
// // // // // // // // // //               <p className="text-gray-700 text-lg leading-relaxed">
// // // // // // // // // //                 Our innovative designs cater to various industries, including pharmaceuticals, 
// // // // // // // // // //                 food, and biotechnology.
// // // // // // // // // //               </p>
// // // // // // // // // //               <div className="w-20 h-1 bg-accent rounded-full mt-6" />
// // // // // // // // // //             </motion.div>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </section>

// // // // // // // // // //       {/* Authorized Distributors Section */}
// // // // // // // // // //       <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
// // // // // // // // // //         <div className="max-w-7xl mx-auto px-6">
// // // // // // // // // //           <motion.div
// // // // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // //             transition={{ duration: 0.6 }}
// // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // //             className="text-center mb-12"
// // // // // // // // // //           >
// // // // // // // // // //             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
// // // // // // // // // //               PENTA FREIGHT
// // // // // // // // // //             </h2>
// // // // // // // // // //             <div className="w-24 h-1 bg-accent mx-auto mb-8" />
// // // // // // // // // //           </motion.div>

// // // // // // // // // //           <motion.div
// // // // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // //             transition={{ duration: 0.6, delay: 0.2 }}
// // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // //             className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
// // // // // // // // // //           >
// // // // // // // // // //             <div className="grid md:grid-cols-2 gap-0">
// // // // // // // // // //               <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-12 flex items-center justify-center">
// // // // // // // // // //                 <div className="text-center">
// // // // // // // // // //                   <div className="text-7xl mb-4">❄️</div>
// // // // // // // // // //                   <div className="text-2xl font-bold text-gray-800">Pelican BioThermal™</div>
// // // // // // // // // //                   <div className="text-gray-500 mt-2">Trusted Partner</div>
// // // // // // // // // //                 </div>
// // // // // // // // // //               </div>
// // // // // // // // // //               <div className="p-12">
// // // // // // // // // //                 <h3 className="text-3xl font-bold text-gray-900 mb-4">
// // // // // // // // // //                   Authorized Distributors for 
// // // // // // // // // //                   <span className="text-accent block mt-2">Pelican BioThermal™ Products</span>
// // // // // // // // // //                 </h3>
// // // // // // // // // //                 <p className="text-gray-600 text-lg leading-relaxed mb-8">
// // // // // // // // // //                   Penta Freight is proud to be an authorized distributor for Pelican BioThermal™, 
// // // // // // // // // //                   offering world-class temperature-controlled packaging solutions for 
// // // // // // // // // //                   pharmaceutical, biotech, and life sciences industries.
// // // // // // // // // //                 </p>
// // // // // // // // // //                 <motion.button
// // // // // // // // // //                   whileHover={{ x: 10 }}
// // // // // // // // // //                   className="text-accent font-semibold text-lg flex items-center gap-2 group"
// // // // // // // // // //                 >
// // // // // // // // // //                   Read more 
// // // // // // // // // //                   <span className="text-accent group-hover:translate-x-2 transition-transform duration-300">→</span>
// // // // // // // // // //                 </motion.button>
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>
// // // // // // // // // //           </motion.div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </section>

// // // // // // // // // //       {/* PRODUCT SOLUTIONS SECTION - SLOWER SEQUENTIAL EFFECT */}
// // // // // // // // // //       <section 
// // // // // // // // // //         ref={productSectionRef}
// // // // // // // // // //         className="relative min-h-[150vh] bg-black overflow-hidden" // Increased height for slower scroll
// // // // // // // // // //       >
// // // // // // // // // //         {/* Background pattern */}
// // // // // // // // // //         <div className="absolute inset-0 opacity-10">
// // // // // // // // // //           <div className="w-full h-full bg-[radial-gradient(circle_at_center,#fff_1px,transparent_1px)] bg-[length:40px_40px]" />
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Sticky Container */}
// // // // // // // // // //         <div className="sticky top-0 h-screen flex items-center justify-center">
          
// // // // // // // // // //           {/* PRODUCT SOLUTIONS HEADING - Slower fade out */}
// // // // // // // // // //           <motion.div
// // // // // // // // // //             animate={{ 
// // // // // // // // // //               opacity: stage === 2 ? 0 : 1,
// // // // // // // // // //               scale: stage === 2 ? 0.7 : 1,
// // // // // // // // // //               y: stage === 2 ? -80 : 0
// // // // // // // // // //             }}
// // // // // // // // // //             transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }} // Slower transition
// // // // // // // // // //             className="absolute z-20"
// // // // // // // // // //           >
// // // // // // // // // //             <h2 className="text-6xl md:text-8xl font-bold text-white text-center">
// // // // // // // // // //               Product <span className="text-accent">Solutions</span>
// // // // // // // // // //             </h2>
// // // // // // // // // //             <motion.p
// // // // // // // // // //               animate={{ opacity: stage === 2 ? 0 : 0.6 }}
// // // // // // // // // //               transition={{ duration: 1 }}
// // // // // // // // // //               className="text-gray-400 text-center mt-4"
// // // // // // // // // //             >
// // // // // // // // // //               Scroll to explore
// // // // // // // // // //             </motion.p>
// // // // // // // // // //           </motion.div>

// // // // // // // // // //           {/* CONTAINERS - Slower slide in */}
// // // // // // // // // //           <div className="absolute inset-0 flex items-center justify-center">
// // // // // // // // // //             <div className="w-full max-w-6xl mx-auto px-6">
// // // // // // // // // //               <div className="grid lg:grid-cols-2 gap-8">
                
// // // // // // // // // //                 {/* LEFT CONTAINER - Slower slide from left */}
// // // // // // // // // //                 <motion.div
// // // // // // // // // //                   initial={{ x: "-120%", opacity: 0 }}
// // // // // // // // // //                   animate={{ 
// // // // // // // // // //                     x: stage >= 1 ? "0%" : "-120%",
// // // // // // // // // //                     opacity: stage >= 1 ? 1 : 0
// // // // // // // // // //                   }}
// // // // // // // // // //                   transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} // Slower with delay
// // // // // // // // // //                   className="bg-gray-900/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/10 min-h-[550px] overflow-y-auto"
// // // // // // // // // //                 >
// // // // // // // // // //                   {/* Left Container Content - Slower appearance */}
// // // // // // // // // //                   <motion.div
// // // // // // // // // //                     animate={{ opacity: stage === 2 ? 1 : 0 }}
// // // // // // // // // //                     transition={{ duration: 0.8, delay: 0.4 }} // Slower with delay
// // // // // // // // // //                   >
// // // // // // // // // //                     <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
// // // // // // // // // //                       Parcel <span className="text-accent">Shippers</span>
// // // // // // // // // //                     </h3>
// // // // // // // // // //                     <p className="text-gray-300 text-lg mb-8 leading-relaxed">
// // // // // // // // // //                       We understand the unique challenges faced by parcel shippers and offer 
// // // // // // // // // //                       tailored solutions for seamless shipping.
// // // // // // // // // //                     </p>

// // // // // // // // // //                     {/* Single Use */}
// // // // // // // // // //                     <div className="mb-8">
// // // // // // // // // //                       <h4 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">
// // // // // // // // // //                         <span className="text-2xl">📦</span> Single Use
// // // // // // // // // //                       </h4>
// // // // // // // // // //                       <div className="space-y-3">
// // // // // // // // // //                         {["COOLGUARD", "COOLGUARD RM", "COOLGUARD ADVANCE"].map((item, idx) => (
// // // // // // // // // //                           <motion.div
// // // // // // // // // //                             key={idx}
// // // // // // // // // //                             initial={{ opacity: 0, x: -20 }}
// // // // // // // // // //                             animate={{ opacity: stage === 2 ? 1 : 0, x: stage === 2 ? 0 : -20 }}
// // // // // // // // // //                             transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
// // // // // // // // // //                             className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl hover:bg-accent/20 transition-all duration-300 cursor-pointer group"
// // // // // // // // // //                           >
// // // // // // // // // //                             <span className="text-2xl group-hover:scale-110 transition-transform">📦</span>
// // // // // // // // // //                             <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{item}</span>
// // // // // // // // // //                           </motion.div>
// // // // // // // // // //                         ))}
// // // // // // // // // //                       </div>
// // // // // // // // // //                     </div>

// // // // // // // // // //                     {/* Reusable */}
// // // // // // // // // //                     <div>
// // // // // // // // // //                       <h4 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">
// // // // // // // // // //                         <span className="text-2xl">🔄</span> Reusable
// // // // // // // // // //                       </h4>
// // // // // // // // // //                       <div className="space-y-3">
// // // // // // // // // //                         {["Credo Cube"].map((item, idx) => (
// // // // // // // // // //                           <motion.div
// // // // // // // // // //                             key={idx}
// // // // // // // // // //                             initial={{ opacity: 0, x: -20 }}
// // // // // // // // // //                             animate={{ opacity: stage === 2 ? 1 : 0, x: stage === 2 ? 0 : -20 }}
// // // // // // // // // //                             transition={{ duration: 0.5, delay: 0.9 }}
// // // // // // // // // //                             className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl hover:bg-accent/20 transition-all duration-300 cursor-pointer group"
// // // // // // // // // //                           >
// // // // // // // // // //                             <span className="text-2xl group-hover:scale-110 transition-transform">🔄</span>
// // // // // // // // // //                             <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{item}</span>
// // // // // // // // // //                           </motion.div>
// // // // // // // // // //                         ))}
// // // // // // // // // //                       </div>
// // // // // // // // // //                     </div>
// // // // // // // // // //                   </motion.div>
// // // // // // // // // //                 </motion.div>

// // // // // // // // // //                 {/* RIGHT CONTAINER - Slower slide from right */}
// // // // // // // // // //                 <motion.div
// // // // // // // // // //                   initial={{ x: "120%", opacity: 0 }}
// // // // // // // // // //                   animate={{ 
// // // // // // // // // //                     x: stage >= 1 ? "0%" : "120%",
// // // // // // // // // //                     opacity: stage >= 1 ? 1 : 0
// // // // // // // // // //                   }}
// // // // // // // // // //                   transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }} // Slower with delay
// // // // // // // // // //                   className="bg-gray-900/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/10 min-h-[550px] overflow-y-auto"
// // // // // // // // // //                 >
// // // // // // // // // //                   {/* Right Container Content - Slower appearance */}
// // // // // // // // // //                   <motion.div
// // // // // // // // // //                     animate={{ opacity: stage === 2 ? 1 : 0 }}
// // // // // // // // // //                     transition={{ duration: 0.8, delay: 0.5 }} // Slower with delay
// // // // // // // // // //                   >
// // // // // // // // // //                     <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
// // // // // // // // // //                       Pallet <span className="text-accent">Shippers</span>
// // // // // // // // // //                     </h3>
// // // // // // // // // //                     <p className="text-gray-300 text-lg mb-8 leading-relaxed">
// // // // // // // // // //                       We provide tailored services for pallet shippers, ensuring your cargo arrives 
// // // // // // // // // //                       safely and efficiently.
// // // // // // // // // //                     </p>

// // // // // // // // // //                     {/* Single Use */}
// // // // // // // // // //                     <div className="mb-8">
// // // // // // // // // //                       <h4 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">
// // // // // // // // // //                         <span className="text-2xl">📦</span> Single Use
// // // // // // // // // //                       </h4>
// // // // // // // // // //                       <div className="space-y-3">
// // // // // // // // // //                         {["COOLPALL VERTOS", "COOLPALL VERTOS ADVANCE"].map((item, idx) => (
// // // // // // // // // //                           <motion.div
// // // // // // // // // //                             key={idx}
// // // // // // // // // //                             initial={{ opacity: 0, x: 20 }}
// // // // // // // // // //                             animate={{ opacity: stage === 2 ? 1 : 0, x: stage === 2 ? 0 : 20 }}
// // // // // // // // // //                             transition={{ duration: 0.5, delay: 0.7 + idx * 0.1 }}
// // // // // // // // // //                             className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl hover:bg-accent/20 transition-all duration-300 cursor-pointer group"
// // // // // // // // // //                           >
// // // // // // // // // //                             <span className="text-2xl group-hover:scale-110 transition-transform">📦</span>
// // // // // // // // // //                             <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{item}</span>
// // // // // // // // // //                           </motion.div>
// // // // // // // // // //                         ))}
// // // // // // // // // //                       </div>
// // // // // // // // // //                     </div>

// // // // // // // // // //                     {/* Reusable */}
// // // // // // // // // //                     <div>
// // // // // // // // // //                       <h4 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">
// // // // // // // // // //                         <span className="text-2xl">🔄</span> Reusable
// // // // // // // // // //                       </h4>
// // // // // // // // // //                       <div className="space-y-3">
// // // // // // // // // //                         {["Credo XTEND", "CREDO CARGO"].map((item, idx) => (
// // // // // // // // // //                           <motion.div
// // // // // // // // // //                             key={idx}
// // // // // // // // // //                             initial={{ opacity: 0, x: 20 }}
// // // // // // // // // //                             animate={{ opacity: stage === 2 ? 1 : 0, x: stage === 2 ? 0 : 20 }}
// // // // // // // // // //                             transition={{ duration: 0.5, delay: 1.0 + idx * 0.1 }}
// // // // // // // // // //                             className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl hover:bg-accent/20 transition-all duration-300 cursor-pointer group"
// // // // // // // // // //                           >
// // // // // // // // // //                             <span className="text-2xl group-hover:scale-110 transition-transform">🔄</span>
// // // // // // // // // //                             <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{item}</span>
// // // // // // // // // //                           </motion.div>
// // // // // // // // // //                         ))}
// // // // // // // // // //                       </div>
// // // // // // // // // //                     </div>
// // // // // // // // // //                   </motion.div>
// // // // // // // // // //                 </motion.div>
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </section>

// // // // // // // // // //       {/* FAQ Section Header */}
// // // // // // // // // //       <section className="py-16 bg-gray-50">
// // // // // // // // // //         <div className="max-w-4xl mx-auto text-center px-6">
// // // // // // // // // //           <motion.div
// // // // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // //             transition={{ duration: 0.6 }}
// // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // //           >
// // // // // // // // // //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
// // // // // // // // // //               Explore our frequently asked questions to gain clarity about 
// // // // // // // // // //               <span className="text-accent"> Penta Kuhl's</span> services and features
// // // // // // // // // //             </h2>
// // // // // // // // // //           </motion.div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </section>

// // // // // // // // // //       {/* Features Section */}
// // // // // // // // // //       <section className="py-20 bg-white">
// // // // // // // // // //         <div className="max-w-7xl mx-auto px-6">
// // // // // // // // // //           <motion.div
// // // // // // // // // //             initial={{ opacity: 0, y: 50 }}
// // // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // //             transition={{ duration: 0.8 }}
// // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // //             className="text-center mb-16"
// // // // // // // // // //           >
// // // // // // // // // //             <h2 className="text-4xl md:text-5xl font-bold heading-font mb-4">Why Pentakuhl?</h2>
// // // // // // // // // //             <p className="text-gray-600 text-lg max-w-xl mx-auto">
// // // // // // // // // //               Revolutionizing logistics with artificial intelligence
// // // // // // // // // //             </p>
// // // // // // // // // //           </motion.div>

// // // // // // // // // //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
// // // // // // // // // //             {[
// // // // // // // // // //               {
// // // // // // // // // //                 title: "Instant Quote Engine",
// // // // // // // // // //                 desc: "Get accurate freight quotes in under 10 seconds",
// // // // // // // // // //                 icon: "⚡"
// // // // // // // // // //               },
// // // // // // // // // //               {
// // // // // // // // // //                 title: "Smart Route Optimizer",
// // // // // // // // // //                 desc: "AI suggests the fastest and most cost-effective routes",
// // // // // // // // // //                 icon: "🧠"
// // // // // // // // // //               },
// // // // // // // // // //               {
// // // // // // // // // //                 title: "Predictive ETA",
// // // // // // // // // //                 desc: "Real-time tracking with 98% accurate arrival predictions",
// // // // // // // // // //                 icon: "📍"
// // // // // // // // // //               },
// // // // // // // // // //               {
// // // // // // // // // //                 title: "Document Intelligence",
// // // // // // // // // //                 desc: "Auto-extracts data from bills of lading and invoices",
// // // // // // // // // //                 icon: "📄"
// // // // // // // // // //               },
// // // // // // // // // //               {
// // // // // // // // // //                 title: "Risk Analyzer",
// // // // // // // // // //                 desc: "Predicts delays due to weather, port congestion, etc.",
// // // // // // // // // //                 icon: "🌧️"
// // // // // // // // // //               },
// // // // // // // // // //               {
// // // // // // // // // //                 title: "Carbon Calculator",
// // // // // // // // // //                 desc: "Track and reduce your shipping carbon footprint",
// // // // // // // // // //                 icon: "🌍"
// // // // // // // // // //               },
// // // // // // // // // //             ].map((feature, i) => (
// // // // // // // // // //               <motion.div
// // // // // // // // // //                 key={i}
// // // // // // // // // //                 initial={{ opacity: 0, y: 50 }}
// // // // // // // // // //                 whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // //                 transition={{ duration: 0.6, delay: i * 0.1 }}
// // // // // // // // // //                 viewport={{ once: true }}
// // // // // // // // // //                 whileHover={{ y: -10 }}
// // // // // // // // // //                 className="bg-gray-50 border border-gray-100 p-10 rounded-3xl hover:shadow-xl transition hover:border-accent group cursor-pointer"
// // // // // // // // // //               >
// // // // // // // // // //                 <div className="text-6xl mb-6 group-hover:scale-110 transition">{feature.icon}</div>
// // // // // // // // // //                 <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
// // // // // // // // // //                 <p className="text-gray-600">{feature.desc}</p>
// // // // // // // // // //               </motion.div>
// // // // // // // // // //             ))}
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </section>

// // // // // // // // // //       {/* Demo / CTA Section */}
// // // // // // // // // //       <section className="py-24 bg-gradient-to-br from-gray-900 to-primary text-white relative overflow-hidden">
// // // // // // // // // //         <div className="absolute inset-0 opacity-10">
// // // // // // // // // //           <div className="w-full h-full bg-[radial-gradient(circle_at_center,#fff_1px,transparent_1px)] bg-[length:40px_40px]" />
// // // // // // // // // //         </div>
        
// // // // // // // // // //         <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
// // // // // // // // // //           <motion.h2
// // // // // // // // // //             initial={{ opacity: 0, y: 50 }}
// // // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // //             transition={{ duration: 0.8 }}
// // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // //             className="text-5xl md:text-6xl font-bold heading-font mb-8"
// // // // // // // // // //           >
// // // // // // // // // //             Experience Pentakuhl Now
// // // // // // // // // //           </motion.h2>
          
// // // // // // // // // //           <motion.p
// // // // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // //             transition={{ duration: 0.8, delay: 0.2 }}
// // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // //             className="text-xl text-gray-300 mb-12"
// // // // // // // // // //           >
// // // // // // // // // //             Try our AI logistics assistant and get a free quote in seconds
// // // // // // // // // //           </motion.p>

// // // // // // // // // //           <motion.div
// // // // // // // // // //             initial={{ opacity: 0, scale: 0.9 }}
// // // // // // // // // //             whileInView={{ opacity: 1, scale: 1 }}
// // // // // // // // // //             transition={{ duration: 0.6, delay: 0.4 }}
// // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // //             className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 max-w-2xl mx-auto"
// // // // // // // // // //           >
// // // // // // // // // //             <div className="mb-8">
// // // // // // // // // //               <input 
// // // // // // // // // //                 type="text" 
// // // // // // // // // //                 placeholder="What are you shipping? (e.g. 5 tons electronics from Mumbai to Dubai)"
// // // // // // // // // //                 className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-5 text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 transition"
// // // // // // // // // //               />
// // // // // // // // // //             </div>
// // // // // // // // // //             <motion.button 
// // // // // // // // // //               whileHover={{ scale: 1.02 }}
// // // // // // // // // //               whileTap={{ scale: 0.98 }}
// // // // // // // // // //               className="w-full bg-accent hover:bg-white hover:text-dark transition py-6 text-xl font-semibold rounded-2xl"
// // // // // // // // // //             >
// // // // // // // // // //               Get AI Quote Now →
// // // // // // // // // //             </motion.button>
// // // // // // // // // //           </motion.div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </section>

// // // // // // // // // //       {/* Final CTA */}
// // // // // // // // // //       <section className="py-20 bg-white text-center">
// // // // // // // // // //         <div className="max-w-2xl mx-auto px-6">
// // // // // // // // // //           <motion.h3
// // // // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // //             transition={{ duration: 0.6 }}
// // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // //             className="text-3xl md:text-4xl font-semibold mb-6"
// // // // // // // // // //           >
// // // // // // // // // //             Ready to transform your logistics?
// // // // // // // // // //           </motion.h3>
          
// // // // // // // // // //           <motion.p
// // // // // // // // // //             initial={{ opacity: 0, y: 20 }}
// // // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // //             transition={{ duration: 0.6, delay: 0.2 }}
// // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // //             className="text-gray-600 text-lg mb-10"
// // // // // // // // // //           >
// // // // // // // // // //             Join hundreds of companies already using Pentakuhl AI
// // // // // // // // // //           </motion.p>
          
// // // // // // // // // //           <motion.button
// // // // // // // // // //             initial={{ opacity: 0, y: 20 }}
// // // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // // //             transition={{ duration: 0.6, delay: 0.4 }}
// // // // // // // // // //             viewport={{ once: true }}
// // // // // // // // // //             whileHover={{ scale: 1.05 }}
// // // // // // // // // //             whileTap={{ scale: 0.95 }}
// // // // // // // // // //             className="bg-primary text-white px-12 py-5 rounded-full text-lg font-medium hover:bg-dark transition shadow-xl"
// // // // // // // // // //           >
// // // // // // // // // //             Start Free Trial
// // // // // // // // // //           </motion.button>
// // // // // // // // // //         </div>
// // // // // // // // // //       </section>
// // // // // // // // // //     </>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default Pentakuhl;





// // // // // // // // // import { motion } from "framer-motion";
// // // // // // // // // import { useRef, useState, useEffect } from "react";
// // // // // // // // // import { useScroll, useTransform } from "framer-motion";

// // // // // // // // // // Horizontal Scroll Band Component - Matching Screenshot Structure
// // // // // // // // // const HorizontalScrollSection = () => {
// // // // // // // // //   const containerRef = useRef(null);
// // // // // // // // //   const { scrollYProgress } = useScroll({
// // // // // // // // //     target: containerRef,
// // // // // // // // //     offset: ["start end", "end start"],
// // // // // // // // //   });

// // // // // // // // //   // Upper band moves LEFT when scrolling DOWN
// // // // // // // // //   const upperBandX = useTransform(scrollYProgress, [0, 1], [0, -500]);
  
// // // // // // // // //   // Lower band moves RIGHT when scrolling DOWN
// // // // // // // // //   const lowerBandX = useTransform(scrollYProgress, [0, 1], [0, 500]);

// // // // // // // // //   // Menu items from screenshot
// // // // // // // // //   const menuItems = [
// // // // // // // // //     "Robust Load Security",
// // // // // // // // //     "Expert Logistics Support",
// // // // // // // // //     "Tailored Freight Solutions",
// // // // // // // // //     "Robust Load Security",
// // // // // // // // //     "Expert Logistics Support",
// // // // // // // // //     "Flexible Shipping Schedules",
// // // // // // // // //     "Volume Discounts",
// // // // // // // // //     "End-to-End Supply Chain Management",
// // // // // // // // //     "Flexible Ship Schedule",
// // // // // // // // //   ];

// // // // // // // // //   return (
// // // // // // // // //     <section 
// // // // // // // // //       ref={containerRef}
// // // // // // // // //       className="relative min-h-[100vh] bg-gradient-to-b from-gray-900 to-black overflow-hidden"
// // // // // // // // //     >
// // // // // // // // //       {/* Background Effect */}
// // // // // // // // //       <div className="absolute inset-0 opacity-5">
// // // // // // // // //         <div className="w-full h-full bg-[radial-gradient(circle_at_center,#fff_1px,transparent_1px)] bg-[length:40px_40px]" />
// // // // // // // // //       </div>

// // // // // // // // //       {/* Sticky Container */}
// // // // // // // // //       <div className="sticky top-0 h-screen flex flex-col items-center justify-center gap-6 px-4">
        
// // // // // // // // //         {/* MENU Label */}
// // // // // // // // //         <motion.div
// // // // // // // // //           initial={{ opacity: 0, y: 20 }}
// // // // // // // // //           animate={{ opacity: 1, y: 0 }}
// // // // // // // // //           transition={{ duration: 0.6 }}
// // // // // // // // //           className="text-center mb-2"
// // // // // // // // //         >
// // // // // // // // //           <span className="text-accent text-sm font-semibold tracking-wider px-4 py-1 bg-accent/10 rounded-full">
// // // // // // // // //             MENU
// // // // // // // // //           </span>
// // // // // // // // //         </motion.div>

// // // // // // // // //         {/* Upper Band - Moves Left when scrolling down */}
// // // // // // // // //         <motion.div
// // // // // // // // //           style={{ x: upperBandX }}
// // // // // // // // //           className="w-full overflow-hidden py-4"
// // // // // // // // //         >
// // // // // // // // //           <div className="flex gap-4 whitespace-nowrap">
// // // // // // // // //             {menuItems.map((item, idx) => (
// // // // // // // // //               <div
// // // // // // // // //                 key={idx}
// // // // // // // // //                 className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-800/90 to-gray-900/90 backdrop-blur-md rounded-full px-6 py-3 shadow-xl border border-white/10 hover:border-accent/50 transition-all duration-300 cursor-pointer group"
// // // // // // // // //               >
// // // // // // // // //                 <span className="w-2 h-2 bg-accent rounded-full group-hover:scale-150 transition-transform" />
// // // // // // // // //                 <span className="text-white font-medium text-sm md:text-base group-hover:text-accent transition-colors">
// // // // // // // // //                   {item}
// // // // // // // // //                 </span>
// // // // // // // // //               </div>
// // // // // // // // //             ))}
// // // // // // // // //           </div>
// // // // // // // // //         </motion.div>

// // // // // // // // //         {/* Lower Band - Moves Right when scrolling down */}
// // // // // // // // //         <motion.div
// // // // // // // // //           style={{ x: lowerBandX }}
// // // // // // // // //           className="w-full overflow-hidden py-4"
// // // // // // // // //         >
// // // // // // // // //           <div className="flex gap-4 whitespace-nowrap">
// // // // // // // // //             {menuItems.slice().reverse().map((item, idx) => (
// // // // // // // // //               <div
// // // // // // // // //                 key={idx}
// // // // // // // // //                 className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-800/90 to-gray-900/90 backdrop-blur-md rounded-full px-6 py-3 shadow-xl border border-white/10 hover:border-accent/50 transition-all duration-300 cursor-pointer group"
// // // // // // // // //               >
// // // // // // // // //                 <span className="w-2 h-2 bg-accent rounded-full group-hover:scale-150 transition-transform" />
// // // // // // // // //                 <span className="text-white font-medium text-sm md:text-base group-hover:text-accent transition-colors">
// // // // // // // // //                   {item}
// // // // // // // // //                 </span>
// // // // // // // // //               </div>
// // // // // // // // //             ))}
// // // // // // // // //           </div>
// // // // // // // // //         </motion.div>

// // // // // // // // //         {/* Scroll Instruction */}
// // // // // // // // //         <motion.div
// // // // // // // // //           animate={{ y: [0, 8, 0] }}
// // // // // // // // //           transition={{ repeat: Infinity, duration: 1.5 }}
// // // // // // // // //           className="absolute bottom-10 text-white/40 text-xs text-center"
// // // // // // // // //         >
// // // // // // // // //           Scroll ↓
// // // // // // // // //         </motion.div>
// // // // // // // // //       </div>
// // // // // // // // //     </section>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // const Pentakuhl = () => {
// // // // // // // // //   const productSectionRef = useRef(null);
// // // // // // // // //   const [stage, setStage] = useState(0);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const handleScroll = () => {
// // // // // // // // //       if (productSectionRef.current) {
// // // // // // // // //         const rect = productSectionRef.current.getBoundingClientRect();
// // // // // // // // //         const windowHeight = window.innerHeight;
        
// // // // // // // // //         const scrollProgress = Math.max(0, Math.min(1, 
// // // // // // // // //           (windowHeight - rect.top) / (windowHeight * 2.5)
// // // // // // // // //         ));
        
// // // // // // // // //         if (scrollProgress < 0.08) {
// // // // // // // // //           setStage(0);
// // // // // // // // //         } else if (scrollProgress >= 0.08 && scrollProgress < 0.4) {
// // // // // // // // //           setStage(1);
// // // // // // // // //         } else if (scrollProgress >= 0.4) {
// // // // // // // // //           setStage(2);
// // // // // // // // //         }
// // // // // // // // //       }
// // // // // // // // //     };

// // // // // // // // //     window.addEventListener("scroll", handleScroll);
// // // // // // // // //     handleScroll();
    
// // // // // // // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // // // // // // //   }, []);

// // // // // // // // //   return (
// // // // // // // // //     <>
// // // // // // // // //       {/* Hero Section with Video Background */}
// // // // // // // // //       <section className="relative h-screen overflow-hidden">
// // // // // // // // //         <video
// // // // // // // // //           autoPlay
// // // // // // // // //           loop
// // // // // // // // //           muted
// // // // // // // // //           playsInline
// // // // // // // // //           className="absolute inset-0 w-full h-full object-cover"
// // // // // // // // //         >
// // // // // // // // //           <source src="/Industrial_Factory 1080P.mp4" type="video/mp4" />
// // // // // // // // //         </video>

// // // // // // // // //         <div className="absolute inset-0 bg-black/45 z-10" />
// // // // // // // // //         <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20 z-10" />

// // // // // // // // //         <div className="relative z-20 h-full flex items-center justify-center">
// // // // // // // // //           <div className="max-w-7xl mx-auto px-6 text-center">
// // // // // // // // //             <motion.div
// // // // // // // // //               initial={{ opacity: 0, y: 30 }}
// // // // // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // // // // //               transition={{ duration: 0.8 }}
// // // // // // // // //               className="inline-block bg-accent/20 text-accent text-sm font-medium px-6 py-2 rounded-full mb-6 backdrop-blur-sm"
// // // // // // // // //             >
// // // // // // // // //               AI-Powered Logistics
// // // // // // // // //             </motion.div>

// // // // // // // // //             <motion.h1
// // // // // // // // //               initial={{ opacity: 0, y: 80 }}
// // // // // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // // // // //               transition={{ duration: 1 }}
// // // // // // // // //               className="text-6xl md:text-7xl font-bold text-white leading-tight mb-8"
// // // // // // // // //             >
// // // // // // // // //               Meet <span className="text-accent">Pentakuhl</span>
// // // // // // // // //             </motion.h1>

// // // // // // // // //             <motion.p
// // // // // // // // //               initial={{ opacity: 0, y: 40 }}
// // // // // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // // // // //               transition={{ duration: 1, delay: 0.2 }}
// // // // // // // // //               className="text-2xl text-gray-200 max-w-3xl mx-auto"
// // // // // // // // //             >
// // // // // // // // //               Your intelligent logistics assistant. Instant quotes, smart routing, and predictive insights.
// // // // // // // // //             </motion.p>

// // // // // // // // //             <motion.div
// // // // // // // // //               initial={{ opacity: 0, y: 40 }}
// // // // // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // // // // //               transition={{ duration: 1, delay: 0.4 }}
// // // // // // // // //               className="mt-10"
// // // // // // // // //             >
// // // // // // // // //               <button className="bg-accent hover:bg-white hover:text-dark transition px-10 py-4 rounded-full text-lg font-semibold shadow-2xl">
// // // // // // // // //                 Try Pentakuhl AI →
// // // // // // // // //               </button>
// // // // // // // // //             </motion.div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>

// // // // // // // // //         <motion.div
// // // // // // // // //           initial={{ opacity: 0 }}
// // // // // // // // //           animate={{ opacity: 1 }}
// // // // // // // // //           transition={{ delay: 1.5, duration: 1 }}
// // // // // // // // //           className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
// // // // // // // // //         >
// // // // // // // // //           <div className="w-[35px] h-[60px] border-2 border-white/60 rounded-full flex justify-center p-2">
// // // // // // // // //             <motion.div
// // // // // // // // //               animate={{ y: [0, 18, 0] }}
// // // // // // // // //               transition={{ repeat: Infinity, duration: 1.5 }}
// // // // // // // // //               className="w-1.5 h-4 bg-white rounded-full"
// // // // // // // // //             />
// // // // // // // // //           </div>
// // // // // // // // //         </motion.div>
// // // // // // // // //       </section>

// // // // // // // // //       {/* About Penta KÜHL Section */}
// // // // // // // // //       <section className="py-20 bg-white">
// // // // // // // // //         <div className="max-w-7xl mx-auto px-6">
// // // // // // // // //           <div className="grid md:grid-cols-2 gap-16 items-center">
// // // // // // // // //             <motion.div
// // // // // // // // //               initial={{ opacity: 0, x: -50 }}
// // // // // // // // //               whileInView={{ opacity: 1, x: 0 }}
// // // // // // // // //               transition={{ duration: 0.8 }}
// // // // // // // // //               viewport={{ once: true }}
// // // // // // // // //             >
// // // // // // // // //               <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
// // // // // // // // //                 ABOUT <br />
// // // // // // // // //                 <span className="text-accent">PENTA KÜHL</span>
// // // // // // // // //               </h2>
// // // // // // // // //             </motion.div>

// // // // // // // // //             <motion.div
// // // // // // // // //               initial={{ opacity: 0, x: 50 }}
// // // // // // // // //               whileInView={{ opacity: 1, x: 0 }}
// // // // // // // // //               transition={{ duration: 0.8, delay: 0.2 }}
// // // // // // // // //               viewport={{ once: true }}
// // // // // // // // //               className="space-y-6"
// // // // // // // // //             >
// // // // // // // // //               <p className="text-gray-700 text-lg leading-relaxed">
// // // // // // // // //                 At <span className="font-semibold text-accent">Pentakuhl</span>, we specialize in providing durable, 
// // // // // // // // //                 effective packaging solutions that maintain temperature 
// // // // // // // // //                 <span className="font-semibold text-accent"> stability </span> 
// // // // // // // // //                 during transit, 
// // // // // // // // //                 <span className="font-semibold text-accent"> protecting </span> 
// // // // // // // // //                 your valuable products.
// // // // // // // // //               </p>
// // // // // // // // //               <p className="text-gray-700 text-lg leading-relaxed">
// // // // // // // // //                 Our innovative designs cater to various industries, including pharmaceuticals, 
// // // // // // // // //                 food, and biotechnology.
// // // // // // // // //               </p>
// // // // // // // // //               <div className="w-20 h-1 bg-accent rounded-full mt-6" />
// // // // // // // // //             </motion.div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </section>

// // // // // // // // //       {/* Authorized Distributors Section */}
// // // // // // // // //       <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
// // // // // // // // //         <div className="max-w-7xl mx-auto px-6">
// // // // // // // // //           <motion.div
// // // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // //             transition={{ duration: 0.6 }}
// // // // // // // // //             viewport={{ once: true }}
// // // // // // // // //             className="text-center mb-10"
// // // // // // // // //           >
// // // // // // // // //             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
// // // // // // // // //               PENTA FREIGHT
// // // // // // // // //             </h2>
// // // // // // // // //             <div className="w-24 h-1 bg-accent mx-auto mb-6" />
// // // // // // // // //           </motion.div>

// // // // // // // // //           <motion.div
// // // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // //             transition={{ duration: 0.6, delay: 0.2 }}
// // // // // // // // //             viewport={{ once: true }}
// // // // // // // // //             className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
// // // // // // // // //           >
// // // // // // // // //             <div className="grid md:grid-cols-2 gap-0">
// // // // // // // // //               <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-10 flex items-center justify-center">
// // // // // // // // //                 <div className="text-center">
// // // // // // // // //                   <div className="text-6xl mb-3">❄️</div>
// // // // // // // // //                   <div className="text-xl font-bold text-gray-800">Pelican BioThermal™</div>
// // // // // // // // //                   <div className="text-gray-500 text-sm mt-1">Trusted Partner</div>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //               <div className="p-10">
// // // // // // // // //                 <h3 className="text-2xl font-bold text-gray-900 mb-3">
// // // // // // // // //                   Authorized Distributors for 
// // // // // // // // //                   <span className="text-accent block mt-1">Pelican BioThermal™ Products</span>
// // // // // // // // //                 </h3>
// // // // // // // // //                 <p className="text-gray-600 text-base leading-relaxed mb-6">
// // // // // // // // //                   Penta Freight is proud to be an authorized distributor for Pelican BioThermal™, 
// // // // // // // // //                   offering world-class temperature-controlled packaging solutions.
// // // // // // // // //                 </p>
// // // // // // // // //                 <motion.button
// // // // // // // // //                   whileHover={{ x: 10 }}
// // // // // // // // //                   className="text-accent font-semibold text-base flex items-center gap-2 group"
// // // // // // // // //                 >
// // // // // // // // //                   Read more 
// // // // // // // // //                   <span className="text-accent group-hover:translate-x-2 transition-transform duration-300">→</span>
// // // // // // // // //                 </motion.button>
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           </motion.div>
// // // // // // // // //         </div>
// // // // // // // // //       </section>

// // // // // // // // //       {/* PRODUCT SOLUTIONS SECTION */}
// // // // // // // // //       <section 
// // // // // // // // //         ref={productSectionRef}
// // // // // // // // //         className="relative min-h-[180vh] bg-black overflow-hidden"
// // // // // // // // //       >
// // // // // // // // //         <div className="absolute inset-0 opacity-10">
// // // // // // // // //           <div className="w-full h-full bg-[radial-gradient(circle_at_center,#fff_1px,transparent_1px)] bg-[length:40px_40px]" />
// // // // // // // // //         </div>

// // // // // // // // //         <div className="sticky top-0 h-screen flex items-center justify-center">
          
// // // // // // // // //           <motion.div
// // // // // // // // //             animate={{ 
// // // // // // // // //               opacity: stage === 2 ? 0 : 1,
// // // // // // // // //               scale: stage === 2 ? 0.5 : 1,
// // // // // // // // //               y: stage === 2 ? -80 : 0
// // // // // // // // //             }}
// // // // // // // // //             transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
// // // // // // // // //             className="absolute z-20"
// // // // // // // // //           >
// // // // // // // // //             <h2 className="text-5xl md:text-7xl font-bold text-white text-center">
// // // // // // // // //               Product <span className="text-accent">Solutions</span>
// // // // // // // // //             </h2>
// // // // // // // // //             <motion.p
// // // // // // // // //               animate={{ opacity: stage === 2 ? 0 : 0.5 }}
// // // // // // // // //               transition={{ duration: 1.5 }}
// // // // // // // // //               className="text-gray-400 text-center mt-3 text-sm"
// // // // // // // // //             >
// // // // // // // // //               ↓ Scroll down ↓
// // // // // // // // //             </motion.p>
// // // // // // // // //           </motion.div>

// // // // // // // // //           <div className="absolute inset-0 flex items-center justify-center">
// // // // // // // // //             <div className="w-full max-w-6xl mx-auto px-6">
// // // // // // // // //               <div className="grid lg:grid-cols-2 gap-6">
                
// // // // // // // // //                 {/* LEFT CONTAINER */}
// // // // // // // // //                 <motion.div
// // // // // // // // //                   initial={{ x: "-150%", opacity: 0 }}
// // // // // // // // //                   animate={{ 
// // // // // // // // //                     x: stage >= 1 ? "0%" : "-150%",
// // // // // // // // //                     opacity: stage >= 1 ? 1 : 0
// // // // // // // // //                   }}
// // // // // // // // //                   transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
// // // // // // // // //                   className="bg-gray-900/90 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/10"
// // // // // // // // //                 >
// // // // // // // // //                   <motion.div
// // // // // // // // //                     animate={{ opacity: stage === 2 ? 1 : 0 }}
// // // // // // // // //                     transition={{ duration: 1, delay: 0.5 }}
// // // // // // // // //                   >
// // // // // // // // //                     <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
// // // // // // // // //                       Parcel <span className="text-accent">Shippers</span>
// // // // // // // // //                     </h3>
// // // // // // // // //                     <p className="text-gray-300 text-sm mb-6 leading-relaxed">
// // // // // // // // //                       We understand the unique challenges faced by parcel shippers and offer 
// // // // // // // // //                       tailored solutions for seamless shipping.
// // // // // // // // //                     </p>

// // // // // // // // //                     <div className="mb-6">
// // // // // // // // //                       <h4 className="text-base font-bold text-accent mb-3 flex items-center gap-2">
// // // // // // // // //                         <span className="text-xl">📦</span> Single Use
// // // // // // // // //                       </h4>
// // // // // // // // //                       <div className="space-y-2">
// // // // // // // // //                         {["COOLGUARD", "COOLGUARD RM", "COOLGUARD ADVANCE"].map((item, idx) => (
// // // // // // // // //                           <motion.div
// // // // // // // // //                             key={idx}
// // // // // // // // //                             initial={{ opacity: 0, x: -20 }}
// // // // // // // // //                             animate={{ opacity: stage === 2 ? 1 : 0, x: stage === 2 ? 0 : -20 }}
// // // // // // // // //                             transition={{ duration: 0.4, delay: 1.0 + idx * 0.1 }}
// // // // // // // // //                             className="flex items-center gap-3 p-2 bg-gray-800/50 rounded-lg hover:bg-accent/20 transition-all duration-300 cursor-pointer group"
// // // // // // // // //                           >
// // // // // // // // //                             <span className="text-xl group-hover:scale-110 transition-transform">📦</span>
// // // // // // // // //                             <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{item}</span>
// // // // // // // // //                           </motion.div>
// // // // // // // // //                         ))}
// // // // // // // // //                       </div>
// // // // // // // // //                     </div>

// // // // // // // // //                     <div>
// // // // // // // // //                       <h4 className="text-base font-bold text-accent mb-3 flex items-center gap-2">
// // // // // // // // //                         <span className="text-xl">🔄</span> Reusable
// // // // // // // // //                       </h4>
// // // // // // // // //                       <div className="space-y-2">
// // // // // // // // //                         {["Credo Cube"].map((item, idx) => (
// // // // // // // // //                           <motion.div
// // // // // // // // //                             key={idx}
// // // // // // // // //                             initial={{ opacity: 0, x: -20 }}
// // // // // // // // //                             animate={{ opacity: stage === 2 ? 1 : 0, x: stage === 2 ? 0 : -20 }}
// // // // // // // // //                             transition={{ duration: 0.4, delay: 1.5 }}
// // // // // // // // //                             className="flex items-center gap-3 p-2 bg-gray-800/50 rounded-lg hover:bg-accent/20 transition-all duration-300 cursor-pointer group"
// // // // // // // // //                           >
// // // // // // // // //                             <span className="text-xl group-hover:scale-110 transition-transform">🔄</span>
// // // // // // // // //                             <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{item}</span>
// // // // // // // // //                           </motion.div>
// // // // // // // // //                         ))}
// // // // // // // // //                       </div>
// // // // // // // // //                     </div>
// // // // // // // // //                   </motion.div>
// // // // // // // // //                 </motion.div>

// // // // // // // // //                 {/* RIGHT CONTAINER */}
// // // // // // // // //                 <motion.div
// // // // // // // // //                   initial={{ x: "150%", opacity: 0 }}
// // // // // // // // //                   animate={{ 
// // // // // // // // //                     x: stage >= 1 ? "0%" : "150%",
// // // // // // // // //                     opacity: stage >= 1 ? 1 : 0
// // // // // // // // //                   }}
// // // // // // // // //                   transition={{ duration: 1.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
// // // // // // // // //                   className="bg-gray-900/90 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/10"
// // // // // // // // //                 >
// // // // // // // // //                   <motion.div
// // // // // // // // //                     animate={{ opacity: stage === 2 ? 1 : 0 }}
// // // // // // // // //                     transition={{ duration: 1, delay: 0.6 }}
// // // // // // // // //                   >
// // // // // // // // //                     <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
// // // // // // // // //                       Pallet <span className="text-accent">Shippers</span>
// // // // // // // // //                     </h3>
// // // // // // // // //                     <p className="text-gray-300 text-sm mb-6 leading-relaxed">
// // // // // // // // //                       We provide tailored services for pallet shippers, ensuring your cargo arrives 
// // // // // // // // //                       safely and efficiently.
// // // // // // // // //                     </p>

// // // // // // // // //                     <div className="mb-6">
// // // // // // // // //                       <h4 className="text-base font-bold text-accent mb-3 flex items-center gap-2">
// // // // // // // // //                         <span className="text-xl">📦</span> Single Use
// // // // // // // // //                       </h4>
// // // // // // // // //                       <div className="space-y-2">
// // // // // // // // //                         {["COOLPALL VERTOS", "COOLPALL VERTOS ADVANCE"].map((item, idx) => (
// // // // // // // // //                           <motion.div
// // // // // // // // //                             key={idx}
// // // // // // // // //                             initial={{ opacity: 0, x: 20 }}
// // // // // // // // //                             animate={{ opacity: stage === 2 ? 1 : 0, x: stage === 2 ? 0 : 20 }}
// // // // // // // // //                             transition={{ duration: 0.4, delay: 1.2 + idx * 0.1 }}
// // // // // // // // //                             className="flex items-center gap-3 p-2 bg-gray-800/50 rounded-lg hover:bg-accent/20 transition-all duration-300 cursor-pointer group"
// // // // // // // // //                           >
// // // // // // // // //                             <span className="text-xl group-hover:scale-110 transition-transform">📦</span>
// // // // // // // // //                             <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{item}</span>
// // // // // // // // //                           </motion.div>
// // // // // // // // //                         ))}
// // // // // // // // //                       </div>
// // // // // // // // //                     </div>

// // // // // // // // //                     <div>
// // // // // // // // //                       <h4 className="text-base font-bold text-accent mb-3 flex items-center gap-2">
// // // // // // // // //                         <span className="text-xl">🔄</span> Reusable
// // // // // // // // //                       </h4>
// // // // // // // // //                       <div className="space-y-2">
// // // // // // // // //                         {["Credo XTEND", "CREDO CARGO"].map((item, idx) => (
// // // // // // // // //                           <motion.div
// // // // // // // // //                             key={idx}
// // // // // // // // //                             initial={{ opacity: 0, x: 20 }}
// // // // // // // // //                             animate={{ opacity: stage === 2 ? 1 : 0, x: stage === 2 ? 0 : 20 }}
// // // // // // // // //                             transition={{ duration: 0.4, delay: 1.8 + idx * 0.1 }}
// // // // // // // // //                             className="flex items-center gap-3 p-2 bg-gray-800/50 rounded-lg hover:bg-accent/20 transition-all duration-300 cursor-pointer group"
// // // // // // // // //                           >
// // // // // // // // //                             <span className="text-xl group-hover:scale-110 transition-transform">🔄</span>
// // // // // // // // //                             <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{item}</span>
// // // // // // // // //                           </motion.div>
// // // // // // // // //                         ))}
// // // // // // // // //                       </div>
// // // // // // // // //                     </div>
// // // // // // // // //                   </motion.div>
// // // // // // // // //                 </motion.div>
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </section>

// // // // // // // // //       {/* HORIZONTAL SCROLL BANDS SECTION - Directly after Product Solutions */}
// // // // // // // // //       <HorizontalScrollSection />

// // // // // // // // //       {/* FAQ Section Header */}
// // // // // // // // //       <section className="py-12 bg-gray-50">
// // // // // // // // //         <div className="max-w-4xl mx-auto text-center px-6">
// // // // // // // // //           <motion.div
// // // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // //             transition={{ duration: 0.6 }}
// // // // // // // // //             viewport={{ once: true }}
// // // // // // // // //           >
// // // // // // // // //             <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
// // // // // // // // //               Explore our frequently asked questions to gain clarity about 
// // // // // // // // //               <span className="text-accent"> Penta Kuhl's</span> services and features
// // // // // // // // //             </h2>
// // // // // // // // //           </motion.div>
// // // // // // // // //         </div>
// // // // // // // // //       </section>

// // // // // // // // //       {/* Features Section */}
// // // // // // // // //       <section className="py-16 bg-white">
// // // // // // // // //         <div className="max-w-7xl mx-auto px-6">
// // // // // // // // //           <motion.div
// // // // // // // // //             initial={{ opacity: 0, y: 50 }}
// // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // //             transition={{ duration: 0.8 }}
// // // // // // // // //             viewport={{ once: true }}
// // // // // // // // //             className="text-center mb-12"
// // // // // // // // //           >
// // // // // // // // //             <h2 className="text-3xl md:text-4xl font-bold heading-font mb-3">Why Pentakuhl?</h2>
// // // // // // // // //             <p className="text-gray-600 text-base max-w-xl mx-auto">
// // // // // // // // //               Revolutionizing logistics with artificial intelligence
// // // // // // // // //             </p>
// // // // // // // // //           </motion.div>

// // // // // // // // //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // // // // //             {[
// // // // // // // // //               {
// // // // // // // // //                 title: "Instant Quote Engine",
// // // // // // // // //                 desc: "Get accurate freight quotes in under 10 seconds",
// // // // // // // // //                 icon: "⚡"
// // // // // // // // //               },
// // // // // // // // //               {
// // // // // // // // //                 title: "Smart Route Optimizer",
// // // // // // // // //                 desc: "AI suggests the fastest and most cost-effective routes",
// // // // // // // // //                 icon: "🧠"
// // // // // // // // //               },
// // // // // // // // //               {
// // // // // // // // //                 title: "Predictive ETA",
// // // // // // // // //                 desc: "Real-time tracking with 98% accurate arrival predictions",
// // // // // // // // //                 icon: "📍"
// // // // // // // // //               },
// // // // // // // // //               {
// // // // // // // // //                 title: "Document Intelligence",
// // // // // // // // //                 desc: "Auto-extracts data from bills of lading and invoices",
// // // // // // // // //                 icon: "📄"
// // // // // // // // //               },
// // // // // // // // //               {
// // // // // // // // //                 title: "Risk Analyzer",
// // // // // // // // //                 desc: "Predicts delays due to weather, port congestion, etc.",
// // // // // // // // //                 icon: "🌧️"
// // // // // // // // //               },
// // // // // // // // //               {
// // // // // // // // //                 title: "Carbon Calculator",
// // // // // // // // //                 desc: "Track and reduce your shipping carbon footprint",
// // // // // // // // //                 icon: "🌍"
// // // // // // // // //               },
// // // // // // // // //             ].map((feature, i) => (
// // // // // // // // //               <motion.div
// // // // // // // // //                 key={i}
// // // // // // // // //                 initial={{ opacity: 0, y: 50 }}
// // // // // // // // //                 whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // //                 transition={{ duration: 0.5, delay: i * 0.1 }}
// // // // // // // // //                 viewport={{ once: true }}
// // // // // // // // //                 whileHover={{ y: -5 }}
// // // // // // // // //                 className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:shadow-lg transition hover:border-accent group cursor-pointer"
// // // // // // // // //               >
// // // // // // // // //                 <div className="text-4xl mb-4 group-hover:scale-110 transition">{feature.icon}</div>
// // // // // // // // //                 <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
// // // // // // // // //                 <p className="text-gray-600 text-sm">{feature.desc}</p>
// // // // // // // // //               </motion.div>
// // // // // // // // //             ))}
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </section>

// // // // // // // // //       {/* Demo / CTA Section */}
// // // // // // // // //       <section className="py-20 bg-gradient-to-br from-gray-900 to-primary text-white relative overflow-hidden">
// // // // // // // // //         <div className="absolute inset-0 opacity-10">
// // // // // // // // //           <div className="w-full h-full bg-[radial-gradient(circle_at_center,#fff_1px,transparent_1px)] bg-[length:40px_40px]" />
// // // // // // // // //         </div>
        
// // // // // // // // //         <div className="max-w-3xl mx-auto text-center px-6 relative z-10">
// // // // // // // // //           <motion.h2
// // // // // // // // //             initial={{ opacity: 0, y: 50 }}
// // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // //             transition={{ duration: 0.8 }}
// // // // // // // // //             viewport={{ once: true }}
// // // // // // // // //             className="text-4xl md:text-5xl font-bold heading-font mb-6"
// // // // // // // // //           >
// // // // // // // // //             Experience Pentakuhl Now
// // // // // // // // //           </motion.h2>
          
// // // // // // // // //           <motion.p
// // // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // //             transition={{ duration: 0.8, delay: 0.2 }}
// // // // // // // // //             viewport={{ once: true }}
// // // // // // // // //             className="text-lg text-gray-300 mb-8"
// // // // // // // // //           >
// // // // // // // // //             Try our AI logistics assistant and get a free quote in seconds
// // // // // // // // //           </motion.p>

// // // // // // // // //           <motion.div
// // // // // // // // //             initial={{ opacity: 0, scale: 0.9 }}
// // // // // // // // //             whileInView={{ opacity: 1, scale: 1 }}
// // // // // // // // //             transition={{ duration: 0.6, delay: 0.4 }}
// // // // // // // // //             viewport={{ once: true }}
// // // // // // // // //             className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 max-w-xl mx-auto"
// // // // // // // // //           >
// // // // // // // // //             <div className="mb-6">
// // // // // // // // //               <input 
// // // // // // // // //                 type="text" 
// // // // // // // // //                 placeholder="What are you shipping? (e.g. 5 tons electronics from Mumbai to Dubai)"
// // // // // // // // //                 className="w-full bg-white/10 border border-white/30 rounded-xl px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 transition text-sm"
// // // // // // // // //               />
// // // // // // // // //             </div>
// // // // // // // // //             <motion.button 
// // // // // // // // //               whileHover={{ scale: 1.02 }}
// // // // // // // // //               whileTap={{ scale: 0.98 }}
// // // // // // // // //               className="w-full bg-accent hover:bg-white hover:text-dark transition py-4 text-lg font-semibold rounded-xl"
// // // // // // // // //             >
// // // // // // // // //               Get AI Quote Now →
// // // // // // // // //             </motion.button>
// // // // // // // // //           </motion.div>
// // // // // // // // //         </div>
// // // // // // // // //       </section>

// // // // // // // // //       {/* Final CTA */}
// // // // // // // // //       <section className="py-16 bg-white text-center">
// // // // // // // // //         <div className="max-w-2xl mx-auto px-6">
// // // // // // // // //           <motion.h3
// // // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // //             transition={{ duration: 0.6 }}
// // // // // // // // //             viewport={{ once: true }}
// // // // // // // // //             className="text-2xl md:text-3xl font-semibold mb-4"
// // // // // // // // //           >
// // // // // // // // //             Ready to transform your logistics?
// // // // // // // // //           </motion.h3>
          
// // // // // // // // //           <motion.p
// // // // // // // // //             initial={{ opacity: 0, y: 20 }}
// // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // //             transition={{ duration: 0.6, delay: 0.2 }}
// // // // // // // // //             viewport={{ once: true }}
// // // // // // // // //             className="text-gray-600 mb-8"
// // // // // // // // //           >
// // // // // // // // //             Join hundreds of companies already using Pentakuhl AI
// // // // // // // // //           </motion.p>
          
// // // // // // // // //           <motion.button
// // // // // // // // //             initial={{ opacity: 0, y: 20 }}
// // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // //             transition={{ duration: 0.6, delay: 0.4 }}
// // // // // // // // //             viewport={{ once: true }}
// // // // // // // // //             whileHover={{ scale: 1.05 }}
// // // // // // // // //             whileTap={{ scale: 0.95 }}
// // // // // // // // //             className="bg-primary text-white px-10 py-4 rounded-full text-base font-medium hover:bg-dark transition shadow-lg"
// // // // // // // // //           >
// // // // // // // // //             Start Free Trial
// // // // // // // // //           </motion.button>
// // // // // // // // //         </div>
// // // // // // // // //       </section>
// // // // // // // // //     </>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Pentakuhl;













// // // // // // // // import { motion } from "framer-motion";
// // // // // // // // import { useRef, useState, useEffect } from "react";
// // // // // // // // import { useScroll, useTransform } from "framer-motion";

// // // // // // // // // Horizontal Scroll Band Component
// // // // // // // // const HorizontalScrollSection = () => {
// // // // // // // //   const containerRef = useRef(null);
// // // // // // // //   const { scrollYProgress } = useScroll({
// // // // // // // //     target: containerRef,
// // // // // // // //     offset: ["start end", "end start"],
// // // // // // // //   });

// // // // // // // //   const upperBandX = useTransform(scrollYProgress, [0, 1], [0, -500]);
// // // // // // // //   const lowerBandX = useTransform(scrollYProgress, [0, 1], [0, 500]);

// // // // // // // //   const menuItems = [
// // // // // // // //     "Robust Load Security",
// // // // // // // //     "Expert Logistics Support",
// // // // // // // //     "Tailored Freight Solutions",
// // // // // // // //     "Flexible Shipping Schedules",
// // // // // // // //     "Volume Discounts",
// // // // // // // //     "End-to-End Supply Chain Management",
// // // // // // // //   ];

// // // // // // // //   return (
// // // // // // // //     <section 
// // // // // // // //       ref={containerRef}
// // // // // // // //       className="relative min-h-[100vh] bg-gradient-to-b from-gray-900 to-black overflow-hidden"
// // // // // // // //     >
// // // // // // // //       <div className="absolute inset-0 opacity-5">
// // // // // // // //         <div className="w-full h-full bg-[radial-gradient(circle_at_center,#fff_1px,transparent_1px)] bg-[length:40px_40px]" />
// // // // // // // //       </div>

// // // // // // // //       <div className="sticky top-0 h-screen flex flex-col items-center justify-center gap-4 px-4">
        
// // // // // // // //         <motion.div
// // // // // // // //           initial={{ opacity: 0, y: 20 }}
// // // // // // // //           animate={{ opacity: 1, y: 0 }}
// // // // // // // //           transition={{ duration: 0.6 }}
// // // // // // // //           className="text-center"
// // // // // // // //         >
// // // // // // // //           <span className="text-accent text-xs font-semibold tracking-wider px-3 py-1 bg-accent/10 rounded-full">
// // // // // // // //             MENU
// // // // // // // //           </span>
// // // // // // // //         </motion.div>

// // // // // // // //         <motion.div
// // // // // // // //           style={{ x: upperBandX }}
// // // // // // // //           className="w-full overflow-hidden py-3"
// // // // // // // //         >
// // // // // // // //           <div className="flex gap-3 whitespace-nowrap">
// // // // // // // //             {menuItems.map((item, idx) => (
// // // // // // // //               <div
// // // // // // // //                 key={idx}
// // // // // // // //                 className="inline-flex items-center gap-2 bg-gray-800/90 backdrop-blur-md rounded-full px-5 py-2.5 shadow-lg border border-white/10 hover:border-accent/50 transition-all duration-300 cursor-pointer group"
// // // // // // // //               >
// // // // // // // //                 <span className="w-1.5 h-1.5 bg-accent rounded-full group-hover:scale-150 transition-transform" />
// // // // // // // //                 <span className="text-white text-sm group-hover:text-accent transition-colors">
// // // // // // // //                   {item}
// // // // // // // //                 </span>
// // // // // // // //               </div>
// // // // // // // //             ))}
// // // // // // // //           </div>
// // // // // // // //         </motion.div>

// // // // // // // //         <motion.div
// // // // // // // //           style={{ x: lowerBandX }}
// // // // // // // //           className="w-full overflow-hidden py-3"
// // // // // // // //         >
// // // // // // // //           <div className="flex gap-3 whitespace-nowrap">
// // // // // // // //             {[...menuItems].reverse().map((item, idx) => (
// // // // // // // //               <div
// // // // // // // //                 key={idx}
// // // // // // // //                 className="inline-flex items-center gap-2 bg-gray-800/90 backdrop-blur-md rounded-full px-5 py-2.5 shadow-lg border border-white/10 hover:border-accent/50 transition-all duration-300 cursor-pointer group"
// // // // // // // //               >
// // // // // // // //                 <span className="w-1.5 h-1.5 bg-accent rounded-full group-hover:scale-150 transition-transform" />
// // // // // // // //                 <span className="text-white text-sm group-hover:text-accent transition-colors">
// // // // // // // //                   {item}
// // // // // // // //                 </span>
// // // // // // // //               </div>
// // // // // // // //             ))}
// // // // // // // //           </div>
// // // // // // // //         </motion.div>

// // // // // // // //         <motion.div
// // // // // // // //           animate={{ y: [0, 8, 0] }}
// // // // // // // //           transition={{ repeat: Infinity, duration: 1.5 }}
// // // // // // // //           className="absolute bottom-8 text-white/30 text-xs text-center"
// // // // // // // //         >
// // // // // // // //           Scroll ↓
// // // // // // // //         </motion.div>
// // // // // // // //       </div>
// // // // // // // //     </section>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // const Pentakuhl = () => {
// // // // // // // //   return (
// // // // // // // //     <>
// // // // // // // //       {/* Hero Section */}
// // // // // // // //       <section className="relative h-screen overflow-hidden">
// // // // // // // //         <video
// // // // // // // //           autoPlay
// // // // // // // //           loop
// // // // // // // //           muted
// // // // // // // //           playsInline
// // // // // // // //           className="absolute inset-0 w-full h-full object-cover"
// // // // // // // //         >
// // // // // // // //           <source src="/Industrial_Factory 1080P.mp4" type="video/mp4" />
// // // // // // // //         </video>

// // // // // // // //         <div className="absolute inset-0 bg-black/45 z-10" />
// // // // // // // //         <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20 z-10" />

// // // // // // // //         <div className="relative z-20 h-full flex items-center justify-center">
// // // // // // // //           <div className="max-w-7xl mx-auto px-6 text-center">
// // // // // // // //             <motion.div
// // // // // // // //               initial={{ opacity: 0, y: 30 }}
// // // // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // // // //               transition={{ duration: 0.8 }}
// // // // // // // //               className="inline-block bg-accent/20 text-accent text-sm font-medium px-6 py-2 rounded-full mb-6 backdrop-blur-sm"
// // // // // // // //             >
// // // // // // // //               AI-Powered Logistics
// // // // // // // //             </motion.div>

// // // // // // // //             <motion.h1
// // // // // // // //               initial={{ opacity: 0, y: 80 }}
// // // // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // // // //               transition={{ duration: 1 }}
// // // // // // // //               className="text-6xl md:text-7xl font-bold text-white leading-tight mb-8"
// // // // // // // //             >
// // // // // // // //               Meet <span className="text-accent">Pentakuhl</span>
// // // // // // // //             </motion.h1>

// // // // // // // //             <motion.p
// // // // // // // //               initial={{ opacity: 0, y: 40 }}
// // // // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // // // //               transition={{ duration: 1, delay: 0.2 }}
// // // // // // // //               className="text-2xl text-gray-200 max-w-3xl mx-auto"
// // // // // // // //             >
// // // // // // // //               Your intelligent logistics assistant. Instant quotes, smart routing, and predictive insights.
// // // // // // // //             </motion.p>

// // // // // // // //             <motion.div
// // // // // // // //               initial={{ opacity: 0, y: 40 }}
// // // // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // // // //               transition={{ duration: 1, delay: 0.4 }}
// // // // // // // //               className="mt-10"
// // // // // // // //             >
// // // // // // // //               <button className="bg-accent hover:bg-white hover:text-dark transition px-10 py-4 rounded-full text-lg font-semibold shadow-2xl">
// // // // // // // //                 Try Pentakuhl AI →
// // // // // // // //               </button>
// // // // // // // //             </motion.div>
// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //         <motion.div
// // // // // // // //           initial={{ opacity: 0 }}
// // // // // // // //           animate={{ opacity: 1 }}
// // // // // // // //           transition={{ delay: 1.5, duration: 1 }}
// // // // // // // //           className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
// // // // // // // //         >
// // // // // // // //           <div className="w-[35px] h-[60px] border-2 border-white/60 rounded-full flex justify-center p-2">
// // // // // // // //             <motion.div
// // // // // // // //               animate={{ y: [0, 18, 0] }}
// // // // // // // //               transition={{ repeat: Infinity, duration: 1.5 }}
// // // // // // // //               className="w-1.5 h-4 bg-white rounded-full"
// // // // // // // //             />
// // // // // // // //           </div>
// // // // // // // //         </motion.div>
// // // // // // // //       </section>

// // // // // // // //       {/* About Penta KÜHL Section */}
// // // // // // // //       <section className="py-16 bg-white">
// // // // // // // //         <div className="max-w-7xl mx-auto px-6">
// // // // // // // //           <div className="grid md:grid-cols-2 gap-12 items-center">
// // // // // // // //             <motion.div
// // // // // // // //               initial={{ opacity: 0, x: -50 }}
// // // // // // // //               whileInView={{ opacity: 1, x: 0 }}
// // // // // // // //               transition={{ duration: 0.8 }}
// // // // // // // //               viewport={{ once: true }}
// // // // // // // //             >
// // // // // // // //               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
// // // // // // // //                 ABOUT <br />
// // // // // // // //                 <span className="text-accent">PENTA KÜHL</span>
// // // // // // // //               </h2>
// // // // // // // //             </motion.div>

// // // // // // // //             <motion.div
// // // // // // // //               initial={{ opacity: 0, x: 50 }}
// // // // // // // //               whileInView={{ opacity: 1, x: 0 }}
// // // // // // // //               transition={{ duration: 0.8, delay: 0.2 }}
// // // // // // // //               viewport={{ once: true }}
// // // // // // // //               className="space-y-4"
// // // // // // // //             >
// // // // // // // //               <p className="text-gray-700 text-base leading-relaxed">
// // // // // // // //                 At <span className="font-semibold text-accent">Pentakuhl</span>, we specialize in providing durable, 
// // // // // // // //                 effective packaging solutions that maintain temperature 
// // // // // // // //                 <span className="font-semibold text-accent"> stability </span> 
// // // // // // // //                 during transit, 
// // // // // // // //                 <span className="font-semibold text-accent"> protecting </span> 
// // // // // // // //                 your valuable products.
// // // // // // // //               </p>
// // // // // // // //               <p className="text-gray-700 text-base leading-relaxed">
// // // // // // // //                 Our innovative designs cater to various industries, including pharmaceuticals, 
// // // // // // // //                 food, and biotechnology.
// // // // // // // //               </p>
// // // // // // // //               <div className="w-16 h-1 bg-accent rounded-full mt-4" />
// // // // // // // //             </motion.div>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </section>

// // // // // // // //       {/* Authorized Distributors Section */}
// // // // // // // //       <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
// // // // // // // //         <div className="max-w-7xl mx-auto px-6">
// // // // // // // //           <motion.div
// // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // //             transition={{ duration: 0.6 }}
// // // // // // // //             viewport={{ once: true }}
// // // // // // // //             className="text-center mb-8"
// // // // // // // //           >
// // // // // // // //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
// // // // // // // //               PENTA FREIGHT
// // // // // // // //             </h2>
// // // // // // // //             <div className="w-20 h-1 bg-accent mx-auto" />
// // // // // // // //           </motion.div>

// // // // // // // //           <motion.div
// // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // //             transition={{ duration: 0.6, delay: 0.2 }}
// // // // // // // //             viewport={{ once: true }}
// // // // // // // //             className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
// // // // // // // //           >
// // // // // // // //             <div className="grid md:grid-cols-2 gap-0">
// // // // // // // //               <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-8 flex items-center justify-center">
// // // // // // // //                 <div className="text-center">
// // // // // // // //                   <div className="text-5xl mb-2">❄️</div>
// // // // // // // //                   <div className="text-lg font-bold text-gray-800">Pelican BioThermal™</div>
// // // // // // // //                   <div className="text-gray-500 text-xs mt-1">Trusted Partner</div>
// // // // // // // //                 </div>
// // // // // // // //               </div>
// // // // // // // //               <div className="p-8">
// // // // // // // //                 <h3 className="text-xl font-bold text-gray-900 mb-2">
// // // // // // // //                   Authorized Distributors for 
// // // // // // // //                   <span className="text-accent block mt-1">Pelican BioThermal™ Products</span>
// // // // // // // //                 </h3>
// // // // // // // //                 <p className="text-gray-600 text-sm leading-relaxed mb-4">
// // // // // // // //                   Penta Freight is proud to be an authorized distributor for Pelican BioThermal™, 
// // // // // // // //                   offering world-class temperature-controlled packaging solutions.
// // // // // // // //                 </p>
// // // // // // // //                 <motion.button
// // // // // // // //                   whileHover={{ x: 8 }}
// // // // // // // //                   className="text-accent font-semibold text-sm flex items-center gap-2 group"
// // // // // // // //                 >
// // // // // // // //                   Read more 
// // // // // // // //                   <span className="text-accent group-hover:translate-x-1 transition-transform duration-300">→</span>
// // // // // // // //                 </motion.button>
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </motion.div>
// // // // // // // //         </div>
// // // // // // // //       </section>

// // // // // // // //       {/* PRODUCT SOLUTIONS SECTION */}
// // // // // // // //       <section className="py-16 bg-black overflow-hidden">
// // // // // // // //         <div className="absolute inset-0 opacity-10 pointer-events-none">
// // // // // // // //           <div className="w-full h-full bg-[radial-gradient(circle_at_center,#fff_1px,transparent_1px)] bg-[length:40px_40px]" />
// // // // // // // //         </div>

// // // // // // // //         <div className="max-w-7xl mx-auto px-6">
// // // // // // // //           <motion.div
// // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // //             transition={{ duration: 0.8 }}
// // // // // // // //             viewport={{ once: true }}
// // // // // // // //             className="text-center mb-12"
// // // // // // // //           >
// // // // // // // //             <h2 className="text-4xl md:text-5xl font-bold text-white">
// // // // // // // //               Product <span className="text-accent">Solutions</span>
// // // // // // // //             </h2>
// // // // // // // //           </motion.div>

// // // // // // // //           <div className="grid lg:grid-cols-2 gap-8">
            
// // // // // // // //             {/* LEFT CONTAINER */}
// // // // // // // //             <motion.div
// // // // // // // //               initial={{ opacity: 0, x: -50 }}
// // // // // // // //               whileInView={{ opacity: 1, x: 0 }}
// // // // // // // //               transition={{ duration: 0.6, delay: 0.2 }}
// // // // // // // //               viewport={{ once: true }}
// // // // // // // //               className="bg-gray-900/90 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/10"
// // // // // // // //             >
// // // // // // // //               <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
// // // // // // // //                 Parcel <span className="text-accent">Shippers</span>
// // // // // // // //               </h3>
// // // // // // // //               <p className="text-gray-300 text-sm mb-6 leading-relaxed">
// // // // // // // //                 We understand the unique challenges faced by parcel shippers and offer 
// // // // // // // //                 tailored solutions for seamless shipping.
// // // // // // // //               </p>

// // // // // // // //               <div className="mb-6">
// // // // // // // //                 <h4 className="text-base font-bold text-accent mb-3 flex items-center gap-2">
// // // // // // // //                   <span className="text-xl">📦</span> Single Use
// // // // // // // //                 </h4>
// // // // // // // //                 <div className="space-y-2">
// // // // // // // //                   {["COOLGUARD", "COOLGUARD RM", "COOLGUARD ADVANCE"].map((item, idx) => (
// // // // // // // //                     <motion.div
// // // // // // // //                       key={idx}
// // // // // // // //                       initial={{ opacity: 0, x: -20 }}
// // // // // // // //                       whileInView={{ opacity: 1, x: 0 }}
// // // // // // // //                       transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
// // // // // // // //                       viewport={{ once: true }}
// // // // // // // //                       className="flex items-center gap-3 p-2.5 bg-gray-800/50 rounded-lg hover:bg-accent/20 transition-all duration-300 cursor-pointer group"
// // // // // // // //                     >
// // // // // // // //                       <span className="text-xl group-hover:scale-110 transition-transform">📦</span>
// // // // // // // //                       <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{item}</span>
// // // // // // // //                     </motion.div>
// // // // // // // //                   ))}
// // // // // // // //                 </div>
// // // // // // // //               </div>

// // // // // // // //               <div>
// // // // // // // //                 <h4 className="text-base font-bold text-accent mb-3 flex items-center gap-2">
// // // // // // // //                   <span className="text-xl">🔄</span> Reusable
// // // // // // // //                 </h4>
// // // // // // // //                 <div className="space-y-2">
// // // // // // // //                   {["Credo Cube"].map((item, idx) => (
// // // // // // // //                     <motion.div
// // // // // // // //                       key={idx}
// // // // // // // //                       initial={{ opacity: 0, x: -20 }}
// // // // // // // //                       whileInView={{ opacity: 1, x: 0 }}
// // // // // // // //                       transition={{ duration: 0.4, delay: 0.7 }}
// // // // // // // //                       viewport={{ once: true }}
// // // // // // // //                       className="flex items-center gap-3 p-2.5 bg-gray-800/50 rounded-lg hover:bg-accent/20 transition-all duration-300 cursor-pointer group"
// // // // // // // //                     >
// // // // // // // //                       <span className="text-xl group-hover:scale-110 transition-transform">🔄</span>
// // // // // // // //                       <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{item}</span>
// // // // // // // //                     </motion.div>
// // // // // // // //                   ))}
// // // // // // // //                 </div>
// // // // // // // //               </div>
// // // // // // // //             </motion.div>

// // // // // // // //             {/* RIGHT CONTAINER */}
// // // // // // // //             <motion.div
// // // // // // // //               initial={{ opacity: 0, x: 50 }}
// // // // // // // //               whileInView={{ opacity: 1, x: 0 }}
// // // // // // // //               transition={{ duration: 0.6, delay: 0.3 }}
// // // // // // // //               viewport={{ once: true }}
// // // // // // // //               className="bg-gray-900/90 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/10"
// // // // // // // //             >
// // // // // // // //               <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
// // // // // // // //                 Pallet <span className="text-accent">Shippers</span>
// // // // // // // //               </h3>
// // // // // // // //               <p className="text-gray-300 text-sm mb-6 leading-relaxed">
// // // // // // // //                 We provide tailored services for pallet shippers, ensuring your cargo arrives 
// // // // // // // //                 safely and efficiently.
// // // // // // // //               </p>

// // // // // // // //               <div className="mb-6">
// // // // // // // //                 <h4 className="text-base font-bold text-accent mb-3 flex items-center gap-2">
// // // // // // // //                   <span className="text-xl">📦</span> Single Use
// // // // // // // //                 </h4>
// // // // // // // //                 <div className="space-y-2">
// // // // // // // //                   {["COOLPALL VERTOS", "COOLPALL VERTOS ADVANCE"].map((item, idx) => (
// // // // // // // //                     <motion.div
// // // // // // // //                       key={idx}
// // // // // // // //                       initial={{ opacity: 0, x: 20 }}
// // // // // // // //                       whileInView={{ opacity: 1, x: 0 }}
// // // // // // // //                       transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
// // // // // // // //                       viewport={{ once: true }}
// // // // // // // //                       className="flex items-center gap-3 p-2.5 bg-gray-800/50 rounded-lg hover:bg-accent/20 transition-all duration-300 cursor-pointer group"
// // // // // // // //                     >
// // // // // // // //                       <span className="text-xl group-hover:scale-110 transition-transform">📦</span>
// // // // // // // //                       <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{item}</span>
// // // // // // // //                     </motion.div>
// // // // // // // //                   ))}
// // // // // // // //                 </div>
// // // // // // // //               </div>

// // // // // // // //               <div>
// // // // // // // //                 <h4 className="text-base font-bold text-accent mb-3 flex items-center gap-2">
// // // // // // // //                   <span className="text-xl">🔄</span> Reusable
// // // // // // // //                 </h4>
// // // // // // // //                 <div className="space-y-2">
// // // // // // // //                   {["Credo XTEND", "CREDO CARGO"].map((item, idx) => (
// // // // // // // //                     <motion.div
// // // // // // // //                       key={idx}
// // // // // // // //                       initial={{ opacity: 0, x: 20 }}
// // // // // // // //                       whileInView={{ opacity: 1, x: 0 }}
// // // // // // // //                       transition={{ duration: 0.4, delay: 0.8 + idx * 0.1 }}
// // // // // // // //                       viewport={{ once: true }}
// // // // // // // //                       className="flex items-center gap-3 p-2.5 bg-gray-800/50 rounded-lg hover:bg-accent/20 transition-all duration-300 cursor-pointer group"
// // // // // // // //                     >
// // // // // // // //                       <span className="text-xl group-hover:scale-110 transition-transform">🔄</span>
// // // // // // // //                       <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{item}</span>
// // // // // // // //                     </motion.div>
// // // // // // // //                   ))}
// // // // // // // //                 </div>
// // // // // // // //               </div>
// // // // // // // //             </motion.div>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </section>

// // // // // // // //       {/* SERIES GUIDE SECTION - NEW SECTION (This was missing) */}
// // // // // // // //       <section className="py-16 bg-white">
// // // // // // // //         <div className="max-w-7xl mx-auto px-6">
// // // // // // // //           <motion.div
// // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // //             transition={{ duration: 0.8 }}
// // // // // // // //             viewport={{ once: true }}
// // // // // // // //             className="text-center mb-10"
// // // // // // // //           >
// // // // // // // //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
// // // // // // // //               Series Guide
// // // // // // // //             </h2>
// // // // // // // //             <p className="text-gray-600 text-base max-w-3xl mx-auto leading-relaxed">
// // // // // // // //               This guide outlines temperature-controlled packaging solutions designed for the safe transport 
// // // // // // // //               and storage of sensitive products, like vaccines and biologics, across various thermal conditions, 
// // // // // // // //               from refrigerated to deep-freeze.
// // // // // // // //             </p>
// // // // // // // //           </motion.div>

// // // // // // // //           <motion.div
// // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // //             transition={{ duration: 0.6, delay: 0.2 }}
// // // // // // // //             viewport={{ once: true }}
// // // // // // // //             className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-3xl mx-auto"
// // // // // // // //           >
// // // // // // // //             <div className="flex items-center gap-4 mb-6">
// // // // // // // //               <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
// // // // // // // //                 <span className="text-2xl">🌡️</span>
// // // // // // // //               </div>
// // // // // // // //               <h3 className="text-2xl font-bold text-gray-800">SERIES 4</h3>
// // // // // // // //             </div>
            
// // // // // // // //             <div className="space-y-4">
// // // // // // // //               <div>
// // // // // // // //                 <h4 className="text-sm font-semibold text-accent uppercase tracking-wide">Temperature Range:</h4>
// // // // // // // //                 <p className="text-gray-700 text-base">15°C - 25°C</p>
// // // // // // // //               </div>
              
// // // // // // // //               <div>
// // // // // // // //                 <h4 className="text-sm font-semibold text-accent uppercase tracking-wide">Usage & Applications:</h4>
// // // // // // // //                 <p className="text-gray-700 text-base">Covers a controlled room temperature range.</p>
// // // // // // // //               </div>
              
// // // // // // // //               <div>
// // // // // // // //                 <h4 className="text-sm font-semibold text-accent uppercase tracking-wide">Ideal For:</h4>
// // // // // // // //                 <p className="text-gray-700 text-base">Suitable for products that need to remain stable at standard room temperature, including certain medicines and cosmetics.</p>
// // // // // // // //               </div>
// // // // // // // //             </div>

// // // // // // // //             {/* Decorative elements */}
// // // // // // // //             <div className="mt-6 pt-4 border-t border-gray-200">
// // // // // // // //               <div className="flex gap-2">
// // // // // // // //                 <div className="w-2 h-2 bg-accent rounded-full" />
// // // // // // // //                 <div className="w-2 h-2 bg-accent/50 rounded-full" />
// // // // // // // //                 <div className="w-2 h-2 bg-accent/25 rounded-full" />
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </motion.div>
// // // // // // // //         </div>
// // // // // // // //       </section>

// // // // // // // //       {/* HORIZONTAL SCROLL BANDS SECTION */}
// // // // // // // //       <HorizontalScrollSection />

// // // // // // // //       {/* FAQ Section Header */}
// // // // // // // //       <section className="py-10 bg-gray-50">
// // // // // // // //         <div className="max-w-4xl mx-auto text-center px-6">
// // // // // // // //           <motion.div
// // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // //             transition={{ duration: 0.6 }}
// // // // // // // //             viewport={{ once: true }}
// // // // // // // //           >
// // // // // // // //             <h2 className="text-xl md:text-2xl font-bold text-gray-900">
// // // // // // // //               Explore our frequently asked questions to gain clarity about 
// // // // // // // //               <span className="text-accent"> Penta Kuhl's</span> services and features
// // // // // // // //             </h2>
// // // // // // // //           </motion.div>
// // // // // // // //         </div>
// // // // // // // //       </section>

// // // // // // // //       {/* Features Section */}
// // // // // // // //       <section className="py-12 bg-white">
// // // // // // // //         <div className="max-w-7xl mx-auto px-6">
// // // // // // // //           <motion.div
// // // // // // // //             initial={{ opacity: 0, y: 50 }}
// // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // //             transition={{ duration: 0.8 }}
// // // // // // // //             viewport={{ once: true }}
// // // // // // // //             className="text-center mb-10"
// // // // // // // //           >
// // // // // // // //             <h2 className="text-3xl md:text-4xl font-bold heading-font mb-2">Why Pentakuhl?</h2>
// // // // // // // //             <p className="text-gray-600 text-sm max-w-xl mx-auto">
// // // // // // // //               Revolutionizing logistics with artificial intelligence
// // // // // // // //             </p>
// // // // // // // //           </motion.div>

// // // // // // // //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
// // // // // // // //             {[
// // // // // // // //               {
// // // // // // // //                 title: "Instant Quote Engine",
// // // // // // // //                 desc: "Get accurate freight quotes in under 10 seconds",
// // // // // // // //                 icon: "⚡"
// // // // // // // //               },
// // // // // // // //               {
// // // // // // // //                 title: "Smart Route Optimizer",
// // // // // // // //                 desc: "AI suggests the fastest and most cost-effective routes",
// // // // // // // //                 icon: "🧠"
// // // // // // // //               },
// // // // // // // //               {
// // // // // // // //                 title: "Predictive ETA",
// // // // // // // //                 desc: "Real-time tracking with 98% accurate arrival predictions",
// // // // // // // //                 icon: "📍"
// // // // // // // //               },
// // // // // // // //               {
// // // // // // // //                 title: "Document Intelligence",
// // // // // // // //                 desc: "Auto-extracts data from bills of lading and invoices",
// // // // // // // //                 icon: "📄"
// // // // // // // //               },
// // // // // // // //               {
// // // // // // // //                 title: "Risk Analyzer",
// // // // // // // //                 desc: "Predicts delays due to weather, port congestion, etc.",
// // // // // // // //                 icon: "🌧️"
// // // // // // // //               },
// // // // // // // //               {
// // // // // // // //                 title: "Carbon Calculator",
// // // // // // // //                 desc: "Track and reduce your shipping carbon footprint",
// // // // // // // //                 icon: "🌍"
// // // // // // // //               },
// // // // // // // //             ].map((feature, i) => (
// // // // // // // //               <motion.div
// // // // // // // //                 key={i}
// // // // // // // //                 initial={{ opacity: 0, y: 50 }}
// // // // // // // //                 whileInView={{ opacity: 1, y: 0 }}
// // // // // // // //                 transition={{ duration: 0.5, delay: i * 0.1 }}
// // // // // // // //                 viewport={{ once: true }}
// // // // // // // //                 whileHover={{ y: -5 }}
// // // // // // // //                 className="bg-gray-50 border border-gray-100 p-5 rounded-xl hover:shadow-md transition hover:border-accent group cursor-pointer"
// // // // // // // //               >
// // // // // // // //                 <div className="text-3xl mb-3 group-hover:scale-110 transition">{feature.icon}</div>
// // // // // // // //                 <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
// // // // // // // //                 <p className="text-gray-600 text-xs">{feature.desc}</p>
// // // // // // // //               </motion.div>
// // // // // // // //             ))}
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </section>

// // // // // // // //       {/* Demo / CTA Section */}
// // // // // // // //       <section className="py-16 bg-gradient-to-br from-gray-900 to-primary text-white relative overflow-hidden">
// // // // // // // //         <div className="absolute inset-0 opacity-10">
// // // // // // // //           <div className="w-full h-full bg-[radial-gradient(circle_at_center,#fff_1px,transparent_1px)] bg-[length:40px_40px]" />
// // // // // // // //         </div>
        
// // // // // // // //         <div className="max-w-3xl mx-auto text-center px-6 relative z-10">
// // // // // // // //           <motion.h2
// // // // // // // //             initial={{ opacity: 0, y: 50 }}
// // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // //             transition={{ duration: 0.8 }}
// // // // // // // //             viewport={{ once: true }}
// // // // // // // //             className="text-3xl md:text-4xl font-bold heading-font mb-4"
// // // // // // // //           >
// // // // // // // //             Experience Pentakuhl Now
// // // // // // // //           </motion.h2>
          
// // // // // // // //           <motion.p
// // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // //             transition={{ duration: 0.8, delay: 0.2 }}
// // // // // // // //             viewport={{ once: true }}
// // // // // // // //             className="text-base text-gray-300 mb-6"
// // // // // // // //           >
// // // // // // // //             Try our AI logistics assistant and get a free quote in seconds
// // // // // // // //           </motion.p>

// // // // // // // //           <motion.div
// // // // // // // //             initial={{ opacity: 0, scale: 0.9 }}
// // // // // // // //             whileInView={{ opacity: 1, scale: 1 }}
// // // // // // // //             transition={{ duration: 0.6, delay: 0.4 }}
// // // // // // // //             viewport={{ once: true }}
// // // // // // // //             className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 max-w-xl mx-auto"
// // // // // // // //           >
// // // // // // // //             <div className="mb-4">
// // // // // // // //               <input 
// // // // // // // //                 type="text" 
// // // // // // // //                 placeholder="What are you shipping? (e.g. 5 tons electronics from Mumbai to Dubai)"
// // // // // // // //                 className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 transition text-sm"
// // // // // // // //               />
// // // // // // // //             </div>
// // // // // // // //             <motion.button 
// // // // // // // //               whileHover={{ scale: 1.02 }}
// // // // // // // //               whileTap={{ scale: 0.98 }}
// // // // // // // //               className="w-full bg-accent hover:bg-white hover:text-dark transition py-3 text-base font-semibold rounded-lg"
// // // // // // // //             >
// // // // // // // //               Get AI Quote Now →
// // // // // // // //             </motion.button>
// // // // // // // //           </motion.div>
// // // // // // // //         </div>
// // // // // // // //       </section>

// // // // // // // //       {/* Final CTA */}
// // // // // // // //       <section className="py-12 bg-white text-center">
// // // // // // // //         <div className="max-w-2xl mx-auto px-6">
// // // // // // // //           <motion.h3
// // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // //             transition={{ duration: 0.6 }}
// // // // // // // //             viewport={{ once: true }}
// // // // // // // //             className="text-xl md:text-2xl font-semibold mb-3"
// // // // // // // //           >
// // // // // // // //             Ready to transform your logistics?
// // // // // // // //           </motion.h3>
          
// // // // // // // //           <motion.p
// // // // // // // //             initial={{ opacity: 0, y: 20 }}
// // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // //             transition={{ duration: 0.6, delay: 0.2 }}
// // // // // // // //             viewport={{ once: true }}
// // // // // // // //             className="text-gray-600 text-sm mb-6"
// // // // // // // //           >
// // // // // // // //             Join hundreds of companies already using Pentakuhl AI
// // // // // // // //           </motion.p>
          
// // // // // // // //           <motion.button
// // // // // // // //             initial={{ opacity: 0, y: 20 }}
// // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // //             transition={{ duration: 0.6, delay: 0.4 }}
// // // // // // // //             viewport={{ once: true }}
// // // // // // // //             whileHover={{ scale: 1.05 }}
// // // // // // // //             whileTap={{ scale: 0.95 }}
// // // // // // // //             className="bg-primary text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-dark transition shadow-lg"
// // // // // // // //           >
// // // // // // // //             Start Free Trial
// // // // // // // //           </motion.button>
// // // // // // // //         </div>
// // // // // // // //       </section>
// // // // // // // //     </>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Pentakuhl;









// // // // // // // import { motion } from "framer-motion";
// // // // // // // import { useRef, useState, useEffect } from "react";
// // // // // // // import { useScroll, useTransform } from "framer-motion";

// // // // // // // // Horizontal Scroll Band Component
// // // // // // // const HorizontalScrollSection = () => {
// // // // // // //   const containerRef = useRef(null);
// // // // // // //   const { scrollYProgress } = useScroll({
// // // // // // //     target: containerRef,
// // // // // // //     offset: ["start end", "end start"],
// // // // // // //   });

// // // // // // //   const upperBandX = useTransform(scrollYProgress, [0, 1], [0, -500]);
// // // // // // //   const lowerBandX = useTransform(scrollYProgress, [0, 1], [0, 500]);

// // // // // // //   const menuItems = [
// // // // // // //     "Robust Load Security",
// // // // // // //     "Expert Logistics Support",
// // // // // // //     "Tailored Freight Solutions",
// // // // // // //     "Flexible Shipping Schedules",
// // // // // // //     "Volume Discounts",
// // // // // // //     "End-to-End Supply Chain Management",
// // // // // // //   ];

// // // // // // //   return (
// // // // // // //     <section 
// // // // // // //       ref={containerRef}
// // // // // // //       className="relative min-h-[100vh] bg-gradient-to-b from-gray-900 to-black overflow-hidden"
// // // // // // //     >
// // // // // // //       <div className="absolute inset-0 opacity-5">
// // // // // // //         <div className="w-full h-full bg-[radial-gradient(circle_at_center,#fff_1px,transparent_1px)] bg-[length:40px_40px]" />
// // // // // // //       </div>

// // // // // // //       <div className="sticky top-0 h-screen flex flex-col items-center justify-center gap-4 px-4">
        
// // // // // // //         <motion.div
// // // // // // //           initial={{ opacity: 0, y: 20 }}
// // // // // // //           animate={{ opacity: 1, y: 0 }}
// // // // // // //           transition={{ duration: 0.6 }}
// // // // // // //           className="text-center"
// // // // // // //         >
// // // // // // //           <span className="text-accent text-xs font-semibold tracking-wider px-3 py-1 bg-accent/10 rounded-full">
// // // // // // //             MENU
// // // // // // //           </span>
// // // // // // //         </motion.div>

// // // // // // //         <motion.div
// // // // // // //           style={{ x: upperBandX }}
// // // // // // //           className="w-full overflow-hidden py-3"
// // // // // // //         >
// // // // // // //           <div className="flex gap-3 whitespace-nowrap">
// // // // // // //             {menuItems.map((item, idx) => (
// // // // // // //               <div
// // // // // // //                 key={idx}
// // // // // // //                 className="inline-flex items-center gap-2 bg-gray-800/90 backdrop-blur-md rounded-full px-5 py-2.5 shadow-lg border border-white/10 hover:border-accent/50 transition-all duration-300 cursor-pointer group"
// // // // // // //               >
// // // // // // //                 <span className="w-1.5 h-1.5 bg-accent rounded-full group-hover:scale-150 transition-transform" />
// // // // // // //                 <span className="text-white text-sm group-hover:text-accent transition-colors">
// // // // // // //                   {item}
// // // // // // //                 </span>
// // // // // // //               </div>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </motion.div>

// // // // // // //         <motion.div
// // // // // // //           style={{ x: lowerBandX }}
// // // // // // //           className="w-full overflow-hidden py-3"
// // // // // // //         >
// // // // // // //           <div className="flex gap-3 whitespace-nowrap">
// // // // // // //             {[...menuItems].reverse().map((item, idx) => (
// // // // // // //               <div
// // // // // // //                 key={idx}
// // // // // // //                 className="inline-flex items-center gap-2 bg-gray-800/90 backdrop-blur-md rounded-full px-5 py-2.5 shadow-lg border border-white/10 hover:border-accent/50 transition-all duration-300 cursor-pointer group"
// // // // // // //               >
// // // // // // //                 <span className="w-1.5 h-1.5 bg-accent rounded-full group-hover:scale-150 transition-transform" />
// // // // // // //                 <span className="text-white text-sm group-hover:text-accent transition-colors">
// // // // // // //                   {item}
// // // // // // //                 </span>
// // // // // // //               </div>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </motion.div>

// // // // // // //         <motion.div
// // // // // // //           animate={{ y: [0, 8, 0] }}
// // // // // // //           transition={{ repeat: Infinity, duration: 1.5 }}
// // // // // // //           className="absolute bottom-8 text-white/30 text-xs text-center"
// // // // // // //         >
// // // // // // //           Scroll ↓
// // // // // // //         </motion.div>
// // // // // // //       </div>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // };

// // // // // // // const Pentakuhl = () => {
// // // // // // //   return (
// // // // // // //     <>
// // // // // // //       {/* Hero Section */}
// // // // // // //       <section className="relative h-screen overflow-hidden">
// // // // // // //         <video
// // // // // // //           autoPlay
// // // // // // //           loop
// // // // // // //           muted
// // // // // // //           playsInline
// // // // // // //           className="absolute inset-0 w-full h-full object-cover"
// // // // // // //         >
// // // // // // //           <source src="/Industrial_Factory 1080P.mp4" type="video/mp4" />
// // // // // // //         </video>

// // // // // // //         <div className="absolute inset-0 bg-black/45 z-10" />
// // // // // // //         <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20 z-10" />

// // // // // // //         <div className="relative z-20 h-full flex items-center justify-center">
// // // // // // //           <div className="max-w-7xl mx-auto px-6 text-center">
// // // // // // //             <motion.div
// // // // // // //               initial={{ opacity: 0, y: 30 }}
// // // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // // //               transition={{ duration: 0.8 }}
// // // // // // //               className="inline-block bg-accent/20 text-accent text-sm font-medium px-6 py-2 rounded-full mb-6 backdrop-blur-sm"
// // // // // // //             >
// // // // // // //               AI-Powered Logistics
// // // // // // //             </motion.div>

// // // // // // //             <motion.h1
// // // // // // //               initial={{ opacity: 0, y: 80 }}
// // // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // // //               transition={{ duration: 1 }}
// // // // // // //               className="text-6xl md:text-7xl font-bold text-white leading-tight mb-8"
// // // // // // //             >
// // // // // // //               Meet <span className="text-accent">Pentakuhl</span>
// // // // // // //             </motion.h1>

// // // // // // //             <motion.p
// // // // // // //               initial={{ opacity: 0, y: 40 }}
// // // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // // //               transition={{ duration: 1, delay: 0.2 }}
// // // // // // //               className="text-2xl text-gray-200 max-w-3xl mx-auto"
// // // // // // //             >
// // // // // // //               Your intelligent logistics assistant. Instant quotes, smart routing, and predictive insights.
// // // // // // //             </motion.p>

// // // // // // //             <motion.div
// // // // // // //               initial={{ opacity: 0, y: 40 }}
// // // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // // //               transition={{ duration: 1, delay: 0.4 }}
// // // // // // //               className="mt-10"
// // // // // // //             >
// // // // // // //               <button className="bg-accent hover:bg-white hover:text-dark transition px-10 py-4 rounded-full text-lg font-semibold shadow-2xl">
// // // // // // //                 Try Pentakuhl AI →
// // // // // // //               </button>
// // // // // // //             </motion.div>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         <motion.div
// // // // // // //           initial={{ opacity: 0 }}
// // // // // // //           animate={{ opacity: 1 }}
// // // // // // //           transition={{ delay: 1.5, duration: 1 }}
// // // // // // //           className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
// // // // // // //         >
// // // // // // //           <div className="w-[35px] h-[60px] border-2 border-white/60 rounded-full flex justify-center p-2">
// // // // // // //             <motion.div
// // // // // // //               animate={{ y: [0, 18, 0] }}
// // // // // // //               transition={{ repeat: Infinity, duration: 1.5 }}
// // // // // // //               className="w-1.5 h-4 bg-white rounded-full"
// // // // // // //             />
// // // // // // //           </div>
// // // // // // //         </motion.div>
// // // // // // //       </section>

// // // // // // //       {/* About Penta KÜHL Section */}
// // // // // // //       <section className="py-16 bg-white">
// // // // // // //         <div className="max-w-7xl mx-auto px-6">
// // // // // // //           <div className="grid md:grid-cols-2 gap-12 items-center">
// // // // // // //             <motion.div
// // // // // // //               initial={{ opacity: 0, x: -50 }}
// // // // // // //               whileInView={{ opacity: 1, x: 0 }}
// // // // // // //               transition={{ duration: 0.8 }}
// // // // // // //               viewport={{ once: true }}
// // // // // // //             >
// // // // // // //               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
// // // // // // //                 ABOUT <br />
// // // // // // //                 <span className="text-accent">PENTA KÜHL</span>
// // // // // // //               </h2>
// // // // // // //             </motion.div>

// // // // // // //             <motion.div
// // // // // // //               initial={{ opacity: 0, x: 50 }}
// // // // // // //               whileInView={{ opacity: 1, x: 0 }}
// // // // // // //               transition={{ duration: 0.8, delay: 0.2 }}
// // // // // // //               viewport={{ once: true }}
// // // // // // //               className="space-y-4"
// // // // // // //             >
// // // // // // //               <p className="text-gray-700 text-base leading-relaxed">
// // // // // // //                 At <span className="font-semibold text-accent">Pentakuhl</span>, we specialize in providing durable, 
// // // // // // //                 effective packaging solutions that maintain temperature 
// // // // // // //                 <span className="font-semibold text-accent"> stability </span> 
// // // // // // //                 during transit, 
// // // // // // //                 <span className="font-semibold text-accent"> protecting </span> 
// // // // // // //                 your valuable products.
// // // // // // //               </p>
// // // // // // //               <p className="text-gray-700 text-base leading-relaxed">
// // // // // // //                 Our innovative designs cater to various industries, including pharmaceuticals, 
// // // // // // //                 food, and biotechnology.
// // // // // // //               </p>
// // // // // // //               <div className="w-16 h-1 bg-accent rounded-full mt-4" />
// // // // // // //             </motion.div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </section>

// // // // // // //       {/* Authorized Distributors Section */}
// // // // // // //       <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
// // // // // // //         <div className="max-w-7xl mx-auto px-6">
// // // // // // //           <motion.div
// // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // //             transition={{ duration: 0.6 }}
// // // // // // //             viewport={{ once: true }}
// // // // // // //             className="text-center mb-8"
// // // // // // //           >
// // // // // // //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
// // // // // // //               PENTA FREIGHT
// // // // // // //             </h2>
// // // // // // //             <div className="w-20 h-1 bg-accent mx-auto" />
// // // // // // //           </motion.div>

// // // // // // //           <motion.div
// // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // //             transition={{ duration: 0.6, delay: 0.2 }}
// // // // // // //             viewport={{ once: true }}
// // // // // // //             className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
// // // // // // //           >
// // // // // // //             <div className="grid md:grid-cols-2 gap-0">
// // // // // // //               <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-8 flex items-center justify-center">
// // // // // // //                 <div className="text-center">
// // // // // // //                   <div className="text-5xl mb-2">❄️</div>
// // // // // // //                   <div className="text-lg font-bold text-gray-800">Pelican BioThermal™</div>
// // // // // // //                   <div className="text-gray-500 text-xs mt-1">Trusted Partner</div>
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //               <div className="p-8">
// // // // // // //                 <h3 className="text-xl font-bold text-gray-900 mb-2">
// // // // // // //                   Authorized Distributors for 
// // // // // // //                   <span className="text-accent block mt-1">Pelican BioThermal™ Products</span>
// // // // // // //                 </h3>
// // // // // // //                 <p className="text-gray-600 text-sm leading-relaxed mb-4">
// // // // // // //                   Penta Freight is proud to be an authorized distributor for Pelican BioThermal™, 
// // // // // // //                   offering world-class temperature-controlled packaging solutions.
// // // // // // //                 </p>
// // // // // // //                 <motion.button
// // // // // // //                   whileHover={{ x: 8 }}
// // // // // // //                   className="text-accent font-semibold text-sm flex items-center gap-2 group"
// // // // // // //                 >
// // // // // // //                   Read more 
// // // // // // //                   <span className="text-accent group-hover:translate-x-1 transition-transform duration-300">→</span>
// // // // // // //                 </motion.button>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </motion.div>
// // // // // // //         </div>
// // // // // // //       </section>

// // // // // // //       {/* PRODUCT SOLUTIONS SECTION */}
// // // // // // //       <section className="py-16 bg-black overflow-hidden">
// // // // // // //         <div className="absolute inset-0 opacity-10 pointer-events-none">
// // // // // // //           <div className="w-full h-full bg-[radial-gradient(circle_at_center,#fff_1px,transparent_1px)] bg-[length:40px_40px]" />
// // // // // // //         </div>

// // // // // // //         <div className="max-w-7xl mx-auto px-6">
// // // // // // //           <motion.div
// // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // //             transition={{ duration: 0.8 }}
// // // // // // //             viewport={{ once: true }}
// // // // // // //             className="text-center mb-12"
// // // // // // //           >
// // // // // // //             <h2 className="text-4xl md:text-5xl font-bold text-white">
// // // // // // //               Product <span className="text-accent">Solutions</span>
// // // // // // //             </h2>
// // // // // // //           </motion.div>

// // // // // // //           <div className="grid lg:grid-cols-2 gap-8">
            
// // // // // // //             {/* LEFT CONTAINER */}
// // // // // // //             <motion.div
// // // // // // //               initial={{ opacity: 0, x: -50 }}
// // // // // // //               whileInView={{ opacity: 1, x: 0 }}
// // // // // // //               transition={{ duration: 0.6, delay: 0.2 }}
// // // // // // //               viewport={{ once: true }}
// // // // // // //               className="bg-gray-900/90 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/10"
// // // // // // //             >
// // // // // // //               <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
// // // // // // //                 Parcel <span className="text-accent">Shippers</span>
// // // // // // //               </h3>
// // // // // // //               <p className="text-gray-300 text-sm mb-6 leading-relaxed">
// // // // // // //                 We understand the unique challenges faced by parcel shippers and offer 
// // // // // // //                 tailored solutions for seamless shipping.
// // // // // // //               </p>

// // // // // // //               <div className="mb-6">
// // // // // // //                 <h4 className="text-base font-bold text-accent mb-3 flex items-center gap-2">
// // // // // // //                   <span className="text-xl">📦</span> Single Use
// // // // // // //                 </h4>
// // // // // // //                 <div className="space-y-2">
// // // // // // //                   {["COOLGUARD", "COOLGUARD RM", "COOLGUARD ADVANCE"].map((item, idx) => (
// // // // // // //                     <motion.div
// // // // // // //                       key={idx}
// // // // // // //                       initial={{ opacity: 0, x: -20 }}
// // // // // // //                       whileInView={{ opacity: 1, x: 0 }}
// // // // // // //                       transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
// // // // // // //                       viewport={{ once: true }}
// // // // // // //                       className="flex items-center gap-3 p-2.5 bg-gray-800/50 rounded-lg hover:bg-accent/20 transition-all duration-300 cursor-pointer group"
// // // // // // //                     >
// // // // // // //                       <span className="text-xl group-hover:scale-110 transition-transform">📦</span>
// // // // // // //                       <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{item}</span>
// // // // // // //                     </motion.div>
// // // // // // //                   ))}
// // // // // // //                 </div>
// // // // // // //               </div>

// // // // // // //               <div>
// // // // // // //                 <h4 className="text-base font-bold text-accent mb-3 flex items-center gap-2">
// // // // // // //                   <span className="text-xl">🔄</span> Reusable
// // // // // // //                 </h4>
// // // // // // //                 <div className="space-y-2">
// // // // // // //                   {["Credo Cube"].map((item, idx) => (
// // // // // // //                     <motion.div
// // // // // // //                       key={idx}
// // // // // // //                       initial={{ opacity: 0, x: -20 }}
// // // // // // //                       whileInView={{ opacity: 1, x: 0 }}
// // // // // // //                       transition={{ duration: 0.4, delay: 0.7 }}
// // // // // // //                       viewport={{ once: true }}
// // // // // // //                       className="flex items-center gap-3 p-2.5 bg-gray-800/50 rounded-lg hover:bg-accent/20 transition-all duration-300 cursor-pointer group"
// // // // // // //                     >
// // // // // // //                       <span className="text-xl group-hover:scale-110 transition-transform">🔄</span>
// // // // // // //                       <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{item}</span>
// // // // // // //                     </motion.div>
// // // // // // //                   ))}
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             </motion.div>

// // // // // // //             {/* RIGHT CONTAINER */}
// // // // // // //             <motion.div
// // // // // // //               initial={{ opacity: 0, x: 50 }}
// // // // // // //               whileInView={{ opacity: 1, x: 0 }}
// // // // // // //               transition={{ duration: 0.6, delay: 0.3 }}
// // // // // // //               viewport={{ once: true }}
// // // // // // //               className="bg-gray-900/90 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/10"
// // // // // // //             >
// // // // // // //               <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
// // // // // // //                 Pallet <span className="text-accent">Shippers</span>
// // // // // // //               </h3>
// // // // // // //               <p className="text-gray-300 text-sm mb-6 leading-relaxed">
// // // // // // //                 We provide tailored services for pallet shippers, ensuring your cargo arrives 
// // // // // // //                 safely and efficiently.
// // // // // // //               </p>

// // // // // // //               <div className="mb-6">
// // // // // // //                 <h4 className="text-base font-bold text-accent mb-3 flex items-center gap-2">
// // // // // // //                   <span className="text-xl">📦</span> Single Use
// // // // // // //                 </h4>
// // // // // // //                 <div className="space-y-2">
// // // // // // //                   {["COOLPALL VERTOS", "COOLPALL VERTOS ADVANCE"].map((item, idx) => (
// // // // // // //                     <motion.div
// // // // // // //                       key={idx}
// // // // // // //                       initial={{ opacity: 0, x: 20 }}
// // // // // // //                       whileInView={{ opacity: 1, x: 0 }}
// // // // // // //                       transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
// // // // // // //                       viewport={{ once: true }}
// // // // // // //                       className="flex items-center gap-3 p-2.5 bg-gray-800/50 rounded-lg hover:bg-accent/20 transition-all duration-300 cursor-pointer group"
// // // // // // //                     >
// // // // // // //                       <span className="text-xl group-hover:scale-110 transition-transform">📦</span>
// // // // // // //                       <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{item}</span>
// // // // // // //                     </motion.div>
// // // // // // //                   ))}
// // // // // // //                 </div>
// // // // // // //               </div>

// // // // // // //               <div>
// // // // // // //                 <h4 className="text-base font-bold text-accent mb-3 flex items-center gap-2">
// // // // // // //                   <span className="text-xl">🔄</span> Reusable
// // // // // // //                 </h4>
// // // // // // //                 <div className="space-y-2">
// // // // // // //                   {["Credo XTEND", "CREDO CARGO"].map((item, idx) => (
// // // // // // //                     <motion.div
// // // // // // //                       key={idx}
// // // // // // //                       initial={{ opacity: 0, x: 20 }}
// // // // // // //                       whileInView={{ opacity: 1, x: 0 }}
// // // // // // //                       transition={{ duration: 0.4, delay: 0.8 + idx * 0.1 }}
// // // // // // //                       viewport={{ once: true }}
// // // // // // //                       className="flex items-center gap-3 p-2.5 bg-gray-800/50 rounded-lg hover:bg-accent/20 transition-all duration-300 cursor-pointer group"
// // // // // // //                     >
// // // // // // //                       <span className="text-xl group-hover:scale-110 transition-transform">🔄</span>
// // // // // // //                       <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{item}</span>
// // // // // // //                     </motion.div>
// // // // // // //                   ))}
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             </motion.div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </section>

// // // // // // //       {/* SERIES GUIDE SECTION */}
// // // // // // //       <section className="py-16 bg-white">
// // // // // // //         <div className="max-w-7xl mx-auto px-6">
// // // // // // //           <motion.div
// // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // //             transition={{ duration: 0.8 }}
// // // // // // //             viewport={{ once: true }}
// // // // // // //             className="text-center mb-10"
// // // // // // //           >
// // // // // // //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
// // // // // // //               Series Guide
// // // // // // //             </h2>
// // // // // // //             <p className="text-gray-600 text-base max-w-3xl mx-auto leading-relaxed">
// // // // // // //               This guide outlines temperature-controlled packaging solutions designed for the safe transport 
// // // // // // //               and storage of sensitive products, like vaccines and biologics, across various thermal conditions, 
// // // // // // //               from refrigerated to deep-freeze.
// // // // // // //             </p>
// // // // // // //           </motion.div>

// // // // // // //           <motion.div
// // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // //             transition={{ duration: 0.6, delay: 0.2 }}
// // // // // // //             viewport={{ once: true }}
// // // // // // //             className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-3xl mx-auto"
// // // // // // //           >
// // // // // // //             <div className="flex items-center gap-4 mb-6">
// // // // // // //               <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
// // // // // // //                 <span className="text-2xl">🌡️</span>
// // // // // // //               </div>
// // // // // // //               <h3 className="text-2xl font-bold text-gray-800">SERIES 4</h3>
// // // // // // //             </div>
            
// // // // // // //             <div className="space-y-4">
// // // // // // //               <div>
// // // // // // //                 <h4 className="text-sm font-semibold text-accent uppercase tracking-wide">Temperature Range:</h4>
// // // // // // //                 <p className="text-gray-700 text-base">15°C - 25°C</p>
// // // // // // //               </div>
              
// // // // // // //               <div>
// // // // // // //                 <h4 className="text-sm font-semibold text-accent uppercase tracking-wide">Usage & Applications:</h4>
// // // // // // //                 <p className="text-gray-700 text-base">Covers a controlled room temperature range.</p>
// // // // // // //               </div>
              
// // // // // // //               <div>
// // // // // // //                 <h4 className="text-sm font-semibold text-accent uppercase tracking-wide">Ideal For:</h4>
// // // // // // //                 <p className="text-gray-700 text-base">Suitable for products that need to remain stable at standard room temperature, including certain medicines and cosmetics.</p>
// // // // // // //               </div>
// // // // // // //             </div>

// // // // // // //             <div className="mt-6 pt-4 border-t border-gray-200">
// // // // // // //               <div className="flex gap-2">
// // // // // // //                 <div className="w-2 h-2 bg-accent rounded-full" />
// // // // // // //                 <div className="w-2 h-2 bg-accent/50 rounded-full" />
// // // // // // //                 <div className="w-2 h-2 bg-accent/25 rounded-full" />
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </motion.div>
// // // // // // //         </div>
// // // // // // //       </section>

// // // // // // //       {/* HORIZONTAL SCROLL BANDS SECTION */}
// // // // // // //       <HorizontalScrollSection />

// // // // // // //       {/* FAQ SECTION - NEW (After Horizontal Bands) */}
// // // // // // //       <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
// // // // // // //         <div className="max-w-4xl mx-auto px-6">
// // // // // // //           <motion.div
// // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // //             transition={{ duration: 0.8 }}
// // // // // // //             viewport={{ once: true }}
// // // // // // //             className="text-center mb-12"
// // // // // // //           >
// // // // // // //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
// // // // // // //               Frequently Asked Questions
// // // // // // //             </h2>
// // // // // // //             <p className="text-gray-600 text-base max-w-2xl mx-auto">
// // // // // // //               Explore our frequently asked questions to gain clarity about Penta Kuhl's services and features.
// // // // // // //             </p>
// // // // // // //           </motion.div>

// // // // // // //           <div className="grid md:grid-cols-2 gap-6">
// // // // // // //             {/* Left side - Main question */}
// // // // // // //             <motion.div
// // // // // // //               initial={{ opacity: 0, x: -30 }}
// // // // // // //               whileInView={{ opacity: 1, x: 0 }}
// // // // // // //               transition={{ duration: 0.6, delay: 0.2 }}
// // // // // // //               viewport={{ once: true }}
// // // // // // //               className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
// // // // // // //             >
// // // // // // //               <div className="flex items-start gap-4">
// // // // // // //                 <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
// // // // // // //                   <span className="text-accent text-lg font-bold">Q</span>
// // // // // // //                 </div>
// // // // // // //                 <div>
// // // // // // //                   <h3 className="text-lg font-semibold text-gray-800 mb-2">What is Penta Kuhl?</h3>
// // // // // // //                   <p className="text-gray-600 text-sm leading-relaxed">
// // // // // // //                     Penta Kuhl is a specialized temperature-controlled packaging solution designed 
// // // // // // //                     to maintain product integrity during transit for sensitive goods like pharmaceuticals, 
// // // // // // //                     biologics, and food products.
// // // // // // //                   </p>
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             </motion.div>

// // // // // // //             {/* Right side - List of questions */}
// // // // // // //             <motion.div
// // // // // // //               initial={{ opacity: 0, x: 30 }}
// // // // // // //               whileInView={{ opacity: 1, x: 0 }}
// // // // // // //               transition={{ duration: 0.6, delay: 0.3 }}
// // // // // // //               viewport={{ once: true }}
// // // // // // //               className="space-y-4"
// // // // // // //             >
// // // // // // //               {[
// // // // // // //                 "How does Penta Kuhl ensure cargo safety?",
// // // // // // //                 "What types of cargo can Penta Kuhl handle?",
// // // // // // //                 "Is there customer support available for Penta Kuhl users?"
// // // // // // //               ].map((question, idx) => (
// // // // // // //                 <motion.div
// // // // // // //                   key={idx}
// // // // // // //                   initial={{ opacity: 0, x: 30 }}
// // // // // // //                   whileInView={{ opacity: 1, x: 0 }}
// // // // // // //                   transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
// // // // // // //                   viewport={{ once: true }}
// // // // // // //                   className="bg-white rounded-2xl p-5 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer group"
// // // // // // //                 >
// // // // // // //                   <div className="flex items-center justify-between">
// // // // // // //                     <div className="flex items-center gap-3">
// // // // // // //                       <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
// // // // // // //                         <span className="text-gray-500 group-hover:text-accent text-sm font-bold">Q</span>
// // // // // // //                       </div>
// // // // // // //                       <span className="text-gray-700 text-sm group-hover:text-accent transition-colors">
// // // // // // //                         {question}
// // // // // // //                       </span>
// // // // // // //                     </div>
// // // // // // //                     <span className="text-gray-400 group-hover:text-accent transition-colors">→</span>
// // // // // // //                   </div>
// // // // // // //                 </motion.div>
// // // // // // //               ))}
// // // // // // //             </motion.div>
// // // // // // //           </div>

// // // // // // //           {/* Protecting What Matters Most CTA */}
// // // // // // //           <motion.div
// // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // //             transition={{ duration: 0.6, delay: 0.6 }}
// // // // // // //             viewport={{ once: true }}
// // // // // // //             className="mt-12 text-center bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 border border-accent/20"
// // // // // // //           >
// // // // // // //             <div className="inline-block p-3 bg-accent/20 rounded-full mb-4">
// // // // // // //               <span className="text-3xl">🛡️</span>
// // // // // // //             </div>
// // // // // // //             <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
// // // // // // //               Protecting What Matters Most
// // // // // // //             </h3>
// // // // // // //             <p className="text-gray-600 mb-6">
// // // // // // //               Get in touch to ensure safe and temperature-stable transit for your sensitive products.
// // // // // // //             </p>
// // // // // // //             <motion.button
// // // // // // //               whileHover={{ scale: 1.05 }}
// // // // // // //               whileTap={{ scale: 0.95 }}
// // // // // // //               className="bg-accent hover:bg-accent/80 text-white px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-md"
// // // // // // //             >
// // // // // // //               Contact Us Today →
// // // // // // //             </motion.button>
// // // // // // //           </motion.div>
// // // // // // //         </div>
// // // // // // //       </section>

// // // // // // //       {/* Features Section */}
     
// // // // // // //     </>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Pentakuhl;








// // // // // // import { motion } from "framer-motion";
// // // // // // import { useRef, useState, useEffect } from "react";
// // // // // // import { useScroll, useTransform } from "framer-motion";

// // // // // // // Horizontal Scroll Band Component
// // // // // // const HorizontalScrollSection = () => {
// // // // // //   const containerRef = useRef(null);
// // // // // //   const { scrollYProgress } = useScroll({
// // // // // //     target: containerRef,
// // // // // //     offset: ["start end", "end start"],
// // // // // //   });

// // // // // //   const upperBandX = useTransform(scrollYProgress, [0, 1], [0, -500]);
// // // // // //   const lowerBandX = useTransform(scrollYProgress, [0, 1], [0, 500]);

// // // // // //   const menuItems = [
// // // // // //     "Robust Load Security",
// // // // // //     "Expert Logistics Support",
// // // // // //     "Tailored Freight Solutions",
// // // // // //     "Flexible Shipping Schedules",
// // // // // //     "Volume Discounts",
// // // // // //     "End-to-End Supply Chain Management",
// // // // // //   ];

// // // // // //   return (
// // // // // //     <section 
// // // // // //       ref={containerRef}
// // // // // //       className="relative min-h-[100vh] bg-gradient-to-b from-gray-900 to-black overflow-hidden"
// // // // // //     >
// // // // // //       <div className="absolute inset-0 opacity-5">
// // // // // //         <div className="w-full h-full bg-[radial-gradient(circle_at_center,#fff_1px,transparent_1px)] bg-[length:40px_40px]" />
// // // // // //       </div>

// // // // // //       <div className="sticky top-0 h-screen flex flex-col items-center justify-center gap-4 px-4">
        
// // // // // //         <motion.div
// // // // // //           initial={{ opacity: 0, y: 20 }}
// // // // // //           animate={{ opacity: 1, y: 0 }}
// // // // // //           transition={{ duration: 0.6 }}
// // // // // //           className="text-center"
// // // // // //         >
// // // // // //           <span className="text-accent text-xs font-semibold tracking-wider px-3 py-1 bg-accent/10 rounded-full">
// // // // // //             MENU
// // // // // //           </span>
// // // // // //         </motion.div>

// // // // // //         <motion.div
// // // // // //           style={{ x: upperBandX }}
// // // // // //           className="w-full overflow-hidden py-3"
// // // // // //         >
// // // // // //           <div className="flex gap-3 whitespace-nowrap">
// // // // // //             {menuItems.map((item, idx) => (
// // // // // //               <div
// // // // // //                 key={idx}
// // // // // //                 className="inline-flex items-center gap-2 bg-gray-800/90 backdrop-blur-md rounded-full px-5 py-2.5 shadow-lg border border-white/10 hover:border-accent/50 transition-all duration-300 cursor-pointer group"
// // // // // //               >
// // // // // //                 <span className="w-1.5 h-1.5 bg-accent rounded-full group-hover:scale-150 transition-transform" />
// // // // // //                 <span className="text-white text-sm group-hover:text-accent transition-colors">
// // // // // //                   {item}
// // // // // //                 </span>
// // // // // //               </div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </motion.div>

// // // // // //         <motion.div
// // // // // //           style={{ x: lowerBandX }}
// // // // // //           className="w-full overflow-hidden py-3"
// // // // // //         >
// // // // // //           <div className="flex gap-3 whitespace-nowrap">
// // // // // //             {[...menuItems].reverse().map((item, idx) => (
// // // // // //               <div
// // // // // //                 key={idx}
// // // // // //                 className="inline-flex items-center gap-2 bg-gray-800/90 backdrop-blur-md rounded-full px-5 py-2.5 shadow-lg border border-white/10 hover:border-accent/50 transition-all duration-300 cursor-pointer group"
// // // // // //               >
// // // // // //                 <span className="w-1.5 h-1.5 bg-accent rounded-full group-hover:scale-150 transition-transform" />
// // // // // //                 <span className="text-white text-sm group-hover:text-accent transition-colors">
// // // // // //                   {item}
// // // // // //                 </span>
// // // // // //               </div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </motion.div>

// // // // // //         <motion.div
// // // // // //           animate={{ y: [0, 8, 0] }}
// // // // // //           transition={{ repeat: Infinity, duration: 1.5 }}
// // // // // //           className="absolute bottom-8 text-white/30 text-xs text-center"
// // // // // //         >
// // // // // //           Scroll ↓
// // // // // //         </motion.div>
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // };

// // // // // // const Pentakuhl = () => {
// // // // // //   const productSectionRef = useRef(null);
// // // // // //   const [stage, setStage] = useState(0); // 0: heading only, 1: containers slide in, 2: data appears

// // // // // //   useEffect(() => {
// // // // // //     const handleScroll = () => {
// // // // // //       if (productSectionRef.current) {
// // // // // //         const rect = productSectionRef.current.getBoundingClientRect();
// // // // // //         const windowHeight = window.innerHeight;
        
// // // // // //         const scrollProgress = Math.max(0, Math.min(1, 
// // // // // //           (windowHeight - rect.top) / (windowHeight * 1.5)
// // // // // //         ));
        
// // // // // //         if (scrollProgress < 0.1) {
// // // // // //           setStage(0);
// // // // // //         } else if (scrollProgress >= 0.1 && scrollProgress < 0.4) {
// // // // // //           setStage(1);
// // // // // //         } else if (scrollProgress >= 0.4) {
// // // // // //           setStage(2);
// // // // // //         }
// // // // // //       }
// // // // // //     };

// // // // // //     window.addEventListener("scroll", handleScroll);
// // // // // //     handleScroll();
    
// // // // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // // // //   }, []);

// // // // // //   return (
// // // // // //     <>
// // // // // //       {/* Hero Section */}
// // // // // //       <section className="relative h-screen overflow-hidden">
// // // // // //         <video
// // // // // //           autoPlay
// // // // // //           loop
// // // // // //           muted
// // // // // //           playsInline
// // // // // //           className="absolute inset-0 w-full h-full object-cover"
// // // // // //         >
// // // // // //           <source src="/Industrial_Factory 1080P.mp4" type="video/mp4" />
// // // // // //         </video>

// // // // // //         <div className="absolute inset-0 bg-black/45 z-10" />
// // // // // //         <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20 z-10" />

// // // // // //         <div className="relative z-20 h-full flex items-center justify-center">
// // // // // //           <div className="max-w-7xl mx-auto px-6 text-center">
// // // // // //             <motion.div
// // // // // //               initial={{ opacity: 0, y: 30 }}
// // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // //               transition={{ duration: 0.8 }}
// // // // // //               className="inline-block bg-accent/20 text-accent text-sm font-medium px-6 py-2 rounded-full mb-6 backdrop-blur-sm"
// // // // // //             >
// // // // // //               AI-Powered Logistics
// // // // // //             </motion.div>

// // // // // //             <motion.h1
// // // // // //               initial={{ opacity: 0, y: 80 }}
// // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // //               transition={{ duration: 1 }}
// // // // // //               className="text-6xl md:text-7xl font-bold text-white leading-tight mb-8"
// // // // // //             >
// // // // // //               Meet <span className="text-accent">Pentakuhl</span>
// // // // // //             </motion.h1>

// // // // // //             <motion.p
// // // // // //               initial={{ opacity: 0, y: 40 }}
// // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // //               transition={{ duration: 1, delay: 0.2 }}
// // // // // //               className="text-2xl text-gray-200 max-w-3xl mx-auto"
// // // // // //             >
// // // // // //               Your intelligent logistics assistant. Instant quotes, smart routing, and predictive insights.
// // // // // //             </motion.p>

// // // // // //             <motion.div
// // // // // //               initial={{ opacity: 0, y: 40 }}
// // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // //               transition={{ duration: 1, delay: 0.4 }}
// // // // // //               className="mt-10"
// // // // // //             >
// // // // // //               <button className="bg-accent hover:bg-white hover:text-dark transition px-10 py-4 rounded-full text-lg font-semibold shadow-2xl">
// // // // // //                 Try Pentakuhl AI →
// // // // // //               </button>
// // // // // //             </motion.div>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         <motion.div
// // // // // //           initial={{ opacity: 0 }}
// // // // // //           animate={{ opacity: 1 }}
// // // // // //           transition={{ delay: 1.5, duration: 1 }}
// // // // // //           className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
// // // // // //         >
// // // // // //           <div className="w-[35px] h-[60px] border-2 border-white/60 rounded-full flex justify-center p-2">
// // // // // //             <motion.div
// // // // // //               animate={{ y: [0, 18, 0] }}
// // // // // //               transition={{ repeat: Infinity, duration: 1.5 }}
// // // // // //               className="w-1.5 h-4 bg-white rounded-full"
// // // // // //             />
// // // // // //           </div>
// // // // // //         </motion.div>
// // // // // //       </section>

// // // // // //       {/* About Penta KÜHL Section */}
// // // // // //       <section className="py-16 bg-white">
// // // // // //         <div className="max-w-7xl mx-auto px-6">
// // // // // //           <div className="grid md:grid-cols-2 gap-12 items-center">
// // // // // //             <motion.div
// // // // // //               initial={{ opacity: 0, x: -50 }}
// // // // // //               whileInView={{ opacity: 1, x: 0 }}
// // // // // //               transition={{ duration: 0.8 }}
// // // // // //               viewport={{ once: true }}
// // // // // //             >
// // // // // //               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
// // // // // //                 ABOUT <br />
// // // // // //                 <span className="text-accent">PENTA KÜHL</span>
// // // // // //               </h2>
// // // // // //             </motion.div>

// // // // // //             <motion.div
// // // // // //               initial={{ opacity: 0, x: 50 }}
// // // // // //               whileInView={{ opacity: 1, x: 0 }}
// // // // // //               transition={{ duration: 0.8, delay: 0.2 }}
// // // // // //               viewport={{ once: true }}
// // // // // //               className="space-y-4"
// // // // // //             >
// // // // // //               <p className="text-gray-700 text-base leading-relaxed">
// // // // // //                 At <span className="font-semibold text-accent">Pentakuhl</span>, we specialize in providing durable, 
// // // // // //                 effective packaging solutions that maintain temperature 
// // // // // //                 <span className="font-semibold text-accent"> stability </span> 
// // // // // //                 during transit, 
// // // // // //                 <span className="font-semibold text-accent"> protecting </span> 
// // // // // //                 your valuable products.
// // // // // //               </p>
// // // // // //               <p className="text-gray-700 text-base leading-relaxed">
// // // // // //                 Our innovative designs cater to various industries, including pharmaceuticals, 
// // // // // //                 food, and biotechnology.
// // // // // //               </p>
// // // // // //               <div className="w-16 h-1 bg-accent rounded-full mt-4" />
// // // // // //             </motion.div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* Authorized Distributors Section */}
// // // // // //       <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
// // // // // //         <div className="max-w-7xl mx-auto px-6">
// // // // // //           <motion.div
// // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // //             transition={{ duration: 0.6 }}
// // // // // //             viewport={{ once: true }}
// // // // // //             className="text-center mb-8"
// // // // // //           >
// // // // // //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
// // // // // //               PENTA FREIGHT
// // // // // //             </h2>
// // // // // //             <div className="w-20 h-1 bg-accent mx-auto" />
// // // // // //           </motion.div>

// // // // // //           <motion.div
// // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // //             transition={{ duration: 0.6, delay: 0.2 }}
// // // // // //             viewport={{ once: true }}
// // // // // //             className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
// // // // // //           >
// // // // // //             <div className="grid md:grid-cols-2 gap-0">
// // // // // //               <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-8 flex items-center justify-center">
// // // // // //                 <div className="text-center">
// // // // // //                   <div className="text-5xl mb-2">❄️</div>
// // // // // //                   <div className="text-lg font-bold text-gray-800">Pelican BioThermal™</div>
// // // // // //                   <div className="text-gray-500 text-xs mt-1">Trusted Partner</div>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //               <div className="p-8">
// // // // // //                 <h3 className="text-xl font-bold text-gray-900 mb-2">
// // // // // //                   Authorized Distributors for 
// // // // // //                   <span className="text-accent block mt-1">Pelican BioThermal™ Products</span>
// // // // // //                 </h3>
// // // // // //                 <p className="text-gray-600 text-sm leading-relaxed mb-4">
// // // // // //                   Penta Freight is proud to be an authorized distributor for Pelican BioThermal™, 
// // // // // //                   offering world-class temperature-controlled packaging solutions.
// // // // // //                 </p>
// // // // // //                 <motion.button
// // // // // //                   whileHover={{ x: 8 }}
// // // // // //                   className="text-accent font-semibold text-sm flex items-center gap-2 group"
// // // // // //                 >
// // // // // //                   Read more 
// // // // // //                   <span className="text-accent group-hover:translate-x-1 transition-transform duration-300">→</span>
// // // // // //                 </motion.button>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </motion.div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* PRODUCT SOLUTIONS SECTION - WITH SEQUENTIAL EFFECT */}
// // // // // //       <section 
// // // // // //         ref={productSectionRef}
// // // // // //         className="relative min-h-[150vh] bg-black overflow-hidden"
// // // // // //       >
// // // // // //         <div className="absolute inset-0 opacity-10 pointer-events-none">
// // // // // //           <div className="w-full h-full bg-[radial-gradient(circle_at_center,#fff_1px,transparent_1px)] bg-[length:40px_40px]" />
// // // // // //         </div>

// // // // // //         <div className="sticky top-0 h-screen flex items-center justify-center">
          
// // // // // //           {/* PRODUCT SOLUTIONS HEADING - Fades out in Stage 2 */}
// // // // // //           <motion.div
// // // // // //             animate={{ 
// // // // // //               opacity: stage === 2 ? 0 : 1,
// // // // // //               scale: stage === 2 ? 0.7 : 1,
// // // // // //               y: stage === 2 ? -80 : 0
// // // // // //             }}
// // // // // //             transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
// // // // // //             className="absolute z-20"
// // // // // //           >
// // // // // //             <h2 className="text-5xl md:text-7xl font-bold text-white text-center">
// // // // // //               Product <span className="text-accent">Solutions</span>
// // // // // //             </h2>
// // // // // //             <motion.p
// // // // // //               animate={{ opacity: stage === 2 ? 0 : 0.5 }}
// // // // // //               transition={{ duration: 0.8 }}
// // // // // //               className="text-gray-400 text-center mt-3 text-sm"
// // // // // //             >
// // // // // //               ↓ Scroll down ↓
// // // // // //             </motion.p>
// // // // // //           </motion.div>

// // // // // //           {/* CONTAINERS - Slide in during Stage 1 */}
// // // // // //           <div className="absolute inset-0 flex items-center justify-center">
// // // // // //             <div className="w-full max-w-6xl mx-auto px-6">
// // // // // //               <div className="grid lg:grid-cols-2 gap-8">
                
// // // // // //                 {/* LEFT CONTAINER - Slides from left */}
// // // // // //                 <motion.div
// // // // // //                   initial={{ x: "-120%", opacity: 0 }}
// // // // // //                   animate={{ 
// // // // // //                     x: stage >= 1 ? "0%" : "-120%",
// // // // // //                     opacity: stage >= 1 ? 1 : 0
// // // // // //                   }}
// // // // // //                   transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
// // // // // //                   className="bg-gray-900/90 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/10"
// // // // // //                 >
// // // // // //                   {/* Content appears in Stage 2 */}
// // // // // //                   <motion.div
// // // // // //                     animate={{ opacity: stage === 2 ? 1 : 0 }}
// // // // // //                     transition={{ duration: 0.8, delay: 0.4 }}
// // // // // //                   >
// // // // // //                     <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
// // // // // //                       Parcel <span className="text-accent">Shippers</span>
// // // // // //                     </h3>
// // // // // //                     <p className="text-gray-300 text-sm mb-6 leading-relaxed">
// // // // // //                       We understand the unique challenges faced by parcel shippers and offer 
// // // // // //                       tailored solutions for seamless shipping.
// // // // // //                     </p>

// // // // // //                     <div className="mb-6">
// // // // // //                       <h4 className="text-base font-bold text-accent mb-3 flex items-center gap-2">
// // // // // //                         <span className="text-xl">📦</span> Single Use
// // // // // //                       </h4>
// // // // // //                       <div className="space-y-2">
// // // // // //                         {["COOLGUARD", "COOLGUARD RM", "COOLGUARD ADVANCE"].map((item, idx) => (
// // // // // //                           <motion.div
// // // // // //                             key={idx}
// // // // // //                             initial={{ opacity: 0, x: -20 }}
// // // // // //                             animate={{ opacity: stage === 2 ? 1 : 0, x: stage === 2 ? 0 : -20 }}
// // // // // //                             transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
// // // // // //                             className="flex items-center gap-3 p-2.5 bg-gray-800/50 rounded-lg hover:bg-accent/20 transition-all duration-300 cursor-pointer group"
// // // // // //                           >
// // // // // //                             <span className="text-xl group-hover:scale-110 transition-transform">📦</span>
// // // // // //                             <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{item}</span>
// // // // // //                           </motion.div>
// // // // // //                         ))}
// // // // // //                       </div>
// // // // // //                     </div>

// // // // // //                     <div>
// // // // // //                       <h4 className="text-base font-bold text-accent mb-3 flex items-center gap-2">
// // // // // //                         <span className="text-xl">🔄</span> Reusable
// // // // // //                       </h4>
// // // // // //                       <div className="space-y-2">
// // // // // //                         {["Credo Cube"].map((item, idx) => (
// // // // // //                           <motion.div
// // // // // //                             key={idx}
// // // // // //                             initial={{ opacity: 0, x: -20 }}
// // // // // //                             animate={{ opacity: stage === 2 ? 1 : 0, x: stage === 2 ? 0 : -20 }}
// // // // // //                             transition={{ duration: 0.4, delay: 1.0 }}
// // // // // //                             className="flex items-center gap-3 p-2.5 bg-gray-800/50 rounded-lg hover:bg-accent/20 transition-all duration-300 cursor-pointer group"
// // // // // //                           >
// // // // // //                             <span className="text-xl group-hover:scale-110 transition-transform">🔄</span>
// // // // // //                             <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{item}</span>
// // // // // //                           </motion.div>
// // // // // //                         ))}
// // // // // //                       </div>
// // // // // //                     </div>
// // // // // //                   </motion.div>
// // // // // //                 </motion.div>

// // // // // //                 {/* RIGHT CONTAINER - Slides from right */}
// // // // // //                 <motion.div
// // // // // //                   initial={{ x: "120%", opacity: 0 }}
// // // // // //                   animate={{ 
// // // // // //                     x: stage >= 1 ? "0%" : "120%",
// // // // // //                     opacity: stage >= 1 ? 1 : 0
// // // // // //                   }}
// // // // // //                   transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
// // // // // //                   className="bg-gray-900/90 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/10"
// // // // // //                 >
// // // // // //                   {/* Content appears in Stage 2 */}
// // // // // //                   <motion.div
// // // // // //                     animate={{ opacity: stage === 2 ? 1 : 0 }}
// // // // // //                     transition={{ duration: 0.8, delay: 0.5 }}
// // // // // //                   >
// // // // // //                     <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
// // // // // //                       Pallet <span className="text-accent">Shippers</span>
// // // // // //                     </h3>
// // // // // //                     <p className="text-gray-300 text-sm mb-6 leading-relaxed">
// // // // // //                       We provide tailored services for pallet shippers, ensuring your cargo arrives 
// // // // // //                       safely and efficiently.
// // // // // //                     </p>

// // // // // //                     <div className="mb-6">
// // // // // //                       <h4 className="text-base font-bold text-accent mb-3 flex items-center gap-2">
// // // // // //                         <span className="text-xl">📦</span> Single Use
// // // // // //                       </h4>
// // // // // //                       <div className="space-y-2">
// // // // // //                         {["COOLPALL VERTOS", "COOLPALL VERTOS ADVANCE"].map((item, idx) => (
// // // // // //                           <motion.div
// // // // // //                             key={idx}
// // // // // //                             initial={{ opacity: 0, x: 20 }}
// // // // // //                             animate={{ opacity: stage === 2 ? 1 : 0, x: stage === 2 ? 0 : 20 }}
// // // // // //                             transition={{ duration: 0.4, delay: 0.7 + idx * 0.1 }}
// // // // // //                             className="flex items-center gap-3 p-2.5 bg-gray-800/50 rounded-lg hover:bg-accent/20 transition-all duration-300 cursor-pointer group"
// // // // // //                           >
// // // // // //                             <span className="text-xl group-hover:scale-110 transition-transform">📦</span>
// // // // // //                             <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{item}</span>
// // // // // //                           </motion.div>
// // // // // //                         ))}
// // // // // //                       </div>
// // // // // //                     </div>

// // // // // //                     <div>
// // // // // //                       <h4 className="text-base font-bold text-accent mb-3 flex items-center gap-2">
// // // // // //                         <span className="text-xl">🔄</span> Reusable
// // // // // //                       </h4>
// // // // // //                       <div className="space-y-2">
// // // // // //                         {["Credo XTEND", "CREDO CARGO"].map((item, idx) => (
// // // // // //                           <motion.div
// // // // // //                             key={idx}
// // // // // //                             initial={{ opacity: 0, x: 20 }}
// // // // // //                             animate={{ opacity: stage === 2 ? 1 : 0, x: stage === 2 ? 0 : 20 }}
// // // // // //                             transition={{ duration: 0.4, delay: 1.1 + idx * 0.1 }}
// // // // // //                             className="flex items-center gap-3 p-2.5 bg-gray-800/50 rounded-lg hover:bg-accent/20 transition-all duration-300 cursor-pointer group"
// // // // // //                           >
// // // // // //                             <span className="text-xl group-hover:scale-110 transition-transform">🔄</span>
// // // // // //                             <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{item}</span>
// // // // // //                           </motion.div>
// // // // // //                         ))}
// // // // // //                       </div>
// // // // // //                     </div>
// // // // // //                   </motion.div>
// // // // // //                 </motion.div>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* SERIES GUIDE SECTION */}
// // // // // //       <section className="py-16 bg-white">
// // // // // //         <div className="max-w-7xl mx-auto px-6">
// // // // // //           <motion.div
// // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // //             transition={{ duration: 0.8 }}
// // // // // //             viewport={{ once: true }}
// // // // // //             className="text-center mb-10"
// // // // // //           >
// // // // // //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
// // // // // //               Series Guide
// // // // // //             </h2>
// // // // // //             <p className="text-gray-600 text-base max-w-3xl mx-auto leading-relaxed">
// // // // // //               This guide outlines temperature-controlled packaging solutions designed for the safe transport 
// // // // // //               and storage of sensitive products, like vaccines and biologics, across various thermal conditions, 
// // // // // //               from refrigerated to deep-freeze.
// // // // // //             </p>
// // // // // //           </motion.div>

// // // // // //           <motion.div
// // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // //             transition={{ duration: 0.6, delay: 0.2 }}
// // // // // //             viewport={{ once: true }}
// // // // // //             className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-3xl mx-auto"
// // // // // //           >
// // // // // //             <div className="flex items-center gap-4 mb-6">
// // // // // //               <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
// // // // // //                 <span className="text-2xl">🌡️</span>
// // // // // //               </div>
// // // // // //               <h3 className="text-2xl font-bold text-gray-800">SERIES 4</h3>
// // // // // //             </div>
            
// // // // // //             <div className="space-y-4">
// // // // // //               <div>
// // // // // //                 <h4 className="text-sm font-semibold text-accent uppercase tracking-wide">Temperature Range:</h4>
// // // // // //                 <p className="text-gray-700 text-base">15°C - 25°C</p>
// // // // // //               </div>
              
// // // // // //               <div>
// // // // // //                 <h4 className="text-sm font-semibold text-accent uppercase tracking-wide">Usage & Applications:</h4>
// // // // // //                 <p className="text-gray-700 text-base">Covers a controlled room temperature range.</p>
// // // // // //               </div>
              
// // // // // //               <div>
// // // // // //                 <h4 className="text-sm font-semibold text-accent uppercase tracking-wide">Ideal For:</h4>
// // // // // //                 <p className="text-gray-700 text-base">Suitable for products that need to remain stable at standard room temperature, including certain medicines and cosmetics.</p>
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             <div className="mt-6 pt-4 border-t border-gray-200">
// // // // // //               <div className="flex gap-2">
// // // // // //                 <div className="w-2 h-2 bg-accent rounded-full" />
// // // // // //                 <div className="w-2 h-2 bg-accent/50 rounded-full" />
// // // // // //                 <div className="w-2 h-2 bg-accent/25 rounded-full" />
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </motion.div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* HORIZONTAL SCROLL BANDS SECTION */}
// // // // // //       <HorizontalScrollSection />

// // // // // //       {/* FAQ SECTION */}
// // // // // //       <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
// // // // // //         <div className="max-w-4xl mx-auto px-6">
// // // // // //           <motion.div
// // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // //             transition={{ duration: 0.8 }}
// // // // // //             viewport={{ once: true }}
// // // // // //             className="text-center mb-12"
// // // // // //           >
// // // // // //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
// // // // // //               Frequently Asked Questions
// // // // // //             </h2>
// // // // // //             <p className="text-gray-600 text-base max-w-2xl mx-auto">
// // // // // //               Explore our frequently asked questions to gain clarity about Penta Kuhl's services and features.
// // // // // //             </p>
// // // // // //           </motion.div>

// // // // // //           <div className="grid md:grid-cols-2 gap-6">
// // // // // //             {/* Left side - Main question */}
// // // // // //             <motion.div
// // // // // //               initial={{ opacity: 0, x: -30 }}
// // // // // //               whileInView={{ opacity: 1, x: 0 }}
// // // // // //               transition={{ duration: 0.6, delay: 0.2 }}
// // // // // //               viewport={{ once: true }}
// // // // // //               className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
// // // // // //             >
// // // // // //               <div className="flex items-start gap-4">
// // // // // //                 <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
// // // // // //                   <span className="text-accent text-lg font-bold">Q</span>
// // // // // //                 </div>
// // // // // //                 <div>
// // // // // //                   <h3 className="text-lg font-semibold text-gray-800 mb-2">What is Penta Kuhl?</h3>
// // // // // //                   <p className="text-gray-600 text-sm leading-relaxed">
// // // // // //                     Penta Kuhl is a specialized temperature-controlled packaging solution designed 
// // // // // //                     to maintain product integrity during transit for sensitive goods like pharmaceuticals, 
// // // // // //                     biologics, and food products.
// // // // // //                   </p>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </motion.div>

// // // // // //             {/* Right side - List of questions */}
// // // // // //             <motion.div
// // // // // //               initial={{ opacity: 0, x: 30 }}
// // // // // //               whileInView={{ opacity: 1, x: 0 }}
// // // // // //               transition={{ duration: 0.6, delay: 0.3 }}
// // // // // //               viewport={{ once: true }}
// // // // // //               className="space-y-4"
// // // // // //             >
// // // // // //               {[
// // // // // //                 "How does Penta Kuhl ensure cargo safety?",
// // // // // //                 "What types of cargo can Penta Kuhl handle?",
// // // // // //                 "Is there customer support available for Penta Kuhl users?"
// // // // // //               ].map((question, idx) => (
// // // // // //                 <motion.div
// // // // // //                   key={idx}
// // // // // //                   initial={{ opacity: 0, x: 30 }}
// // // // // //                   whileInView={{ opacity: 1, x: 0 }}
// // // // // //                   transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
// // // // // //                   viewport={{ once: true }}
// // // // // //                   className="bg-white rounded-2xl p-5 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer group"
// // // // // //                 >
// // // // // //                   <div className="flex items-center justify-between">
// // // // // //                     <div className="flex items-center gap-3">
// // // // // //                       <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
// // // // // //                         <span className="text-gray-500 group-hover:text-accent text-sm font-bold">Q</span>
// // // // // //                       </div>
// // // // // //                       <span className="text-gray-700 text-sm group-hover:text-accent transition-colors">
// // // // // //                         {question}
// // // // // //                       </span>
// // // // // //                     </div>
// // // // // //                     <span className="text-gray-400 group-hover:text-accent transition-colors">→</span>
// // // // // //                   </div>
// // // // // //                 </motion.div>
// // // // // //               ))}
// // // // // //             </motion.div>
// // // // // //           </div>

// // // // // //           {/* Protecting What Matters Most CTA */}
// // // // // //           <motion.div
// // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // //             transition={{ duration: 0.6, delay: 0.6 }}
// // // // // //             viewport={{ once: true }}
// // // // // //             className="mt-12 text-center bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 border border-accent/20"
// // // // // //           >
// // // // // //             <div className="inline-block p-3 bg-accent/20 rounded-full mb-4">
// // // // // //               <span className="text-3xl">🛡️</span>
// // // // // //             </div>
// // // // // //             <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
// // // // // //               Protecting What Matters Most
// // // // // //             </h3>
// // // // // //             <p className="text-gray-600 mb-6">
// // // // // //               Get in touch to ensure safe and temperature-stable transit for your sensitive products.
// // // // // //             </p>
// // // // // //             <motion.button
// // // // // //               whileHover={{ scale: 1.05 }}
// // // // // //               whileTap={{ scale: 0.95 }}
// // // // // //               className="bg-accent hover:bg-accent/80 text-white px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-md"
// // // // // //             >
// // // // // //               Contact Us Today →
// // // // // //             </motion.button>
// // // // // //           </motion.div>
// // // // // //         </div>
// // // // // //       </section>
// // // // // //     </>
// // // // // //   );
// // // // // // };

// // // // // // export default Pentakuhl;






// // // // // import { motion } from "framer-motion";
// // // // // import { useRef, useState, useEffect } from "react";
// // // // // import { useScroll, useTransform } from "framer-motion";

// // // // // // Horizontal Scroll Band Component
// // // // // const HorizontalScrollSection = () => {
// // // // //   const containerRef = useRef(null);
// // // // //   const { scrollYProgress } = useScroll({
// // // // //     target: containerRef,
// // // // //     offset: ["start end", "end start"],
// // // // //   });

// // // // //   const upperBandX = useTransform(scrollYProgress, [0, 1], [0, -500]);
// // // // //   const lowerBandX = useTransform(scrollYProgress, [0, 1], [0, 500]);

// // // // //   const menuItems = [
// // // // //     "Robust Load Security",
// // // // //     "Expert Logistics Support",
// // // // //     "Tailored Freight Solutions",
// // // // //     "Flexible Shipping Schedules",
// // // // //     "Volume Discounts",
// // // // //     "End-to-End Supply Chain Management",
// // // // //   ];

// // // // //   return (
// // // // //     <section 
// // // // //       ref={containerRef}
// // // // //       className="relative min-h-[100vh] bg-white overflow-hidden"
// // // // //     >
// // // // //       <div className="sticky top-0 h-screen flex flex-col items-center justify-center gap-4 px-4">
        
// // // // //         <motion.div
// // // // //           initial={{ opacity: 0, y: 20 }}
// // // // //           animate={{ opacity: 1, y: 0 }}
// // // // //           transition={{ duration: 0.6 }}
// // // // //           className="text-center"
// // // // //         >
// // // // //           <span className="text-red-600 text-xs font-semibold tracking-wider px-3 py-1 bg-red-50 rounded-full">
// // // // //             MENU
// // // // //           </span>
// // // // //         </motion.div>

// // // // //         <motion.div
// // // // //           style={{ x: upperBandX }}
// // // // //           className="w-full overflow-hidden py-3"
// // // // //         >
// // // // //           <div className="flex gap-3 whitespace-nowrap">
// // // // //             {menuItems.map((item, idx) => (
// // // // //               <div
// // // // //                 key={idx}
// // // // //                 className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-5 py-2.5 shadow-sm border border-gray-200 hover:border-red-300 hover:bg-red-50 transition-all duration-300 cursor-pointer group"
// // // // //               >
// // // // //                 <span className="w-1.5 h-1.5 bg-red-500 rounded-full group-hover:scale-150 transition-transform" />
// // // // //                 <span className="text-gray-700 text-sm group-hover:text-red-600 transition-colors">
// // // // //                   {item}
// // // // //                 </span>
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </motion.div>

// // // // //         <motion.div
// // // // //           style={{ x: lowerBandX }}
// // // // //           className="w-full overflow-hidden py-3"
// // // // //         >
// // // // //           <div className="flex gap-3 whitespace-nowrap">
// // // // //             {[...menuItems].reverse().map((item, idx) => (
// // // // //               <div
// // // // //                 key={idx}
// // // // //                 className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-5 py-2.5 shadow-sm border border-gray-200 hover:border-red-300 hover:bg-red-50 transition-all duration-300 cursor-pointer group"
// // // // //               >
// // // // //                 <span className="w-1.5 h-1.5 bg-red-500 rounded-full group-hover:scale-150 transition-transform" />
// // // // //                 <span className="text-gray-700 text-sm group-hover:text-red-600 transition-colors">
// // // // //                   {item}
// // // // //                 </span>
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </motion.div>

// // // // //         <motion.div
// // // // //           animate={{ y: [0, 8, 0] }}
// // // // //           transition={{ repeat: Infinity, duration: 1.5 }}
// // // // //           className="absolute bottom-8 text-gray-400 text-xs text-center"
// // // // //         >
// // // // //           Scroll ↓
// // // // //         </motion.div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // const Pentakuhl = () => {
// // // // //   const productSectionRef = useRef(null);
// // // // //   const [stage, setStage] = useState(0);

// // // // //   useEffect(() => {
// // // // //     const handleScroll = () => {
// // // // //       if (productSectionRef.current) {
// // // // //         const rect = productSectionRef.current.getBoundingClientRect();
// // // // //         const windowHeight = window.innerHeight;
        
// // // // //         const scrollProgress = Math.max(0, Math.min(1, 
// // // // //           (windowHeight - rect.top) / (windowHeight * 1.5)
// // // // //         ));
        
// // // // //         if (scrollProgress < 0.1) {
// // // // //           setStage(0);
// // // // //         } else if (scrollProgress >= 0.1 && scrollProgress < 0.4) {
// // // // //           setStage(1);
// // // // //         } else if (scrollProgress >= 0.4) {
// // // // //           setStage(2);
// // // // //         }
// // // // //       }
// // // // //     };

// // // // //     window.addEventListener("scroll", handleScroll);
// // // // //     handleScroll();
    
// // // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // // //   }, []);

// // // // //   return (
// // // // //     <>
// // // // //       {/* Hero Section */}
// // // // //       <section className="relative h-screen overflow-hidden">
// // // // //         <video
// // // // //           autoPlay
// // // // //           loop
// // // // //           muted
// // // // //           playsInline
// // // // //           className="absolute inset-0 w-full h-full object-cover"
// // // // //         >
// // // // //           <source src="/Industrial_Factory 1080P.mp4" type="video/mp4" />
// // // // //         </video>

// // // // //         <div className="absolute inset-0 bg-black/50 z-10" />
// // // // //         <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20 z-10" />

// // // // //         <div className="relative z-20 h-full flex items-center justify-center">
// // // // //           <div className="max-w-7xl mx-auto px-6 text-center">
// // // // //             <motion.div
// // // // //               initial={{ opacity: 0, y: 30 }}
// // // // //               animate={{ opacity: 1, y: 0 }}
// // // // //               transition={{ duration: 0.8 }}
// // // // //               className="inline-block bg-red-600/20 text-red-500 text-sm font-medium px-6 py-2 rounded-full mb-6 backdrop-blur-sm"
// // // // //             >
// // // // //               AI-Powered Logistics
// // // // //             </motion.div>

// // // // //             <motion.h1
// // // // //               initial={{ opacity: 0, y: 80 }}
// // // // //               animate={{ opacity: 1, y: 0 }}
// // // // //               transition={{ duration: 1 }}
// // // // //               className="text-6xl md:text-7xl font-bold text-white leading-tight mb-8"
// // // // //             >
// // // // //               Meet <span className="text-red-500">Pentakuhl</span>
// // // // //             </motion.h1>

// // // // //             <motion.p
// // // // //               initial={{ opacity: 0, y: 40 }}
// // // // //               animate={{ opacity: 1, y: 0 }}
// // // // //               transition={{ duration: 1, delay: 0.2 }}
// // // // //               className="text-xl text-gray-200 max-w-3xl mx-auto"
// // // // //             >
// // // // //               Your intelligent logistics assistant. Instant quotes, smart routing, and predictive insights.
// // // // //             </motion.p>

// // // // //             <motion.div
// // // // //               initial={{ opacity: 0, y: 40 }}
// // // // //               animate={{ opacity: 1, y: 0 }}
// // // // //               transition={{ duration: 1, delay: 0.4 }}
// // // // //               className="mt-10"
// // // // //             >
// // // // //               <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-2xl transition-all duration-300">
// // // // //                 Try Pentakuhl AI →
// // // // //               </button>
// // // // //             </motion.div>
// // // // //           </div>
// // // // //         </div>

// // // // //         <motion.div
// // // // //           initial={{ opacity: 0 }}
// // // // //           animate={{ opacity: 1 }}
// // // // //           transition={{ delay: 1.5, duration: 1 }}
// // // // //           className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
// // // // //         >
// // // // //           <div className="w-[35px] h-[60px] border-2 border-white/60 rounded-full flex justify-center p-2">
// // // // //             <motion.div
// // // // //               animate={{ y: [0, 18, 0] }}
// // // // //               transition={{ repeat: Infinity, duration: 1.5 }}
// // // // //               className="w-1.5 h-4 bg-white rounded-full"
// // // // //             />
// // // // //           </div>
// // // // //         </motion.div>
// // // // //       </section>

// // // // //       {/* About Penta KÜHL Section */}
// // // // //       <section className="py-20 bg-white">
// // // // //         <div className="max-w-7xl mx-auto px-6">
// // // // //           <div className="grid md:grid-cols-2 gap-12 items-center">
// // // // //             <motion.div
// // // // //               initial={{ opacity: 0, x: -50 }}
// // // // //               whileInView={{ opacity: 1, x: 0 }}
// // // // //               transition={{ duration: 0.8 }}
// // // // //               viewport={{ once: true }}
// // // // //             >
// // // // //               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
// // // // //                 ABOUT <br />
// // // // //                 <span className="text-red-600">PENTA KÜHL</span>
// // // // //               </h2>
// // // // //             </motion.div>

// // // // //             <motion.div
// // // // //               initial={{ opacity: 0, x: 50 }}
// // // // //               whileInView={{ opacity: 1, x: 0 }}
// // // // //               transition={{ duration: 0.8, delay: 0.2 }}
// // // // //               viewport={{ once: true }}
// // // // //               className="space-y-4"
// // // // //             >
// // // // //               <p className="text-gray-600 text-base leading-relaxed">
// // // // //                 At <span className="font-semibold text-red-600">Pentakuhl</span>, we specialize in providing durable, 
// // // // //                 effective packaging solutions that maintain temperature 
// // // // //                 <span className="font-semibold text-red-600"> stability </span> 
// // // // //                 during transit, 
// // // // //                 <span className="font-semibold text-red-600"> protecting </span> 
// // // // //                 your valuable products.
// // // // //               </p>
// // // // //               <p className="text-gray-600 text-base leading-relaxed">
// // // // //                 Our innovative designs cater to various industries, including pharmaceuticals, 
// // // // //                 food, and biotechnology.
// // // // //               </p>
// // // // //               <div className="w-16 h-0.5 bg-red-600 rounded-full mt-4" />
// // // // //             </motion.div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* Authorized Distributors Section */}
// // // // //       <section className="py-16 bg-gray-50">
// // // // //         <div className="max-w-7xl mx-auto px-6">
// // // // //           <motion.div
// // // // //             initial={{ opacity: 0, y: 30 }}
// // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // //             transition={{ duration: 0.6 }}
// // // // //             viewport={{ once: true }}
// // // // //             className="text-center mb-10"
// // // // //           >
// // // // //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
// // // // //               PENTA FREIGHT
// // // // //             </h2>
// // // // //             <div className="w-20 h-0.5 bg-red-600 mx-auto" />
// // // // //           </motion.div>

// // // // //           <motion.div
// // // // //             initial={{ opacity: 0, y: 30 }}
// // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // //             transition={{ duration: 0.6, delay: 0.2 }}
// // // // //             viewport={{ once: true }}
// // // // //             className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
// // // // //           >
// // // // //             <div className="grid md:grid-cols-2 gap-0">
// // // // //               <div className="bg-red-50 p-10 flex items-center justify-center">
// // // // //                 <div className="text-center">
// // // // //                   <div className="text-5xl mb-3">❄️</div>
// // // // //                   <div className="text-lg font-bold text-gray-800">Pelican BioThermal™</div>
// // // // //                   <div className="text-gray-500 text-xs mt-1">Trusted Partner</div>
// // // // //                 </div>
// // // // //               </div>
// // // // //               <div className="p-10">
// // // // //                 <h3 className="text-xl font-bold text-gray-900 mb-3">
// // // // //                   Authorized Distributors for 
// // // // //                   <span className="text-red-600 block mt-1">Pelican BioThermal™ Products</span>
// // // // //                 </h3>
// // // // //                 <p className="text-gray-500 text-sm leading-relaxed mb-5">
// // // // //                   Penta Freight is proud to be an authorized distributor for Pelican BioThermal™, 
// // // // //                   offering world-class temperature-controlled packaging solutions.
// // // // //                 </p>
// // // // //                 <motion.button
// // // // //                   whileHover={{ x: 8 }}
// // // // //                   className="text-red-600 font-semibold text-sm flex items-center gap-2 group"
// // // // //                 >
// // // // //                   Read more 
// // // // //                   <span className="text-red-600 group-hover:translate-x-1 transition-transform duration-300">→</span>
// // // // //                 </motion.button>
// // // // //               </div>
// // // // //             </div>
// // // // //           </motion.div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* PRODUCT SOLUTIONS SECTION */}
// // // // //       <section 
// // // // //         ref={productSectionRef}
// // // // //         className="relative min-h-[150vh] bg-white overflow-hidden"
// // // // //       >
// // // // //         <div className="sticky top-0 h-screen flex items-center justify-center">
          
// // // // //           {/* PRODUCT SOLUTIONS HEADING */}
// // // // //           <motion.div
// // // // //             animate={{ 
// // // // //               opacity: stage === 2 ? 0 : 1,
// // // // //               scale: stage === 2 ? 0.7 : 1,
// // // // //               y: stage === 2 ? -80 : 0
// // // // //             }}
// // // // //             transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
// // // // //             className="absolute z-20"
// // // // //           >
// // // // //             <h2 className="text-5xl md:text-7xl font-bold text-gray-900 text-center">
// // // // //               Product <span className="text-red-600">Solutions</span>
// // // // //             </h2>
// // // // //             <motion.p
// // // // //               animate={{ opacity: stage === 2 ? 0 : 0.5 }}
// // // // //               transition={{ duration: 0.8 }}
// // // // //               className="text-gray-400 text-center mt-3 text-sm"
// // // // //             >
// // // // //               Scroll to explore
// // // // //             </motion.p>
// // // // //           </motion.div>

// // // // //           {/* CONTAINERS */}
// // // // //           <div className="absolute inset-0 flex items-center justify-center">
// // // // //             <div className="w-full max-w-6xl mx-auto px-6">
// // // // //               <div className="grid lg:grid-cols-2 gap-8">
                
// // // // //                 {/* LEFT CONTAINER */}
// // // // //                 <motion.div
// // // // //                   initial={{ x: "-120%", opacity: 0 }}
// // // // //                   animate={{ 
// // // // //                     x: stage >= 1 ? "0%" : "-120%",
// // // // //                     opacity: stage >= 1 ? 1 : 0
// // // // //                   }}
// // // // //                   transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
// // // // //                   className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
// // // // //                 >
// // // // //                   <motion.div
// // // // //                     animate={{ opacity: stage === 2 ? 1 : 0 }}
// // // // //                     transition={{ duration: 0.8, delay: 0.4 }}
// // // // //                   >
// // // // //                     <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
// // // // //                       Parcel <span className="text-red-600">Shippers</span>
// // // // //                     </h3>
// // // // //                     <p className="text-gray-500 text-sm mb-6 leading-relaxed">
// // // // //                       We understand the unique challenges faced by parcel shippers and offer 
// // // // //                       tailored solutions for seamless shipping.
// // // // //                     </p>

// // // // //                     <div className="mb-6">
// // // // //                       <h4 className="text-sm font-semibold text-red-600 mb-3 uppercase tracking-wide">
// // // // //                         Single Use
// // // // //                       </h4>
// // // // //                       <div className="space-y-2">
// // // // //                         {["COOLGUARD", "COOLGUARD RM", "COOLGUARD ADVANCE"].map((item, idx) => (
// // // // //                           <motion.div
// // // // //                             key={idx}
// // // // //                             initial={{ opacity: 0, x: -20 }}
// // // // //                             animate={{ opacity: stage === 2 ? 1 : 0, x: stage === 2 ? 0 : -20 }}
// // // // //                             transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
// // // // //                             className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition-all duration-300 cursor-pointer group"
// // // // //                           >
// // // // //                             <span className="text-gray-400 group-hover:text-red-500">📦</span>
// // // // //                             <span className="text-gray-600 text-sm group-hover:text-red-600 transition-colors">{item}</span>
// // // // //                           </motion.div>
// // // // //                         ))}
// // // // //                       </div>
// // // // //                     </div>

// // // // //                     <div>
// // // // //                       <h4 className="text-sm font-semibold text-red-600 mb-3 uppercase tracking-wide">
// // // // //                         Reusable
// // // // //                       </h4>
// // // // //                       <div className="space-y-2">
// // // // //                         {["Credo Cube"].map((item, idx) => (
// // // // //                           <motion.div
// // // // //                             key={idx}
// // // // //                             initial={{ opacity: 0, x: -20 }}
// // // // //                             animate={{ opacity: stage === 2 ? 1 : 0, x: stage === 2 ? 0 : -20 }}
// // // // //                             transition={{ duration: 0.4, delay: 1.0 }}
// // // // //                             className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition-all duration-300 cursor-pointer group"
// // // // //                           >
// // // // //                             <span className="text-gray-400 group-hover:text-red-500">🔄</span>
// // // // //                             <span className="text-gray-600 text-sm group-hover:text-red-600 transition-colors">{item}</span>
// // // // //                           </motion.div>
// // // // //                         ))}
// // // // //                       </div>
// // // // //                     </div>
// // // // //                   </motion.div>
// // // // //                 </motion.div>

// // // // //                 {/* RIGHT CONTAINER */}
// // // // //                 <motion.div
// // // // //                   initial={{ x: "120%", opacity: 0 }}
// // // // //                   animate={{ 
// // // // //                     x: stage >= 1 ? "0%" : "120%",
// // // // //                     opacity: stage >= 1 ? 1 : 0
// // // // //                   }}
// // // // //                   transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
// // // // //                   className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
// // // // //                 >
// // // // //                   <motion.div
// // // // //                     animate={{ opacity: stage === 2 ? 1 : 0 }}
// // // // //                     transition={{ duration: 0.8, delay: 0.5 }}
// // // // //                   >
// // // // //                     <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
// // // // //                       Pallet <span className="text-red-600">Shippers</span>
// // // // //                     </h3>
// // // // //                     <p className="text-gray-500 text-sm mb-6 leading-relaxed">
// // // // //                       We provide tailored services for pallet shippers, ensuring your cargo arrives 
// // // // //                       safely and efficiently.
// // // // //                     </p>

// // // // //                     <div className="mb-6">
// // // // //                       <h4 className="text-sm font-semibold text-red-600 mb-3 uppercase tracking-wide">
// // // // //                         Single Use
// // // // //                       </h4>
// // // // //                       <div className="space-y-2">
// // // // //                         {["COOLPALL VERTOS", "COOLPALL VERTOS ADVANCE"].map((item, idx) => (
// // // // //                           <motion.div
// // // // //                             key={idx}
// // // // //                             initial={{ opacity: 0, x: 20 }}
// // // // //                             animate={{ opacity: stage === 2 ? 1 : 0, x: stage === 2 ? 0 : 20 }}
// // // // //                             transition={{ duration: 0.4, delay: 0.7 + idx * 0.1 }}
// // // // //                             className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition-all duration-300 cursor-pointer group"
// // // // //                           >
// // // // //                             <span className="text-gray-400 group-hover:text-red-500">📦</span>
// // // // //                             <span className="text-gray-600 text-sm group-hover:text-red-600 transition-colors">{item}</span>
// // // // //                           </motion.div>
// // // // //                         ))}
// // // // //                       </div>
// // // // //                     </div>

// // // // //                     <div>
// // // // //                       <h4 className="text-sm font-semibold text-red-600 mb-3 uppercase tracking-wide">
// // // // //                         Reusable
// // // // //                       </h4>
// // // // //                       <div className="space-y-2">
// // // // //                         {["Credo XTEND", "CREDO CARGO"].map((item, idx) => (
// // // // //                           <motion.div
// // // // //                             key={idx}
// // // // //                             initial={{ opacity: 0, x: 20 }}
// // // // //                             animate={{ opacity: stage === 2 ? 1 : 0, x: stage === 2 ? 0 : 20 }}
// // // // //                             transition={{ duration: 0.4, delay: 1.1 + idx * 0.1 }}
// // // // //                             className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition-all duration-300 cursor-pointer group"
// // // // //                           >
// // // // //                             <span className="text-gray-400 group-hover:text-red-500">🔄</span>
// // // // //                             <span className="text-gray-600 text-sm group-hover:text-red-600 transition-colors">{item}</span>
// // // // //                           </motion.div>
// // // // //                         ))}
// // // // //                       </div>
// // // // //                     </div>
// // // // //                   </motion.div>
// // // // //                 </motion.div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* SERIES GUIDE SECTION */}
// // // // //       <section className="py-20 bg-gray-50">
// // // // //         <div className="max-w-7xl mx-auto px-6">
// // // // //           <motion.div
// // // // //             initial={{ opacity: 0, y: 30 }}
// // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // //             transition={{ duration: 0.8 }}
// // // // //             viewport={{ once: true }}
// // // // //             className="text-center mb-12"
// // // // //           >
// // // // //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
// // // // //               Series Guide
// // // // //             </h2>
// // // // //             <p className="text-gray-500 text-base max-w-3xl mx-auto leading-relaxed">
// // // // //               This guide outlines temperature-controlled packaging solutions designed for the safe transport 
// // // // //               and storage of sensitive products, like vaccines and biologics, across various thermal conditions, 
// // // // //               from refrigerated to deep-freeze.
// // // // //             </p>
// // // // //           </motion.div>

// // // // //           <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
// // // // //             {[
// // // // //               { series: "SERIES 4", temp: "15°C - 25°C", usage: "Controlled room temperature", ideal: "Medicines, cosmetics" },
// // // // //               { series: "SERIES 20M", temp: "-20°C", usage: "Frozen products", ideal: "Vaccines, biologics" },
// // // // //               { series: "SERIES 50M", temp: "-50°C", usage: "Extreme cold chain", ideal: "Advanced biologics, special pharmaceuticals" }
// // // // //             ].map((item, idx) => (
// // // // //               <motion.div
// // // // //                 key={idx}
// // // // //                 initial={{ opacity: 0, y: 30 }}
// // // // //                 whileInView={{ opacity: 1, y: 0 }}
// // // // //                 transition={{ duration: 0.5, delay: idx * 0.1 }}
// // // // //                 viewport={{ once: true }}
// // // // //                 className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
// // // // //               >
// // // // //                 <div className="flex items-center gap-3 mb-4">
// // // // //                   <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
// // // // //                     <span className="text-red-600 text-xl">🌡️</span>
// // // // //                   </div>
// // // // //                   <h3 className="text-xl font-bold text-gray-800">{item.series}</h3>
// // // // //                 </div>
// // // // //                 <div className="space-y-3">
// // // // //                   <div>
// // // // //                     <h4 className="text-xs font-semibold text-red-600 uppercase tracking-wide">Temperature Range:</h4>
// // // // //                     <p className="text-gray-600 text-sm">{item.temp}</p>
// // // // //                   </div>
// // // // //                   <div>
// // // // //                     <h4 className="text-xs font-semibold text-red-600 uppercase tracking-wide">Usage & Applications:</h4>
// // // // //                     <p className="text-gray-600 text-sm">{item.usage}</p>
// // // // //                   </div>
// // // // //                   <div>
// // // // //                     <h4 className="text-xs font-semibold text-red-600 uppercase tracking-wide">Ideal For:</h4>
// // // // //                     <p className="text-gray-600 text-sm">{item.ideal}</p>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </motion.div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* HORIZONTAL SCROLL BANDS SECTION */}
// // // // //       <HorizontalScrollSection />

// // // // //       {/* FAQ SECTION */}
// // // // //       <section className="py-20 bg-white">
// // // // //         <div className="max-w-5xl mx-auto px-6">
// // // // //           <motion.div
// // // // //             initial={{ opacity: 0, y: 30 }}
// // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // //             transition={{ duration: 0.8 }}
// // // // //             viewport={{ once: true }}
// // // // //             className="text-center mb-12"
// // // // //           >
// // // // //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
// // // // //               Frequently Asked Questions
// // // // //             </h2>
// // // // //             <p className="text-gray-500 text-base max-w-2xl mx-auto">
// // // // //               Explore our frequently asked questions to gain clarity about Penta Kuhl's services and features.
// // // // //             </p>
// // // // //           </motion.div>

// // // // //           <div className="space-y-4 max-w-3xl mx-auto">
// // // // //             {[
// // // // //               {
// // // // //                 q: "What is Penta Kuhl?",
// // // // //                 a: "Penta Kuhl is a specialized temperature-controlled packaging solution designed to maintain product integrity during transit for sensitive goods like pharmaceuticals, biologics, and food products."
// // // // //               },
// // // // //               {
// // // // //                 q: "How does Penta Kuhl ensure cargo safety?",
// // // // //                 a: "We use advanced temperature monitoring systems, insulated packaging materials, and real-time tracking to ensure your cargo remains within the required temperature range throughout transit."
// // // // //               },
// // // // //               {
// // // // //                 q: "What types of cargo can Penta Kuhl handle?",
// // // // //                 a: "Penta Kuhl is equipped to manage various cargo types, including perishable goods, pharmaceuticals, biologics, chemicals, and temperature-sensitive materials."
// // // // //               },
// // // // //               {
// // // // //                 q: "Is there customer support available for Penta Kuhl users?",
// // // // //                 a: "Yes, we offer 24/7 customer support to assist with any questions or issues regarding your temperature-controlled shipments."
// // // // //               }
// // // // //             ].map((faq, idx) => (
// // // // //               <motion.div
// // // // //                 key={idx}
// // // // //                 initial={{ opacity: 0, y: 20 }}
// // // // //                 whileInView={{ opacity: 1, y: 0 }}
// // // // //                 transition={{ duration: 0.5, delay: idx * 0.1 }}
// // // // //                 viewport={{ once: true }}
// // // // //                 className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
// // // // //               >
// // // // //                 <div className="flex items-start gap-4">
// // // // //                   <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
// // // // //                     <span className="text-red-600 text-sm font-bold">Q</span>
// // // // //                   </div>
// // // // //                   <div>
// // // // //                     <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.q}</h3>
// // // // //                     <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </motion.div>
// // // // //             ))}
// // // // //           </div>

// // // // //           {/* Protecting What Matters Most CTA */}
// // // // //           <motion.div
// // // // //             initial={{ opacity: 0, y: 30 }}
// // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // //             transition={{ duration: 0.6, delay: 0.5 }}
// // // // //             viewport={{ once: true }}
// // // // //             className="mt-12 text-center bg-red-50 rounded-2xl p-10 border border-red-100"
// // // // //           >
// // // // //             <div className="inline-block p-3 bg-red-100 rounded-full mb-4">
// // // // //               <span className="text-3xl">🛡️</span>
// // // // //             </div>
// // // // //             <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
// // // // //               Protecting What Matters Most
// // // // //             </h3>
// // // // //             <p className="text-gray-500 mb-6">
// // // // //               Get in touch to ensure safe and temperature-stable transit for your sensitive products.
// // // // //             </p>
// // // // //             <motion.button
// // // // //               whileHover={{ scale: 1.05 }}
// // // // //               whileTap={{ scale: 0.95 }}
// // // // //               className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-md"
// // // // //             >
// // // // //               Contact Us Today →
// // // // //             </motion.button>
// // // // //           </motion.div>
// // // // //         </div>
// // // // //       </section>
// // // // //     </>
// // // // //   );
// // // // // };

// // // // // export default Pentakuhl;




// // // // import { motion } from "framer-motion";
// // // // import { useRef, useState, useEffect } from "react";
// // // // import { useScroll, useTransform } from "framer-motion";

// // // // // Horizontal Scroll Band Component
// // // // const HorizontalScrollSection = () => {
// // // //   const containerRef = useRef(null);
// // // //   const { scrollYProgress } = useScroll({
// // // //     target: containerRef,
// // // //     offset: ["start end", "end start"],
// // // //   });

// // // //   const upperBandX = useTransform(scrollYProgress, [0, 1], [0, -500]);
// // // //   const lowerBandX = useTransform(scrollYProgress, [0, 1], [0, 500]);

// // // //   const menuItems = [
// // // //     "Robust Load Security",
// // // //     "Expert Logistics Support",
// // // //     "Tailored Freight Solutions",
// // // //     "Flexible Shipping Schedules",
// // // //     "Volume Discounts",
// // // //     "End-to-End Supply Chain Management",
// // // //   ];

// // // //   return (
// // // //     <section 
// // // //       ref={containerRef}
// // // //       className="relative min-h-[100vh] bg-white overflow-hidden"
// // // //     >
// // // //       <div className="sticky top-0 h-screen flex flex-col items-center justify-center gap-4 px-4">
        
// // // //         <motion.div
// // // //           initial={{ opacity: 0, y: 20 }}
// // // //           animate={{ opacity: 1, y: 0 }}
// // // //           transition={{ duration: 0.6 }}
// // // //           className="text-center"
// // // //         >
// // // //           <span className="text-red-600 text-xs font-semibold tracking-wider px-3 py-1 bg-red-50 rounded-full">
// // // //             MENU
// // // //           </span>
// // // //         </motion.div>

// // // //         <motion.div
// // // //           style={{ x: upperBandX }}
// // // //           className="w-full overflow-hidden py-3"
// // // //         >
// // // //           <div className="flex gap-3 whitespace-nowrap">
// // // //             {menuItems.map((item, idx) => (
// // // //               <div
// // // //                 key={idx}
// // // //                 className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-5 py-2.5 shadow-sm border border-gray-200 hover:border-red-300 hover:bg-red-50 transition-all duration-300 cursor-pointer group"
// // // //               >
// // // //                 <span className="w-1.5 h-1.5 bg-red-500 rounded-full group-hover:scale-150 transition-transform" />
// // // //                 <span className="text-gray-700 text-sm group-hover:text-red-600 transition-colors">
// // // //                   {item}
// // // //                 </span>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </motion.div>

// // // //         <motion.div
// // // //           style={{ x: lowerBandX }}
// // // //           className="w-full overflow-hidden py-3"
// // // //         >
// // // //           <div className="flex gap-3 whitespace-nowrap">
// // // //             {[...menuItems].reverse().map((item, idx) => (
// // // //               <div
// // // //                 key={idx}
// // // //                 className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-5 py-2.5 shadow-sm border border-gray-200 hover:border-red-300 hover:bg-red-50 transition-all duration-300 cursor-pointer group"
// // // //               >
// // // //                 <span className="w-1.5 h-1.5 bg-red-500 rounded-full group-hover:scale-150 transition-transform" />
// // // //                 <span className="text-gray-700 text-sm group-hover:text-red-600 transition-colors">
// // // //                   {item}
// // // //                 </span>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </motion.div>

// // // //         <motion.div
// // // //           animate={{ y: [0, 8, 0] }}
// // // //           transition={{ repeat: Infinity, duration: 1.5 }}
// // // //           className="absolute bottom-8 text-gray-400 text-xs text-center"
// // // //         >
// // // //           Scroll ↓
// // // //         </motion.div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // // Accordion Item Component
// // // // const AccordionItem = ({ question, answer, isOpen, onClick }) => {
// // // //   return (
// // // //     <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
// // // //       <button
// // // //         onClick={onClick}
// // // //         className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
// // // //       >
// // // //         <span className="text-gray-800 font-medium text-base">{question}</span>
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
// // // //         <div className="p-5 pt-0 border-t border-gray-100">
// // // //           <p className="text-gray-500 text-sm leading-relaxed">{answer}</p>
// // // //         </div>
// // // //       </motion.div>
// // // //     </div>
// // // //   );
// // // // };

// // // // const Pentakuhl = () => {
// // // //   const productSectionRef = useRef(null);
// // // //   const [stage, setStage] = useState(0);
// // // //   const [openFaqIndex, setOpenFaqIndex] = useState(null);

// // // //   useEffect(() => {
// // // //     const handleScroll = () => {
// // // //       if (productSectionRef.current) {
// // // //         const rect = productSectionRef.current.getBoundingClientRect();
// // // //         const windowHeight = window.innerHeight;
        
// // // //         const scrollProgress = Math.max(0, Math.min(1, 
// // // //           (windowHeight - rect.top) / (windowHeight * 1.5)
// // // //         ));
        
// // // //         if (scrollProgress < 0.1) {
// // // //           setStage(0);
// // // //         } else if (scrollProgress >= 0.1 && scrollProgress < 0.4) {
// // // //           setStage(1);
// // // //         } else if (scrollProgress >= 0.4) {
// // // //           setStage(2);
// // // //         }
// // // //       }
// // // //     };

// // // //     window.addEventListener("scroll", handleScroll);
// // // //     handleScroll();
    
// // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // //   }, []);

// // // //   const faqs = [
// // // //     {
// // // //       question: "What is Penta Kuhl?",
// // // //       answer: "Penta Kuhl is a specialized temperature-controlled packaging solution designed to maintain product integrity during transit for sensitive goods like pharmaceuticals, biologics, and food products. Our advanced technology ensures your products remain within the required temperature range throughout the shipping process."
// // // //     },
// // // //     {
// // // //       question: "How does Penta Kuhl ensure cargo safety?",
// // // //       answer: "We use advanced temperature monitoring systems, insulated packaging materials, GPS tracking, and real-time alerts to ensure your cargo remains within the required temperature range throughout transit. Our multi-layer protection system includes thermal barriers, phase change materials, and continuous data logging."
// // // //     },
// // // //     {
// // // //       question: "What types of cargo can Penta Kuhl handle?",
// // // //       answer: "Penta Kuhl is equipped to manage various cargo types, including perishable goods, heavy equipment, pharmaceuticals, biologics, chemicals, food products, and any temperature-sensitive materials requiring controlled environments from -50°C to +25°C."
// // // //     },
// // // //     {
// // // //       question: "Is there customer support available for Penta Kuhl users?",
// // // //       answer: "Yes, we offer 24/7 customer support to assist with any questions or issues regarding your temperature-controlled shipments. Our dedicated team is available via phone, email, and live chat to provide real-time assistance and monitoring."
// // // //     }
// // // //   ];

// // // //   return (
// // // //     <>
// // // //       {/* Hero Section */}
// // // //       <section className="relative h-screen overflow-hidden">
// // // //         <video
// // // //           autoPlay
// // // //           loop
// // // //           muted
// // // //           playsInline
// // // //           className="absolute inset-0 w-full h-full object-cover"
// // // //         >
// // // //           <source src="/Industrial_Factory 1080P.mp4" type="video/mp4" />
// // // //         </video>

// // // //         <div className="absolute inset-0 bg-black/50 z-10" />
// // // //         <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20 z-10" />

// // // //         <div className="relative z-20 h-full flex items-center justify-center">
// // // //           <div className="max-w-7xl mx-auto px-6 text-center">
// // // //             <motion.div
// // // //               initial={{ opacity: 0, y: 30 }}
// // // //               animate={{ opacity: 1, y: 0 }}
// // // //               transition={{ duration: 0.8 }}
// // // //               className="inline-block bg-red-600/20 text-red-500 text-sm font-medium px-6 py-2 rounded-full mb-6 backdrop-blur-sm"
// // // //             >
// // // //               AI-Powered Logistics
// // // //             </motion.div>

// // // //             <motion.h1
// // // //               initial={{ opacity: 0, y: 80 }}
// // // //               animate={{ opacity: 1, y: 0 }}
// // // //               transition={{ duration: 1 }}
// // // //               className="text-6xl md:text-7xl font-bold text-white leading-tight mb-8"
// // // //             >
// // // //               Meet <span className="text-red-500">Pentakuhl</span>
// // // //             </motion.h1>

// // // //             <motion.p
// // // //               initial={{ opacity: 0, y: 40 }}
// // // //               animate={{ opacity: 1, y: 0 }}
// // // //               transition={{ duration: 1, delay: 0.2 }}
// // // //               className="text-xl text-gray-200 max-w-3xl mx-auto"
// // // //             >
// // // //               Your intelligent logistics assistant. Instant quotes, smart routing, and predictive insights.
// // // //             </motion.p>

// // // //             <motion.div
// // // //               initial={{ opacity: 0, y: 40 }}
// // // //               animate={{ opacity: 1, y: 0 }}
// // // //               transition={{ duration: 1, delay: 0.4 }}
// // // //               className="mt-10"
// // // //             >
// // // //               <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-2xl transition-all duration-300">
// // // //                 Try Pentakuhl AI →
// // // //               </button>
// // // //             </motion.div>
// // // //           </div>
// // // //         </div>

// // // //         <motion.div
// // // //           initial={{ opacity: 0 }}
// // // //           animate={{ opacity: 1 }}
// // // //           transition={{ delay: 1.5, duration: 1 }}
// // // //           className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
// // // //         >
// // // //           <div className="w-[35px] h-[60px] border-2 border-white/60 rounded-full flex justify-center p-2">
// // // //             <motion.div
// // // //               animate={{ y: [0, 18, 0] }}
// // // //               transition={{ repeat: Infinity, duration: 1.5 }}
// // // //               className="w-1.5 h-4 bg-white rounded-full"
// // // //             />
// // // //           </div>
// // // //         </motion.div>
// // // //       </section>

// // // //       {/* About Penta KÜHL Section */}
// // // //       <section className="py-20 bg-white">
// // // //         <div className="max-w-7xl mx-auto px-6">
// // // //           <div className="grid md:grid-cols-2 gap-12 items-center">
// // // //             <motion.div
// // // //               initial={{ opacity: 0, x: -50 }}
// // // //               whileInView={{ opacity: 1, x: 0 }}
// // // //               transition={{ duration: 0.8 }}
// // // //               viewport={{ once: true }}
// // // //             >
// // // //               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
// // // //                 ABOUT <br />
// // // //                 <span className="text-red-600">PENTA KÜHL</span>
// // // //               </h2>
// // // //             </motion.div>

// // // //             <motion.div
// // // //               initial={{ opacity: 0, x: 50 }}
// // // //               whileInView={{ opacity: 1, x: 0 }}
// // // //               transition={{ duration: 0.8, delay: 0.2 }}
// // // //               viewport={{ once: true }}
// // // //               className="space-y-4"
// // // //             >
// // // //               <p className="text-gray-600 text-base leading-relaxed">
// // // //                 At <span className="font-semibold text-red-600">Pentakuhl</span>, we specialize in providing durable, 
// // // //                 effective packaging solutions that maintain temperature 
// // // //                 <span className="font-semibold text-red-600"> stability </span> 
// // // //                 during transit, 
// // // //                 <span className="font-semibold text-red-600"> protecting </span> 
// // // //                 your valuable products.
// // // //               </p>
// // // //               <p className="text-gray-600 text-base leading-relaxed">
// // // //                 Our innovative designs cater to various industries, including pharmaceuticals, 
// // // //                 food, and biotechnology.
// // // //               </p>
// // // //               <div className="w-16 h-0.5 bg-red-600 rounded-full mt-4" />
// // // //             </motion.div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* Authorized Distributors Section */}
// // // //       <section className="py-16 bg-gray-50">
// // // //         <div className="max-w-7xl mx-auto px-6">
// // // //           <motion.div
// // // //             initial={{ opacity: 0, y: 30 }}
// // // //             whileInView={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 0.6 }}
// // // //             viewport={{ once: true }}
// // // //             className="text-center mb-10"
// // // //           >
// // // //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
// // // //               PENTA FREIGHT
// // // //             </h2>
// // // //             <div className="w-20 h-0.5 bg-red-600 mx-auto" />
// // // //           </motion.div>

// // // //           <motion.div
// // // //             initial={{ opacity: 0, y: 30 }}
// // // //             whileInView={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 0.6, delay: 0.2 }}
// // // //             viewport={{ once: true }}
// // // //             className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
// // // //           >
// // // //             <div className="grid md:grid-cols-2 gap-0">
// // // //               <div className="bg-red-50 p-10 flex items-center justify-center">
// // // //                 <div className="text-center">
// // // //                   <div className="text-5xl mb-3">❄️</div>
// // // //                   <div className="text-lg font-bold text-gray-800">Pelican BioThermal™</div>
// // // //                   <div className="text-gray-500 text-xs mt-1">Trusted Partner</div>
// // // //                 </div>
// // // //               </div>
// // // //               <div className="p-10">
// // // //                 <h3 className="text-xl font-bold text-gray-900 mb-3">
// // // //                   Authorized Distributors for 
// // // //                   <span className="text-red-600 block mt-1">Pelican BioThermal™ Products</span>
// // // //                 </h3>
// // // //                 <p className="text-gray-500 text-sm leading-relaxed mb-5">
// // // //                   Penta Freight is proud to be an authorized distributor for Pelican BioThermal™, 
// // // //                   offering world-class temperature-controlled packaging solutions.
// // // //                 </p>
// // // //                 <motion.button
// // // //                   whileHover={{ x: 8 }}
// // // //                   className="text-red-600 font-semibold text-sm flex items-center gap-2 group"
// // // //                 >
// // // //                   Read more 
// // // //                   <span className="text-red-600 group-hover:translate-x-1 transition-transform duration-300">→</span>
// // // //                 </motion.button>
// // // //               </div>
// // // //             </div>
// // // //           </motion.div>
// // // //         </div>
// // // //       </section>

// // // //       {/* PRODUCT SOLUTIONS SECTION */}
// // // //       <section 
// // // //         ref={productSectionRef}
// // // //         className="relative min-h-[150vh] bg-white overflow-hidden"
// // // //       >
// // // //         <div className="sticky top-0 h-screen flex items-center justify-center">
          
// // // //           <motion.div
// // // //             animate={{ 
// // // //               opacity: stage === 2 ? 0 : 1,
// // // //               scale: stage === 2 ? 0.7 : 1,
// // // //               y: stage === 2 ? -80 : 0
// // // //             }}
// // // //             transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
// // // //             className="absolute z-20"
// // // //           >
// // // //             <h2 className="text-5xl md:text-7xl font-bold text-gray-900 text-center">
// // // //               Product <span className="text-red-600">Solutions</span>
// // // //             </h2>
// // // //             <motion.p
// // // //               animate={{ opacity: stage === 2 ? 0 : 0.5 }}
// // // //               transition={{ duration: 0.8 }}
// // // //               className="text-gray-400 text-center mt-3 text-sm"
// // // //             >
// // // //               Scroll to explore
// // // //             </motion.p>
// // // //           </motion.div>

// // // //           <div className="absolute inset-0 flex items-center justify-center">
// // // //             <div className="w-full max-w-6xl mx-auto px-6">
// // // //               <div className="grid lg:grid-cols-2 gap-8">
                
// // // //                 <motion.div
// // // //                   initial={{ x: "-120%", opacity: 0 }}
// // // //                   animate={{ 
// // // //                     x: stage >= 1 ? "0%" : "-120%",
// // // //                     opacity: stage >= 1 ? 1 : 0
// // // //                   }}
// // // //                   transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
// // // //                   className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
// // // //                 >
// // // //                   <motion.div
// // // //                     animate={{ opacity: stage === 2 ? 1 : 0 }}
// // // //                     transition={{ duration: 0.8, delay: 0.4 }}
// // // //                   >
// // // //                     <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
// // // //                       Parcel <span className="text-red-600">Shippers</span>
// // // //                     </h3>
// // // //                     <p className="text-gray-500 text-sm mb-6 leading-relaxed">
// // // //                       We understand the unique challenges faced by parcel shippers and offer 
// // // //                       tailored solutions for seamless shipping.
// // // //                     </p>

// // // //                     <div className="mb-6">
// // // //                       <h4 className="text-sm font-semibold text-red-600 mb-3 uppercase tracking-wide">
// // // //                         Single Use
// // // //                       </h4>
// // // //                       <div className="space-y-2">
// // // //                         {["COOLGUARD", "COOLGUARD RM", "COOLGUARD ADVANCE"].map((item, idx) => (
// // // //                           <motion.div
// // // //                             key={idx}
// // // //                             initial={{ opacity: 0, x: -20 }}
// // // //                             animate={{ opacity: stage === 2 ? 1 : 0, x: stage === 2 ? 0 : -20 }}
// // // //                             transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
// // // //                             className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition-all duration-300 cursor-pointer group"
// // // //                           >
// // // //                             <span className="text-gray-400 group-hover:text-red-500">📦</span>
// // // //                             <span className="text-gray-600 text-sm group-hover:text-red-600 transition-colors">{item}</span>
// // // //                           </motion.div>
// // // //                         ))}
// // // //                       </div>
// // // //                     </div>

// // // //                     <div>
// // // //                       <h4 className="text-sm font-semibold text-red-600 mb-3 uppercase tracking-wide">
// // // //                         Reusable
// // // //                       </h4>
// // // //                       <div className="space-y-2">
// // // //                         {["Credo Cube"].map((item, idx) => (
// // // //                           <motion.div
// // // //                             key={idx}
// // // //                             initial={{ opacity: 0, x: -20 }}
// // // //                             animate={{ opacity: stage === 2 ? 1 : 0, x: stage === 2 ? 0 : -20 }}
// // // //                             transition={{ duration: 0.4, delay: 1.0 }}
// // // //                             className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition-all duration-300 cursor-pointer group"
// // // //                           >
// // // //                             <span className="text-gray-400 group-hover:text-red-500">🔄</span>
// // // //                             <span className="text-gray-600 text-sm group-hover:text-red-600 transition-colors">{item}</span>
// // // //                           </motion.div>
// // // //                         ))}
// // // //                       </div>
// // // //                     </div>
// // // //                   </motion.div>
// // // //                 </motion.div>

// // // //                 <motion.div
// // // //                   initial={{ x: "120%", opacity: 0 }}
// // // //                   animate={{ 
// // // //                     x: stage >= 1 ? "0%" : "120%",
// // // //                     opacity: stage >= 1 ? 1 : 0
// // // //                   }}
// // // //                   transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
// // // //                   className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
// // // //                 >
// // // //                   <motion.div
// // // //                     animate={{ opacity: stage === 2 ? 1 : 0 }}
// // // //                     transition={{ duration: 0.8, delay: 0.5 }}
// // // //                   >
// // // //                     <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
// // // //                       Pallet <span className="text-red-600">Shippers</span>
// // // //                     </h3>
// // // //                     <p className="text-gray-500 text-sm mb-6 leading-relaxed">
// // // //                       We provide tailored services for pallet shippers, ensuring your cargo arrives 
// // // //                       safely and efficiently.
// // // //                     </p>

// // // //                     <div className="mb-6">
// // // //                       <h4 className="text-sm font-semibold text-red-600 mb-3 uppercase tracking-wide">
// // // //                         Single Use
// // // //                       </h4>
// // // //                       <div className="space-y-2">
// // // //                         {["COOLPALL VERTOS", "COOLPALL VERTOS ADVANCE"].map((item, idx) => (
// // // //                           <motion.div
// // // //                             key={idx}
// // // //                             initial={{ opacity: 0, x: 20 }}
// // // //                             animate={{ opacity: stage === 2 ? 1 : 0, x: stage === 2 ? 0 : 20 }}
// // // //                             transition={{ duration: 0.4, delay: 0.7 + idx * 0.1 }}
// // // //                             className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition-all duration-300 cursor-pointer group"
// // // //                           >
// // // //                             <span className="text-gray-400 group-hover:text-red-500">📦</span>
// // // //                             <span className="text-gray-600 text-sm group-hover:text-red-600 transition-colors">{item}</span>
// // // //                           </motion.div>
// // // //                         ))}
// // // //                       </div>
// // // //                     </div>

// // // //                     <div>
// // // //                       <h4 className="text-sm font-semibold text-red-600 mb-3 uppercase tracking-wide">
// // // //                         Reusable
// // // //                       </h4>
// // // //                       <div className="space-y-2">
// // // //                         {["Credo XTEND", "CREDO CARGO"].map((item, idx) => (
// // // //                           <motion.div
// // // //                             key={idx}
// // // //                             initial={{ opacity: 0, x: 20 }}
// // // //                             animate={{ opacity: stage === 2 ? 1 : 0, x: stage === 2 ? 0 : 20 }}
// // // //                             transition={{ duration: 0.4, delay: 1.1 + idx * 0.1 }}
// // // //                             className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition-all duration-300 cursor-pointer group"
// // // //                           >
// // // //                             <span className="text-gray-400 group-hover:text-red-500">🔄</span>
// // // //                             <span className="text-gray-600 text-sm group-hover:text-red-600 transition-colors">{item}</span>
// // // //                           </motion.div>
// // // //                         ))}
// // // //                       </div>
// // // //                     </div>
// // // //                   </motion.div>
// // // //                 </motion.div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* SERIES GUIDE SECTION */}
// // // //       <section className="py-20 bg-gray-50">
// // // //         <div className="max-w-7xl mx-auto px-6">
// // // //           <motion.div
// // // //             initial={{ opacity: 0, y: 30 }}
// // // //             whileInView={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 0.8 }}
// // // //             viewport={{ once: true }}
// // // //             className="text-center mb-12"
// // // //           >
// // // //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
// // // //               Series Guide
// // // //             </h2>
// // // //             <p className="text-gray-500 text-base max-w-3xl mx-auto leading-relaxed">
// // // //               This guide outlines temperature-controlled packaging solutions designed for the safe transport 
// // // //               and storage of sensitive products, like vaccines and biologics, across various thermal conditions, 
// // // //               from refrigerated to deep-freeze.
// // // //             </p>
// // // //           </motion.div>

// // // //           <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
// // // //             {[
// // // //               { series: "SERIES 4", temp: "15°C - 25°C", usage: "Controlled room temperature", ideal: "Medicines, cosmetics" },
// // // //               { series: "SERIES 20M", temp: "-20°C", usage: "Frozen products", ideal: "Vaccines, biologics" },
// // // //               { series: "SERIES 50M", temp: "-50°C", usage: "Extreme cold chain", ideal: "Advanced biologics, special pharmaceuticals" }
// // // //             ].map((item, idx) => (
// // // //               <motion.div
// // // //                 key={idx}
// // // //                 initial={{ opacity: 0, y: 30 }}
// // // //                 whileInView={{ opacity: 1, y: 0 }}
// // // //                 transition={{ duration: 0.5, delay: idx * 0.1 }}
// // // //                 viewport={{ once: true }}
// // // //                 className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
// // // //               >
// // // //                 <div className="flex items-center gap-3 mb-4">
// // // //                   <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
// // // //                     <span className="text-red-600 text-xl">🌡️</span>
// // // //                   </div>
// // // //                   <h3 className="text-xl font-bold text-gray-800">{item.series}</h3>
// // // //                 </div>
// // // //                 <div className="space-y-3">
// // // //                   <div>
// // // //                     <h4 className="text-xs font-semibold text-red-600 uppercase tracking-wide">Temperature Range:</h4>
// // // //                     <p className="text-gray-600 text-sm">{item.temp}</p>
// // // //                   </div>
// // // //                   <div>
// // // //                     <h4 className="text-xs font-semibold text-red-600 uppercase tracking-wide">Usage & Applications:</h4>
// // // //                     <p className="text-gray-600 text-sm">{item.usage}</p>
// // // //                   </div>
// // // //                   <div>
// // // //                     <h4 className="text-xs font-semibold text-red-600 uppercase tracking-wide">Ideal For:</h4>
// // // //                     <p className="text-gray-600 text-sm">{item.ideal}</p>
// // // //                   </div>
// // // //                 </div>
// // // //               </motion.div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* HORIZONTAL SCROLL BANDS SECTION */}
// // // //       <HorizontalScrollSection />

// // // //       {/* FAQ SECTION - SPLIT LAYOUT WITH ACCORDION */}
// // // //       <section className="py-20 bg-white">
// // // //         <div className="max-w-7xl mx-auto px-6">
// // // //           <div className="grid lg:grid-cols-2 gap-12">
            
// // // //             {/* LEFT SIDE - Title and Description */}
// // // //             <motion.div
// // // //               initial={{ opacity: 0, x: -30 }}
// // // //               whileInView={{ opacity: 1, x: 0 }}
// // // //               transition={{ duration: 0.6 }}
// // // //               viewport={{ once: true }}
// // // //               className="sticky top-32 self-start"
// // // //             >
// // // //               <div className="bg-red-50 rounded-2xl p-8">
// // // //                 <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
// // // //                   <span className="text-red-600 text-xl">❓</span>
// // // //                 </div>
// // // //                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
// // // //                   Frequently Asked <br />
// // // //                   <span className="text-red-600">Questions</span>
// // // //                 </h2>
// // // //                 <div className="w-16 h-0.5 bg-red-600 mb-6" />
// // // //                 <p className="text-gray-500 text-base leading-relaxed">
// // // //                   Explore our frequently asked questions to gain clarity about Penta Kuhl's services and features.
// // // //                 </p>
                
// // // //                 {/* Contact Card */}
// // // //                 <div className="mt-8 p-5 bg-white rounded-xl border border-gray-100">
// // // //                   <div className="flex items-center gap-3 mb-3">
// // // //                     <span className="text-2xl">🛡️</span>
// // // //                     <span className="text-sm font-semibold text-red-600">Need more help?</span>
// // // //                   </div>
// // // //                   <p className="text-gray-500 text-sm">
// // // //                     Can't find what you're looking for? Contact our support team.
// // // //                   </p>
// // // //                   <button className="mt-4 text-red-600 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
// // // //                     Contact Support <span>→</span>
// // // //                   </button>
// // // //                 </div>
// // // //               </div>
// // // //             </motion.div>

// // // //             {/* RIGHT SIDE - Accordion Dropdowns */}
// // // //             <motion.div
// // // //               initial={{ opacity: 0, x: 30 }}
// // // //               whileInView={{ opacity: 1, x: 0 }}
// // // //               transition={{ duration: 0.6, delay: 0.2 }}
// // // //               viewport={{ once: true }}
// // // //               className="space-y-4"
// // // //             >
// // // //               {faqs.map((faq, idx) => (
// // // //                 <AccordionItem
// // // //                   key={idx}
// // // //                   question={faq.question}
// // // //                   answer={faq.answer}
// // // //                   isOpen={openFaqIndex === idx}
// // // //                   onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
// // // //                 />
// // // //               ))}
// // // //             </motion.div>
// // // //           </div>

// // // //           {/* Protecting What Matters Most CTA */}
// // // //           <motion.div
// // // //             initial={{ opacity: 0, y: 30 }}
// // // //             whileInView={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 0.6, delay: 0.5 }}
// // // //             viewport={{ once: true }}
// // // //             className="mt-16 text-center bg-red-50 rounded-2xl p-10 border border-red-100"
// // // //           >
// // // //             <div className="inline-block p-3 bg-red-100 rounded-full mb-4">
// // // //               <span className="text-3xl">🛡️</span>
// // // //             </div>
// // // //             <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
// // // //               Protecting What Matters Most
// // // //             </h3>
// // // //             <p className="text-gray-500 mb-6">
// // // //               Get in touch to ensure safe and temperature-stable transit for your sensitive products.
// // // //             </p>
// // // //             <motion.button
// // // //               whileHover={{ scale: 1.05 }}
// // // //               whileTap={{ scale: 0.95 }}
// // // //               className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-md"
// // // //             >
// // // //               Contact Us Today →
// // // //             </motion.button>
// // // //           </motion.div>
// // // //         </div>
// // // //       </section>
// // // //     </>
// // // //   );
// // // // };

// // // // export default Pentakuhl;








// // // import { motion } from "framer-motion";
// // // import { useRef, useState, useEffect } from "react";
// // // import { useScroll, useTransform } from "framer-motion";

// // // // Horizontal Scroll Band Component
// // // const HorizontalScrollSection = () => {
// // //   const containerRef = useRef(null);
// // //   const { scrollYProgress } = useScroll({
// // //     target: containerRef,
// // //     offset: ["start end", "end start"],
// // //   });

// // //   const upperBandX = useTransform(scrollYProgress, [0, 1], [0, -500]);
// // //   const lowerBandX = useTransform(scrollYProgress, [0, 1], [0, 500]);

// // //   const menuItems = [
// // //     "Robust Load Security",
// // //     "Expert Logistics Support",
// // //     "Tailored Freight Solutions",
// // //     "Flexible Shipping Schedules",
// // //     "Volume Discounts",
// // //     "End-to-End Supply Chain Management",
// // //   ];

// // //   return (
// // //     <section 
// // //       ref={containerRef}
// // //       className="relative min-h-[100vh] bg-white overflow-hidden"
// // //     >
// // //       <div className="sticky top-0 h-screen flex flex-col items-center justify-center gap-4 px-4">
        
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 20 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.6 }}
// // //           className="text-center"
// // //         >
// // //           <span className="text-red-600 text-xs font-semibold tracking-wider px-3 py-1 bg-red-50 rounded-full">
// // //             MENU
// // //           </span>
// // //         </motion.div>

// // //         <motion.div
// // //           style={{ x: upperBandX }}
// // //           className="w-full overflow-hidden py-3"
// // //         >
// // //           <div className="flex gap-3 whitespace-nowrap">
// // //             {menuItems.map((item, idx) => (
// // //               <div
// // //                 key={idx}
// // //                 className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-5 py-2.5 shadow-sm border border-gray-200 hover:border-red-300 hover:bg-red-50 transition-all duration-300 cursor-pointer group"
// // //               >
// // //                 <span className="w-1.5 h-1.5 bg-red-500 rounded-full group-hover:scale-150 transition-transform" />
// // //                 <span className="text-gray-700 text-sm group-hover:text-red-600 transition-colors">
// // //                   {item}
// // //                 </span>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </motion.div>

// // //         <motion.div
// // //           style={{ x: lowerBandX }}
// // //           className="w-full overflow-hidden py-3"
// // //         >
// // //           <div className="flex gap-3 whitespace-nowrap">
// // //             {[...menuItems].reverse().map((item, idx) => (
// // //               <div
// // //                 key={idx}
// // //                 className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-5 py-2.5 shadow-sm border border-gray-200 hover:border-red-300 hover:bg-red-50 transition-all duration-300 cursor-pointer group"
// // //               >
// // //                 <span className="w-1.5 h-1.5 bg-red-500 rounded-full group-hover:scale-150 transition-transform" />
// // //                 <span className="text-gray-700 text-sm group-hover:text-red-600 transition-colors">
// // //                   {item}
// // //                 </span>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </motion.div>

// // //         <motion.div
// // //           animate={{ y: [0, 8, 0] }}
// // //           transition={{ repeat: Infinity, duration: 1.5 }}
// // //           className="absolute bottom-8 text-gray-400 text-xs text-center"
// // //         >
// // //           Scroll ↓
// // //         </motion.div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // // Accordion Item Component
// // // const AccordionItem = ({ question, answer, isOpen, onClick }) => {
// // //   return (
// // //     <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
// // //       <button
// // //         onClick={onClick}
// // //         className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
// // //       >
// // //         <span className="text-gray-800 font-medium text-base">{question}</span>
// // //         <motion.span
// // //           animate={{ rotate: isOpen ? 180 : 0 }}
// // //           transition={{ duration: 0.3 }}
// // //           className="text-red-600 text-xl"
// // //         >
// // //           ▼
// // //         </motion.span>
// // //       </button>
// // //       <motion.div
// // //         initial={{ height: 0, opacity: 0 }}
// // //         animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
// // //         transition={{ duration: 0.3 }}
// // //         className="overflow-hidden"
// // //       >
// // //         <div className="p-5 pt-0 border-t border-gray-100">
// // //           <p className="text-gray-500 text-sm leading-relaxed">{answer}</p>
// // //         </div>
// // //       </motion.div>
// // //     </div>
// // //   );
// // // };

// // // const Pentakuhl = () => {
// // //   const productSectionRef = useRef(null);
// // //   const [stage, setStage] = useState(0);
// // //   const [openFaqIndex, setOpenFaqIndex] = useState(null);

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       if (productSectionRef.current) {
// // //         const rect = productSectionRef.current.getBoundingClientRect();
// // //         const windowHeight = window.innerHeight;
        
// // //         const scrollProgress = Math.max(0, Math.min(1, 
// // //           (windowHeight - rect.top) / (windowHeight * 1.5)
// // //         ));
        
// // //         if (scrollProgress < 0.1) {
// // //           setStage(0);
// // //         } else if (scrollProgress >= 0.1 && scrollProgress < 0.4) {
// // //           setStage(1);
// // //         } else if (scrollProgress >= 0.4) {
// // //           setStage(2);
// // //         }
// // //       }
// // //     };

// // //     window.addEventListener("scroll", handleScroll);
// // //     handleScroll();
    
// // //     return () => window.removeEventListener("scroll", handleScroll);
// // //   }, []);

// // //   const faqs = [
// // //     {
// // //       question: "What is Penta Kuhl?",
// // //       answer: "Penta Kuhl is a specialized temperature-controlled packaging solution designed to maintain product integrity during transit for sensitive goods like pharmaceuticals, biologics, and food products. Our advanced technology ensures your products remain within the required temperature range throughout the shipping process."
// // //     },
// // //     {
// // //       question: "How does Penta Kuhl ensure cargo safety?",
// // //       answer: "We use advanced temperature monitoring systems, insulated packaging materials, GPS tracking, and real-time alerts to ensure your cargo remains within the required temperature range throughout transit. Our multi-layer protection system includes thermal barriers, phase change materials, and continuous data logging."
// // //     },
// // //     {
// // //       question: "What types of cargo can Penta Kuhl handle?",
// // //       answer: "Penta Kuhl is equipped to manage various cargo types, including perishable goods, heavy equipment, pharmaceuticals, biologics, chemicals, food products, and any temperature-sensitive materials requiring controlled environments from -50°C to +25°C."
// // //     },
// // //     {
// // //       question: "Is there customer support available for Penta Kuhl users?",
// // //       answer: "Yes, we offer 24/7 customer support to assist with any questions or issues regarding your temperature-controlled shipments. Our dedicated team is available via phone, email, and live chat to provide real-time assistance and monitoring."
// // //     }
// // //   ];

// // //   return (
// // //     <>
// // //       {/* Hero Section - WITHOUT VIDEO, with text content */}
// // //       <section className="relative min-h-[70vh] bg-gradient-to-br from-red-600 to-red-800 overflow-hidden">
// // //         {/* Background Pattern */}
// // //         <div className="absolute inset-0 opacity-10">
// // //           <div className="w-full h-full bg-[radial-gradient(circle_at_center,#fff_1px,transparent_1px)] bg-[length:40px_40px]" />
// // //         </div>
        
// // //         {/* Decorative Circles */}
// // //         <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
// // //         <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

// // //         <div className="relative z-20 h-full flex items-center justify-center min-h-[70vh]">
// // //           <div className="max-w-4xl mx-auto px-6 text-center">
// // //             {/* Icon */}
// // //             <motion.div
// // //               initial={{ opacity: 0, scale: 0 }}
// // //               animate={{ opacity: 1, scale: 1 }}
// // //               transition={{ duration: 0.6 }}
// // //               className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-8 backdrop-blur-sm"
// // //             >
// // //               <span className="text-4xl">❄️</span>
// // //             </motion.div>

// // //             {/* Main Heading */}
// // //             <motion.h1
// // //               initial={{ opacity: 0, y: 50 }}
// // //               animate={{ opacity: 1, y: 0 }}
// // //               transition={{ duration: 0.8 }}
// // //               className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
// // //             >
// // //               Ensuring Safe Transport for <br />
// // //               <span className="text-yellow-300">Temperature-Sensitive Products</span>
// // //             </motion.h1>

// // //             {/* Subheading */}
// // //             <motion.p
// // //               initial={{ opacity: 0, y: 30 }}
// // //               animate={{ opacity: 1, y: 0 }}
// // //               transition={{ duration: 0.8, delay: 0.2 }}
// // //               className="text-lg text-white/80 max-w-2xl mx-auto"
// // //             >
// // //               Explore our frequently asked questions to gain clarity about Penta Kuhl's services and features
// // //             </motion.p>

// // //             {/* Decorative Line */}
// // //             <motion.div
// // //               initial={{ opacity: 0, width: 0 }}
// // //               animate={{ opacity: 1, width: 80 }}
// // //               transition={{ duration: 0.8, delay: 0.4 }}
// // //               className="h-1 bg-yellow-300 mx-auto mt-8 rounded-full"
// // //               style={{ width: 80 }}
// // //             />
// // //           </div>
// // //         </div>

// // //         {/* Scroll Indicator */}
// // //         <motion.div
// // //           initial={{ opacity: 0 }}
// // //           animate={{ opacity: 1 }}
// // //           transition={{ delay: 1, duration: 1 }}
// // //           className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
// // //         >
// // //           <div className="w-[30px] h-[50px] border-2 border-white/40 rounded-full flex justify-center p-2">
// // //             <motion.div
// // //               animate={{ y: [0, 15, 0] }}
// // //               transition={{ repeat: Infinity, duration: 1.5 }}
// // //               className="w-1.5 h-3 bg-white/60 rounded-full"
// // //             />
// // //           </div>
// // //         </motion.div>
// // //       </section>

// // //       {/* About Penta KÜHL Section */}
// // //       <section className="py-20 bg-white">
// // //         <div className="max-w-7xl mx-auto px-6">
// // //           <div className="grid md:grid-cols-2 gap-12 items-center">
// // //             <motion.div
// // //               initial={{ opacity: 0, x: -50 }}
// // //               whileInView={{ opacity: 1, x: 0 }}
// // //               transition={{ duration: 0.8 }}
// // //               viewport={{ once: true }}
// // //             >
// // //               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
// // //                 ABOUT <br />
// // //                 <span className="text-red-600">PENTA KÜHL</span>
// // //               </h2>
// // //             </motion.div>

// // //             <motion.div
// // //               initial={{ opacity: 0, x: 50 }}
// // //               whileInView={{ opacity: 1, x: 0 }}
// // //               transition={{ duration: 0.8, delay: 0.2 }}
// // //               viewport={{ once: true }}
// // //               className="space-y-4"
// // //             >
// // //               <p className="text-gray-600 text-base leading-relaxed">
// // //                 At <span className="font-semibold text-red-600">Pentakuhl</span>, we specialize in providing durable, 
// // //                 effective packaging solutions that maintain temperature 
// // //                 <span className="font-semibold text-red-600"> stability </span> 
// // //                 during transit, 
// // //                 <span className="font-semibold text-red-600"> protecting </span> 
// // //                 your valuable products.
// // //               </p>
// // //               <p className="text-gray-600 text-base leading-relaxed">
// // //                 Our innovative designs cater to various industries, including pharmaceuticals, 
// // //                 food, and biotechnology.
// // //               </p>
// // //               <div className="w-16 h-0.5 bg-red-600 rounded-full mt-4" />
// // //             </motion.div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Authorized Distributors Section */}
// // //       <section className="py-16 bg-gray-50">
// // //         <div className="max-w-7xl mx-auto px-6">
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 30 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.6 }}
// // //             viewport={{ once: true }}
// // //             className="text-center mb-10"
// // //           >
// // //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
// // //               PENTA FREIGHT
// // //             </h2>
// // //             <div className="w-20 h-0.5 bg-red-600 mx-auto" />
// // //           </motion.div>

// // //           <motion.div
// // //             initial={{ opacity: 0, y: 30 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.6, delay: 0.2 }}
// // //             viewport={{ once: true }}
// // //             className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
// // //           >
// // //             <div className="grid md:grid-cols-2 gap-0">
// // //               <div className="bg-red-50 p-10 flex items-center justify-center">
// // //                 <div className="text-center">
// // //                   <div className="text-5xl mb-3">❄️</div>
// // //                   <div className="text-lg font-bold text-gray-800">Pelican BioThermal™</div>
// // //                   <div className="text-gray-500 text-xs mt-1">Trusted Partner</div>
// // //                 </div>
// // //               </div>
// // //               <div className="p-10">
// // //                 <h3 className="text-xl font-bold text-gray-900 mb-3">
// // //                   Authorized Distributors for 
// // //                   <span className="text-red-600 block mt-1">Pelican BioThermal™ Products</span>
// // //                 </h3>
// // //                 <p className="text-gray-500 text-sm leading-relaxed mb-5">
// // //                   Penta Freight is proud to be an authorized distributor for Pelican BioThermal™, 
// // //                   offering world-class temperature-controlled packaging solutions.
// // //                 </p>
// // //                 <motion.button
// // //                   whileHover={{ x: 8 }}
// // //                   className="text-red-600 font-semibold text-sm flex items-center gap-2 group"
// // //                 >
// // //                   Read more 
// // //                   <span className="text-red-600 group-hover:translate-x-1 transition-transform duration-300">→</span>
// // //                 </motion.button>
// // //               </div>
// // //             </div>
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* PRODUCT SOLUTIONS SECTION */}
// // //       <section 
// // //         ref={productSectionRef}
// // //         className="relative min-h-[150vh] bg-white overflow-hidden"
// // //       >
// // //         <div className="sticky top-0 h-screen flex items-center justify-center">
          
// // //           <motion.div
// // //             animate={{ 
// // //               opacity: stage === 2 ? 0 : 1,
// // //               scale: stage === 2 ? 0.7 : 1,
// // //               y: stage === 2 ? -80 : 0
// // //             }}
// // //             transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
// // //             className="absolute z-20"
// // //           >
// // //             <h2 className="text-5xl md:text-7xl font-bold text-gray-900 text-center">
// // //               Product <span className="text-red-600">Solutions</span>
// // //             </h2>
// // //             <motion.p
// // //               animate={{ opacity: stage === 2 ? 0 : 0.5 }}
// // //               transition={{ duration: 0.8 }}
// // //               className="text-gray-400 text-center mt-3 text-sm"
// // //             >
// // //               Scroll to explore
// // //             </motion.p>
// // //           </motion.div>

// // //           <div className="absolute inset-0 flex items-center justify-center">
// // //             <div className="w-full max-w-6xl mx-auto px-6">
// // //               <div className="grid lg:grid-cols-2 gap-8">
                
// // //                 <motion.div
// // //                   initial={{ x: "-120%", opacity: 0 }}
// // //                   animate={{ 
// // //                     x: stage >= 1 ? "0%" : "-120%",
// // //                     opacity: stage >= 1 ? 1 : 0
// // //                   }}
// // //                   transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
// // //                   className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
// // //                 >
// // //                   <motion.div
// // //                     animate={{ opacity: stage === 2 ? 1 : 0 }}
// // //                     transition={{ duration: 0.8, delay: 0.4 }}
// // //                   >
// // //                     <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
// // //                       Parcel <span className="text-red-600">Shippers</span>
// // //                     </h3>
// // //                     <p className="text-gray-500 text-sm mb-6 leading-relaxed">
// // //                       We understand the unique challenges faced by parcel shippers and offer 
// // //                       tailored solutions for seamless shipping.
// // //                     </p>

// // //                     <div className="mb-6">
// // //                       <h4 className="text-sm font-semibold text-red-600 mb-3 uppercase tracking-wide">
// // //                         Single Use
// // //                       </h4>
// // //                       <div className="space-y-2">
// // //                         {["COOLGUARD", "COOLGUARD RM", "COOLGUARD ADVANCE"].map((item, idx) => (
// // //                           <motion.div
// // //                             key={idx}
// // //                             initial={{ opacity: 0, x: -20 }}
// // //                             animate={{ opacity: stage === 2 ? 1 : 0, x: stage === 2 ? 0 : -20 }}
// // //                             transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
// // //                             className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition-all duration-300 cursor-pointer group"
// // //                           >
// // //                             <span className="text-gray-400 group-hover:text-red-500">📦</span>
// // //                             <span className="text-gray-600 text-sm group-hover:text-red-600 transition-colors">{item}</span>
// // //                           </motion.div>
// // //                         ))}
// // //                       </div>
// // //                     </div>

// // //                     <div>
// // //                       <h4 className="text-sm font-semibold text-red-600 mb-3 uppercase tracking-wide">
// // //                         Reusable
// // //                       </h4>
// // //                       <div className="space-y-2">
// // //                         {["Credo Cube"].map((item, idx) => (
// // //                           <motion.div
// // //                             key={idx}
// // //                             initial={{ opacity: 0, x: -20 }}
// // //                             animate={{ opacity: stage === 2 ? 1 : 0, x: stage === 2 ? 0 : -20 }}
// // //                             transition={{ duration: 0.4, delay: 1.0 }}
// // //                             className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition-all duration-300 cursor-pointer group"
// // //                           >
// // //                             <span className="text-gray-400 group-hover:text-red-500">🔄</span>
// // //                             <span className="text-gray-600 text-sm group-hover:text-red-600 transition-colors">{item}</span>
// // //                           </motion.div>
// // //                         ))}
// // //                       </div>
// // //                     </div>
// // //                   </motion.div>
// // //                 </motion.div>

// // //                 <motion.div
// // //                   initial={{ x: "120%", opacity: 0 }}
// // //                   animate={{ 
// // //                     x: stage >= 1 ? "0%" : "120%",
// // //                     opacity: stage >= 1 ? 1 : 0
// // //                   }}
// // //                   transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
// // //                   className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
// // //                 >
// // //                   <motion.div
// // //                     animate={{ opacity: stage === 2 ? 1 : 0 }}
// // //                     transition={{ duration: 0.8, delay: 0.5 }}
// // //                   >
// // //                     <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
// // //                       Pallet <span className="text-red-600">Shippers</span>
// // //                     </h3>
// // //                     <p className="text-gray-500 text-sm mb-6 leading-relaxed">
// // //                       We provide tailored services for pallet shippers, ensuring your cargo arrives 
// // //                       safely and efficiently.
// // //                     </p>

// // //                     <div className="mb-6">
// // //                       <h4 className="text-sm font-semibold text-red-600 mb-3 uppercase tracking-wide">
// // //                         Single Use
// // //                       </h4>
// // //                       <div className="space-y-2">
// // //                         {["COOLPALL VERTOS", "COOLPALL VERTOS ADVANCE"].map((item, idx) => (
// // //                           <motion.div
// // //                             key={idx}
// // //                             initial={{ opacity: 0, x: 20 }}
// // //                             animate={{ opacity: stage === 2 ? 1 : 0, x: stage === 2 ? 0 : 20 }}
// // //                             transition={{ duration: 0.4, delay: 0.7 + idx * 0.1 }}
// // //                             className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition-all duration-300 cursor-pointer group"
// // //                           >
// // //                             <span className="text-gray-400 group-hover:text-red-500">📦</span>
// // //                             <span className="text-gray-600 text-sm group-hover:text-red-600 transition-colors">{item}</span>
// // //                           </motion.div>
// // //                         ))}
// // //                       </div>
// // //                     </div>

// // //                     <div>
// // //                       <h4 className="text-sm font-semibold text-red-600 mb-3 uppercase tracking-wide">
// // //                         Reusable
// // //                       </h4>
// // //                       <div className="space-y-2">
// // //                         {["Credo XTEND", "CREDO CARGO"].map((item, idx) => (
// // //                           <motion.div
// // //                             key={idx}
// // //                             initial={{ opacity: 0, x: 20 }}
// // //                             animate={{ opacity: stage === 2 ? 1 : 0, x: stage === 2 ? 0 : 20 }}
// // //                             transition={{ duration: 0.4, delay: 1.1 + idx * 0.1 }}
// // //                             className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition-all duration-300 cursor-pointer group"
// // //                           >
// // //                             <span className="text-gray-400 group-hover:text-red-500">🔄</span>
// // //                             <span className="text-gray-600 text-sm group-hover:text-red-600 transition-colors">{item}</span>
// // //                           </motion.div>
// // //                         ))}
// // //                       </div>
// // //                     </div>
// // //                   </motion.div>
// // //                 </motion.div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* SERIES GUIDE SECTION */}
// // //       <section className="py-20 bg-gray-50">
// // //         <div className="max-w-7xl mx-auto px-6">
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 30 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.8 }}
// // //             viewport={{ once: true }}
// // //             className="text-center mb-12"
// // //           >
// // //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
// // //               Series Guide
// // //             </h2>
// // //             <p className="text-gray-500 text-base max-w-3xl mx-auto leading-relaxed">
// // //               This guide outlines temperature-controlled packaging solutions designed for the safe transport 
// // //               and storage of sensitive products, like vaccines and biologics, across various thermal conditions, 
// // //               from refrigerated to deep-freeze.
// // //             </p>
// // //           </motion.div>

// // //           <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
// // //             {[
// // //               { series: "SERIES 4", temp: "15°C - 25°C", usage: "Controlled room temperature", ideal: "Medicines, cosmetics" },
// // //               { series: "SERIES 20M", temp: "-20°C", usage: "Frozen products", ideal: "Vaccines, biologics" },
// // //               { series: "SERIES 50M", temp: "-50°C", usage: "Extreme cold chain", ideal: "Advanced biologics, special pharmaceuticals" }
// // //             ].map((item, idx) => (
// // //               <motion.div
// // //                 key={idx}
// // //                 initial={{ opacity: 0, y: 30 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 transition={{ duration: 0.5, delay: idx * 0.1 }}
// // //                 viewport={{ once: true }}
// // //                 className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
// // //               >
// // //                 <div className="flex items-center gap-3 mb-4">
// // //                   <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
// // //                     <span className="text-red-600 text-xl">🌡️</span>
// // //                   </div>
// // //                   <h3 className="text-xl font-bold text-gray-800">{item.series}</h3>
// // //                 </div>
// // //                 <div className="space-y-3">
// // //                   <div>
// // //                     <h4 className="text-xs font-semibold text-red-600 uppercase tracking-wide">Temperature Range:</h4>
// // //                     <p className="text-gray-600 text-sm">{item.temp}</p>
// // //                   </div>
// // //                   <div>
// // //                     <h4 className="text-xs font-semibold text-red-600 uppercase tracking-wide">Usage & Applications:</h4>
// // //                     <p className="text-gray-600 text-sm">{item.usage}</p>
// // //                   </div>
// // //                   <div>
// // //                     <h4 className="text-xs font-semibold text-red-600 uppercase tracking-wide">Ideal For:</h4>
// // //                     <p className="text-gray-600 text-sm">{item.ideal}</p>
// // //                   </div>
// // //                 </div>
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* HORIZONTAL SCROLL BANDS SECTION */}
// // //       <HorizontalScrollSection />

// // //       {/* FAQ SECTION - SPLIT LAYOUT WITH ACCORDION */}
// // //       <section className="py-20 bg-white">
// // //         <div className="max-w-7xl mx-auto px-6">
// // //           <div className="grid lg:grid-cols-2 gap-12">
            
// // //             {/* LEFT SIDE - Title and Description */}
// // //             <motion.div
// // //               initial={{ opacity: 0, x: -30 }}
// // //               whileInView={{ opacity: 1, x: 0 }}
// // //               transition={{ duration: 0.6 }}
// // //               viewport={{ once: true }}
// // //               className="sticky top-32 self-start"
// // //             >
// // //               <div className="bg-red-50 rounded-2xl p-8">
// // //                 <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
// // //                   <span className="text-red-600 text-xl">❓</span>
// // //                 </div>
// // //                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
// // //                   Frequently Asked <br />
// // //                   <span className="text-red-600">Questions</span>
// // //                 </h2>
// // //                 <div className="w-16 h-0.5 bg-red-600 mb-6" />
// // //                 <p className="text-gray-500 text-base leading-relaxed">
// // //                   Explore our frequently asked questions to gain clarity about Penta Kuhl's services and features.
// // //                 </p>
                
// // //                 {/* Contact Card */}
// // //                 <div className="mt-8 p-5 bg-white rounded-xl border border-gray-100">
// // //                   <div className="flex items-center gap-3 mb-3">
// // //                     <span className="text-2xl">🛡️</span>
// // //                     <span className="text-sm font-semibold text-red-600">Need more help?</span>
// // //                   </div>
// // //                   <p className="text-gray-500 text-sm">
// // //                     Can't find what you're looking for? Contact our support team.
// // //                   </p>
// // //                   <button className="mt-4 text-red-600 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
// // //                     Contact Support <span>→</span>
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             </motion.div>

// // //             {/* RIGHT SIDE - Accordion Dropdowns */}
// // //             <motion.div
// // //               initial={{ opacity: 0, x: 30 }}
// // //               whileInView={{ opacity: 1, x: 0 }}
// // //               transition={{ duration: 0.6, delay: 0.2 }}
// // //               viewport={{ once: true }}
// // //               className="space-y-4"
// // //             >
// // //               {faqs.map((faq, idx) => (
// // //                 <AccordionItem
// // //                   key={idx}
// // //                   question={faq.question}
// // //                   answer={faq.answer}
// // //                   isOpen={openFaqIndex === idx}
// // //                   onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
// // //                 />
// // //               ))}
// // //             </motion.div>
// // //           </div>

// // //           {/* Protecting What Matters Most CTA */}
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 30 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.6, delay: 0.5 }}
// // //             viewport={{ once: true }}
// // //             className="mt-16 text-center bg-red-50 rounded-2xl p-10 border border-red-100"
// // //           >
// // //             <div className="inline-block p-3 bg-red-100 rounded-full mb-4">
// // //               <span className="text-3xl">🛡️</span>
// // //             </div>
// // //             <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
// // //               Protecting What Matters Most
// // //             </h3>
// // //             <p className="text-gray-500 mb-6">
// // //               Get in touch to ensure safe and temperature-stable transit for your sensitive products.
// // //             </p>
// // //             <motion.button
// // //               whileHover={{ scale: 1.05 }}
// // //               whileTap={{ scale: 0.95 }}
// // //               className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-md"
// // //             >
// // //               Contact Us Today →
// // //             </motion.button>
// // //           </motion.div>
// // //         </div>
// // //       </section>
// // //     </>
// // //   );
// // // };

// // // export default Pentakuhl;









// // import { motion } from "framer-motion";
// // import { useRef, useState, useEffect } from "react";
// // import { useScroll, useTransform } from "framer-motion";

// // // Horizontal Scroll Band Component
// // const HorizontalScrollSection = () => {
// //   const containerRef = useRef(null);
// //   const { scrollYProgress } = useScroll({
// //     target: containerRef,
// //     offset: ["start end", "end start"],
// //   });

// //   const upperBandX = useTransform(scrollYProgress, [0, 1], [0, -500]);
// //   const lowerBandX = useTransform(scrollYProgress, [0, 1], [0, 500]);

// //   const menuItems = [
// //     "Robust Load Security",
// //     "Expert Logistics Support",
// //     "Tailored Freight Solutions",
// //     "Flexible Shipping Schedules",
// //     "Volume Discounts",
// //     "End-to-End Supply Chain Management",
// //   ];

// //   return (
// //     <section 
// //       ref={containerRef}
// //       className="relative min-h-[100vh] bg-white overflow-hidden"
// //     >
// //       <div className="sticky top-0 h-screen flex flex-col items-center justify-center gap-4 px-4">
        
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //           className="text-center"
// //         >
// //           <span className="text-red-600 text-xs font-semibold tracking-wider px-3 py-1 bg-red-50 rounded-full">
// //             MENU
// //           </span>
// //         </motion.div>

// //         <motion.div
// //           style={{ x: upperBandX }}
// //           className="w-full overflow-hidden py-3"
// //         >
// //           <div className="flex gap-3 whitespace-nowrap">
// //             {menuItems.map((item, idx) => (
// //               <div
// //                 key={idx}
// //                 className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-5 py-2.5 shadow-sm border border-gray-200 hover:border-red-300 hover:bg-red-50 transition-all duration-300 cursor-pointer group"
// //               >
// //                 <span className="w-1.5 h-1.5 bg-red-500 rounded-full group-hover:scale-150 transition-transform" />
// //                 <span className="text-gray-700 text-sm group-hover:text-red-600 transition-colors">
// //                   {item}
// //                 </span>
// //               </div>
// //             ))}
// //           </div>
// //         </motion.div>

// //         <motion.div
// //           style={{ x: lowerBandX }}
// //           className="w-full overflow-hidden py-3"
// //         >
// //           <div className="flex gap-3 whitespace-nowrap">
// //             {[...menuItems].reverse().map((item, idx) => (
// //               <div
// //                 key={idx}
// //                 className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-5 py-2.5 shadow-sm border border-gray-200 hover:border-red-300 hover:bg-red-50 transition-all duration-300 cursor-pointer group"
// //               >
// //                 <span className="w-1.5 h-1.5 bg-red-500 rounded-full group-hover:scale-150 transition-transform" />
// //                 <span className="text-gray-700 text-sm group-hover:text-red-600 transition-colors">
// //                   {item}
// //                 </span>
// //               </div>
// //             ))}
// //           </div>
// //         </motion.div>

// //         <motion.div
// //           animate={{ y: [0, 8, 0] }}
// //           transition={{ repeat: Infinity, duration: 1.5 }}
// //           className="absolute bottom-8 text-gray-400 text-xs text-center"
// //         >
// //           Scroll ↓
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // // Accordion Item Component
// // const AccordionItem = ({ question, answer, isOpen, onClick }) => {
// //   return (
// //     <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
// //       <button
// //         onClick={onClick}
// //         className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
// //       >
// //         <span className="text-gray-800 font-medium text-base">{question}</span>
// //         <motion.span
// //           animate={{ rotate: isOpen ? 180 : 0 }}
// //           transition={{ duration: 0.3 }}
// //           className="text-red-600 text-xl"
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
// //         <div className="p-5 pt-0 border-t border-gray-100">
// //           <p className="text-gray-500 text-sm leading-relaxed">{answer}</p>
// //         </div>
// //       </motion.div>
// //     </div>
// //   );
// // };

// // const Pentakuhl = () => {
// //   const productSectionRef = useRef(null);
// //   const [stage, setStage] = useState(0);
// //   const [openFaqIndex, setOpenFaqIndex] = useState(null);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       if (productSectionRef.current) {
// //         const rect = productSectionRef.current.getBoundingClientRect();
// //         const windowHeight = window.innerHeight;
        
// //         const scrollProgress = Math.max(0, Math.min(1, 
// //           (windowHeight - rect.top) / (windowHeight * 1.5)
// //         ));
        
// //         if (scrollProgress < 0.1) {
// //           setStage(0);
// //         } else if (scrollProgress >= 0.1 && scrollProgress < 0.4) {
// //           setStage(1);
// //         } else if (scrollProgress >= 0.4) {
// //           setStage(2);
// //         }
// //       }
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     handleScroll();
    
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   const faqs = [
// //     {
// //       question: "What is Penta Kuhl?",
// //       answer: "Penta Kuhl is a specialized temperature-controlled packaging solution designed to maintain product integrity during transit for sensitive goods like pharmaceuticals, biologics, and food products. Our advanced technology ensures your products remain within the required temperature range throughout the shipping process."
// //     },
// //     {
// //       question: "How does Penta Kuhl ensure cargo safety?",
// //       answer: "We use advanced temperature monitoring systems, insulated packaging materials, GPS tracking, and real-time alerts to ensure your cargo remains within the required temperature range throughout transit. Our multi-layer protection system includes thermal barriers, phase change materials, and continuous data logging."
// //     },
// //     {
// //       question: "What types of cargo can Penta Kuhl handle?",
// //       answer: "Penta Kuhl is equipped to manage various cargo types, including perishable goods, heavy equipment, pharmaceuticals, biologics, chemicals, food products, and any temperature-sensitive materials requiring controlled environments from -50°C to +25°C."
// //     },
// //     {
// //       question: "Is there customer support available for Penta Kuhl users?",
// //       answer: "Yes, we offer 24/7 customer support to assist with any questions or issues regarding your temperature-controlled shipments. Our dedicated team is available via phone, email, and live chat to provide real-time assistance and monitoring."
// //     }
// //   ];

// //   return (
// //     <>
// //       {/* Hero Section - WITHOUT VIDEO, with text content and explore button */}
// //       <section className="relative min-h-[70vh] bg-gradient-to-br from-red-600 to-red-700 overflow-hidden">
// //         {/* Background Pattern */}
// //         <div className="absolute inset-0 opacity-10">
// //           <div className="w-full h-full bg-[radial-gradient(circle_at_center,#fff_1px,transparent_1px)] bg-[length:40px_40px]" />
// //         </div>
        
// //         {/* Decorative Circles */}
// //         <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
// //         <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

// //         <div className="relative z-20 h-full flex items-center justify-center min-h-[70vh]">
// //           <div className="max-w-4xl mx-auto px-6 text-center">
// //             {/* Main Heading - Removed capsule icon */}
// //             <motion.h1
// //               initial={{ opacity: 0, y: 50 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8 }}
// //               className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
// //             >
// //               Ensuring Safe Transport for <br />
// //               <span className="text-yellow-300">Temperature-Sensitive Products</span>
// //             </motion.h1>

// //             {/* Subheading */}
// //             <motion.p
// //               initial={{ opacity: 0, y: 30 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8, delay: 0.2 }}
// //               className="text-lg text-white/80 max-w-2xl mx-auto mb-8"
// //             >
// //               Explore our frequently asked questions to gain clarity about Penta Kuhl's services and features
// //             </motion.p>

// //             {/* Explore Button */}
// //             <motion.button
// //               initial={{ opacity: 0, y: 30 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8, delay: 0.4 }}
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //               className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300"
// //             >
// //               Explore More ↓
// //             </motion.button>

// //             {/* Decorative Line */}
// //             <motion.div
// //               initial={{ opacity: 0, width: 0 }}
// //               animate={{ opacity: 1, width: 80 }}
// //               transition={{ duration: 0.8, delay: 0.6 }}
// //               className="h-1 bg-yellow-300 mx-auto mt-8 rounded-full"
// //               style={{ width: 80 }}
// //             />
// //           </div>
// //         </div>

// //         {/* Scroll Indicator */}
// //         <motion.div
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ delay: 1, duration: 1 }}
// //           className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
// //         >
// //           <div className="w-[30px] h-[50px] border-2 border-white/40 rounded-full flex justify-center p-2">
// //             <motion.div
// //               animate={{ y: [0, 15, 0] }}
// //               transition={{ repeat: Infinity, duration: 1.5 }}
// //               className="w-1.5 h-3 bg-white/60 rounded-full"
// //             />
// //           </div>
// //         </motion.div>
// //       </section>

// //       {/* About Penta KÜHL Section */}
// //       <section className="py-20 bg-white">
// //         <div className="max-w-7xl mx-auto px-6">
// //           <div className="grid md:grid-cols-2 gap-12 items-center">
// //             <motion.div
// //               initial={{ opacity: 0, x: -50 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.8 }}
// //               viewport={{ once: true }}
// //             >
// //               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
// //                 ABOUT <br />
// //                 <span className="text-red-600">PENTA KÜHL</span>
// //               </h2>
// //             </motion.div>

// //             <motion.div
// //               initial={{ opacity: 0, x: 50 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.8, delay: 0.2 }}
// //               viewport={{ once: true }}
// //               className="space-y-4"
// //             >
// //               <p className="text-gray-600 text-base leading-relaxed">
// //                 At <span className="font-semibold text-red-600">Pentakuhl</span>, we specialize in providing durable, 
// //                 effective packaging solutions that maintain temperature 
// //                 <span className="font-semibold text-red-600"> stability </span> 
// //                 during transit, 
// //                 <span className="font-semibold text-red-600"> protecting </span> 
// //                 your valuable products.
// //               </p>
// //               <p className="text-gray-600 text-base leading-relaxed">
// //                 Our innovative designs cater to various industries, including pharmaceuticals, 
// //                 food, and biotechnology.
// //               </p>
// //               <div className="w-16 h-0.5 bg-red-600 rounded-full mt-4" />
// //             </motion.div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Authorized Distributors Section */}
// //       <section className="py-16 bg-gray-50">
// //         <div className="max-w-7xl mx-auto px-6">
// //           <motion.div
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6 }}
// //             viewport={{ once: true }}
// //             className="text-center mb-10"
// //           >
// //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
// //               PENTA FREIGHT
// //             </h2>
// //             <div className="w-20 h-0.5 bg-red-600 mx-auto" />
// //           </motion.div>

// //           <motion.div
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 0.2 }}
// //             viewport={{ once: true }}
// //             className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
// //           >
// //             <div className="grid md:grid-cols-2 gap-0">
// //               <div className="bg-red-50 p-10 flex items-center justify-center">
// //                 <div className="text-center">
// //                   <div className="text-5xl mb-3">❄️</div>
// //                   <div className="text-lg font-bold text-gray-800">Pelican BioThermal™</div>
// //                   <div className="text-gray-500 text-xs mt-1">Trusted Partner</div>
// //                 </div>
// //               </div>
// //               <div className="p-10">
// //                 <h3 className="text-xl font-bold text-gray-900 mb-3">
// //                   Authorized Distributors for 
// //                   <span className="text-red-600 block mt-1">Pelican BioThermal™ Products</span>
// //                 </h3>
// //                 <p className="text-gray-500 text-sm leading-relaxed mb-5">
// //                   Penta Freight is proud to be an authorized distributor for Pelican BioThermal™, 
// //                   offering world-class temperature-controlled packaging solutions.
// //                 </p>
// //                 <motion.button
// //                   whileHover={{ x: 8 }}
// //                   className="text-red-600 font-semibold text-sm flex items-center gap-2 group"
// //                 >
// //                   Read more 
// //                   <span className="text-red-600 group-hover:translate-x-1 transition-transform duration-300">→</span>
// //                 </motion.button>
// //               </div>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* PRODUCT SOLUTIONS SECTION */}
// //       <section 
// //         ref={productSectionRef}
// //         className="relative min-h-[150vh] bg-white overflow-hidden"
// //       >
// //         <div className="sticky top-0 h-screen flex items-center justify-center">
          
// //           <motion.div
// //             animate={{ 
// //               opacity: stage === 2 ? 0 : 1,
// //               scale: stage === 2 ? 0.7 : 1,
// //               y: stage === 2 ? -80 : 0
// //             }}
// //             transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
// //             className="absolute z-20"
// //           >
// //             <h2 className="text-5xl md:text-7xl font-bold text-gray-900 text-center">
// //               Product <span className="text-red-600">Solutions</span>
// //             </h2>
// //             <motion.p
// //               animate={{ opacity: stage === 2 ? 0 : 0.5 }}
// //               transition={{ duration: 0.8 }}
// //               className="text-gray-400 text-center mt-3 text-sm"
// //             >
// //               Scroll to explore
// //             </motion.p>
// //           </motion.div>

// //           <div className="absolute inset-0 flex items-center justify-center">
// //             <div className="w-full max-w-6xl mx-auto px-6">
// //               <div className="grid lg:grid-cols-2 gap-8">
                
// //                 <motion.div
// //                   initial={{ x: "-120%", opacity: 0 }}
// //                   animate={{ 
// //                     x: stage >= 1 ? "0%" : "-120%",
// //                     opacity: stage >= 1 ? 1 : 0
// //                   }}
// //                   transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
// //                   className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
// //                 >
// //                   <motion.div
// //                     animate={{ opacity: stage === 2 ? 1 : 0 }}
// //                     transition={{ duration: 0.8, delay: 0.4 }}
// //                   >
// //                     <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
// //                       Parcel <span className="text-red-600">Shippers</span>
// //                     </h3>
// //                     <p className="text-gray-500 text-sm mb-6 leading-relaxed">
// //                       We understand the unique challenges faced by parcel shippers and offer 
// //                       tailored solutions for seamless shipping.
// //                     </p>

// //                     <div className="mb-6">
// //                       <h4 className="text-sm font-semibold text-red-600 mb-3 uppercase tracking-wide">
// //                         Single Use
// //                       </h4>
// //                       <div className="space-y-2">
// //                         {["COOLGUARD", "COOLGUARD RM", "COOLGUARD ADVANCE"].map((item, idx) => (
// //                           <motion.div
// //                             key={idx}
// //                             initial={{ opacity: 0, x: -20 }}
// //                             animate={{ opacity: stage === 2 ? 1 : 0, x: stage === 2 ? 0 : -20 }}
// //                             transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
// //                             className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition-all duration-300 cursor-pointer group"
// //                           >
// //                             <span className="text-gray-400 group-hover:text-red-500">📦</span>
// //                             <span className="text-gray-600 text-sm group-hover:text-red-600 transition-colors">{item}</span>
// //                           </motion.div>
// //                         ))}
// //                       </div>
// //                     </div>

// //                     <div>
// //                       <h4 className="text-sm font-semibold text-red-600 mb-3 uppercase tracking-wide">
// //                         Reusable
// //                       </h4>
// //                       <div className="space-y-2">
// //                         {["Credo Cube"].map((item, idx) => (
// //                           <motion.div
// //                             key={idx}
// //                             initial={{ opacity: 0, x: -20 }}
// //                             animate={{ opacity: stage === 2 ? 1 : 0, x: stage === 2 ? 0 : -20 }}
// //                             transition={{ duration: 0.4, delay: 1.0 }}
// //                             className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition-all duration-300 cursor-pointer group"
// //                           >
// //                             <span className="text-gray-400 group-hover:text-red-500">🔄</span>
// //                             <span className="text-gray-600 text-sm group-hover:text-red-600 transition-colors">{item}</span>
// //                           </motion.div>
// //                         ))}
// //                       </div>
// //                     </div>
// //                   </motion.div>
// //                 </motion.div>

// //                 <motion.div
// //                   initial={{ x: "120%", opacity: 0 }}
// //                   animate={{ 
// //                     x: stage >= 1 ? "0%" : "120%",
// //                     opacity: stage >= 1 ? 1 : 0
// //                   }}
// //                   transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
// //                   className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
// //                 >
// //                   <motion.div
// //                     animate={{ opacity: stage === 2 ? 1 : 0 }}
// //                     transition={{ duration: 0.8, delay: 0.5 }}
// //                   >
// //                     <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
// //                       Pallet <span className="text-red-600">Shippers</span>
// //                     </h3>
// //                     <p className="text-gray-500 text-sm mb-6 leading-relaxed">
// //                       We provide tailored services for pallet shippers, ensuring your cargo arrives 
// //                       safely and efficiently.
// //                     </p>

// //                     <div className="mb-6">
// //                       <h4 className="text-sm font-semibold text-red-600 mb-3 uppercase tracking-wide">
// //                         Single Use
// //                       </h4>
// //                       <div className="space-y-2">
// //                         {["COOLPALL VERTOS", "COOLPALL VERTOS ADVANCE"].map((item, idx) => (
// //                           <motion.div
// //                             key={idx}
// //                             initial={{ opacity: 0, x: 20 }}
// //                             animate={{ opacity: stage === 2 ? 1 : 0, x: stage === 2 ? 0 : 20 }}
// //                             transition={{ duration: 0.4, delay: 0.7 + idx * 0.1 }}
// //                             className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition-all duration-300 cursor-pointer group"
// //                           >
// //                             <span className="text-gray-400 group-hover:text-red-500">📦</span>
// //                             <span className="text-gray-600 text-sm group-hover:text-red-600 transition-colors">{item}</span>
// //                           </motion.div>
// //                         ))}
// //                       </div>
// //                     </div>

// //                     <div>
// //                       <h4 className="text-sm font-semibold text-red-600 mb-3 uppercase tracking-wide">
// //                         Reusable
// //                       </h4>
// //                       <div className="space-y-2">
// //                         {["Credo XTEND", "CREDO CARGO"].map((item, idx) => (
// //                           <motion.div
// //                             key={idx}
// //                             initial={{ opacity: 0, x: 20 }}
// //                             animate={{ opacity: stage === 2 ? 1 : 0, x: stage === 2 ? 0 : 20 }}
// //                             transition={{ duration: 0.4, delay: 1.1 + idx * 0.1 }}
// //                             className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition-all duration-300 cursor-pointer group"
// //                           >
// //                             <span className="text-gray-400 group-hover:text-red-500">🔄</span>
// //                             <span className="text-gray-600 text-sm group-hover:text-red-600 transition-colors">{item}</span>
// //                           </motion.div>
// //                         ))}
// //                       </div>
// //                     </div>
// //                   </motion.div>
// //                 </motion.div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* SERIES GUIDE SECTION */}
// //       <section className="py-20 bg-gray-50">
// //         <div className="max-w-7xl mx-auto px-6">
// //           <motion.div
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8 }}
// //             viewport={{ once: true }}
// //             className="text-center mb-12"
// //           >
// //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
// //               Series Guide
// //             </h2>
// //             <p className="text-gray-500 text-base max-w-3xl mx-auto leading-relaxed">
// //               This guide outlines temperature-controlled packaging solutions designed for the safe transport 
// //               and storage of sensitive products, like vaccines and biologics, across various thermal conditions, 
// //               from refrigerated to deep-freeze.
// //             </p>
// //           </motion.div>

// //           <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
// //             {[
// //               { series: "SERIES 4", temp: "15°C - 25°C", usage: "Controlled room temperature", ideal: "Medicines, cosmetics" },
// //               { series: "SERIES 20M", temp: "-20°C", usage: "Frozen products", ideal: "Vaccines, biologics" },
// //               { series: "SERIES 50M", temp: "-50°C", usage: "Extreme cold chain", ideal: "Advanced biologics, special pharmaceuticals" }
// //             ].map((item, idx) => (
// //               <motion.div
// //                 key={idx}
// //                 initial={{ opacity: 0, y: 30 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.5, delay: idx * 0.1 }}
// //                 viewport={{ once: true }}
// //                 className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
// //               >
// //                 <div className="flex items-center gap-3 mb-4">
// //                   <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
// //                     <span className="text-red-600 text-xl">🌡️</span>
// //                   </div>
// //                   <h3 className="text-xl font-bold text-gray-800">{item.series}</h3>
// //                 </div>
// //                 <div className="space-y-3">
// //                   <div>
// //                     <h4 className="text-xs font-semibold text-red-600 uppercase tracking-wide">Temperature Range:</h4>
// //                     <p className="text-gray-600 text-sm">{item.temp}</p>
// //                   </div>
// //                   <div>
// //                     <h4 className="text-xs font-semibold text-red-600 uppercase tracking-wide">Usage & Applications:</h4>
// //                     <p className="text-gray-600 text-sm">{item.usage}</p>
// //                   </div>
// //                   <div>
// //                     <h4 className="text-xs font-semibold text-red-600 uppercase tracking-wide">Ideal For:</h4>
// //                     <p className="text-gray-600 text-sm">{item.ideal}</p>
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* HORIZONTAL SCROLL BANDS SECTION */}
// //       <HorizontalScrollSection />

// //       {/* FAQ SECTION - SPLIT LAYOUT WITH ACCORDION */}
// //       <section className="py-20 bg-white">
// //         <div className="max-w-7xl mx-auto px-6">
// //           <div className="grid lg:grid-cols-2 gap-12">
            
// //             {/* LEFT SIDE - Title and Description */}
// //             <motion.div
// //               initial={{ opacity: 0, x: -30 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.6 }}
// //               viewport={{ once: true }}
// //               className="sticky top-32 self-start"
// //             >
// //               <div className="bg-red-50 rounded-2xl p-8">
// //                 <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
// //                   <span className="text-red-600 text-xl">❓</span>
// //                 </div>
// //                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
// //                   Frequently Asked <br />
// //                   <span className="text-red-600">Questions</span>
// //                 </h2>
// //                 <div className="w-16 h-0.5 bg-red-600 mb-6" />
// //                 <p className="text-gray-500 text-base leading-relaxed">
// //                   Explore our frequently asked questions to gain clarity about Penta Kuhl's services and features.
// //                 </p>
                
// //                 {/* Contact Card */}
// //                 <div className="mt-8 p-5 bg-white rounded-xl border border-gray-100">
// //                   <div className="flex items-center gap-3 mb-3">
// //                     <span className="text-2xl">🛡️</span>
// //                     <span className="text-sm font-semibold text-red-600">Need more help?</span>
// //                   </div>
// //                   <p className="text-gray-500 text-sm">
// //                     Can't find what you're looking for? Contact our support team.
// //                   </p>
// //                   <button className="mt-4 text-red-600 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
// //                     Contact Support <span>→</span>
// //                   </button>
// //                 </div>
// //               </div>
// //             </motion.div>

// //             {/* RIGHT SIDE - Accordion Dropdowns */}
// //             <motion.div
// //               initial={{ opacity: 0, x: 30 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.6, delay: 0.2 }}
// //               viewport={{ once: true }}
// //               className="space-y-4"
// //             >
// //               {faqs.map((faq, idx) => (
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

// //           {/* Protecting What Matters Most CTA */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 0.5 }}
// //             viewport={{ once: true }}
// //             className="mt-16 text-center bg-red-50 rounded-2xl p-10 border border-red-100"
// //           >
// //             <div className="inline-block p-3 bg-red-100 rounded-full mb-4">
// //               <span className="text-3xl">🛡️</span>
// //             </div>
// //             <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
// //               Protecting What Matters Most
// //             </h3>
// //             <p className="text-gray-500 mb-6">
// //               Get in touch to ensure safe and temperature-stable transit for your sensitive products.
// //             </p>
// //             <motion.button
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //               className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-md"
// //             >
// //               Contact Us Today →
// //             </motion.button>
// //           </motion.div>
// //         </div>
// //       </section>
// //     </>
// //   );
// // };

// // export default Pentakuhl;







// // import { motion } from "framer-motion";
// // import { useRef, useState, useEffect } from "react";
// // import { useScroll, useTransform } from "framer-motion";

// // // Horizontal Scroll Band Component
// // const HorizontalScrollSection = () => {
// //   const containerRef = useRef(null);
// //   const { scrollYProgress } = useScroll({
// //     target: containerRef,
// //     offset: ["start end", "end start"],
// //   });

// //   const upperBandX = useTransform(scrollYProgress, [0, 1], [0, -500]);
// //   const lowerBandX = useTransform(scrollYProgress, [0, 1], [0, 500]);

// //   const menuItems = [
// //     "Robust Load Security",
// //     "Expert Logistics Support",
// //     "Tailored Freight Solutions",
// //     "Flexible Shipping Schedules",
// //     "Volume Discounts",
// //     "End-to-End Supply Chain Management",
// //   ];

// //   return (
// //     <section 
// //       ref={containerRef}
// //       className="relative min-h-[100vh] bg-white overflow-hidden"
// //     >
// //       <div className="sticky top-0 h-screen flex flex-col items-center justify-center gap-4 px-4">
        
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //           className="text-center"
// //         >
// //           <span className="text-red-600 text-xs font-semibold tracking-wider px-3 py-1 bg-red-50 rounded-full">
// //             MENU
// //           </span>
// //         </motion.div>

// //         {/* Upper Band - Fixed width to prevent cutting */}
// //         <motion.div
// //           style={{ x: upperBandX }}
// //           className="w-full overflow-visible py-3"
// //         >
// //           <div className="flex gap-3 whitespace-nowrap">
// //             {menuItems.map((item, idx) => (
// //               <div
// //                 key={idx}
// //                 className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-5 py-2.5 shadow-sm border border-gray-200 hover:border-red-300 hover:bg-red-50 transition-all duration-300 cursor-pointer group"
// //               >
// //                 <span className="w-1.5 h-1.5 bg-red-500 rounded-full group-hover:scale-150 transition-transform" />
// //                 <span className="text-gray-700 text-sm group-hover:text-red-600 transition-colors whitespace-nowrap">
// //                   {item}
// //                 </span>
// //               </div>
// //             ))}
// //           </div>
// //         </motion.div>

// //         {/* Lower Band - Fixed width to prevent cutting */}
// //         <motion.div
// //           style={{ x: lowerBandX }}
// //           className="w-full overflow-visible py-3"
// //         >
// //           <div className="flex gap-3 whitespace-nowrap">
// //             {[...menuItems].reverse().map((item, idx) => (
// //               <div
// //                 key={idx}
// //                 className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-5 py-2.5 shadow-sm border border-gray-200 hover:border-red-300 hover:bg-red-50 transition-all duration-300 cursor-pointer group"
// //               >
// //                 <span className="w-1.5 h-1.5 bg-red-500 rounded-full group-hover:scale-150 transition-transform" />
// //                 <span className="text-gray-700 text-sm group-hover:text-red-600 transition-colors whitespace-nowrap">
// //                   {item}
// //                 </span>
// //               </div>
// //             ))}
// //           </div>
// //         </motion.div>

// //         <motion.div
// //           animate={{ y: [0, 8, 0] }}
// //           transition={{ repeat: Infinity, duration: 1.5 }}
// //           className="absolute bottom-8 text-gray-400 text-xs text-center"
// //         >
// //           Scroll ↓
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // // Accordion Item Component
// // const AccordionItem = ({ question, answer, isOpen, onClick }) => {
// //   return (
// //     <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
// //       <button
// //         onClick={onClick}
// //         className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
// //       >
// //         <span className="text-gray-800 font-medium text-base">{question}</span>
// //         <motion.span
// //           animate={{ rotate: isOpen ? 180 : 0 }}
// //           transition={{ duration: 0.3 }}
// //           className="text-red-600 text-xl"
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
// //         <div className="p-5 pt-0 border-t border-gray-100">
// //           <p className="text-gray-500 text-sm leading-relaxed">{answer}</p>
// //         </div>
// //       </motion.div>
// //     </div>
// //   );
// // };

// // const Pentakuhl = () => {
// //   const productSectionRef = useRef(null);
// //   const [stage, setStage] = useState(0);
// //   const [openFaqIndex, setOpenFaqIndex] = useState(null);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       if (productSectionRef.current) {
// //         const rect = productSectionRef.current.getBoundingClientRect();
// //         const windowHeight = window.innerHeight;
        
// //         const scrollProgress = Math.max(0, Math.min(1, 
// //           (windowHeight - rect.top) / (windowHeight * 1.5)
// //         ));
        
// //         if (scrollProgress < 0.1) {
// //           setStage(0);
// //         } else if (scrollProgress >= 0.1 && scrollProgress < 0.4) {
// //           setStage(1);
// //         } else if (scrollProgress >= 0.4) {
// //           setStage(2);
// //         }
// //       }
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     handleScroll();
    
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   const faqs = [
// //     {
// //       question: "What is Penta Kuhl?",
// //       answer: "Penta Kuhl is a specialized temperature-controlled packaging solution designed to maintain product integrity during transit for sensitive goods like pharmaceuticals, biologics, and food products. Our advanced technology ensures your products remain within the required temperature range throughout the shipping process."
// //     },
// //     {
// //       question: "How does Penta Kuhl ensure cargo safety?",
// //       answer: "We use advanced temperature monitoring systems, insulated packaging materials, GPS tracking, and real-time alerts to ensure your cargo remains within the required temperature range throughout transit. Our multi-layer protection system includes thermal barriers, phase change materials, and continuous data logging."
// //     },
// //     {
// //       question: "What types of cargo can Penta Kuhl handle?",
// //       answer: "Penta Kuhl is equipped to manage various cargo types, including perishable goods, heavy equipment, pharmaceuticals, biologics, chemicals, food products, and any temperature-sensitive materials requiring controlled environments from -50°C to +25°C."
// //     },
// //     {
// //       question: "Is there customer support available for Penta Kuhl users?",
// //       answer: "Yes, we offer 24/7 customer support to assist with any questions or issues regarding your temperature-controlled shipments. Our dedicated team is available via phone, email, and live chat to provide real-time assistance and monitoring."
// //     }
// //   ];

// //   return (
// //     <>
// //       {/* Hero Section */}
// //       <section className="relative min-h-[70vh] bg-gradient-to-br from-red-600 to-red-700 overflow-hidden">
// //         <div className="absolute inset-0 opacity-10">
// //           <div className="w-full h-full bg-[radial-gradient(circle_at_center,#fff_1px,transparent_1px)] bg-[length:40px_40px]" />
// //         </div>
        
// //         <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
// //         <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

// //         <div className="relative z-20 h-full flex items-center justify-center min-h-[70vh]">
// //           <div className="max-w-4xl mx-auto px-6 text-center">
// //             <motion.h1
// //               initial={{ opacity: 0, y: 50 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8 }}
// //               className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
// //             >
// //               Ensuring Safe Transport for <br />
// //               <span className="text-yellow-300">Temperature-Sensitive Products</span>
// //             </motion.h1>

// //             <motion.p
// //               initial={{ opacity: 0, y: 30 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8, delay: 0.2 }}
// //               className="text-lg text-white/80 max-w-2xl mx-auto mb-8"
// //             >
// //               Explore our frequently asked questions to gain clarity about Penta Kuhl's services and features
// //             </motion.p>

// //             <motion.button
// //               initial={{ opacity: 0, y: 30 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8, delay: 0.4 }}
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //               className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300"
// //             >
// //               Explore More ↓
// //             </motion.button>

// //             <motion.div
// //               initial={{ opacity: 0, width: 0 }}
// //               animate={{ opacity: 1, width: 80 }}
// //               transition={{ duration: 0.8, delay: 0.6 }}
// //               className="h-1 bg-yellow-300 mx-auto mt-8 rounded-full"
// //               style={{ width: 80 }}
// //             />
// //           </div>
// //         </div>

// //         {/* <motion.div
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ delay: 1, duration: 1 }}
// //           className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
// //         >
// //           <div className="w-[30px] h-[50px] border-2 border-white/40 rounded-full flex justify-center p-2">
// //             <motion.div
// //               animate={{ y: [0, 15, 0] }}
// //               transition={{ repeat: Infinity, duration: 1.5 }}
// //               className="w-1.5 h-3 bg-white/60 rounded-full"
// //             />
// //           </div>
// //         </motion.div> */}
// //       </section>

// //       {/* About Penta KÜHL Section - Updated text */}
// //       <section className="py-20 bg-white">
// //         <div className="max-w-7xl mx-auto px-6">
// //           <div className="grid md:grid-cols-2 gap-12 items-start">
// //             <motion.div
// //               initial={{ opacity: 0, x: -50 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.8 }}
// //               viewport={{ once: true }}
// //             >
// //               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
// //                 ABOUT <br />
// //                 <span className="text-red-600">PENTA KÜHL</span>
// //               </h2>
// //             </motion.div>

// //             <motion.div
// //               initial={{ opacity: 0, x: 50 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.8, delay: 0.2 }}
// //               viewport={{ once: true }}
// //               className="space-y-4"
// //             >
// //               <p className="text-gray-600 text-base leading-relaxed">
// //                 At <span className="font-semibold text-red-600">Pentakuhl</span>, we specialize in providing durable, 
// //                 effective packaging solutions that maintain temperature 
// //                 <span className="font-semibold text-red-600"> stability </span> 
// //                 during transit, 
// //                 <span className="font-semibold text-red-600"> protecting </span> 
// //                 your valuable products.
// //               </p>
// //               <p className="text-gray-600 text-base leading-relaxed">
// //                 Our innovative designs cater to various industries, including pharmaceuticals, 
// //                 food, and biotechnology.
// //               </p>
// //               <div className="w-16 h-0.5 bg-red-600 rounded-full mt-4" />
// //             </motion.div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Authorized Distributors Section */}
// //       <section className="py-16 bg-gray-50">
// //         <div className="max-w-7xl mx-auto px-6">
// //           <motion.div
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6 }}
// //             viewport={{ once: true }}
// //             className="text-center mb-10"
// //           >
// //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
// //               PENTA FREIGHT
// //             </h2>
// //             <div className="w-20 h-0.5 bg-red-600 mx-auto" />
// //           </motion.div>

// //           <motion.div
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 0.2 }}
// //             viewport={{ once: true }}
// //             className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
// //           >
// //             <div className="grid md:grid-cols-2 gap-0">
// //               <div className="bg-red-50 p-10 flex items-center justify-center">
// //                 <div className="text-center">
// //                   <div className="text-5xl mb-3">❄️</div>
// //                   <div className="text-lg font-bold text-gray-800">Pelican BioThermal™</div>
// //                   <div className="text-gray-500 text-xs mt-1">Trusted Partner</div>
// //                 </div>
// //               </div>
// //               <div className="p-10">
// //                 <h3 className="text-xl font-bold text-gray-900 mb-3">
// //                   Authorized Distributors for 
// //                   <span className="text-red-600 block mt-1">Pelican BioThermal™ Products</span>
// //                 </h3>
// //                 <p className="text-gray-500 text-sm leading-relaxed mb-5">
// //                   Penta Freight is proud to be an authorized distributor for Pelican BioThermal™, 
// //                   offering world-class temperature-controlled packaging solutions for 
// //                   pharmaceutical, biotech, and life sciences industries.
// //                 </p>
// //                 <motion.button
// //                   whileHover={{ x: 8 }}
// //                   className="text-red-600 font-semibold text-sm flex items-center gap-2 group"
// //                 >
// //                   Read more 
// //                   <span className="text-red-600 group-hover:translate-x-1 transition-transform duration-300">→</span>
// //                 </motion.button>
// //               </div>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* PRODUCT SOLUTIONS SECTION */}
// //       <section 
// //         ref={productSectionRef}
// //         className="relative min-h-[150vh] bg-white overflow-hidden"
// //       >
// //         <div className="sticky top-0 h-screen flex items-center justify-center">
          
// //           <motion.div
// //             animate={{ 
// //               opacity: stage === 2 ? 0 : 1,
// //               scale: stage === 2 ? 0.7 : 1,
// //               y: stage === 2 ? -80 : 0
// //             }}
// //             transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
// //             className="absolute z-20"
// //           >
// //             <h2 className="text-5xl md:text-7xl font-bold text-gray-900 text-center">
// //               Product <span className="text-red-600">Solutions</span>
// //             </h2>
// //             <motion.p
// //               animate={{ opacity: stage === 2 ? 0 : 0.5 }}
// //               transition={{ duration: 0.8 }}
// //               className="text-gray-400 text-center mt-3 text-sm"
// //             >
// //               Scroll to explore
// //             </motion.p>
// //           </motion.div>

// //           <div className="absolute inset-0 flex items-center justify-center">
// //             <div className="w-full max-w-6xl mx-auto px-6">
// //               <div className="grid lg:grid-cols-2 gap-8">
                
// //                 <motion.div
// //                   initial={{ x: "-120%", opacity: 0 }}
// //                   animate={{ 
// //                     x: stage >= 1 ? "0%" : "-120%",
// //                     opacity: stage >= 1 ? 1 : 0
// //                   }}
// //                   transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
// //                   className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
// //                 >
// //                   <motion.div
// //                     animate={{ opacity: stage === 2 ? 1 : 0 }}
// //                     transition={{ duration: 0.8, delay: 0.4 }}
// //                   >
// //                     <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
// //                       Parcel <span className="text-red-600">Shippers</span>
// //                     </h3>
// //                     <p className="text-gray-500 text-sm mb-6 leading-relaxed">
// //                       We understand the unique challenges faced by parcel shippers and offer 
// //                       tailored solutions for seamless shipping.
// //                     </p>

// //                     <div className="mb-6">
// //                       <h4 className="text-sm font-semibold text-red-600 mb-3 uppercase tracking-wide">
// //                         Single Use
// //                       </h4>
// //                       <div className="space-y-2">
// //                         {["COOLGUARD", "COOLGUARD RM", "COOLGUARD ADVANCE"].map((item, idx) => (
// //                           <motion.div
// //                             key={idx}
// //                             initial={{ opacity: 0, x: -20 }}
// //                             animate={{ opacity: stage === 2 ? 1 : 0, x: stage === 2 ? 0 : -20 }}
// //                             transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
// //                             className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition-all duration-300 cursor-pointer group"
// //                           >
// //                             <span className="text-gray-400 group-hover:text-red-500">📦</span>
// //                             <span className="text-gray-600 text-sm group-hover:text-red-600 transition-colors">{item}</span>
// //                           </motion.div>
// //                         ))}
// //                       </div>
// //                     </div>

// //                     <div>
// //                       <h4 className="text-sm font-semibold text-red-600 mb-3 uppercase tracking-wide">
// //                         Reusable
// //                       </h4>
// //                       <div className="space-y-2">
// //                         {["Credo Cube"].map((item, idx) => (
// //                           <motion.div
// //                             key={idx}
// //                             initial={{ opacity: 0, x: -20 }}
// //                             animate={{ opacity: stage === 2 ? 1 : 0, x: stage === 2 ? 0 : -20 }}
// //                             transition={{ duration: 0.4, delay: 1.0 }}
// //                             className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition-all duration-300 cursor-pointer group"
// //                           >
// //                             <span className="text-gray-400 group-hover:text-red-500">🔄</span>
// //                             <span className="text-gray-600 text-sm group-hover:text-red-600 transition-colors">{item}</span>
// //                           </motion.div>
// //                         ))}
// //                       </div>
// //                     </div>
// //                   </motion.div>
// //                 </motion.div>

// //                 <motion.div
// //                   initial={{ x: "120%", opacity: 0 }}
// //                   animate={{ 
// //                     x: stage >= 1 ? "0%" : "120%",
// //                     opacity: stage >= 1 ? 1 : 0
// //                   }}
// //                   transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
// //                   className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
// //                 >
// //                   <motion.div
// //                     animate={{ opacity: stage === 2 ? 1 : 0 }}
// //                     transition={{ duration: 0.8, delay: 0.5 }}
// //                   >
// //                     <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
// //                       Pallet <span className="text-red-600">Shippers</span>
// //                     </h3>
// //                     <p className="text-gray-500 text-sm mb-6 leading-relaxed">
// //                       We provide tailored services for pallet shippers, ensuring your cargo arrives 
// //                       safely and efficiently.
// //                     </p>

// //                     <div className="mb-6">
// //                       <h4 className="text-sm font-semibold text-red-600 mb-3 uppercase tracking-wide">
// //                         Single Use
// //                       </h4>
// //                       <div className="space-y-2">
// //                         {["COOLPALL VERTOS", "COOLPALL VERTOS ADVANCE"].map((item, idx) => (
// //                           <motion.div
// //                             key={idx}
// //                             initial={{ opacity: 0, x: 20 }}
// //                             animate={{ opacity: stage === 2 ? 1 : 0, x: stage === 2 ? 0 : 20 }}
// //                             transition={{ duration: 0.4, delay: 0.7 + idx * 0.1 }}
// //                             className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition-all duration-300 cursor-pointer group"
// //                           >
// //                             <span className="text-gray-400 group-hover:text-red-500">📦</span>
// //                             <span className="text-gray-600 text-sm group-hover:text-red-600 transition-colors">{item}</span>
// //                           </motion.div>
// //                         ))}
// //                       </div>
// //                     </div>

// //                     <div>
// //                       <h4 className="text-sm font-semibold text-red-600 mb-3 uppercase tracking-wide">
// //                         Reusable
// //                       </h4>
// //                       <div className="space-y-2">
// //                         {["Credo XTEND", "CREDO CARGO"].map((item, idx) => (
// //                           <motion.div
// //                             key={idx}
// //                             initial={{ opacity: 0, x: 20 }}
// //                             animate={{ opacity: stage === 2 ? 1 : 0, x: stage === 2 ? 0 : 20 }}
// //                             transition={{ duration: 0.4, delay: 1.1 + idx * 0.1 }}
// //                             className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition-all duration-300 cursor-pointer group"
// //                           >
// //                             <span className="text-gray-400 group-hover:text-red-500">🔄</span>
// //                             <span className="text-gray-600 text-sm group-hover:text-red-600 transition-colors">{item}</span>
// //                           </motion.div>
// //                         ))}
// //                       </div>
// //                     </div>
// //                   </motion.div>
// //                 </motion.div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* SERIES GUIDE SECTION */}
// //       <section className="py-20 bg-gray-50">
// //         <div className="max-w-7xl mx-auto px-6">
// //           <motion.div
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8 }}
// //             viewport={{ once: true }}
// //             className="text-center mb-12"
// //           >
// //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
// //               Series Guide
// //             </h2>
// //             <p className="text-gray-500 text-base max-w-3xl mx-auto leading-relaxed">
// //               This guide outlines temperature-controlled packaging solutions designed for the safe transport 
// //               and storage of sensitive products, like vaccines and biologics, across various thermal conditions, 
// //               from refrigerated to deep-freeze.
// //             </p>
// //           </motion.div>

// //           <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
// //             {[
// //               { series: "SERIES 4", temp: "15°C - 25°C", usage: "Controlled room temperature", ideal: "Medicines, cosmetics" },
// //               { series: "SERIES 20M", temp: "-20°C", usage: "Frozen products", ideal: "Vaccines, biologics" },
// //               { series: "SERIES 50M", temp: "-50°C", usage: "Extreme cold chain", ideal: "Advanced biologics, special pharmaceuticals" }
// //             ].map((item, idx) => (
// //               <motion.div
// //                 key={idx}
// //                 initial={{ opacity: 0, y: 30 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.5, delay: idx * 0.1 }}
// //                 viewport={{ once: true }}
// //                 className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
// //               >
// //                 <div className="flex items-center gap-3 mb-4">
// //                   <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
// //                     <span className="text-red-600 text-xl">🌡️</span>
// //                   </div>
// //                   <h3 className="text-xl font-bold text-gray-800">{item.series}</h3>
// //                 </div>
// //                 <div className="space-y-3">
// //                   <div>
// //                     <h4 className="text-xs font-semibold text-red-600 uppercase tracking-wide">Temperature Range:</h4>
// //                     <p className="text-gray-600 text-sm">{item.temp}</p>
// //                   </div>
// //                   <div>
// //                     <h4 className="text-xs font-semibold text-red-600 uppercase tracking-wide">Usage & Applications:</h4>
// //                     <p className="text-gray-600 text-sm">{item.usage}</p>
// //                   </div>
// //                   <div>
// //                     <h4 className="text-xs font-semibold text-red-600 uppercase tracking-wide">Ideal For:</h4>
// //                     <p className="text-gray-600 text-sm">{item.ideal}</p>
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* HORIZONTAL SCROLL BANDS SECTION */}
// //       <HorizontalScrollSection />

// //       {/* FAQ SECTION */}
// //       <section className="py-20 bg-white">
// //         <div className="max-w-7xl mx-auto px-6">
// //           <div className="grid lg:grid-cols-2 gap-12">
            
// //             <motion.div
// //               initial={{ opacity: 0, x: -30 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.6 }}
// //               viewport={{ once: true }}
// //               className="sticky top-32 self-start"
// //             >
// //               <div className="bg-red-50 rounded-2xl p-8">
// //                 <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
// //                   <span className="text-red-600 text-xl">❓</span>
// //                 </div>
// //                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
// //                   Frequently Asked <br />
// //                   <span className="text-red-600">Questions</span>
// //                 </h2>
// //                 <div className="w-16 h-0.5 bg-red-600 mb-6" />
// //                 <p className="text-gray-500 text-base leading-relaxed">
// //                   Explore our frequently asked questions to gain clarity about Penta Kuhl's services and features.
// //                 </p>
                
// //                 <div className="mt-8 p-5 bg-white rounded-xl border border-gray-100">
// //                   <div className="flex items-center gap-3 mb-3">
// //                     <span className="text-2xl">🛡️</span>
// //                     <span className="text-sm font-semibold text-red-600">Need more help?</span>
// //                   </div>
// //                   <p className="text-gray-500 text-sm">
// //                     Can't find what you're looking for? Contact our support team.
// //                   </p>
// //                   <button className="mt-4 text-red-600 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
// //                     Contact Support <span>→</span>
// //                   </button>
// //                 </div>
// //               </div>
// //             </motion.div>

// //             <motion.div
// //               initial={{ opacity: 0, x: 30 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.6, delay: 0.2 }}
// //               viewport={{ once: true }}
// //               className="space-y-4"
// //             >
// //               {faqs.map((faq, idx) => (
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

// //           <motion.div
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 0.5 }}
// //             viewport={{ once: true }}
// //             className="mt-16 text-center bg-red-50 rounded-2xl p-10 border border-red-100"
// //           >
// //             <div className="inline-block p-3 bg-red-100 rounded-full mb-4">
// //               <span className="text-3xl">🛡️</span>
// //             </div>
// //             <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
// //               Protecting What Matters Most
// //             </h3>
// //             <p className="text-gray-500 mb-6">
// //               Get in touch to ensure safe and temperature-stable transit for your sensitive products.
// //             </p>
// //             <motion.button
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //               className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-md"
// //             >
// //               Contact Us Today →
// //             </motion.button>
// //           </motion.div>
// //         </div>
// //       </section>
// //     </>
// //   );
// // };

// // export default Pentakuhl;










// import { motion } from "framer-motion";
// import { useRef, useState, useEffect } from "react";
// import { useScroll, useTransform } from "framer-motion";

// // Brand tokens (matching Home page)
// // Orange   : #616161
// // Teal     : #3d5a6b
// // White bg : #ffffff
// // Card bg  : #f5f3f0

// // Horizontal Scroll Band Component
// const HorizontalScrollSection = () => {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });

//   const upperBandX = useTransform(scrollYProgress, [0, 1], [0, -500]);
//   const lowerBandX = useTransform(scrollYProgress, [0, 1], [0, 500]);

//   const menuItems = [
//     "Robust Load Security",
//     "Expert Logistics Support",
//     "Tailored Freight Solutions",
//     "Flexible Shipping Schedules",
//     "Volume Discounts",
//     "End-to-End Supply Chain Management",
//   ];

//   return (
//     <section 
//       ref={containerRef}
//       className="relative min-h-[100vh] bg-white overflow-hidden"
//     >
//       <div className="sticky top-0 h-screen flex flex-col items-center justify-center gap-4 px-4">
        
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center"
//         >
//           <span className="text-[#e8521a] text-xs font-semibold tracking-wider px-3 py-1 bg-red-50 rounded-full">
//             MENU
//           </span>
//         </motion.div>

//         <motion.div
//           style={{ x: upperBandX }}
//           className="w-full overflow-visible py-3"
//         >
//           <div className="flex gap-3 whitespace-nowrap">
//             {menuItems.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-5 py-2.5 shadow-sm border border-gray-200 hover:border-[#e8521a] hover:bg-red-50 transition-all duration-300 cursor-pointer group"
//               >
//                 <span className="w-1.5 h-1.5 bg-[#e8521a] rounded-full group-hover:scale-150 transition-transform" />
//                 <span className="text-gray-700 text-sm group-hover:text-[#e8521a] transition-colors whitespace-nowrap">
//                   {item}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </motion.div>

//         <motion.div
//           style={{ x: lowerBandX }}
//           className="w-full overflow-visible py-3"
//         >
//           <div className="flex gap-3 whitespace-nowrap">
//             {[...menuItems].reverse().map((item, idx) => (
//               <div
//                 key={idx}
//                 className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-5 py-2.5 shadow-sm border border-gray-200 hover:border-[#e8521a] hover:bg-red-50 transition-all duration-300 cursor-pointer group"
//               >
//                 <span className="w-1.5 h-1.5 bg-[#e8521a] rounded-full group-hover:scale-150 transition-transform" />
//                 <span className="text-gray-700 text-sm group-hover:text-[#e8521a] transition-colors whitespace-nowrap">
//                   {item}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </motion.div>

//         <motion.div
//           animate={{ y: [0, 8, 0] }}
//           transition={{ repeat: Infinity, duration: 1.5 }}
//           className="absolute bottom-8 text-gray-400 text-xs text-center"
//         >
//           Scroll ↓
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// // Accordion Item Component
// const AccordionItem = ({ question, answer, isOpen, onClick }) => {
//   return (
//     <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
//       <button
//         onClick={onClick}
//         className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
//       >
//         <span className="text-gray-800 font-medium text-base">{question}</span>
//         <motion.span
//           animate={{ rotate: isOpen ? 180 : 0 }}
//           transition={{ duration: 0.3 }}
//           className="text-[#e8521a] text-xl"
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
//         <div className="p-5 pt-0 border-t border-gray-100">
//           <p className="text-gray-500 text-sm leading-relaxed">{answer}</p>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// const Pentakuhl = () => {
//   const productSectionRef = useRef(null);
//   const [stage, setStage] = useState(0);
//   const [openFaqIndex, setOpenFaqIndex] = useState(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (productSectionRef.current) {
//         const rect = productSectionRef.current.getBoundingClientRect();
//         const windowHeight = window.innerHeight;
        
//         const scrollProgress = Math.max(0, Math.min(1, 
//           (windowHeight - rect.top) / (windowHeight * 1.5)
//         ));
        
//         if (scrollProgress < 0.1) {
//           setStage(0);
//         } else if (scrollProgress >= 0.1 && scrollProgress < 0.4) {
//           setStage(1);
//         } else if (scrollProgress >= 0.4) {
//           setStage(2);
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();
    
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const faqs = [
//     {
//       question: "What is Penta Kuhl?",
//       answer: "Penta Kuhl is a specialized temperature-controlled packaging solution designed to maintain product integrity during transit for sensitive goods like pharmaceuticals, biologics, and food products. Our advanced technology ensures your products remain within the required temperature range throughout the shipping process."
//     },
//     {
//       question: "How does Penta Kuhl ensure cargo safety?",
//       answer: "We use advanced temperature monitoring systems, insulated packaging materials, GPS tracking, and real-time alerts to ensure your cargo remains within the required temperature range throughout transit. Our multi-layer protection system includes thermal barriers, phase change materials, and continuous data logging."
//     },
//     {
//       question: "What types of cargo can Penta Kuhl handle?",
//       answer: "Penta Kuhl is equipped to manage various cargo types, including perishable goods, heavy equipment, pharmaceuticals, biologics, chemicals, food products, and any temperature-sensitive materials requiring controlled environments from -50°C to +25°C."
//     },
//     {
//       question: "Is there customer support available for Penta Kuhl users?",
//       answer: "Yes, we offer 24/7 customer support to assist with any questions or issues regarding your temperature-controlled shipments. Our dedicated team is available via phone, email, and live chat to provide real-time assistance and monitoring."
//     }
//   ];

//   return (
//     <div style={{ background: "#fff", fontFamily: "'Segoe UI', sans-serif" }}>
//       {/* Hero Section */}
//       <section className="relative min-h-[70vh] bg-gradient-to-br from-[#e8521a] to-[#c94415] overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <div className="w-full h-full bg-[radial-gradient(circle_at_center,#fff_1px,transparent_1px)] bg-[length:40px_40px]" />
//         </div>
        
//         <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
//         <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

//         <div className="relative z-20 h-full flex items-center justify-center min-h-[70vh]">
//           <div className="max-w-4xl mx-auto px-6 text-center">
//             <motion.h1
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
//             >
//               Ensuring Safe Transport for <br />
//               <span className="text-yellow-300">Temperature-Sensitive Products</span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="text-lg text-white/80 max-w-2xl mx-auto mb-8"
//             >
//               Explore our frequently asked questions to gain clarity about Penta Kuhl's services and features
//             </motion.p>

//             <motion.button
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-white text-[#e8521a] px-8 py-3 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300"
//             >
//               Explore More ↓
//             </motion.button>

//             <motion.div
//               initial={{ opacity: 0, width: 0 }}
//               animate={{ opacity: 1, width: 80 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//               className="h-1 bg-yellow-300 mx-auto mt-8 rounded-full"
//               style={{ width: 80 }}
//             />
//           </div>
//         </div>
//       </section>

//       {/* About Penta KÜHL Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid md:grid-cols-2 gap-12 items-start">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//                 ABOUT <br />
//                 <span className="text-[#e8521a]">PENTA KÜHL</span>
//               </h2>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="space-y-4"
//             >
//               <p className="text-gray-600 text-base leading-relaxed">
//                 At <span className="font-semibold text-[#e8521a]">Pentakuhl</span>, we specialize in providing durable, 
//                 effective packaging solutions that maintain temperature 
//                 <span className="font-semibold text-[#e8521a]"> stability </span> 
//                 during transit, 
//                 <span className="font-semibold text-[#e8521a]"> protecting </span> 
//                 your valuable products.
//               </p>
//               <p className="text-gray-600 text-base leading-relaxed">
//                 Our innovative designs cater to various industries, including pharmaceuticals, 
//                 food, and biotechnology.
//               </p>
//               <div className="w-16 h-0.5 bg-[#e8521a] rounded-full mt-4" />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Authorized Distributors Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-center mb-10"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
//               PENTA FREIGHT
//             </h2>
//             <div className="w-20 h-0.5 bg-[#e8521a] mx-auto" />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
//           >
//             <div className="grid md:grid-cols-2 gap-0">
//               <div className="bg-red-50 p-10 flex items-center justify-center">
//                 <div className="text-center">
//                   <div className="text-5xl mb-3">❄️</div>
//                   <div className="text-lg font-bold text-gray-800">Pelican BioThermal™</div>
//                   <div className="text-gray-500 text-xs mt-1">Trusted Partner</div>
//                 </div>
//               </div>
//               <div className="p-10">
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">
//                   Authorized Distributors for 
//                   <span className="text-[#e8521a] block mt-1">Pelican BioThermal™ Products</span>
//                 </h3>
//                 <p className="text-gray-500 text-sm leading-relaxed mb-5">
//                   Penta Freight is proud to be an authorized distributor for Pelican BioThermal™, 
//                   offering world-class temperature-controlled packaging solutions for 
//                   pharmaceutical, biotech, and life sciences industries.
//                 </p>
//                 <motion.button
//                   whileHover={{ x: 8 }}
//                   className="text-[#e8521a] font-semibold text-sm flex items-center gap-2 group"
//                 >
//                   Read more 
//                   <span className="text-[#e8521a] group-hover:translate-x-1 transition-transform duration-300">→</span>
//                 </motion.button>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* PRODUCT SOLUTIONS SECTION */}
//       <section 
//         ref={productSectionRef}
//         className="relative min-h-[150vh] bg-white overflow-hidden"
//       >
//         <div className="sticky top-0 h-screen flex items-center justify-center">
          
//           <motion.div
//             animate={{ 
//               opacity: stage === 2 ? 0 : 1,
//               scale: stage === 2 ? 0.7 : 1,
//               y: stage === 2 ? -80 : 0
//             }}
//             transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
//             className="absolute z-20"
//           >
//             <h2 className="text-5xl md:text-7xl font-bold text-gray-900 text-center">
//               Product <span className="text-[#e8521a]">Solutions</span>
//             </h2>
//             <motion.p
//               animate={{ opacity: stage === 2 ? 0 : 0.5 }}
//               transition={{ duration: 0.8 }}
//               className="text-gray-400 text-center mt-3 text-sm"
//             >
//               Scroll to explore
//             </motion.p>
//           </motion.div>

//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="w-full max-w-6xl mx-auto px-6">
//               <div className="grid lg:grid-cols-2 gap-8">
                
//                 <motion.div
//                   initial={{ x: "-120%", opacity: 0 }}
//                   animate={{ 
//                     x: stage >= 1 ? "0%" : "-120%",
//                     opacity: stage >= 1 ? 1 : 0
//                   }}
//                   transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
//                   className="bg-[#f5f3f0] rounded-2xl p-8 shadow-lg border border-gray-100"
//                 >
//                   <motion.div
//                     animate={{ opacity: stage === 2 ? 1 : 0 }}
//                     transition={{ duration: 0.8, delay: 0.4 }}
//                   >
//                     <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
//                       Parcel <span className="text-[#e8521a]">Shippers</span>
//                     </h3>
//                     <p className="text-gray-600 text-sm mb-6 leading-relaxed">
//                       We understand the unique challenges faced by parcel shippers and offer 
//                       tailored solutions for seamless shipping.
//                     </p>

//                     <div className="mb-6">
//                       <h4 className="text-sm font-semibold text-[#e8521a] mb-3 uppercase tracking-wide">
//                         Single Use
//                       </h4>
//                       <div className="space-y-2">
//                         {["COOLGUARD", "COOLGUARD RM", "COOLGUARD ADVANCE"].map((item, idx) => (
//                           <motion.div
//                             key={idx}
//                             initial={{ opacity: 0, x: -20 }}
//                             animate={{ opacity: stage === 2 ? 1 : 0, x: stage === 2 ? 0 : -20 }}
//                             transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
//                             className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-red-50 transition-all duration-300 cursor-pointer group"
//                           >
//                             <span className="text-gray-400 group-hover:text-[#e8521a]">📦</span>
//                             <span className="text-gray-600 text-sm group-hover:text-[#e8521a] transition-colors">{item}</span>
//                           </motion.div>
//                         ))}
//                       </div>
//                     </div>

//                     <div>
//                       <h4 className="text-sm font-semibold text-[#e8521a] mb-3 uppercase tracking-wide">
//                         Reusable
//                       </h4>
//                       <div className="space-y-2">
//                         {["Credo Cube"].map((item, idx) => (
//                           <motion.div
//                             key={idx}
//                             initial={{ opacity: 0, x: -20 }}
//                             animate={{ opacity: stage === 2 ? 1 : 0, x: stage === 2 ? 0 : -20 }}
//                             transition={{ duration: 0.4, delay: 1.0 }}
//                             className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-red-50 transition-all duration-300 cursor-pointer group"
//                           >
//                             <span className="text-gray-400 group-hover:text-[#e8521a]">🔄</span>
//                             <span className="text-gray-600 text-sm group-hover:text-[#e8521a] transition-colors">{item}</span>
//                           </motion.div>
//                         ))}
//                       </div>
//                     </div>
//                   </motion.div>
//                 </motion.div>

//                 <motion.div
//                   initial={{ x: "120%", opacity: 0 }}
//                   animate={{ 
//                     x: stage >= 1 ? "0%" : "120%",
//                     opacity: stage >= 1 ? 1 : 0
//                   }}
//                   transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
//                   className="bg-[#f5f3f0] rounded-2xl p-8 shadow-lg border border-gray-100"
//                 >
//                   <motion.div
//                     animate={{ opacity: stage === 2 ? 1 : 0 }}
//                     transition={{ duration: 0.8, delay: 0.5 }}
//                   >
//                     <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
//                       Pallet <span className="text-[#e8521a]">Shippers</span>
//                     </h3>
//                     <p className="text-gray-600 text-sm mb-6 leading-relaxed">
//                       We provide tailored services for pallet shippers, ensuring your cargo arrives 
//                       safely and efficiently.
//                     </p>

//                     <div className="mb-6">
//                       <h4 className="text-sm font-semibold text-[#e8521a] mb-3 uppercase tracking-wide">
//                         Single Use
//                       </h4>
//                       <div className="space-y-2">
//                         {["COOLPALL VERTOS", "COOLPALL VERTOS ADVANCE"].map((item, idx) => (
//                           <motion.div
//                             key={idx}
//                             initial={{ opacity: 0, x: 20 }}
//                             animate={{ opacity: stage === 2 ? 1 : 0, x: stage === 2 ? 0 : 20 }}
//                             transition={{ duration: 0.4, delay: 0.7 + idx * 0.1 }}
//                             className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-red-50 transition-all duration-300 cursor-pointer group"
//                           >
//                             <span className="text-gray-400 group-hover:text-[#e8521a]">📦</span>
//                             <span className="text-gray-600 text-sm group-hover:text-[#e8521a] transition-colors">{item}</span>
//                           </motion.div>
//                         ))}
//                       </div>
//                     </div>

//                     <div>
//                       <h4 className="text-sm font-semibold text-[#e8521a] mb-3 uppercase tracking-wide">
//                         Reusable
//                       </h4>
//                       <div className="space-y-2">
//                         {["Credo XTEND", "CREDO CARGO"].map((item, idx) => (
//                           <motion.div
//                             key={idx}
//                             initial={{ opacity: 0, x: 20 }}
//                             animate={{ opacity: stage === 2 ? 1 : 0, x: stage === 2 ? 0 : 20 }}
//                             transition={{ duration: 0.4, delay: 1.1 + idx * 0.1 }}
//                             className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-red-50 transition-all duration-300 cursor-pointer group"
//                           >
//                             <span className="text-gray-400 group-hover:text-[#e8521a]">🔄</span>
//                             <span className="text-gray-600 text-sm group-hover:text-[#e8521a] transition-colors">{item}</span>
//                           </motion.div>
//                         ))}
//                       </div>
//                     </div>
//                   </motion.div>
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SERIES GUIDE SECTION */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Series Guide
//             </h2>
//             <p className="text-gray-500 text-base max-w-3xl mx-auto leading-relaxed">
//               This guide outlines temperature-controlled packaging solutions designed for the safe transport 
//               and storage of sensitive products, like vaccines and biologics, across various thermal conditions, 
//               from refrigerated to deep-freeze.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
//             {[
//               { series: "SERIES 4", temp: "15°C - 25°C", usage: "Controlled room temperature", ideal: "Medicines, cosmetics" },
//               { series: "SERIES 20M", temp: "-20°C", usage: "Frozen products", ideal: "Vaccines, biologics" },
//               { series: "SERIES 50M", temp: "-50°C", usage: "Extreme cold chain", ideal: "Advanced biologics, special pharmaceuticals" }
//             ].map((item, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: idx * 0.1 }}
//                 viewport={{ once: true }}
//                 className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
//               >
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
//                     <span className="text-[#e8521a] text-xl">🌡️</span>
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-800">{item.series}</h3>
//                 </div>
//                 <div className="space-y-3">
//                   <div>
//                     <h4 className="text-xs font-semibold text-[#e8521a] uppercase tracking-wide">Temperature Range:</h4>
//                     <p className="text-gray-600 text-sm">{item.temp}</p>
//                   </div>
//                   <div>
//                     <h4 className="text-xs font-semibold text-[#e8521a] uppercase tracking-wide">Usage & Applications:</h4>
//                     <p className="text-gray-600 text-sm">{item.usage}</p>
//                   </div>
//                   <div>
//                     <h4 className="text-xs font-semibold text-[#e8521a] uppercase tracking-wide">Ideal For:</h4>
//                     <p className="text-gray-600 text-sm">{item.ideal}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* HORIZONTAL SCROLL BANDS SECTION */}
//       <HorizontalScrollSection />

//       {/* FAQ SECTION */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid lg:grid-cols-2 gap-12">
            
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="sticky top-32 self-start"
//             >
//               <div className="bg-red-50 rounded-2xl p-8">
//                 <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
//                   <span className="text-[#e8521a] text-xl">❓</span>
//                 </div>
//                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//                   Frequently Asked <br />
//                   <span className="text-[#e8521a]">Questions</span>
//                 </h2>
//                 <div className="w-16 h-0.5 bg-[#e8521a] mb-6" />
//                 <p className="text-gray-500 text-base leading-relaxed">
//                   Explore our frequently asked questions to gain clarity about Penta Kuhl's services and features.
//                 </p>
                
//                 <div className="mt-8 p-5 bg-white rounded-xl border border-gray-100">
//                   <div className="flex items-center gap-3 mb-3">
//                     <span className="text-2xl">🛡️</span>
//                     <span className="text-sm font-semibold text-[#e8521a]">Need more help?</span>
//                   </div>
//                   <p className="text-gray-500 text-sm">
//                     Can't find what you're looking for? Contact our support team.
//                   </p>
//                   <button className="mt-4 text-[#e8521a] text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
//                     Contact Support <span>→</span>
//                   </button>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="space-y-4"
//             >
//               {faqs.map((faq, idx) => (
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

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.5 }}
//             viewport={{ once: true }}
//             className="mt-16 text-center bg-red-50 rounded-2xl p-10 border border-red-100"
//           >
//             <div className="inline-block p-3 bg-red-100 rounded-full mb-4">
//               <span className="text-3xl">🛡️</span>
//             </div>
//             <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
//               Protecting What Matters Most
//             </h3>
//             <p className="text-gray-500 mb-6">
//               Get in touch to ensure safe and temperature-stable transit for your sensitive products.
//             </p>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-[#e8521a] hover:bg-[#c94415] text-white px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-md"
//             >
//               Contact Us Today →
//             </motion.button>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Pentakuhl;






// import { motion } from "framer-motion";
// import { useRef, useState, useEffect } from "react";
// import { useScroll, useTransform } from "framer-motion";

// // Brand tokens (matching Home page)
// // Orange   : #e8521a
// // Teal     : #3d5a6b
// // White bg : #ffffff
// // Card bg  : #f5f3f0
// // Light Grey: #f5f5f5 or #f3f4f6

// // Horizontal Scroll Band Component
// const HorizontalScrollSection = () => {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });

//   const upperBandX = useTransform(scrollYProgress, [0, 1], [0, -500]);
//   const lowerBandX = useTransform(scrollYProgress, [0, 1], [0, 500]);

//   const menuItems = [
//     "Robust Load Security",
//     "Expert Logistics Support",
//     "Tailored Freight Solutions",
//     "Flexible Shipping Schedules",
//     "Volume Discounts",
//     "End-to-End Supply Chain Management",
//   ];

//   return (
//     <section 
//       ref={containerRef}
//       className="relative min-h-[100vh] bg-white overflow-hidden"
//     >
//       <div className="sticky top-0 h-screen flex flex-col items-center justify-center gap-4 px-4">
        
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center"
//         >
//           <span className="text-[#e8521a] text-xs font-semibold tracking-wider px-3 py-1 bg-red-50 rounded-full">
//             MENU
//           </span>
//         </motion.div>

//         <motion.div
//           style={{ x: upperBandX }}
//           className="w-full overflow-visible py-3"
//         >
//           <div className="flex gap-3 whitespace-nowrap">
//             {menuItems.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-5 py-2.5 shadow-sm border border-gray-200 hover:border-[#e8521a] hover:bg-red-50 transition-all duration-300 cursor-pointer group"
//               >
//                 <span className="w-1.5 h-1.5 bg-[#e8521a] rounded-full group-hover:scale-150 transition-transform" />
//                 <span className="text-gray-700 text-sm group-hover:text-[#e8521a] transition-colors whitespace-nowrap">
//                   {item}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </motion.div>

//         <motion.div
//           style={{ x: lowerBandX }}
//           className="w-full overflow-visible py-3"
//         >
//           <div className="flex gap-3 whitespace-nowrap">
//             {[...menuItems].reverse().map((item, idx) => (
//               <div
//                 key={idx}
//                 className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-5 py-2.5 shadow-sm border border-gray-200 hover:border-[#e8521a] hover:bg-red-50 transition-all duration-300 cursor-pointer group"
//               >
//                 <span className="w-1.5 h-1.5 bg-[#e8521a] rounded-full group-hover:scale-150 transition-transform" />
//                 <span className="text-gray-700 text-sm group-hover:text-[#e8521a] transition-colors whitespace-nowrap">
//                   {item}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </motion.div>

//         <motion.div
//           animate={{ y: [0, 8, 0] }}
//           transition={{ repeat: Infinity, duration: 1.5 }}
//           className="absolute bottom-8 text-gray-400 text-xs text-center"
//         >
//           Scroll ↓
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// // Accordion Item Component
// const AccordionItem = ({ question, answer, isOpen, onClick }) => {
//   return (
//     <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
//       <button
//         onClick={onClick}
//         className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
//       >
//         <span className="text-gray-800 font-medium text-base">{question}</span>
//         <motion.span
//           animate={{ rotate: isOpen ? 180 : 0 }}
//           transition={{ duration: 0.3 }}
//           className="text-[#e8521a] text-xl"
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
//         <div className="p-5 pt-0 border-t border-gray-100">
//           <p className="text-gray-500 text-sm leading-relaxed">{answer}</p>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// const Pentakuhl = () => {
//   const productSectionRef = useRef(null);
//   const [stage, setStage] = useState(0);
//   const [openFaqIndex, setOpenFaqIndex] = useState(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (productSectionRef.current) {
//         const rect = productSectionRef.current.getBoundingClientRect();
//         const windowHeight = window.innerHeight;
        
//         const scrollProgress = Math.max(0, Math.min(1, 
//           (windowHeight - rect.top) / (windowHeight * 1.5)
//         ));
        
//         if (scrollProgress < 0.1) {
//           setStage(0);
//         } else if (scrollProgress >= 0.1 && scrollProgress < 0.4) {
//           setStage(1);
//         } else if (scrollProgress >= 0.4) {
//           setStage(2);
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();
    
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const faqs = [
//     {
//       question: "What is Penta Kuhl?",
//       answer: "Penta Kuhl is a specialized temperature-controlled packaging solution designed to maintain product integrity during transit for sensitive goods like pharmaceuticals, biologics, and food products. Our advanced technology ensures your products remain within the required temperature range throughout the shipping process."
//     },
//     {
//       question: "How does Penta Kuhl ensure cargo safety?",
//       answer: "We use advanced temperature monitoring systems, insulated packaging materials, GPS tracking, and real-time alerts to ensure your cargo remains within the required temperature range throughout transit. Our multi-layer protection system includes thermal barriers, phase change materials, and continuous data logging."
//     },
//     {
//       question: "What types of cargo can Penta Kuhl handle?",
//       answer: "Penta Kuhl is equipped to manage various cargo types, including perishable goods, heavy equipment, pharmaceuticals, biologics, chemicals, food products, and any temperature-sensitive materials requiring controlled environments from -50°C to +25°C."
//     },
//     {
//       question: "Is there customer support available for Penta Kuhl users?",
//       answer: "Yes, we offer 24/7 customer support to assist with any questions or issues regarding your temperature-controlled shipments. Our dedicated team is available via phone, email, and live chat to provide real-time assistance and monitoring."
//     }
//   ];

//   return (
//     <div style={{ background: "#fff", fontFamily: "'Segoe UI', sans-serif" }}>
//       {/* Hero Section - LIGHT GREY BACKGROUND instead of orange */}
//       <section className="relative min-h-[70vh] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <div className="w-full h-full bg-[radial-gradient(circle_at_center,#000_1px,transparent_1px)] bg-[length:40px_40px]" />
//         </div>
        
//         <div className="absolute top-20 right-20 w-64 h-64 bg-[#e8521a]/10 rounded-full blur-3xl" />
//         <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#e8521a]/5 rounded-full blur-3xl" />

//         <div className="relative z-20 h-full flex items-center justify-center min-h-[70vh]">
//           <div className="max-w-4xl mx-auto px-6 text-center">
//             <motion.h1
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
//             >
//               Ensuring Safe Transport for <br />
//               <span className="text-[#e8521a]">Temperature-Sensitive Products</span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
//             >
//               Explore our frequently asked questions to gain clarity about Penta Kuhl's services and features
//             </motion.p>

//             <motion.button
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-[#e8521a] text-white px-8 py-3 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300"
//             >
//               Explore More ↓
//             </motion.button>

//             <motion.div
//               initial={{ opacity: 0, width: 0 }}
//               animate={{ opacity: 1, width: 80 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//               className="h-1 bg-[#e8521a] mx-auto mt-8 rounded-full"
//               style={{ width: 80 }}
//             />
//           </div>
//         </div>
//       </section>

//       {/* About Penta KÜHL Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid md:grid-cols-2 gap-12 items-start">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//                 ABOUT <br />
//                 <span className="text-[#e8521a]">PENTA KÜHL</span>
//               </h2>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="space-y-4"
//             >
//               <p className="text-gray-600 text-base leading-relaxed">
//                 At <span className="font-semibold text-[#e8521a]">Pentakuhl</span>, we specialize in providing durable, 
//                 effective packaging solutions that maintain temperature 
//                 <span className="font-semibold text-[#e8521a]"> stability </span> 
//                 during transit, 
//                 <span className="font-semibold text-[#e8521a]"> protecting </span> 
//                 your valuable products.
//               </p>
//               <p className="text-gray-600 text-base leading-relaxed">
//                 Our innovative designs cater to various industries, including pharmaceuticals, 
//                 food, and biotechnology.
//               </p>
//               <div className="w-16 h-0.5 bg-[#e8521a] rounded-full mt-4" />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Authorized Distributors Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-center mb-10"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
//               PENTA FREIGHT
//             </h2>
//             <div className="w-20 h-0.5 bg-[#e8521a] mx-auto" />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
//           >
//             <div className="grid md:grid-cols-2 gap-0">
//               <div className="bg-red-50 p-10 flex items-center justify-center">
//                 <div className="text-center">
//                   <div className="text-5xl mb-3">❄️</div>
//                   <div className="text-lg font-bold text-gray-800">Pelican BioThermal™</div>
//                   <div className="text-gray-500 text-xs mt-1">Trusted Partner</div>
//                 </div>
//               </div>
//               <div className="p-10">
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">
//                   Authorized Distributors for 
//                   <span className="text-[#e8521a] block mt-1">Pelican BioThermal™ Products</span>
//                 </h3>
//                 <p className="text-gray-500 text-sm leading-relaxed mb-5">
//                   Penta Freight is proud to be an authorized distributor for Pelican BioThermal™, 
//                   offering world-class temperature-controlled packaging solutions for 
//                   pharmaceutical, biotech, and life sciences industries.
//                 </p>
//                 <motion.button
//                   whileHover={{ x: 8 }}
//                   className="text-[#e8521a] font-semibold text-sm flex items-center gap-2 group"
//                 >
//                   Read more 
//                   <span className="text-[#e8521a] group-hover:translate-x-1 transition-transform duration-300">→</span>
//                 </motion.button>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* PRODUCT SOLUTIONS SECTION */}
//       <section 
//         ref={productSectionRef}
//         className="relative min-h-[150vh] bg-white overflow-hidden"
//       >
//         <div className="sticky top-0 h-screen flex items-center justify-center">
          
//           <motion.div
//             animate={{ 
//               opacity: stage === 2 ? 0 : 1,
//               scale: stage === 2 ? 0.7 : 1,
//               y: stage === 2 ? -80 : 0
//             }}
//             transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
//             className="absolute z-20"
//           >
//             <h2 className="text-5xl md:text-7xl font-bold text-gray-900 text-center">
//               Product <span className="text-[#e8521a]">Solutions</span>
//             </h2>
//             <motion.p
//               animate={{ opacity: stage === 2 ? 0 : 0.5 }}
//               transition={{ duration: 0.8 }}
//               className="text-gray-400 text-center mt-3 text-sm"
//             >
//               Scroll to explore
//             </motion.p>
//           </motion.div>

//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="w-full max-w-6xl mx-auto px-6">
//               <div className="grid lg:grid-cols-2 gap-8">
                
//                 <motion.div
//                   initial={{ x: "-120%", opacity: 0 }}
//                   animate={{ 
//                     x: stage >= 1 ? "0%" : "-120%",
//                     opacity: stage >= 1 ? 1 : 0
//                   }}
//                   transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
//                   className="bg-[#f5f3f0] rounded-2xl p-8 shadow-lg border border-gray-100"
//                 >
//                   <motion.div
//                     animate={{ opacity: stage === 2 ? 1 : 0 }}
//                     transition={{ duration: 0.8, delay: 0.4 }}
//                   >
//                     <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
//                       Parcel <span className="text-[#e8521a]">Shippers</span>
//                     </h3>
//                     <p className="text-gray-600 text-sm mb-6 leading-relaxed">
//                       We understand the unique challenges faced by parcel shippers and offer 
//                       tailored solutions for seamless shipping.
//                     </p>

//                     <div className="mb-6">
//                       <h4 className="text-sm font-semibold text-[#e8521a] mb-3 uppercase tracking-wide">
//                         Single Use
//                       </h4>
//                       <div className="space-y-2">
//                         {["COOLGUARD", "COOLGUARD RM", "COOLGUARD ADVANCE"].map((item, idx) => (
//                           <motion.div
//                             key={idx}
//                             initial={{ opacity: 0, x: -20 }}
//                             animate={{ opacity: stage === 2 ? 1 : 0, x: stage === 2 ? 0 : -20 }}
//                             transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
//                             className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-red-50 transition-all duration-300 cursor-pointer group"
//                           >
//                             <span className="text-gray-400 group-hover:text-[#e8521a]">📦</span>
//                             <span className="text-gray-600 text-sm group-hover:text-[#e8521a] transition-colors">{item}</span>
//                           </motion.div>
//                         ))}
//                       </div>
//                     </div>

//                     <div>
//                       <h4 className="text-sm font-semibold text-[#e8521a] mb-3 uppercase tracking-wide">
//                         Reusable
//                       </h4>
//                       <div className="space-y-2">
//                         {["Credo Cube"].map((item, idx) => (
//                           <motion.div
//                             key={idx}
//                             initial={{ opacity: 0, x: -20 }}
//                             animate={{ opacity: stage === 2 ? 1 : 0, x: stage === 2 ? 0 : -20 }}
//                             transition={{ duration: 0.4, delay: 1.0 }}
//                             className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-red-50 transition-all duration-300 cursor-pointer group"
//                           >
//                             <span className="text-gray-400 group-hover:text-[#e8521a]">🔄</span>
//                             <span className="text-gray-600 text-sm group-hover:text-[#e8521a] transition-colors">{item}</span>
//                           </motion.div>
//                         ))}
//                       </div>
//                     </div>
//                   </motion.div>
//                 </motion.div>

//                 <motion.div
//                   initial={{ x: "120%", opacity: 0 }}
//                   animate={{ 
//                     x: stage >= 1 ? "0%" : "120%",
//                     opacity: stage >= 1 ? 1 : 0
//                   }}
//                   transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
//                   className="bg-[#f5f3f0] rounded-2xl p-8 shadow-lg border border-gray-100"
//                 >
//                   <motion.div
//                     animate={{ opacity: stage === 2 ? 1 : 0 }}
//                     transition={{ duration: 0.8, delay: 0.5 }}
//                   >
//                     <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
//                       Pallet <span className="text-[#e8521a]">Shippers</span>
//                     </h3>
//                     <p className="text-gray-600 text-sm mb-6 leading-relaxed">
//                       We provide tailored services for pallet shippers, ensuring your cargo arrives 
//                       safely and efficiently.
//                     </p>

//                     <div className="mb-6">
//                       <h4 className="text-sm font-semibold text-[#e8521a] mb-3 uppercase tracking-wide">
//                         Single Use
//                       </h4>
//                       <div className="space-y-2">
//                         {["COOLPALL VERTOS", "COOLPALL VERTOS ADVANCE"].map((item, idx) => (
//                           <motion.div
//                             key={idx}
//                             initial={{ opacity: 0, x: 20 }}
//                             animate={{ opacity: stage === 2 ? 1 : 0, x: stage === 2 ? 0 : 20 }}
//                             transition={{ duration: 0.4, delay: 0.7 + idx * 0.1 }}
//                             className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-red-50 transition-all duration-300 cursor-pointer group"
//                           >
//                             <span className="text-gray-400 group-hover:text-[#e8521a]">📦</span>
//                             <span className="text-gray-600 text-sm group-hover:text-[#e8521a] transition-colors">{item}</span>
//                           </motion.div>
//                         ))}
//                       </div>
//                     </div>

//                     <div>
//                       <h4 className="text-sm font-semibold text-[#e8521a] mb-3 uppercase tracking-wide">
//                         Reusable
//                       </h4>
//                       <div className="space-y-2">
//                         {["Credo XTEND", "CREDO CARGO"].map((item, idx) => (
//                           <motion.div
//                             key={idx}
//                             initial={{ opacity: 0, x: 20 }}
//                             animate={{ opacity: stage === 2 ? 1 : 0, x: stage === 2 ? 0 : 20 }}
//                             transition={{ duration: 0.4, delay: 1.1 + idx * 0.1 }}
//                             className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-red-50 transition-all duration-300 cursor-pointer group"
//                           >
//                             <span className="text-gray-400 group-hover:text-[#e8521a]">🔄</span>
//                             <span className="text-gray-600 text-sm group-hover:text-[#e8521a] transition-colors">{item}</span>
//                           </motion.div>
//                         ))}
//                       </div>
//                     </div>
//                   </motion.div>
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SERIES GUIDE SECTION */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Series Guide
//             </h2>
//             <p className="text-gray-500 text-base max-w-3xl mx-auto leading-relaxed">
//               This guide outlines temperature-controlled packaging solutions designed for the safe transport 
//               and storage of sensitive products, like vaccines and biologics, across various thermal conditions, 
//               from refrigerated to deep-freeze.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
//             {[
//               { series: "SERIES 4", temp: "15°C - 25°C", usage: "Controlled room temperature", ideal: "Medicines, cosmetics" },
//               { series: "SERIES 20M", temp: "-20°C", usage: "Frozen products", ideal: "Vaccines, biologics" },
//               { series: "SERIES 50M", temp: "-50°C", usage: "Extreme cold chain", ideal: "Advanced biologics, special pharmaceuticals" }
//             ].map((item, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: idx * 0.1 }}
//                 viewport={{ once: true }}
//                 className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
//               >
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
//                     <span className="text-[#e8521a] text-xl">🌡️</span>
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-800">{item.series}</h3>
//                 </div>
//                 <div className="space-y-3">
//                   <div>
//                     <h4 className="text-xs font-semibold text-[#e8521a] uppercase tracking-wide">Temperature Range:</h4>
//                     <p className="text-gray-600 text-sm">{item.temp}</p>
//                   </div>
//                   <div>
//                     <h4 className="text-xs font-semibold text-[#e8521a] uppercase tracking-wide">Usage & Applications:</h4>
//                     <p className="text-gray-600 text-sm">{item.usage}</p>
//                   </div>
//                   <div>
//                     <h4 className="text-xs font-semibold text-[#e8521a] uppercase tracking-wide">Ideal For:</h4>
//                     <p className="text-gray-600 text-sm">{item.ideal}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* HORIZONTAL SCROLL BANDS SECTION */}
//       <HorizontalScrollSection />

//       {/* FAQ SECTION */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid lg:grid-cols-2 gap-12">
            
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="sticky top-32 self-start"
//             >
//               <div className="bg-red-50 rounded-2xl p-8">
//                 <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
//                   <span className="text-[#e8521a] text-xl">❓</span>
//                 </div>
//                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//                   Frequently Asked <br />
//                   <span className="text-[#e8521a]">Questions</span>
//                 </h2>
//                 <div className="w-16 h-0.5 bg-[#e8521a] mb-6" />
//                 <p className="text-gray-500 text-base leading-relaxed">
//                   Explore our frequently asked questions to gain clarity about Penta Kuhl's services and features.
//                 </p>
                
//                 <div className="mt-8 p-5 bg-white rounded-xl border border-gray-100">
//                   <div className="flex items-center gap-3 mb-3">
//                     <span className="text-2xl">🛡️</span>
//                     <span className="text-sm font-semibold text-[#e8521a]">Need more help?</span>
//                   </div>
//                   <p className="text-gray-500 text-sm">
//                     Can't find what you're looking for? Contact our support team.
//                   </p>
//                   <button className="mt-4 text-[#e8521a] text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
//                     Contact Support <span>→</span>
//                   </button>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="space-y-4"
//             >
//               {faqs.map((faq, idx) => (
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

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.5 }}
//             viewport={{ once: true }}
//             className="mt-16 text-center bg-red-50 rounded-2xl p-10 border border-red-100"
//           >
//             <div className="inline-block p-3 bg-red-100 rounded-full mb-4">
//               <span className="text-3xl">🛡️</span>
//             </div>
//             <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
//               Protecting What Matters Most
//             </h3>
//             <p className="text-gray-500 mb-6">
//               Get in touch to ensure safe and temperature-stable transit for your sensitive products.
//             </p>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-[#e8521a] hover:bg-[#c94415] text-white px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-md"
//             >
//               Contact Us Today →
//             </motion.button>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Pentakuhl;










import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Brand tokens (matching Home page)
// Orange   : #e8521a
// Teal     : #3d5a6b
// White bg : #ffffff
// Card bg  : #f5f3f0
// Light Grey: #f5f5f5 or #f3f4f6

// Horizontal Scroll Band Component
const HorizontalScrollSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const upperBandX = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const lowerBandX = useTransform(scrollYProgress, [0, 1], [0, 500]);

  const menuItems = [
    "Robust Load Security",
    "Expert Logistics Support",
    "Tailored Freight Solutions",
    "Flexible Shipping Schedules",
    "Volume Discounts",
    "End-to-End Supply Chain Management",
  ];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100vh] bg-white overflow-hidden"
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center gap-4 px-4">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-[#e8521a] text-xs font-semibold tracking-wider px-3 py-1 bg-red-50 rounded-full">
            MENU
          </span>
        </motion.div>

        <motion.div
          style={{ x: upperBandX }}
          className="w-full overflow-visible py-3"
        >
          <div className="flex gap-3 whitespace-nowrap">
            {menuItems.map((item, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-5 py-2.5 shadow-sm border border-gray-200 hover:border-[#e8521a] hover:bg-red-50 transition-all duration-300 cursor-pointer group"
              >
                <span className="w-1.5 h-1.5 bg-[#e8521a] rounded-full group-hover:scale-150 transition-transform" />
                <span className="text-gray-700 text-sm group-hover:text-[#e8521a] transition-colors whitespace-nowrap">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          style={{ x: lowerBandX }}
          className="w-full overflow-visible py-3"
        >
          <div className="flex gap-3 whitespace-nowrap">
            {[...menuItems].reverse().map((item, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-5 py-2.5 shadow-sm border border-gray-200 hover:border-[#e8521a] hover:bg-red-50 transition-all duration-300 cursor-pointer group"
              >
                <span className="w-1.5 h-1.5 bg-[#e8521a] rounded-full group-hover:scale-150 transition-transform" />
                <span className="text-gray-700 text-sm group-hover:text-[#e8521a] transition-colors whitespace-nowrap">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8 text-gray-400 text-xs text-center"
        >
          Scroll ↓
        </motion.div>
      </div>
    </section>
  );
};

// Accordion Item Component
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="text-gray-800 font-medium text-base">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-[#e8521a] text-xl"
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
        <div className="p-5 pt-0 border-t border-gray-100">
          <p className="text-gray-500 text-sm leading-relaxed">{answer}</p>
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

const Pentakuhl = () => {
  const productSectionRef = useRef(null);
  const [stage, setStage] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (productSectionRef.current) {
        const rect = productSectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        const scrollProgress = Math.max(0, Math.min(1, 
          (windowHeight - rect.top) / (windowHeight * 1.5)
        ));
        
        if (scrollProgress < 0.1) {
          setStage(0);
        } else if (scrollProgress >= 0.1 && scrollProgress < 0.4) {
          setStage(1);
        } else if (scrollProgress >= 0.4) {
          setStage(2);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const faqs = [
    {
      question: "What is Penta Kuhl?",
      answer: "Penta Kuhl is a specialized temperature-controlled packaging solution designed to maintain product integrity during transit for sensitive goods like pharmaceuticals, biologics, and food products. Our advanced technology ensures your products remain within the required temperature range throughout the shipping process."
    },
    {
      question: "How does Penta Kuhl ensure cargo safety?",
      answer: "We use advanced temperature monitoring systems, insulated packaging materials, GPS tracking, and real-time alerts to ensure your cargo remains within the required temperature range throughout transit. Our multi-layer protection system includes thermal barriers, phase change materials, and continuous data logging."
    },
    {
      question: "What types of cargo can Penta Kuhl handle?",
      answer: "Penta Kuhl is equipped to manage various cargo types, including perishable goods, heavy equipment, pharmaceuticals, biologics, chemicals, food products, and any temperature-sensitive materials requiring controlled environments from -50°C to +25°C."
    },
    {
      question: "Is there customer support available for Penta Kuhl users?",
      answer: "Yes, we offer 24/7 customer support to assist with any questions or issues regarding your temperature-controlled shipments. Our dedicated team is available via phone, email, and live chat to provide real-time assistance and monitoring."
    }
  ];

  return (
    <div style={{ background: "#fff", fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Hero Section - WITH VIDEO BACKGROUND */}
      // Change the hero section className
<section className="relative min-h-[70vh] overflow-hidden pt-24">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Industrial_Factory 1080P.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20 z-10" />
        
        <div className="absolute inset-0 opacity-10 z-0">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,#fff_1px,transparent_1px)] bg-[length:40px_40px]" />
        </div>

        <div className="relative z-20 h-full flex items-center justify-center min-h-[70vh]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Ensuring Safe Transport for <br />
              <span className="text-yellow-300">Temperature-Sensitive Products</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-white/80 max-w-2xl mx-auto mb-8"
            >
              Explore our frequently asked questions to gain clarity about Penta Kuhl's services and features
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#e8521a] px-8 py-3 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore More ↓
            </motion.button>

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 80 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="h-1 bg-yellow-300 mx-auto mt-8 rounded-full"
              style={{ width: 80 }}
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="w-[30px] h-[50px] border-2 border-white/40 rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-3 bg-white/60 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* About Penta KÜHL Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                ABOUT <br />
                <span className="text-[#e8521a]">PENTA KÜHL</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="text-gray-600 text-base leading-relaxed">
                At <span className="font-semibold text-[#e8521a]">Pentakuhl</span>, we specialize in providing durable, 
                effective packaging solutions that maintain temperature 
                <span className="font-semibold text-[#e8521a]"> stability </span> 
                during transit, 
                <span className="font-semibold text-[#e8521a]"> protecting </span> 
                your valuable products.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                Our innovative designs cater to various industries, including pharmaceuticals, 
                food, and biotechnology.
              </p>
              <div className="w-16 h-0.5 bg-[#e8521a] rounded-full mt-4" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Authorized Distributors Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              PENTA FREIGHT
            </h2>
            <div className="w-20 h-0.5 bg-[#e8521a] mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-red-50 p-10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-3">❄️</div>
                  <div className="text-lg font-bold text-gray-800">Pelican BioThermal™</div>
                  <div className="text-gray-500 text-xs mt-1">Trusted Partner</div>
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Authorized Distributors for 
                  <span className="text-[#e8521a] block mt-1">Pelican BioThermal™ Products</span>
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  Penta Freight is proud to be an authorized distributor for Pelican BioThermal™, 
                  offering world-class temperature-controlled packaging solutions for 
                  pharmaceutical, biotech, and life sciences industries.
                </p>
                <motion.button
                  whileHover={{ x: 8 }}
                  className="text-[#e8521a] font-semibold text-sm flex items-center gap-2 group"
                >
                  Read more 
                  <span className="text-[#e8521a] group-hover:translate-x-1 transition-transform duration-300">→</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRODUCT SOLUTIONS SECTION */}
      <section 
        ref={productSectionRef}
        className="relative min-h-[150vh] bg-white overflow-hidden"
      >
        <div className="sticky top-0 h-screen flex items-center justify-center">
          
          <motion.div
            animate={{ 
              opacity: stage === 2 ? 0 : 1,
              scale: stage === 2 ? 0.7 : 1,
              y: stage === 2 ? -80 : 0
            }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            className="absolute z-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 text-center">
              Product <span className="text-[#e8521a]">Solutions</span>
            </h2>
            <motion.p
              animate={{ opacity: stage === 2 ? 0 : 0.5 }}
              transition={{ duration: 0.8 }}
              className="text-gray-400 text-center mt-3 text-sm"
            >
              Scroll to explore
            </motion.p>
          </motion.div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-6xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-8">
                
                <motion.div
                  initial={{ x: "-120%", opacity: 0 }}
                  animate={{ 
                    x: stage >= 1 ? "0%" : "-120%",
                    opacity: stage >= 1 ? 1 : 0
                  }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-[#f5f3f0] rounded-2xl p-8 shadow-lg border border-gray-100"
                >
                  <motion.div
                    animate={{ opacity: stage === 2 ? 1 : 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      Parcel <span className="text-[#e8521a]">Shippers</span>
                    </h3>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                      We understand the unique challenges faced by parcel shippers and offer 
                      tailored solutions for seamless shipping.
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-[#e8521a] mb-3 uppercase tracking-wide">
                        Single Use
                      </h4>
                      <div className="space-y-2">
                        {["COOLGUARD", "COOLGUARD RM", "COOLGUARD ADVANCE"].map((item, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: stage === 2 ? 1 : 0, x: stage === 2 ? 0 : -20 }}
                            transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                            className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-red-50 transition-all duration-300 cursor-pointer group"
                          >
                            <span className="text-gray-400 group-hover:text-[#e8521a]">📦</span>
                            <span className="text-gray-600 text-sm group-hover:text-[#e8521a] transition-colors">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-[#e8521a] mb-3 uppercase tracking-wide">
                        Reusable
                      </h4>
                      <div className="space-y-2">
                        {["Credo Cube"].map((item, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: stage === 2 ? 1 : 0, x: stage === 2 ? 0 : -20 }}
                            transition={{ duration: 0.4, delay: 1.0 }}
                            className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-red-50 transition-all duration-300 cursor-pointer group"
                          >
                            <span className="text-gray-400 group-hover:text-[#e8521a]">🔄</span>
                            <span className="text-gray-600 text-sm group-hover:text-[#e8521a] transition-colors">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ x: "120%", opacity: 0 }}
                  animate={{ 
                    x: stage >= 1 ? "0%" : "120%",
                    opacity: stage >= 1 ? 1 : 0
                  }}
                  transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-[#f5f3f0] rounded-2xl p-8 shadow-lg border border-gray-100"
                >
                  <motion.div
                    animate={{ opacity: stage === 2 ? 1 : 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      Pallet <span className="text-[#e8521a]">Shippers</span>
                    </h3>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                      We provide tailored services for pallet shippers, ensuring your cargo arrives 
                      safely and efficiently.
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-[#e8521a] mb-3 uppercase tracking-wide">
                        Single Use
                      </h4>
                      <div className="space-y-2">
                        {["COOLPALL VERTOS", "COOLPALL VERTOS ADVANCE"].map((item, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: stage === 2 ? 1 : 0, x: stage === 2 ? 0 : 20 }}
                            transition={{ duration: 0.4, delay: 0.7 + idx * 0.1 }}
                            className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-red-50 transition-all duration-300 cursor-pointer group"
                          >
                            <span className="text-gray-400 group-hover:text-[#e8521a]">📦</span>
                            <span className="text-gray-600 text-sm group-hover:text-[#e8521a] transition-colors">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-[#e8521a] mb-3 uppercase tracking-wide">
                        Reusable
                      </h4>
                      <div className="space-y-2">
                        {["Credo XTEND", "CREDO CARGO"].map((item, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: stage === 2 ? 1 : 0, x: stage === 2 ? 0 : 20 }}
                            transition={{ duration: 0.4, delay: 1.1 + idx * 0.1 }}
                            className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-red-50 transition-all duration-300 cursor-pointer group"
                          >
                            <span className="text-gray-400 group-hover:text-[#e8521a]">🔄</span>
                            <span className="text-gray-600 text-sm group-hover:text-[#e8521a] transition-colors">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERIES GUIDE SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Series Guide
            </h2>
            <p className="text-gray-500 text-base max-w-3xl mx-auto leading-relaxed">
              This guide outlines temperature-controlled packaging solutions designed for the safe transport 
              and storage of sensitive products, like vaccines and biologics, across various thermal conditions, 
              from refrigerated to deep-freeze.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { series: "SERIES 4", temp: "15°C - 25°C", usage: "Controlled room temperature", ideal: "Medicines, cosmetics" },
              { series: "SERIES 20M", temp: "-20°C", usage: "Frozen products", ideal: "Vaccines, biologics" },
              { series: "SERIES 50M", temp: "-50°C", usage: "Extreme cold chain", ideal: "Advanced biologics, special pharmaceuticals" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                    <span className="text-[#e8521a] text-xl">🌡️</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{item.series}</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-xs font-semibold text-[#e8521a] uppercase tracking-wide">Temperature Range:</h4>
                    <p className="text-gray-600 text-sm">{item.temp}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#e8521a] uppercase tracking-wide">Usage & Applications:</h4>
                    <p className="text-gray-600 text-sm">{item.usage}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#e8521a] uppercase tracking-wide">Ideal For:</h4>
                    <p className="text-gray-600 text-sm">{item.ideal}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HORIZONTAL SCROLL BANDS SECTION */}
      <HorizontalScrollSection />

      {/* FAQ SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="sticky top-32 self-start"
            >
              <div className="bg-red-50 rounded-2xl p-8">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-[#e8521a] text-xl">❓</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Frequently Asked <br />
                  <span className="text-[#e8521a]">Questions</span>
                </h2>
                <div className="w-16 h-0.5 bg-[#e8521a] mb-6" />
                <p className="text-gray-500 text-base leading-relaxed">
                  Explore our frequently asked questions to gain clarity about Penta Kuhl's services and features.
                </p>
                
                <div className="mt-8 p-5 bg-white rounded-xl border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">🛡️</span>
                    <span className="text-sm font-semibold text-[#e8521a]">Need more help?</span>
                  </div>
                  <p className="text-gray-500 text-sm">
                    Can't find what you're looking for? Contact our support team.
                  </p>
                  <button className="mt-4 text-[#e8521a] text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                    Contact Support <span>→</span>
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {faqs.map((faq, idx) => (
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

      {/* PARALLAX SCROLLING IMAGE SECTION - Added at the end */}
      <ParallaxImageSection />
    </div>
  );
};

export default Pentakuhl;