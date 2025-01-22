'use client';

import { motion, useInView } from 'framer-motion';
import * as React from 'react';


export const TextBlurIn = ({ children }: { children: React.ReactNode }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <motion.div
            ref={ref}
            initial={{ filter: 'blur(20px)', opacity: 0 }}
            animate={isInView ? { filter: 'blur(0px)', opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};
