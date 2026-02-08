// Optimierter Funnel – Ohne Emojis, Max 6 Optionen, Such-Fallback

export type StepId =
    | 'suggestive'      // STEP 0: Emotional Gateway
    | 'format'          // STEP 1: Format-Selektor
    | 'audio_category'  // STEP 2A: Bedarfs-Cluster (Audio)
    | 'audio_selbstliebe' // STEP 3A: Thema-Selektor
    | 'audio_heilung'
    | 'audio_ernaehrung'
    | 'audio_krankheit'   // STEP 3A-K: Krankheits-Region
    | 'audio_aengste'
    | 'audio_symptom_atem'      // STEP 4: Symptom-Fokus
    | 'audio_symptom_schmerz'
    | 'audio_symptom_verdauung'
    | 'audio_symptom_haut'
    | 'audio_symptom_beweg'
    | 'audio_symptom_stoff'
    | 'audio_symptom_frau'
    | 'audio_symptom_sonst'
    | 'audio_search'    // STEP 5: Such-Fallback
    | 'video_focus'     // STEP 2B: Lebensbereich (Video)
    | 'video_weight'    // STEP 3B: Gewichts-Klarheit
    | 'result';

export interface OptionMetadata {
    commitmentLevel?: 'high' | 'medium';
    nextContext?: 'mutig' | 'offen';
    format?: 'audio' | 'video';
    product?: string;
    region?: string;
}

export interface Option {
    id: string;
    label: string;
    sublabel?: string;
    description?: string;
    icon?: string;
    nextStep?: StepId;
    metadata?: OptionMetadata;
    tags?: {
        commitment?: 'BEREIT' | 'NEUGIERIG';
        deepDive?: 'LINDERUNG' | 'VERAENDERUNG';
    };
}

export interface Step {
    id: StepId;
    stepNumber: number;
    type?: 'commitment' | 'format-selector' | 'category-cluster' | 'topic-selector' | 'body-region' | 'symptom-selector' | 'weight-goal' | 'search' | 'result';
    question: string;
    subtext?: string;
    hint?: string;
    options: Option[];
    isSearchStep?: boolean;  // Flag für Such-Fallback
    getContextMessage?: (commitmentLevel: 'BEREIT' | 'NEUGIERIG') => string;
}

export interface FunnelAnswers {
    commitment?: 'BEREIT' | 'NEUGIERIG';
    format?: 'audio' | 'video';
    category?: 'selbstliebe' | 'heilung_allgemein' | 'gesunde_ernaehrung' | 'krankheiten' | 'aengste';
    region?: string;
    specific?: string;
    symptom?: string;
    searchQuery?: string;  // Für Such-Fallback
}

export const TOTAL_STEPS = 5;

// Kontextabhängige Nachrichten für Step 1
export function getContextMessage(commitment: 'BEREIT' | 'NEUGIERIG'): string {
    if (commitment === 'BEREIT') {
        return "Gut. Mut ist der erste Schritt zur Heilung.";
    }
    return "Neugier ist der erste Schritt zur Veränderung.";
}

// Personalisierte Ergebnis-Nachrichten
export function getResultMessage(commitment: 'BEREIT' | 'NEUGIERIG', productName: string): string {
    if (commitment === 'BEREIT') {
        return `Du hast den ersten Schritt gewagt. Die "${productName}" wird dich genau dort abholen, wo du stehst.`;
    }
    return `Lass dich überraschen. Die "${productName}" könnte der Schlüssel sein, den du suchst.`;
}

export const steps: Record<StepId, Step> = {
    // ═══════════════════════════════════════════════════════════════
    // STEP 0: EMOTIONAL GATEWAY (Micro-Commitment)
    // ═══════════════════════════════════════════════════════════════
    suggestive: {
        id: 'suggestive',
        stepNumber: 0,
        type: 'commitment',
        question: "Dein Körper flüstert. Bist du bereit zuzuhören?",
        subtext: "Nimm dir einen Moment. Spüre in dich hinein.",
        options: [
            {
                id: 'yes_ready',
                label: "Ich bin bereit",
                sublabel: "Es ist Zeit für mich.",
                description: "Ich spüre, dass da mehr möglich ist.",
                icon: 'Heart',
                nextStep: 'format',
                metadata: { commitmentLevel: 'high', nextContext: 'mutig' },
                tags: { commitment: 'BEREIT' }
            },
            {
                id: 'yes_curious',
                label: "Ich bin neugierig",
                sublabel: "Zeig mir, was möglich ist.",
                description: "Ich möchte erstmal erkunden.",
                icon: 'Sparkles',
                nextStep: 'format',
                metadata: { commitmentLevel: 'medium', nextContext: 'offen' },
                tags: { commitment: 'NEUGIERIG' }
            }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // STEP 1: FORMAT-SELEKTOR
    // ═══════════════════════════════════════════════════════════════
    format: {
        id: 'format',
        stepNumber: 1,
        type: 'format-selector',
        question: "Wie möchtest du dich unterstützen lassen?",
        subtext: "Beides führt dich zu dir selbst – nur auf unterschiedlichen Wegen.",
        options: [
            {
                id: 'audio',
                label: 'Audio-Hypnose',
                sublabel: 'Sanfte, tiefe Transformation',
                description: 'Höre bei geschlossenen Augen und lass die Worte wirken.',
                icon: 'Headphones',
                nextStep: 'audio_category',
                metadata: { format: 'audio' }
            },
            {
                id: 'video',
                label: 'Video-Workshop',
                sublabel: 'Intensive, strukturierte Begleitung',
                description: 'Ein intensiver Workshop für nachhaltige Veränderung.',
                icon: 'Play',
                nextStep: 'video_focus',
                metadata: { format: 'video' }
            }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // STEP 2A: BEDARFS-CLUSTER (Audio) – Max 6 Optionen
    // ═══════════════════════════════════════════════════════════════
    audio_category: {
        id: 'audio_category',
        stepNumber: 2,
        type: 'category-cluster',
        question: "Welcher Bereich ruft nach Heilung?",
        subtext: "Wähle intuitiv, was sich jetzt richtig anfühlt.",
        options: [
            { id: 'selbstliebe', label: 'Selbstliebe & Selbstwert', sublabel: 'Mich selbst wieder lieben und annehmen', icon: 'Heart', nextStep: 'audio_selbstliebe' },
            { id: 'heilung_allgemein', label: 'Heilung & Balance', sublabel: 'Ruhe und allgemeine Heilung für meine Seele', icon: 'Sparkles', nextStep: 'audio_heilung' },
            { id: 'gesunde_ernaehrung', label: 'Gesunde Ernährung', sublabel: 'Essverhalten und Verhältnis zum Körper heilen', icon: 'Apple', nextStep: 'audio_ernaehrung' },
            { id: 'krankheiten', label: 'Körperliche Beschwerden', sublabel: 'Mein Körper sendet mir Signale', icon: 'Activity', nextStep: 'audio_krankheit' },
            { id: 'aengste', label: 'Ängste & Blockaden', sublabel: 'Mich von Ängsten befreien', icon: 'Feather', nextStep: 'audio_aengste' }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // STEP 3A: THEMA-SELEKTOR (je Kategorie) – Max 6 Optionen
    // ═══════════════════════════════════════════════════════════════
    audio_selbstliebe: {
        id: 'audio_selbstliebe',
        stepNumber: 3,
        type: 'topic-selector',
        question: "Was möchtest du in dir stärken?",
        options: [
            { id: '0062_Selbstliebe', label: 'Selbstliebe', sublabel: 'Mich selbst annehmen, wie ich bin', icon: 'Heart', nextStep: 'result' },
            { id: 'selbstvertrauen', label: 'Selbstvertrauen', sublabel: 'Mut und Vertrauen in meine Fähigkeiten', icon: 'Zap', nextStep: 'result' },
            { id: 'inneres_kind', label: 'Inneres Kind', sublabel: 'Verbindung und Heilung alter Wunden', icon: 'Smile', nextStep: 'result' },
            { id: 'vertrauen', label: 'Urvertrauen', sublabel: 'Tiefes Vertrauen in das Leben', icon: 'Anchor', nextStep: 'result' },
            { id: 'zukunfts_ich', label: 'Mein Zukunfts-Ich', sublabel: 'Verbindung mit meiner besten Version', icon: 'Star', nextStep: 'result' }
        ]
    },
    audio_heilung: {
        id: 'audio_heilung',
        stepNumber: 3,
        type: 'topic-selector',
        question: "Was darf heilen oder zur Ruhe kommen?",
        options: [
            { id: 'gesunder_schlaf', label: 'Gesunder Schlaf', sublabel: 'Tief und fest schlafen', icon: 'Moon', nextStep: 'result' },
            { id: 'heile_dich', label: 'Selbstheilungskräfte', sublabel: 'Aktiviere deine innere Apotheke', icon: 'Activity', nextStep: 'result' },
            { id: 'immune', label: 'Immunsystem', sublabel: 'Stärke deine Abwehrkräfte', icon: 'Shield', nextStep: 'result' },
            { id: 'stress', label: 'Stressabbau', sublabel: 'Finde deine innere Mitte wieder', icon: 'Wind', nextStep: 'result' },
            { id: 'trauer', label: 'Trauerbewältigung', sublabel: 'Trost und Begleitung im Schmerz', icon: 'CloudRain', nextStep: 'result' },
            { id: 'trennung', label: 'Trennungsschmerz', sublabel: 'Loslassen und neu beginnen', icon: 'Scissors', nextStep: 'result' }
        ]
    },
    audio_ernaehrung: {
        id: 'audio_ernaehrung',
        stepNumber: 3,
        type: 'topic-selector',
        question: "Was ist dein Ziel für deinen Körper?",
        options: [
            { id: 'gesunde_ernaehrung', label: 'Abnehmen', sublabel: 'Mein Wohlfühlgewicht erreichen', icon: 'Scale', nextStep: 'result' },
            { id: 'heisshunger_sues', label: 'Heißhunger stoppen', sublabel: 'Kontrolle über das Verlangen gewinnen', icon: 'Cookie', nextStep: 'result' },
            { id: 'wasser', label: 'Mehr Wasser trinken', sublabel: 'Meinem Körper Gutes tun', icon: 'Droplet', nextStep: 'result' },
            { id: 'rauchentwoehnung', label: 'Raucherentwöhnung', sublabel: 'Frei sein von Zigaretten', icon: 'Wind', nextStep: 'result' }
        ]
    },
    audio_aengste: {
        id: 'audio_aengste',
        stepNumber: 3,
        type: 'topic-selector',
        question: "Welche Angst möchtest du loslassen?",
        options: [
            { id: '0066_Krisen', label: 'Krise überwinden', sublabel: 'Mut und Kraft in schweren Zeiten', icon: 'Mountain', nextStep: 'result' },
            { id: 'panik', label: 'Panikattacken & Angst', sublabel: 'Zurück zur inneren Ruhe', icon: 'Wind', nextStep: 'result' },
            { id: '0067_Angst_vor_Hunden', label: 'Angst vor Hunden', sublabel: 'Frei und entspannt begegnen', icon: 'Dog', nextStep: 'result' }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // STEP 3A-K: KRANKHEITS-REGION – Max 6 Optionen + Sonstiges
    // ═══════════════════════════════════════════════════════════════
    audio_krankheit: {
        id: 'audio_krankheit',
        stepNumber: 3,
        type: 'body-region',
        question: "Wo spürst du die Unruhe?",
        subtext: "Wähle den Bereich, in dem dein Körper Signale sendet.",
        options: [
            { id: 'atem', label: 'Atmung & Lunge', sublabel: 'COPD, Asthma, Bronchitis', icon: 'Wind', nextStep: 'audio_symptom_atem', metadata: { region: 'atem' } },
            { id: 'schmerz', label: 'Schmerzen & Kopf', sublabel: 'Migräne, Rücken, Fibromyalgie', icon: 'Flame', nextStep: 'audio_symptom_schmerz', metadata: { region: 'schmerz' } },
            { id: 'verdauung', label: 'Verdauung & Bauch', sublabel: 'Reizdarm, Gastritis, Leber/Galle', icon: 'Leaf', nextStep: 'audio_symptom_verdauung', metadata: { region: 'verdauung' } },
            { id: 'haut', label: 'Haut & Allergien', sublabel: 'Neurodermitis, Akne, Heuschnupfen', icon: 'Droplet', nextStep: 'audio_symptom_haut', metadata: { region: 'haut' } },
            { id: 'stoff', label: 'Stoffwechsel & Hormone', sublabel: 'Schilddrüse, Diabetes, Blutdruck', icon: 'Zap', nextStep: 'audio_symptom_stoff', metadata: { region: 'stoff' } },
            { id: 'sonst', label: 'Weitere Themen', sublabel: 'Frauengesundheit, Bewegung, Sonstiges', icon: 'Plus', nextStep: 'audio_search', metadata: { region: 'sonst' } }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // STEP 4: SYMPTOM-FOKUS (je Region) – Max 6 Optionen + Suche
    // ═══════════════════════════════════════════════════════════════
    audio_symptom_atem: {
        id: 'audio_symptom_atem',
        stepNumber: 4,
        type: 'symptom-selector',
        question: "Welches Thema betrifft dich konkret?",
        options: [
            { id: '0008_COPD', label: 'COPD', sublabel: 'Unterstützung bei COPD', icon: 'Wind', nextStep: 'result' },
            { id: '0009_Asthma', label: 'Asthma', sublabel: 'Frei durchatmen', icon: 'Wind', nextStep: 'result' },
            { id: '0011_Bronchitis', label: 'Bronchitis', sublabel: 'Heilung der Bronchien', icon: 'Wind', nextStep: 'result' },
            { id: '0010_Heuschnupfen', label: 'Heuschnupfen', sublabel: 'Linderung bei Allergien', icon: 'Wind', nextStep: 'result' },
            { id: 'search_atem', label: 'Etwas anderes...', sublabel: 'Suche nach deinem Thema', icon: 'Search', nextStep: 'audio_search' }
        ]
    },
    audio_symptom_schmerz: {
        id: 'audio_symptom_schmerz',
        stepNumber: 4,
        type: 'symptom-selector',
        question: "Welches Thema betrifft dich konkret?",
        options: [
            { id: '0003_Migraene', label: 'Migräne', sublabel: 'Linderung bei Migräne', icon: 'Flame', nextStep: 'result' },
            { id: '0019_Rueckenschmerzen', label: 'Rückenschmerzen', sublabel: 'Entlastung für den Rücken', icon: 'Flame', nextStep: 'result' },
            { id: '0044_Hexenschuss', label: 'Hexenschuss', sublabel: 'Akute Linderung', icon: 'Flame', nextStep: 'result' },
            { id: '0045_Ischias', label: 'Ischias', sublabel: 'Nerven beruhigen', icon: 'Flame', nextStep: 'result' },
            { id: '0039_Fibromyalgie', label: 'Fibromyalgie', sublabel: 'Chronische Schmerzen lindern', icon: 'Flame', nextStep: 'result' },
            { id: 'search_schmerz', label: 'Etwas anderes...', sublabel: 'Suche nach deinem Thema', icon: 'Search', nextStep: 'audio_search' }
        ]
    },
    audio_symptom_verdauung: {
        id: 'audio_symptom_verdauung',
        stepNumber: 4,
        type: 'symptom-selector',
        question: "Welches Thema betrifft dich konkret?",
        options: [
            { id: '0001_Gastritis', label: 'Gastritis', sublabel: 'Beruhigung bei Gastritis', icon: 'Leaf', nextStep: 'result' },
            { id: '0017_Sodbrennen', label: 'Sodbrennen', sublabel: 'Linderung bei Sodbrennen', icon: 'Leaf', nextStep: 'result' },
            { id: '0034_Reizdarmsyndrom', label: 'Reizdarm', sublabel: 'Beruhigung des Darms', icon: 'Leaf', nextStep: 'result' },
            { id: '0035_Gicht', label: 'Gicht', sublabel: 'Unterstützung bei Gicht', icon: 'Leaf', nextStep: 'result' },
            { id: '0048_Gallensteine', label: 'Gallensteine', sublabel: 'Linderung', icon: 'Leaf', nextStep: 'result' },
            { id: 'search_verdauung', label: 'Etwas anderes...', sublabel: 'Suche nach deinem Thema', icon: 'Search', nextStep: 'audio_search' }
        ]
    },
    audio_symptom_haut: {
        id: 'audio_symptom_haut',
        stepNumber: 4,
        type: 'symptom-selector',
        question: "Welches Thema betrifft dich konkret?",
        options: [
            { id: '0037_Neurodermitis', label: 'Neurodermitis', sublabel: 'Linderung bei Neurodermitis', icon: 'Droplet', nextStep: 'result' },
            { id: '0041_Akne', label: 'Akne', sublabel: 'Für reine Haut', icon: 'Droplet', nextStep: 'result' },
            { id: '0042_Schuppenflechte', label: 'Schuppenflechte', sublabel: 'Linderung bei Psoriasis', icon: 'Droplet', nextStep: 'result' },
            { id: 'search_haut', label: 'Etwas anderes...', sublabel: 'Suche nach deinem Thema', icon: 'Search', nextStep: 'audio_search' }
        ]
    },
    audio_symptom_beweg: {
        id: 'audio_symptom_beweg',
        stepNumber: 4,
        type: 'symptom-selector',
        question: "Welches Thema betrifft dich konkret?",
        options: [
            { id: '0006_Rheuma-Arthritis', label: 'Rheuma / Arthritis', sublabel: 'Gelenkschmerzen lindern', icon: 'Activity', nextStep: 'result' },
            { id: '0028_Bandscheibenvorfall', label: 'Bandscheibenvorfall', sublabel: 'Heilungsunterstützung', icon: 'Activity', nextStep: 'result' },
            { id: '0020_Karpaltunnelsyndrom', label: 'Karpaltunnelsyndrom', sublabel: 'Linderung', icon: 'Activity', nextStep: 'result' },
            { id: '0022_Tennisarm', label: 'Tennisarm', sublabel: 'Entzündung beruhigen', icon: 'Activity', nextStep: 'result' },
            { id: '0043_Fersensporn', label: 'Fersensporn', sublabel: 'Schmerzlinderung', icon: 'Activity', nextStep: 'result' },
            { id: 'search_beweg', label: 'Etwas anderes...', sublabel: 'Suche nach deinem Thema', icon: 'Search', nextStep: 'audio_search' }
        ]
    },
    audio_symptom_stoff: {
        id: 'audio_symptom_stoff',
        stepNumber: 4,
        type: 'symptom-selector',
        question: "Welches Thema betrifft dich konkret?",
        options: [
            { id: '0005_Schilddruesenunterfunktion', label: 'Schilddrüse (Unter)', sublabel: 'Stoffwechsel anregen', icon: 'Zap', nextStep: 'result' },
            { id: '0050_Schilddruesenueberfunktion', label: 'Schilddrüse (Über)', sublabel: 'Beruhigung', icon: 'Zap', nextStep: 'result' },
            { id: '0002_DiabetesT2', label: 'Diabetes Typ 2', sublabel: 'Unterstützung', icon: 'Zap', nextStep: 'result' },
            { id: '0004_Bluthochdruck', label: 'Bluthochdruck', sublabel: 'Druck regulieren', icon: 'Zap', nextStep: 'result' },
            { id: '0047_Lipodoem', label: 'Lipödem', sublabel: 'Linderung', icon: 'Zap', nextStep: 'result' },
            { id: 'search_stoff', label: 'Etwas anderes...', sublabel: 'Suche nach deinem Thema', icon: 'Search', nextStep: 'audio_search' }
        ]
    },
    audio_symptom_frau: {
        id: 'audio_symptom_frau',
        stepNumber: 4,
        type: 'symptom-selector',
        question: "Welches Thema betrifft dich konkret?",
        options: [
            { id: '0016_Endometriose', label: 'Endometriose', sublabel: 'Schmerzen lindern', icon: 'Heart', nextStep: 'result' },
            { id: '0040_Menstruationsbeschwerden', label: 'Menstruationsbeschwerden', sublabel: 'Zyklusbeschwerden', icon: 'Heart', nextStep: 'result' },
            { id: '0054_Wechseljahre', label: 'Wechseljahre', sublabel: 'Hormonelle Balance', icon: 'Heart', nextStep: 'result' },
            { id: '0046_Blasenentzuendung', label: 'Blasenentzündung', sublabel: 'Linderung', icon: 'Heart', nextStep: 'result' },
            { id: 'search_frau', label: 'Etwas anderes...', sublabel: 'Suche nach deinem Thema', icon: 'Search', nextStep: 'audio_search' }
        ]
    },
    audio_symptom_sonst: {
        id: 'audio_symptom_sonst',
        stepNumber: 4,
        type: 'symptom-selector',
        question: "Welches Thema betrifft dich konkret?",
        options: [
            { id: '0018_Tinitus', label: 'Tinnitus', sublabel: 'Ohrgeräusche lindern', icon: 'Plus', nextStep: 'result' },
            { id: '0055_LongCovid', label: 'Long Covid', sublabel: 'Nachsorge', icon: 'Plus', nextStep: 'result' },
            { id: '0038_Zaehneknirschen', label: 'Zähneknirschen', sublabel: 'Entspannung für den Kiefer', icon: 'Plus', nextStep: 'result' },
            { id: '0021_Restless-Legs-Syndrom', label: 'Restless Legs', sublabel: 'Ruhe für die Beine', icon: 'Plus', nextStep: 'result' },
            { id: 'search_sonst', label: 'Etwas anderes...', sublabel: 'Suche nach deinem Thema', icon: 'Search', nextStep: 'audio_search' }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // STEP 5: SUCH-FALLBACK (Eingabefeld)
    // ═══════════════════════════════════════════════════════════════
    audio_search: {
        id: 'audio_search',
        stepNumber: 5,
        type: 'search',
        isSearchStep: true,
        question: "Beschreibe dein Thema",
        subtext: "Was beschäftigt dich? Wir finden die passende Hypnose für dich.",
        hint: "z.B. Schlafprobleme, Stress, Wechseljahre...",
        options: []  // Keine Optionen – wird durch Eingabefeld ersetzt
    },

    // ═══════════════════════════════════════════════════════════════
    // STEP 2B: LEBENSBEREICH (Video)
    // ═══════════════════════════════════════════════════════════════
    video_focus: {
        id: 'video_focus',
        stepNumber: 2,
        type: 'category-cluster',
        question: "Wo vermutest du den tiefsten Wandel?",
        subtext: "Wähle den Bereich, der dich am stärksten ruft.",
        options: [
            { id: 'v_weight', label: 'Gewicht & Essen', sublabel: 'Endlich Frieden mit meinem Körper schließen', icon: 'Scale', nextStep: 'video_weight' },
            { id: 'the_key', label: 'Innere Freiheit (The Key)', sublabel: 'Alte Wunden heilen, neu anfangen', icon: 'Feather', nextStep: 'result', metadata: { product: 'the_key' } },
            { id: 'heile_dich_workshop', label: 'Körperliche Heilung (Heile Dich)', sublabel: 'Selbstheilungskräfte wecken', icon: 'Zap', nextStep: 'result', metadata: { product: 'heile_dich_workshop' } }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // STEP 3B: GEWICHTS-KLARHEIT
    // ═══════════════════════════════════════════════════════════════
    video_weight: {
        id: 'video_weight',
        stepNumber: 3,
        type: 'weight-goal',
        question: "Was ist dein Ziel?",
        subtext: "Sei ehrlich zu dir – es gibt hier kein Richtig oder Falsch.",
        options: [
            { id: 'ballon', label: '5–10 Kilo', sublabel: 'Ein sanfter Neustart für meinen Körper', icon: 'Feather', nextStep: 'result', metadata: { product: 'hypnotischer_magenballon' } },
            { id: 'band', label: 'Mehr als 10 Kilo', sublabel: 'Eine tiefgreifende Transformation', icon: 'Scale', nextStep: 'result', metadata: { product: 'hypnotisches_magenband' } }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // ERGEBNIS
    // ═══════════════════════════════════════════════════════════════
    result: {
        id: 'result',
        stepNumber: 5,
        type: 'result',
        question: "Deine Empfehlung",
        options: []
    }
};

export function getStep(stepId: StepId): Step {
    return steps[stepId];
}
