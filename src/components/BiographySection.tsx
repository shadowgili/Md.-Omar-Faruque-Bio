import React from 'react';
import { 
  BookOpen, 
  Sparkles, 
  Award, 
  Compass, 
  Atom, 
  Hotel, 
  Building2, 
  HeartPulse, 
  Cpu, 
  Quote, 
  ArrowRight,
  ShieldCheck,
  CheckCircle
} from 'lucide-react';
import { ProfileData, PageSection } from '../types';

interface BiographySectionProps {
  profile: ProfileData;
  onNavigate: (section: PageSection) => void;
}

export const BiographySection: React.FC<BiographySectionProps> = ({
  profile,
  onNavigate,
}) => {
  const journeyMilestones = [
    {
      icon: Atom,
      title: "Scientific Genesis: Physics at Dhaka College",
      period: "2010 – 2015",
      subtitle: "BSc & MSc in Physics (National University)",
      description: "Trained in classical mechanics, vector analysis, thermodynamics, and mathematical problem-solving. This rigorous scientific thinking formed the bedrock of his quantitative mindset in workforce analytics and logic-driven game programming."
    },
    {
      icon: Hotel,
      title: "Foundational Operations: Luxury Hospitality at Hotel Orchard Suites",
      period: "2017 – 2019",
      subtitle: "Executive – HR & Administration",
      description: "Managing around-the-clock shift schedules, front-office & F&B personnel, attendance biometric systems, and guest-centric human relations. Learned that internal employees must be treated with the same dignity and attention as high-end guests."
    },
    {
      icon: Building2,
      title: "Corporate HR & Industrial Scale: BYSL Global (Illiyeen)",
      period: "2019 – 2020",
      subtitle: "Corporate HR Executive",
      description: "Handled end-to-end recruitment across diverse corporate and production departments, coordinated payroll for 250+ employees, and reduced turnover by 15% through proactive employee engagement."
    },
    {
      icon: HeartPulse,
      title: "Nationwide Healthcare Leadership: Surjer Hashi Network (USAID)",
      period: "2021 – 2025",
      subtitle: "Senior Officer – HR (134 Clinics)",
      description: "Led HR operations for 134 clinics across Bangladesh. Developed centralized workforce reporting dashboards, digitized employee records, cut separation settlement time by 25%, and achieved 100% audit clearance for three consecutive years."
    },
    {
      icon: ShieldCheck,
      title: "Strategic HR Management: LEEDO",
      period: "2025 – Present",
      subtitle: "Manager – HR",
      description: "Leading recruitment, staff performance appraisal planning, and strict compliance with Bangladesh Labour Law and donor governance for vulnerable child rehabilitation programs. Recruited 25+ staff, reducing hiring cycle time by 30%."
    },
    {
      icon: Cpu,
      title: "Technological Fusion: Game Development & AI in HR",
      period: "Ongoing & Future",
      subtitle: "Unity 3D, C#, Google Data Analytics, AI for HR (2026)",
      description: "Constantly blending physics and computing: developing indie games in Unity 3D with custom physics scripting, designing automated HRIS reporting pipelines, and leveraging modern AI workflows for ethical talent acquisition."
    }
  ];

  return (
    <div className="space-y-12 py-8">
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800 text-cyan-300 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Complete Biography &amp; Professional Philosophy</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The Story of Md. Omar Faruque
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            From the theoretical equations of classical physics to executive human capital management and interactive 3D game engines — an unconventional journey defined by analytical precision, empathy, and technological curiosity.
          </p>
        </div>
      </div>

      {/* Narrative Bio Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Detailed Bio Paragraphs (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-5 text-slate-300 leading-relaxed text-sm sm:text-base">
            <h3 className="font-display text-xl font-bold text-white flex items-center space-x-2">
              <Compass className="w-5 h-5 text-cyan-400" />
              <span>A Multidisciplinary Executive Journey</span>
            </h3>

            {profile.detailedBio.map((paragraph, index) => (
              <p key={index} className="text-slate-300">
                {paragraph}
              </p>
            ))}

            {/* Core Values / Philosophy Callout */}
            <div className="mt-6 p-5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-slate-200">
              <div className="flex items-start space-x-3">
                <Quote className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <p className="font-medium italic text-slate-100">
                    &ldquo;Whether solving a differential equation in classical mechanics, tuning collision impulses in a Unity game engine, or balancing compliance with empathy across 134 healthcare centers, the guiding principle is identical: deeply understand the governing rules, respect the human element, and engineer seamless systems.&rdquo;
                  </p>
                  <p className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                    — Md. Omar Faruque
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Languages & Working Capabilities */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h4 className="text-base font-bold text-white flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Languages &amp; Global Communication</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profile.languages.map((lang, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60 flex items-center justify-between">
                  <span className="font-semibold text-white text-sm">{lang.language}</span>
                  <span className="text-xs text-cyan-300 bg-cyan-950/80 px-2.5 py-0.5 rounded border border-cyan-800/50">
                    {lang.proficiency}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Visual Career Roadmap & Quick Links (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="font-display text-xl font-bold text-white flex items-center space-x-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span>Career &amp; Growth Milestones</span>
            </h3>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-800">
              {journeyMilestones.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="relative flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-500 text-cyan-400 flex items-center justify-center shrink-0 z-10 shadow-md">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-400 font-semibold">
                          {item.period}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-white leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-xs font-medium text-slate-400">
                        {item.subtitle}
                      </p>
                      <p className="text-xs text-slate-400/90 leading-relaxed pt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col space-y-2">
              <button
                onClick={() => onNavigate('hr-leadership')}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 flex items-center justify-between transition-colors"
              >
                <span>Explore HR Operations &amp; Audits</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('game-dev')}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-blue-300 border border-slate-700 flex items-center justify-between transition-colors"
              >
                <span>Explore Game Development &amp; IT</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
