'use client';

import { motion } from 'framer-motion';
import { Product } from '@/lib/products';
import { ExternalLink, Check, Star, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

import { FunnelAnswers } from '@/lib/questions';

interface ResultCardProps {
    products: Product[];
    answers: FunnelAnswers; // Add answers prop
    onReset: () => void;
}

export default function ResultCard({ products, answers, onReset }: ResultCardProps) {
    // Dynamic Header Logic
    const commitment = answers.commitment;
    const headerTitle = commitment === 'BEREIT'
        ? "Du bist bereit für Veränderung"
        : "Deine Entdeckungsreise beginnt hier";

    const headerSub = commitment === 'BEREIT'
        ? "Du hast gesagt, dass dein Körper dir Botschaften sendet. Hier ist dein erster Schritt."
        : "Du wolltest herausfinden, was möglich ist – hier ist deine Antwort.";

    return (
        <div className="w-full max-w-5xl mx-auto px-4 pb-20">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
            >
                <h2 className="text-[var(--color-green)] text-sm font-sans font-bold tracking-[0.2em] uppercase mb-4">
                    DEINE PERSÖNLICHE EMPFEHLUNG
                </h2>
                <h1 className="font-serif text-3xl md:text-5xl text-[var(--color-darker)] mb-6">
                    {headerTitle}
                </h1>
                <p className="text-[var(--color-text)] max-w-2xl mx-auto leading-relaxed opacity-80">
                    {headerSub}
                </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-8 items-start">

                {/* PRIMARY RECOMMENDATION (70%) */}
                <div className="w-full lg:w-[70%] space-y-6">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[var(--color-beige)] flex flex-col md:flex-row"
                        >
                            {/* Product Image */}
                            <div className="w-full md:w-2/5 h-64 md:h-auto relative bg-[var(--color-beige)]">
                                {product.image && (
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        className="object-contain p-4"
                                    />
                                )}
                                <div className="absolute top-4 left-4 bg-[var(--gold)] text-[var(--color-darker)] px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm">
                                    Empfehlung
                                </div>
                            </div>

                            {/* Product Details */}
                            <div className="w-full md:w-3/5 p-8 flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-serif text-2xl text-[var(--color-darker)] leading-tight">
                                            {product.title}
                                        </h3>
                                    </div>
                                    <p className="text-[var(--color-green)] font-medium mb-4">{product.category ? product.category.toUpperCase() : 'HYPNOSE'}</p>
                                    <p className="text-[var(--color-text)] opacity-80 mb-6 leading-relaxed text-sm">
                                        {product.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        <div className="flex items-center gap-1.5 text-xs text-[var(--color-text)] opacity-70 bg-[var(--color-beige)]/30 px-3 py-1.5 rounded-full">
                                            <Star className="w-3 h-3 text-[var(--gold)]" /> Sofort verfügbar
                                        </div>
                                        <div className="flex items-center gap-1.5 text-xs text-[var(--color-text)] opacity-70 bg-[var(--color-beige)]/30 px-3 py-1.5 rounded-full">
                                            <ShieldCheck className="w-3 h-3 text-[var(--gold)]" /> Sicher & Bewährt
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-6 border-t border-[var(--color-beige)]">
                                    <div className="text-2xl font-serif text-[var(--color-darker)]">
                                        {product.price}
                                    </div>
                                    <a
                                        href={product.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-[var(--color-green)] text-white px-8 py-3 rounded-full hover:bg-[var(--color-darker)] transition-all flex items-center gap-2 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                                    >
                                        Jetzt starten
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Trust Elements */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                        <div className="bg-white/50 p-6 rounded-xl border border-[var(--color-beige)] text-center">
                            <h4 className="font-serif text-[var(--color-darker)] text-lg mb-1">66+ Hypnosen</h4>
                            <p className="text-xs text-[var(--color-text)] opacity-70">Große Auswahl</p>
                        </div>
                        <div className="bg-white/50 p-6 rounded-xl border border-[var(--color-beige)] text-center">
                            <h4 className="font-serif text-[var(--color-darker)] text-lg mb-1">Top Bewertung</h4>
                            <p className="text-xs text-[var(--color-text)] opacity-70">Zufriedene Kunden</p>
                        </div>
                        <div className="bg-white/50 p-6 rounded-xl border border-[var(--color-beige)] text-center">
                            <h4 className="font-serif text-[var(--color-darker)] text-lg mb-1">Expertenwissen</h4>
                            <p className="text-xs text-[var(--color-text)] opacity-70">Von Katrin van Sol</p>
                        </div>
                    </div>
                </div>

                {/* MEMBERSHIP CROSS-SELL (30%) */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="w-full lg:w-[30%] bg-[#F0F7F7] rounded-2xl border border-[var(--color-green)]/20 p-8 sticky top-8"
                >
                    <div className="text-center mb-6">
                        <div className="inline-block bg-[var(--color-green)]/10 text-[var(--color-green)] text-xs font-bold px-3 py-1 rounded-full mb-4">
                            ERGÄNZEND DAZU
                        </div>
                        <h3 className="font-serif text-2xl text-[var(--color-darker)] mb-2">
                            VANSOL Inner Circle
                        </h3>
                        <p className="text-sm text-[var(--color-text)] opacity-80 leading-relaxed">
                            Monatliche Mitgliedschaft für deine kontinuierliche Transformation
                        </p>
                    </div>

                    <ul className="space-y-4 mb-8">
                        <li className="flex items-start gap-3">
                            <div className="mt-1 bg-white p-1 rounded-full text-[var(--color-green)] shadow-sm">
                                <Check className="w-3 h-3" />
                            </div>
                            <span className="text-sm text-[var(--color-darker)]">Exklusive Live-Sessions</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1 bg-white p-1 rounded-full text-[var(--color-green)] shadow-sm">
                                <Check className="w-3 h-3" />
                            </div>
                            <span className="text-sm text-[var(--color-darker)]">Zugang zur Community</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1 bg-white p-1 rounded-full text-[var(--color-green)] shadow-sm">
                                <Check className="w-3 h-3" />
                            </div>
                            <span className="text-sm text-[var(--color-darker)]">Monatlich neue Inhalte</span>
                        </li>
                    </ul>

                    <div className="text-center">
                        <div className="text-xl font-serif text-[var(--color-darker)] mb-4">
                            Monatlich
                        </div>
                        <a
                            href="https://myablefy.com/s/katrin-van-sol/inner-circle"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full border-2 border-[var(--color-green)] text-[var(--color-green)] hover:bg-[var(--color-green)] hover:text-white py-3 rounded-full transition-all font-medium text-sm"
                        >
                            Mehr erfahren
                        </a>
                    </div>
                </motion.div>
            </div>

            <div className="text-center mt-12">
                <button
                    onClick={onReset}
                    className="text-[var(--color-text)] opacity-50 hover:opacity-100 text-sm hover:underline transition-all"
                >
                    Suche neu starten
                </button>
            </div>
        </div>
    );
}

