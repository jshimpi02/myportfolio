import React, { useState } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip as UITooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Code, Cpu, Layers, PenTool, Braces, Boxes } from "lucide-react";

// Register Chart.js components
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

export interface SkillStat {
  name: string;
  value: number;
  icon?: string;
  projectIds?: string[];
}

interface RadarChartProps {
  title?: string;
  skills: SkillStat[];
  maxValue?: number;
  className?: string;
  onSkillClick?: (skill: SkillStat, projectIds?: string[]) => void;
}

const getSkillIcon = (skillName: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    Unity3D: <Boxes size={16} />,
    "Unreal Engine": <Cpu size={16} />,
    WebXR: <Layers size={16} />,
    React: <Code size={16} />,
    "Three.js": <Braces size={16} />,
    "UX Design": <PenTool size={16} />,
    // Add more mappings as needed
  };

  return iconMap[skillName] || <Code size={16} />; // Default icon
};

const RadarChart = ({
  title = "Skill Proficiency",
  skills = [
    { name: "Unity3D", value: 90, projectIds: ["1"] },
    { name: "Unreal Engine", value: 5, projectIds: ["1"] },
    { name: "WebXR", value: 80, projectIds: ["1"] },
    { name: "React", value: 75, projectIds: ["2"] },
    { name: "Three.js", value: 85, projectIds: ["3"] },
    { name: "UX Design", value: 70, projectIds: ["2", "3"] },
  ],
  maxValue = 100,
  className = "",
  onSkillClick,
}: RadarChartProps) => {
  const navigate = useNavigate();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const data = {
    labels: skills.map((skill) => skill.name),
    datasets: [
      {
        label: title,
        data: skills.map((skill) => skill.value),
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        borderColor: "hsl(var(--primary))",
        borderWidth: 2,
        pointBackgroundColor: "hsl(var(--primary))",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "hsl(var(--primary))",
        pointRadius: 5,
        pointHoverRadius: 7,
        fill: true,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          color: "hsla(var(--muted-foreground) / 0.2)",
        },
        grid: {
          color: "hsla(var(--muted-foreground) / 0.15)",
        },
        pointLabels: {
          color: "hsl(var(--foreground))",
          font: {
            size: 12,
            family: "'Inter', sans-serif",
          },
        },
        suggestedMin: 0,
        suggestedMax: maxValue,
        ticks: {
          stepSize: 20,
          color: "hsla(var(--muted-foreground) / 0.8)",
          backdropColor: "transparent",
          showLabelBackdrop: false,
        },
        backgroundColor: "transparent",
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false, // Disable default tooltip, we'll use our custom one
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    onClick: (event: any, elements: any) => {
      if (elements && elements.length > 0) {
        const index = elements[0].index;
        const skill = skills[index];
        if (onSkillClick) {
          onSkillClick(skill, skill.projectIds);
        } else if (skill.projectIds && skill.projectIds.length > 0) {
          navigate(`/projects?highlight=${skill.projectIds[0]}`);
        }
      }
    },
    onHover: (event: any, elements: any) => {
      if (elements && elements.length > 0) {
        const index = elements[0].index;
        setHoveredSkill(skills[index].name);
      } else {
        setHoveredSkill(null);
      }
    },
  };

  return (
    <Card className={`overflow-hidden ${className}`}>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <div className="h-[350px] w-full relative">
          <Radar data={data} options={options as any}>
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <div className="flex flex-wrap gap-2 mt-4 justify-center">
                {skills.map((skill) => (
                  <TooltipProvider key={skill.name}>
                    <UITooltip>
                      <TooltipTrigger asChild>
                        <motion.div
                          className={`inline-flex items-center pointer-events-auto cursor-pointer
                            ${hoveredSkill === skill.name ? "scale-110" : ""}`}
                          whileHover={{ scale: 1.1 }}
                          onClick={() => {
                            if (onSkillClick) {
                              onSkillClick(skill, skill.projectIds);
                            } else if (
                              skill.projectIds &&
                              skill.projectIds.length > 0
                            ) {
                              navigate(
                                `/projects?highlight=${skill.projectIds[0]}`,
                              );
                            }
                          }}
                        >
                          <Badge
                            variant={
                              hoveredSkill === skill.name
                                ? "default"
                                : "outline"
                            }
                            className="flex items-center gap-1 transition-all duration-200"
                          >
                            {getSkillIcon(skill.name)}
                            <span>{skill.name}</span>
                          </Badge>
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Proficiency: {skill.value}%</p>
                        {skill.projectIds && skill.projectIds.length > 0 && (
                          <p className="text-xs">
                            Click to see related projects
                          </p>
                        )}
                      </TooltipContent>
                    </UITooltip>
                  </TooltipProvider>
                ))}
              </div>
            </div>
          </Radar>
        </div>
      </CardContent>
    </Card>
  );
};

export default RadarChart;
