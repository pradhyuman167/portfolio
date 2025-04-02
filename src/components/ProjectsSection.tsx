
import { useState, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

// Sample project data - you should replace this with your actual projects
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with user authentication, product management, and payment integration.",
    image: "/placeholder.svg",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demoLink: "https://example.com",
    githubLink: "https://github.com",
    category: "fullstack"
  },
  {
    id: 2,
    title: "Weather Dashboard",
    description: "Real-time weather information dashboard with location detection and forecast visualization.",
    image: "/placeholder.svg",
    tags: ["JavaScript", "APIs", "CSS", "Chart.js"],
    demoLink: "https://example.com",
    githubLink: "https://github.com",
    category: "frontend"
  },
  {
    id: 3,
    title: "Task Management API",
    description: "RESTful API for task management with user authentication and task organization features.",
    image: "/placeholder.svg",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    demoLink: "https://example.com",
    githubLink: "https://github.com",
    category: "backend"
  },
  {
    id: 4,
    title: "Portfolio Generator",
    description: "A tool that allows users to create and deploy professional portfolios with customization options.",
    image: "/placeholder.svg",
    tags: ["React", "Firebase", "Tailwind CSS"],
    demoLink: "https://example.com",
    githubLink: "https://github.com",
    category: "fullstack"
  },
  {
    id: 5,
    title: "Fitness Tracker",
    description: "Mobile-responsive fitness tracking application with workout plans and progress visualization.",
    image: "/placeholder.svg",
    tags: ["React", "Chart.js", "Firebase"],
    demoLink: "https://example.com",
    githubLink: "https://github.com",
    category: "frontend"
  },
  {
    id: 6,
    title: "Content Management System",
    description: "A custom CMS with user roles, content publishing workflow, and media management.",
    image: "/placeholder.svg",
    tags: ["Node.js", "MongoDB", "Express", "React"],
    demoLink: "https://example.com",
    githubLink: "https://github.com",
    category: "fullstack"
  }
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  
  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);

  // Animation for scroll reveal
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      
      reveals.forEach(reveal => {
        const revealTop = reveal.getBoundingClientRect().top;
        
        if (revealTop < windowHeight - 100) {
          reveal.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Call once on mount
    
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, [filteredProjects]);

  const filters = [
    { name: "All", value: "all" },
    { name: "Full Stack", value: "fullstack" },
    { name: "Frontend", value: "frontend" },
    { name: "Backend", value: "backend" }
  ];

  return (
    <section id="projects" className="section-padding py-24">
      <div className="container mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each one is carefully crafted with attention to detail and focus on user experience.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12 reveal">
          {filters.map(filter => (
            <Button
              key={filter.value}
              variant={activeFilter === filter.value ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.value)}
              className="text-sm"
            >
              {filter.name}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={project.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg reveal" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs font-medium">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  <Button variant="link" size="sm" asChild>
                    <Link to={`/project/${project.id}`}>View details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
