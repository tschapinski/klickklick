import Image from 'next/image';
import Link from 'next/link';

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[var(--color-beige)]">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center">
                <Link href="https://www.vansol.de" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/images/vansol-logo.svg"
                        alt="VANSOL - Katrin van Sol"
                        width={140}
                        height={40}
                        className="h-8 w-auto"
                        priority
                    />
                </Link>
            </div>
        </header>
    );
}
