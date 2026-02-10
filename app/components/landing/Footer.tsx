import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="bg-white text-black py-24 px-6 md:px-12 border-t border-black/[0.03]">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row items-stretch justify-between gap-12 md:gap-0">

                    {/* Left Section: Branding & Nav */}
                    <div className="flex-1 flex flex-col items-center md:items-start space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-2xl font-semibold tracking-[0.4em] uppercase">DEPHRA</span>
                        </motion.div>

                        <nav className="flex items-center gap-8">
                            <Link href="#showcase" className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40 hover:text-black transition-colors">
                                Demos
                            </Link>
                            <div className="w-px h-3 bg-black/10" />
                            <Link href="#manifesto" className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40 hover:text-black transition-colors">
                                Vision
                            </Link>
                            <div className="w-px h-3 bg-black/10" />
                            <a href="mailto:hello@dephra.com" className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40 hover:text-black transition-colors">
                                Contact
                            </a>
                        </nav>
                    </div>

                    {/* Right Section: Social Presence */}
                    <div className="flex-1 flex flex-col items-center md:items-end justify-center">
                        <div className="flex flex-col items-center md:items-end gap-8">
                            <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-black/20 mb-2">Connect</span>
                            <div className="flex items-center gap-10">
                                <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-black/40 hover:text-black transition-all">X</a>
                                <div className="w-1 h-1 bg-black/10 rounded-full" />
                                <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-black/40 hover:text-black transition-all">LinkedIn</a>
                                <div className="w-1 h-1 bg-black/10 rounded-full" />
                                <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-black/40 hover:text-black transition-all">Instagram</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Utility Floor */}
                <div className="w-full mt-24 pt-10 border-t border-black/[0.03] flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/20">
                        © 2026 DEPHRA. High-Fidelity Spatial Experiences.
                    </p>
                    <div className="flex gap-8 text-[9px] font-bold uppercase tracking-[0.2em] text-black/20">
                        <Link href="#" className="hover:text-black/40 transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-black/40 transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
