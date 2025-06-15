"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SkillCard from "./SkillCard";
import { Skill } from "../_types";
import Cube from "./Cube";

const tabs = ["Frontend", "Backend", "Tools"] as const;
type Tab = (typeof tabs)[number];


interface SkillTabsProps {
  skills: Skill[];
  
}

export default function SkillTabs({
  skills
}: SkillTabsProps) {
  const [activeTab, setActiveTab] = useState<Tab>("Frontend");
  const frontend = skills.filter(
    (skill: Skill) => skill.category === "Frontend"
  );
  const backend = skills.filter(
    (skill: Skill) => skill.category === "Backend"
  );
  const tools = skills.filter((skill: Skill) => skill.category === "Tools");

  const tabData: Record<Tab, Skill[]> = {
    Frontend: frontend,
    Backend: backend,
    Tools: tools,
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-10 px-4">
      <div className="mx-auto mb-28">
          <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1 ,y: 20 }}
                    transition={{ duration: 0.6, delay: 1.5 }}
        >
        <Cube />  
                  </motion.div>
        
      </div>
      <h2 className="text-3xl font-bold mb-6 text-center">My Skills</h2>

      {/* Tab buttons */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              activeTab === tab
                ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                : "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      
      <AnimatePresence mode="sync">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {tabData[activeTab].map((skill) => (
            <SkillCard
              key={skill.id || skill.name}
              name={skill.name}
              imageSrc={skill?.icon[0]}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
