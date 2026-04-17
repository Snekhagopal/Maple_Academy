const items = [
  "Electronic Keyboard Lessons",
  "Piano Lessons",
  "Guitar Lessons",
  "Vocal Training",
  "Live Online Sessions",
  "Certified Teachers",
  "Flexible Timings",
  "Free Demo Session",
  "All Age Groups",
  "WhatsApp Support",
];

const Marquee = () => (
  <div className="overflow-hidden bg-muted border-y border-border py-4">
    <div className="flex w-max animate-marquee">
      {[...items, ...items].map((item, i) => (
        <span
          key={i}
          className="flex items-center gap-2.5 px-9 text-[.72rem] font-bold tracking-[.1em] uppercase text-foreground/30 whitespace-nowrap"
        >
          <span className="text-primary">♦</span>
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default Marquee;
