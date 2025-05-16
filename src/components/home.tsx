import React from "react";
import About from "./About";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Layers, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

function Home() {
  return (
    <div className="min-h-screen bg-background px-[11.75px] py-0.5 flex flex-col">
      <About>
        <div className="w-[628px] h-[319px]"></div>
      </About>
      {/* Skills Overview / My Expertise */}
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
}

export default Home;
