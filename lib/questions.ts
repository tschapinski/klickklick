// 4-Schritt Funnel Logik (Suggestive Question)
// 0: Suggestiv -> 1: Format -> 2: Deep Dive -> 3: Specific -> 4: Result

export type StepId =
    | 'suggestive'      // SCHRITT 0: Ja-Frage
    | 'format'          // SCHRITT 1: Audio/Video
    | 'audio_focus'     // SCHRITT 2-AUDIO: Linderung/Veränderung
    | 'video_focus'     // SCHRITT 2-VIDEO: Abnehmen/Befreiung/Heilung
    | 'audio_linderung' // SCHRITT 3-AUDIO: Kategorien für Linderung
    | 'audio_change'    // SCHRITT 3-AUDIO: Kategorien für Veränderung
    | 'video_weight'    // SCHRITT 3-VIDEO: Magenband/Ballon
    | 'result';

export interface Option {
    id: string;
    label: string;
    description?: string;
    icon?: string;
    nextStep?: StepId;
    tags?: {
        commitment?: 'BEREIT' | 'NEUGIERIG';
        deepDive?: 'LINDERUNG' | 'VERAENDERUNG';
    };
}

export interface Step {
    id: StepId;
    stepNumber: number;
    question: string;
    subtext?: string;
    hint?: string;
    options: Option[];
}

export interface FunnelAnswers {
    commitment?: 'BEREIT' | 'NEUGIERIG';
    format?: 'audio' | 'video';
    deepDive?: 'LINDERUNG' | 'VERAENDERUNG';
    category?: string;
    specific?: string;
}

export const TOTAL_STEPS = 4;

export const steps: Record<StepId, Step> = {
    // SCHRITT 0: SUGGESTIVE FRAGE
    suggestive: {
        id: 'suggestive',
        stepNumber: 0,
        question: "Hast du das Gefühl, dass dein Körper dir Botschaften sendet, die du bisher nicht verstehen konntest – und dass es Zeit ist, dies zu ändern?",
        subtext: "Höre auf deine Intuition.",
        options: [
            {
                id: 'yes_ready',
                label: "Ja, ich spüre, dass da mehr ist – und ich bin bereit, hinzuschauen",
                // description: "Setze den ersten Schritt.",
                icon: 'CheckCircle',
                nextStep: 'format',
                tags: { commitment: 'BEREIT' }
            },
            {
                id: 'yes_curious',
                label: "Ich bin mir nicht sicher, aber ich will es herausfinden",
                // description: "Lass dich überraschen.",
                icon: 'HelpCircle',
                nextStep: 'format',
                tags: { commitment: 'NEUGIERIG' }
            }
        ]
    },

    // SCHRITT 1: FORMAT-AUSWAHL
    // Text is dynamic in UI based on commitment
    format: {
        id: 'format',
        stepNumber: 1,
        question: "Wie möchtest du dich heute unterstützen lassen?",
        options: [
            {
                id: 'audio',
                label: 'In meiner eigenen Zeit',
                description: 'Sanfte Audio-Hypnosen, die mich Schritt für Schritt begleiten',
                icon: 'Headphones',
                nextStep: 'audio_focus'
            },
            {
                id: 'video',
                label: 'Intensiv und transformierend',
                description: 'Ein Workshop, der mein Leben nachhaltig verändert',
                icon: 'Play',
                nextStep: 'video_focus'
            }
        ]
    },

    // SCHRITT 2-AUDIO: LINDERUNG vs VERÄNDERUNG
    audio_focus: {
        id: 'audio_focus',
        stepNumber: 2,
        question: "Was brauchst du in diesem Moment mehr?",
        options: [
            {
                id: 'relief',
                label: 'Linderung',
                description: 'Ich möchte erstmal wieder durchatmen können, den Druck spüren wie er nachlässt',
                icon: 'Leaf',
                nextStep: 'audio_linderung',
                tags: { deepDive: 'LINDERUNG' }
            },
            {
                id: 'change',
                label: 'Veränderung',
                description: 'Ich bin bereit, die Ursache anzugehen und etwas fundamental zu verschieben',
                icon: 'Flame',
                nextStep: 'audio_change',
                tags: { deepDive: 'VERAENDERUNG' }
            }
        ]
    },

    // SCHRITT 2-VIDEO: FOKUS
    video_focus: {
        id: 'video_focus',
        stepNumber: 2,
        question: "Wo spürst du den tiefsten Ruf nach Veränderung?",
        options: [
            { id: 'v_weight', label: 'Mein Körpergewicht und mein Verhältnis zu Essen', icon: 'Scale', nextStep: 'video_weight' },
            { id: 'the_key', label: 'Meine innere Befreiung und Selbstbestimmung', icon: 'Feather', nextStep: 'result' }, // Direct to The Key
            { id: 'heile_dich', label: 'Meine körperliche Heilung und Lebenskraft', icon: 'Zap', nextStep: 'result' } // Direct to Heile Dich
        ]
    },

    // SCHRITT 3-AUDIO: KATEGORIEN FÜR LINDERUNG
    audio_linderung: {
        id: 'audio_linderung',
        stepNumber: 3,
        question: "In welchem Bereich spürst du den stärksten Wunsch nach Linderung?",
        options: [
            { id: 'atem', label: 'Atmung & Lunge', description: 'COPD, Asthma', icon: 'Wind' },
            { id: 'schmerz', label: 'Schmerzen & Kopf', description: 'Migräne, Rücken', icon: 'Flame' },
            { id: 'verdauung', label: 'Verdauung & Bauch', description: 'Magen, Darm', icon: 'Leaf' },
            { id: 'haut', label: 'Haut & Allergien', description: 'Neurodermitis, Akne', icon: 'Droplet' },
            { id: 'beweg', label: 'Bewegungsapparat', description: 'Gelenke, Knochen', icon: 'Activity' },
            { id: 'stoff', label: 'Stoffwechsel & Drüsen', description: 'Schilddrüse, Diabetes', icon: 'Zap' },
            { id: 'frau', label: 'Frauengesundheit', description: 'Endometriose, Zyklus', icon: 'Heart' },
            { id: 'sonst', label: 'Sonstige Beschwerden', description: 'Tinnitus, Viren', icon: 'Plus' }
        ]
    },

    // SCHRITT 3-AUDIO: KATEGORIEN FÜR VERÄNDERUNG
    audio_change: {
        id: 'audio_change',
        stepNumber: 3,
        question: "In welchem Bereich möchtest du Veränderung?",
        options: [
            { id: 'seele', label: 'Seele & Emotionen', description: 'Ängste, Selbstliebe', icon: 'Heart' },
            { id: 'trans', label: 'Transformation & Zukunft', description: 'Visionen, Neues Ich', icon: 'Sparkles' },
            { id: 'kraft', label: 'Heilung & Kraft', description: 'Selbstheilung aktivieren', icon: 'Battery' },
            { id: 'abnehmen', label: 'Abnehmen & Ernährung', description: 'Heißhunger, Gewohnheiten', icon: 'Apple' }
        ]
    },

    // SCHRITT 3-VIDEO: GEWICHTS-METHODE
    video_weight: {
        id: 'video_weight',
        stepNumber: 3,
        question: "Welche innere Einstellung begleitet dich beim Essen am stärksten?",
        options: [
            {
                id: 'band',
                label: 'Ich brauche Struktur und Grenzen',
                description: 'Gefühl von Kontrolle zurückgewinnen',
                icon: 'Lock'
            },
            {
                id: 'ballon',
                label: 'Ich brauche Sättigung und Raum',
                description: 'Das Gefühl genug zu haben',
                icon: 'Circle'
            }
        ]
    },

    result: {
        id: 'result',
        stepNumber: 4,
        question: "Deine Empfehlung",
        options: []
    }
};

export function getStep(stepId: StepId): Step {
    return steps[stepId];
}

export function getNextStep(current: StepId, selectedOption: string): StepId {
    const step = steps[current];
    const option = step.options.find(o => o.id === selectedOption);
    return option?.nextStep || 'result';
}
