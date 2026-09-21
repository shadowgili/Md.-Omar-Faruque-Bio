import React from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Linkedin, 
  Download, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Code2, 
  ShieldCheck, 
  Users, 
  Hospital
} from 'lucide-react';
import { ProfileData, PageSection } from '../types';

interface HomeHeroProps {
  profile: ProfileData;
  onNavigate: (section: PageSection) => void;
  onOpenResumeModal: () => void;
}

export const HomeHero: React.FC<HomeHeroProps> = ({
  profile,
  onNavigate,
  onOpenResumeModal,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 text-slate-100 py-12 lg:py-20 border-b border-slate-800">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Info Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Strategic HR Leadership &amp; Tech Consultation</span>
            </div>

            {/* Name and Tagline */}
            <div className="space-y-3">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {profile.name}
              </h1>
              <div className="flex flex-wrap gap-2 text-sm font-semibold">
                {profile.titles.map((title, i) => (
                  <span 
                    key={i} 
                    className="px-2.5 py-1 rounded-md bg-slate-800/90 text-cyan-300 border border-slate-700/80 text-xs font-mono"
                  >
                    {title}
                  </span>
                ))}
              </div>
              <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl pt-2">
                {profile.tagline}
              </p>
            </div>

            {/* Concise Bio snippet */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl">
              {profile.summary}
            </p>

            {/* Contact quick links */}
            <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-slate-300 pt-1">
              <div className="flex items-center space-x-1.5 text-slate-300 hover:text-white">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Dhaka-1211, Bangladesh</span>
              </div>
              <a 
                href={`mailto:${profile.contact.emails[0]}`}
                className="flex items-center space-x-1.5 text-slate-300 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{profile.contact.emails[0]}</span>
              </a>
              <a 
                href={`tel:${profile.contact.phones[0]}`}
                className="flex items-center space-x-1.5 text-slate-300 hover:text-cyan-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{profile.contact.phones[0]}</span>
              </a>
              <a 
                href={profile.contact.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center space-x-1.5 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
              >
                <Linkedin className="w-4 h-4 shrink-0" />
                <span>LinkedIn Profile</span>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                id="hero-view-bio-btn"
                onClick={() => onNavigate('biography')}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-900/30 flex items-center space-x-2 transition-all transform hover:-translate-y-0.5"
              >
                <span>Read Full Biography</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-download-resume-btn"
                onClick={onOpenResumeModal}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 flex items-center space-x-2 transition-all transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume / CV</span>
              </button>

              <button
                id="hero-explore-projects-btn"
                onClick={() => onNavigate('portfolio')}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 flex items-center space-x-2 transition-colors"
              >
                <Code2 className="w-4 h-4 text-blue-400" />
                <span>View Portfolio Projects</span>
              </button>
            </div>
          </div>

          {/* Portrait & Key Badges Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-72 sm:w-80 aspect-square rounded-2xl p-1 bg-gradient-to-tr from-cyan-500 via-blue-500 to-indigo-500 shadow-2xl shadow-cyan-950/50">
              <div className="w-full h-full rounded-[14px] overflow-hidden bg-slate-900 relative">
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating pill over image */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-xs text-slate-200 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-white">Md. Omar Faruque</p>
                    <p className="text-[11px] text-cyan-400">Manager – HR @ LEEDO</p>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 text-[10px] font-bold">
                    7+ Yrs Exp
                  </span>
                </div>
              </div>

              {/* Floating verified badge */}
              <div className="absolute -top-3 -right-3 bg-slate-900 border border-cyan-500/50 text-cyan-300 px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1 shadow-lg">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Verified Executive</span>
              </div>
            </div>

            {/* Quick Feature Pillars */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-sm mt-6">
              <button
                onClick={() => onNavigate('hr-leadership')}
                className="p-3 rounded-xl bg-slate-800/70 border border-slate-700/70 hover:border-cyan-500/50 text-left transition-all group"
              >
                <div className="flex items-center justify-between mb-1">
                  <Hospital className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-mono text-slate-400">134 Centers</span>
                </div>
                <div className="text-xs font-bold text-white group-hover:text-cyan-300">
                  HR Leadership
                </div>
                <div className="text-[11px] text-slate-400 truncate">
                  LEEDO &amp; Surjer Hashi
                </div>
              </button>

              <button
                onClick={() => onNavigate('game-dev')}
                className="p-3 rounded-xl bg-slate-800/70 border border-slate-700/70 hover:border-blue-500/50 text-left transition-all group"
              >
                <div className="flex items-center justify-between mb-1">
                  <Code2 className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-mono text-slate-400">Unity &bull; C#</span>
                </div>
                <div className="text-xs font-bold text-white group-hover:text-blue-300">
                  Game Dev &amp; IT
                </div>
                <div className="text-[11px] text-slate-400 truncate">
                  Physics &bull; Analytics
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Metric Stats Banner */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {profile.stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="p-4 rounded-xl bg-slate-800/40 border border-slate-800/60 hover:bg-slate-800/70 transition-colors text-center sm:text-left"
            >
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-0.5">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 mt-1 line-clamp-1">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
