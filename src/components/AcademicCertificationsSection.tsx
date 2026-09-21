import React, { useState } from 'react';
import { 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  Calendar, 
  BookOpen, 
  ExternalLink,
  ShieldCheck,
  Building,
  Atom,
  BadgeCheck,
  School,
  Globe2
} from 'lucide-react';
import { EducationItem, CertificationItem } from '../types';
import { 
  BIMLogo, 
  ICTDivisionLogo, 
  NHTTILogo, 
  DhakaCollegeLogo 
} from './BrandLogos';

interface AcademicCertificationsSectionProps {
  education: EducationItem[];
  certifications: CertificationItem[];
}

export const AcademicCertificationsSection: React.FC<AcademicCertificationsSectionProps> = ({
  education,
  certifications,
}) => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'degrees' | 'professional' | 'online'>('all');

  const professionalCerts = certifications.filter(c => c.id.startsWith('cert-prof'));
  const onlineCerts = certifications.filter(c => !c.id.startsWith('cert-prof'));

  const filteredEducation = (filterCategory === 'all' || filterCategory === 'degrees') ? education : [];
  const filteredProfessional = (filterCategory === 'all' || filterCategory === 'professional') ? professionalCerts : [];
  const filteredOnline = (filterCategory === 'all' || filterCategory === 'online') ? onlineCerts : [];

  return (
    <div className="space-y-12 py-8">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-800 text-purple-300 text-xs font-semibold">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Formal Education &amp; Verified Professional Credentials</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Academic Excellence &amp; Certifications
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Exact credentials extracted from official certificates: Master of Science in Physics, PGDHRM from BIM (CGPA 3.63), Android Developer from ICT Division, NHTTI Hospitality, and Google Digital Garage certifications.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-4">
        {[
          { id: 'all', label: `All Credentials (${education.length + certifications.length})` },
          { id: 'degrees', label: `Academic Degrees (${education.length})` },
          { id: 'professional', label: `Professional Diplomas (${professionalCerts.length})` },
          { id: 'online', label: `Online Training & Badges (${onlineCerts.length})` },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilterCategory(tab.id as any)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              filterCategory === tab.id
                ? 'bg-purple-600 text-white shadow-md shadow-purple-950/40'
                : 'bg-slate-800/70 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/60'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 1. Academic Degrees Section (Dhaka College, Dania College, Barnamala) */}
      {filteredEducation.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white flex items-center space-x-2">
              <School className="w-5 h-5 text-purple-400" />
              <span>Formal Academic Background (4 Qualifications)</span>
            </h3>
            <span className="text-xs text-slate-400">
              National University &amp; Board of Intermediate &amp; Secondary Education, Dhaka
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredEducation.map((edu) => (
              <div
                key={edu.id}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:border-purple-500/40 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start space-x-3">
                      <DhakaCollegeLogo className="w-12 h-12 shrink-0" />
                      <div>
                        <span className="px-2.5 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800 text-xs font-mono font-bold inline-block mb-1">
                          {edu.year}
                        </span>
                        <h4 className="text-base font-bold text-white leading-snug">
                          {edu.degree}
                        </h4>
                        <p className="text-xs font-semibold text-purple-300">
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-lg border border-emerald-800/40 shrink-0">
                      {edu.gradeOrCgpa}
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1 text-xs">
                    <p className="text-slate-400 font-mono">Discipline / Group: <span className="text-white font-semibold">{edu.field}</span></p>
                    <p className="text-slate-300 leading-relaxed">{edu.highlights}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. Professional Certifications (BIM, ICT Division, NHTTI) */}
      {filteredProfessional.length > 0 && (
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white flex items-center space-x-2">
              <Award className="w-5 h-5 text-emerald-400" />
              <span>Professional Post-Graduate Diplomas &amp; Government Credentials</span>
            </h3>
            <span className="text-xs text-slate-400">
              BIM, ICT Division &amp; NHTTI
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {filteredProfessional.map((cert) => {
              const getCertLogo = (id: string) => {
                if (id === 'cert-prof-1') return <BIMLogo className="w-12 h-12 shrink-0" />;
                if (id === 'cert-prof-2') return <ICTDivisionLogo className="w-12 h-12 shrink-0" />;
                if (id === 'cert-prof-3') return <NHTTILogo className="w-12 h-12 shrink-0" />;
                return <Award className="w-8 h-8 text-amber-400" />;
              };

              return (
                <div
                  key={cert.id}
                  className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:border-emerald-500/40 transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      {getCertLogo(cert.id)}
                      <div>
                        <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 text-[11px] font-mono font-bold inline-block mb-1">
                          {cert.year}
                        </span>
                        <h4 className="text-sm font-bold text-white leading-snug">
                          {cert.title}
                        </h4>
                        <p className="text-xs font-semibold text-emerald-400 mt-0.5">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {cert.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px] font-mono border border-slate-700/80"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-emerald-400">
                    <span className="flex items-center space-x-1">
                      <BadgeCheck className="w-4 h-4" />
                      <span>Verified Document Scan</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 3. Online Training Courses (Google Digital Garage, Google Analytics, Digital Security, etc.) */}
      {filteredOnline.length > 0 && (
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white flex items-center space-x-2">
              <Globe2 className="w-5 h-5 text-cyan-400" />
              <span>Online Training Badges &amp; Tech Specializations</span>
            </h3>
            <span className="text-xs text-slate-400">
              Google Digital Garage, Coursera, ICT Division &amp; Partners
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredOnline.map((cert) => (
              <div
                key={cert.id}
                className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 space-y-3 hover:border-cyan-500/40 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 text-[10.5px] font-mono">
                      {cert.year}
                    </span>
                    <span className="text-[11px] text-slate-400 flex items-center space-x-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Certified</span>
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-medium">
                    {cert.issuer}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skills.map((sk, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10.5px] font-mono">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
