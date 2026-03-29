const stats = [
  { num: "500+", label: "Happy\nStudents" },
  { num: "8", label: "Courses\nOffered" },
  { num: "100%", label: "Live\nClasses" },
  { num: "5★", label: "Rated by\nParents" },
  { num: "4+", label: "Countries\nServed" },
];

const StatsBar = () => (
  <div className="bg-primary py-5 px-[5%] flex items-center justify-center flex-wrap">
    {stats.map((s, i) => (
      <div
        key={i}
        className={`flex items-center gap-2.5 px-9 py-1.5 ${
          i < stats.length - 1 ? "border-r border-primary-foreground/20" : ""
        }`}
      >
        <span className="font-display text-[2rem] text-primary-foreground leading-none">{s.num}</span>
        <span className="text-[.72rem] text-primary-foreground/75 font-semibold tracking-[.05em] uppercase leading-tight whitespace-pre-line">
          {s.label}
        </span>
      </div>
    ))}
  </div>
);

export default StatsBar;
