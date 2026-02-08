// VANSOL Produkte – Exakte Daten aus CSV
// Stand: 07.02.2026

export interface Product {
  id: string; // Exakte ID aus CSV/User-Prompt
  title: string;
  price: string;
  link: string;
  image: string; // Pfad zum Bild
  description: string;
  type: 'hypnose' | 'workshop' | 'membership';
  category?: 'krankheit' | 'seele' | 'gewicht' | 'allgemein';
}

export const products: Product[] = [
  // ==========================================
  // WORKSHOPS (Video-Format)
  // ==========================================
  {
    id: 'hypnotisches_magenband',
    title: 'Hypnotisches Magenband (Unlimited)',
    price: '677,00 €',
    link: 'https://myablefy.com/s/katrin-vol/hypnotischesmagenband',
    image: '/images/products/magenband.jpg',
    description: 'Das Original: Dein virtuelles Magenband. Verändere dein Essverhalten ohne Verzicht und Diät.',
    type: 'workshop',
    category: 'gewicht'
  },
  {
    id: 'hypnotischer_magenballon',
    title: 'Hypnotischer Magenballon',
    price: '444,00 €',
    link: 'https://myablefy.com/s/katrin-van-sol/hypnotischer-magenballon',
    image: '/images/products/magenballon.jpg', // Placeholder
    description: 'Dein virtueller Magenballon für ein früheres Sättigungsgefühl. Verändere deine Gewohnheiten nachhaltig.',
    type: 'workshop',
    category: 'gewicht'
  },
  {
    id: 'the_key',
    title: 'The Key - Der Onlinekurs',
    price: '444,00 €',
    link: 'https://myablefy.com/s/katrin-van-sol/the-key',
    image: '/images/products/the_key.jpg', // Placeholder
    description: 'Befreie dich von alten Geschichten und Verletzungen. Der Schlüssel zu deinem wahren Selbst und innerer Freiheit.',
    type: 'workshop',
    category: 'seele'
  },
  {
    id: 'heile_dich',
    title: 'Heile Dich, Befreie Dich, Aktiviere Deine Selbstheilungskraefte!',
    price: '444,00 €',
    link: 'https://myablefy.com/s/katrin-van-sol/online-kurs-heile-dich-befreie-dich-aktiviere-deine-selbstheilungskraefte-966a93a8',
    image: '/images/products/heile_dich.jpg', // Placeholder
    description: 'Aktiviere deine Selbstheilungskräfte. Verstehe die Botschaften deines Körpers und löse unsichtbare Narben auf.',
    type: 'workshop',
    category: 'krankheit'
  },

  // ==========================================
  // MEMBERSHIP (Zweitempfehlung)
  // ==========================================
  {
    id: 'inner_circle',
    title: 'VANSOL Inner Circle',
    price: 'Monatlich',
    link: 'https://myablefy.com/s/katrin-van-sol/inner-circle',
    image: '/images/products/inner_circle.jpg', // Placeholder
    description: 'Werde Teil meines exklusiven Inner Circles. Regelmäßige Live-Sessions, Community-Support und exklusive Inhalte.',
    type: 'membership',
    category: 'allgemein'
  },

  // ==========================================
  // HYPNOSE-AUDIOS (Audio-Format) | Alle €96
  // ==========================================

  // ATEMWEGS-HYPNOSE
  { id: '0008_COPD', title: 'VANSOL Hypnose COPD', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/copd.jpg', description: 'Unterstützung bei COPD.', type: 'hypnose', category: 'krankheit' },
  { id: '0009_Asthma', title: 'VANSOL Hypnose Asthma', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Befreiung bei Asthma.', type: 'hypnose', category: 'krankheit' },
  { id: '0011_Bronchitis', title: 'VANSOL Hypnose Bronchitis', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Unterstützung bei Bronchitis.', type: 'hypnose', category: 'krankheit' },
  { id: '0010_Heuschnupfen', title: 'VANSOL Hypnose Heuschnupfen', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Linderung bei Heuschnupfen.', type: 'hypnose', category: 'krankheit' },

  // SCHMERZ-HYPNOSE
  { id: '0003_Migraene', title: 'VANSOL Hypnose Migraene', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Hilfe bei Migräne.', type: 'hypnose', category: 'krankheit' },
  { id: '0013_Cluster-Kopfschmerzen', title: 'VANSOL Hypnose Cluster-Kopfschmerzen', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Linderung bei Cluster-Kopfschmerzen.', type: 'hypnose', category: 'krankheit' },
  { id: '0014_Spannungskopfschmerz', title: 'VANSOL Hypnose Spannungskopfschmerz', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Lösen von Spannungskopfschmerzen.', type: 'hypnose', category: 'krankheit' },
  { id: '0019_Rueckenschmerzen', title: 'VANSOL Hypnose Rueckenschmerzen', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Entlastung für den Rücken.', type: 'hypnose', category: 'krankheit' },
  { id: '0044_Hexenschuss', title: 'VANSOL Hypnose Hexenschuss', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Hilfe bei Hexenschuss.', type: 'hypnose', category: 'krankheit' },
  { id: '0045_Ischias', title: 'VANSOL Hypnose Ischias', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Linderung bei Ischias-Beschwerden.', type: 'hypnose', category: 'krankheit' },
  { id: '0039_Fibromyalgie', title: 'VANSOL Hypnose Fibromyalgie', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Unterstützung bei Fibromyalgie.', type: 'hypnose', category: 'krankheit' },

  // VERDAUUNGS-HYPNOSE
  { id: '0001_Gastritis', title: 'VANSOL Hypnose Gastritis', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Beruhigung bei Gastritis.', type: 'hypnose', category: 'krankheit' },
  { id: '0017_Sodbrennen', title: 'VANSOL Hypnose Sodbrennen', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Hilfe bei Sodbrennen.', type: 'hypnose', category: 'krankheit' },
  { id: '0034_Reizdarmsyndrom', title: 'VANSOL Hypnose Reizdarmsyndrom', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Linderung beim Reizdarmsyndrom.', type: 'hypnose', category: 'krankheit' },
  { id: '0036_Haemorrhoiden', title: 'VANSOL Hypnose Haemorrhoiden', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Hilfe bei Hämorrhoiden.', type: 'hypnose', category: 'krankheit' },
  { id: '0035_Gicht', title: 'VANSOL Hypnose Gicht', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Unterstützung bei Gicht.', type: 'hypnose', category: 'krankheit' },

  // HAUT & ALLERGIEN
  { id: '0037_Neurodermitis', title: 'VANSOL Hypnose Neurodermitis', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Linderung bei Neurodermitis.', type: 'hypnose', category: 'krankheit' },
  { id: '0041_Akne', title: 'VANSOL Hypnose Akne', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Hilfe bei Akne.', type: 'hypnose', category: 'krankheit' },
  { id: '0042_Schuppenflechte', title: 'VANSOL Hypnose Schuppenflechte', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Unterstützung bei Schuppenflechte.', type: 'hypnose', category: 'krankheit' },

  // BEWEGUNGSAPPARAT
  { id: '0006_Rheuma-Arthritis', title: 'VANSOL Hypnose Rheuma Arthritis', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Linderung bei Rheuma & Arthritis.', type: 'hypnose', category: 'krankheit' },
  { id: '0028_Bandscheibenvorfall', title: 'VANSOL Hypnose Bandscheibenvorfall', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Hilfe bei Bandscheibenvorfall.', type: 'hypnose', category: 'krankheit' },
  { id: '0029_Sehnenentzuendung', title: 'VANSOL Hypnose Sehnenentzuendung', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Heilung bei Sehnenentzündung.', type: 'hypnose', category: 'krankheit' },
  { id: '0030_Schleimbeutelentzuendung', title: 'VANSOL Hypnose Schleimbeutelentzuendung', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Hilfe bei Schleimbeutelentzündung.', type: 'hypnose', category: 'krankheit' },
  { id: '0031_Knochenbruch', title: 'VANSOL Hypnose Knochenbruch', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Unterstützung bei Knochenbruch.', type: 'hypnose', category: 'krankheit' },
  { id: '0032_Muskelriss', title: 'VANSOL Hypnose Muskelriss', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Heilung bei Muskelriss.', type: 'hypnose', category: 'krankheit' },
  { id: '0033_Baenderriss', title: 'VANSOL Hypnose Baenderriss', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Heilung bei Bänderriss.', type: 'hypnose', category: 'krankheit' },
  { id: '0020_Karpaltunnelsyndrom', title: 'VANSOL Hypnose Karpaltunnelsyndrom', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Hilfe bei Karpaltunnelsyndrom.', type: 'hypnose', category: 'krankheit' },
  { id: '0022_Tennisarm', title: 'VANSOL Hypnose Tennisarm', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Linderung bei Tennisarm.', type: 'hypnose', category: 'krankheit' },
  { id: '0043_Fersensporn', title: 'VANSOL Hypnose Fersensporn', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Hilfe bei Fersensporn.', type: 'hypnose', category: 'krankheit' },
  { id: '0049_Krampfadern', title: 'VANSOL Hypnose Krampfadern', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Unterstützung bei Krampfadern.', type: 'hypnose', category: 'krankheit' },

  // STOFFWECHSEL & DRÜSEN
  { id: '0005_Schilddruesenunterfunktion', title: 'VANSOL Hypnose Schilddruesenunterfunktion', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Regulierung der Schilddrüsenunterfunktion.', type: 'hypnose', category: 'krankheit' },
  { id: '0050_Schilddruesenueberfunktion', title: 'VANSOL Hypnose Schilddruesenueberfunktion', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Beruhigung der Schilddrüsenüberfunktion.', type: 'hypnose', category: 'krankheit' },
  { id: '0002_DiabetesT2', title: 'VANSOL Hypnose Diabetes Typ 2', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Unterstützung bei Diabetes Typ 2.', type: 'hypnose', category: 'krankheit' },
  { id: '0004_Bluthochdruck', title: 'VANSOL Hypnose Bluthochdruck', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Senkung von Bluthochdruck.', type: 'hypnose', category: 'krankheit' },

  // FRAUENGESUNDHEIT
  { id: '0016_Endometriose', title: 'VANSOL Hypnose Endometriose', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Linderung bei Endometriose.', type: 'hypnose', category: 'krankheit' },
  { id: '0024_Eierstockzyste', title: 'VANSOL Hypnose Eierstockzyste', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Hilfe bei Eierstockzysten.', type: 'hypnose', category: 'krankheit' },
  { id: '0025_Eileiterentzuendung', title: 'VANSOL Hypnose Eileiterentzuendung', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Heilung bei Eileiterentzündung.', type: 'hypnose', category: 'krankheit' },
  { id: '0026_Brustentzuendung', title: 'VANSOL Hypnose Brustentzuendung', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Hilfe bei Brustentzündung.', type: 'hypnose', category: 'krankheit' },
  { id: '0027_Beckenentzuendung', title: 'VANSOL Hypnose Beckenentzuendung', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Linderung bei Beckenentzündung.', type: 'hypnose', category: 'krankheit' },
  { id: '0040_Menstruationsbeschwerden', title: 'VANSOL Hypnose Menstruationsbeschwerden', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Hilfe bei Menstruationsbeschwerden.', type: 'hypnose', category: 'krankheit' },

  // SONSTIGE KÖRPERLICHE
  { id: '0023_COVID', title: 'VANSOL Hypnose COVID', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Genesung nach COVID.', type: 'hypnose', category: 'krankheit' },
  { id: '0012_Grippe', title: 'VANSOL Hypnose Grippe', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Unterstützung bei Grippe.', type: 'hypnose', category: 'krankheit' },
  { id: '0007_Erkaeltung', title: 'VANSOL Hypnose Erkaeltung', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Linderung bei Erkältung.', type: 'hypnose', category: 'krankheit' },
  { id: 'Hypnose_Schlaganfall', title: 'VANSOL Hypnose Schlaganfall', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Rehabilitation nach Schlaganfall.', type: 'hypnose', category: 'krankheit' },
  { id: '0015_Multiple-Sklerose', title: 'VANSOL Hypnose Multiple-Sklerose', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Begleitung bei MS.', type: 'hypnose', category: 'krankheit' },
  { id: '0018_Tinitus', title: 'VANSOL Hypnose Tinitus', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Linderung bei Tinnitus.', type: 'hypnose', category: 'krankheit' },
  { id: '0038_Zaehneknirschen', title: 'VANSOL Hypnose Zaehneknirschen', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Entspannung gegen Zähneknirschen.', type: 'hypnose', category: 'krankheit' },
  { id: '0047_Nierensteine', title: 'VANSOL Hypnose Nierensteine', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Unterstützung bei Nierensteinen.', type: 'hypnose', category: 'krankheit' },
  { id: '0048_Gallensteine', title: 'VANSOL Hypnose Gallensteine', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Unterstützung bei Gallensteinen.', type: 'hypnose', category: 'krankheit' },
  { id: '0046_Blasenentzuendung', title: 'VANSOL Hypnose Blasenentzuendung', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Hilfe bei Blasenentzündung.', type: 'hypnose', category: 'krankheit' },
  { id: '0021_Restless-Legs-Syndrom', title: 'VANSOL Hypnose Restless-Legs-Syndrom', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Beruhigung bei Restless-Legs.', type: 'hypnose', category: 'krankheit' },

  // SEELE & GEIST
  { id: '0067_Angst_vor_Hunden', title: 'VANSOL Hypnose Angst vor Hunden', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Überwindung der Angst vor Hunden.', type: 'hypnose', category: 'seele' },
  { id: '0062_Selbstliebe', title: 'VANSOL Hypnose Selbstliebe', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/selbstliebe.jpg', description: 'Stärkung der Selbstliebe.', type: 'hypnose', category: 'seele' },
  { id: '0066_Krisen', title: 'VANSOL Hypnose Krisen', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/krisen.jpg', description: 'Begleitung in Krisenzeiten.', type: 'hypnose', category: 'seele' },
  { id: '0058_Horizont', title: 'VANSOL Hypnose Horizont', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Erweitere deinen Horizont.', type: 'hypnose', category: 'seele' },
  { id: '0052_Dein_Weg_zur_Tranformation', title: 'VANSOL Hypnose Dein Weg zur Tranformation', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Dein persönlicher Weg der Wandlung.', type: 'hypnose', category: 'seele' },
  { id: '0053_Die_Vision_deines_schlanken_Ichs', title: 'VANSOL Hypnose Die Vision deines schlanken Ichs', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Visualisiere dein schlankes Ich.', type: 'hypnose', category: 'seele' },
  { id: '0055_Vom_Alten_zum_Neuen_Ich', title: 'VANSOL Hypnose Vom Alten zum Neuen Ich', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Lass Altes los, begrüße das Neue.', type: 'hypnose', category: 'seele' },
  { id: '0064_Dein_Zukunftsich', title: 'VANSOL Hypnose Dein Zukunftsich', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Begegne deinem Zukunfts-Ich.', type: 'hypnose', category: 'seele' },
  { id: '0057_Heile_dich', title: 'VANSOL Hypnose Heile Dich', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Aktiviere deine Heilungskräfte.', type: 'hypnose', category: 'seele' },
  { id: '0059_Raum_der_Heilung', title: 'VANSOL Hypnose Raum der Heilung', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Dein innerer Raum der Heilung.', type: 'hypnose', category: 'seele' },
  { id: '0060_Wasserfall', title: 'VANSOL Hypnose Wasserfall', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Reinigung und Erfrischung.', type: 'hypnose', category: 'seele' },
  { id: '0061_Pink', title: 'VANSOL Hypnose Pink', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Die Farbe der Heilung.', type: 'hypnose', category: 'seele' },
  { id: '0063_Leuchte', title: 'VANSOL Hypnose Leuchte', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Lass dein inneres Licht leuchten.', type: 'hypnose', category: 'seele' },
  { id: '0065_Kraftoase', title: 'VANSOL Hypnose Kraftoase', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Deine innere Kraftquelle.', type: 'hypnose', category: 'seele' },

  // ABNEHMEN & ERNÄHRUNG
  { id: '0051_Heisshunger', title: 'VANSOL Hypnose Heisshunger', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Stoppe Heißhungerattacken.', type: 'hypnose', category: 'gewicht' },
  { id: '0054_Gesunde_Ernaehrung', title: 'VANSOL Hypnose Gesunde Ernaehrung', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Etabliere gesunde Ernährung.', type: 'hypnose', category: 'gewicht' },
  { id: '0056_Wasser_trinken', title: 'VANSOL Hypnose Wasser trinken', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol', image: '/images/products/audio_generic.jpg', description: 'Mehr Wasser trinken leicht gemacht.', type: 'hypnose', category: 'gewicht' }
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductByIdOrFallback(id: string): Product {
  return products.find(p => p.id === id) || products.find(p => p.id === '0062_Selbstliebe')!;
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return products.filter(p =>
    p.title.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q)
  );
}
