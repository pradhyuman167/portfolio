
import { ArrowDownCircle, Linkedin, Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-10 section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-primary font-medium mb-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Pradhyuman Pareek
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Full Stack Web Developer
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
              I build exceptional and accessible digital experiences for the web. Specializing in creating engaging, responsive web applications with modern technologies.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <Button asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
            
            <div className="flex items-center gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="mailto:contact@example.com" className="text-foreground hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-primary to-blue-400 opacity-20 absolute blur-3xl"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-white overflow-hidden border-4 border-white shadow-lg relative z-10">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                  {/* Replace with your actual image */}
                  <span className="text-lg font-medium"><img src="public/pradhyuman-image.png" alt="" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce-slow">
          <a href="#projects" className="text-primary hover:text-primary-foreground transition-colors">
            <ArrowDownCircle size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
