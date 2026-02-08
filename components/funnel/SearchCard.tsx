'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight, ChevronLeft } from 'lucide-react';

interface SearchCardProps {
    question: string;
    subtext?: string;
    hint?: string;
    onSearch: (query: string) => void;
    onBack?: () => void;
    stepNumber: number;
    totalSteps: number;
}

export function SearchCard({
    question,
    subtext,
    hint,
    onSearch,
    onBack,
    stepNumber,
    totalSteps
}: SearchCardProps) {
    const [query, setQuery] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query.trim());
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full max-w-xl mx-auto px-4"
        >
            {/* Progress */}
            <div className="flex justify-center gap-2 mb-8">
                {Array.from({ length: totalSteps }).map((_, i) => (
                    <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all ${i <= stepNumber
                                ? 'bg-[var(--color-green)]'
                                : 'bg-[var(--color-beige)]'
                            }`}
                    />
                ))}
            </div>

            {/* Header */}
            <div className="text-center mb-8">
                <h2 className="font-serif text-2xl md:text-3xl text-[var(--color-darker)] mb-3">
                    {question}
                </h2>
                {subtext && (
                    <p className="text-[var(--color-text)] opacity-80 leading-relaxed">
                        {subtext}
                    </p>
                )}
            </div>

            {/* Search Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text)] opacity-40" />
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder={hint || "Was beschäftigt dich?"}
                        className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-[var(--color-beige)] 
                                   focus:border-[var(--color-green)] focus:outline-none
                                   bg-white text-[var(--color-darker)] text-lg
                                   placeholder:text-[var(--color-text)] placeholder:opacity-50
                                   transition-all"
                        autoFocus
                    />
                </div>

                <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={!query.trim()}
                    className="w-full bg-[var(--color-green)] text-white py-4 rounded-xl
                               hover:bg-[var(--color-darker)] transition-all
                               flex items-center justify-center gap-2 font-medium
                               disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Hypnose finden
                    <ArrowRight className="w-5 h-5" />
                </motion.button>
            </form>

            {/* Back Button */}
            {onBack && (
                <button
                    onClick={onBack}
                    className="mt-6 flex items-center gap-2 text-[var(--color-text)] opacity-60 
                               hover:opacity-100 transition-opacity mx-auto"
                >
                    <ChevronLeft className="w-4 h-4" />
                    Zurück
                </button>
            )}

            {/* Suggestions */}
            <div className="mt-8 text-center">
                <p className="text-sm text-[var(--color-text)] opacity-50 mb-3">
                    Häufig gesucht:
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                    {['Schlaf', 'Stress', 'Angst', 'Schmerzen', 'Abnehmen'].map((term) => (
                        <button
                            key={term}
                            onClick={() => {
                                setQuery(term);
                                onSearch(term);
                            }}
                            className="px-3 py-1.5 rounded-full bg-[var(--color-beige)]/50 
                                       text-[var(--color-text)] text-sm
                                       hover:bg-[var(--color-green)]/10 hover:text-[var(--color-green)]
                                       transition-all"
                        >
                            {term}
                        </button>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
