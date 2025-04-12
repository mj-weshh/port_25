import { Briefcase, Award, GraduationCap, Shield } from 'lucide-react';

type TimelineItemProps = {
  year: string;
  title: string;
  organization: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
};

const TimelineItem = ({ year, title, organization, description, icon, iconBg }: TimelineItemProps) => {
  return (
    <div className="flex gap-4 md:gap-6">
      <div className="flex flex-col items-center">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${iconBg}`}>
          {icon}
        </div>
        <div className="w-[2px] h-full bg-gray-700 mt-4"></div>
      </div>
      
      <div className="pb-12">
        <span className="inline-block py-1 px-3 rounded-full bg-gray-800 text-gray-400 text-sm mb-2">
          {year}
        </span>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-john-blue font-medium mt-1">{organization}</p>
        <p className="text-gray-400 mt-3">{description}</p>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      year: "October 2024 - Present",
      title: "Founder & CEO",
      organization: "Matime",
      description: "Leading the development of an AI-powered transportation platform aimed at revolutionizing urban commuting through predictive algorithms and real-time optimization.",
      icon: <Briefcase size={20} className="text-white" />,
      iconBg: "bg-john-green"
    },
    {
      year: "September 2024 - Present",
      title: "Deputy Campus Director & Judges Coordinator",
      organization: "Hult Prize at MMU",
      description: "Coordinated the prestigious entrepreneurship competition, evaluating innovative solutions for global challenges and mentoring participating teams.",
      icon: <Award size={20} className="text-white" />,
      iconBg: "bg-john-red"
    },
    {
      year: "March 2025 - Present",
      title: "Backend Web Development Course",
      organization: "ProDev Backend Web Development",
      description: "Enhancing backend development skills through intensive training in modern web technologies, server architecture, and API development.",
      icon: <GraduationCap size={20} className="text-white" />,
      iconBg: "bg-john-blue"
    },
    {
      year: "May 2024 - September 2024",
      title: "Software Developer",
      organization: "Asia Africa Chamber of Commerce",
      description: "Contributed to the development and maintenance of software solutions facilitating international trade and business relationships between Asia and Africa.",
      icon: <Briefcase size={20} className="text-white" />,
      iconBg: "bg-purple-600"
    },
    {
      year: "May 2024 - September 2024",
      title: "ICT and Graphic Design Intern",
      organization: "Saya Events International",
      description: "Handled ICT infrastructure and created engaging graphic designs for events, combining technical expertise with creative design skills.",
      icon: <Briefcase size={20} className="text-white" />,
      iconBg: "bg-john-red"
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">My Experience</h2>
        
        <div className="mt-12">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              year={exp.year}
              title={exp.title}
              organization={exp.organization}
              description={exp.description}
              icon={exp.icon}
              iconBg={exp.iconBg}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
