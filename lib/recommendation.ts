// Strict Recommendation Engine
// Maps answers directly to products based on user specification

import { FunnelAnswers } from './questions';
import { Product, getProductById } from './products';

// Helper to get multiple products by ID
function getProducts(ids: string[]): Product[] {
    return ids.map(id => getProductById(id)).filter(p => p !== undefined) as Product[];
}

export function getRecommendation(answers: FunnelAnswers): Product {
    // 1. VIDEO WORKSHOPS (Direct mappings)
    if (answers.format === 'video') {
        // Direct Mappings from Step 2 (Focus)
        if (answers.specific === 'the_key') return getProductById('the_key')!;
        if (answers.specific === 'heile_dich') return getProductById('heile_dich')!;

        // Also check if category allows us to deduce product
        if (answers.category === 'v_soul') return getProductById('the_key')!;
        if (answers.category === 'v_heal') return getProductById('heile_dich')!;

        // Weight Path (Step 3)
        if (answers.specific === 'band') return getProductById('hypnotisches_magenband')!;
        if (answers.specific === 'ballon') return getProductById('hypnotischer_magenballon')!;

        // Fallback for Weight
        if (answers.category === 'weight' || answers.category === 'v_weight') return getProductById('hypnotisches_magenband')!;
    }

    // 2. AUDIO HYPNOSES (Specific mappings)
    if (answers.format === 'audio') {
        const specific = answers.specific; // This is the category ID from Step 3 (e.g., 'atem', 'angst')

        // Default primary recommendation for each category
        switch (specific) {
            // LINDERUNG (Körper)
            case 'atem': return getProductById('0008_COPD')!;
            case 'schmerz': return getProductById('0003_Migraene')!;
            case 'verdauung': return getProductById('0034_Reizdarmsyndrom')!;
            case 'haut': return getProductById('0037_Neurodermitis')!;
            case 'beweg': return getProductById('0006_Rheuma-Arthritis')!;
            case 'stoff': return getProductById('0005_Schilddruesenunterfunktion')!;
            case 'frau': return getProductById('0016_Endometriose')!;
            case 'sonst': return getProductById('0007_Erkaeltung')!;

            // VERÄNDERUNG (Seele/Zukunft)
            case 'seele': return getProductById('0062_Selbstliebe')!;
            case 'trans': return getProductById('0052_Dein_Weg_zur_Tranformation')!;
            case 'kraft': return getProductById('0057_Heile_dich')!;
            case 'abnehmen': return getProductById('0051_Heisshunger')!;
        }
    }

    // Fallback
    return getProductById('0062_Selbstliebe')!;
}

export function getRecommendedProducts(answers: FunnelAnswers): Product[] {
    // 1. Video Workshops always return single result (for now, maybe add alternatives later)
    if (answers.format === 'video') {
        // We could add related workshops here if needed
        return [getRecommendation(answers)];
    }

    // 2. Audio - Return list based on specific selection (Category from Step 3)
    if (answers.format === 'audio') {
        const specific = answers.specific;
        const deepDive = answers.deepDive; // LINDERUNG or VERAENDERUNG

        // Here we map the Category ID (e.g. 'atem') to a list of products
        // We can refine this list based on deepDive if needed, but currently the categories are already split by step 3

        switch (specific) {
            // --- LINDERUNG KATEGORIEN ---
            case 'atem': return getProducts(['0008_COPD', '0009_Asthma', '0011_Bronchitis', '0010_Heuschnupfen']);
            case 'schmerz': return getProducts(['0003_Migraene', '0013_Cluster-Kopfschmerzen', '0014_Spannungskopfschmerz', '0019_Rueckenschmerzen', '0044_Hexenschuss', '0045_Ischias', '0039_Fibromyalgie']);
            case 'verdauung': return getProducts(['0001_Gastritis', '0017_Sodbrennen', '0034_Reizdarmsyndrom', '0036_Haemorrhoiden', '0035_Gicht']);
            case 'haut': return getProducts(['0037_Neurodermitis', '0041_Akne', '0042_Schuppenflechte']);
            case 'beweg': return getProducts(['0006_Rheuma-Arthritis', '0028_Bandscheibenvorfall', '0029_Sehnenentzuendung', '0030_Schleimbeutelentzuendung', '0031_Knochenbruch', '0032_Muskelriss', '0033_Baenderriss', '0020_Karpaltunnelsyndrom', '0022_Tennisarm', '0043_Fersensporn', '0049_Krampfadern']);
            case 'stoff': return getProducts(['0005_Schilddruesenunterfunktion', '0050_Schilddruesenueberfunktion', '0002_DiabetesT2', '0004_Bluthochdruck']);
            case 'frau': return getProducts(['0016_Endometriose', '0024_Eierstockzyste', '0025_Eileiterentzuendung', '0026_Brustentzuendung', '0027_Beckenentzuendung', '0040_Menstruationsbeschwerden']);
            case 'sonst': return getProducts(['0023_COVID', '0012_Grippe', '0007_Erkaeltung', 'Hypnose_Schlaganfall', '0015_Multiple-Sklerose', '0018_Tinitus', '0038_Zaehneknirschen', '0047_Nierensteine', '0048_Gallensteine', '0046_Blasenentzuendung', '0021_Restless-Legs-Syndrom']);

            // --- VERÄNDERUNG KATEGORIEN ---
            case 'seele': return getProducts(['0062_Selbstliebe', '0067_Angst_vor_Hunden', '0066_Krisen', '0058_Horizont']);
            case 'trans': return getProducts(['0052_Dein_Weg_zur_Tranformation', '0053_Die_Vision_deines_schlanken_Ichs', '0055_Vom_Alten_zum_Neuen_Ich', '0064_Dein_Zukunftsich']);
            case 'kraft': return getProducts(['0057_Heile_dich', '0059_Raum_der_Heilung', '0060_Wasserfall', '0061_Pink', '0063_Leuchte', '0065_Kraftoase']);
            case 'abnehmen': return getProducts(['0051_Heisshunger', '0054_Gesunde_Ernaehrung', '0056_Wasser_trinken']);
        }
    }

    return [getRecommendation(answers)];
}
