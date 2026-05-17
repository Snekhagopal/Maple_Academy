import { useState } from "react";
import { motion } from "framer-motion";

const PRICING: Record<
  string,
  { sym: string; code: string; name: string; price: number }
> = {
  IN: { sym: "₹", code: "INR", name: "India", price: 600 },
  US: { sym: "$", code: "USD", name: "United States", price: 11.5 },
  UK: { sym: "£", code: "GBP", name: "United Kingdom", price: 9.5 },
  AU: { sym: "A$", code: "AUD", name: "Australia", price: 16.5 },
  AE: { sym: "AED", code: "AED", name: "UAE", price: 39 },
  SG: { sym: "S$", code: "SGD", name: "Singapore", price: 15 },
  CA: { sym: "C$", code: "CAD", name: "Canada", price: 16},
  MY: { sym: "RM", code: "MYR", name: "Malaysia", price: 44 },
  EU: { sym: "€", code: "EUR", name: "Europe", price: 10.5 },
};

const REGIONS = [
  { code: "IN", flag: "🇮🇳", label: "India" },
  { code: "US", flag: "🇺🇸", label: "USA" },
  { code: "UK", flag: "🇬🇧", label: "UK" },
  { code: "EU", flag: "🇪🇺", label: "Europe" },
  { code: "AU", flag: "🇦🇺", label: "Australia" },
  { code: "AE", flag: "🇦🇪", label: "UAE" },
  { code: "SG", flag: "🇸🇬", label: "Singapore" },
  { code: "CA", flag: "🇨🇦", label: "Canada" },
  { code: "MY", flag: "🇲🇾", label: "Malaysia" },
];

const COURSES = [
  { name: "Electronic Keyboard", icon: "🎹", tag: "Popular" },
  { name: "Piano", icon: "🎹", tag: "Classical" },
  { name: "Acoustic Guitar", icon: "🎸", tag: "Best Value", featured: true },
  { name: "Electric Guitar", icon: "🎸", tag: "Rock" },
  { name: "Western Vocals", icon: "🎤", tag: "Trending" },
  { name: "Carnatic Vocals", icon: "🎤", tag: "Traditional" },
  { name: "Music Theory", icon: "📖", tag: "Foundation" },
  { name: "Vocal Training", icon: "🎙️", tag: "New" },
];

interface PricingProps {
  onOpenDemo: () => void;
}

const Pricing = ({ onOpenDemo }: PricingProps) => {
  const [region, setRegion] = useState<string | null>(null);
  const data = region ? PRICING[region] : null;

  return (
    <section id="pricing" className="py-24 px-[5%] bg-background">
      <div className="text-center mb-11">
        <span className="inline-block text-[.68rem] font-bold tracking-[.12em] uppercase text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-3">
          Pricing
        </span>
        <h2 className="font-heading text-[clamp(1.9rem,4vw,3rem)] font-black leading-tight text-foreground mb-4">
          Simple, <span className="text-primary">Clear</span> Fees
        </h2>
        <p className="text-muted-foreground text-[.95rem] leading-[1.75] font-light max-w-140 mx-auto">
          Select your region to see fees in your local currency. No hidden
          charges, ever.
        </p>
      </div>

      <div className="flex justify-center mb-11">
        <div className="bg-card border border-border rounded-[10px] p-1.5 flex gap-1 flex-wrap justify-center">
          {REGIONS.map((r) => (
            <button
              key={r.code}
              onClick={() => setRegion(r.code)}
              className={`px-3 py-2 rounded-[7px] text-[.72rem] font-bold tracking-[.06em] uppercase transition-all cursor-pointer border-none ${
                region === r.code
                  ? "bg-primary text-primary-foreground shadow-[0_2px_14px_hsl(var(--red-glow)/0.25)]"
                  : "bg-transparent text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {r.flag} {r.label}
            </button>
          ))}
        </div>
      </div>

      {!data ? (
        <div className="text-center py-14">
          <div className="text-[2.8rem] mb-3.5">🌍</div>
          <p className="text-muted-foreground text-[.9rem] leading-[1.7]">
            Select your country above
            <br />
            to see fees in your local currency.
          </p>
        </div>
      ) : (
        <>
          <p className="text-center mb-12 text-[.85rem] text-muted-foreground">
            Showing prices in {data.code} — {data.name}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1200px] mx-auto">
            {COURSES.map((course, i) => (
              <motion.div
                key={course.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`bg-card border rounded-lg p-7 relative transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                  course.featured
                    ? "border-primary/30 ring-1 ring-primary/10"
                    : "border-border"
                }`}
              >
                {course.featured && (
                  <>
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-secondary to-primary rounded-t-lg" />
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[.62rem] font-extrabold px-3.5 py-1 rounded-full tracking-[.08em] uppercase whitespace-nowrap">
                      ⭐ {course.tag}
                    </div>
                  </>
                )}
                <div className="text-[2rem] mb-3">{course.icon}</div>
                <div className="text-[.68rem] font-bold tracking-[.1em] uppercase text-muted-foreground mb-1.5">
                  {course.tag}
                </div>
                <div className="font-heading text-lg font-black mb-4 text-foreground">
                  {course.name}
                </div>
                <div className="flex items-baseline gap-1 mb-1.5">
                  <span className="text-[1.1rem] text-primary font-bold mt-1">
                    {data.sym}
                  </span>
                  <span className="font-display text-[3rem] text-foreground leading-none">
                    {data.price}
                  </span>
                  <span className="text-[.78rem] text-muted-foreground self-end pb-1">
                    / session
                  </span>
                </div>
                <hr className="border-border my-4" />
                <ul className="mb-6 flex flex-col gap-2">
                  {[
                    "30 minutes session",
                    "2 live classes per week",
                    "One on one Sessions",
                    "Practice Resources",
                  ].map((f) => (
                    <li
                      key={f}
                      className="text-[.84rem] text-muted-foreground flex items-center gap-2"
                    >
                      <span className="text-primary text-[.8rem]">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={onOpenDemo}
                  className={`w-full py-3 rounded-[7px] font-bold text-[.88rem] tracking-[.04em] transition-all flex items-center justify-center gap-2 cursor-pointer border-none ${
                    course.featured
                      ? "bg-primary text-primary-foreground shadow-[0_2px_16px_hsl(var(--red-glow)/0.2)] hover:brightness-90"
                      : "bg-transparent text-primary border border-primary/25 hover:bg-primary/10 hover:border-primary"
                  }`}
                >
                  {/* {course.icon} */}
                   Book Free Demo
                </button>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Pricing;
