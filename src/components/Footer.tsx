
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-portfolio-darkpurple text-white py-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Pratyush Pothal</h3>
            <p className="text-gray-300 mb-4">
              Full Stack Developer focused on creating clean, user-friendly experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/pratyush-pothal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/PRATYUSH-POTHAL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:pratyushpothal@gmail.com"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-300 hover:text-white transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <p className="text-gray-300 mb-2">Email: pratyushpothal@gmail.com</p>
            <p className="text-gray-300 mb-2">Phone: +91-9348246108</p>
            <p className="text-gray-300">Jalandhar, Punjab, India</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Pratyush Pothal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
