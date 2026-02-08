'use client';

import { motion } from 'framer-motion';
import { Product } from '@/lib/products';
import { ExternalLink, Check, Star, ShieldCheck, ChevronRight } from 'lucide-react';
import Image from 'next/image';

import { FunnelAnswers } from '@/lib/questions';

interface ResultCardProps {
    products: Product[];
    answers: FunnelAnswers;
    onReset: () => void;
}

export default function ResultCard({ products, answers, onReset }: ResultCardProps) {
    // Dynamic Header Logic
    const commitment = answers.commitment;
    const headerTitle = commitment === 'BEREIT'
        ? "Du bist bereit – und ich bin bei dir"
        : "Hier beginnt deine Reise zu dir selbst";

    const headerSub = commitment === 'BEREIT'
        ? "Du hast gespürt, dass da mehr ist. Hier ist der nächste Schritt auf deinem Weg."
        : "Du wolltest erkunden, was möglich ist – lass dich überraschen.";

    // Split products: Primary (first) vs Secondary (rest)
    const primaryProduct = products[0];
    const secondaryProducts = products.slice(1, 4); // Max 3 secondary

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
                <div className="w-full lg:w-[70%] space-y-8">
                    {/* Main Product Card */}
                    {primaryProduct && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[var(--color-beige)] flex flex-col md:flex-row"
                        >
                            {/* Product Image */}
                            <div className="w-full md:w-2/5 h-64 md:h-auto relative bg-[var(--color-beige)]">
                                {primaryProduct.image && (
                                    <Image
                                        src={primaryProduct.image}
                                        alt={primaryProduct.title}
                                        fill
                                        className="object-contain p-4"
                                    />
                                )}
                            </div>

                            {/* Product Details */}
                            <div className="w-full md:w-3/5 p-8 flex flex-col justify-between">
                                <div>
                                    <h3 className="font-serif text-2xl text-[var(--color-darker)] leading-tight mb-2">
                                        {primaryProduct.title}
                                    </h3>
                                    <p className="text-[var(--color-green)] font-medium mb-4">
                                        {primaryProduct.type === 'workshop' ? 'WORKSHOP' : 'AUDIO-HYPNOSE'}
                                    </p>
                                    <p className="text-[var(--color-text)] opacity-80 mb-6 leading-relaxed text-sm">
                                        {primaryProduct.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        <div className="flex items-center gap-1.5 text-xs text-[var(--color-text)] opacity-70 bg-[var(--color-beige)]/30 px-3 py-1.5 rounded-full">
                                            <Star className="w-3 h-3 text-[var(--gold)]" /> Sofort verfügbar
                                        </div>
                                        <div className="flex items-center gap-1.5 text-xs text-[var(--color-text)] opacity-70 bg-[var(--color-beige)]/30 px-3 py-1.5 rounded-full">
                                            <ShieldCheck className="w-3 h-3 text-[var(--gold)]" /> Therapeutisch bewährt
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-6 border-t border-[var(--color-beige)]">
                                    <div className="text-2xl font-serif text-[var(--color-darker)]">
                                        {primaryProduct.price}
                                    </div>
                                    <a
                                        href={primaryProduct.link}
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
                    )}

                    {/* Secondary Recommendations */}
                    {secondaryProducts.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3 className="font-serif text-xl text-[var(--color-darker)] mb-4">
                                Weitere Empfehlungen für dich
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {secondaryProducts.map((product, index) => (
                                    <motion.a
                                        key={product.id}
                                        href={product.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                        className="group bg-white rounded-xl p-4 border border-[var(--color-beige)] hover:border-[var(--color-green)] hover:shadow-md transition-all"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-lg bg-[var(--color-beige)] relative flex-shrink-0 overflow-hidden">
                                                {product.image && (
                                                    <Image
                                                        src={product.image}
                                                        alt={product.title}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                )}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-medium text-[var(--color-darker)] text-sm truncate group-hover:text-[var(--color-green)] transition-colors">
                                                    {product.title.replace('VANSOL Hypnose ', '')}
                                                </h4>
                                                <p className="text-xs text-[var(--color-text)] opacity-60">
                                                    {product.price}
                                                </p>
                                            </div>
                                            <ChevronRight className="w-4 h-4 text-[var(--color-green)] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Trust Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                        <div className="bg-[var(--color-beige)]/50 p-5 rounded-xl text-center border border-[var(--color-beige)]">
                            <h4 className="font-serif text-2xl text-[var(--color-darker)] mb-1">+1.200</h4>
                            <p className="text-xs text-[var(--color-text)] opacity-70 uppercase tracking-wide">Behandelte Klienten</p>
                        </div>
                        <div className="bg-[var(--color-beige)]/50 p-5 rounded-xl text-center border border-[var(--color-beige)]">
                            <h4 className="font-serif text-2xl text-[var(--color-darker)] mb-1">+300</h4>
                            <p className="text-xs text-[var(--color-text)] opacity-70 uppercase tracking-wide">Verfügbare Hypnosen</p>
                        </div>
                        <div className="bg-[var(--color-beige)]/50 p-5 rounded-xl text-center border border-[var(--color-beige)]">
                            <h4 className="font-serif text-2xl text-[var(--color-darker)] mb-1">+4.000</h4>
                            <p className="text-xs text-[var(--color-text)] opacity-70 uppercase tracking-wide">Verkaufte Workshops</p>
                        </div>
                        <div className="bg-[var(--color-beige)]/50 p-5 rounded-xl text-center border border-[var(--color-beige)]">
                            <h4 className="font-serif text-2xl text-[var(--color-darker)] mb-1">+100</h4>
                            <p className="text-xs text-[var(--color-text)] opacity-70 uppercase tracking-wide">Ausgebildete Coaches</p>
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

                        {/* Inner Circle Cover Image */}
                        <div className="w-full h-40 mb-4 rounded-xl overflow-hidden shadow-md">
                            <img
                                src="/Produktcover/Membership_Inner_Circle.jpg"
                                alt="VANSOL Inner Circle"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <h3 className="font-serif text-2xl text-[var(--color-darker)] mb-2">
                            VANSOL Inner Circle
                        </h3>
                        <p className="text-sm text-[var(--color-text)] opacity-80 leading-relaxed">
                            Monatliche Begleitung für deine kontinuierliche Transformation
                        </p>
                    </div>

                    <ul className="space-y-3 mb-8 text-left">
                        <li className="flex items-start gap-2">
                            <div className="mt-0.5 bg-white p-1 rounded-full text-[var(--color-green)] shadow-sm flex-shrink-0">
                                <Check className="w-3 h-3" />
                            </div>
                            <span className="text-xs text-[var(--color-darker)] leading-tight">1:1 Live-Behandlung – ohne Warteliste</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <div className="mt-0.5 bg-white p-1 rounded-full text-[var(--color-green)] shadow-sm flex-shrink-0">
                                <Check className="w-3 h-3" />
                            </div>
                            <span className="text-xs text-[var(--color-darker)] leading-tight">Auch für deine Liebsten nutzbar</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <div className="mt-0.5 bg-white p-1 rounded-full text-[var(--color-green)] shadow-sm flex-shrink-0">
                                <Check className="w-3 h-3" />
                            </div>
                            <span className="text-xs text-[var(--color-darker)] leading-tight">4× jährlich Community-Live-Events</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <div className="mt-0.5 bg-white p-1 rounded-full text-[var(--color-green)] shadow-sm flex-shrink-0">
                                <Check className="w-3 h-3" />
                            </div>
                            <span className="text-xs text-[var(--color-darker)] leading-tight">15% Rabatt auf alle VanSol-Angebote</span>
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
                    className="bg-white border-2 border-[var(--color-green)] text-[var(--color-green)] hover:bg-[var(--color-green)] hover:text-white px-8 py-3 rounded-full transition-all font-medium shadow-md hover:shadow-lg"
                >
                    Neue Suche starten
                </button>
            </div>
        </div>
    );
}
