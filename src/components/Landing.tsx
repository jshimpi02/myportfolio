import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Layers, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
                <span className="text-primary">Portfolio</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                Transforming ideas into engaging virtual reality applications
                that solve real-world problems and push the boundaries of
                immersive technology.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/projects">
                    View My Work <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video rounded-lg overflow-hidden border border-border shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1626379953822-baec19c3accd?w=800&q=80"
                  alt="VR Development"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-background p-3 rounded-lg shadow-lg border border-border">
                <img
                  src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=400&q=80"
                  alt="VR Headset"
                  className="w-32 h-24 object-cover rounded"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of my most impactful work in virtual reality
              development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Project Preview Cards - simplified versions */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                <div className="h-40 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&q=80"
                    alt="VR Fitness Application"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    VR Fitness Application
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    An immersive virtual reality fitness application that
                    combines gaming elements with workout routines.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/projects">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                <div className="h-40 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
                    alt="AI-Powered Content Generator"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    AI-Powered Content Generator
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    A machine learning tool that generates high-quality written
                    content for marketing teams and content creators.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/projects">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                <div className="h-40 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1561414927-6d86591d0c4f?w=800&q=80"
                    alt="Blockchain Supply Chain Tracker"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    Blockchain Supply Chain Tracker
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    A decentralized application for tracking products through
                    complex supply chains with immutable verification.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/projects">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="text-center mt-10">
            <Button asChild>
              <Link to="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              My Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized skills in virtual reality development and related
              technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">VR Development</h3>
                <p className="text-muted-foreground">
                  Expert in Unity3D, Unreal Engine, and WebXR for creating
                  immersive virtual reality experiences across multiple
                  platforms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  3D Modeling & Design
                </h3>
                <p className="text-muted-foreground">
                  Proficient in creating optimized 3D assets, intuitive UI/UX
                  for VR, and custom shaders for visual effects.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Performance Optimization
                </h3>
                <p className="text-muted-foreground">
                  Specialized in optimizing VR applications for smooth
                  performance, ensuring high framerates and comfortable user
                  experiences.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link to="/skills">
                View All Skills <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Ready to bring your VR project to life?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate to create an immersive experience that achieves
            your goals and pushes the boundaries of what's possible in virtual
            reality.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Start a Conversation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Landing;
