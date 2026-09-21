import React, { useState } from 'react';
import { 
  Briefcase, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Building, 
  ShieldCheck, 
  FileCheck, 
  Users, 
  Award, 
  ChevronRight,
  BarChart3,
  Scale
} from 'lucide-react';
import { ExperienceItem } from '../types';

interface HRExperienceSectionProps {
  experiences: ExperienceItem[];
}

export const HRExperienceSection: React.FC<HRExperienceSectionProps> = ({
  experiences,
}) => {
  const [selectedExpId, setSelectedExpId] = useState<string>(experiences[0]?.id || 'exp-1');

  const hrExperiences = experiences.filter(e => e.category === 'hr');
  const selectedExp = experiences.find(e => e.id === selectedExpId) || hrExperiences[0];

  const hrPillars = [
    {
      title: "Bangladesh Labour Law & Regulatory Compliance",
      icon: Scale,
      desc: "Deep domain proficiency in Bangladesh Labour Act (2006) and amendments, NGO Affairs Bureau requirements, and donor compliance mandates."
    },
    {
      title: "100% Audit Readiness Across Multi-Locations",
      icon: ShieldCheck,
      desc: "Proven track record maintaining pristine audit files across 134 healthcare clinics for three consecutive years without audit qualification."
    },
    {
      title: "Recruitment & Onboarding Efficiency",
      icon: Users,
      desc: "Reduced hiring cycle turnaround by 30% while acquiring mission-critical program managers, medical officers, and corporate executives."
    },
    {
      title: "Workforce Analytics & HRIS Implementation",
      icon: BarChart3,
      desc: "Hands-on mastery deploying Zoho People, Advance EMS, Odoo, and custom automated dashboards for executive oversight."
    }
  ];

  return (
    <div className="space-y-12 py-8">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800 text-cyan-300 text-xs font-semibold">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Executive Human Resource Experience</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Strategic HR Management &amp; Operations
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            7+ years directing talent management, labor compliance, payroll oversight, and workforce analytics across non-profit organizations, nationwide healthcare networks, and corporate enterprises.
          </p>
        </div>
      </div>

      {/* Pillars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {hrPillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <div key={idx} className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2.5">
              <div className="w-9 h-9 rounded-lg bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white leading-snug">
                {pillar.title}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Main Experience Selector & Details Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: List of Roles (4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 px-1">
            Positions Held
          </h3>
          {hrExperiences.map((exp) => {
            const isSelected = exp.id === selectedExp.id;
            return (
              <div
                key={exp.id}
                onClick={() => setSelectedExpId(exp.id)}
                className={`p-4 rounded-xl cursor-pointer transition-all border ${
                  isSelected
                    ? 'bg-slate-800 border-cyan-500 shadow-md shadow-cyan-950/40'
                    : 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-800/60 hover:border-slate-700'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <h4 className={`text-sm font-bold ${isSelected ? 'text-cyan-300' : 'text-white'}`}>
                        {exp.role}
                      </h4>
                      {exp.isCurrent && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-800">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-medium text-slate-300">
                      {exp.organization}
                    </p>
                    <p className="text-[11px] text-slate-400 flex items-center space-x-1">
                      <Calendar className="w-3 h-3 text-cyan-400 shrink-0" />
                      <span>{exp.period}</span>
                    </p>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-600'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Detailed View of Selected Role (8 cols) */}
        <div className="lg:col-span-8 bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-8">
          {/* Header of Role */}
          <div className="space-y-3 pb-6 border-b border-slate-800">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="px-2.5 py-1 rounded-md bg-cyan-950 text-cyan-300 border border-cyan-800 text-xs font-mono font-semibold">
                {selectedExp.period}
              </span>
              <span className="text-xs text-slate-400 flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{selectedExp.location}</span>
              </span>
            </div>

            <h3 className="font-display text-2xl font-bold text-white">
              {selectedExp.role}
            </h3>
            <div className="space-y-1">
              <p className="text-base font-semibold text-cyan-400">
                {selectedExp.organization}
              </p>
              {selectedExp.orgTagline && (
                <p className="text-xs text-slate-400 italic">
                  {selectedExp.orgTagline}
                </p>
              )}
            </div>
          </div>

          {/* Key Achievements */}
          {selectedExp.achievements && selectedExp.achievements.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-amber-300 flex items-center space-x-2">
                <Award className="w-4 h-4" />
                <span>Key Measurable Achievements</span>
              </h4>
              <div className="grid grid-cols-1 gap-2.5">
                {selectedExp.achievements.map((ach, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-800/80 border border-amber-500/20 flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                      {ach}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Responsibilities */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-300 flex items-center space-x-2">
              <FileCheck className="w-4 h-4" />
              <span>Core Responsibilities &amp; Operations</span>
            </h4>
            <ul className="space-y-2.5">
              {selectedExp.responsibilities.map((resp, i) => (
                <li key={i} className="text-xs sm:text-sm text-slate-300 flex items-start space-x-2.5 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Systems & Technologies Used */}
          {selectedExp.technologiesUsed && (
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-slate-400 mr-2">
                Systems &amp; Tools:
              </span>
              {selectedExp.technologiesUsed.map((tech, i) => (
                <span key={i} className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-xs font-mono border border-slate-700">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
