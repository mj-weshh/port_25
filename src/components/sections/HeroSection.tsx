import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-center w-full">
        <div className="lg:col-span-3 space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Hello, I'm{" "}
            <span className="gradient-text gradient-blue">John Waweru Muhura</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
            Turning <span className="gradient-text gradient-red">Code</span>, <span className="gradient-text gradient-green">Math</span> & <span className="gradient-text gradient-blue">AI</span> into Impact
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl">
            Founder of Matime, Backend Developer, Mathematics & Computer Science graduate, AI & Cybersecurity enthusiast
            — using technology to solve real-world problems.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              size="lg"
              className="bg-john-blue text-white hover:bg-john-blue/90"
              asChild
            >
              <a href="#projects">View My Work</a>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-john-blue text-john-blue hover:bg-john-blue/10"
              asChild
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
        
        <div className="lg:col-span-2 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-john-blue via-john-green to-john-red p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-john-dark-gray flex items-center justify-center">
                {/* User's profile photo */}
                <img
                  src="../../../public/me.png"
                  alt="John Waweru Muhura"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-3 -right-3 w-20 h-20 rounded-full bg-john-red/20 backdrop-blur-md animate-pulse-slow"></div>
            <div className="absolute -top-3 -left-3 w-16 h-16 rounded-full bg-john-green/20 backdrop-blur-md animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
      
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="text-gray-400 hover:text-white transition-colors" size={32} />
      </a>
    </section>
  );
};

export default HeroSection;
