// Optimierte Recommendation Engine nach Kimi UX-Analyse
// Cross-Sell mit Related Products + Personalisierte Nachrichten + Suche

import { FunnelAnswers, getResultMessage } from './questions';
import { Product, getProductById, products } from './products';

// ═══════════════════════════════════════════════════════════════
// THEMA ZU PRODUKT MAPPING (für nicht-Krankheiten Kategorien)
// ═══════════════════════════════════════════════════════════════
const themeToProductMap: Record<string, { productId: string; related: string[] }> = {
    // SELBSTLIEBE
    '0062_Selbstliebe': { productId: '0062_Selbstliebe', related: ['0063_Leuchte', '0064_Dein_Zukunftsich', '0065_Kraftoase'] },
    'selbstvertrauen': { productId: '0063_Leuchte', related: ['0062_Selbstliebe', '0065_Kraftoase', '0064_Dein_Zukunftsich'] },
    'inneres_kind': { productId: '0065_Kraftoase', related: ['0062_Selbstliebe', '0063_Leuchte', '0057_Heile_dich'] },
    'vertrauen': { productId: '0064_Dein_Zukunftsich', related: ['0062_Selbstliebe', '0065_Kraftoase', '0063_Leuchte'] },
    'zukunfts_ich': { productId: '0064_Dein_Zukunftsich', related: ['0063_Leuchte', '0062_Selbstliebe', '0065_Kraftoase'] },

    // HEILUNG ALLGEMEIN
    'gesunder_schlaf': { productId: '0059_Raum_der_Heilung', related: ['0060_Wasserfall', '0057_Heile_dich', '0061_Pink'] },
    'heile_dich': { productId: '0057_Heile_dich', related: ['0059_Raum_der_Heilung', '0058_Horizont', '0060_Wasserfall'] },
    'immune': { productId: '0058_Horizont', related: ['0057_Heile_dich', '0060_Wasserfall', '0059_Raum_der_Heilung'] },
    'stress': { productId: '0060_Wasserfall', related: ['0059_Raum_der_Heilung', '0057_Heile_dich', '0061_Pink'] },
    'trauer': { productId: '0061_Pink', related: ['0057_Heile_dich', '0059_Raum_der_Heilung', '0065_Kraftoase'] },
    'trennung': { productId: '0061_Pink', related: ['0062_Selbstliebe', '0065_Kraftoase', '0057_Heile_dich'] },

    // GESUNDE ERNÄHRUNG
    'gesunde_ernaehrung': { productId: '0054_Gesunde_Ernaehrung', related: ['0051_Heisshunger', '0053_Die_Vision_deines_schlanken_Ichs', '0055_Vom_Alten_zum_Neuen_Ich'] },
    'heisshunger_sues': { productId: '0051_Heisshunger', related: ['0054_Gesunde_Ernaehrung', '0052_Dein_Weg_zur_Tranformation', '0056_Wasser_trinken'] },
    'wasser': { productId: '0056_Wasser_trinken', related: ['0054_Gesunde_Ernaehrung', '0051_Heisshunger', '0055_Vom_Alten_zum_Neuen_Ich'] },
    'rauchentwoehnung': { productId: '0052_Dein_Weg_zur_Tranformation', related: ['0055_Vom_Alten_zum_Neuen_Ich', '0051_Heisshunger', '0054_Gesunde_Ernaehrung'] },

    // ÄNGSTE
    '0066_Krisen': { productId: '0066_Krisen', related: ['0062_Selbstliebe', '0065_Kraftoase', '0057_Heile_dich'] },
    'panik': { productId: '0066_Krisen', related: ['0060_Wasserfall', '0059_Raum_der_Heilung', '0062_Selbstliebe'] },
    '0067_Angst_vor_Hunden': { productId: '0067_Angst_vor_Hunden', related: ['0066_Krisen', '0062_Selbstliebe', '0065_Kraftoase'] }
};

// ═══════════════════════════════════════════════════════════════
// PRODUCT SEARCH (für Such-Fallback)
// Gibt immer Primary + 2 ähnliche Hypnosen zurück
// ═══════════════════════════════════════════════════════════════
export function searchProducts(query: string): Product[] {
    // Kategorienspezifische Fallbacks je nach Suchkontext
    const fallbackProducts = [
        getProductById('0057_Heile_dich'),
        getProductById('0059_Raum_der_Heilung'),
        getProductById('0060_Wasserfall')
    ].filter((p): p is Product => p !== undefined);

    if (!query || query.trim().length < 2) {
        return fallbackProducts;
    }

    const normalizedQuery = query.toLowerCase().trim();
    const searchTerms = normalizedQuery.split(/\s+/);

    // Score-basierte Suche
    const scoredProducts = products
        .filter(p => p.type === 'hypnose')
        .map(product => {
            let score = 0;
            const title = product.title.toLowerCase();
            const description = (product.description || '').toLowerCase();

            for (const term of searchTerms) {
                if (title.includes(term)) {
                    score += 10;
                    if (title === normalizedQuery || title.includes(normalizedQuery)) {
                        score += 20;
                    }
                }
                if (description.includes(term)) {
                    score += 3;
                }
            }

            return { product, score };
        })
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score);

    // Keine Treffer: Fallback
    if (scoredProducts.length === 0) {
        return fallbackProducts;
    }

    // Immer 3 Produkte zurückgeben (Primary + 2 ähnliche)
    const results = scoredProducts.slice(0, 3).map(item => item.product);

    // Falls weniger als 3: mit kategorienspezifischen Produkten auffüllen
    while (results.length < 3) {
        const nextFallback = fallbackProducts.find(p => !results.some(r => r.id === p.id));
        if (nextFallback) {
            results.push(nextFallback);
        } else {
            break;
        }
    }

    return results;
}

// ═══════════════════════════════════════════════════════════════
// ILLNESS SYMPTOMS MAP mit Related Products für Cross-Sell
// ═══════════════════════════════════════════════════════════════
export const illnessSymptomsMap: Record<string, {
    id: string;
    label: string;
    productId: string;
    relatedProducts: string[];
}[]> = {
    atem: [
        { id: '0008_COPD', label: 'COPD', productId: '0008_COPD', relatedProducts: ['0009_Asthma', '0011_Bronchitis', 'immune'] },
        { id: '0009_Asthma', label: 'Asthma', productId: '0009_Asthma', relatedProducts: ['0008_COPD', '0011_Bronchitis', 'stress'] },
        { id: '0011_Bronchitis', label: 'Bronchitis', productId: '0011_Bronchitis', relatedProducts: ['0009_Asthma', 'immune', '0007_Erkaeltung'] },
        { id: '0010_Heuschnupfen', label: 'Heuschnupfen', productId: '0010_Heuschnupfen', relatedProducts: ['immune', 'stress'] }
    ],
    schmerz: [
        { id: '0003_Migraene', label: 'Migräne', productId: '0003_Migraene', relatedProducts: ['stress', '0014_Spannungskopfschmerz', 'gesunder_schlaf'] },
        { id: '0013_Cluster-Kopfschmerzen', label: 'Cluster-Kopfschmerzen', productId: '0013_Cluster-Kopfschmerzen', relatedProducts: ['0003_Migraene', 'stress'] },
        { id: '0014_Spannungskopfschmerz', label: 'Spannungskopfschmerz', productId: '0014_Spannungskopfschmerz', relatedProducts: ['stress', '0003_Migraene'] },
        { id: '0019_Rueckenschmerzen', label: 'Rückenschmerzen', productId: '0019_Rueckenschmerzen', relatedProducts: ['0044_Hexenschuss', '0045_Ischias', 'stress'] },
        { id: '0044_Hexenschuss', label: 'Hexenschuss', productId: '0044_Hexenschuss', relatedProducts: ['0019_Rueckenschmerzen', '0045_Ischias'] },
        { id: '0045_Ischias', label: 'Ischias', productId: '0045_Ischias', relatedProducts: ['0019_Rueckenschmerzen', '0044_Hexenschuss'] },
        { id: '0039_Fibromyalgie', label: 'Fibromyalgie', productId: '0039_Fibromyalgie', relatedProducts: ['stress', 'gesunder_schlaf', 'heile_dich'] }
    ],
    verdauung: [
        { id: '0001_Gastritis', label: 'Gastritis', productId: '0001_Gastritis', relatedProducts: ['0017_Sodbrennen', 'stress', '0034_Reizdarmsyndrom'] },
        { id: '0017_Sodbrennen', label: 'Sodbrennen', productId: '0017_Sodbrennen', relatedProducts: ['0001_Gastritis', 'stress'] },
        { id: '0034_Reizdarmsyndrom', label: 'Reizdarm', productId: '0034_Reizdarmsyndrom', relatedProducts: ['0001_Gastritis', 'stress', 'gesunder_schlaf'] },
        { id: '0036_Haemorrhoiden', label: 'Hämorrhoiden', productId: '0036_Haemorrhoiden', relatedProducts: ['stress'] },
        { id: '0035_Gicht', label: 'Gicht', productId: '0035_Gicht', relatedProducts: ['gesunde_ernaehrung'] },
        { id: '0048_Gallensteine', label: 'Gallensteine', productId: '0048_Gallensteine', relatedProducts: ['0047_Nierensteine', 'stress'] },
        { id: '0047_Nierensteine', label: 'Nierensteine', productId: '0047_Nierensteine', relatedProducts: ['0048_Gallensteine', 'wasser'] }
    ],
    haut: [
        { id: '0037_Neurodermitis', label: 'Neurodermitis', productId: '0037_Neurodermitis', relatedProducts: ['stress', '0042_Schuppenflechte', 'inneres_kind'] },
        { id: '0041_Akne', label: 'Akne', productId: '0041_Akne', relatedProducts: ['stress', 'selbstvertrauen'] },
        { id: '0042_Schuppenflechte', label: 'Schuppenflechte', productId: '0042_Schuppenflechte', relatedProducts: ['0037_Neurodermitis', 'stress'] }
    ],
    beweg: [
        { id: '0006_Rheuma-Arthritis', label: 'Rheuma/Arthritis', productId: '0006_Rheuma-Arthritis', relatedProducts: ['heile_dich', 'stress'] },
        { id: '0028_Bandscheibenvorfall', label: 'Bandscheibenvorfall', productId: '0028_Bandscheibenvorfall', relatedProducts: ['0019_Rueckenschmerzen', '0045_Ischias'] },
        { id: '0029_Sehnenentzuendung', label: 'Sehnenentzündung', productId: '0029_Sehnenentzuendung', relatedProducts: ['0022_Tennisarm'] },
        { id: '0030_Schleimbeutelentzuendung', label: 'Schleimbeutelentzündung', productId: '0030_Schleimbeutelentzuendung', relatedProducts: ['heile_dich'] },
        { id: '0031_Knochenbruch', label: 'Knochenbruch', productId: '0031_Knochenbruch', relatedProducts: ['heile_dich'] },
        { id: '0032_Muskelriss', label: 'Muskelriss', productId: '0032_Muskelriss', relatedProducts: ['heile_dich'] },
        { id: '0033_Baenderriss', label: 'Bänderriss', productId: '0033_Baenderriss', relatedProducts: ['heile_dich'] },
        { id: '0020_Karpaltunnelsyndrom', label: 'Karpaltunnelsyndrom', productId: '0020_Karpaltunnelsyndrom', relatedProducts: ['stress'] },
        { id: '0022_Tennisarm', label: 'Tennisarm', productId: '0022_Tennisarm', relatedProducts: ['0029_Sehnenentzuendung'] },
        { id: '0043_Fersensporn', label: 'Fersensporn', productId: '0043_Fersensporn', relatedProducts: ['heile_dich'] },
        { id: '0049_Krampfadern', label: 'Krampfadern', productId: '0049_Krampfadern', relatedProducts: ['heile_dich'] }
    ],
    stoff: [
        { id: '0005_Schilddruesenunterfunktion', label: 'Schilddrüsenunterfunktion', productId: '0005_Schilddruesenunterfunktion', relatedProducts: ['stress', 'gesunde_ernaehrung'] },
        { id: '0050_Schilddruesenueberfunktion', label: 'Schilddrüsenüberfunktion', productId: '0050_Schilddruesenueberfunktion', relatedProducts: ['stress'] },
        { id: '0002_DiabetesT2', label: 'Diabetes Typ 2', productId: '0002_DiabetesT2', relatedProducts: ['gesunde_ernaehrung', 'heisshunger_sues'] },
        { id: '0004_Bluthochdruck', label: 'Bluthochdruck', productId: '0004_Bluthochdruck', relatedProducts: ['stress', 'gesunder_schlaf'] },
        { id: '0047_Lipodoem', label: 'Lipödem', productId: '0047_Lipodoem', relatedProducts: ['0062_Selbstliebe', 'gesunde_ernaehrung'] }
    ],
    frau: [
        { id: '0016_Endometriose', label: 'Endometriose', productId: '0016_Endometriose', relatedProducts: ['0040_Menstruationsbeschwerden', 'heile_dich'] },
        { id: '0024_Eierstockzyste', label: 'Eierstockzyste', productId: '0024_Eierstockzyste', relatedProducts: ['heile_dich'] },
        { id: '0025_Eileiterentzuendung', label: 'Eileiterentzündung', productId: '0025_Eileiterentzuendung', relatedProducts: ['heile_dich', 'immune'] },
        { id: '0026_Brustentzuendung', label: 'Brustentzündung', productId: '0026_Brustentzuendung', relatedProducts: ['heile_dich', 'immune'] },
        { id: '0027_Beckenentzuendung', label: 'Beckenentzündung', productId: '0027_Beckenentzuendung', relatedProducts: ['heile_dich'] },
        { id: '0040_Menstruationsbeschwerden', label: 'Menstruationsbeschwerden', productId: '0040_Menstruationsbeschwerden', relatedProducts: ['0016_Endometriose', 'stress'] },
        { id: '0054_Wechseljahre', label: 'Wechseljahre', productId: '0054_Wechseljahre', relatedProducts: ['gesunder_schlaf', 'stress', '0062_Selbstliebe'] },
        { id: '0046_Blasenentzuendung', label: 'Blasenentzündung', productId: '0046_Blasenentzuendung', relatedProducts: ['immune'] }
    ],
    sonst: [
        { id: '0023_COVID', label: 'COVID Nachsorge', productId: '0023_COVID', relatedProducts: ['immune', 'heile_dich'] },
        { id: '0055_LongCovid', label: 'Long Covid', productId: '0055_LongCovid', relatedProducts: ['0023_COVID', 'stress', 'gesunder_schlaf'] },
        { id: '0012_Grippe', label: 'Grippe', productId: '0012_Grippe', relatedProducts: ['immune', '0007_Erkaeltung'] },
        { id: '0007_Erkaeltung', label: 'Erkältung', productId: '0007_Erkaeltung', relatedProducts: ['immune', '0012_Grippe'] },
        { id: 'Hypnose_Schlaganfall', label: 'Schlaganfall', productId: 'Hypnose_Schlaganfall', relatedProducts: ['heile_dich'] },
        { id: '0015_Multiple-Sklerose', label: 'Multiple Sklerose', productId: '0015_Multiple-Sklerose', relatedProducts: ['heile_dich', 'stress'] },
        { id: '0018_Tinitus', label: 'Tinnitus', productId: '0018_Tinitus', relatedProducts: ['stress', 'gesunder_schlaf'] },
        { id: '0038_Zaehneknirschen', label: 'Zähneknirschen', productId: '0038_Zaehneknirschen', relatedProducts: ['stress', 'gesunder_schlaf'] },
        { id: '0021_Restless-Legs-Syndrom', label: 'Restless Legs', productId: '0021_Restless-Legs-Syndrom', relatedProducts: ['gesunder_schlaf', 'stress'] }
    ]
};

// Category-based related products
const categoryRelatedProducts: Record<string, string[]> = {
    selbstliebe: ['0062_Selbstliebe', 'selbstvertrauen', 'inneres_kind', 'vertrauen', 'zukunfts_ich'],
    heilung_allgemein: ['gesunder_schlaf', 'heile_dich', 'immune', 'stress', 'trauer', 'trennung'],
    gesunde_ernaehrung: ['gesunde_ernaehrung', 'heisshunger_sues', 'wasser', 'rauchentwoehnung'],
    aengste: ['0066_Krisen', 'panik', '0067_Angst_vor_Hunden']
};

// ═══════════════════════════════════════════════════════════════
// RESULT INTERFACE
// ═══════════════════════════════════════════════════════════════
export interface RecommendationResult {
    primary: Product;
    secondary: Product[];
    crossSell: Product;
    personalizedMessage: string;
}

// ═══════════════════════════════════════════════════════════════
// MAIN FUNCTIONS
// ═══════════════════════════════════════════════════════════════
function getProducts(ids: string[]): Product[] {
    return ids.map(id => getProductById(id)).filter((p): p is Product => p !== undefined);
}

function findSymptomData(region: string, symptomId: string) {
    const regionData = illnessSymptomsMap[region];
    if (!regionData) return null;
    return regionData.find(s => s.id === symptomId) || null;
}

export function getRecommendation(answers: FunnelAnswers): Product {
    // 1. VIDEO WORKSHOPS
    if (answers.format === 'video') {
        const specific = answers.specific;
        if (specific === 'the_key') return getProductById('the_key')!;
        if (specific === 'heile_dich_workshop') return getProductById('heile_dich_workshop')!;
        if (specific === 'band') return getProductById('hypnotisches_magenband')!;
        if (specific === 'ballon') return getProductById('hypnotischer_magenballon')!;
        return getProductById('hypnotisches_magenband')!;
    }

    // 2. AUDIO HYPNOSES
    if (answers.format === 'audio') {
        const symptom = answers.symptom;
        const specific = answers.specific;
        const category = answers.category;

        // Case A: Symptom selected (Step 4 - Krankheiten)
        if (symptom) {
            return getProductById(symptom) || getCategoryFallback(category);
        }

        // Case B: Specific theme selected (Step 3)
        if (specific) {
            // First try direct product ID
            const directProduct = getProductById(specific);
            if (directProduct) return directProduct;

            // Then try theme mapping
            const themeMapping = themeToProductMap[specific];
            if (themeMapping) {
                const mappedProduct = getProductById(themeMapping.productId);
                if (mappedProduct) return mappedProduct;
            }

            // Category-specific fallback
            return getCategoryFallback(category);
        }
    }

    // Fallback
    return getProductById('0057_Heile_dich')!;
}

// Category-specific fallbacks to avoid always showing Selbstliebe
function getCategoryFallback(category?: string): Product {
    switch (category) {
        case 'selbstliebe':
            return getProductById('0062_Selbstliebe')!;
        case 'heilung_allgemein':
            return getProductById('0057_Heile_dich')!;
        case 'gesunde_ernaehrung':
            return getProductById('0054_Gesunde_Ernaehrung')!;
        case 'aengste':
            return getProductById('0066_Krisen')!;
        case 'krankheiten':
            return getProductById('0057_Heile_dich')!;
        default:
            return getProductById('0057_Heile_dich')!;
    }
}

export function getRecommendedProducts(answers: FunnelAnswers): Product[] {
    const primary = getRecommendation(answers);
    let related: Product[] = [];

    if (answers.format === 'audio') {
        const symptom = answers.symptom;
        const specific = answers.specific;
        const category = answers.category;

        // 1. Krankheiten: Use illnessSymptomsMap for related products
        if (category === 'krankheiten' && symptom && specific) {
            const symptomData = findSymptomData(specific, symptom);
            if (symptomData && symptomData.relatedProducts) {
                // Resolve related product IDs through themeToProductMap if needed
                const resolvedRelated = symptomData.relatedProducts.map(id => {
                    // First check if it's a direct product ID
                    const directProduct = getProductById(id);
                    if (directProduct) return directProduct;

                    // Then try theme mapping
                    const themeMapping = themeToProductMap[id];
                    if (themeMapping) {
                        return getProductById(themeMapping.productId);
                    }
                    return null;
                }).filter((p): p is Product => p !== null);

                related = resolvedRelated;
            }
        }
        // 2. Theme-specific related products from themeToProductMap
        else if (specific && themeToProductMap[specific]) {
            const themeMapping = themeToProductMap[specific];
            related = getProducts(themeMapping.related).filter(p => p.id !== primary.id);
        }
        // 3. Fallback: Use categoryRelatedProducts
        else if (category && categoryRelatedProducts[category]) {
            const groupIds = categoryRelatedProducts[category];
            // Resolve through themeToProductMap
            const resolvedProducts = groupIds.map(id => {
                const directProduct = getProductById(id);
                if (directProduct) return directProduct;

                const themeMapping = themeToProductMap[id];
                if (themeMapping) {
                    return getProductById(themeMapping.productId);
                }
                return null;
            }).filter((p): p is Product => p !== null);

            related = resolvedProducts.filter(p => p.id !== primary.id);
        }
    }

    // Return Primary + up to 3 Related items
    return [primary, ...related].slice(0, 4);
}

// ═══════════════════════════════════════════════════════════════
// FULL RECOMMENDATION (with personalized message)
// ═══════════════════════════════════════════════════════════════
export function generateRecommendation(answers: FunnelAnswers): RecommendationResult {
    const primary = getRecommendation(answers);
    const allProducts = getRecommendedProducts(answers);
    const secondary = allProducts.slice(1, 4);
    const crossSell = getProductById('inner_circle')!;

    // Personalized message based on commitment level
    const commitment = answers.commitment || 'NEUGIERIG';
    const personalizedMessage = getResultMessage(commitment, primary.title);

    return {
        primary,
        secondary,
        crossSell,
        personalizedMessage
    };
}
