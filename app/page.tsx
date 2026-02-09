"use client";

import { motion } from "framer-motion";
import { Box } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-white text-black min-h-screen flex flex-col items-center justify-center p-6 font-sans selection:bg-black selection:text-white">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
        className="flex flex-col items-center gap-12"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xl font-bold tracking-tighter uppercase italic">Dephra</span>
          <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 font-medium">Spatial Studio</span>
        </div>

        <h1 className="text-[10vw] md:text-[6vw] font-extralight tracking-tighter leading-none text-center">
          Coming <br /> <span className="opacity-20 italic">Soon.</span>
        </h1>

        <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-300">
          Scaling the Third Dimension
        </p>
      </motion.div>
    </main>
  );
}
