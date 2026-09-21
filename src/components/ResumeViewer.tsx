import React, { useState } from 'react';
import { 
  Printer, 
  Download, 
  Copy, 
  Check, 
  FileText, 
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Award,
  GraduationCap,
  Briefcase,
  Code2
} from 'lucide-react';
import { ProfileData, ExperienceItem, EducationItem, CertificationItem } from '../types';

interface ResumeViewerProps {
  profile: ProfileData;
  experiences: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
}

export const ResumeViewer: React.FC<ResumeViewerProps> = ({
  profile,
  experiences,
  education,
  certifications,
}) => {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `
${profile.name.toUpperCase()}
${profile.titles.join(' | ')}
${profile.location.address}
Phone: ${profile.contact.phones.join(' | ')}
Email: ${profile.contact.emails.join(' | ')}
LinkedIn: ${profile.contact.linkedin}

PROFESSIONAL SUMMARY:
${profile.summary}

PROFESSIONAL EXPERIENCE:
${experiences.map(e => `
* ${e.role} - ${e.organization}, ${e.location} (${e.period})
Category: ${e.category.toUpperCase()}
Responsibilities:
${e.responsibilities.map(r => `  • ${r}`).join('\n')}
Key Achievements:
${e.achievements.map(a => `  • ${a}`).join('\n')}
`).join('\n')}

EDUCATION:
${education.map(ed => `* ${ed.degree} – ${ed.institution}, ${ed.year} | ${ed.gradeOrCgpa}`).join('\n')}

CERTIFICATIONS & PROFESSIONAL TRAINING:
${certifications.map(c => `* ${c.title} – ${c.issuer}, ${c.year}`).join('\n')}

TECHNICAL & SOFT SKILLS:
* HRIS: Zoho, Advance EMS, Odoo, Attendance & Leave Modules
* IT & Game Dev: Unity 3D, C# Scripting, Python, Advanced MS Excel & Google Workspace
* Applicant Tracking Systems (ATS Tools), Data Analysis & HR Reporting
* Languages: Bangla (Native), English (Professional Working Proficiency)
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-8 py-6">
      {/* Top Action Toolbar (Hidden in Print) */}
      <div className="no-print bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4 shadow-lg">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <FileText className="w-5 h-5 text-cyan-400" />
            <h2 className="text-lg font-bold text-white">
              Official Curriculum Vitae &amp; Resume
            </h2>
          </div>
          <p className="text-xs text-slate-400">
            Formatted to executive &amp; ATS-compatible standards. Print or save directly to PDF.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            id="print-resume-btn"
            onClick={handlePrint}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white flex items-center space-x-1.5 shadow-md shadow-cyan-950/40 transition-colors"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save as PDF</span>
          </button>

          <button
            id="copy-resume-btn"
            onClick={handleCopyText}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center space-x-1.5 transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-cyan-400" />}
            <span>{copied ? 'Copied to Clipboard!' : 'Copy Plain Text'}</span>
          </button>
        </div>
      </div>

      {/* Printable Executive Resume Document */}
      <div className="print-container max-w-4xl mx-auto bg-white text-slate-900 p-8 sm:p-12 rounded-2xl shadow-2xl border border-slate-200 font-sans text-xs leading-relaxed space-y-6">
        
        {/* CV Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-300">
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight font-display">
              {profile.name}
            </h1>
            <p className="text-sm font-bold text-slate-700">
              {profile.titles.join(' | ')}
            </p>
            <p className="text-[11px] text-slate-600">
              {profile.location.address}
            </p>
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-slate-700 pt-1 font-mono">
              <span>Phone: {profile.contact.phones.join(' | ')}</span>
              <span>Email: {profile.contact.emails.join(' | ')}</span>
              <span>LinkedIn: {profile.contact.linkedin}</span>
            </div>
          </div>

          <div className="w-20 h-20 rounded-xl overflow-hidden border border-slate-300 shrink-0 hidden sm:block">
            <img
              src={profile.avatarUrl}
              alt="Md. Omar Faruque"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Professional Summary */}
        <div className="space-y-1.5">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 flex items-center space-x-1.5">
            <Briefcase className="w-3.5 h-3.5 text-slate-800" />
            <span>Professional Summary</span>
          </h2>
          <p className="text-slate-700 text-justify">
            {profile.summary}
          </p>
        </div>

        {/* Professional Experience */}
        <div className="space-y-5">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 flex items-center space-x-1.5">
            <Briefcase className="w-3.5 h-3.5 text-slate-800" />
            <span>Professional Experience</span>
          </h2>

          {experiences.map((exp) => (
            <div key={exp.id} className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <div>
                  <h3 className="text-xs font-bold text-slate-950">
                    {exp.role}
                  </h3>
                  <p className="text-[11px] font-semibold text-slate-800">
                    {exp.organization} — {exp.location}
                  </p>
                </div>
                <span className="text-[11px] font-mono text-slate-600 font-semibold">
                  {exp.period}
                </span>
              </div>

              {/* Responsibilities */}
              <div className="space-y-1 pl-1">
                <p className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">
                  Key Responsibilities:
                </p>
                <ul className="list-disc pl-4 space-y-0.5 text-slate-700">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              {exp.achievements && exp.achievements.length > 0 && (
                <div className="space-y-1 pl-1 pt-1">
                  <p className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">
                    Key Achievements:
                  </p>
                  <ul className="list-disc pl-4 space-y-0.5 text-slate-700">
                    {exp.achievements.map((a, i) => (
                      <li key={i} className="font-medium text-slate-900">{a}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="space-y-2 pt-2">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 flex items-center space-x-1.5">
            <GraduationCap className="w-3.5 h-3.5 text-slate-800" />
            <span>Education</span>
          </h2>
          <div className="space-y-1.5">
            {education.map((edu) => (
              <div key={edu.id} className="flex flex-col sm:flex-row sm:items-baseline justify-between text-slate-800">
                <div>
                  <span className="font-bold text-slate-950">{edu.degree}</span> – {edu.institution}
                </div>
                <span className="font-mono text-[11px] text-slate-600">
                  {edu.year} | {edu.gradeOrCgpa}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="space-y-2 pt-2">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 flex items-center space-x-1.5">
            <Award className="w-3.5 h-3.5 text-slate-800" />
            <span>Certifications &amp; Professional Training</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-slate-800">
            {certifications.map((c) => (
              <div key={c.id} className="flex justify-between items-baseline">
                <span>&bull; {c.title} ({c.issuer})</span>
                <span className="font-mono text-[10px] text-slate-600">{c.year}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical & Soft Skills */}
        <div className="space-y-2 pt-2">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 flex items-center space-x-1.5">
            <Code2 className="w-3.5 h-3.5 text-slate-800" />
            <span>Technical, IT &amp; Soft Skills</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-800 text-[11px]">
            <div>
              <p className="font-bold text-slate-950">HRIS &amp; Enterprise Tools:</p>
              <p>Zoho People, Advance EMS, Odoo ERP, Applicant Tracking Systems (ATS)</p>
            </div>
            <div>
              <p className="font-bold text-slate-950">Data, Automation &amp; IT:</p>
              <p>Google Data Analytics, Advanced MS Excel, Power Query, Python, Google Workspace</p>
            </div>
            <div>
              <p className="font-bold text-slate-950">Game Development &amp; Physics:</p>
              <p>Unity 3D Engine, C# Programming, Classical Physics Mechanics &amp; Vectors</p>
            </div>
            <div>
              <p className="font-bold text-slate-950">Languages &amp; Core Competencies:</p>
              <p>Bangla (Native), English (Professional Working Proficiency), Bangladesh Labour Law</p>
            </div>
          </div>
        </div>

        {/* References */}
        <div className="pt-2 border-t border-slate-300 flex justify-between text-[11px] text-slate-600">
          <span>References: Available upon request</span>
          <span>Verified Curriculum Vitae &bull; Md. Omar Faruque</span>
        </div>
      </div>
    </div>
  );
};
