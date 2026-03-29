import { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  [
    { text: "My daughter has been learning keyboard for 3 months and the progress is incredible! The teacher is so patient and makes every class genuinely fun.", name: "Priya Sharma", role: "Parent · Keyboard · Chennai", initial: "P" },
    { text: "Was a complete beginner with guitar. Within 2 months I'm already playing songs I love. Maple Diary's approach is structured yet so fun — highly recommend!", name: "Rohan Nair", role: "Student · Guitar · Bangalore", initial: "R" },
    { text: "The vocal classes have transformed my confidence and pitch. Flexible timings made it easy even with my busy schedule. Best decision I made this year!", name: "Ananya Krishnan", role: "Student · Vocals · Dubai", initial: "A" },
  ],
  [
    { text: "My son was hesitant at first, but the teacher made him feel so comfortable. Now he practices piano every day without being told! Amazing progress in just 6 weeks.", name: "Deepak Menon", role: "Parent · Piano · Hyderabad", initial: "D" },
    { text: "I'm learning carnatic vocals from the USA and the online classes feel just as rich as in-person training. The teacher's depth of knowledge is remarkable.", name: "Lakshmi Venkatesh", role: "Student · Carnatic Vocals · USA", initial: "L" },
    { text: "Music theory was always intimidating for me. Maple Diary broke it down into bite-sized lessons that actually make sense. I now compose my own melodies!", name: "Arjun Patel", role: "Student · Music Theory · UK", initial: "A" },
  ],
];

const Testimonials = () => {
  const [page, setPage] = useState(0);

  return (
    <section id="testimonials" className="py-24 px-[5%] bg-background">
      <div className="text-center mb-14">
        <span className="inline-block text-[.68rem] font-bold tracking-[.12em] uppercase text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-3">
          Student Love
        </span>
        <h2 className="font-heading text-[clamp(1.9rem,4vw,3rem)] font-black leading-tight text-foreground">
          What our students <span className="text-primary">say</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-275 mx-auto">
        {testimonials[page].map((t, i) => (
          <motion.div
            key={`${page}-${i}`}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:border-primary/20 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="text-primary text-[.9rem] tracking-[2px] mb-3">★★★★★</div>
            <p className="text-[.88rem] text-muted-foreground leading-[1.7] mb-4 italic">&quot;{t.text}&quot;</p>
            <div className="flex items-center gap-3">
              <div className="w-9.5 h-9.5 rounded-full bg-primary flex items-center justify-center font-extrabold text-[.85rem] text-primary-foreground shrink-0">
                {t.initial}
              </div>
              <div>
                <div className="text-[.85rem] font-bold text-foreground">{t.name}</div>
                <div className="text-[.72rem] text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`w-3 h-3 rounded-full transition-all cursor-pointer border-none ${
              page === i ? "bg-primary scale-110" : "bg-border hover:bg-muted-foreground"
            }`}
            aria-label={`Page ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
