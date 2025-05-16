import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";

interface Project {
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
}

const ProjectsGallery = () => {
  const [searchParams] = useSearchParams();
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null,
  );

  // Check for highlighted project from URL params
  useEffect(() => {
    const highlightedProject = searchParams.get("highlight");
    if (highlightedProject) {
      setSelectedProjectId(highlightedProject);
    }
  }, [searchParams]);

  // Sample projects data
  const projects: Project[] = [
    {
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
    },
    {
      id: "2",
      title: "AI-Powered Content Generator",
      description:
        "A machine learning tool that generates high-quality written content for marketing teams and content creators.",
      thumbnail:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      role: "ML Engineer & Frontend Developer",
      problem:
        "Content creation is time-consuming and resource-intensive. Marketing teams struggle to produce consistent, high-quality content at scale.",
      solution:
        "Developed an AI system trained on industry-specific data that can generate contextually relevant content while maintaining brand voice and style guidelines.",
      tools: ["Python", "TensorFlow", "React", "Node.js", "AWS"],
      challenges: [
        "Training models to maintain consistent brand voice",
        "Ensuring factual accuracy in generated content",
        "Creating intuitive editing interface for non-technical users",
        "Optimizing generation speed for real-time use",
      ],
      results: [
        "Reduced content creation time by 65%",
        "Increased content output by 3x",
        "93% of generated content approved with minimal edits",
        "Integrated with 5 major CMS platforms",
      ],
      demoLink: "https://example.com/ai-content-demo",
      githubLink: "https://github.com/example/ai-content-gen",
      images: [
        "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=800&q=80",
        "https://images.unsplash.com/photo-1675557009875-436f71457475?w=800&q=80",
      ],
    },
    {
      id: "3",
      title: "Blockchain Supply Chain Tracker",
      description:
        "A decentralized application for tracking products through complex supply chains with immutable verification.",
      thumbnail:
        "https://images.unsplash.com/photo-1561414927-6d86591d0c4f?w=800&q=80",
      role: "Blockchain Developer",
      problem:
        "Supply chains lack transparency and traceability, leading to inefficiencies, fraud, and difficulty verifying ethical sourcing claims.",
      solution:
        "Built a blockchain-based system that creates an immutable record of each product's journey through the supply chain, with QR code integration for consumer verification.",
      tools: ["Solidity", "Ethereum", "React", "Node.js", "IPFS"],
      challenges: [
        "Optimizing gas costs for enterprise-scale operations",
        "Creating user-friendly interfaces for non-crypto users",
        "Integrating with existing supply chain management systems",
        "Ensuring data privacy while maintaining transparency",
      ],
      results: [
        "Reduced verification time from days to seconds",
        "Implemented in 3 global supply chains",
        "98% reduction in fraudulent product claims",
        "Featured in industry publications as innovative solution",
      ],
      demoLink: "https://example.com/blockchain-demo",
      githubLink: "https://github.com/example/supply-chain-dapp",
      images: [
        "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&q=80",
        "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=800&q=80",
      ],
    },
  ];

  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId,
  );

  const handleProjectClick = (id: string) => {
    setSelectedProjectId(id);
  };

  const handleCloseDetail = () => {
    setSelectedProjectId(null);
  };

  return (
    <div className="bg-background min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-2">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of my most significant work, showcasing problem-solving
            skills and technical expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              technologies={project.tools}
              imageUrl={project.thumbnail}
              impactMetrics={project.results[0]}
              demoUrl={project.demoLink}
              githubUrl={project.githubLink}
              onClick={handleProjectClick}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectDetail
          isOpen={!!selectedProjectId}
          onClose={handleCloseDetail}
          project={selectedProject}
        />
      )}
    </div>
  );
};

export default ProjectsGallery;
