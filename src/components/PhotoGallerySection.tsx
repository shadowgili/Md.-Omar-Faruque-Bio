import React, { useState } from 'react';
import { 
  Image as ImageIcon, 
  Plus, 
  Upload, 
  X, 
  Eye, 
  Calendar, 
  Sparkles,
  Tag
} from 'lucide-react';
import { PhotoItem } from '../types';

interface PhotoGallerySectionProps {
  photos: PhotoItem[];
  onAddPhoto: (photo: PhotoItem) => void;
}

export const PhotoGallerySection: React.FC<PhotoGallerySectionProps> = ({
  photos,
  onAddPhoto,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'portrait' | 'workplace' | 'projects' | 'certificates'>('all');
  const [lightboxPhoto, setLightboxPhoto] = useState<PhotoItem | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  // Form states for adding photo
  const [photoUrl, setPhotoUrl] = useState('');
  const [photoTitle, setPhotoTitle] = useState('');
  const [photoCaption, setPhotoCaption] = useState('');
  const [photoCategory, setPhotoCategory] = useState<'portrait' | 'workplace' | 'projects' | 'certificates' | 'general'>('general');
  const [fileDataPreview, setFileDataPreview] = useState<string | null>(null);

  const filteredPhotos = selectedCategory === 'all'
    ? photos
    : photos.filter(p => p.category === selectedCategory);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFileDataPreview(reader.result as string);
        if (!photoTitle) {
          setPhotoTitle(file.name.replace(/\.[^/.]+$/, ''));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalUrl = fileDataPreview || photoUrl.trim();
    if (!finalUrl || !photoTitle.trim()) return;

    const newPhoto: PhotoItem = {
      id: `photo-${Date.now()}`,
      url: finalUrl,
      title: photoTitle.trim(),
      caption: photoCaption.trim() || 'Uploaded to personal portfolio gallery.',
      category: photoCategory,
      uploadedAt: new Date().toISOString().split('T')[0],
    };

    onAddPhoto(newPhoto);
    setShowAddModal(false);
    setPhotoUrl('');
    setPhotoTitle('');
    setPhotoCaption('');
    setFileDataPreview(null);
  };

  return (
    <div className="space-y-12 py-8">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800 text-cyan-300 text-xs font-semibold">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Interactive Media &amp; Photo Gallery</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Visual Gallery &amp; Documentation
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Executive portraits, workplace operations, technical screenshots, and project previews. You can upload or link new photos anytime to expand your personal archive.
          </p>
        </div>
      </div>

      {/* Action and Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div className="flex flex-wrap items-center gap-1.5">
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'portrait', label: 'Portraits' },
            { id: 'projects', label: 'Projects & Tech' },
            { id: 'certificates', label: 'Certificates' },
            { id: 'workplace', label: 'Workplace' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                selectedCategory === tab.id
                  ? 'bg-cyan-600 text-white shadow-sm'
                  : 'bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white flex items-center space-x-1.5 shadow-md shadow-cyan-950/40 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Add / Upload New Photo</span>
        </button>
      </div>

      {/* Photos Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setLightboxPhoto(photo)}
            className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-cyan-500/50 cursor-pointer transition-all shadow-md flex flex-col"
          >
            <div className="aspect-video sm:aspect-square w-full overflow-hidden bg-slate-950 relative">
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="p-3 rounded-full bg-slate-900/80 text-cyan-300 border border-slate-700 shadow-lg">
                  <Eye className="w-5 h-5" />
                </span>
              </div>
              <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-slate-900/90 text-cyan-300 text-[10px] font-mono border border-slate-700">
                {photo.category.toUpperCase()}
              </div>
            </div>

            <div className="p-4 space-y-1 bg-slate-900/90">
              <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                {photo.title}
              </h4>
              <p className="text-xs text-slate-400 line-clamp-2">
                {photo.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxPhoto && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setLightboxPhoto(null)}
              className="absolute -top-12 right-0 p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-white border border-slate-700"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={lightboxPhoto.url}
              alt={lightboxPhoto.title}
              className="max-h-[70vh] max-w-full rounded-xl object-contain border border-slate-800 shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="mt-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800 max-w-xl w-full text-center space-y-1">
              <h3 className="text-base font-bold text-white">
                {lightboxPhoto.title}
              </h3>
              <p className="text-xs text-slate-300">
                {lightboxPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Add / Upload Photo Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-md w-full p-6 space-y-5 relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white border border-slate-700"
            >
              <X className="w-4 h-4" />
            </button>

            <div>
              <h3 className="text-lg font-bold text-white">
                Add / Upload Photo
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Upload from your device or paste an image link. Persists in your portfolio.
              </p>
            </div>

            <form onSubmit={handleAddSubmit} className="space-y-4 text-xs">
              {/* File upload input */}
              <div className="space-y-1.5">
                <label className="text-slate-300 font-semibold flex items-center space-x-1.5">
                  <Upload className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Choose file from device:</span>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="w-full text-slate-300 text-xs file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-cyan-950 file:text-cyan-300 hover:file:bg-cyan-900 cursor-pointer"
                />
              </div>

              <div className="text-center text-slate-500 font-mono text-[10px]">— OR ENTER IMAGE URL —</div>

              <div className="space-y-1">
                <label className="text-slate-300 font-semibold">Image URL</label>
                <input
                  type="url"
                  placeholder="https://example.com/photo.jpg"
                  value={photoUrl}
                  onChange={(e) => {
                    setPhotoUrl(e.target.value);
                    setFileDataPreview(null);
                  }}
                  className="w-full p-2 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              {/* Preview if available */}
              {(fileDataPreview || photoUrl) && (
                <div className="w-full h-32 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center">
                  <img
                    src={fileDataPreview || photoUrl}
                    alt="Preview"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              )}

              <div className="space-y-1">
                <label className="text-slate-300 font-semibold">Photo Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. LEEDO Annual Staff Workshop"
                  value={photoTitle}
                  onChange={(e) => setPhotoTitle(e.target.value)}
                  className="w-full p-2 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-slate-300 font-semibold">Category</label>
                <select
                  value={photoCategory}
                  onChange={(e) => setPhotoCategory(e.target.value as any)}
                  className="w-full p-2 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="general">General</option>
                  <option value="portrait">Executive Portrait</option>
                  <option value="workplace">Workplace &amp; Operations</option>
                  <option value="projects">Projects &amp; Systems</option>
                  <option value="certificates">Certificates</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-slate-300 font-semibold">Caption / Description</label>
                <textarea
                  rows={2}
                  placeholder="Short context about this photo..."
                  value={photoCaption}
                  onChange={(e) => setPhotoCaption(e.target.value)}
                  className="w-full p-2 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="pt-2 flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!fileDataPreview && !photoUrl.trim()}
                  className="px-5 py-2 rounded-xl text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 text-white shadow-md shadow-cyan-950/40"
                >
                  Save Photo
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
