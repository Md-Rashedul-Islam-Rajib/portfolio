"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface SkillCardProps {
  name: string;
  imageSrc: string;
}

export default function SkillCard({ name, imageSrc }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="group rounded-2xl bg-white dark:bg-zinc-900 p-4 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center gap-2"
    >
      <div className="w-16 h-16 relative">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-contain transition-transform group-hover:scale-110"
        />
      </div>
      <p className="text-sm font-medium text-gray-800 dark:text-white">
        {name}
      </p>
    </motion.div>
  );
}
