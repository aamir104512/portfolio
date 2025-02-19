import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { Card, CardContent } from "@/components/ui/card";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./theme-provider";

export default function GitHubContributions() {
  const { theme } = useTheme();

  const graphColor = theme === "dark" ? "4f46e5" : "4f46e5";
  const graphUrl = `https://ghchart.rshah.org/${graphColor}/aamir104512`;

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={fadeIn("down")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Github className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">
              GitHub Contributions
            </h2>
          </div>
          <p className="text-muted-foreground">
            A visualization of my GitHub activity over the past year
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("up")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Card className="dark:bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="w-full overflow-hidden rounded-lg bg-card dark:bg-card/50">
                <img
                  src={graphUrl}
                  alt="GitHub Contributions Graph"
                  className="w-full dark:invert dark:hue-rotate-180"
                />
              </div>
              <div className="mt-6 text-center">
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="dark:hover:bg-accent"
                >
                  <a
                    href="https://github.com/aamir104512"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    View GitHub Profile
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
