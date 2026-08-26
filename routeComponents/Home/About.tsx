import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="py-24 px-[5%] bg-background">
    <div className="max-w-225 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="inline-block text-[.68rem] font-bold tracking-[.12em] uppercase text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-3">
          About Us
        </span>
        <h2 className="font-heading text-[clamp(1.9rem,4vw,3rem)] font-black leading-tight text-foreground mb-6">
          About <span className="text-primary">Maple Diary Academy</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="space-y-6"
      >
        <p className="text-muted-foreground text-[.95rem] leading-[1.85] font-light">
          At Maple Diary Academy, we believe that music is more than a skill — it&apos;s a lifelong companion. Our academy is dedicated to helping students of all ages discover their musical potential through structured learning, creative expression, and performance opportunities. Whether you are a beginner or an advancing learner, we provide a personalized pathway to musical excellence.
        </p>

        <div className="border-l-4 border-primary pl-6 py-2">
          <h3 className="font-heading text-xl font-bold text-foreground mb-3">Our Story</h3>
          <p className="text-muted-foreground text-[.95rem] leading-[1.85] font-light">
            Maple Diary Academy was founded with a simple vision — to make high-quality music education accessible, structured, and inspiring. With expertise in piano, guitar, vocals, and music theory, our programs are carefully designed to blend strong technical foundations with creativity and confidence-building.
          </p>
          <p className="text-muted-foreground text-[.95rem] leading-[1.85] font-light mt-4">
            We combine traditional music training with modern teaching methods, ensuring students not only learn to play an instrument but truly understand and enjoy music. Through personalized mentoring, regular assessments, and guided practice systems, we help every student progress at their own pace while achieving measurable results.
          </p>
          <p className="text-muted-foreground text-[.95rem] leading-[1.85] font-light mt-4">
            Today, Maple Diary Academy proudly serves <strong className="text-foreground">500+ students</strong> across{" "}
            <strong className="text-foreground">10+ countries</strong> — including India, UAE, USA, UK, Australia, Singapore, Canada and Malaysia.
            Our students have successfully cleared <strong className="text-foreground">Trinity College London</strong> and{" "}
            <strong className="text-foreground">RSL Awards (Rock School)</strong> international grade examinations.
            We teach Keyboard, Piano, Acoustic Guitar, Electric Guitar, Western Vocals, Carnatic Vocals, Music Theory and Vocal Training
            — all delivered as live, interactive one-on-one sessions via Zoom or Google Meet.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
