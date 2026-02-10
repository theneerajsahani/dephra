"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const items = [
    {
        title: "Spatial Presence",
        subtitle: "3D Immersion",
        image: "/assets/demo/product-images/sofa-front.jpg",
        description: "Experience products in their true physical form through our proprietary spatial engine."
    },
    {
        title: "Augmented Reality",
        subtitle: "Phygital World",
        image: "/assets/demo/product-images/sofa-side.jpg",
        description: "Bridge the gap between digital assets and physical spaces with one-tap AR deployment."
    },
    {
        title: "Studio Fidelity",
        subtitle: "Photo Realism",
        image: "/assets/demo/product-images/sofa-detail-1.jpg",
        description: "Unprecedented detail and lighting accuracy, ensuring what you see is what you get."
    }
];

export default function HorizontalShowcase() {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
    const imageRefs = useRef<any[]>([]);
    const textRefs = useRef<any[]>([]);

    useEffect(() => {
        const pin = gsap.fromTo(
            sectionRef.current,
            { x: 0 },
            {
                x: "-200vw",
                ease: "none",
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "2000 top",
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1
                }
            }
        );

        // Individual item parallax
        items.forEach((_, i) => {
            gsap.fromTo(imageRefs.current[i],
                { x: "10%", scale: 1.2 },
                {
                    x: "-10%",
                    scale: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: imageRefs.current[i],
                        containerAnimation: pin,
                        start: "left right",
                        end: "right left",
                        scrub: true
                    }
                }
            );

            gsap.fromTo(textRefs.current[i],
                { x: "-50px", opacity: 0 },
                {
                    x: "50px",
                    opacity: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: textRefs.current[i],
                        containerAnimation: pin,
                        start: "left right",
                        end: "right left",
                        scrub: true
                    }
                }
            );
        });

        return () => {
            pin.kill();
        };
    }, []);

    return (
        <section className="overflow-hidden">
            <div ref={triggerRef}>
                <div ref={sectionRef} className="h-screen w-[300vw] flex flex-row relative bg-white">
                    {items.map((item, index) => (
                        <div key={index} className="h-screen w-screen flex items-center justify-center p-12 md:p-24 relative overflow-hidden">
                            <div className="relative w-full h-full flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto">
                                {/* Text Content */}
                                <div ref={el => { textRefs.current[index] = el; }} className="flex-1 z-10">
                                    <span className="text-xs font-black tracking-[0.3em] uppercase text-zinc-400 mb-6 block">
                                        {item.subtitle}
                                    </span>
                                    <h2 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.85] uppercase">
                                        {item.title}
                                    </h2>
                                    <p className="text-xl text-zinc-500 max-w-sm leading-relaxed mb-12 font-medium">
                                        {item.description}
                                    </p>
                                    <Link href="/demo/sofa" className="inline-flex items-center gap-4 font-black group px-8 py-4 border-2 border-black rounded-full hover:bg-black hover:text-white transition-all duration-500 uppercase text-sm tracking-widest">
                                        <span>Explore</span>
                                        <div className="w-6 h-6 rounded-full flex items-center justify-center transition-transform group-hover:rotate-45">
                                            →
                                        </div>
                                    </Link>
                                </div>

                                {/* Large Image Container */}
                                <div className="flex-[1.5] relative h-[70vh] w-full group">
                                    <div className="relative w-full h-full overflow-hidden rounded-[60px] shadow-[0_50px_100px_rgba(0,0,0,0.1)] grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000">
                                        <div ref={el => { imageRefs.current[index] = el; }} className="relative w-full h-full scale-110">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                    {/* Abstract Number */}
                                    <span className="absolute -bottom-20 -right-20 text-[25vw] font-black text-zinc-50 opacity-50 -z-10 select-none leading-none pointer-events-none">
                                        0{index + 1}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
