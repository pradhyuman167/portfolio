
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, User, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Sample project data - replace with your actual projects
const projectsData = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with user authentication, product management, and payment integration.",
    longDescription: "This e-commerce platform provides a complete solution for online retailers. It features user authentication with different permission levels, product management with categories and search, shopping cart functionality, and secure payment processing through Stripe integration. The platform also includes order management, user reviews, and responsive design for optimal viewing on all devices.",
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe", "Redux", "Tailwind CSS"],
    demoLink: "https://example.com",
    githubLink: "https://github.com",
    date: "June 2023",
    client: "Personal Project",
    role: "Full Stack Developer",
    features: [
      "User authentication and authorization",
      "Product catalog with categories and filters",
      "Shopping cart and checkout process",
      "Payment integration with Stripe",
      "Order management system",
      "Admin dashboard",
      "Responsive design"
    ],
    challenges: "One of the main challenges was implementing a secure and efficient payment system. I worked with Stripe's API to create a seamless checkout experience while ensuring all transactions were secure. Another challenge was optimizing database queries for product searches to maintain fast page loads even with a large product catalog.",
    solution: "I implemented a microservices architecture to separate concerns and make the application more maintainable. For the payment system, I used Stripe's Elements to create a secure payment form and webhook integration to handle post-payment processing. For search optimization, I used MongoDB indexes and aggregation pipelines to ensure fast and accurate results."
  },
  {
    id: "2",
    title: "Weather Dashboard",
    description: "Real-time weather information dashboard with location detection and forecast visualization.",
    longDescription: "This weather dashboard application provides users with real-time weather data and forecasts for any location. It uses geolocation to automatically detect the user's location and displays current weather conditions, hourly forecasts, and 7-day predictions. The app visualizes weather data using interactive charts and provides additional information such as humidity, wind speed, and UV index.",
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    tags: ["JavaScript", "APIs", "CSS", "Chart.js", "OpenWeather API", "Geolocation"],
    demoLink: "https://example.com",
    githubLink: "https://github.com",
    date: "March 2023",
    client: "Weather Solutions Inc.",
    role: "Frontend Developer",
    features: [
      "Current weather conditions",
      "Hourly forecast for 48 hours",
      "7-day weather prediction",
      "Location search functionality",
      "Geolocation for automatic detection",
      "Interactive weather charts",
      "Severe weather alerts"
    ],
    challenges: "The main challenge was handling various API responses efficiently and creating a reliable fallback mechanism when the primary weather API was unavailable. Additionally, optimizing the application to limit API calls while ensuring data remained current required careful implementation.",
    solution: "I implemented a caching strategy to store weather data temporarily and reduce API calls. For fallbacks, I integrated a secondary weather API that activates when the primary service returns errors. The application also preloads forecast data for common searches to improve user experience."
  },
  {
    id: "3",
    title: "Task Management API",
    description: "RESTful API for task management with user authentication and task organization features.",
    longDescription: "This task management API provides a robust backend for task management applications. It includes endpoints for user registration and authentication, task CRUD operations, task assignment, categorization, and filtering. The API follows RESTful principles and includes comprehensive documentation for easy integration with frontend applications.",
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    tags: ["Node.js", "Express", "MongoDB", "JWT", "RESTful API"],
    demoLink: "https://example.com",
    githubLink: "https://github.com",
    date: "January 2023",
    client: "Productivity Tools Ltd.",
    role: "Backend Developer",
    features: [
      "User authentication with JWT",
      "Task creation and management",
      "Task categories and labels",
      "Priority levels and due dates",
      "Task assignment to team members",
      "Filtering and sorting options",
      "API documentation with Swagger"
    ],
    challenges: "Creating a flexible yet secure API that could handle various client requirements was the main challenge. The API needed to be extendable for future features while maintaining backward compatibility. Additionally, implementing efficient database queries for complex filtering operations required careful planning.",
    solution: "I designed the API with versioning from the start to support backward compatibility. For security, I implemented JWT with refresh tokens and role-based permissions. To handle complex queries efficiently, I created compound indexes in MongoDB and designed optimized query structures."
  }
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {
    // Simulate API call to get project details
    const fetchProject = () => {
      setLoading(true);
      const foundProject = projectsData.find(p => p.id === id);
      
      if (foundProject) {
        setProject(foundProject);
        setActiveImage(foundProject.image);
      }
      
      setLoading(false);
    };
    
    fetchProject();
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading project details...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <p className="text-muted-foreground mb-6">The project you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/#projects">Back to Projects</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="mb-8">
            <Link 
              to="/#projects" 
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Projects
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <div className="mb-6">
                <div className="mb-4">
                  <img 
                    src={activeImage} 
                    alt={project.title} 
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                
                {project.images && project.images.length > 0 && (
                  <div className="grid grid-cols-3 gap-4">
                    {project.images.map((img: string, index: number) => (
                      <button
                        key={index}
                        className={`rounded-md overflow-hidden border-2 ${activeImage === img ? 'border-primary' : 'border-transparent'}`}
                        onClick={() => setActiveImage(img)}
                      >
                        <img 
                          src={img} 
                          alt={`Project view ${index + 1}`} 
                          className="w-full h-auto"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                  <p className="text-muted-foreground">{project.longDescription}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <div className="mr-2 mt-1 text-primary">•</div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Challenges</h3>
                  <p className="text-muted-foreground">{project.challenges}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Solution</h3>
                  <p className="text-muted-foreground">{project.solution}</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="bg-card rounded-lg shadow p-6 sticky top-24">
                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag: string, index: number) => (
                      <Badge key={index} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Calendar size={18} className="mr-3 mt-0.5 text-primary" />
                      <div>
                        <h4 className="text-sm font-medium">Project Date</h4>
                        <p className="text-sm text-muted-foreground">{project.date}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <User size={18} className="mr-3 mt-0.5 text-primary" />
                      <div>
                        <h4 className="text-sm font-medium">Client</h4>
                        <p className="text-sm text-muted-foreground">{project.client}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Tag size={18} className="mr-3 mt-0.5 text-primary" />
                      <div>
                        <h4 className="text-sm font-medium">Role</h4>
                        <p className="text-sm text-muted-foreground">{project.role}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Button className="w-full" asChild>
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        View Live Demo
                      </a>
                    </Button>
                    
                    <Button variant="outline" className="w-full" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        View Source Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProjectDetail;
