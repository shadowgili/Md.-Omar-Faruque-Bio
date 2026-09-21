import React, { useState, useEffect, useRef } from 'react';
import { 
  Gamepad2, 
  Code2, 
  Cpu, 
  Atom, 
  Layers, 
  Sparkles, 
  Terminal, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  ExternalLink,
  Laptop,
  Headphones,
  Award,
  Users,
  Eye,
  Heart
} from 'lucide-react';
import { 
  AbraZebraLogo, 
  ICTDivisionLogo, 
  DigiconLogo, 
  LICTLogo, 
  ServiceEngineLogo 
} from './BrandLogos';

export const GameDevITSection: React.FC = () => {
  // Interactive Physics Simulator State (reflecting his MSc/BSc Physics + Game Dev Mechanics)
  const [velocity, setVelocity] = useState<number>(35);
  const [angle, setAngle] = useState<number>(45);
  const [gravity, setGravity] = useState<number>(9.8);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simTime, setSimTime] = useState<number>(0);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Physics Calculations
  const angleRad = (angle * Math.PI) / 180;
  const timeOfFlight = (2 * velocity * Math.sin(angleRad)) / gravity;
  const maxRange = (Math.pow(velocity, 2) * Math.sin(2 * angleRad)) / gravity;
  const maxHeight = (Math.pow(velocity * Math.sin(angleRad), 2)) / (2 * gravity);

  // Simulation loop on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Clear background
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, width, height);

    // Draw Grid
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 30) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += 30) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Origin position (bottom-left offset)
    const originX = 40;
    const originY = height - 40;

    // Draw Ground
    ctx.strokeStyle = '#0284c7';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, originY);
    ctx.lineTo(width, originY);
    ctx.stroke();

    // Scale factors to fit on canvas
    const scaleX = (width - 80) / Math.max(maxRange * 1.1, 80);
    const scaleY = (height - 80) / Math.max(maxHeight * 1.5, 40);

    // Draw Complete Trajectory Path (Dotted Arc)
    ctx.strokeStyle = '#38bdf8';
    ctx.setLineDash([4, 4]);
    ctx.lineWidth = 2;
    ctx.beginPath();
    const steps = 60;
    for (let i = 0; i <= steps; i++) {
      const t = (i / steps) * timeOfFlight;
      const x = velocity * Math.cos(angleRad) * t;
      const y = velocity * Math.sin(angleRad) * t - 0.5 * gravity * Math.pow(t, 2);
      const canvasX = originX + x * scaleX;
      const canvasY = originY - y * scaleY;
      if (i === 0) ctx.moveTo(canvasX, canvasY);
      else ctx.lineTo(canvasX, canvasY);
    }
    ctx.stroke();
    ctx.setLineDash([]); // Reset dash

    // Draw Active Projectile
    const currentT = isSimulating ? Math.min(simTime, timeOfFlight) : timeOfFlight;
    const currentX = velocity * Math.cos(angleRad) * currentT;
    const currentY = velocity * Math.sin(angleRad) * currentT - 0.5 * gravity * Math.pow(currentT, 2);
    const pCanvasX = originX + currentX * scaleX;
    const pCanvasY = originY - currentY * scaleY;

    // Projectile glow and body
    ctx.fillStyle = '#f59e0b';
    ctx.shadowColor = '#f59e0b';
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.arc(pCanvasX, pCanvasY, 6, 0, 2 * Math.PI);
    ctx.fill();
    ctx.shadowBlur = 0; // reset

    // Vector velocity arrows
    if (isSimulating && simTime < timeOfFlight) {
      const vx = velocity * Math.cos(angleRad);
      const vy = velocity * Math.sin(angleRad) - gravity * currentT;

      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(pCanvasX, pCanvasY);
      ctx.lineTo(pCanvasX + vx * 0.4, pCanvasY - vy * 0.4);
      ctx.stroke();
    }
  }, [velocity, angle, gravity, isSimulating, simTime, timeOfFlight, maxRange, maxHeight, angleRad]);

  // Handle animation frames for simulation
  useEffect(() => {
    let animationFrameId: number;
    if (isSimulating) {
      const startTime = performance.now();
      const step = (now: number) => {
        const elapsed = (now - startTime) / 1000;
        setSimTime(elapsed);
        if (elapsed < timeOfFlight) {
          animationFrameId = requestAnimationFrame(step);
        } else {
          setIsSimulating(false);
        }
      };
      animationFrameId = requestAnimationFrame(step);
    }
    return () => cancelAnimationFrame(animationFrameId);
  }, [isSimulating, timeOfFlight]);

  const handleLaunchSimulation = () => {
    setSimTime(0);
    setIsSimulating(true);
  };

  const handleResetSimulation = () => {
    setIsSimulating(false);
    setSimTime(0);
  };

  const technicalDomains = [
    {
      title: "Unity 3D & C# Architecture",
      icon: Gamepad2,
      color: "text-amber-400",
      skills: ["Object-Oriented C#", "Physics Kinematics", "Isometric Camera Systems", "Prefab Asset Workflows"]
    },
    {
      title: "Virtual Reality (VR) Simulation",
      icon: Eye,
      color: "text-cyan-400",
      skills: ["Vehicular Simulator", "Medical 3D Anatomy", "Cockpit HUD & Controls", "Spatial Interaction"]
    },
    {
      title: "UI/UX & Asset Production",
      icon: Laptop,
      color: "text-emerald-400",
      skills: ["Adobe Photoshop", "Adobe Illustrator", "Figma UI Prototyping", "Visual Studio"]
    },
    {
      title: "Social Awareness Mechanics",
      icon: Heart,
      color: "text-purple-400",
      skills: ["Tree Plantation Messages", "Pedestrian Road Safety", "Classroom Education", "Behavioral Impact"]
    }
  ];

  return (
    <div className="space-y-12 py-8">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800 text-cyan-300 text-xs font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            <span>Interactive Software &amp; Physics Engineering</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Game Development, AR/VR &amp; IT Systems
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Crafted under the ICT Division of Bangladesh, LICT Project, and Digicon Technology. Blending Unity 3D game engines, virtual reality cockpits, and classical physics simulation algorithms.
          </p>
        </div>
      </div>

      {/* Flagship Game Showcase: Abra Zebra (From Screenshot 2026-09-21 222017.png) */}
      <div className="bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-900 border border-emerald-500/30 rounded-3xl p-6 sm:p-10 space-y-8 relative overflow-hidden shadow-2xl">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="flex items-start space-x-4">
            <AbraZebraLogo className="w-16 h-16 shrink-0" />
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-700 text-xs font-bold">
                  Featured Mobile Game
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-cyan-300 text-xs font-mono">
                  Unity 3D &bull; C#
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                Abra Zebra: The Urban Journey &amp; Social Awareness
              </h3>
              <p className="text-xs sm:text-sm text-emerald-300 font-medium">
                Official Project under Skill Development for Mobile Game &amp; Application Project (ICT Division &amp; Digicon Technology)
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 shrink-0">
            <ICTDivisionLogo className="w-12 h-12" />
            <DigiconLogo className="w-12 h-12" />
          </div>
        </div>

        {/* Media & Details Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Visual Showcase */}
          <div className="lg:col-span-6 space-y-3">
            <div className="relative rounded-2xl overflow-hidden border border-emerald-500/30 shadow-xl bg-slate-950 group">
              <img 
                src="/assets/images/abra_zebra.jpg" 
                alt="Abra Zebra Mobile Game Showcase" 
                className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-5">
                <div>
                  <p className="text-white text-sm font-bold">Abra Zebra Gameplay &amp; Menus</p>
                  <p className="text-xs text-slate-300">Home Screen, Options, 3D Isometric Roads, and Awareness Game Over</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 px-1">
              <span>Platform: Android &amp; Mobile</span>
              <span className="text-emerald-400">Status: Completed &amp; Certified (2018)</span>
            </div>
          </div>

          {/* Story, Concept & Tech Stack */}
          <div className="lg:col-span-6 space-y-4">
            <div className="space-y-2">
              <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-400">
                The Story &amp; Concept:
              </h4>
              <blockquote className="p-4 rounded-xl bg-slate-950/60 border-l-4 border-emerald-500 text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                &ldquo;It is a story of a lost Zebra. The Zebra lost his area and entered a crowded city. That city is full of buses, trucks, cars, trains, rivers etc. Then the Zebra started to run to and fro. The goal is to save the Zebra from the traffic and rivers. The hidden goal of the game is to provide awareness message about our daily life among the users.&rdquo;
              </blockquote>
            </div>

            {/* Development Tools */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Development Tools Used:
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Unity 3D Engine",
                  "Adobe Photoshop",
                  "Adobe Illustrator",
                  "Figma UI Design",
                  "Visual Studio",
                  "C# Programming"
                ].map((tool, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-200 text-xs font-mono border border-slate-700">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Awareness Messages */}
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Social Awareness Messaging (Game Over Cartoons):
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-lg bg-slate-950/50 border border-slate-800 text-slate-300 flex items-center space-x-2">
                  <span className="text-base">🌱</span>
                  <span><strong>গাছ লাগান, পরিবেশ বাঁচান</strong> (Tree Plantation)</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950/50 border border-slate-800 text-slate-300 flex items-center space-x-2">
                  <span className="text-base">🚶‍♂️</span>
                  <span><strong>রাস্তা পারাপারে বয়োজ্যেষ্ঠদের সাহায্য করুন</strong> (Elderly Road Safety)</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950/50 border border-slate-800 text-slate-300 flex items-center space-x-2">
                  <span className="text-base">📚</span>
                  <span><strong>ক্লাসরুম ও শিক্ষা</strong> (Classroom Education)</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950/50 border border-slate-800 text-slate-300 flex items-center space-x-2">
                  <span className="text-base">📱</span>
                  <span><strong>ডিজিটাল স্ক্রিন সচেতনতা</strong> (Screen Balance)</span>
                </div>
              </div>
            </div>

            {/* Official Credits */}
            <div className="pt-3 border-t border-slate-800 text-[11.5px] text-slate-400 space-y-1">
              <p><strong className="text-white">Developer Credits:</strong> Md. Omar Faruque, Anis Anjum, Ashik Ibne Razzak</p>
              <p><strong className="text-white">Special Thanks:</strong> Kuldeep Sorker Joy</p>
              <p><strong className="text-white">Powered By:</strong> ICT Division (Govt of Bangladesh) &amp; Digicon Technology Limited</p>
            </div>
          </div>
        </div>
      </div>

      {/* AR/VR LICT Projects Showcase (From Screenshot 2026-09-21 221752.png) */}
      <div className="bg-gradient-to-br from-blue-950/40 via-slate-900 to-slate-900 border border-blue-500/30 rounded-3xl p-6 sm:p-10 space-y-8 relative overflow-hidden shadow-2xl">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="flex items-start space-x-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-950 border-2 border-blue-500/50 flex items-center justify-center text-blue-400 shrink-0 shadow-lg">
              <Eye className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-950 text-blue-300 border border-blue-700 text-xs font-bold">
                  Virtual Reality &amp; AR Engineering
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-blue-300 text-xs font-mono">
                  LICT Project &bull; Year 2020
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                Intern, AR/VR Developer: LICT Project
              </h3>
              <p className="text-xs sm:text-sm text-blue-300 font-medium">
                Organized by Service Engine BPO &bull; Powered by ICT Division (Leveraging ICT for Employment and Growth)
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 shrink-0">
            <LICTLogo className="w-12 h-12" />
            <ServiceEngineLogo className="w-12 h-12" />
          </div>
        </div>

        {/* 2 Flagship VR Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* VR Project 1: City Car Simulation */}
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-blue-500/40 transition-colors">
            <div className="h-44 rounded-xl overflow-hidden relative border border-slate-800">
              <img 
                src="/assets/images/vr_projects.jpg" 
                alt="City Car Simulation VR" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded bg-blue-950/90 text-blue-300 text-xs font-mono font-bold border border-blue-700">
                VR Project 1
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-bold text-white">
                City Car Simulation Project
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Realistic 3D virtual reality vehicle simulator with an interactive cockpit view, steering wheel physics, dashboard telemetry, and city road traffic navigation. Designed for driving training and virtual reflex testing.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-800/80 flex flex-wrap gap-1.5">
              {["Interactive Cockpit", "Steering Controller", "City Traffic AI", "PPT & Live Demo"].map((feat, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded bg-slate-800 text-cyan-300 text-[11px] font-mono">
                  {feat}
                </span>
              ))}
            </div>
          </div>

          {/* VR Project 2: Human Anatomy VR */}
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-blue-500/40 transition-colors">
            <div className="h-44 rounded-xl overflow-hidden relative border border-slate-800">
              <img 
                src="/assets/images/vr_projects.jpg" 
                alt="Human Anatomy VR / AR Apps" 
                className="w-full h-full object-cover object-right"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded bg-purple-950/90 text-purple-300 text-xs font-mono font-bold border border-purple-700">
                VR Project 2
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-bold text-white">
                Human Anatomy VR / AR Apps
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                High-tech medical virtual reality application featuring interactive 3D human anatomy models, surgical operating table workflows, and organ isolation (heart, lungs, vascular system) for interactive medical education.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-800/80 flex flex-wrap gap-1.5">
              {["3D Organ Anatomy", "Virtual Surgery Lab", "Spatial UI", "Medical PPT & Demo"].map((feat, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded bg-slate-800 text-purple-300 text-[11px] font-mono">
                  {feat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Technical Skill Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {technicalDomains.map((domain, idx) => {
          const Icon = domain.icon;
          return (
            <div key={idx} className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center space-x-2.5">
                <Icon className={`w-5 h-5 ${domain.color}`} />
                <h3 className="text-sm font-bold text-white leading-tight">
                  {domain.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {domain.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px] font-mono border border-slate-700/60">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Physics & Kinematics Simulator (Demonstrating Physics Degree + Game Mechanics) */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-amber-400 text-xs font-mono uppercase tracking-wider mb-1">
              <Atom className="w-4 h-4" />
              <span>Interactive Physics Engine Showcase</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              Kinematics &amp; Vector Ballistics Simulator
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Live interactive demonstration illustrating how classical mechanics (MSc/BSc Physics at Dhaka College) powers realistic game engine trajectory algorithms in C# &amp; Unity.
            </p>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            <button
              onClick={handleLaunchSimulation}
              disabled={isSimulating}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 flex items-center space-x-1.5 shadow-md shadow-amber-900/30 transition-all font-mono"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{isSimulating ? 'Simulating...' : 'Launch Projectile'}</span>
            </button>
            <button
              onClick={handleResetSimulation}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs"
              title="Reset"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Simulator Controls & Canvas Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Controls (4 cols) */}
          <div className="lg:col-span-4 space-y-4 bg-slate-950/60 p-5 rounded-xl border border-slate-800/80 text-xs">
            {/* Velocity Slider */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-slate-300 font-mono">
                <span>Launch Velocity (v₀):</span>
                <span className="text-amber-400 font-bold">{velocity} m/s</span>
              </div>
              <input
                type="range"
                min="10"
                max="60"
                value={velocity}
                onChange={(e) => setVelocity(Number(e.target.value))}
                className="w-full accent-amber-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
              />
            </div>

            {/* Angle Slider */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-slate-300 font-mono">
                <span>Launch Angle (θ):</span>
                <span className="text-cyan-400 font-bold">{angle}°</span>
              </div>
              <input
                type="range"
                min="15"
                max="85"
                value={angle}
                onChange={(e) => setAngle(Number(e.target.value))}
                className="w-full accent-cyan-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
              />
            </div>

            {/* Gravity Selection */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-slate-300 font-mono">
                <span>Gravitational Field (g):</span>
                <span className="text-emerald-400 font-bold">{gravity} m/s²</span>
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { name: 'Earth', val: 9.8 },
                  { name: 'Moon', val: 1.62 },
                  { name: 'Mars', val: 3.72 }
                ].map((gPreset) => (
                  <button
                    key={gPreset.name}
                    onClick={() => setGravity(gPreset.val)}
                    className={`py-1 rounded text-[11px] font-mono border ${
                      gravity === gPreset.val
                        ? 'bg-cyan-950 text-cyan-300 border-cyan-700 font-bold'
                        : 'bg-slate-800/80 text-slate-400 border-slate-700 hover:text-white'
                    }`}
                  >
                    {gPreset.name} ({gPreset.val})
                  </button>
                ))}
              </div>
            </div>

            {/* Calculated Real-Time Metrics */}
            <div className="pt-3 border-t border-slate-800 space-y-2 text-[11px] font-mono">
              <div className="flex justify-between text-slate-400">
                <span>Flight Time (t):</span>
                <span className="text-white font-bold">{timeOfFlight.toFixed(2)} s</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Horizontal Range (R):</span>
                <span className="text-white font-bold">{maxRange.toFixed(1)} m</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Max Altitude (H):</span>
                <span className="text-white font-bold">{maxHeight.toFixed(1)} m</span>
              </div>
            </div>
          </div>

          {/* Canvas Viewport (8 cols) */}
          <div className="lg:col-span-8 flex flex-col items-center">
            <div className="w-full relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-inner">
              <canvas
                ref={canvasRef}
                width={560}
                height={260}
                className="w-full h-auto block"
              />
              <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-slate-900/80 border border-slate-800 text-[10px] font-mono text-cyan-400">
                PhysX Kinematics Viewport
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
