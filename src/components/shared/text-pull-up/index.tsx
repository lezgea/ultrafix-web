"use client";

import * as React from "react";
import classNames from "classnames";
import { motion, useInView } from "framer-motion";

export function TextPullUp({
    text,
    className = "",
}: {
    text: string;
    className?: string;
}) {
    // Split the text into words and then letters
    const words = text.split(" ");

    const pullupVariant = {
        initial: { y: 20, opacity: 0 },
        animate: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.05, // Adjust delay for each letter
            },
        }),
    };

    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <div className="flex justify-center flex-wrap">
            {words.map((word, wordIndex) => (
                <div key={wordIndex} className="flex"> {/* Space between words */}
                    {word.split("").map((letter, letterIndex) => (
                        <motion.span
                            key={`${wordIndex}-${letterIndex}`}
                            ref={ref}
                            variants={pullupVariant}
                            initial="initial"
                            animate={isInView ? "animate" : ""}
                            custom={wordIndex * word.length + letterIndex} // Ensure unique delay for each letter
                            className={classNames(className)}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </div>
            ))}
        </div>
    );
}
