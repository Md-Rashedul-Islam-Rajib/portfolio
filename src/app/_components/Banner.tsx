"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import pic from "../../../public/image.png";
export default function Banner() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="w-full bg-black min-h-[400px] flex items-center justify-between px-4 md:px-0 py-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -50 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-white max-w-xl"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Hi,
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-2"
        >
          My name is
        </motion.h3>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text mb-4"
        >
          Rashedul Islam
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-2xl md:text-xl font-bold mb-8"
        >
          I&apos;m a full stack developer passionate about crafting clean UI/UX and
          powerful backend systems. My journey began with JavaScript and grew
          into mastering technologies like React, Next.js, Node.js, MongoDB,
          PostgreSQL, and Prisma. I&apos;m always excited to collaborate, learn, and
          build.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <a
            href="/Rashedul_Islam_Rajib.pdf" // Path to your resume file in the public folder
            download="Rashedul_Islam_Rajib_Resume.pdf" // Custom file name on download 
          >
            <Button
              variant="outline"
              className="text-blue-400 cursor-pointer border-blue-400 hover:bg-blue-950 hover:text-blue-300 rounded-full px-8 py-6 text-lg"
            >
              DOWNLOAD RESUME
            </Button>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="hidden md:block relative"
      >
        {/* Replace the src with your own image */}
        <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]">
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 2, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 5,
              ease: "easeInOut",
            }}
            className="relative rounded-full bg-white z-10"
          >
            <Image
              src={pic}
              alt="Rashedul's Image"
              width={400}
              height={400}
              className="object-contain rounded-full"
            />
          </motion.div>

          {/* Animated background elements */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full rounded-full bg-cyan-200 -z-10"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 6,
              ease: "easeInOut",
            }}
          />

          {/* Floating elements */}
          <motion.div
            className="absolute top-[15%] right-[15%] w-8 h-8 bg-white rounded-sm -z-5"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, 0],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 4,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute bottom-[20%] right-[10%] w-10 h-6 bg-white rounded-sm -z-5"
            animate={{
              y: [0, 15, 0],
              rotate: [0, -5, 0],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 5,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
