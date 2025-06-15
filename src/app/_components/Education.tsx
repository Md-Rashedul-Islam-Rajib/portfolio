"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "M.Sc. in Mathematics",
    institution: "National University",
    year: "2022",
  },
  {
    degree: "B.Sc. in Mathematics",
    institution: "National University",
    year: "2020",
  },
];

export default function Education() {
  return (
    <section className="max-w-7xl text-center mx-auto">
      <motion.h3
        className="text-3xl font-bold mb-8 flex justify-center items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <GraduationCap className="text-blue-600" size={28} />
        Education
      </motion.h3>

      <div className="space-y-6 flex flex-col items-center">
        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            className="border-l-4 w-1/2 border-blue-600 pl-6 py-2 bg-gray-50 dark:bg-zinc-900/30 rounded-md shadow-sm"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
          >
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
              {edu.degree}
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              {edu.institution} — <span className="italic">{edu.year}</span>
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
