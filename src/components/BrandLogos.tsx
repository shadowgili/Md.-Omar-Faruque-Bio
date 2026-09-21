import React from 'react';

// Custom SVG Brand Logos for all institutions from Md. Omar Faruque's resume
export const HotelOrchardLogo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <div className={`flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-900/60 to-yellow-950/80 border border-amber-500/40 p-1.5 shadow-sm ${className}`} title="Hotel Orchard Suites">
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="44" stroke="#fbbf24" strokeWidth="3" strokeDasharray="3 2" />
      <circle cx="50" cy="50" r="38" stroke="#d97706" strokeWidth="1.5" />
      <path d="M50 18 L53 26 L61 27 L55 33 L57 41 L50 37 L43 41 L45 33 L39 27 L47 26 Z" fill="#fbbf24" />
      <path d="M32 50 C32 40 40 38 50 38 C60 38 68 40 68 50 C68 62 58 72 50 72 C42 72 32 62 32 50 Z" stroke="#fbbf24" strokeWidth="2.5" />
      <text x="50" y="58" textAnchor="middle" fill="#fef3c7" fontSize="16" fontWeight="bold" fontFamily="serif">O</text>
      <text x="50" y="82" textAnchor="middle" fill="#fbbf24" fontSize="8" fontWeight="bold" letterSpacing="1">ORCHARD</text>
    </svg>
  </div>
);

export const AsiaHotelLogo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <div className={`flex items-center justify-center rounded-xl bg-gradient-to-br from-red-950/70 to-slate-900 border border-red-600/40 p-1.5 shadow-sm ${className}`} title="Asia Hotel & Resorts">
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="80" height="80" rx="14" stroke="#ef4444" strokeWidth="2" />
      <polygon points="50,20 54,32 67,32 56,40 60,52 50,44 40,52 44,40 33,32 46,32" fill="#ef4444" />
      <text x="50" y="68" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="900" fontFamily="sans-serif">ASIA</text>
      <text x="50" y="80" textAnchor="middle" fill="#fca5a5" fontSize="7" fontWeight="semibold" letterSpacing="0.8">HOTEL &amp; RESORTS</text>
    </svg>
  </div>
);

export const AscottDhakaLogo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <div className={`flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-950/80 to-stone-900 border border-amber-400/40 p-1.5 shadow-sm ${className}`} title="Ascott Dhaka">
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 15 C30 15 20 30 20 50 C20 70 35 85 50 85 C65 85 80 70 80 50 C80 30 70 15 50 15 Z" stroke="#eab308" strokeWidth="2" strokeDasharray="4 2" />
      <path d="M50 24 L58 40 L42 40 Z" fill="#eab308" />
      <path d="M40 42 L60 42 L63 56 L37 56 Z" fill="#ca8a04" opacity="0.8" />
      <text x="50" y="69" textAnchor="middle" fill="#fef08a" fontSize="10" fontWeight="bold" fontFamily="serif" letterSpacing="1">ASCOTT</text>
      <text x="50" y="79" textAnchor="middle" fill="#eab308" fontSize="7" fontWeight="bold">DHAKA</text>
    </svg>
  </div>
);

export const GalesiaHotelLogo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <div className={`flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-950/70 to-slate-900 border border-purple-500/40 p-1.5 shadow-sm ${className}`} title="Galesia Hotel & Resort">
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Butterfly wings motif */}
      <path d="M50 48 C44 28 20 28 24 50 C28 66 46 54 50 52 C54 54 72 66 76 50 C80 28 56 28 50 48 Z" fill="#c084fc" opacity="0.9" />
      <circle cx="50" cy="50" r="4" fill="#f3e8ff" />
      <text x="50" y="74" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold" fontFamily="sans-serif">GALESIA</text>
      <text x="50" y="84" textAnchor="middle" fill="#d8b4fe" fontSize="6.5" fontStyle="italic">feel the difference</text>
    </svg>
  </div>
);

export const OlivesHotelLogo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <div className={`flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-950/70 to-slate-900 border border-emerald-500/40 p-1.5 shadow-sm ${className}`} title="THE OLIVES (residence+suite)">
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Olive branch motif */}
      <circle cx="42" cy="38" r="8" fill="#10b981" />
      <circle cx="58" cy="38" r="8" fill="#059669" />
      <path d="M35 50 Q50 30 65 50" stroke="#34d399" strokeWidth="2.5" fill="none" />
      <text x="50" y="68" textAnchor="middle" fill="#ecfdf5" fontSize="10" fontWeight="900" fontFamily="sans-serif">THE OLIVES</text>
      <text x="50" y="78" textAnchor="middle" fill="#6ee7b7" fontSize="6" fontWeight="bold">RESIDENCE + SUITE</text>
    </svg>
  </div>
);

export const ICTDivisionLogo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <div className={`flex items-center justify-center rounded-xl bg-gradient-to-br from-red-950/60 to-emerald-950/70 border border-emerald-500/40 p-1.5 shadow-sm ${className}`} title="ICT Division - Government of the People's Republic of Bangladesh">
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="42" stroke="#10b981" strokeWidth="3" fill="#064e3b" opacity="0.4" />
      <circle cx="50" cy="40" r="16" fill="#ef4444" />
      <path d="M50 28 L52 35 L59 36 L54 41 L55 48 L50 44 L45 48 L46 41 L41 36 L48 35 Z" fill="#fbbf24" />
      <text x="50" y="67" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">ICT DIVISION</text>
      <text x="50" y="78" textAnchor="middle" fill="#a7f3d0" fontSize="6.5">BANGLADESH</text>
    </svg>
  </div>
);

export const LICTLogo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <div className={`flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-950/80 to-slate-900 border border-blue-500/40 p-1.5 shadow-sm ${className}`} title="LICT Project (Leveraging ICT)">
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="15" width="76" height="70" rx="12" stroke="#3b82f6" strokeWidth="2" />
      <text x="50" y="44" textAnchor="middle" fill="#60a5fa" fontSize="20" fontWeight="900" fontFamily="sans-serif">LICT</text>
      <line x1="24" y1="52" x2="76" y2="52" stroke="#93c5fd" strokeWidth="1.5" />
      <text x="50" y="66" textAnchor="middle" fill="#ffffff" fontSize="7" fontWeight="bold">LEVERAGING ICT</text>
      <text x="50" y="75" textAnchor="middle" fill="#cbd5e1" fontSize="6">FOR EMPLOYMENT &amp; GROWTH</text>
    </svg>
  </div>
);

export const ServiceEngineLogo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <div className={`flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-950/80 to-slate-900 border border-cyan-500/40 p-1.5 shadow-sm ${className}`} title="Service Engine BPO">
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 30 Q50 15 70 30 Q85 50 70 70 Q50 85 30 70 Q15 50 30 30 Z" stroke="#06b6d4" strokeWidth="2.5" fill="#083344" />
      <circle cx="50" cy="50" r="10" fill="#22d3ee" />
      <text x="50" y="72" textAnchor="middle" fill="#ffffff" fontSize="7.5" fontWeight="bold">SERVICE ENGINE</text>
      <text x="50" y="81" textAnchor="middle" fill="#67e8f9" fontSize="6.5" fontWeight="black">BPO</text>
    </svg>
  </div>
);

export const DigiconLogo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <div className={`flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-950/80 to-slate-900 border border-indigo-500/40 p-1.5 shadow-sm ${className}`} title="Digicon Technologies Ltd">
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="20" width="70" height="60" rx="8" stroke="#6366f1" strokeWidth="2.5" />
      <text x="50" y="48" textAnchor="middle" fill="#818cf8" fontSize="13" fontWeight="900">DIGICON</text>
      <text x="50" y="60" textAnchor="middle" fill="#e0e7ff" fontSize="7.5" fontWeight="bold">TECHNOLOGIES</text>
      <circle cx="50" cy="70" r="3" fill="#a5b4fc" />
    </svg>
  </div>
);

export const BIMLogo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <div className={`flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-950/80 to-slate-900 border border-emerald-500/40 p-1.5 shadow-sm ${className}`} title="Bangladesh Institute of Management (BIM)">
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" stroke="#10b981" strokeWidth="2.5" />
      <circle cx="50" cy="50" r="32" stroke="#059669" strokeWidth="1" strokeDasharray="2 2" />
      <text x="50" y="46" textAnchor="middle" fill="#34d399" fontSize="18" fontWeight="900">BIM</text>
      <text x="50" y="60" textAnchor="middle" fill="#ffffff" fontSize="6.5" fontWeight="bold">MANAGEMENT</text>
      <text x="50" y="69" textAnchor="middle" fill="#a7f3d0" fontSize="5.5">ESTD 1961</text>
    </svg>
  </div>
);

export const NHTTILogo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <div className={`flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-950/80 to-slate-900 border border-amber-500/40 p-1.5 shadow-sm ${className}`} title="National Hotel & Tourism Training Institute (NHTTI)">
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" stroke="#f59e0b" strokeWidth="2.5" />
      <path d="M35 38 L50 26 L65 38 L65 60 L35 60 Z" stroke="#fbbf24" strokeWidth="2" fill="none" />
      <text x="50" y="52" textAnchor="middle" fill="#fef3c7" fontSize="10" fontWeight="bold">NHTTI</text>
      <text x="50" y="74" textAnchor="middle" fill="#fcd34d" fontSize="6" fontWeight="bold">TOURISM BOARD</text>
    </svg>
  </div>
);

export const DhakaCollegeLogo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <div className={`flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-950/80 to-slate-900 border border-blue-400/40 p-1.5 shadow-sm ${className}`} title="Dhaka College (National University)">
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" stroke="#60a5fa" strokeWidth="2.5" />
      <polygon points="50,22 68,36 68,64 50,78 32,64 32,36" stroke="#93c5fd" strokeWidth="1.5" fill="none" />
      <text x="50" y="48" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">DHAKA</text>
      <text x="50" y="58" textAnchor="middle" fill="#93c5fd" fontSize="8" fontWeight="bold">COLLEGE</text>
      <text x="50" y="69" textAnchor="middle" fill="#bfdbfe" fontSize="5.5">ESTD 1841</text>
    </svg>
  </div>
);

export const AbraZebraLogo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <div className={`flex items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-900 via-teal-950 to-slate-950 border-2 border-emerald-400/50 p-1 shadow-lg shadow-emerald-950/50 ${className}`} title="Abra Zebra Mobile Game">
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Cute Zebra Stylized Profile */}
      <circle cx="50" cy="46" r="32" fill="#10b981" opacity="0.3" />
      <path d="M30 65 Q25 45 42 35 Q55 25 65 35 Q78 48 70 65 Z" fill="#ffffff" stroke="#0f172a" strokeWidth="2.5" />
      {/* Zebra Stripes */}
      <path d="M42 37 Q36 43 45 48" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
      <path d="M48 35 Q44 45 52 52" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
      <path d="M56 36 Q54 47 62 55" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
      <path d="M63 43 Q62 52 68 58" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
      {/* Eye & muzzle */}
      <circle cx="38" cy="48" r="2.5" fill="#0f172a" />
      <path d="M28 62 Q34 68 42 66" stroke="#0f172a" strokeWidth="2" fill="#fbcfe8" />
      {/* Ears */}
      <polygon points="46,24 50,34 42,34" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
      <polygon points="56,24 60,34 52,34" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
      {/* Banner */}
      <rect x="8" y="74" width="84" height="20" rx="6" fill="#047857" stroke="#34d399" strokeWidth="1.5" />
      <text x="50" y="88" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="900" letterSpacing="0.8">ABRA ZEBRA</text>
    </svg>
  </div>
);
