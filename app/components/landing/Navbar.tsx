"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        return scrollY.on("change", (latest) => {
            setIsScrolled(latest > 10);
        });
    }, [scrollY]);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-12 md:h-14 transition-all duration-300 border-b ${isScrolled
                ? "bg-white/70 backdrop-blur-md border-black/5"
                : "bg-transparent border-transparent"
                }`}
        >
            <div className="flex items-center gap-8">
                <Link href="/" className="text-lg font-semibold tracking-tighter text-black flex items-center gap-2">
                    <span className="opacity-90">DEPHRA</span>
                </Link>

                <div className="hidden md:flex items-center gap-6">
                    <Link href="#showcase" className="text-xs font-medium text-black/60 hover:text-black transition-colors">
                        Demo
                    </Link>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <Link
                    href="#schedule"
                    className="text-[11px] font-medium bg-black text-white px-4 py-1.5 rounded-full hover:bg-zinc-800 transition-all flex items-center gap-1"
                >
                    Schedule a Call <ArrowUpRight size={12} strokeWidth={3} />
                </Link>
            </div>
        </motion.nav>
    );
}
