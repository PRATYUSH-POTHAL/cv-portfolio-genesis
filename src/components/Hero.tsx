
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-white to-gray-100">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-portfolio-purple">Pratyush Pothal</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              Full Stack Developer & Problem Solver
            </p>
            <p className="text-gray-600 mb-8 max-w-md">
              I design and build exceptional digital experiences with a focus on user interaction and clean code.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-portfolio-purple hover:bg-portfolio-darkpurple">
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button asChild variant="outline">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
            <div className="mt-8 flex gap-4">
              <a 
                href="https://linkedin.com/in/pratyush-pothal" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-portfolio-purple transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://github.com/PRATYUSH-POTHAL" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-portfolio-purple transition-colors"
              >
                <Github size={24} />
              </a>
              <a 
                href="mailto:pratyushpothal@gmail.com" 
                className="text-gray-600 hover:text-portfolio-purple transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-portfolio-purple to-portfolio-lightpurple rounded-full flex items-center justify-center shadow-xl">
              <div className="w-60 h-60 md:w-76 md:h-76 bg-white rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="/lovable-uploads/aa60ad56-341a-4780-b5c9-3eda87b2ea1d.png"
                  alt="Pratyush Pothal"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
