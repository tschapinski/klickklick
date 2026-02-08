'use client';

import { motion } from 'framer-motion';
import { Step, Option } from '@/lib/questions';
import {
    ChevronRight, ChevronLeft, Heart, Scale, Sparkles,
    Sprout, Leaf, TreeDeciduous, Sun, CloudSun, Cloud, CloudRain, CloudLightning,
    Wind, HeartPulse, Headphones, Users, Activity, Brain, Flower2,
    Utensils, Shield, Moon, CircleSlash, ArrowRight, Flame, Droplet,
    Zap, Target, BookOpen, Feather, Star, Battery, Bandage, Baby, Play, RefreshCw
} from 'lucide-react';

// Icon mapping for dynamic rendering - extended for all health categories
const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    Heart, Scale, Sparkles, Sprout, Leaf, TreeDeciduous,
    Sun, CloudSun, Cloud, CloudRain, CloudLightning,
    Wind, HeartPulse, Headphones, Users, Activity, Brain, Flower2,
    Utensils, Shield, Moon, CircleSlash, ArrowRight, Flame, Droplet,
    Zap, Target, BookOpen, Feather, Star, Battery, Bandage, Baby, Play, RefreshCw
};

interface QuestionCardProps {
    step: Step;
    onSelect: (option: Option) => void;
    onBack?: () => void;
}

export function QuestionCard({ step, onSelect, onBack }: QuestionCardProps) {
    // stepNum and totalSteps removed as per user request to hide steps

    const renderIcon = (iconName?: string) => {
        if (!iconName) return null;
        const IconComponent = iconMap[iconName];
        if (!IconComponent) return null;
        return <IconComponent className="w-6 h-6 text-[var(--color-green)] group-hover:text-white transition-colors" />;
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="w-full max-w-2xl mx-auto px-4"
        >
            {/* Progress Indicator removed as per user request */}

            {/* Question Card - VANSOL Card Style */}
            <div className="bg-white border border-[var(--color-beige)] p-8 md:p-12">
                {/* Back Button */}
                {onBack && (
                    <button
                        onClick={onBack}
                        className="flex items-center gap-1 text-sm text-[var(--color-green)] hover:text-[var(--color-darker)] transition-colors mb-6 uppercase tracking-wide"
                    >
                        <ChevronLeft className="w-4 h-4" />
                        Zurück
                    </button>
                )}

                {/* Question Title - Playfair Display */}
                <h2 className="font-serif text-2xl md:text-3xl text-[var(--color-darker)] text-center mb-4 leading-snug">
                    {step.question}
                </h2>

                {step.subtext && (
                    <p className="text-center text-[var(--color-darker)] opacity-70 font-sans mb-4 leading-relaxed">
                        {step.subtext}
                    </p>
                )}

                {/* Therapeutic Hint - slogan style */}
                {step.hint && (
                    <p className="text-center text-base text-[var(--color-green)] font-script italic mb-8">
                        {step.hint}
                    </p>
                )}

                {/* Options - VANSOL option styling with dark green hover */}
                <div className="space-y-3 mt-8">
                    {step.options.map((option, index) => (
                        <motion.button
                            key={option.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.08, duration: 0.3 }}
                            onClick={() => onSelect(option)}
                            className="group w-full"
                        >
                            {/* Regular Choice - VANSOL option style with dark green hover */}
                            <div className="flex items-center justify-between p-5 bg-[var(--color-light-gray)] hover:bg-[var(--color-green)] border border-transparent hover:border-[var(--color-green)] transition-all duration-300">
                                <div className="flex items-start gap-4">
                                    <div className="mt-0.5">
                                        {renderIcon(option.icon)}
                                    </div>
                                    <div className="text-left">
                                        <p className="font-sans font-medium text-[var(--color-darker)] group-hover:text-white transition-colors">
                                            {option.label}
                                        </p>
                                        {option.description && (
                                            <p className="text-sm text-[var(--color-darker)] opacity-60 group-hover:text-white group-hover:opacity-80 transition-colors mt-1">
                                                {option.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <ChevronRight className="w-5 h-5 text-[var(--color-green)] group-hover:text-white group-hover:translate-x-1 transition-all flex-shrink-0" />
                            </div>
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Encouragement Footer - slogan style */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="text-center mt-8 text-sm text-[var(--color-green)] font-script italic"
            >
                Nimm dir die Zeit, die du brauchst.
            </motion.p>
        </motion.div>
    );
}
