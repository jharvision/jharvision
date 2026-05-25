
// "use client";

// import React, { useEffect, useState } from "react";
// import { MapPin, Search, GraduationCap, Building2, Loader2, AlertCircle } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// // Interface update to include 'image' if your API has it
// interface College {
//   id: number | string;
//   name: string;
//   city: string;
//   type: string;
//   stats: string;
//   description: string;
//   image?: string; // Optional image field
// }

// const headingClass = "font-[family-name:var(--font-heading)]";
// const bodyClass = "font-[family-name:var(--font-body)]";

// export default function InstitutesPage() {
//   const [colleges, setColleges] = useState<College[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const apiUrl = process.env.NEXT_PUBLIC_API_URL;
//         if (!apiUrl) throw new Error("API URL missing in .env");

//         const response = await fetch(apiUrl);
//         if (!response.ok) throw new Error("Failed to fetch data from API");
        
//         const data = await response.json();
//         // Ensure data is an array
//         setColleges(Array.isArray(data) ? data : []);
//       } catch (err: unknown) {
//         if (err instanceof Error) {
//           setError(err.message);
//         } else {
//           setError("Something went wrong while fetching data.");
//         }
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleExplore = (name: string) => {
//     const query = encodeURIComponent(`${name} Jharkhand official details`);
//     window.open(`https://www.google.com/search?q=${query}`, "_blank");
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-[#F8F9FB] flex flex-col items-center justify-center p-6 text-center">
//         <Loader2 className="animate-spin text-blue-500 mb-4" size={40} />
//         <p className="text-gray-400 font-medium animate-pulse">Loading Institutions...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-[#F8F9FB] flex flex-col items-center justify-center p-6 text-center">
//         <AlertCircle className="text-red-400 mb-4" size={48} />
//         <h2 className="text-xl font-bold text-gray-800">Connection Error</h2>
//         <p className="text-gray-500 text-sm max-w-xs mt-2">{error}</p>
//         <button onClick={() => window.location.reload()} className="mt-6 px-6 py-2 bg-black text-white rounded-full text-xs font-bold transition-transform active:scale-95">
//           Try Again
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className={`min-h-screen bg-[#F8F9FB] text-[#2D3436] pb-20 ${bodyClass}`}>
      
//       {/* Hero Section */}
//       <section className="pt-24 pb-16 px-6 text-center">
//         <motion.div 
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-100 mb-6 shadow-sm"
//         >
//           <GraduationCap size={16} className="text-blue-600" />
//           <span className="text-[10px] uppercase tracking-[2px] font-bold text-gray-500">Tech Foundation</span>
//         </motion.div>
//         <h1 className={`text-4xl md:text-7xl font-bold tracking-tight text-gray-900 mb-4 ${headingClass}`}>
//           Jharkhand <span className="text-gray-300 font-light italic">Ecosystem</span>
//         </h1>
//         <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto">
//           Explore the premier technical universities and colleges shaping the future of innovation.
//         </p>
//       </section>

//       {/* Grid Section */}
//       <section className="px-6 max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           <AnimatePresence>
//             {colleges.map((college, index) => (
//               <motion.div 
//                 key={college.id || index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.05 }}
//                 className="group bg-white border border-gray-100 p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col h-full"
//               >
//                 <div className="flex-grow">
//                   {/* Header: Icon & Type */}
//                   <div className="flex justify-between items-start mb-6">
//                     <div className="p-3 bg-gray-50 rounded-2xl text-gray-400 group-hover:text-blue-500 group-hover:bg-blue-50 transition-colors">
//                       <Building2 size={24} />
//                     </div>
//                     <span className="text-[9px] font-bold uppercase tracking-wider px-3 py-1.5 bg-[#F8F9FB] text-gray-400 rounded-xl border border-gray-100">
//                       {college.type?.split(' ')[0] || "Institute"}
//                     </span>
//                   </div>

//                   {/* College Name */}
//                   <h3 className={`text-2xl font-bold tracking-tight mb-3 text-gray-800 line-clamp-2 min-h-[4rem] ${headingClass}`}>
//                     {college.name}
//                   </h3>
                  
//                   {/* Stats & Location */}
//                   <div className="flex flex-wrap items-center gap-3 mb-5">
//                     <span className="flex items-center gap-1.5 text-[11px] font-bold text-gray-400 uppercase tracking-wide">
//                       <MapPin size={13} /> {college.city || "Jharkhand"}
//                     </span>
//                     <div className="w-1 h-1 bg-gray-200 rounded-full" />
//                     <span className="text-[11px] font-bold text-blue-500/70 uppercase tracking-wide">
//                       {college.stats || "Top Tier"}
//                     </span>
//                   </div>

//                   {/* Description */}
//                   <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-3">
//                     {college.description || "A premier technical institution dedicated to excellence in education and research."}
//                   </p>
//                 </div>

//                 {/* Explore Button */}
//                 <button 
//                   onClick={() => handleExplore(college.name)}
//                   className="w-full py-4 bg-white group-hover:bg-black group-hover:text-white text-gray-900 text-xs font-bold rounded-2xl flex items-center justify-center gap-2 transition-all duration-300 border border-gray-100 shadow-sm"
//                 >
//                   <Search size={14} strokeWidth={3} /> EXPLORE ON GOOGLE
//                 </button>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>
//       </section>
//     </div>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import { MapPin, Search, GraduationCap, Building2, Loader2, AlertCircle, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Interface for type-safety
interface College {
  id: number | string;
  name: string;
  city?: string;
  type?: string;
  stats?: string;
  description?: string;
  image?: string;
  explore?: string;
}

const headingClass = "font-[family-name:var(--font-heading)]";
const bodyClass = "font-[family-name:var(--font-body)]";

export default function InstitutesPage() {
  const [colleges, setColleges] = useState<College[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        
        // Debugging log for your browser console
        console.log("Attempting to fetch from:", apiUrl);

        if (!apiUrl) {
          throw new Error("API URL is missing. Check your .env.local file and restart terminal.");
        }

        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);
        
        const data = await response.json();
        console.log("Data fetched successfully:", data);
        
        setColleges(Array.isArray(data) ? data : []);
      } catch (err: unknown) {
        console.error("Fetch error details:", err);
        setError(err instanceof Error ? err.message : "Failed to connect to the server.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleExplore = (name: string, exploreLink?: string) => {
    if (exploreLink) {
      window.open(exploreLink, "_blank");
    } else {
      const query = encodeURIComponent(`${name} Jharkhand official website`);
      window.open(`https://www.google.com/search?q=${query}`, "_blank");
    }
  };

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8F9FB] flex flex-col items-center justify-center p-6">
        <Loader2 className="animate-spin text-blue-500 mb-4" size={40} />
        <p className="text-gray-400 font-medium animate-pulse">Initializing Ecosystem...</p>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-screen bg-[#F8F9FB] flex flex-col items-center justify-center p-6 text-center">
        <div className="p-4 bg-red-50 rounded-full mb-4">
          <AlertCircle className="text-red-500" size={32} />
        </div>
        <h2 className="text-xl font-bold text-gray-800">API Connection Failed</h2>
        <p className="text-gray-500 text-sm max-w-xs mt-2 mb-6">{error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="px-8 py-3 bg-black text-white rounded-2xl text-xs font-bold hover:bg-gray-800 transition-all"
        >
          Retry Connection
        </button>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-[#F8F9FB] text-[#2D3436] pb-24 ${bodyClass}`}>
      
      {/* Hero Header */}
      <section className="pt-28 pb-16 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-100 mb-6 shadow-sm"
        >
          <GraduationCap size={16} className="text-blue-600" />
          <span className="text-[10px] uppercase tracking-[2px] font-bold text-gray-500">Tech Foundation</span>
        </motion.div>
        
        <h1 className={`text-4xl md:text-7xl font-bold tracking-tight text-gray-900 mb-4 ${headingClass}`}>
          Academic <span className="text-gray-300 font-light italic">Ecosystem</span>
        </h1>
        <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto">
          Exploring the premier technical institutions shaping Jharkhand&apos;s digital future.
        </p>
      </section>

      {/* Grid Container */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {colleges.length > 0 ? (
              colleges.map((college, index) => (
                <motion.div 
                  key={college.id || index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-white border border-gray-100 p-2 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col h-full"
                >
                  {/* Image Container */}
                  <div className="relative h-48 w-full overflow-hidden rounded-[2rem] bg-gray-50">
                    {college.image ? (
                      <img 
                        src={college.image} 
                        alt={college.name} 
                        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-200">
                        <Building2 size={48} strokeWidth={1} />
                      </div>
                    )}
                    <div className="absolute top-4 right-4">
                      <span className="text-[9px] font-bold uppercase tracking-wider px-3 py-1.5 bg-white/90 backdrop-blur-md text-gray-800 rounded-xl shadow-sm">
                        {college.type?.split(' ')[0] || "Institute"}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className={`text-xl font-bold tracking-tight mb-3 text-gray-800 line-clamp-2 ${headingClass}`}>
                      {college.name}
                    </h3>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <span className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-wide">
                        <MapPin size={12} /> {college.city || "Jharkhand"}
                      </span>
                      {college.stats && (
                        <>
                          <div className="w-1 h-1 bg-gray-200 rounded-full" />
                          <span className="text-[10px] font-bold text-blue-500/70 uppercase tracking-wide">
                            {college.stats}
                          </span>
                        </>
                      )}
                    </div>

                    <p className="text-gray-400 text-xs leading-relaxed mb-8 line-clamp-3">
                      {college.description || "Leading technical foundation providing world-class education and innovation opportunities."}
                    </p>

                    <button 
                      onClick={() => handleExplore(college.name, college.explore)}
                      className="mt-auto w-full py-4 bg-[#F8F9FB] hover:bg-black hover:text-white text-gray-900 text-[10px] font-black uppercase tracking-[2px] rounded-2xl flex items-center justify-center gap-2 transition-all duration-300 border border-gray-50"
                    >
                      <Search size={14} strokeWidth={3} /> Explore Page
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-20 text-gray-400 font-medium">
                No data found in the ecosystem.
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Pearl CTA Section */}
      <section className="px-6 mt-20 max-w-5xl mx-auto">
        <motion.div 
          whileInView={{ opacity: [0, 1], scale: [0.98, 1] }}
          className="bg-white border border-gray-100 p-12 rounded-[3.5rem] text-center shadow-sm relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 blur-3xl -mr-16 -mt-16" />
          <h2 className={`text-2xl md:text-3xl font-bold mb-6 text-gray-900 ${headingClass}`}>
            Part of these institutions?
          </h2>
          <button className="px-10 py-4 bg-black text-white text-[10px] font-black uppercase tracking-widest rounded-2xl hover:scale-105 transition-all shadow-lg active:scale-95">
            Join Community
          </button>
        </motion.div>
      </section>
    </div>
  );
}
