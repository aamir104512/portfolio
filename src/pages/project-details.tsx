import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/lib/data";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ImageModal } from "@/components/ui/image-modal";

export default function ProjectDetails() {
  const [, params] = useRoute("/project/:id");
  const project = projects.find((p) => p.id === Number(params?.id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen pt-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Link href="/#projects">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>

        <motion.h1
          variants={fadeIn("down")}
          initial="hidden"
          animate="show"
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          {project.title}
        </motion.h1>

        <motion.p
          variants={fadeIn("up")}
          initial="hidden"
          animate="show"
          className="text-muted-foreground mb-8 text-lg"
        >
          {project.description}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {project.modules.map((module, index) => (
            <motion.div
              key={module.title}
              variants={fadeIn("up")}
              initial="hidden"
              animate="show"
              custom={index * 0.1}
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-4">{module.title}</h3>
                  <ImageModal
                    images={module.screenshots}
                    trigger={
                      <div className="relative aspect-[9/16] cursor-pointer hover:opacity-90 transition-opacity">
                        <img
                          src={module.screenshots[0]}
                          alt={`${module.title} preview`}
                          className="rounded-lg object-cover w-full h-full"
                        />
                      </div>
                    }
                  />
                  <p className="mt-4 text-muted-foreground">
                    {module.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
