import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: "My son started learning keyboard from Sai Charan at the age of 5.5, and for the past three years, he has been excited to attend every class and we're really happy to be part of the Maple Diary Academy.",
    name: "Bhairav's Parent",
    role: "Parent · Keyboard",
    initial: "B",
  },
  {
    text: "The 1:1 format makes learning so comfortable and effective. My teacher provides constructive feedback in a positive and encouraging way, which has helped me stay consistent and confident. Even though the classes are online, the teaching has always been super engaging and easy to follow.",
    name: "Siddharth",
    role: "Student",
    initial: "S",
  },
  {
    text: "My kids have been learning keyboard for the past four years, and it's been such a great journey. Both my boys have completed four grades under Trinity College of London.",
    name: "Jothish & Koushik's Parent",
    role: "Parent · Keyboard · Trinity Grade 4",
    initial: "J",
  },
  {
    text: "I appreciate how supportive and encouraging my teacher is during every session. Even when I make mistakes, I feel comfortable asking questions and trying again. The curriculum is thoughtfully adapted to my interests, which keeps me motivated while also challenging me to become better.",
    name: "Adithya",
    role: "Student",
    initial: "A",
  },
  {
    text: "We are extremely grateful for the dedication and professionalism of the academy. The lessons are well-planned, and the teacher genuinely cares about my child's progress. The individualized approach has helped him overcome initial hesitation and perform with confidence. It's wonderful to see him look forward to every class and take pride in his growth.",
    name: "Ronav's Parent",
    role: "Parent · Keyboard",
    initial: "R",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const goTo = (i: number) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };

  const t = testimonials[index];

  return (
    <section id="testimonials" className="py-24 px-[5%] bg-background">
      <div className="text-center mb-14">
        <span className="inline-block text-[.68rem] font-bold tracking-[.12em] uppercase text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-3">
          Student Love
        </span>
        <h2 className="font-heading text-[clamp(1.9rem,4vw,3rem)] font-black leading-tight text-foreground">
          What our students <span className="text-primary">say</span>
        </h2>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-sm md:text-base">
          Real words from the families and learners who make Maple Diary Academy home.
        </p>
      </div>

      <div className="relative max-w-225 mx-auto">
        <div className="relative bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg overflow-hidden min-h-85 md:min-h-75">
          <Quote className="absolute top-6 right-6 w-16 h-16 text-primary/10" strokeWidth={1.5} />

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="text-primary text-base tracking-[3px] mb-4">★★★★★</div>
              <p className="text-base md:text-lg text-foreground/90 leading-[1.8] mb-6 italic relative z-10">
                {t.text}
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center font-extrabold text-base text-primary-foreground shrink-0">
                  {t.initial}
                </div>
                <div>
                  <div className="text-sm md:text-base font-bold text-foreground">{t.name}</div>
                  <div className="text-xs md:text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Arrow controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => paginate(-1)}
            className="w-11 h-11 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all flex items-center justify-center shadow-sm"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full transition-all border-none ${
                  index === i ? "bg-primary w-8" : "bg-border w-2.5 hover:bg-muted-foreground"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => paginate(1)}
            className="w-11 h-11 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all flex items-center justify-center shadow-sm"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
