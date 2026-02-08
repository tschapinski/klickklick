'use client';

import { useState, useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    StepId,
    FunnelAnswers,
    getStep,
    getNextStep,
    TOTAL_STEPS,
    Option
} from '@/lib/questions';
import { getRecommendedProducts } from '@/lib/recommendation';
import { QuestionCard } from './QuestionCard';
import ResultCard from './ResultCard';
import { ChevronLeft } from 'lucide-react';

interface FunnelState {
    currentStepId: StepId;
    answers: FunnelAnswers;
    history: StepId[];
    isTransitioning: boolean;
}

const initialState: FunnelState = {
    currentStepId: 'suggestive', // Start at Step 0
    answers: {},
    history: [],
    isTransitioning: false
};

const breathingAnimation = {
    scale: [1, 1.02, 1],
    opacity: [0.9, 1, 0.9],
    transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const
    }
};

export default function FunnelContainer() {
    const [state, setState] = useState<FunnelState>(initialState);

    // Broadcast height changes for Iframe resizing
    useEffect(() => {
        const sendHeight = () => {
            const height = document.body.scrollHeight;
            window.parent.postMessage({ type: 'resize', height }, '*');
        };

        // Send initial height
        sendHeight();

        // Send height on resize and mutation
        window.addEventListener('resize', sendHeight);
        const observer = new ResizeObserver(sendHeight);
        observer.observe(document.body);

        return () => {
            window.removeEventListener('resize', sendHeight);
            observer.disconnect();
        };
    }, [state.currentStepId, state.isTransitioning]);

    const handleAnswer = useCallback((option: Option) => {
        const step = getStep(state.currentStepId);
        if (!step) return;

        const optionId = option.id;

        // 1. Update Answers
        const newAnswers = { ...state.answers };

        // Handle specific logic based on current step
        if (state.currentStepId === 'suggestive') {
            if (option.tags?.commitment) {
                newAnswers.commitment = option.tags.commitment;
            }
        } else if (state.currentStepId === 'format') {
            newAnswers.format = optionId as 'audio' | 'video';
        } else if (state.currentStepId === 'audio_focus') {
            if (option.tags?.deepDive) {
                newAnswers.deepDive = option.tags.deepDive;
            }
        } else if (state.currentStepId === 'audio_linderung' || state.currentStepId === 'audio_change') {
            newAnswers.specific = optionId;
        } else if (state.currentStepId === 'video_focus') {
            // For video, focus might dictate category or specific path
            if (optionId === 'v_weight') newAnswers.category = 'weight';
            // For direct recommendations (The Key, Heile Dich), we might set specific here or let recommendation logic handle it
            if (optionId === 'the_key' || optionId === 'heile_dich') newAnswers.specific = optionId;
        } else {
            // Catch-all for final specific steps
            newAnswers.specific = optionId;
        }

        // 2. Determine Next Step
        const nextStepId = getNextStep(state.currentStepId, optionId);

        // 3. Transition
        setState(prev => ({ ...prev, isTransitioning: true }));

        setTimeout(() => {
            setState(prev => ({
                currentStepId: nextStepId,
                answers: newAnswers,
                history: [...prev.history, prev.currentStepId],
                isTransitioning: false
            }));
        }, 400); // 0.4s delay for smooth transition

    }, [state]);

    const handleBack = useCallback(() => {
        if (state.history.length === 0) return;

        const newHistory = [...state.history];
        const prevStepId = newHistory.pop();

        setState(prev => ({
            ...prev,
            currentStepId: prevStepId!,
            history: newHistory,
            isTransitioning: false
        }));
    }, [state.history]);

    const handleReset = useCallback(() => {
        setState(initialState);
    }, []);

    // Current Step Data
    let currentStep = getStep(state.currentStepId);

    // Dynamic Text Adjustment for Step 1 based on Step 0
    if (state.currentStepId === 'format' && state.answers.commitment) {
        // Clone step to avoid mutating global object
        currentStep = { ...currentStep };
        if (state.answers.commitment === 'BEREIT') {
            currentStep.subtext = "Du hast den ersten Schritt gewagt. Jetzt wähle deinen Weg.";
        } else {
            currentStep.subtext = "Lass dich überraschen, was möglich ist.";
        }
    }

    // Result View
    if (state.currentStepId === 'result') {
        const products = getRecommendedProducts(state.answers);
        return <ResultCard products={products} answers={state.answers} onReset={handleReset} />;
    }

    // Progress Calculation
    // Step 0 is 0%, Step 1 is 25%, etc.
    const currentStepNum = currentStep ? currentStep.stepNumber : 0;
    const progress = (currentStepNum / TOTAL_STEPS) * 100;

    return (
        <div className="w-full max-w-2xl mx-auto flex flex-col min-h-[600px]">
            {/* Background Breathing Effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-radial from-[var(--tuerkis)]/5 to-transparent pointer-events-none"
                animate={breathingAnimation}
            />

            {/* Header / Nav */}
            <div className="flex items-center justify-between mb-8 px-4 relative z-10">
                {state.history.length > 0 ? (
                    <button
                        onClick={handleBack}
                        className="text-[var(--darker)]/60 hover:text-[var(--darker)] flex items-center gap-2 transition-colors text-sm font-medium"
                    >
                        <ChevronLeft className="w-4 h-4" />
                        Zurück
                    </button>
                ) : (
                    <div />
                )}

                {/* Hide step count on Step 0 for more immersion */}
                {/* Hide step count */}
                <div />

                <div /> {/* Spacer */}
            </div>

            {/* Progress Bar (Hidden on Step 0) */}
            {state.currentStepId !== 'suggestive' && (
                <div className="w-full bg-[var(--grey)]/30 h-1 mb-8 rounded-full overflow-hidden relative z-10 mx-4 max-w-[calc(100%-2rem)]">
                    <motion.div
                        className="h-full bg-gradient-to-r from-[var(--gold)] to-[var(--tuerkis)]"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                </div>
            )}

            {/* Content Area */}
            <div className="flex-1 relative z-10">
                <AnimatePresence mode="wait">
                    {currentStep && (
                        <motion.div
                            key={currentStep.id}
                            initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, y: -10, filter: 'blur(5px)' }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="w-full"
                        >
                            <QuestionCard
                                step={currentStep}
                                onSelect={handleAnswer}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
