
import { Book } from "lucide-react";

const Education = () => {
  const education = [
    {
      school: "Lovely Professional University",
      degree: "Bachelor of Technology Honors - Computer Science and Engineering",
      location: "Jalandhar, Punjab",
      period: "Since 2022",
      gpa: "GPA: 7.0",
    },
    {
      school: "Kendriya Vidyalaya Balasore No.1",
      degree: "Intermediate",
      location: "Balasore, Odisha",
      period: "2021 - 2022",
      gpa: "Percentage: 80%",
    },
    {
      school: "Kendriya Vidyalaya Balasore No.1",
      degree: "Matriculation",
      location: "Balasore, Odisha",
      period: "2019 - 2020",
      gpa: "Percentage: 88%",
    },
  ];

  const achievements = [
    {
      title: "GFG Hackathon",
      date: "Oct 22",
      description: "Participated in hackathon conducted by GFG (top 200)"
    },
    {
      title: "Leadership and Scholastic",
      date: "To Feb 20",
      description: "For good academic achievement in school, was head boy for 2 years and monitor for 10 years consecutively."
    },
    {
      title: "Gold Medal in IMO",
      date: "Jan 15",
      description: "Ranked 1st in state level at KV No.1 Bis"
    },
    {
      title: "Tritiya Sopan in Scouts & Guides",
      date: "Dec 14",
      description: "Achieved Tritiya Sopan in Scouts & Guides, showcasing leadership, survival skills."
    }
  ];

  return (
    <section id="education" className="bg-white py-20">
      <div className="section-container">
        <h2 className="section-title">Education & Achievements</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <Book className="mr-2 text-portfolio-purple" size={24} />
              Education Timeline
            </h3>
            
            <div className="relative border-l-2 border-portfolio-purple pl-8 ml-4 space-y-12">
              {education.map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-2 border-portfolio-purple bg-white"></div>
                  <div className="mb-1 text-xl font-semibold text-gray-900">
                    {item.school}
                  </div>
                  <div className="mb-2 text-base font-normal text-gray-600 italic">
                    {item.degree}
                  </div>
                  <div className="flex flex-wrap justify-between mb-2">
                    <span className="text-sm text-gray-500">{item.location}</span>
                    <span className="text-sm font-medium text-portfolio-purple">{item.period}</span>
                  </div>
                  <p className="text-sm text-gray-600">{item.gpa}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <span className="mr-2 text-portfolio-purple">🏆</span>
              Key Achievements
            </h3>
            
            <div className="space-y-6">
              {achievements.map((item, index) => (
                <div 
                  key={index}
                  className="bg-portfolio-gray p-6 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-medium text-portfolio-purple">{item.title}</h4>
                    <span className="text-sm bg-white px-2 py-1 rounded text-gray-600">{item.date}</span>
                  </div>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
