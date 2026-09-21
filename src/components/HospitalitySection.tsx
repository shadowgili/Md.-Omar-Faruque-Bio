import React from 'react';
import { 
  Hotel, 
  Clock, 
  CheckCircle2, 
  HeartHandshake, 
  ShieldCheck, 
  CalendarDays, 
  Award, 
  Sparkles,
  MapPin,
  Building2,
  Users
} from 'lucide-react';
import { ExperienceItem } from '../types';
import { 
  HotelOrchardLogo, 
  AsiaHotelLogo, 
  AscottDhakaLogo, 
  GalesiaHotelLogo, 
  OlivesHotelLogo,
  NHTTILogo
} from './BrandLogos';

interface HospitalitySectionProps {
  hospitalityExps: ExperienceItem[];
}

export const HospitalitySection: React.FC<HospitalitySectionProps> = ({
  hospitalityExps,
}) => {
  const hospitalityPillars = [
    {
      title: "24/7 Shift Scheduling & Roster Optimization",
      icon: Clock,
      desc: "Architected continuous shift rotations covering Front Desk, Housekeeping, and Food & Beverage departments with zero service interruptions."
    },
    {
      title: "Hospitality Regulatory & NHTTI Standards",
      icon: ShieldCheck,
      desc: "Trained under National Hotel & Tourism Training Institute (NHTTI) standards, upholding regulatory guest registers and safety protocols."
    },
    {
      title: "Guest-Centric Concierge & VIP Relations",
      icon: HeartHandshake,
      desc: "Managed high-profile diplomatic delegations, corporate blocks, and foreign expatriate suites across Banani, Gulshan, and Baridhara."
    },
    {
      title: "Revenue & Central Reservation Management",
      icon: CalendarDays,
      desc: "Supervised corporate yield management, room inventory balancing, online OTA rate parity, and flawless night audit balances."
    }
  ];

  // Helper to get matching logo for each hotel
  const getHotelLogo = (orgName: string, role: string) => {
    if (orgName.includes("Orchard")) return <HotelOrchardLogo className="w-12 h-12 shrink-0" />;
    if (orgName.includes("Asia")) return <AsiaHotelLogo className="w-12 h-12 shrink-0" />;
    if (orgName.includes("Ascott")) return <AscottDhakaLogo className="w-12 h-12 shrink-0" />;
    if (orgName.includes("Galesia")) return <GalesiaHotelLogo className="w-12 h-12 shrink-0" />;
    if (orgName.includes("OLIVES")) return <OlivesHotelLogo className="w-12 h-12 shrink-0" />;
    return <Hotel className="w-8 h-8 text-amber-400" />;
  };

  return (
    <div className="space-y-12 py-8">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-950/70 border border-amber-800 text-amber-300 text-xs font-semibold">
            <Hotel className="w-3.5 h-3.5" />
            <span>Hospitality Administration &amp; Operations History</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Hospitality Leadership &amp; Front Office Operations
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Six distinct appointments across Dhaka's premier boutique and luxury hotel properties. Grounded in Front Office, Sales &amp; Marketing reservation supervision, and NHTTI-certified secretarial excellence.
          </p>
        </div>
      </div>

      {/* NHTTI Certification Badge Banner */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-950/60 via-slate-900 to-slate-900 border border-amber-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <NHTTILogo className="w-14 h-14 shrink-0" />
          <div className="space-y-0.5">
            <div className="inline-flex items-center space-x-1.5 text-amber-400 text-xs font-semibold">
              <Award className="w-3.5 h-3.5" />
              <span>National Hotel &amp; Tourism Training Institute (NHTTI - বাংলাদেশ পর্যটন কর্পোরেশন)</span>
            </div>
            <h4 className="text-base font-bold text-white">
              Certified in Front Office &amp; Secretarial Operations
            </h4>
            <p className="text-xs text-slate-300">
              Awarded professional competence certificate in front desk management, concierge etiquette, reservation software, and business correspondence.
            </p>
          </div>
        </div>
        <div className="shrink-0 px-3.5 py-1.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold">
          Verified NHTTI Credential
        </div>
      </div>

      {/* Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {hospitalityPillars.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div key={idx} className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2.5">
              <div className="w-9 h-9 rounded-lg bg-amber-950/80 border border-amber-800/60 text-amber-400 flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white leading-snug">
                {p.title}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {p.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Complete Chronological Hospitality Career Timeline (6 Positions from User's Resume Image) */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center space-x-2">
              <Building2 className="w-5 h-5 text-amber-400" />
              <span>Full Hospitality Career Timeline (6 Positions)</span>
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Directly extracted from authentic professional service records across Dhaka's hospitality sector.
            </p>
          </div>
          <span className="text-xs font-mono text-amber-400 bg-amber-950/60 px-2.5 py-1 rounded-lg border border-amber-800/50">
            {hospitalityExps.length} Hotel Appointments
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {hospitalityExps.map((exp, idx) => (
            <div 
              key={exp.id} 
              className="bg-slate-900/75 border border-slate-800 rounded-2xl p-6 hover:border-amber-500/40 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start space-x-3.5">
                    {getHotelLogo(exp.organization, exp.role)}
                    <div>
                      <h4 className="text-base font-bold text-white leading-snug">
                        {exp.role}
                      </h4>
                      <p className="text-xs font-semibold text-amber-300">
                        {exp.organization}
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        {exp.orgTagline}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <span className="px-2.5 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800 text-xs font-mono font-semibold">
                    {exp.period}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.location}</span>
                  </span>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  <p className="text-xs font-semibold text-slate-300">Key Responsibilities:</p>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {exp.responsibilities.map((r, rIdx) => (
                      <li key={rIdx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {exp.technologiesUsed && exp.technologiesUsed.length > 0 && (
                <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {exp.technologiesUsed.map((tech, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10.5px] font-mono border border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
