import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import RadarChart from "./RadarChart";
import {
  Code,
  Cpu,
  Layers,
  PenTool,
  Braces,
  Boxes,
  Headphones,
  Users,
  Zap,
  Globe,
  Gamepad2,
  Joystick,
  Cog,
  FileCode,
  Palette,
  Glasses,
} from "lucide-react";

interface Skill {
  name: string;
  level: number;
  description: string;
  icon?: React.ReactNode;
  projectIds?: string[];
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const Skills = () => {
  const [activeTab, setActiveTab] = React.useState("technical");
  const navigate = useNavigate();

  const skillCategories: Record<string, SkillCategory[]> = {
    technical: [
      {
        name: "VR Development",
        skills: [
          {
            name: "Unity3D",
            level: 95,
            description: "Expert in Unity development with 7+ years experience",
            icon: <Boxes className="h-4 w-4" />,
          },
          {
            name: "Unreal Engine",
            level: 85,
            description: "Proficient in creating high-fidelity VR experiences",
            icon: <Cpu className="h-4 w-4" />,
          },
          {
            name: "WebXR",
            level: 80,
            description: "Building browser-based VR applications",
            icon: <Globe className="h-4 w-4" />,
          },
          {
            name: "Oculus SDK",
            level: 90,
            description: "Deep knowledge of Oculus platform integration",
            icon: <Glasses className="h-4 w-4" />,
          },
          {
            name: "SteamVR",
            level: 85,
            description:
              "Experienced with SteamVR integration and optimization",
            icon: <Gamepad2 className="h-4 w-4" />,
          },
        ],
      },
      {
        name: "Programming",
        skills: [
          {
            name: "C#",
            level: 90,
            description: "Primary language for Unity development",
            icon: <Code className="h-4 w-4" />,
          },
          {
            name: "JavaScript",
            level: 85,
            description: "Web and WebXR development",
            icon: <Braces className="h-4 w-4" />,
          },
          {
            name: "C++",
            level: 75,
            description: "Unreal Engine and performance-critical systems",
            icon: <FileCode className="h-4 w-4" />,
          },
          {
            name: "Python",
            level: 80,
            description: "Tools development and data processing",
            icon: <Code className="h-4 w-4" />,
          },
          {
            name: "React",
            level: 80,
            description: "Web application development",
            icon: <Code className="h-4 w-4" />,
          },
        ],
      },
      {
        name: "3D & Design",
        skills: [
          {
            name: "Blender",
            level: 70,
            description: "3D modeling and basic animation",
            icon: <Layers className="h-4 w-4" />,
          },
          {
            name: "Adobe Creative Suite",
            level: 75,
            description: "UI design and asset creation",
            icon: <Palette className="h-4 w-4" />,
          },
          {
            name: "Shader Development",
            level: 80,
            description: "Custom shader creation for visual effects",
            icon: <PenTool className="h-4 w-4" />,
          },
        ],
      },
    ],
    soft: [
      {
        name: "Collaboration",
        skills: [
          {
            name: "Team Leadership",
            level: 90,
            description: "Leading cross-functional development teams",
            icon: <Users className="h-4 w-4" />,
          },
          {
            name: "Communication",
            level: 95,
            description: "Clear technical and non-technical communication",
            icon: <Users className="h-4 w-4" />,
          },
          {
            name: "Project Management",
            level: 85,
            description: "Agile methodologies and sprint planning",
            icon: <Cog className="h-4 w-4" />,
          },
        ],
      },
      {
        name: "Problem Solving",
        skills: [
          {
            name: "Creative Problem Solving",
            level: 90,
            description: "Finding innovative solutions to complex challenges",
            icon: <Zap className="h-4 w-4" />,
          },
          {
            name: "User Research",
            level: 85,
            description: "Understanding user needs and pain points",
            icon: <Users className="h-4 w-4" />,
          },
          {
            name: "Performance Optimization",
            level: 90,
            description: "Identifying and resolving bottlenecks",
            icon: <Zap className="h-4 w-4" />,
          },
        ],
      },
    ],
    certifications: [
      {
        name: "Professional Certifications",
        skills: [
          {
            name: "Unity Certified Developer",
            level: 100,
            description: "Professional certification in Unity development",
            icon: <Boxes className="h-4 w-4" />,
          },
          {
            name: "Oculus Developer Certification",
            level: 100,
            description: "Official Oculus platform development certification",
            icon: <Glasses className="h-4 w-4" />,
          },
          {
            name: "Google VR Development",
            level: 100,
            description: "Certified in Google VR development practices",
            icon: <Gamepad2 className="h-4 w-4" />,
          },
        ],
      },
    ],
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-2">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My technical abilities and professional competencies in virtual
            reality development and related fields.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <RadarChart
            title="Development Skills"
            skills={[
              { name: "Unity3D", value: 95, projectIds: ["1", "3"] },
              { name: "Unreal Engine", value: 85, projectIds: ["2"] },
              { name: "WebXR", value: 80, projectIds: ["1", "4"] },
              { name: "React", value: 80, projectIds: ["4"] },
              { name: "Three.js", value: 85, projectIds: ["3"] },
              { name: "UX Design", value: 75, projectIds: ["2", "4"] },
            ]}
            onSkillClick={(skill, projectIds) => {
              if (projectIds && projectIds.length > 0) {
                navigate(`/projects?highlight=${projectIds[0]}`);
              }
            }}
          />
          <RadarChart
            title="VR Specializations"
            skills={[
              { name: "Interaction Design", value: 90, projectIds: ["1", "2"] },
              { name: "3D Modeling", value: 75, projectIds: ["3"] },
              {
                name: "Performance Optimization",
                value: 85,
                projectIds: ["1", "3"],
              },
              { name: "User Testing", value: 80, projectIds: ["2", "4"] },
              { name: "Cross-platform", value: 85, projectIds: ["1", "4"] },
              { name: "Spatial Audio", value: 70, projectIds: ["2"] },
            ]}
            onSkillClick={(skill, projectIds) => {
              if (projectIds && projectIds.length > 0) {
                navigate(`/projects?highlight=${projectIds[0]}`);
              }
            }}
          />
        </div>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="mb-12 mt-16"
        >
          <div className="flex justify-center">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="technical">Technical</TabsTrigger>
              <TabsTrigger value="soft">Soft Skills</TabsTrigger>
              <TabsTrigger value="certifications">Certifications</TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(skillCategories).map(([category, groups]) => (
            <TabsContent key={category} value={category} className="mt-8">
              <motion.div
                variants={container}
                initial="hidden"
                animate={activeTab === category ? "show" : "hidden"}
                className="grid grid-cols-1 gap-8"
              >
                {groups.map((group) => (
                  <motion.div key={group.name} variants={item}>
                    <h3 className="text-xl font-semibold mb-6">{group.name}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {group.skills.map((skill) => (
                        <Card
                          key={skill.name}
                          className="cursor-pointer hover:shadow-md transition-all hover:border-primary/50"
                          onClick={() => {
                            if (
                              skill.projectIds &&
                              skill.projectIds.length > 0
                            ) {
                              navigate(
                                `/projects?highlight=${skill.projectIds[0]}`,
                              );
                            }
                          }}
                        >
                          <CardContent className="pt-6">
                            <div className="flex justify-between items-center mb-2">
                              <div className="flex items-center gap-2">
                                {skill.icon && (
                                  <div className="bg-primary/10 p-2 rounded-full">
                                    {skill.icon}
                                  </div>
                                )}
                                <h4 className="font-medium">{skill.name}</h4>
                              </div>
                              <Badge
                                variant={
                                  skill.level >= 90 ? "default" : "secondary"
                                }
                                className="text-xs"
                              >
                                {skill.level >= 90
                                  ? "Expert"
                                  : skill.level >= 80
                                    ? "Advanced"
                                    : skill.level >= 70
                                      ? "Proficient"
                                      : "Intermediate"}
                              </Badge>
                            </div>
                            <Progress
                              value={skill.level}
                              className="h-2 mb-2"
                            />
                            <p className="text-sm text-muted-foreground">
                              {skill.description}
                            </p>
                            {skill.projectIds &&
                              skill.projectIds.length > 0 && (
                                <div className="mt-2">
                                  <Badge
                                    variant="outline"
                                    className="text-xs cursor-pointer hover:bg-primary/10"
                                  >
                                    Used in {skill.projectIds.length} project
                                    {skill.projectIds.length > 1 ? "s" : ""}
                                  </Badge>
                                </div>
                              )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Skills;
