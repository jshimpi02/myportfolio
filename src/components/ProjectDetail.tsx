import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Github, ArrowLeft, ArrowRight } from "lucide-react";

interface ProjectDetailProps {
  isOpen?: boolean;
  onClose?: () => void;
  project?: {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    role: string;
    problem: string;
    solution: string;
    tools: string[];
    challenges: string[];
    results: string[];
    demoLink?: string;
    githubLink?: string;
    images?: string[];
  };
}

const ProjectDetail = ({
  isOpen = true,
  onClose = () => {},
  project,
}: ProjectDetailProps) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Default project data if none is provided
  const defaultProject = {
    id: "1",
    title: "VR Fitness Application",
    description:
      "An immersive virtual reality fitness application that combines gaming elements with workout routines.",
    thumbnail:
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&q=80",
    role: "Lead Developer",
    problem:
      "Traditional workout routines can be monotonous and lead to decreased motivation over time. Users need engaging fitness experiences that keep them motivated and consistent.",
    solution:
      "Created an immersive VR environment where users can participate in gamified workout routines, compete with friends, and track their fitness progress in real-time.",
    tools: ["Unity3D", "C#", "Oculus SDK", "Firebase", "Blender"],
    challenges: [
      "Optimizing performance for smooth VR experience",
      "Creating accurate fitness tracking algorithms",
      "Designing intuitive VR user interfaces",
      "Ensuring workout routines were both effective and safe",
    ],
    results: [
      "10,000+ downloads in first month",
      "4.8/5 average user rating",
      "85% user retention after 30 days",
      "Featured in Oculus Store",
    ],
    demoLink: "https://example.com/demo",
    githubLink: "https://github.com/example/vr-fitness",
    images: [
      "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&q=80",
      "https://images.unsplash.com/photo-1626379953822-baec19c3accd?w=800&q=80",
      "https://images.unsplash.com/photo-1478416272538-5f7e51dc5400?w=800&q=80",
    ],
    userFlowDiagram:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80",
  };

  const displayProject = project || defaultProject;
  const { images = [] } = displayProject;

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-background max-w-4xl max-h-[90vh] overflow-y-auto p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {displayProject.title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {displayProject.description}
          </DialogDescription>
        </DialogHeader>

        {/* Project Images Carousel */}
        <div className="relative mt-4 rounded-lg overflow-hidden bg-black/5 aspect-video">
          {images.length > 0 ? (
            <>
              <img
                src={images[currentImageIndex]}
                alt={`${displayProject.title} screenshot ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              {images.length > 1 && (
                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-black/20 hover:bg-black/40 text-white rounded-full"
                    onClick={prevImage}
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-black/20 hover:bg-black/40 text-white rounded-full"
                    onClick={nextImage}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>
              )}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full ${index === currentImageIndex ? "bg-primary" : "bg-gray-300"}`}
                    onClick={() => setCurrentImageIndex(index)}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-muted-foreground">
                No project images available
              </p>
            </div>
          )}
        </div>

        {/* External Links */}
        <div className="flex gap-4 mt-4">
          {displayProject.demoLink && (
            <Button variant="outline" asChild>
              <a
                href={displayProject.demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
              </a>
            </Button>
          )}
          {displayProject.githubLink && (
            <Button variant="outline" asChild>
              <a
                href={displayProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" /> View Code
              </a>
            </Button>
          )}
        </div>

        {/* Tools/Technologies */}
        <div className="mt-4 overflow-x-auto">
          <h3 className="text-sm font-medium mb-2">Technologies</h3>
          <div className="flex flex-wrap gap-2 pb-2">
            {displayProject.tools.map((tool, index) => (
              <Badge key={index} variant="secondary">
                {tool}
              </Badge>
            ))}
          </div>
        </div>

        <Separator className="my-6" />

        {/* Tabbed Content */}
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="mt-6 sticky top-0 bg-background pt-2 pb-4 z-10"
        >
          <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 mb-6 w-full">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="problem">Problem</TabsTrigger>
            <TabsTrigger value="solution">Solution</TabsTrigger>
            <TabsTrigger value="challenges">Challenges</TabsTrigger>
            <TabsTrigger value="results">Results</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">Role</h3>
                <p className="text-muted-foreground">{displayProject.role}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">Project Summary</h3>
                <p className="text-muted-foreground">
                  {displayProject.description}
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="problem">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">
                  Problem Statement
                </h3>
                <p className="text-muted-foreground">
                  {displayProject.problem}
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="solution">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">
                  Solution Approach
                </h3>
                <p className="text-muted-foreground">
                  {displayProject.solution}
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="userflow">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">
                  User Flow Diagram
                </h3>
                <div className="bg-black/5 rounded-lg p-4 overflow-hidden">
                  {displayProject.userFlowDiagram ? (
                    <img
                      src={displayProject.userFlowDiagram}
                      alt="User Flow Diagram"
                      className="w-full h-auto object-contain rounded-md"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-64 bg-black/5 rounded-md">
                      <p className="text-muted-foreground">
                        No user flow diagram available
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="challenges">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">
                  Challenges & Obstacles
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  {displayProject.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="results">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">
                  Outcomes & Impact
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  {displayProject.results.map((result, index) => (
                    <li key={index}>{result}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetail;
