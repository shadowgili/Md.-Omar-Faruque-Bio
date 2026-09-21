import React, { useState } from 'react';
import { 
  FolderKanban, 
  Layers, 
  CheckCircle2, 
  ExternalLink, 
  Code2, 
  X, 
  Gamepad2, 
  Cpu, 
  BarChart3,
  Sparkles
} from 'lucide-react';
import { ProjectItem } from '../types';

interface PortfolioSectionProps {
  projects: ProjectItem[];
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  projects,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'hr-tech' | 'game-dev' | 'it-systems'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="space-y-12 py-8">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800 text-cyan-300 text-xs font-semibold">
            <FolderKanban className="w-3.5 h-3.5" />
            <span>Demonstrated Engineering &amp; HR Innovations</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Portfolio &amp; Project Showcase
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            A comprehensive overview of implemented enterprise systems, healthcare analytics portals, Unity 3D physics game prototypes, and automated recruitment pipelines.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-4">
        {[
          { id: 'all', label: 'All Projects', icon: Layers },
          { id: 'hr-tech', label: 'HR Tech & Analytics', icon: BarChart3 },
          { id: 'game-dev', label: 'Game Dev & Physics', icon: Gamepad2 },
          { id: 'it-systems', label: 'IT Automation & Systems', icon: Cpu },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeFilter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center space-x-2 transition-all ${
                isActive
                  ? 'bg-cyan-600 text-white shadow-md shadow-cyan-950/50'
                  : 'bg-slate-800/70 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/60'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-slate-900/70 border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-cyan-500/50 transition-all group"
          >
            <div>
              {/* Image Preview */}
              <div className="h-52 w-full overflow-hidden relative bg-slate-950">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-900/90 backdrop-blur-sm border border-slate-700 text-xs font-mono font-semibold text-cyan-300">
                  {project.category.replace('-', ' ').toUpperCase()}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="font-display text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.shortDesc}
                </p>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px] font-mono border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer / Details button */}
            <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-800/80">
              {project.metrics && (
                <span className="text-xs font-mono text-emerald-400 font-medium truncate max-w-[65%]">
                  &bull; {project.metrics}
                </span>
              )}
              <button
                onClick={() => setSelectedProject(project)}
                className="ml-auto px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 flex items-center space-x-1.5 transition-colors"
              >
                <span>View Details</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6 relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white border border-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 font-semibold">
                {selectedProject.category.replace('-', ' ').toUpperCase()}
              </span>
              <h3 className="font-display text-2xl font-bold text-white pt-1">
                {selectedProject.title}
              </h3>
            </div>

            <div className="rounded-xl overflow-hidden h-60 w-full bg-slate-950 border border-slate-800">
              <img
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Architecture &amp; Overview
                </h4>
                <p>{selectedProject.fullDesc}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                  Key Technical Features
                </h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {selectedProject.metrics && (
                <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 text-xs font-medium">
                  <strong>Impact &amp; Results:</strong> {selectedProject.metrics}
                </div>
              )}

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Technologies Employed
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.techStack.map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 rounded bg-slate-800 text-slate-200 text-xs font-mono border border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
