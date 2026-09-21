import React from 'react';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  MapPin, 
  ArrowUp, 
  Heart,
  FileText,
  Gamepad2,
  Briefcase
} from 'lucide-react';
import { PageSection, ProfileData } from '../types';

interface FooterProps {
  profile: ProfileData;
  onNavigate: (section: PageSection) => void;
  onOpenResumeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  profile,
  onNavigate,
  onOpenResumeModal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="no-print bg-slate-950 border-t border-slate-800/90 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Bio summary (Col 1 & 2) */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-500 flex items-center justify-center text-white font-display font-bold text-base shadow-sm">
                OF
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-white">
                  Md. Omar Faruque
                </h3>
                <p className="text-[11px] text-cyan-400">
                  HR Manager &bull; Game Developer &bull; Workforce Analytics
                </p>
              </div>
            </div>

            <p className="text-slate-400 max-w-md leading-relaxed">
              Bridging executive human resource leadership, Bangladesh Labour Law compliance, nationwide healthcare HR operations, and interactive 3D game engineering.
            </p>

            <div className="flex items-center space-x-3 text-slate-300">
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-cyan-400 hover:text-cyan-300 border border-slate-800 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profile.contact.emails[0]}`}
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-cyan-400 hover:text-cyan-300 border border-slate-800 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${profile.contact.phones[0]}`}
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-cyan-400 hover:text-cyan-300 border border-slate-800 transition-colors"
                title="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Page Links (Col 3) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Portfolio Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Home &amp; Biography
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('hr-leadership')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  HR Leadership (LEEDO &amp; Surjer Hashi)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('game-dev')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Game Development &amp; Physics
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('hospitality')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Hospitality (Hotel Orchard Suites)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('academic-certs')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Academics &amp; Certifications
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Portfolio &amp; Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blog')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Articles &amp; Blog
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details & Direct CV (Col 4) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p className="flex items-start space-x-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Jawchar, Kamrangir Chor, Ashrafabad, Dhaka-1211</span>
              </p>
              <p className="flex items-center space-x-1.5">
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href={`tel:${profile.contact.phones[0]}`} className="hover:text-white font-mono">
                  {profile.contact.phones[0]}
                </a>
              </p>
              <p className="flex items-center space-x-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href={`mailto:${profile.contact.emails[0]}`} className="hover:text-white font-mono truncate">
                  {profile.contact.emails[0]}
                </a>
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenResumeModal}
                className="w-full py-2 px-3 rounded-lg text-xs font-semibold bg-cyan-950/70 hover:bg-cyan-900/80 text-cyan-300 border border-cyan-800/80 flex items-center justify-center space-x-1.5 transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Download Executive CV</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>
            &copy; {new Date().getFullYear()} Md. Omar Faruque. All Rights Reserved. Designed for Professional Portfolio &amp; Google Sites.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
