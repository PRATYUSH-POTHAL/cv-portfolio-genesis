
import { 
  Code, 
  Database, 
  FileText, 
  Calendar,
  Github,
  GitBranch
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const languages = [
    { name: "Python", level: 85 },
    { name: "C++", level: 80 },
    { name: "JavaScript", level: 90 },
    { name: "C", level: 75 },
    { name: "Java", level: 75 },
  ];

  const frameworks = [
    { name: "HTML & CSS", level: 95 },
    { name: "Node.js", level: 85 },
    { name: "React", level: 80 },
    { name: "Maven", level: 70 },
  ];

  const tools = [
    { name: "MySQL", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "Visual Studio Code", level: 95 },
    { name: "IntelliJ", level: 80 },
  ];

  const softSkills = [
    "Problem-Solving Skills",
    "Time Management",
    "Leadership",
    "Team Collaboration",
    "Communication",
  ];

  return (
    <section id="skills" className="bg-portfolio-gray py-20">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="bg-white shadow-md hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="text-portfolio-purple mb-4 flex justify-center">
                <Code size={40} />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Languages</h3>
              <p className="text-gray-600 text-center">
                Proficient in multiple programming languages for various applications
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="text-portfolio-purple mb-4 flex justify-center">
                <FileText size={40} />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Frameworks</h3>
              <p className="text-gray-600 text-center">
                Experience with modern frameworks and libraries for web development
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="text-portfolio-purple mb-4 flex justify-center">
                <Database size={40} />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Databases</h3>
              <p className="text-gray-600 text-center">
                Knowledge of SQL and NoSQL database systems and management
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="text-portfolio-purple mb-4 flex justify-center">
                <Calendar size={40} />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Soft Skills</h3>
              <p className="text-gray-600 text-center">
                Strong interpersonal and organizational abilities
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Programming Languages</h3>
            <div className="space-y-6">
              {languages.map((language) => (
                <div key={language.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{language.name}</span>
                    <span>{language.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${language.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Frameworks</h3>
            <div className="space-y-6">
              {frameworks.map((framework) => (
                <div key={framework.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{framework.name}</span>
                    <span>{framework.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${framework.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Tools & Platforms</h3>
            <div className="space-y-6">
              {tools.map((tool) => (
                <div key={tool.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{tool.name}</span>
                    <span>{tool.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${tool.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Soft Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {softSkills.map((skill) => (
                <div 
                  key={skill}
                  className="bg-white p-4 rounded-lg shadow text-center hover:shadow-md transition-shadow"
                >
                  <span className="font-medium text-portfolio-purple">{skill}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-center justify-around">
              <div className="flex flex-col items-center">
                <GitBranch size={30} className="text-portfolio-purple mb-2" />
                <span className="text-sm">Git</span>
              </div>
              <div className="flex flex-col items-center">
                <Github size={30} className="text-portfolio-purple mb-2" />
                <span className="text-sm">GitHub</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
