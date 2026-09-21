import React, { useState } from 'react';
import { 
  User, 
  Briefcase, 
  Gamepad2, 
  Coffee, 
  GraduationCap, 
  FolderKanban, 
  BookOpen, 
  Image as ImageIcon, 
  FileText, 
  Mail, 
  Menu, 
  X, 
  SlidersHorizontal,
  ExternalLink
} from 'lucide-react';
import { PageSection } from '../types';

interface NavbarProps {
  currentSection: PageSection;
  onNavigate: (section: PageSection) => void;
  onOpenEditModal: () => void;
  onOpenGoogleSitesHelper: () => void;
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentSection,
  onNavigate,
  onOpenEditModal,
  onOpenGoogleSitesHelper,
  onOpenResumeModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageSection; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'home', label: 'Home & Bio', icon: User },
    { id: 'hr-leadership', label: 'HR Leadership', icon: Briefcase },
    { id: 'game-dev', label: 'Game Dev & IT', icon: Gamepad2 },
    { id: 'hospitality', label: 'Hospitality', icon: Coffee },
    { id: 'academic-certs', label: 'Academics & Certs', icon: GraduationCap },
    { id: 'portfolio', label: 'Portfolio', icon: FolderKanban },
    { id: 'blog', label: 'Blog', icon: BookOpen },
    { id: 'photos', label: 'Gallery', icon: ImageIcon },
    { id: 'resume', label: 'Resume / CV', icon: FileText },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (section: PageSection) => {
    onNavigate(section);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-slate-100 no-print transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Personal Brand */}
          <div 
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="cursor-pointer flex items-center space-x-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-500 flex items-center justify-center text-white font-display font-bold text-lg shadow-md shadow-cyan-900/20 group-hover:scale-105 transition-transform">
              OF
            </div>
            <div>
              <span className="font-display font-bold text-lg tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                Md. Omar Faruque
              </span>
              <p className="text-xs text-slate-400 hidden sm:block">
                HR Leader • Game Developer • Tech Innovator
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center space-x-1.5 whitespace-nowrap ${
                    isActive
                      ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Quick Action Buttons on Desktop */}
          <div className="hidden lg:flex items-center space-x-2">
            <button
              id="google-sites-helper-btn"
              onClick={onOpenGoogleSitesHelper}
              title="Google Sites sync and embed instructions"
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 flex items-center space-x-1.5 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              <span>Google Sites</span>
            </button>

            <button
              id="edit-mode-toggle-btn"
              onClick={onOpenEditModal}
              title="Edit info, upload photos, add projects"
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 flex items-center space-x-1.5 transition-colors"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" />
              <span>Update Info</span>
            </button>

            <button
              id="download-resume-header-btn"
              onClick={onOpenResumeModal}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white shadow-sm shadow-cyan-900/40 transition-all flex items-center space-x-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume / CV</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 xl:hidden">
            <button
              id="mobile-edit-btn"
              onClick={onOpenEditModal}
              className="p-2 rounded-lg bg-slate-800 text-amber-400 border border-slate-700 hover:bg-slate-700 text-xs flex items-center space-x-1"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-900/98 border-b border-slate-800 px-4 pt-2 pb-6 space-y-1 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pt-2 pb-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2.5 rounded-lg text-xs font-medium flex items-center space-x-2 text-left ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                      : 'bg-slate-800/70 text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                  <span className="truncate">{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-800 flex flex-col space-y-2">
            <button
              id="mobile-resume-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full py-2.5 rounded-lg text-sm font-semibold bg-cyan-600 hover:bg-cyan-500 text-white flex items-center justify-center space-x-2"
            >
              <FileText className="w-4 h-4" />
              <span>View & Download Resume / CV</span>
            </button>
            <div className="grid grid-cols-2 gap-2">
              <button
                id="mobile-sites-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenGoogleSitesHelper();
                }}
                className="py-2 rounded-lg text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700 hover:text-white flex items-center justify-center space-x-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                <span>Google Sites Sync</span>
              </button>
              <button
                id="mobile-update-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEditModal();
                }}
                className="py-2 rounded-lg text-xs font-medium bg-slate-800 text-amber-300 border border-slate-700 hover:text-white flex items-center justify-center space-x-1.5"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Edit Profile Info</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
