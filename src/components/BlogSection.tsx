import React, { useState } from 'react';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Search, 
  Plus, 
  X, 
  Tag, 
  User,
  Sparkles
} from 'lucide-react';
import { BlogPostItem } from '../types';

interface BlogSectionProps {
  posts: BlogPostItem[];
  onAddPost: (post: BlogPostItem) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  posts,
  onAddPost,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPost, setSelectedPost] = useState<BlogPostItem | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);

  // New post form state
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('HR Strategy');
  const [newExcerpt, setNewExcerpt] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newTags, setNewTags] = useState('');

  const filteredPosts = posts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesSearch;
  });

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    const newPost: BlogPostItem = {
      id: `post-${Date.now()}`,
      title: newTitle.trim(),
      slug: newTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      category: newCategory,
      excerpt: newExcerpt.trim() || newContent.slice(0, 160) + '...',
      content: newContent.trim(),
      author: "Md. Omar Faruque",
      date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      readTime: `${Math.max(3, Math.ceil(newContent.split(' ').length / 150))} min read`,
      tags: newTags.split(',').map(t => t.trim()).filter(Boolean)
    };

    onAddPost(newPost);
    setShowCreateModal(false);
    setNewTitle('');
    setNewExcerpt('');
    setNewContent('');
    setNewTags('');
  };

  return (
    <div className="space-y-12 py-8">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800 text-cyan-300 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Executive Insights, Physics &amp; Technology Essays</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Articles &amp; Thought Leadership
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Perspectives on integrating artificial intelligence into human resource operations, applying classical physics to game programming, and maintaining operational agility across 134 healthcare centers.
          </p>
        </div>
      </div>

      {/* Search & Actions Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search articles, keywords, tags..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
          />
        </div>

        <button
          onClick={() => setShowCreateModal(true)}
          className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white flex items-center justify-center space-x-1.5 shadow-md shadow-cyan-950/40 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Write New Article</span>
        </button>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            onClick={() => setSelectedPost(post)}
            className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-4 hover:border-cyan-500/50 cursor-pointer transition-all flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 text-[11px] font-mono font-semibold">
                  {post.category}
                </span>
                <div className="flex items-center space-x-3 text-xs text-slate-400">
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    <span>{post.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{post.readTime}</span>
                  </span>
                </div>
              </div>

              <h3 className="font-display text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                {post.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {post.tags.slice(0, 3).map((tag, idx) => (
                  <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/60">
                    #{tag}
                  </span>
                ))}
              </div>
              <span className="text-xs font-semibold text-cyan-400 flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                <span>Read Full</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Article Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-10 space-y-6 relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white border border-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-3 pb-6 border-b border-slate-800">
              <div className="flex items-center space-x-3 text-xs text-slate-400">
                <span className="px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 font-mono font-semibold">
                  {selectedPost.category}
                </span>
                <span>{selectedPost.date}</span>
                <span>&bull;</span>
                <span>{selectedPost.readTime}</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {selectedPost.title}
              </h2>
              <p className="text-xs text-slate-400 flex items-center space-x-1.5 pt-1">
                <User className="w-3.5 h-3.5 text-cyan-400" />
                <span>By {selectedPost.author}</span>
              </p>
            </div>

            {/* Content formatted */}
            <div className="prose prose-invert max-w-none text-slate-200 text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line">
              {selectedPost.content}
            </div>

            {/* Tags */}
            <div className="pt-6 border-t border-slate-800 flex flex-wrap gap-2">
              {selectedPost.tags.map((tag, i) => (
                <span key={i} className="px-2.5 py-1 rounded bg-slate-800 text-cyan-300 text-xs font-mono border border-slate-700">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedPost(null)}
                className="px-5 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create New Post Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6 relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setShowCreateModal(false)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white border border-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <h3 className="font-display text-xl font-bold text-white">
                Publish a New Article / Essay
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Add an essay or thought leadership piece to your portfolio. Persists in your browser session.
              </p>
            </div>

            <form onSubmit={handleCreateSubmit} className="space-y-4 text-xs">
              <div className="space-y-1.5">
                <label className="text-slate-300 font-semibold">Article Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Navigating Multi-Center HR Audits in 2026"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full p-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-slate-300 font-semibold">Category</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full p-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option value="HR Strategy">HR Strategy</option>
                    <option value="Game Dev & IT">Game Dev &amp; IT</option>
                    <option value="Healthcare HR">Healthcare HR</option>
                    <option value="Hospitality & Culture">Hospitality &amp; Culture</option>
                    <option value="AI in HR">AI in HR</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-300 font-semibold">Tags (comma separated)</label>
                  <input
                    type="text"
                    placeholder="e.g. HRIS, Audits, Unity, C#"
                    value={newTags}
                    onChange={(e) => setNewTags(e.target.value)}
                    className="w-full p-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-slate-300 font-semibold">Short Excerpt</label>
                <input
                  type="text"
                  placeholder="Brief 1-2 sentence preview..."
                  value={newExcerpt}
                  onChange={(e) => setNewExcerpt(e.target.value)}
                  className="w-full p-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-slate-300 font-semibold">Full Article Body</label>
                <textarea
                  rows={6}
                  required
                  placeholder="Write your article paragraphs here..."
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  className="w-full p-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="pt-3 flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white shadow-md shadow-cyan-950/40"
                >
                  Publish Article
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
