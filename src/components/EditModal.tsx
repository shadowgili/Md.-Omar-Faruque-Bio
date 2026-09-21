import React, { useState } from 'react';
import { 
  X, 
  Save, 
  RotateCcw, 
  Download, 
  Upload, 
  Check, 
  SlidersHorizontal,
  User,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  FileText
} from 'lucide-react';
import { ProfileData } from '../types';

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  onSaveProfile: (updated: ProfileData) => void;
  onResetDefaults: () => void;
}

export const EditModal: React.FC<EditModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSaveProfile,
  onResetDefaults,
}) => {
  const [formData, setFormData] = useState<ProfileData>({ ...profile });
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveProfile(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(formData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "omar_faruque_portfolio_profile.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target?.result as string);
          setFormData(parsed);
        } catch (err) {
          alert('Invalid JSON file format.');
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6 relative animate-in fade-in zoom-in-95 duration-200 text-slate-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white border border-slate-700"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1 pb-4 border-b border-slate-800">
          <div className="inline-flex items-center space-x-1.5 text-amber-400 text-xs font-semibold">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Profile Content Manager</span>
          </div>
          <h2 className="text-xl font-bold text-white">
            Update Personal Information &amp; Contacts
          </h2>
          <p className="text-xs text-slate-400">
            Edit your executive title, contact info, and summary anytime. Updates are saved to your browser session.
          </p>
        </div>

        <form onSubmit={handleSave} className="space-y-4 text-xs">
          {/* Name & Primary Role */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-slate-300 font-semibold">Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-cyan-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-slate-300 font-semibold">Tagline</label>
              <input
                type="text"
                value={formData.tagline}
                onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                className="w-full p-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-cyan-500"
              />
            </div>
          </div>

          {/* Titles / Pills */}
          <div className="space-y-1">
            <label className="text-slate-300 font-semibold">Professional Titles (Comma Separated)</label>
            <input
              type="text"
              value={formData.titles.join(', ')}
              onChange={(e) => setFormData({ 
                ...formData, 
                titles: e.target.value.split(',').map(t => t.trim()).filter(Boolean) 
              })}
              className="w-full p-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-cyan-500"
            />
          </div>

          {/* Summary */}
          <div className="space-y-1">
            <label className="text-slate-300 font-semibold">Executive Summary</label>
            <textarea
              rows={4}
              value={formData.summary}
              onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
              className="w-full p-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-cyan-500"
            />
          </div>

          {/* Contact Numbers and Emails */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-slate-300 font-semibold">Phone Numbers (Comma Separated)</label>
              <input
                type="text"
                value={formData.contact.phones.join(', ')}
                onChange={(e) => setFormData({
                  ...formData,
                  contact: {
                    ...formData.contact,
                    phones: e.target.value.split(',').map(p => p.trim()).filter(Boolean)
                  }
                })}
                className="w-full p-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-cyan-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-slate-300 font-semibold">Emails (Comma Separated)</label>
              <input
                type="text"
                value={formData.contact.emails.join(', ')}
                onChange={(e) => setFormData({
                  ...formData,
                  contact: {
                    ...formData.contact,
                    emails: e.target.value.split(',').map(m => m.trim()).filter(Boolean)
                  }
                })}
                className="w-full p-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-cyan-500"
              />
            </div>
          </div>

          {/* LinkedIn & Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-slate-300 font-semibold">LinkedIn URL</label>
              <input
                type="text"
                value={formData.contact.linkedin}
                onChange={(e) => setFormData({
                  ...formData,
                  contact: {
                    ...formData.contact,
                    linkedin: e.target.value.trim()
                  }
                })}
                className="w-full p-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-cyan-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-slate-300 font-semibold">Address / Location</label>
              <input
                type="text"
                value={formData.location.address}
                onChange={(e) => setFormData({
                  ...formData,
                  location: {
                    ...formData.location,
                    address: e.target.value
                  }
                })}
                className="w-full p-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-cyan-500"
              />
            </div>
          </div>

          {/* JSON Export / Import and Reset */}
          <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={handleExportJSON}
                className="px-3 py-1.5 rounded-lg text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 flex items-center space-x-1"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" />
                <span>Export JSON</span>
              </button>

              <label className="px-3 py-1.5 rounded-lg text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 flex items-center space-x-1 cursor-pointer">
                <Upload className="w-3.5 h-3.5 text-cyan-400" />
                <span>Import JSON</span>
                <input
                  type="file"
                  accept=".json"
                  onChange={handleImportJSON}
                  className="hidden"
                />
              </label>

              <button
                type="button"
                onClick={() => {
                  if (confirm("Reset all profile information to original defaults?")) {
                    onResetDefaults();
                    onClose();
                  }
                }}
                className="px-3 py-1.5 rounded-lg text-xs bg-slate-800 hover:bg-red-950/60 text-red-300 border border-slate-700 flex items-center space-x-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Defaults</span>
              </button>
            </div>

            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white flex items-center space-x-1.5 shadow-md shadow-cyan-950/40"
              >
                {savedSuccess ? <Check className="w-4 h-4 text-white" /> : <Save className="w-4 h-4" />}
                <span>{savedSuccess ? 'Changes Saved!' : 'Save Updates'}</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
