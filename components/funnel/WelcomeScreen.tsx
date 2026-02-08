'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Step } from '@/lib/questions';

interface WelcomeScreenProps {
    step: Step;
    onStart: () => void;
}

export function WelcomeScreen({ step, onStart }: WelcomeScreenProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center max-w-3xl mx-auto"
        >
            {/* Decorative Line */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="w-16 h-[2px] bg-[var(--color-green)] mb-8"
            />

            {/* Label - Tan Aegean style */}
            <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="label-vansol text-[var(--color-green)] mb-6"
            >
                Finde deine Transformation
            </motion.p>

            {/* Headline - Nicky Laatz Very Vogue Display */}
            <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="font-script text-4xl md:text-5xl lg:text-6xl text-[var(--color-darker)] mb-6 leading-tight italic"
            >
                {step.question}
            </motion.h1>

            {/* Subline - DM Sans */}
            <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="font-sans text-lg md:text-xl text-[var(--color-darker)] max-w-lg mb-6 leading-relaxed opacity-80"
            >
                {step.subtext}
            </motion.p>

            {/* Therapeutic Hint - italic slogan style */}
            {step.hint && (
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="slogan-vansol text-[var(--color-green)] max-w-md mb-12"
                >
                    "{step.hint}"
                </motion.p>
            )}

            {/* CTA Button - Much more prominent */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
            >
                <button
                    onClick={onStart}
                    className="group bg-[var(--color-green)] hover:bg-[var(--color-darker)] text-white px-12 py-5 text-base font-sans font-medium tracking-wider uppercase transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl"
                >
                    Jetzt starten
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
            </motion.div>

            {/* Subtle Footer - Script signature style */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="mt-16 font-script text-2xl text-[var(--color-green)] italic"
            >
                ~ Katrin van Sol ~
            </motion.p>
        </motion.div>
    );
}
