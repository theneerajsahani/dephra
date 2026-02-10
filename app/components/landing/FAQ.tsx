"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
    {
        q: "What photos do you need?",
        a: "Your existing product photos work. Ideally 3-4 angles, but we can work with what you have. No professional studio required."
    },
    {
        q: "How long does it take?",
        a: "24-48 hours per product once we have your images."
    },
    {
        q: "Do I need to change my website?",
        a: "No. We handle the technical integration. Works on Shopify, WooCommerce, Webflow, or custom built sites."
    },
    {
        q: "Does it work on mobile?",
        a: "Yes. 3D rotation works in every mobile browser. AR (Augmented Reality) works on iPhones (iOS 12+) and most Android phones natively."
    },
    {
        q: "What if I don't like it?",
        a: "We'll revise it. First test model is free so you can see quality before committing."
    }
];

export default function FAQ() {
    return (
        <section className="py-32 px-4 md:px-8 bg-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none mb-16 text-center">
                    Common Questions
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <FAQItem key={i} question={faq.q} answer={faq.a} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            onClick={() => setIsOpen(!isOpen)}
            className="border-b border-zinc-200 py-6 cursor-pointer group"
        >
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold tracking-tight group-hover:text-blue-600 transition-colors pr-8">{question}</h3>
                <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className="shrink-0 text-zinc-400 group-hover:text-black"
                >
                    <Plus size={24} />
                </motion.div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pt-4 text-zinc-500 leading-relaxed text-lg max-w-2xl">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
