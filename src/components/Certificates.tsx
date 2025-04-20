
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "Full-Stack Development Using MERN Stack",
      date: "Jun 24 - Jul 24",
      organization: "Certification Authority",
      description: "Comprehensive training in MongoDB, Express.js, React, and Node.js development."
    },
    {
      title: "Prompt Engineering for ChatGPT",
      date: "Feb 24 - Mar 24",
      organization: "Certification Authority",
      description: "Advanced techniques for creating effective prompts for language models."
    },
    {
      title: "Cascading Style Sheet (CSS)",
      date: "Dec 22 - Jan 23",
      organization: "Certification Authority",
      description: "In-depth study of CSS principles, layouts, animations, and best practices."
    },
    {
      title: "Hyper Text Markup Language (HTML)",
      date: "Dec 22 - Jan 23",
      organization: "Certification Authority",
      description: "Fundamentals of HTML5, semantic markup, and modern web page structure."
    }
  ];

  return (
    <section id="certificates" className="bg-portfolio-gray py-20">
      <div className="section-container">
        <h2 className="section-title">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((certificate, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-start space-x-4 pb-4">
                <div className="bg-portfolio-purple p-2 rounded-md text-white">
                  <Award size={24} />
                </div>
                <div className="space-y-1">
                  <CardTitle className="text-xl">{certificate.title}</CardTitle>
                  <CardDescription>{certificate.organization}</CardDescription>
                  <Badge variant="outline" className="mt-1">
                    {certificate.date}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{certificate.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
