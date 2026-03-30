const stats = [
  { num: "500+", label: "Happy Students" },
  { num: "8", label: "Courses Offered" },
  { num: "100%", label: "Live Classes" },
  { num: "5★", label: "Rated by Parents" },
  { num: "4+", label: "Countries Served" },
];


const StatsBar = () => (
  <div className="bg-primary py-8 md:py-5 px-4 md:px-[5%]">
    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-0">
      {stats.map((s, i) => (
        <div
          key={i}
          className={`flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-2 md:gap-2.5 px-4 md:px-9 py-3 md:py-1.5
            ${i < stats.length - 1 ? "md:border-r md:border-primary-foreground/20" : ""}
            ${i === 4 ? "col-span-2 md:col-span-1" : ""}  // Span 2 cols on mobile only
          `}
        >
          <span className="font-display text-3xl md:text-[2rem] text-primary-foreground">{s.num}</span>
          <span className="text-xs md:text-[.72rem] text-primary-foreground/75 font-semibold tracking-wider uppercase">{s.label}</span>
        </div>
      ))}
    </div>
  </div>
);


export default StatsBar;