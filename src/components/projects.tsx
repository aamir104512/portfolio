import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/lib/data";
import { useLocation } from "wouter";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProjectImage {
  src: string;
  isLoaded: boolean;
}

export default function Projects() {
  const [, setLocation] = useLocation();
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const handleImageLoad = (imageUrl: string) => {
    setLoadedImages(prev => ({ ...prev, [imageUrl]: true }));
  };

  // Show only first 3 projects on home page
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 px-6 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          variants={fadeIn("down")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Recent Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeIn("up")}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={index * 0.2}
              onClick={() => setLocation(`/project/${project.id}`)}
              className="cursor-pointer transform transition-transform hover:scale-105 h-full"
            >
              <Card className="flex flex-col h-full">
                <CardHeader className="p-0 relative">
                  {!loadedImages[project.image] && (
                    <Skeleton className="absolute inset-0 w-full h-48" />
                  )}
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                    onLoad={() => handleImageLoad(project.image)}
                    style={{ opacity: loadedImages[project.image] ? 1 : 0 }}
                  />
                </CardHeader>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <CardTitle className="mb-2">{project.title}</CardTitle>
                  <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map(skill => (
                      <span 
                        key={skill}
                        className="px-2 py-1 bg-primary/10 text-primary rounded text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeIn("up")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <Button
            size="lg"
            onClick={() => setLocation("/projects")}
            className="group"
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}