
import { Badge } from "@/components/ui/badge";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Food Delivery Website",
      description: "Designed and developed a website using HTML and CSS for seamless user experience. Used JavaScript to implement dynamic features like menu filtering, cart updates, and order summary.",
      date: "Jun 24 - Jul 24",
      technologies: ["HTML", "CSS", "JavaScript"],
      highlights: ["Frontend Design", "Interactivity", "User Experience"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    },
    {
      title: "Number Guessing Game",
      description: "Developed a number guessing game where the user guesses a randomly generated number within a specified range. Implemented input validation and user-friendly prompts for an engaging experience.",
      date: "Nov 22 - Dec 22",
      technologies: ["Python", "Random Module"],
      highlights: ["Game Logic", "User Interaction", "Randomization"],
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c"
    },
    {
      title: "MERN Stack Project",
      description: "Full-stack development project using MongoDB, Express, React, and Node.js. Created a responsive web application with user authentication and database integration.",
      date: "Jun 24 - Jul 24",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      highlights: ["Full-Stack Development", "Database Design", "User Authentication"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    }
  ];

  return (
    <section id="projects" className="bg-white py-20">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <Badge variant="outline" className="text-xs">
                    {project.date}
                  </Badge>
                </div>
                <CardDescription className="mt-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Key Highlights:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-portfolio-gray text-portfolio-purple">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              {/* Removed CardFooter section with GitHub and Demo buttons */}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
