"use client"

import gsap from "gsap"
import { useEffect } from "react"

const CustomCursor = () => {
    useEffect(() => {
        const cursorCustom = document.querySelector('.cursorCustom') as HTMLDivElement | null;
        const cursorFollower = document.querySelector('.follower') as HTMLDivElement | null;

        const moveCursor = (e: MouseEvent): void => {
            gsap.to(cursorFollower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
                ease: "power2.out"
            });

            gsap.to(cursorCustom, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1
            });
        };

        gsap.set(cursorFollower, {
            xPercent: -50,
            yPercent: -50
        });

        gsap.set(cursorCustom, {
            xPercent: -50,
            yPercent: -50
        });

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    return (
        <div className="max-lg:hidden z-1190">
            <div className="follower w-[30px] h-[30px] rounded-full bg-[transparent] border-yellow-800 border-2 border-solid fixed z-1250 mix-blend-difference pointer-events-none"></div>
            <div className="cursorCustom w-[15px] h-[15px] rounded-full bg-yellow-300 fixed z-1250 mix-blend-difference pointer-events-none"></div>
        </div>
    );
}

export default CustomCursor;