import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-muted/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          variants={fadeIn("down")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-8"
        >
          Let's Connect
        </motion.h2>

        <motion.div
          variants={fadeIn("up")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-8"
        >
          <Button variant="outline" size="lg">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
          <Button variant="outline" size="lg">
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
          <Button variant="outline" size="lg">
            <Mail className="mr-2 h-4 w-4" />
            Email
          </Button>
        </motion.div>

        <motion.p
          variants={fadeIn("up")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-muted-foreground"
        >
          Available for freelance projects and full-time opportunities
        </motion.p>
      </div>
    </section>
  );
}
