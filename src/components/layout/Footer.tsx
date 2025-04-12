
import { Github, Instagram, Linkedin } from 'lucide-react';
import TikTokIcon from '@/components/icons/TikTokIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-john-black py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-xl font-bold mb-2">
            <img 
            src="/logo.png" 
            alt="John Waweru" 
            className="h-10 md:h-12 w-auto object-contain transition-all duration-300 hover:scale-105"
          />
            </h2>
            <p className="text-sm text-gray-400">
              Backend Developer • AI & Cybersecurity Enthusiast • Founder
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/mj-weshh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon bg-gray-800 hover:bg-gray-700"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/john-waweru-muhura/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon bg-gray-800 hover:bg-[#0077B5]/20"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://www.instagram.com/mj_weshh/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon bg-gray-800 hover:bg-[#E4405F]/20"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://www.tiktok.com/@john_muhura" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon bg-gray-800 hover:bg-gray-700"
              aria-label="TikTok"
            >
              <TikTokIcon size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} John Waweru Muhura. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
