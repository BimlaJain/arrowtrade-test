import React, { useEffect, useState } from "react";
import Image from "next/image";

const BackToTop = () => {
    // State for back-to-top
    const [scrollTop, setScrollToTop] = useState(false);
    // Smooth scroll to top
    const scrollHandler = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    // Update state if scrolled past 500px
    const setHendler = () => {
        setScrollToTop(window.scrollY > 500);
    };
    // Add scroll event listener
    useEffect(() => {
        window.addEventListener("scroll", setHendler);
    });

    return (
        <>
            {scrollTop && (
                <button
                    onClick={scrollHandler}
                    className="fixed right-2.5 bottom-2.5 max-lg:bottom-9 animate-bounce z-40 cursor-pointer border-2 border-sky-blue bg-black rounded-full p-2.5 2xl:p-3"
                >
                    <Image
                        className="size-6 max-xl:size-4 2xl:size-8 pointer-events-none brightness-0 invert hover:invert-0"
                        src="/assets/images/svg/back-to-top.svg"
                        alt="back to top" width={24} height={24}
                    />
                </button>
            )}
        </>
    );
};
export default BackToTop;
