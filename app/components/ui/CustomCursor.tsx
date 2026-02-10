"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;

        const moveCursor = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out"
            });
        };

        const handleMouseEnter = () => {
            gsap.to(cursor, {
                scale: 4,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(4px)",
                duration: 0.3
            });
        };

        const handleMouseLeave = () => {
            gsap.to(cursor, {
                scale: 1,
                backgroundColor: "white",
                backdropFilter: "blur(0px)",
                duration: 0.3
            });
        };

        window.addEventListener("mousemove", moveCursor);

        const links = document.querySelectorAll("a, button");
        links.forEach(link => {
            link.addEventListener("mouseenter", handleMouseEnter);
            link.addEventListener("mouseleave", handleMouseLeave);
        });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            links.forEach(link => {
                link.removeEventListener("mouseenter", handleMouseEnter);
                link.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full z-[10000] pointer-events-none mix-blend-difference -translate-x-1/2 -translate-y-1/2 hidden md:block"
        />
    );
}
