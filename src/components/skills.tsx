import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  SiReact,
  SiTypescript,
  SiFirebase,
  SiRedux,
  SiWebpack,
  SiGit,
  SiExpo,
  SiJavascript,
  SiGithub,
  SiGoogleplay,
  SiAppstore,
} from "react-icons/si";
const skills = [
  {
    icon: SiReact,
    name: "React Native",
    level: 95,
    description: "Core development, WebView integration",
  },
  {
    icon: SiTypescript,
    name: "TypeScript",
    level: 90,
    description: "Type-safe development",
  },
  {
    icon: SiJavascript,
    name: "JavaScript",
    level: 92,
    description: "ES6+ features",
  },
  {
    icon: SiRedux,
    name: "Redux & Redux Toolkit",
    level: 88,
    description: "Global state management",
  },
  {
    icon: SiFirebase,
    name: "Firebase",
    level: 85,
    description: "Push notifications, Social logins, Analytics, Crashlytics",
  },
  {
    icon: SiWebpack,
    name: "Real-time Solutions",
    level: 85,
    description: "WebSockets, Live data management",
  },
  {
    icon: SiExpo,
    name: "Expo",
    level: 88,
    description: "Managed workflow, Development & Deployment",
  },
  {
    icon: SiGit,
    name: "Version Control",
    level: 90,
    description: "Git, GitHub, Code management",
  },
  {
    icon: SiReact,
    name: "React Navigation",
    level: 85,
    description: "Navigation & Deep linking",
  },
  {
    icon: SiGoogleplay,
    name: "App Deployment",
    level: 82,
    description: "App Store & Play Store submissions",
  },
  {
    icon: SiReact,
    name: "Debugging and Optimization",
    level: 85,
    description: "Memory & Performance optimization",
  },
  {
    icon: SiWebpack,
    name: "API Integration",
    level: 88,
    description: "REST APIs, Payment gateways, Third-party services",
  },
  {
    icon: SiReact,
    name: "Testing",
    level: 82,
    description: "Jest, React Testing Library, E2E with Detox",
  },
];
export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          variants={fadeIn("down")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={fadeIn("up")}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={index * 0.1}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <skill.icon className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <motion.div
                      className="bg-primary h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
