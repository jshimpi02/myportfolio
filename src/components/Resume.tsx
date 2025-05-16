import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

const Resume = () => {
  const experiences: Experience[] = [
    {
      title: "Lead VR Developer",
      company: "Immersive Technologies Inc.",
      period: "2021 - Present",
      description:
        "Leading the development of enterprise VR training solutions for Fortune 500 clients.",
      achievements: [
        "Architected and delivered a VR training platform used by 5 major manufacturing companies",
        "Reduced training time by 40% while improving knowledge retention by 60%",
        "Led a team of 6 developers across multiple projects",
        "Implemented performance optimizations that improved framerate by 35%",
      ],
      technologies: ["Unity3D", "C#", "Oculus SDK", "Azure", "WebXR"],
    },
    {
      title: "Senior VR Developer",
      company: "VirtualLearn Education",
      period: "2018 - 2021",
      description:
        "Developed educational VR applications for K-12 and higher education institutions.",
      achievements: [
        "Created interactive science simulations used by over 200 schools nationwide",
        "Designed and implemented a modular framework for rapid development of educational content",
        "Optimized applications for standalone VR headsets, increasing accessibility",
        "Collaborated with educators to ensure pedagogical effectiveness",
      ],
      technologies: ["Unity3D", "C#", "WebGL", "React", "Firebase"],
    },
    {
      title: "XR Developer",
      company: "Future Interfaces Lab",
      period: "2016 - 2018",
      description:
        "Researched and developed experimental VR/AR interfaces and interaction paradigms.",
      achievements: [
        "Published 2 papers on novel VR interaction techniques",
        "Developed prototypes for haptic feedback systems in VR",
        "Created tools for rapid prototyping of spatial interfaces",
        "Collaborated with HCI researchers on user studies and evaluations",
      ],
      technologies: ["Unity3D", "C++", "Arduino", "Python", "WebVR"],
    },
  ];

  const education: Education[] = [
    {
      degree: "M.S. Computer Science, Specialization in HCI",
      institution: "Stanford University",
      period: "2014 - 2016",
      description:
        "Focused on human-computer interaction and immersive technologies. Thesis on spatial interaction design for virtual environments.",
    },
    {
      degree: "B.S. Computer Science",
      institution: "University of Washington",
      period: "2010 - 2014",
      description:
        "Graduated with honors. Concentration in graphics and visualization. Minor in Digital Arts.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-start mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-2">
              Resume
            </h2>
            <p className="text-lg text-muted-foreground">
              My professional experience and qualifications
            </p>
          </motion.div>

          <Button variant="default">
            <Download className="mr-2 h-4 w-4" /> Download PDF
          </Button>
        </div>

        {/* Experience Section */}
        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="mb-12"
        >
          <h3 className="text-xl font-semibold mb-6">
            Professional Experience
          </h3>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={item}>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <div>
                        <h4 className="text-lg font-medium">{exp.title}</h4>
                        <p className="text-primary">{exp.company}</p>
                      </div>
                      <Badge variant="outline" className="mt-2 sm:mt-0">
                        {exp.period}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground mt-2">
                      {exp.description}
                    </p>

                    <ul className="list-disc pl-5 mt-3 space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm">
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <Separator className="my-8" />

        {/* Education Section */}
        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="mb-12"
        >
          <h3 className="text-xl font-semibold mb-6">Education</h3>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div key={index} variants={item}>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <div>
                        <h4 className="text-lg font-medium">{edu.degree}</h4>
                        <p className="text-primary">{edu.institution}</p>
                      </div>
                      <Badge variant="outline" className="mt-2 sm:mt-0">
                        {edu.period}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground mt-2">
                      {edu.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <Separator className="my-8" />

        {/* Additional Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Publications */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Publications</h3>
              <ul className="space-y-3">
                <li>
                  <p className="font-medium">
                    "Novel Interaction Techniques for Immersive Training"
                  </p>
                  <p className="text-sm text-muted-foreground">
                    IEEE VR Conference, 2020
                  </p>
                  <Button
                    variant="link"
                    size="sm"
                    className="p-0 h-auto mt-1"
                    asChild
                  >
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3 mr-1" /> View Paper
                    </a>
                  </Button>
                </li>
                <li>
                  <p className="font-medium">
                    "Spatial Computing in Educational Environments"
                  </p>
                  <p className="text-sm text-muted-foreground">
                    ACM CHI Conference, 2019
                  </p>
                  <Button
                    variant="link"
                    size="sm"
                    className="p-0 h-auto mt-1"
                    asChild
                  >
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3 mr-1" /> View Paper
                    </a>
                  </Button>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Awards & Recognition */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">
                Awards & Recognition
              </h3>
              <ul className="space-y-3">
                <li>
                  <p className="font-medium">Best VR Training Solution</p>
                  <p className="text-sm text-muted-foreground">
                    XR Industry Awards, 2022
                  </p>
                </li>
                <li>
                  <p className="font-medium">
                    Innovation in Educational Technology
                  </p>
                  <p className="text-sm text-muted-foreground">
                    EdTech Breakthrough Awards, 2020
                  </p>
                </li>
                <li>
                  <p className="font-medium">Outstanding Graduate Research</p>
                  <p className="text-sm text-muted-foreground">
                    Stanford CS Department, 2016
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Resume;
