
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-secondary py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-2xl font-bold">
              Pradhyuman<span className="text-primary">.</span>
            </a>
            <p className="text-muted-foreground text-sm mt-1">
              Full Stack Web Developer
            </p>
          </div>
          
          <div className="text-center mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Pradhyuman Pareek. All rights reserved.
            </p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
