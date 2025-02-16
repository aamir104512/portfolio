import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

import myimage from "@/assets/images/IMG_0980.jpg";

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.h2
          variants={fadeIn("down")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeIn("right")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative aspect-square rounded-xl overflow-hidden"
          >
            <img
              src={myimage}
              alt="Muhammad Aamir"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            variants={fadeIn("left")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground">
              Hi, I'm <span className="font-semibold">Muhammad Aamir</span>, a
              passionate{" "}
              <span className="font-semibold">React Native developer</span>
              dedicated to building high-performance mobile applications. With{" "}
              <span className="font-semibold">
                over 2.5 years of experience
              </span>
              , I specialize in developing seamless, scalable, and feature-rich
              apps for <span className="font-semibold">Android & iOS</span>.
            </p>

            <p className="text-lg text-muted-foreground">
              My journey in software development began with a curiosity for
              mobile technology, which quickly evolved into a career. Over the
              years, I've worked on diverse projects, gaining expertise in:
            </p>

            <ul className="list-disc list-outside ml-4 text-lg text-muted-foreground space-y-2">
              <li className="pl-2">
                Cross-platform mobile development with React Native
              </li>
              <li className="pl-2">
                State management using Redux Toolkit & Context API
              </li>
              <li className="pl-2">
                Third-party API integration (Payments, Maps, WebSockets, Social
                Logins)
              </li>
              <li className="pl-2">
                Publishing & maintaining apps on Google Play Store & Apple App
                Store
              </li>
              <li className="pl-2">
                Scalable app architecture & maintainable code practices
              </li>
              <li className="pl-2">
                Performance optimization and improvements
              </li>
            </ul>

            <p className="text-lg text-muted-foreground">
              Beyond coding, I’m always eager to explore new technologies and
              optimize user experiences. I believe in continuous learning and
              strive to stay ahead in the ever-evolving world of mobile
              development.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
