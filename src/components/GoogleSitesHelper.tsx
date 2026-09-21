import React, { useState } from 'react';
import { 
  X, 
  ExternalLink, 
  Copy, 
  Check, 
  Layers, 
  Sparkles, 
  Globe, 
  CheckCircle2, 
  BookOpen,
  MousePointerClick,
  Move,
  Code2,
  FileCode,
  Laptop,
  HelpCircle,
  Smartphone
} from 'lucide-react';

interface GoogleSitesHelperProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GoogleSitesHelper: React.FC<GoogleSitesHelperProps> = ({
  isOpen,
  onClose,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'guide' | 'snippets' | 'dragdrop'>('guide');
  const [lang, setLang] = useState<'bn' | 'en'>('bn');

  const googleSitesUrl = "https://sites.google.com/d/1Y-kV2ukNuJpmb93NMt2UtYou5mlGahZ_/p/1h2-YQZGnIK3QNHH1Z-cWjW22g7rLe3M4/edit?pli=1";

  // App URL from window.location.origin
  const currentOrigin = typeof window !== 'undefined' ? window.location.origin : '';

  const fullEmbedCode = `<!-- Md. Omar Faruque - Interactive Portfolio for Google Sites -->
<iframe 
  src="${currentOrigin}" 
  width="100%" 
  height="950px" 
  frameborder="0" 
  allow="clipboard-write; camera; microphone" 
  style="border: none; border-radius: 16px; width: 100%; min-height: 900px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);"
  title="Md. Omar Faruque - Professional Portfolio & CV">
</iframe>`;

  const abraZebraEmbedCode = `<!-- Abra Zebra & Games Showcase Widget -->
<iframe 
  src="${currentOrigin}" 
  width="100%" 
  height="700px" 
  frameborder="0" 
  style="border: none; border-radius: 12px; width: 100%; min-height: 650px;"
  title="Abra Zebra & Game Development Showcase">
</iframe>`;

  const resumeEmbedCode = `<!-- Interactive Downloadable Resume Widget -->
<iframe 
  src="${currentOrigin}" 
  width="100%" 
  height="850px" 
  frameborder="0" 
  style="border: none; border-radius: 12px; width: 100%; min-height: 800px;"
  title="Md. Omar Faruque - CV Resume Viewer">
</iframe>`;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-5">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6 relative animate-in fade-in zoom-in-95 duration-200 text-slate-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white border border-slate-700 transition-colors"
          title="Close guide"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with Language Toggle */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800 pr-10">
          <div className="space-y-1">
            <div className="inline-flex items-center space-x-1.5 text-cyan-400 text-xs font-semibold">
              <Globe className="w-4 h-4" />
              <span>Google Sites Integration &amp; Drag &amp; Drop Guide</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              {lang === 'bn' ? 'Google Sites এ কোড বসানো ও পরিচালনার নির্দেশিকা' : 'Google Sites Embed & Management Guide'}
            </h2>
            <p className="text-xs text-slate-400">
              {lang === 'bn' 
                ? 'সহজ ৫টি ধাপে আপনার portfolio টি Google Sites-এ লাইভ করুন এবং Drag & Drop করে সাজান।'
                : 'Follow 5 easy steps to embed your portfolio into Google Sites and customize with Drag & Drop.'}
            </p>
          </div>

          <div className="flex items-center space-x-1 bg-slate-800 p-1 rounded-xl border border-slate-700 shrink-0">
            <button
              onClick={() => setLang('bn')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                lang === 'bn' ? 'bg-cyan-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              বাংলা
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                lang === 'en' ? 'bg-cyan-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              English
            </button>
          </div>
        </div>

        {/* Navigation Tabs inside Modal */}
        <div className="flex items-center space-x-2 border-b border-slate-800 pb-3">
          {[
            { id: 'guide', label: lang === 'bn' ? '১. কোড বসানোর ধাপ (Step-by-Step)' : '1. Embed Steps', icon: MousePointerClick },
            { id: 'snippets', label: lang === 'bn' ? '২. কপি-পেস্ট কোডসমূহ (Embed Codes)' : '2. Embed Codes', icon: Code2 },
            { id: 'dragdrop', label: lang === 'bn' ? '৩. Drag & Drop ও আপডেট নিয়ম' : '3. Drag & Drop & Updates', icon: Move },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center space-x-2 transition-all ${
                  activeTab === tab.id
                    ? 'bg-cyan-600 text-white shadow-md shadow-cyan-950/40'
                    : 'bg-slate-800/70 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/60'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Direct Link to their specific Google Site */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-cyan-700/50 space-y-2">
          <div className="flex items-center justify-between gap-2">
            <div className="space-y-0.5">
              <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider">
                {lang === 'bn' ? 'আপনার Google Sites এডিট পেজ লিঙ্ক:' : 'Your Google Sites Edit URL:'}
              </span>
              <p className="text-xs font-mono text-slate-300 truncate max-w-md sm:max-w-xl">
                {googleSitesUrl}
              </p>
            </div>
            <a
              href={googleSitesUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 shrink-0 flex items-center space-x-1.5 shadow-lg shadow-cyan-950/50 transition-all"
            >
              <span>{lang === 'bn' ? 'Google Sites খুলুন' : 'Open Google Sites'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* TAB 1: Step by Step Embed Guide */}
        {activeTab === 'guide' && (
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider flex items-center space-x-2">
              <MousePointerClick className="w-4 h-4" />
              <span>{lang === 'bn' ? 'কোথায় কীভাবে কোড বসাবেন (Detailed Step-by-Step):' : 'Detailed Step-by-Step Instructions:'}</span>
            </h3>

            <div className="space-y-3">
              {[
                {
                  step: "Step 1",
                  title: lang === 'bn' ? 'গুগল সাইটে প্রবেশ করুন' : 'Open Google Sites Editor',
                  desc: lang === 'bn' 
                    ? 'উপরের "Google Sites খুলুন" বাটনে ক্লিক করে আপনার সাইটের এডিটর পেজে প্রবেশ করুন।'
                    : 'Click "Open Google Sites" above to access your specific edit page.'
                },
                {
                  step: "Step 2",
                  title: lang === 'bn' ? 'Insert > Embed (এমবেড) অপশনে ক্লিক করুন' : 'Click Insert > Embed',
                  desc: lang === 'bn'
                    ? 'ডান পাশের টুলবার থেকে "Insert" ট্যাবে যান এবং "</> Embed" (এমবেড) বাটনে ক্লিক করুন।'
                    : 'From the right sidebar, go to "Insert" and select the "</> Embed" icon.'
                },
                {
                  step: "Step 3",
                  title: lang === 'bn' ? 'Embed Code ট্যাবে কোড পেস্ট করুন' : 'Select "Embed code" Tab & Paste',
                  desc: lang === 'bn'
                    ? 'পপআপ বক্সে দুটি ট্যাব পাবেন: "By URL" এবং "Embed code"। আপনি "Embed code" ট্যাবে ক্লিক করুন এবং ২ নম্বর ট্যাব থেকে কপি করা কোডটি পেস্ট করে "Next" এ ক্লিক করুন।'
                    : 'Select "Embed code" tab (not URL), paste the copied HTML code snippet, then click "Next".'
                },
                {
                  step: "Step 4",
                  title: lang === 'bn' ? 'Insert চাপুন এবং সাইজ বড় করুন' : 'Insert & Stretch Full Width',
                  desc: lang === 'bn'
                    ? '"Insert" বাটনে ক্লিক করলেই পোর্টফোলিও ফ্রেমটি আপনার সাইটে চলে আসবে। চারপাশের নীল বিন্দুগুলো (Blue Handles) ধরে টেনে বক্সটিকে পুরো স্ক্রিন জুড়ে (Full Width) এবং সুবিধাজনক উচ্চতা (Height) পর্যন্ত বড় করে দিন।'
                    : 'Click "Insert". Drag the blue handle dots to stretch the container to full width and appropriate height.'
                },
                {
                  step: "Step 5",
                  title: lang === 'bn' ? 'Publish (পাবলিশ) বাটনে ক্লিক করুন' : 'Click Publish',
                  desc: lang === 'bn'
                    ? 'উপরে ডানদিকের নীল "Publish" বাটনে ক্লিক করলেই আপনার সাইটটি ইন্টারনেটে সবার জন্য লাইভ হয়ে যাবে!'
                    : 'Hit the blue "Publish" button at the top right to make your portfolio live to the public!'
                }
              ].map((s, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-800/70 border border-slate-700/80 flex items-start space-x-3.5">
                  <div className="px-2.5 py-1 rounded-lg bg-cyan-950 text-cyan-300 border border-cyan-700 text-xs font-mono font-bold shrink-0">
                    {s.step}
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-sm font-bold text-white">{s.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: Embed Code Snippets */}
        {activeTab === 'snippets' && (
          <div className="space-y-5">
            {/* Snippet 1: Complete App */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-white flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>{lang === 'bn' ? '১. সম্পূর্ণ ইন্টারেক্টিভ পোর্টফোলিও কোড (Recommended):' : '1. Full Portfolio Embed Code (Recommended):'}</span>
                </label>
                <button
                  onClick={() => copyToClipboard(fullEmbedCode, 'full')}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold bg-cyan-600 hover:bg-cyan-500 text-white flex items-center space-x-1 transition-all"
                >
                  {copiedId === 'full' ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedId === 'full' ? (lang === 'bn' ? 'কোড কপি হয়েছে!' : 'Copied!') : (lang === 'bn' ? 'কোড কপি করুন' : 'Copy Code')}</span>
                </button>
              </div>
              <pre className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-[11px] font-mono text-cyan-300 overflow-x-auto leading-relaxed">
                {fullEmbedCode}
              </pre>
            </div>

            {/* Snippet 2: Abra Zebra Showcase */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-white flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  <span>{lang === 'bn' ? '২. আব্রা জেব্রা গেম ও প্রজেক্ট উইজেট কোড:' : '2. Abra Zebra & Projects Widget Code:'}</span>
                </label>
                <button
                  onClick={() => copyToClipboard(abraZebraEmbedCode, 'zebra')}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 flex items-center space-x-1"
                >
                  {copiedId === 'zebra' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedId === 'zebra' ? (lang === 'bn' ? 'কপি হয়েছে!' : 'Copied!') : (lang === 'bn' ? 'কপি করুন' : 'Copy Code')}</span>
                </button>
              </div>
              <pre className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-[11px] font-mono text-amber-300/90 overflow-x-auto leading-relaxed">
                {abraZebraEmbedCode}
              </pre>
            </div>

            {/* Snippet 3: Resume Embed */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-white flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                  <span>{lang === 'bn' ? '৩. ডাউনলোডযোগ্য সিভি / রেজুমে উইজেট কোড:' : '3. CV / Resume Viewer Widget Code:'}</span>
                </label>
                <button
                  onClick={() => copyToClipboard(resumeEmbedCode, 'resume')}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 flex items-center space-x-1"
                >
                  {copiedId === 'resume' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedId === 'resume' ? (lang === 'bn' ? 'কপি হয়েছে!' : 'Copied!') : (lang === 'bn' ? 'কপি করুন' : 'Copy Code')}</span>
                </button>
              </div>
              <pre className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-[11px] font-mono text-purple-300/90 overflow-x-auto leading-relaxed">
                {resumeEmbedCode}
              </pre>
            </div>
          </div>
        )}

        {/* TAB 3: Drag & Drop and Updating Content */}
        {activeTab === 'dragdrop' && (
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider flex items-center space-x-2">
              <Move className="w-4 h-4" />
              <span>{lang === 'bn' ? 'Drag & Drop করে সাজানো ও পরে তথ্য আপডেট করার নিয়ম:' : 'Drag & Drop Customization & Future Updates:'}</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300">
              {/* Drag & Drop Section */}
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2.5">
                <h4 className="text-sm font-bold text-white flex items-center space-x-1.5">
                  <Move className="w-4 h-4 text-cyan-400" />
                  <span>{lang === 'bn' ? 'Google Sites Drag & Drop সুবিধা:' : 'Google Sites Drag & Drop Features:'}</span>
                </h4>
                <p className="leading-relaxed">
                  {lang === 'bn'
                    ? 'Google Sites এর বাম পাশে ১০টি ডট (১০-dot handle) থাকে। আপনি যেকোনো সেকশন বা এমবেড বক্স ড্র্যাগ করে উপরে বা নিচে সাজাতে পারবেন।'
                    : 'Use the 10-dot handle on the left of any section in Google Sites to drag and reorder blocks above or below.'}
                </p>
                <p className="leading-relaxed">
                  {lang === 'bn'
                    ? 'আপনি চাইলে Google Sites এর নিজস্ব "Text box", "Images", বা "Button" ব্লক এনে এমবেড বক্সের উপরে বা নিচে ড্রপ করে অতিরিক্ত লিঙ্ক বা বর্ণনা যোগ করতে পারেন।'
                    : 'You can drag and drop Google Sites native elements like Text boxes, Image carousels, or Buttons around the embed.'}
                </p>
              </div>

              {/* Updating Information */}
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2.5">
                <h4 className="text-sm font-bold text-white flex items-center space-x-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>{lang === 'bn' ? 'তথ্য ও ছবি আপডেট করার নিয়ম:' : 'How to Update Information & Photos:'}</span>
                </h4>
                <p className="leading-relaxed">
                  {lang === 'bn'
                    ? '১. এই ওয়েব পোর্টফোলিওতে একটি লাইভ এডিটর রয়েছে। হেডারের "Update Info" বাটনে ক্লিক করে নাম, মোবাইল, ইমেইল, পদবী যেকোনো সময় তাৎক্ষণিক আপডেট করতে পারবেন।'
                    : '1. Click "Update Info" in the app header anytime to modify your phone, emails, titles, or experiences.'}
                </p>
                <p className="leading-relaxed">
                  {lang === 'bn'
                    ? '২. "Gallery" পেজে গিয়ে সরাসরি নতুন ছবি আপলোড ও ম্যানেজ করতে পারবেন।'
                    : '2. Visit the Gallery page to directly upload and manage professional photographs.'}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-800/60 text-xs text-cyan-200">
              <p className="font-bold mb-1">
                {lang === 'bn' ? 'মনে রাখবেন:' : 'Pro-tip:'}
              </p>
              <p className="text-slate-300 leading-relaxed">
                {lang === 'bn'
                  ? 'আপনার Google Sites এ এই এমবেড কোডটি একবার বসিয়ে পাবলিশ করলেই চলবে। পরবর্তীতে যখনই এই লিঙ্ক থেকে তথ্য আপডেট করবেন, আপনার Google Sites এ সেটি স্বয়ংক্রিয়ভাবে রিফ্রেশ হয়ে প্রদর্শিত হবে!'
                  : 'Once you embed and publish on Google Sites, any future updates you make in the portfolio will reflect seamlessly without re-embedding!'}
              </p>
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="pt-2 flex items-center justify-between border-t border-slate-800">
          <span className="text-xs text-slate-400">
            {lang === 'bn' ? 'সহায়তা লাগলে যেকোনো সময় এই গাইডটি পুনরায় খুলতে পারবেন।' : 'You can reopen this guide anytime from the top bar.'}
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
          >
            {lang === 'bn' ? 'গাইড বন্ধ করুন (Close Guide)' : 'Close Guide'}
          </button>
        </div>
      </div>
    </div>
  );
};
