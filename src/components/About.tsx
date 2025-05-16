import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import RadarChart from "./RadarChart";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"
        >
          {/* Left Side Content */}
          <div>
            {/* Profile Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative mt-6 flex flex-row-reverse"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
                <img
                  src="../profile/jai.jpeg"
                  alt="VR Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-background rounded-full p-2 shadow-lg">
                <Badge className="text-sm px-3 py-1">VR Developer</Badge>
              </div>
            </motion.div>
          </div>

          {/* Bio Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm <span className="text-primary">Jaimin Shimpi</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
              Virtual Reality Developer & UX Designer
            </h2>
            <p className="text-lg mb-6">
              I create immersive VR experiences that blend cutting-edge
              technology with thoughtful design. With 7+ years of experience in
              XR development, I specialize in building applications that solve
              real-world problems through virtual environments.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Badge variant="outline" className="text-sm px-3 py-1">
                Unity3D
              </Badge>
              <Badge variant="outline" className="text-sm px-3 py-1">
                Unreal Engine
              </Badge>
              <Badge variant="outline" className="text-sm px-3 py-1">
                WebXR
              </Badge>
              <Badge variant="outline" className="text-sm px-3 py-1">
                React
              </Badge>
              <Badge variant="outline" className="text-sm px-3 py-1">
                Three.js
              </Badge>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link to="/contact">
                  <Mail className="mr-2 h-4 w-4" /> Get in Touch
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/resume">
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* About Me Details */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">My Approach</h3>
              <p className="text-muted-foreground">
                I believe in creating VR experiences that are not just
                technically impressive, but also intuitive and accessible. My
                work focuses on solving real problems through immersive
                technology, whether it's training simulations, educational
                tools, or interactive entertainment.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Background</h3>
              <p className="text-muted-foreground">
                With a background in computer science and human-computer
                interaction, I bring a unique perspective to VR development.
                I've worked with startups, research labs, and enterprise clients
                to deliver VR solutions that push boundaries while remaining
                practical and user-focused.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Skills Radar Chart */}
        <div className="mt-28">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Technical Proficiency
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <RadarChart
              title="Development Skills"
              skills={[
                { name: "Unity3D", value: 90 },
                { name: "Unreal Engine", value: 85 },
                { name: "WebXR", value: 80 },
                { name: "React", value: 75 },
                { name: "Three.js", value: 85 },
                { name: "UX Design", value: 70 },
              ]}
              onSkillClick={() => navigate("/skills")}
            />
            <RadarChart
              title="VR Specializations"
              skills={[
                { name: "Interaction Design", value: 95 },
                { name: "3D Modeling", value: 70 },
                { name: "Performance Optimization", value: 85 },
                { name: "Spatial Audio", value: 75 },
                { name: "User Testing", value: 90 },
                { name: "Cross-platform", value: 80 },
              ]}
              onSkillClick={() => navigate("/skills")}
            />
          </div>
        </div>

        {/* Personal Values */}
        <div className="mt-10 max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            What Drives Me
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h4 className="text-lg font-medium mb-2">Innovation</h4>
                <p className="text-muted-foreground">
                  Constantly exploring new technologies and techniques to create
                  groundbreaking VR experiences that weren't possible before.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h4 className="text-lg font-medium mb-2">
                  User-Centered Design
                </h4>
                <p className="text-muted-foreground">
                  Putting users first in every decision, ensuring VR experiences
                  are intuitive, comfortable, and accessible to diverse
                  audiences.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h4 className="text-lg font-medium mb-2">Real-World Impact</h4>
                <p className="text-muted-foreground">
                  Creating VR applications that solve genuine problems and
                  deliver measurable value, from education to healthcare to
                  enterprise training.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
