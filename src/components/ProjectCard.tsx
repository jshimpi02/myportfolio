import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  impactMetrics?: string;
  demoUrl?: string;
  githubUrl?: string;
  onClick?: (id: string) => void;
}

const ProjectCard = ({
  id,
  title,
  description,
  technologies = [],
  imageUrl = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80",
  impactMetrics,
  demoUrl,
  githubUrl,
  onClick = () => {},
}: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full bg-background border-border flex flex-col cursor-pointer hover:shadow-lg transition-shadow duration-300">
        <div
          className="h-40 overflow-hidden relative"
          onClick={() => onClick(id)}
        >
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-2 right-2 flex gap-2">
            {demoUrl && (
              <Button
                size="icon"
                variant="secondary"
                className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
                asChild
              >
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
            {githubUrl && (
              <Button
                size="icon"
                variant="secondary"
                className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
                asChild
              >
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>

        <CardContent className="p-4 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold line-clamp-1">{title}</h3>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 -mr-2 -mt-1"
              onClick={() => onClick(id)}
            >
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {description}
          </p>

          {impactMetrics && (
            <div className="mb-3">
              <Badge
                variant="outline"
                className="bg-primary/10 text-primary text-xs"
              >
                {impactMetrics}
              </Badge>
            </div>
          )}

          <div className="mt-auto pt-2 flex flex-wrap gap-1">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
