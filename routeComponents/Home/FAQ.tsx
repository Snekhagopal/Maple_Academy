import { useState } from "react";

const faqs = [
  { q: "What equipment do I need for online classes?", a: "You need a smartphone or laptop with a stable internet connection and camera. Keyboard students need a basic keyboard at home. Guitar students need their own guitar. For vocals — just your voice!" },
  { q: "Is the demo session really 100% free?", a: "Yes — completely free, no hidden charges, zero obligation to enrol. Fill the form and we'll WhatsApp you within 24 hours to schedule your demo at a convenient time." },
  { q: "What age groups do you teach?", a: "We teach all age groups — from children as young as 5 years to adults. The curriculum is fully customised based on the student's age, current level and musical goals." },
  { q: "How are classes conducted — one-on-one or batch?", a: "All classes are 100% live via Zoom or Google Meet. We offer both one-on-one and small batch options. One-on-one is recommended for faster progress and personalised attention." },
  { q: "Can I choose my class timings?", a: "Absolutely! We offer morning, evening and weekend slots to suit different schedules and time zones globally. We'll agree on a regular schedule via WhatsApp after your free demo." },
  { q: "Do you teach students outside India?", a: "Yes! We serve students across India, UAE, USA, UK, Australia, Singapore and beyond. Fees are displayed in your local currency — select your region in the Pricing section above." },
  { q: "How much does an online music class cost in India?", a: "Our online music classes in India are priced at ₹600 per 30-minute session, with 2 live sessions per week. That works out to approximately ₹4,800–₹5,200 per month depending on the month. There are no hidden fees, and your very first demo class is completely free." },
  { q: "Can a 5-year-old child learn music online?", a: "Yes! We have students as young as 5 years learning keyboard and vocals online. Our teachers are trained to work with young children using age-appropriate, fun, and engaging teaching methods in live one-on-one sessions — making online learning just as effective as offline for young learners." },
  { q: "What is a Trinity College music grade exam?", a: "Trinity College London offers internationally recognised music grade examinations from Initial to Grade 8. Passing a grade provides a globally accepted certificate of musical achievement. At Maple Diary Academy, we formally prepare students for these exams in keyboard, piano, guitar and vocals — and our students have successfully cleared up to Grade 4 and beyond." },
  { q: "Is learning music online as effective as offline?", a: "Absolutely. Our live one-on-one online format provides the same real-time feedback and personalised attention as in-person classes. You hear and see your teacher in HD, they correct your technique in the moment, and you get full attention every session. Our students regularly clear international grade exams and perform confidently — proof that online music learning is highly effective." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-[5%] bg-card">
      <div className="max-w-190 mx-auto">
        <div className="mb-11">
          <span className="inline-block text-[.68rem] font-bold tracking-[.12em] uppercase text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-3">
            FAQ
          </span>
          <h2 className="font-heading text-[clamp(1.9rem,4vw,3rem)] font-black leading-tight text-foreground">
            Common <span className="text-primary">Questions</span>
          </h2>
        </div>
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-border">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex justify-between items-center w-full py-5 text-left text-[.96rem] font-semibold text-foreground gap-4 transition-colors hover:text-primary cursor-pointer bg-transparent border-none"
            >
              {faq.q}
              <span
                className={`w-7 h-7 rounded-full flex items-center justify-center text-[1.1rem] shrink-0 transition-all duration-300 ${
                  openIndex === i
                    ? "rotate-45 bg-primary/15 border border-primary/30 text-primary"
                    : "bg-muted border border-border text-muted-foreground"
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-400 text-[.88rem] text-muted-foreground leading-[1.75] ${
                openIndex === i ? "max-h-40 pb-4" : "max-h-0"
              }`}
            >
              {faq.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
