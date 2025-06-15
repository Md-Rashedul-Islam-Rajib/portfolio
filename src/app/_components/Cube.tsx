"use client";

import { SiPrisma, SiTypescript } from "react-icons/si";
import { cn } from "@/lib/utils";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { FaReact } from "react-icons/fa";

const Cube = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative w-full h-full", className)}>
      <div className="relative w-full h-full flex justify-center items-center perspective-1000">
        <div className="relative size-48 md:size-48 animate-[spinCube_12s_infinite_ease-in-out] [transform-style:preserve-3d] [transform-origin:50%_50%_0]">
          {/* Front */}
          <div className="absolute w-full h-full border bg-white/80 text-7xl shadow-lg flex justify-center items-center [transform:translateZ(6rem)]">
            <BiLogoPostgresql className="text-[#396b94]" />
          </div>
          {/* Top */}
          <div className="absolute w-full h-full border bg-white/80 text-7xl shadow-lg flex justify-center items-center [transform:rotateX(90deg)_translateZ(6rem)]">
            
                      <SiTypescript className="text-[#377cc7]" />
          </div>
          {/* Back */}
          <div className="absolute w-full h-full border bg-white/80 text-7xl shadow-lg flex justify-center items-center [transform:rotateX(180deg)_translateZ(6rem)]">
            <FaReact className="text-[#65dbfb]" />
          </div>
          {/* Bottom */}
          <div className="absolute w-full h-full border bg-white/80 text-7xl shadow-lg flex justify-center items-center [transform:rotateX(-90deg)_translateZ(6rem)]">
            <RiNextjsFill className="text-[#080808]" />
          </div>
          {/* Left */}
          <div className="absolute w-full h-full border bg-white/80 text-7xl shadow-lg flex justify-center items-center [transform:rotateY(-90deg)_translateZ(6rem)]">
            <TbBrandRedux className="text-[#764abc]" />
          </div>
          {/* Right */}
          <div className="absolute w-full h-full border bg-white/80 text-7xl shadow-lg flex justify-center items-center [transform:rotateY(90deg)_translateZ(6rem)]">
            <SiPrisma className="text-[#194156]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cube;
