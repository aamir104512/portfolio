import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          variants={fadeIn("down")}
          initial="hidden"
          animate="show"
          className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
        >
          Muhammad Aamir
        </motion.h1>

        <motion.h2
          variants={fadeIn("down")}
          initial="hidden"
          animate="show"
          className="text-2xl md:text-3xl font-medium mb-6 text-muted-foreground"
        >
          React Native Developer
        </motion.h2>

        <motion.p
          variants={fadeIn("up")}
          initial="hidden"
          animate="show"
          className="text-xl md:text-2xl mb-8 text-muted-foreground"
        >
          Building seamless, high-performance mobile experiences with React
          Native. I specialize in developing fast, intuitive, and scalable apps
          for iOS and Android, ensuring a smooth user experience. Passionate
          about clean architecture, efficient state management, and cutting-edge
          mobile solutions, I turn ideas into polished, real-world applications
          that stand out.
        </motion.p>

        <motion.div
          variants={fadeIn("up")}
          initial="hidden"
          animate="show"
          className="flex justify-center gap-4"
        >
          <Button
            size="lg"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Projects
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
