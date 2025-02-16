import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/lib/data";
import { useLocation } from "wouter";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function ProjectsPage() {
  const [, setLocation] = useLocation();
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const handleImageLoad = (imageUrl: string) => {
    setLoadedImages(prev => ({ ...prev, [imageUrl]: true }));
  };

  return (
    <div className="min-h-screen pt-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Link href="/#projects">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <motion.h1
          variants={fadeIn("down")}
          initial="hidden"
          animate="show"
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          All Projects
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeIn("up")}
              initial="hidden"
              animate="show"
              custom={index * 0.1}
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
      </div>
    </div>
  );
}
