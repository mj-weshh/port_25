import { GraduationCap, Award, Rocket } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-8 bg-john-dark-gray">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-12">
          <div className="lg:col-span-3 space-y-6">
            <p className="text-lg text-gray-300">
              I'm a Mathematics and Computer Science graduate with a passion for backend development, 
              artificial intelligence, and cybersecurity. My journey in tech is driven by a desire to 
              create impactful solutions that address real-world challenges.
            </p>
            
            <p className="text-lg text-gray-300">
              As the founder of <span className="font-semibold text-john-green">Matime</span>, a smart transportation startup,
              I'm leveraging AI to revolutionize how people commute in urban areas. Our innovative approach earned us the
              Hult Prize at MMU, recognizing our potential for social impact.
            </p>
            
            <p className="text-lg text-gray-300">
              Currently, I'm enhancing my backend development skills through the ALX ProDev program,
              while also exploring opportunities in ALX Ventures. I'm continuously expanding my knowledge
              in cybersecurity and AI, aiming to integrate these disciplines to build secure, intelligent systems.
            </p>
            
            <p className="text-lg text-gray-300">
              When I'm not coding or solving mathematical problems, I enjoy sharing insights about technology
              and entrepreneurship to inspire others in their tech journeys.
            </p>
          </div>
          
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-john-light-gray p-6 rounded-lg card-hover">
              <div className="flex items-start gap-4">
                <div className="bg-john-green/20 p-3 rounded-lg">
                  <Rocket className="text-john-green" size={24} />
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold">Entrepreneurship</h3>
                  <p className="text-gray-400 mt-2">Founder of Matime - AI-powered transportation</p>
                </div>
              </div>
            </div>
            
            <div className="bg-john-light-gray p-6 rounded-lg card-hover">
              <div className="flex items-start gap-4">
                <div className="bg-john-red/20 p-3 rounded-lg">
                  <Award className="text-john-red" size={24} />
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold">Achievement</h3>
                  <p className="text-gray-400 mt-2">Hult Prize Winner at MMU</p>
                </div>
              </div>
            </div>
            
            <div className="bg-john-light-gray p-6 rounded-lg card-hover">
              <div className="flex items-start gap-4">
                <div className="bg-john-blue/20 p-3 rounded-lg">
                  <GraduationCap className="text-john-blue" size={24} />
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold">Education</h3>
                  <p className="text-gray-400 mt-2">BSc. Mathematics & Computer Science</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
