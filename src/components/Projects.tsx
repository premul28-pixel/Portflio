import React, { useState, useMemo } from 'react';
import { Project, ProjectCategory } from '../types';
import { projectsData } from '../data/projectsData';
import { ProjectArtwork } from './ProjectArtwork';
import { ProjectModal } from './ProjectModal';
import { Search, ExternalLink, Github, Filter, ChevronRight, Layers } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Mobile', 'Full-Stack', 'AI & Systems', 'Concepts & Hackathons', 'Freelance'];

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        activeCategory === 'All' ||
        (activeCategory === 'Concepts & Hackathons'
          ? project.category === 'Concepts & Hackathons'
          : project.category === activeCategory);

      const matchesSearch =
        searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        project.problem.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-ink-200/80 dark:border-ink-800/80">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
              Featured Work & Archive
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-950 dark:text-white">
              Engineering projects & case studies
            </h2>
            <p className="text-base text-ink-600 dark:text-ink-400 max-w-2xl">
              Distinguishing completed production builds, active prototypes, and hackathon architectures. Click any card to expand its full case study.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-ink-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by tech or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl text-xs bg-ink-50 dark:bg-ink-900 border border-ink-200 dark:border-ink-800 text-ink-900 dark:text-ink-100 placeholder-ink-400 focus:outline-hidden focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
            />
          </div>
        </div>

        {/* Filter Categories Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <Filter className="w-3.5 h-3.5 text-ink-400 shrink-0 mr-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-ink-900 text-white dark:bg-violet-600 dark:text-white shadow-xs'
                  : 'bg-ink-100/80 dark:bg-ink-800/60 text-ink-600 dark:text-ink-300 hover:bg-ink-200 dark:hover:bg-ink-700'
              }`}
            >
              {cat}
              {cat === 'All' && ` (${projectsData.length})`}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => setSelectedProject(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View case study for ${project.title}`}
              className="group cursor-pointer rounded-3xl bg-white dark:bg-ink-900/90 border border-ink-200/90 dark:border-ink-800/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-violet-500/40 transition-all duration-300 flex flex-col justify-between focus-visible:ring-2 focus-visible:ring-violet-500"
            >
              {/* Card Top / Custom 3D Artwork */}
              <div>
                <ProjectArtwork type={project.artworkType} title={project.title} />

                <div className="p-6 space-y-4">
                  {/* Status and Category badges */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-medium text-ink-500 dark:text-ink-400">
                      {project.category}
                    </span>
                    <span
                      className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full border ${
                        project.status === 'Completed'
                          ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20'
                          : project.status === 'In Development'
                          ? 'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20'
                          : project.status === 'Hackathon'
                          ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20'
                          : 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="font-serif text-xl font-bold text-ink-950 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      <ChevronRight className="w-4 h-4 text-ink-400 group-hover:translate-x-1 transition-transform" />
                    </h3>
                    <p className="mt-1 text-xs text-ink-600 dark:text-ink-300 line-clamp-2 leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Role snippet */}
                  <p className="text-[11px] text-ink-500 dark:text-ink-400">
                    <strong className="text-ink-700 dark:text-ink-200">Role:</strong> {project.role}
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-ink-100 dark:bg-ink-800 text-ink-600 dark:text-ink-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono text-ink-400">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer / Action */}
              <div className="px-6 py-3.5 bg-ink-50/60 dark:bg-ink-950/40 border-t border-ink-100 dark:border-ink-800/80 flex items-center justify-between text-xs font-semibold text-ink-600 dark:text-ink-300 group-hover:text-violet-600 dark:group-hover:text-violet-400">
                <span>Expand Case Study</span>
                <span className="text-[11px] text-ink-400 font-mono">Click to read →</span>
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-ink-50 dark:bg-ink-900 rounded-3xl border border-dashed border-ink-300 dark:border-ink-800">
            <Layers className="w-10 h-10 text-ink-400 mx-auto mb-2" />
            <p className="text-sm font-semibold text-ink-700 dark:text-ink-300">
              No projects found matching "{searchQuery}"
            </p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-semibold text-violet-600 dark:text-violet-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Modal Case Study Drawer */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
