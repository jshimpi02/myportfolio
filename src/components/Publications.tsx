import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface Publication {
  title: string;
  conference: string;
  year: string;
  description: string;
  link?: string;
  tags: string[];
}

const Publications = () => {
  const publications: Publication[] = [
    {
      title: "Novel Interaction Techniques for Immersive Training",
      conference: "IEEE VR Conference",
      year: "2020",
      description:
        "This paper explores new interaction paradigms for virtual reality training applications, focusing on natural gesture recognition and haptic feedback systems that improve knowledge retention and skill transfer.",
      link: "https://example.com/paper1",
      tags: ["VR", "Interaction Design", "Training", "Haptics"],
    },
    {
      title: "Spatial Computing in Educational Environments",
      conference: "ACM CHI Conference",
      year: "2019",
      description:
        "An investigation into how spatial computing technologies can enhance learning outcomes in K-12 and higher education settings, with case studies from multiple disciplines.",
      link: "https://example.com/paper2",
      tags: ["Spatial Computing", "Education", "User Studies"],
    },
    {
      title: "Performance Optimization Techniques for Mobile VR Applications",
      conference: "SIGGRAPH",
      year: "2021",
      description:
        "A comprehensive analysis of rendering and computation optimization strategies for resource-constrained mobile VR platforms, with benchmarks and implementation guidelines.",
      link: "https://example.com/paper3",
      tags: ["Performance Optimization", "Mobile VR", "Rendering"],
    },
    {
      title: "User Experience Design Patterns for Virtual Reality Interfaces",
      conference: "ACM UIST",
      year: "2022",
      description:
        "This paper presents a collection of design patterns for VR interfaces based on extensive user testing, providing guidelines for creating intuitive and comfortable user experiences in virtual environments.",
      link: "https://example.com/paper4",
      tags: ["UX Design", "Design Patterns", "VR Interfaces"],
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-2">
            Publications
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Research papers and academic contributions to the field of virtual
            reality and human-computer interaction.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          {publications.map((publication, index) => (
            <motion.div key={index} variants={item}>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h3 className="text-xl font-semibold">
                      {publication.title}
                    </h3>
                    <Badge variant="outline" className="mt-2 sm:mt-0">
                      {publication.year}
                    </Badge>
                  </div>

                  <p className="text-primary mb-3">{publication.conference}</p>

                  <p className="text-muted-foreground mb-4">
                    {publication.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {publication.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {publication.link && (
                    <Button
                      variant="link"
                      size="sm"
                      className="p-0 h-auto"
                      asChild
                    >
                      <a
                        href={publication.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-3 w-3 mr-1" /> View
                        Publication
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Publications;
