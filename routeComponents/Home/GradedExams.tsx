"use client";
import { motion } from "framer-motion";
import logo from "@/assets/logo.jpg";
import bridgeLogo from "@/assets/bridge-academy.svg";
import rslLogo from "@/assets/RSL-Logo.png";
import trinityLogo from "@/assets/trinity-logo.png";
import Image from "next/image";

const exams = [
  {
    name: "Rock School",
    location: "UK",
    bg: "bg-gradient-to-r from-[#0077B6] to-[#00B4D8]",
    logo: rslLogo,
    path: "https://www.rslawards.com/ ",
    isLogo: true,
  },
  {
    name: "Trinity College",
    location: "UK",
    bg: "bg-gradient-to-r from-[#6A0DAD] to-[#9B59B6]",
    logo: trinityLogo,
    path: "https://www.trinitycollege.com/",
    isLogo: true,
  },
  {
    name: "Maple Diary Academy",
    location: "India",
    bg: "bg-gradient-to-r from-[#C8102E] to-[#9e0c24]",
    logo: logo,
    path: "#",
    isLogo: true,
  },
  {
    name: "Bridge Academy",
    location: "",
    bg: "bg-gradient-to-r from-[#1a3a5c] to-[#2c5f8a]",
    logo: bridgeLogo,
    path: "https://bridgeacademy.in/fine-arts/",
    isLogo: true,
  },
];

const GradedExams = () => {
  return (
    <section className="py-20 px-[5%] bg-background">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-heading text-[clamp(1.9rem,4vw,3rem)] font-black leading-tight text-foreground">
          Graded Music Exams With{" "}
          <span className="text-primary">Top Universities</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-275 mx-auto">
        {exams.map((exam, i) => (
          <motion.a
            key={exam.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            href={exam.path}
            target="_blank"
            rel="noopener noreferrer"
            // onClick={() => window.open(exam.path, "_blank")}
            className={`${exam.bg} rounded-2xl p-6 flex items-center justify-between gap-4 min-h-30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
          >
            <div>
              <h3 className="text-white font-bold text-[1rem] leading-tight">
                {exam.name}
              </h3>
              {exam.location && (
                <p className="text-white/70 text-[.85rem] mt-0.5">
                  {exam.location}
                </p>
              )}
            </div>
            {exam.isLogo && exam.logo && (
              <Image
                src={exam.logo}
                alt={exam.name}
                className="w-14 h-14 rounded-full object-contain p-1 border-2 border-white/20 shrink-0"
              />
            )}
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default GradedExams;
