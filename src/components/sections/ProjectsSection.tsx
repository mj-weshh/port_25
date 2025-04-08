
import { ExternalLink, Github, TiktokIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  tiktokUrl?: string;
  featured?: boolean;
};

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  technologies, 
  githubUrl, 
  liveUrl,
  tiktokUrl,
  featured = false 
}: ProjectCardProps) => {
  return (
    <div className={`rounded-lg overflow-hidden card-hover ${featured ? 'md:col-span-2 bg-gradient-to-br from-john-black to-john-light-gray p-[1px]' : 'bg-john-light-gray'}`}>
      <div className={`h-full ${featured ? 'bg-john-black rounded-lg overflow-hidden' : ''}`}>
        <div className="aspect-video w-full overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="outline" className="bg-john-dark-gray border-gray-700 text-gray-300">
                {tech}
              </Badge>
            ))}
          </div>
          
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          
          <p className="text-gray-400 mb-4">{description}</p>
          
          <div className="flex flex-wrap gap-3 mt-4">
            {githubUrl && (
              <Button size="sm" variant="outline" className="gap-2" asChild>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github size={16} />
                  <span>Code</span>
                </a>
              </Button>
            )}
            
            {liveUrl && (
              <Button size="sm" className="gap-2 bg-john-blue hover:bg-john-blue/90" asChild>
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              </Button>
            )}
            
            {tiktokUrl && (
              <Button size="sm" variant="outline" className="gap-2 border-pink-500 text-pink-500 hover:bg-pink-500/10" asChild>
                <a href={tiktokUrl} target="_blank" rel="noopener noreferrer">
                  <TiktokIcon size={16} />
                  <span>Follow on TikTok</span>
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "Matime - Smart Transportation",
      description: "AI-powered transportation startup revolutionizing urban commuting with predictive algorithms and real-time optimization.",
      image: "/placeholder.svg",
      technologies: ["Python", "Machine Learning", "Flutter", "Firebase"],
      liveUrl: "#",
      tiktokUrl: "https://tiktok.com/@matime",
      featured: true
    },
    {
      title: "Cybersecurity Analysis Dashboard",
      description: "Real-time network security monitoring dashboard with threat detection and visualization.",
      image: "/placeholder.svg",
      technologies: ["Python", "Django", "D3.js", "WebSockets"],
      githubUrl: "https://github.com/wawerumuhura/security-dashboard"
    },
    {
      title: "Educational Math Platform",
      description: "Interactive platform making complex mathematical concepts accessible through visualizations.",
      image: "/placeholder.svg",
      technologies: ["JavaScript", "Three.js", "Node.js", "Express"],
      githubUrl: "https://github.com/wawerumuhura/math-visualizer",
      liveUrl: "#"
    },
    {
      title: "RESTful Backend API",
      description: "Scalable and secure RESTful API supporting authentication, file uploads, and data processing.",
      image: "/placeholder.svg",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      githubUrl: "https://github.com/wawerumuhura/rest-api"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-8 bg-john-dark-gray">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              tiktokUrl={project.tiktokUrl}
              featured={project.featured}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-john-blue text-john-blue hover:bg-john-blue/10"
            asChild
          >
            <a href="https://github.com/wawerumuhura" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2" size={20} />
              <span>View More on GitHub</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
