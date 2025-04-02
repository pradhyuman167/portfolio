
import { Code, Server, Globe, Cpu } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const skills = [
    {
      category: "Frontend Development",
      items: ["React.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Redux"],
      icon: Globe
    },
    {
      category: "Backend Development",
      items: ["Node.js", "Express", "MongoDB", "RESTful APIs", "GraphQL"],
      icon: Server
    },
    {
      category: "Tools & Methods",
      items: ["Git", "GitHub", "VS Code", "Responsive Design", "Testing", "CI/CD"],
      icon: Cpu
    },
    {
      category: "Languages",
      items: ["JavaScript", "TypeScript", "HTML", "CSS", "SQL"],
      icon: Code
    }
  ];

  return (
    <section id="about" className="section-padding py-24 bg-secondary/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-muted-foreground mb-4">
              I'm Pradhyuman Pareek, a passionate and dedicated full-stack web developer with a strong foundation in JavaScript and modern web technologies. I enjoy creating elegant, efficient, and user-friendly web applications.
            </p>
            <p className="text-muted-foreground mb-4">
              My journey in web development began with a curiosity about how websites work, which led me to dive deep into various technologies and frameworks. I'm constantly learning and adapting to new tools and methodologies to enhance my skill set.
            </p>
            <p className="text-muted-foreground mb-6">
              I approach each project with a focus on writing clean, maintainable code and creating intuitive user experiences. I believe in the power of collaboration and enjoy working in teams to bring ideas to life.
            </p>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="font-semibold mb-2">Name:</h3>
                <p className="text-muted-foreground">Pradhyuman Pareek</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Email:</h3>
                <p className="text-muted-foreground">pradhyumanpareek167@gmail.com</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">From:</h3>
                <p className="text-muted-foreground">India</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Availability:</h3>
                <p className="text-muted-foreground">Full-time</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 reveal">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <skillGroup.icon size={20} />
                    </div>
                    <h3 className="font-medium">{skillGroup.category}</h3>
                  </div>
                  <ul className="space-y-1">
                    {skillGroup.items.map((skill, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
