
import { BriefcaseIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Sample experience data - replace with your actual experience
const experienceData = [
  {
    title: "Senior Frontend Developer",
    company: "Microcom International",
    duration: "2024 - Present",
    description: "Leading frontend development for multiple projects, mentoring junior developers, and implementing best practices for code quality and performance optimization.",
    achievements: [
      "Improved application performance by 40% through code optimization and implementing lazy loading techniques.",
      "Spearheaded the adoption of TypeScript across all frontend projects, resulting in 30% fewer bugs in production.",
      "Developed a reusable component library that increased development speed by 25%."
    ],
    skills: ["React", "TypeScript", "Redux", "Next.js", "Performance Optimization"]
  },
  // {
  //   title: "Full Stack Developer",
  //   company: "Digital Solutions Group",
  //   duration: "2018 - 2021",
  //   description: "Developed and maintained full-stack applications using React, Node.js, and MongoDB. Collaborated with cross-functional teams to deliver high-quality web solutions.",
  //   achievements: [
  //     "Built a customer dashboard that increased user engagement by 35%.",
  //     "Implemented automated testing that reduced QA time by 20%.",
  //     "Integrated third-party APIs to extend application functionality."
  //   ],
  //   skills: ["React", "Node.js", "Express", "MongoDB", "RESTful APIs"]
  // },
  {
    title: "Junior Web Developer",
    company: "Microcom International",
    duration: "2023 - 2024",
    description: "Designed and developed responsive websites for clients across various industries. Worked closely with design team to implement pixel-perfect UIs.",
    achievements: [
      "Developed over 20 client websites with responsive designs.",
      "Reduced load time by 30% through frontend optimizations.",
      "Created custom WordPress themes and plugins for client needs."
    ],
    skills: ["JavaScript", "HTML5", "CSS3", "WordPress"]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding py-24">
      <div className="container mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the valuable experience I've gained along the way.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>
          
          {/* Experience items */}
          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} reveal`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 transform md:-translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-background z-10"></div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:pl-0' : 'md:pl-12 md:pr-0'} pl-8`}>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2 rounded-full bg-primary/10 text-primary mt-1">
                          <BriefcaseIcon size={18} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">{exp.title}</h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                          <p className="text-sm text-muted-foreground">{exp.duration}</p>
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-4">{exp.description}</p>
                      
                      <h4 className="font-medium text-sm mb-2">Key Achievements:</h4>
                      <ul className="list-disc pl-5 mb-4 space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.skills.map((skill, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Empty div for layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
