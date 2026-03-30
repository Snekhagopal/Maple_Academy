import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, BookOpen, Calendar, Award } from "lucide-react";

import courseKeyboard from "@/assets/course-keyboard.jpg";
import coursePiano from "@/assets/course-piano.jpg";
import courseAcousticGuitar from "@/assets/course-acoustic-guitar.jpg";
import courseElectricGuitar from "@/assets/course-electric-guitar.jpg";
import courseWesternVocals from "@/assets/course-western-vocals.jpg";
import courseCarnaticVocals from "@/assets/course-carnatic-vocals.jpg";
import courseMusicTheory from "@/assets/course-music-theory.jpg";
import courseVocalTraining from "@/assets/course-vocal-training.jpg";
import Image, { StaticImageData } from "next/image";

const levels = ["Foundation", "Beginner", "Intermediate", "Advanced"] as const;
type Level = typeof levels[number];

interface LevelContent {
  title: string;
  points: string[];
}

interface Course {
  name: string;
  image: string | StaticImageData;
  badge?: string;
  description: string;
  levels: Record<Level, LevelContent>;
  highlights: { icon: string; label: string }[];
}

const courses: Course[] = [
  {
    name: "Keyboard",
    image: courseKeyboard,
    badge: "Popular",
    description: "Master the electronic keyboard from basics to advanced — learn chords, scales, melodies and full compositions with live guidance.",
    levels: {
      Foundation: { title: "Foundation", points: ["Introduction to the keyboard layout & notes", "Proper sitting posture & hand positioning", "Understanding musical notation basics", "Simple melodies with right hand"] },
      Beginner: { title: "Beginner", points: ["Major & minor scales (2 octaves)", "Basic chord progressions (I-IV-V-I)", "Simple accompaniment patterns", "Reading sheet music — treble & bass clef", "Playing simple songs with both hands"] },
      Intermediate: { title: "Intermediate", points: ["Advanced scales & arpeggios", "Bollywood & Western song arrangements", "Chord inversions & voice leading", "Introduction to improvisation", "Ear training & sight-reading"] },
      Advanced: { title: "Advanced", points: ["Complex compositions & arrangements", "Jazz & classical repertoire", "Advanced improvisation techniques", "Performance preparation & stage skills", "Grade exam repertoire (Trinity / ABRSM)"] },
    },
    highlights: [
      { icon: "calendar", label: "4 Live Classes / Month" },
      { icon: "music", label: "Indian & Western Repertoire" },
      { icon: "book", label: "Theory-Integrated Learning" },
      { icon: "award", label: "Grade Exam Preparation" },
    ],
  },
  {
    name: "Piano",
    image: coursePiano,
    description: "Explore the rich tradition of piano playing — from classical composers to modern pieces with emphasis on technique, theory, and expressive playing.",
    levels: {
      Foundation: { title: "Foundation", points: ["Piano keys, octaves & note identification", "Correct posture, hand shape & finger numbers", "Basic rhythm — whole, half & quarter notes", "Simple right-hand melodies"] },
      Beginner: { title: "Beginner", points: ["Major & minor scales with proper fingering", "Reading treble & bass clef notation", "Hands-together coordination", "Basic pedal technique", "Easy classical pieces — Minuets, Sonatinas"] },
      Intermediate: { title: "Intermediate", points: ["Scales in all keys, arpeggios & broken chords", "Sonatas, Nocturnes & Etudes", "Advanced pedalling & dynamics", "Sight-reading development", "Music theory: modulation & form"] },
      Advanced: { title: "Advanced", points: ["Concerto & advanced recital repertoire", "Performance interpretation & expression", "Complex counterpoint & polyphony", "Competition & audition preparation", "ABRSM / Trinity Grade 6-8 prep"] },
    },
    highlights: [
      { icon: "calendar", label: "4 Live Classes / Month" },
      { icon: "music", label: "Classical & Modern Repertoire" },
      { icon: "book", label: "Theory-Integrated Learning" },
      { icon: "award", label: "Grade Exam Preparation" },
    ],
  },
  {
    name: "Acoustic Guitar",
    image: courseAcousticGuitar,
    badge: "Best Value",
    description: "Learn fingerpicking, strumming, chords and your favourite songs on the acoustic guitar with expert teachers.",
    levels: {
      Foundation: { title: "Foundation", points: ["Parts of the guitar & how to hold it", "Basic tuning & string names", "Simple open chords — C, G, D, Em, Am", "Basic downstroke strumming"] },
      Beginner: { title: "Beginner", points: ["All open major & minor chords", "Strumming patterns & rhythm exercises", "Introduction to fingerpicking", "Reading chord charts & tablature", "Playing complete songs"] },
      Intermediate: { title: "Intermediate", points: ["Barre chords across the fretboard", "Fingerstyle arrangements", "Pentatonic & major scale patterns", "Capo usage & transposition", "Song arrangement & dynamics"] },
      Advanced: { title: "Advanced", points: ["Complex chord voicings & extensions", "Advanced fingerstyle & Travis picking", "Solo guitar arrangements", "Composition & songwriting", "Performance & recording techniques"] },
    },
    highlights: [
      { icon: "calendar", label: "4 Live Classes / Month" },
      { icon: "music", label: "Pop, Rock & Folk Styles" },
      { icon: "book", label: "Structured Curriculum" },
      { icon: "award", label: "Grade Exam Preparation" },
    ],
  },
  {
    name: "Electric Guitar",
    image: courseElectricGuitar,
    description: "Rock, blues, metal — learn electric guitar techniques including power chords, solos, bending and effects.",
    levels: {
      Foundation: { title: "Foundation", points: ["Electric guitar anatomy & setup", "Amplifier basics & tone controls", "Power chords & palm muting", "Simple riffs & single-note lines"] },
      Beginner: { title: "Beginner", points: ["Pentatonic scale patterns", "Basic bending & vibrato", "Hammer-ons & pull-offs", "12-bar blues progression", "Playing classic rock riffs"] },
      Intermediate: { title: "Intermediate", points: ["Full major & minor scale patterns", "Solo techniques & improvisation", "Effects pedals — distortion, delay, reverb", "Rhythm guitar in various genres", "Ear training & jam tracks"] },
      Advanced: { title: "Advanced", points: ["Sweep picking & tapping", "Advanced music theory for guitar", "Tone crafting & signal chain mastery", "Band context & live performance", "Recording & production basics"] },
    },
    highlights: [
      { icon: "calendar", label: "4 Live Classes / Month" },
      { icon: "music", label: "Rock, Blues & Metal" },
      { icon: "book", label: "Genre-Specific Training" },
      { icon: "award", label: "Performance Coaching" },
    ],
  },
  {
    name: "Western Vocals",
    image: courseWesternVocals,
    description: "Develop your voice with western vocal techniques — breath control, pitch, range expansion and performance skills.",
    levels: {
      Foundation: { title: "Foundation", points: ["Understanding your voice type & range", "Basic breathing & diaphragm awareness", "Simple pitch-matching exercises", "Singing simple melodies in tune"] },
      Beginner: { title: "Beginner", points: ["Breath support & control techniques", "Vocal warm-ups & cool-downs", "Major scale singing & intervals", "Diction & vowel shaping", "Singing pop & folk songs"] },
      Intermediate: { title: "Intermediate", points: ["Vocal range expansion exercises", "Runs, riffs & vocal agility", "Singing in different styles — pop, rock, jazz", "Microphone technique", "Harmonies & backing vocals"] },
      Advanced: { title: "Advanced", points: ["Advanced vocal interpretation & dynamics", "Stage performance & audience engagement", "Audition & competition preparation", "Studio recording techniques", "Building a performance repertoire"] },
    },
    highlights: [
      { icon: "calendar", label: "4 Live Classes / Month" },
      { icon: "music", label: "Pop, Rock & Jazz Styles" },
      { icon: "book", label: "Technique-Focused Training" },
      { icon: "award", label: "Performance Coaching" },
    ],
  },
  {
    name: "Carnatic Vocals",
    image: courseCarnaticVocals,
    badge: "Traditional",
    description: "Learn the rich tradition of Carnatic music — raagas, taalas, swaras and classical compositions from experienced gurus.",
    levels: {
      Foundation: { title: "Foundation", points: ["Introduction to Carnatic music system", "Sarali varisai — basic swara exercises", "Understanding shruti & pitch", "Simple taala patterns — Adi, Rupaka"] },
      Beginner: { title: "Beginner", points: ["Janta varisai & upper sthayi varisai", "Alankaras in major raagas", "Basic Geethams", "Taala counting with hand gestures", "Swara recognition & ear training"] },
      Intermediate: { title: "Intermediate", points: ["Swarajathis & Varnams", "Raaga identification & alapana basics", "Krithis of the Trinity composers", "Niraval & kalpana swaram introduction", "Advanced taala patterns"] },
      Advanced: { title: "Advanced", points: ["Manodharma sangeetham — improvisation", "Concert-level repertoire building", "RTP (Ragam Tanam Pallavi)", "Rare raaga exploration", "Performance & stage etiquette"] },
    },
    highlights: [
      { icon: "calendar", label: "4 Live Classes / Month" },
      { icon: "music", label: "Traditional Methodology" },
      { icon: "book", label: "Raaga & Taala System" },
      { icon: "award", label: "Grade Exam Preparation" },
    ],
  },
  {
    name: "Music Theory",
    image: courseMusicTheory,
    description: "Understand the building blocks of music — notes, scales, chords, harmony, rhythm and composition fundamentals.",
    levels: {
      Foundation: { title: "Foundation", points: ["Musical alphabet & note names", "Staff, clefs & ledger lines", "Note values & basic time signatures", "Understanding tempo & dynamics markings"] },
      Beginner: { title: "Beginner", points: ["Major & minor scales construction", "Key signatures & circle of fifths", "Intervals — identification & ear training", "Chord construction — triads", "Simple rhythm dictation"] },
      Intermediate: { title: "Intermediate", points: ["7th chords & extended harmony", "Chord progressions & Roman numeral analysis", "Modulation & key changes", "Musical forms — binary, ternary, rondo", "Transposition & score reading"] },
      Advanced: { title: "Advanced", points: ["Counterpoint & voice leading rules", "Orchestration & arranging basics", "Advanced harmony — chromatic & modal", "Composition techniques", "ABRSM / Trinity theory exam prep"] },
    },
    highlights: [
      { icon: "calendar", label: "4 Live Classes / Month" },
      { icon: "music", label: "Comprehensive Curriculum" },
      { icon: "book", label: "Theory & Practical Balance" },
      { icon: "award", label: "ABRSM / Trinity Prep" },
    ],
  },
  {
    name: "Vocal Training",
    image: courseVocalTraining,
    badge: "New",
    description: "Comprehensive vocal training program covering warm-ups, technique, breath support, stage presence and more.",
    levels: {
      Foundation: { title: "Foundation", points: ["Voice discovery & range assessment", "Basic breathing exercises", "Simple pitch-matching games", "Singing nursery rhymes & simple tunes"] },
      Beginner: { title: "Beginner", points: ["Vocal warm-up & cool-down routines", "Breath support & sustained notes", "Pitch accuracy & intonation", "Diction & articulation exercises", "Singing simple songs with confidence"] },
      Intermediate: { title: "Intermediate", points: ["Vocal registers — chest, head, mix", "Harmonies & vocal layering", "Singing in different languages", "Microphone technique", "Performance practice & feedback"] },
      Advanced: { title: "Advanced", points: ["Advanced vocal styling & interpretation", "Stage presence & audience connection", "Audition & competition preparation", "Recording studio techniques", "Building a professional repertoire"] },
    },
    highlights: [
      { icon: "calendar", label: "4 Live Classes / Month" },
      { icon: "music", label: "All Vocal Styles" },
      { icon: "book", label: "Technique-Focused" },
      { icon: "award", label: "Stage Confidence Building" },
    ],
  },
];

const highlightIcons: Record<string, React.ReactNode> = {
  calendar: <Calendar className="w-5 h-5 text-primary" />,
  music: <Music className="w-5 h-5 text-primary" />,
  book: <BookOpen className="w-5 h-5 text-primary" />,
  award: <Award className="w-5 h-5 text-primary" />,
};

interface CoursesProps {
  onOpenDemo: () => void;
}

const Courses = ({ onOpenDemo }: CoursesProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [activeLevel, setActiveLevel] = useState<Level>("Foundation");
  const detailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (expandedIndex !== null && detailRef.current) {
      setTimeout(() => {
        detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  }, [expandedIndex]);

  const handleExpand = (i: number) => {
    if (expandedIndex === i) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(i);
      setActiveLevel("Foundation");
    }
  };

  return (
    <section id="courses" className="py-24 px-[5%] bg-card">
      <div className="text-center mb-14">
        <span className="inline-block text-[.68rem] font-bold tracking-[.12em] uppercase text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-3">
          What We Teach
        </span>
        <h2 className="font-heading text-[clamp(1.9rem,4vw,3rem)] font-black leading-tight text-foreground mb-4">
          Our <span className="text-primary">Courses</span>
        </h2>
        <p className="text-muted-foreground text-[.95rem] leading-[1.75] font-light max-w-[560px] mx-auto">
          Live interactive classes designed for every level — from complete beginners to advanced students.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
        {courses.map((course, i) => (
          <motion.div
            key={course.name}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className={`bg-background border rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer ${
              expandedIndex === i ? "border-primary shadow-lg shadow-primary/10" : "border-border hover:border-primary/20"
            }`}
            onClick={() => handleExpand(i)}
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={course.image}
                alt={course.name}
                className="w-full h-full object-cover"
                loading="lazy"
                width={640}
                height={512}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              {course.badge && (
                <span className={`absolute top-3 right-3 text-[.6rem] font-extrabold px-2.5 py-0.5 rounded-full tracking-[.08em] uppercase z-[2] ${
                  course.badge === "New" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                }`}>
                  {course.badge}
                </span>
              )}
            </div>

            <div className="p-5">
              <h3 className="font-heading text-lg font-bold mb-2 text-foreground">{course.name}</h3>
              <button
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-[.84rem] font-bold transition-all cursor-pointer ${
                  expandedIndex === i
                    ? "bg-primary text-primary-foreground border border-primary"
                    : "bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                }`}
              >
                {expandedIndex === i ? "Hide Details" : "Explore Course"} →
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Expanded course detail panel — slides down */}
      <AnimatePresence>
        {expandedIndex !== null && (
          <motion.div
            ref={detailRef}
            key={expandedIndex}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden max-w-300 mx-auto mt-8"
          >
            <div className="bg-background rounded-2xl border border-border overflow-hidden shadow-lg">
              {/* Course title */}
              <div className="text-center pt-10 pb-6 px-6">
                <h3 className="font-heading text-[clamp(1.5rem,3vw,2.5rem)] font-black text-foreground">
                  {courses[expandedIndex].name} <span className="text-primary">Courses</span>
                </h3>
              </div>

              {/* Level tabs */}
              <div className="max-w-175 mx-auto px-6 mb-8">
                <div className="flex bg-muted rounded-lg p-1">
                  {levels.map((level) => (
                    <button
                      key={level}
                      onClick={() => setActiveLevel(level)}
                      className={`flex-1 py-3 px-2 text-[.85rem] sm:text-[.9rem] font-semibold rounded-md transition-all duration-200 cursor-pointer ${
                        activeLevel === level
                          ? "bg-background text-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              {/* Level content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLevel}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="px-6 sm:px-10 pb-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
                    {/* Left — Description & CTA */}
                    <div>
                      <p className="text-muted-foreground text-[.9rem] leading-[1.7] mb-6">
                        {courses[expandedIndex].description}
                      </p>
                      <h4 className="text-[.72rem] font-extrabold tracking-[.14em] uppercase text-primary mb-4">
                        {activeLevel} Level — What You&apos;ll Learn
                      </h4>
                      <ul className="space-y-3 mb-6">
                        {courses[expandedIndex].levels[activeLevel].points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-[.87rem] text-muted-foreground">
                            <span className="text-primary text-xs mt-1.5">♪</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={onOpenDemo}
                        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg text-[.9rem] font-bold transition-all hover:brightness-90 shadow-lg shadow-primary/20 cursor-pointer"
                      >
                        🎵 Book Free Demo
                      </button>
                    </div>

                    {/* Right — Highlights */}
                    <div>
                      <h4 className="text-[.72rem] font-extrabold tracking-[.14em] uppercase text-primary mb-4">
                        Course Highlights
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        {courses[expandedIndex].highlights.map((h, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3 bg-muted/50 border border-border rounded-lg px-4 py-3"
                          >
                            {highlightIcons[h.icon]}
                            <span className="text-[.82rem] font-medium text-foreground">{h.label}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {["All Levels", "Live Classes", "Certificate Track"].map((tag) => (
                          <span
                            key={tag}
                            className="text-[.7rem] font-bold tracking-[.06em] px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Close */}
              <div className="text-center pb-6">
                <button
                  onClick={() => setExpandedIndex(null)}
                  className="text-muted-foreground text-[.82rem] font-medium hover:text-primary transition-colors cursor-pointer"
                >
                  ✕ Close Details
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Courses;
