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
import { FaAppStore, FaGooglePlay } from "react-icons/fa";

export default function ProjectsPage() {
  const [, setLocation] = useLocation();
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const handleImageLoad = (imageUrl: string) => {
    setLoadedImages((prev) => ({ ...prev, [imageUrl]: true }));
  };

  const handleStoreClick = (e: React.MouseEvent, link: string) => {
    e.stopPropagation();
    window.open(link, "_blank");
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
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-primary/10 text-primary rounded text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Add store links */}
                  {(project.appStoreLink || project.playStoreLink) && (
                    <div className="flex items-center gap-3 pt-3 border-t">
                      {project.appStoreLink && (
                        <button
                          onClick={(e) =>
                            handleStoreClick(e, project.appStoreLink!)
                          }
                          className="flex items-center justify-center gap-2 px-3 py-1.5 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-md transition-colors w-full"
                        >
                          <FaAppStore className="w-4 h-4" />
                          <span className="text-sm font-medium">App Store</span>
                        </button>
                      )}
                      {project.playStoreLink && (
                        <button
                          onClick={(e) =>
                            handleStoreClick(e, project.playStoreLink!)
                          }
                          className="flex items-center justify-center gap-2 px-3 py-1.5 bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white rounded-md transition-colors w-full"
                        >
                          <FaGooglePlay className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            Play Store
                          </span>
                        </button>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
