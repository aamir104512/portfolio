import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { Card, CardContent } from "@/components/ui/card";
import { SiReact, SiTypescript, SiFirebase, SiRedux, SiGraphql, SiAmazon } from "react-icons/si";

const skills = [
  { icon: SiReact, name: "React Native", level: 95 },
  { icon: SiTypescript, name: "TypeScript", level: 90 },
  { icon: SiFirebase, name: "Firebase", level: 85 },
  { icon: SiRedux, name: "Redux", level: 88 },
  { icon: SiGraphql, name: "GraphQL", level: 80 },
  { icon: SiAmazon, name: "AWS", level: 75 }
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