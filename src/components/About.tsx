
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="bg-white py-16">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-gray-700 mb-6">
              I'm Pratyush Pothal, a Full Stack Developer with a passion for creating interactive and responsive web applications. With a strong foundation in Computer Science and Engineering from Lovely Professional University, I continuously seek to expand my knowledge and skills in the ever-evolving tech landscape.
            </p>
            <p className="text-gray-700 mb-6">
              My journey in software development began with a deep interest in problem-solving, which led me to explore various programming languages and frameworks. I specialize in building full-stack applications using modern technologies like React, Node.js, and various databases.
            </p>
            <p className="text-gray-700 mb-6">
              Beyond technical skills, I bring strong leadership abilities and time management to my projects, having served as a lead boy for 2 years and monitor for 10 years during my academic journey.
            </p>
            <div className="mt-8">
              <Button asChild className="bg-portfolio-purple hover:bg-portfolio-darkpurple">
                <a href="/lovable-uploads/a8bcb4b7-f12e-443e-a323-239a1b277c01.png" target="_blank">Download CV</a>
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-full h-80 md:h-96 bg-portfolio-gray rounded-lg overflow-hidden shadow-lg transform rotate-3">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                  alt="Coding"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Removed the 2+ Years Exp section */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
