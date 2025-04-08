
import { Code, Brain, Shield, Calculator } from 'lucide-react';
import { cn } from '@/lib/utils';

type SkillCardProps = {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  gradientClass: string;
};

const SkillCard = ({ title, skills, icon, gradientClass }: SkillCardProps) => {
  return (
    <div className="bg-john-light-gray rounded-lg p-6 card-hover">
      <div className={cn("w-14 h-14 rounded-lg flex items-center justify-center mb-4", gradientClass)}>
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className={cn("w-2 h-2 rounded-full", gradientClass)}></span>
            <span className="text-gray-300">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: <Code size={28} className="text-white" />,
      gradientClass: "bg-john-blue",
      skills: ["Python", "Flask", "Django", "Node.js", "Express", "RESTful APIs", "Database Design"]
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain size={28} className="text-white" />,
      gradientClass: "bg-john-green",
      skills: ["Data Analysis", "Machine Learning", "Neural Networks", "NLP", "Computer Vision", "TensorFlow", "PyTorch"]
    },
    {
      title: "Cybersecurity",
      icon: <Shield size={28} className="text-white" />,
      gradientClass: "bg-john-red",
      skills: ["Network Security", "Penetration Testing", "Cryptography", "Security Protocols", "Risk Assessment"]
    },
    {
      title: "Mathematics",
      icon: <Calculator size={28} className="text-white" />,
      gradientClass: "bg-gradient-to-r from-john-blue to-john-green",
      skills: ["Algorithms", "Data Structures", "Discrete Mathematics", "Linear Algebra", "Statistics", "Problem Solving"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              title={category.title}
              icon={category.icon}
              gradientClass={category.gradientClass}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
