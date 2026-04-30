import { motion } from "framer-motion";

interface WhyUsProps {
  onOpenDemo: () => void;
}

const features = [
  { icon: "👨‍🏫", title: "Expert Teachers", desc: "Trained, passionate instructors with years of performance and teaching experience." },
  { icon: "📅", title: "Flexible Timings", desc: "Morning, evening or weekend slots. Reschedule anytime with  atleast 6  hours notice." },
  { icon: "🎯", title: "Personalised Curriculum", desc: "Every student gets a custom plan built around their goals, style and pace." },
  { icon: "💻", title: "100% Live Classes", desc: "No recordings. Every session is live via Zoom or Google Meet with real-time feedback." },
  { icon: "📱", title: "WhatsApp Support", desc: "Stay connected with your teacher, track progress and manage scheduling via WhatsApp." },
];

const WhyUs = ({ onOpenDemo }: WhyUsProps) => (
  <section id="why" className="py-24 px-[5%] bg-card">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-[1100px] mx-auto">
      <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="inline-block text-[.68rem] font-bold tracking-[.12em] uppercase text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-3">
          Why Maple Diary
        </span>
        <h2 className="font-heading text-[clamp(1.9rem,4vw,3rem)] font-black leading-tight text-foreground mb-4">
          Music learning<br /><span className="text-primary">reimagined</span> for you
        </h2>
        <p className="text-muted-foreground text-[.95rem] leading-[1.75] font-light max-w-[560px] mb-8">
          We believe great music education should be accessible, personal and joyful — wherever you are in the world.
        </p>
        <button
          onClick={onOpenDemo}
          className="bg-primary text-primary-foreground px-8 py-3.5 rounded-md font-bold text-[.95rem] inline-flex items-center gap-2 transition-all hover:-translate-y-0.5 shadow-[0_4px_20px_hsl(var(--red-glow)/0.25)]"
        >
          Start for Free Today
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col gap-4"
      >
        {features.map((f) => (
          <div key={f.title} className="flex gap-4 items-start p-4 rounded-[10px] transition-colors hover:bg-muted">
            <div className="w-[46px] h-[46px] rounded-[10px] bg-primary/10 border border-primary/15 flex items-center justify-center text-xl shrink-0">
              {f.icon}
            </div>
            <div>
              <h4 className="text-[.95rem] font-bold text-foreground mb-1">{f.title}</h4>
              <p className="text-[.84rem] text-muted-foreground leading-[1.6]">{f.desc}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default WhyUs;
