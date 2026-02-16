import React from 'react';
import { Mail, Linkedin, Github, FileText, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-16 px-4 md:px-10 flex justify-center">
      <div className="w-full max-w-6xl bg-white/20 backdrop-blur-xl border border-white/30 rounded-[40px] p-8 md:p-14 flex flex-col md:flex-row items-center gap-12 overflow-hidden shadow-xl">
    
        <div className="flex-1 text-center md:text-left space-y-8">
          <h2 className="text-5xl md:text-6xl font-serif italic text-slate-900 tracking-tight">
            Let's Connect
          </h2>
          <p className="text-slate-800 text-lg md:text-xl max-w-md leading-relaxed font-medium">
            I'm always open to discussing new projects, creative ideas, or the intersection of logic and literature.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="flex items-center justify-center gap-2 bg-[#10B981] text-white px-8 py-4 rounded-2xl hover:bg-[#059669] transition-all transform hover:scale-105 font-semibold">
              <Mail size={20} /> Contact
            </button>
            
            <button className="flex items-center justify-center gap-2 bg-white/80 text-slate-800 px-8 py-4 rounded-2xl hover:bg-white transition-all shadow-sm font-semibold">
              See Projects <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="w-full md:w-[420px] bg-white rounded-[32px] p-10 flex flex-col items-center shadow-2xl">
          <div className="flex gap-4 mb-10">
            {/* Icons using the DimGray aesthetic */}
            <SocialIcon icon={<Mail size={24} />} href="mailto:enayatansari33@gmail.com" />
            <SocialIcon icon={<Linkedin size={24} />} href="https://www.linkedin.com/in/md-enayat-ansari-856667228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" />
            <SocialIcon icon={<Github size={24} />} href="https://github.com/enayat-enoo" />
            <SocialIcon icon={<FileText size={24} />} href="https://drive.google.com/file/d/1QpZwDK8DIRxXifhLOzkk0ZW_R62jV_No/view?usp=drive_link" />
          </div>
          
          <div className="text-center space-y-2 border-t border-slate-100 pt-8 w-full">
            <p className="text-sm font-medium text-slate-500 tracking-widest">
              2026 © Built with ReactJs
            </p>
            <p className="text-lg font-serif italic text-slate-800">
              Md Enayat Ansari
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Reusable Social Icon Component
const SocialIcon: React.FC<{ icon: React.ReactNode; href: string }> = ({ icon, href }) => (
  <a 
    href={href}
    className="w-14 h-14 flex items-center justify-center bg-[#F5F5F5] text-[#696969] rounded-2xl hover:bg-black hover:text-white transition-all duration-300 border border-slate-100 shadow-sm"
  >
    {icon}
  </a>
);

export default Footer;