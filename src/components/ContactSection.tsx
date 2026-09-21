import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Send, 
  CheckCircle2, 
  Download, 
  MessageSquare, 
  Clock,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { ProfileData } from '../types';

interface ContactSectionProps {
  profile: ProfileData;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  profile,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    // Simulate instant message transmission
    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 1000);
  };

  // Generate and download a real vCard (.vcf)
  const handleDownloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
N:Faruque;Md. Omar;;;
FN:Md. Omar Faruque
ORG:LEEDO;HR Department
TITLE:Manager – HR | HRBP | Tech Innovator
TEL;TYPE=CELL:+8801671432484
TEL;TYPE=WORK:+8801918642421
EMAIL;TYPE=PREF,INTERNET:omar.faruque.jumman@gmail.com
EMAIL;TYPE=INTERNET:shadowgili@yahoo.com
ADR;TYPE=HOME:;;House No. 427/6, Jawchar, Kamrangir Chor, Ashrafabad;Dhaka;;1211;Bangladesh
URL:https://linkedin.com/in/shadowgili
NOTE:HR Professional with 7+ years experience in NGO, healthcare social enterprise, hospitality and corporate operations. Physics MSc & Game Developer.
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Md_Omar_Faruque.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-12 py-8">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800 text-cyan-300 text-xs font-semibold">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Channels &amp; Consultation</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get in Touch with Md. Omar Faruque
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Interested in discussing strategic HR leadership, labor law compliance, workforce analytics, or game engineering collaborations? Reach out directly.
          </p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Contact Info (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="font-display text-lg font-bold text-white">
              Contact Channels
            </h3>

            <div className="space-y-4">
              {/* Phone Numbers */}
              <div className="flex items-start space-x-3 text-slate-300">
                <div className="w-9 h-9 rounded-xl bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Direct Phone Numbers
                  </p>
                  <div className="space-y-0.5">
                    {profile.contact.phones.map((ph, idx) => (
                      <p key={idx}>
                        <a href={`tel:${ph}`} className="text-xs sm:text-sm font-mono text-white hover:text-cyan-300 transition-colors">
                          {ph}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Emails */}
              <div className="flex items-start space-x-3 text-slate-300">
                <div className="w-9 h-9 rounded-xl bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Email Inboxes
                  </p>
                  <div className="space-y-0.5">
                    {profile.contact.emails.map((em, idx) => (
                      <p key={idx}>
                        <a href={`mailto:${em}`} className="text-xs sm:text-sm font-mono text-white hover:text-cyan-300 transition-colors">
                          {em}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-3 text-slate-300">
                <div className="w-9 h-9 rounded-xl bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Office &amp; Residence Location
                  </p>
                  <p className="text-xs sm:text-sm text-white leading-relaxed">
                    {profile.location.address}
                  </p>
                  <p className="text-xs text-slate-400">
                    {profile.location.city}, {profile.location.country}
                  </p>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start space-x-3 text-slate-300">
                <div className="w-9 h-9 rounded-xl bg-blue-950/80 border border-blue-800/60 text-blue-400 flex items-center justify-center shrink-0">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Professional Network
                  </p>
                  <a
                    href={profile.contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs sm:text-sm text-cyan-400 hover:text-cyan-300 font-mono flex items-center space-x-1"
                  >
                    <span>linkedin.com/in/shadowgili</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* vCard Button */}
            <div className="pt-4 border-t border-slate-800">
              <button
                onClick={handleDownloadVCard}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center justify-center space-x-2 transition-colors"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Contact Card (.vcf)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Send Message Form (7 cols) */}
        <div className="lg:col-span-7 bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <h3 className="font-display text-xl font-bold text-white">
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-400">
              Fill in your inquiry details below for prompt correspondence.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-800/80 space-y-3 text-center">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
              <h4 className="text-base font-bold text-white">
                Message Sent Successfully!
              </h4>
              <p className="text-xs text-slate-300 max-w-md mx-auto">
                Thank you for reaching out. Md. Omar Faruque will review your message and respond promptly to your email address.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:text-white border border-slate-700 mt-2"
              >
                Send Another Note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-slate-300 font-semibold">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Ahmed"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-slate-300 font-semibold">Your Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. sarah@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-slate-300 font-semibold">Inquiry Subject</label>
                <input
                  type="text"
                  placeholder="e.g. Strategic HR Advisory / Game Dev Discussion"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full p-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-slate-300 font-semibold">Your Message *</label>
                <textarea
                  rows={5}
                  required
                  placeholder="Please describe your organization, project, or inquiry..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white flex items-center justify-center space-x-2 shadow-lg shadow-cyan-950/40 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Direct Message</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
