export type Category = 'selbstliebe' | 'heilung_allgemein' | 'gesunde_ernaehrung' | 'krankheiten' | 'aengste' | 'allgemein';

export interface Product {
  id: string;
  title: string;
  price: string;
  link: string;
  image: string;
  description: string;
  type: 'hypnose' | 'workshop' | 'membership';
  category: Category;
}

export const products: Product[] = [
  // ==========================================
  // WORKSHOPS (Video-Format)
  // ==========================================
  {
    id: 'hypnotisches_magenband',
    title: 'Hypnotisches Magenband (Unlimited)',
    price: '677,00 €',
    link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/hypnotischesmagenband/payment',
    image: '/Produktcover/Workshop_Hypnotisches_Magenband.jpg',
    description: 'Das Original: Dein virtuelles Magenband. Verändere dein Essverhalten ohne Verzicht und Diät.',
    type: 'workshop',
    category: 'gesunde_ernaehrung'
  },
  {
    id: 'hypnotischer_magenballon',
    title: 'Hypnotischer Magenballon',
    price: '444,00 €',
    link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/hypnotischer-magenballon/payment',
    image: '/Produktcover/Workshop_Hypnotischer_Magenballon.jpg',
    description: 'Dein virtueller Magenballon für ein früheres Sättigungsgefühl. Verändere deine Gewohnheiten nachhaltig.',
    type: 'workshop',
    category: 'gesunde_ernaehrung'
  },
  {
    id: 'the_key',
    title: 'The Key - Der Onlinekurs',
    price: '444,00 €',
    link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/the-key/payment',
    image: '/Produktcover/Workshop_The_Key.jpg',
    description: 'Befreie dich von alten Geschichten und Verletzungen. Der Schlüssel zu deinem wahren Selbst und innerer Freiheit.',
    type: 'workshop',
    category: 'selbstliebe'
  },
  {
    id: 'heile_dich_workshop',
    title: 'Heile Dich, Befreie Dich, Aktiviere Deine Selbstheilungskraefte!',
    price: '444,00 €',
    link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/online-kurs-heile-dich-befreie-dich-aktiviere-deine-selbstheilungskraefte-966a93a8/payment',
    image: '/Produktcover/Workshop_heile_dich_befreie_dich.jpg',
    description: 'Aktiviere deine Selbstheilungskräfte. Verstehe die Botschaften deines Körpers und löse unsichtbare Narben auf.',
    type: 'workshop',
    category: 'heilung_allgemein'
  },

  // ==========================================
  // MEMBERSHIP (Zweitempfehlung)
  // ==========================================
  {
    id: 'inner_circle',
    title: 'VANSOL Inner Circle',
    price: '55,00 €',
    link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/inner-circle/payment',
    image: '/Produktcover/Membership_Inner_Circle.jpg',
    description: 'Werde Teil meines exklusiven Inner Circles. Regelmäßige Live-Sessions, Community-Support und exklusive Inhalte.',
    type: 'membership',
    category: 'allgemein'
  },

  // ==========================================
  // HYPNOSE-AUDIOS (Audio-Format) | Alle €96
  // Cover: INTERNER PRODUKTNAME.jpg aus CSV
  // ==========================================

  // ATEMWEGS-HYPNOSEN
  { id: '0008_COPD', title: 'VANSOL Hypnose COPD', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/hypnose-copd/payment', image: '/Produktcover/0008_COPD.jpg', description: 'Unterstützung bei COPD.', type: 'hypnose', category: 'krankheiten' },
  { id: '0009_Asthma', title: 'VANSOL Hypnose Asthma', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Hypnose-Astma/payment', image: '/Produktcover/0009_Asthma.jpg', description: 'Befreiung bei Asthma.', type: 'hypnose', category: 'krankheiten' },
  { id: '0011_Bronchitis', title: 'VANSOL Hypnose Bronchitis', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Bronchitis/payment', image: '/Produktcover/0011_Bronchitis.jpg', description: 'Unterstützung bei Bronchitis.', type: 'hypnose', category: 'krankheiten' },
  { id: '0010_Heuschnupfen', title: 'VANSOL Hypnose Heuschnupfen', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Heuschnupfen/payment', image: '/Produktcover/0010_Heuschnupfen.jpg', description: 'Linderung bei Heuschnupfen.', type: 'hypnose', category: 'krankheiten' },

  // SCHMERZ-HYPNOSEN
  { id: '0003_Migraene', title: 'VANSOL Hypnose Migräne', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Migraene/payment', image: '/Produktcover/0003_Migraene.jpg', description: 'Hilfe bei Migräne.', type: 'hypnose', category: 'krankheiten' },
  { id: '0013_Cluster-Kopfschmerzen', title: 'VANSOL Hypnose Cluster-Kopfschmerzen', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Cluster-Kopfschmerzen/payment', image: '/Produktcover/0013_Cluster-Kopfschmerzen.jpg', description: 'Linderung bei Cluster-Kopfschmerzen.', type: 'hypnose', category: 'krankheiten' },
  { id: '0014_Spannungskopfschmerz', title: 'VANSOL Hypnose Spannungskopfschmerz', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Spannungskopfschmerzen/payment', image: '/Produktcover/0014_Spannungskopfschmerz.jpg', description: 'Lösen von Spannungskopfschmerzen.', type: 'hypnose', category: 'krankheiten' },
  { id: '0019_Rueckenschmerzen', title: 'VANSOL Hypnose Rückenschmerzen', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Rueckenschmerzen/payment', image: '/Produktcover/0019_Rückenschmerzen.jpg', description: 'Entlastung für den Rücken.', type: 'hypnose', category: 'krankheiten' },
  { id: '0044_Hexenschuss', title: 'VANSOL Hypnose Hexenschuss', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Hexenschuss/payment', image: '/Produktcover/0044_Hexenschuss.jpg', description: 'Hilfe bei Hexenschuss.', type: 'hypnose', category: 'krankheiten' },
  { id: '0045_Ischias', title: 'VANSOL Hypnose Ischias', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Ischias/payment', image: '/Produktcover/0045_Ischias.jpg', description: 'Linderung bei Ischias-Beschwerden.', type: 'hypnose', category: 'krankheiten' },
  { id: '0039_Fibromyalgie', title: 'VANSOL Hypnose Fibromyalgie', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Fibromyalgie/payment', image: '/Produktcover/0039_Fibromyalgie.jpg', description: 'Unterstützung bei Fibromyalgie.', type: 'hypnose', category: 'krankheiten' },

  // VERDAUUNGS-HYPNOSEN
  { id: '0001_Gastritis', title: 'VANSOL Hypnose Gastritis', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Gastritis/payment', image: '/Produktcover/0001_Gastritis.jpg', description: 'Beruhigung bei Gastritis.', type: 'hypnose', category: 'krankheiten' },
  { id: '0017_Sodbrennen', title: 'VANSOL Hypnose Sodbrennen', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Sodbrennen/payment', image: '/Produktcover/0017_Sodbrennen.jpg', description: 'Hilfe bei Sodbrennen.', type: 'hypnose', category: 'krankheiten' },
  { id: '0034_Reizdarmsyndrom', title: 'VANSOL Hypnose Reizdarmsyndrom', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Reizdarmsyndrom/payment', image: '/Produktcover/0034_Reizdarmsyndrom.jpg', description: 'Linderung beim Reizdarmsyndrom.', type: 'hypnose', category: 'krankheiten' },
  { id: '0036_Haemorrhoiden', title: 'VANSOL Hypnose Hämorrhoiden', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Haemorrhoiden/payment', image: '/Produktcover/0036_Hämorrhoiden.jpg', description: 'Hilfe bei Hämorrhoiden.', type: 'hypnose', category: 'krankheiten' },
  { id: '0035_Gicht', title: 'VANSOL Hypnose Gicht', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Gicht/payment', image: '/Produktcover/0035_Gicht.jpg', description: 'Unterstützung bei Gicht.', type: 'hypnose', category: 'krankheiten' },
  { id: '0048_Gallensteine', title: 'VANSOL Hypnose Gallensteine', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Gallensteine/payment', image: '/Produktcover/0048_Gallensteine.jpg', description: 'Unterstützung bei Gallensteinen.', type: 'hypnose', category: 'krankheiten' },

  // HAUT & ALLERGIEN
  { id: '0037_Neurodermitis', title: 'VANSOL Hypnose Neurodermitis', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Neurodermitis/payment', image: '/Produktcover/0037_Neurodermitis.jpg', description: 'Linderung bei Neurodermitis.', type: 'hypnose', category: 'krankheiten' },
  { id: '0041_Akne', title: 'VANSOL Hypnose Akne', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Akne/payment', image: '/Produktcover/0041_Akne.jpg', description: 'Unterstützung bei Akne.', type: 'hypnose', category: 'krankheiten' },
  { id: '0042_Schuppenflechte', title: 'VANSOL Hypnose Schuppenflechte', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Schuppenflechte/payment', image: '/Produktcover/0042_Schuppenflechte.jpg', description: 'Linderung bei Schuppenflechte.', type: 'hypnose', category: 'krankheiten' },

  // BEWEGUNGSAPPARAT
  { id: '0006_Rheuma-Arthritis', title: 'VANSOL Hypnose Rheuma-Arthritis', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Rheuma-Arthritis/payment', image: '/Produktcover/0006_RheumaArthritis.jpg', description: 'Unterstützung bei Rheuma und Arthritis.', type: 'hypnose', category: 'krankheiten' },
  { id: '0028_Bandscheibenvorfall', title: 'VANSOL Hypnose Bandscheibenvorfall', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Bandscheibenvorfall/payment', image: '/Produktcover/0028_Bandscheibenvorfall.jpg', description: 'Hilfe bei Bandscheibenvorfall.', type: 'hypnose', category: 'krankheiten' },
  { id: '0029_Sehnenentzuendung', title: 'VANSOL Hypnose Sehnenentzündung', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Sehnenentzuendung/payment', image: '/Produktcover/0029_Sehnenentzündung.jpg', description: 'Linderung bei Sehnenentzündung.', type: 'hypnose', category: 'krankheiten' },
  { id: '0030_Schleimbeutelentzuendung', title: 'VANSOL Hypnose Schleimbeutelentzündung', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Schleimbeutelentzuendung/payment', image: '/Produktcover/0030_Schleimbeutelentzündung.jpg', description: 'Hilfe bei Schleimbeutelentzündung.', type: 'hypnose', category: 'krankheiten' },
  { id: '0031_Knochenbruch', title: 'VANSOL Hypnose Knochenbruch', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Knochenbruch/payment', image: '/Produktcover/0031_Knochenbruch.jpg', description: 'Unterstützung bei Knochenbrüchen.', type: 'hypnose', category: 'krankheiten' },
  { id: '0032_Muskelriss', title: 'VANSOL Hypnose Muskelriss', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Muskelriss/payment', image: '/Produktcover/0032_Muskelriss.jpg', description: 'Unterstützung bei Muskelriss.', type: 'hypnose', category: 'krankheiten' },
  { id: '0033_Baenderriss', title: 'VANSOL Hypnose Bänderriss', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Baenderriss/payment', image: '/Produktcover/0033_Bänderriss.jpg', description: 'Hilfe bei Bänderriss.', type: 'hypnose', category: 'krankheiten' },
  { id: '0020_Karpaltunnelsyndrom', title: 'VANSOL Hypnose Karpaltunnelsyndrom', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Karpaltunnelsyndrom/payment', image: '/Produktcover/0020_Karpaltunnelsyndrom.jpg', description: 'Linderung beim Karpaltunnelsyndrom.', type: 'hypnose', category: 'krankheiten' },
  { id: '0022_Tennisarm', title: 'VANSOL Hypnose Tennisarm', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Tennisarm/payment', image: '/Produktcover/0022_Tennisarm.jpg', description: 'Hilfe beim Tennisarm.', type: 'hypnose', category: 'krankheiten' },
  { id: '0043_Fersensporn', title: 'VANSOL Hypnose Fersensporn', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Fersensporn/payment', image: '/Produktcover/0043_Fersensporn.jpg', description: 'Linderung bei Fersensporn.', type: 'hypnose', category: 'krankheiten' },
  { id: '0049_Krampfadern', title: 'VANSOL Hypnose Krampfadern', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Krampfadern/payment', image: '/Produktcover/0049_Krampfadern.jpg', description: 'Unterstützung bei Krampfadern.', type: 'hypnose', category: 'krankheiten' },

  // STOFFWECHSEL & DRÜSEN
  { id: '0005_Schilddruesenunterfunktion', title: 'VANSOL Hypnose Schilddrüsenunterfunktion', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Schilddruesenunterfunktion/payment', image: '/Produktcover/0005_Schilddruesenunterfunktion.jpg', description: 'Unterstützung bei Schilddrüsenunterfunktion.', type: 'hypnose', category: 'krankheiten' },
  { id: '0050_Schilddruesenueberfunktion', title: 'VANSOL Hypnose Schilddrüsenüberfunktion', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Schilddruesenueberfunktion/payment', image: '/Produktcover/0050_Schilddruesenueberfunktion.jpg', description: 'Unterstützung bei Schilddrüsenüberfunktion.', type: 'hypnose', category: 'krankheiten' },
  { id: '0002_DiabetesT2', title: 'VANSOL Hypnose Diabetes Typ 2', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Diabetes-Typ-2/payment', image: '/Produktcover/0002_DiabetesT2.jpg', description: 'Unterstützung bei Diabetes Typ 2.', type: 'hypnose', category: 'krankheiten' },
  { id: '0004_Bluthochdruck', title: 'VANSOL Hypnose Bluthochdruck', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Bluthochdruck/payment', image: '/Produktcover/0004_Bluthochdruck.jpg', description: 'Hilfe bei Bluthochdruck.', type: 'hypnose', category: 'krankheiten' },

  // FRAUEN-GESUNDHEIT
  { id: '0016_Endometriose', title: 'VANSOL Hypnose Endometriose', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Endometriose/payment', image: '/Produktcover/0016_Endometriose.jpg', description: 'Linderung bei Endometriose.', type: 'hypnose', category: 'krankheiten' },
  { id: '0024_Eierstockzyste', title: 'VANSOL Hypnose Eierstockzyste', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Eierstockzyste/payment', image: '/Produktcover/0024_Eierstockzyste.jpg', description: 'Unterstützung bei Eierstockzysten.', type: 'hypnose', category: 'krankheiten' },
  { id: '0025_Eileiterentzuendung', title: 'VANSOL Hypnose Eileiterentzündung', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Eileiterentzuendung/payment', image: '/Produktcover/0025_Eileiterentzündung.jpg', description: 'Hilfe bei Eileiterentzündung.', type: 'hypnose', category: 'krankheiten' },
  { id: '0026_Brustentzuendung', title: 'VANSOL Hypnose Brustentzündung', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Brustentzuendung/payment', image: '/Produktcover/0026_Brustentzündung.jpg', description: 'Linderung bei Brustentzündung.', type: 'hypnose', category: 'krankheiten' },
  { id: '0027_Beckenentzuendung', title: 'VANSOL Hypnose Beckenentzündung', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Beckenentzuendung/payment', image: '/Produktcover/0027_Beckenentzündung.jpg', description: 'Hilfe bei Beckenentzündung.', type: 'hypnose', category: 'krankheiten' },
  { id: '0040_Menstruationsbeschwerden', title: 'VANSOL Hypnose Menstruationsbeschwerden', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Menstruationsbeschwerden/payment', image: '/Produktcover/Menstruationsbeschwerden.jpg', description: 'Linderung bei Menstruationsbeschwerden.', type: 'hypnose', category: 'krankheiten' },
  { id: '0046_Blasenentzuendung', title: 'VANSOL Hypnose Blasenentzündung', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Blasenentzuendung/payment', image: '/Produktcover/0046_Blasenentzündung.jpg', description: 'Hilfe bei Blasenentzündung.', type: 'hypnose', category: 'krankheiten' },
  { id: '0047_Nierensteine', title: 'VANSOL Hypnose Nierensteine', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Nierensteine/payment', image: '/Produktcover/0047_Nierensteine.jpg', description: 'Unterstützung bei Nierensteinen.', type: 'hypnose', category: 'krankheiten' },

  // SONSTIGE KÖRPERLICHE THEMEN
  { id: '0023_COVID', title: 'VANSOL Hypnose COVID', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/COVID/payment', image: '/Produktcover/COVID.jpg', description: 'Unterstützung nach COVID.', type: 'hypnose', category: 'krankheiten' },
  { id: '0012_Grippe', title: 'VANSOL Hypnose Grippe', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Grippe/payment', image: '/Produktcover/0012_Grippe.jpg', description: 'Unterstützung bei Grippe.', type: 'hypnose', category: 'krankheiten' },
  { id: '0007_Erkaeltung', title: 'VANSOL Hypnose Erkältung', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Erkaeltung/payment', image: '/Produktcover/0007_Erkaeltung.jpg', description: 'Hilfe bei Erkältung.', type: 'hypnose', category: 'krankheiten' },
  { id: 'Hypnose_Schlaganfall', title: 'VANSOL Hypnose Schlaganfall', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Schlaganfall/payment', image: '/Produktcover/0015_Multiple-Sklerose.jpg', description: 'Unterstützung nach Schlaganfall.', type: 'hypnose', category: 'krankheiten' },
  { id: '0015_Multiple-Sklerose', title: 'VANSOL Hypnose Multiple Sklerose', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Multiple-Sklerose/payment', image: '/Produktcover/0015_Multiple-Sklerose.jpg', description: 'Unterstützung bei Multiple Sklerose.', type: 'hypnose', category: 'krankheiten' },
  { id: '0018_Tinitus', title: 'VANSOL Hypnose Tinnitus', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Tinitus/payment', image: '/Produktcover/0018_Tinitus.jpg', description: 'Linderung bei Tinnitus.', type: 'hypnose', category: 'krankheiten' },
  { id: '0038_Zaehneknirschen', title: 'VANSOL Hypnose Zähneknirschen', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Zaehneknirschen/payment', image: '/Produktcover/0038_Zähneknirschen.jpg', description: 'Hilfe bei Zähneknirschen.', type: 'hypnose', category: 'krankheiten' },
  { id: '0021_Restless-Legs-Syndrom', title: 'VANSOL Hypnose Restless-Legs-Syndrom', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Restless-Legs-Syndrom/payment', image: '/Produktcover/0021_Restless-Legs-Syndrom.jpg', description: 'Linderung beim Restless-Legs-Syndrom.', type: 'hypnose', category: 'krankheiten' },

  // ==========================================
  // SELBSTLIEBE & VERÄNDERUNG
  // ==========================================
  { id: '0062_Selbstliebe', title: 'VANSOL Hypnose Selbstliebe', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Selbstliebe/payment', image: '/Produktcover/0062_Selbstliebe.jpg', description: 'Finde den Weg zu Selbstliebe.', type: 'hypnose', category: 'selbstliebe' },
  { id: '0063_Leuchte', title: 'VANSOL Hypnose Leuchte', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Leuchte/payment', image: '/Produktcover/0063_Leuchte.jpg', description: 'Lass dein inneres Licht strahlen.', type: 'hypnose', category: 'selbstliebe' },
  { id: '0064_Dein_Zukunftsich', title: 'VANSOL Hypnose Dein Zukunfts-Ich', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Dein-Zukunftsich/payment', image: '/Produktcover/0064_Dein_Zukunftsich.jpg', description: 'Verbinde dich mit deinem Zukunfts-Ich.', type: 'hypnose', category: 'selbstliebe' },
  { id: '0065_Kraftoase', title: 'VANSOL Hypnose Kraftoase', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Kraftoase/payment', image: '/Produktcover/0065_Kraftoase.jpg', description: 'Finde deine persönliche Kraftoase.', type: 'hypnose', category: 'selbstliebe' },
  { id: '0066_Krisen', title: 'VANSOL Hypnose Krisen überwinden', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Krisen/payment', image: '/Produktcover/0066_Krisen.jpg', description: 'Kraft in Krisenzeiten finden.', type: 'hypnose', category: 'aengste' },
  { id: '0067_Angst_vor_Hunden', title: 'VANSOL Hypnose Angst vor Hunden', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Angst-vor-Hunden/payment', image: '/Produktcover/0067_Angst_vor_Hunden.jpg', description: 'Überwinde deine Angst vor Hunden.', type: 'hypnose', category: 'aengste' },

  // ==========================================
  // HEILUNG ALLGEMEIN
  // ==========================================
  { id: '0057_Heile_dich', title: 'VANSOL Hypnose Heile dich', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/heile-dich/payment', image: '/Produktcover/0057_Heile_dich2.jpg', description: 'Aktiviere deine Selbstheilungskräfte.', type: 'hypnose', category: 'heilung_allgemein' },
  { id: '0058_Horizont', title: 'VANSOL Hypnose Horizont', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Horizont/payment', image: '/Produktcover/0058_Horizont2.jpg', description: 'Erweitere deinen Horizont.', type: 'hypnose', category: 'heilung_allgemein' },
  { id: '0059_Raum_der_Heilung', title: 'VANSOL Hypnose Raum der Heilung', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Raum-der-Heilung/payment', image: '/Produktcover/0059_Raum_der_Heilung.jpg', description: 'Finde deinen inneren Raum der Heilung.', type: 'hypnose', category: 'heilung_allgemein' },
  { id: '0060_Wasserfall', title: 'VANSOL Hypnose Wasserfall', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Wasserfall/payment', image: '/Produktcover/0060_Wasserfall.jpg', description: 'Reinigung und Erfrischung durch den Wasserfall.', type: 'hypnose', category: 'heilung_allgemein' },
  { id: '0061_Pink', title: 'VANSOL Hypnose Pink', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Pink/payment', image: '/Produktcover/0061_Pink2.jpg', description: 'Eintauchen in die Farbe der Liebe.', type: 'hypnose', category: 'heilung_allgemein' },

  // ==========================================
  // GESUNDE ERNÄHRUNG
  // ==========================================
  { id: '0051_Heisshunger', title: 'VANSOL Hypnose Heißhunger', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Heisshunger/payment', image: '/Produktcover/0051_Heisshunger.jpg', description: 'Überwinde Heißhunger-Attacken.', type: 'hypnose', category: 'gesunde_ernaehrung' },
  { id: '0052_Dein_Weg_zur_Tranformation', title: 'VANSOL Hypnose Dein Weg zur Transformation', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Dein-Weg-zur-Tranformation/payment', image: '/Produktcover/0052_Dein Weg zur Tranformation.jpg', description: 'Beginne deine Transformation.', type: 'hypnose', category: 'gesunde_ernaehrung' },
  { id: '0053_Die_Vision_deines_schlanken_Ichs', title: 'VANSOL Hypnose Vision deines schlanken Ichs', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Die-Vision-deines-schlanken-Ichs/payment', image: '/Produktcover/0053_Die Vision deines schlanken Ichs.jpg', description: 'Visualisiere dein schlankes Ich.', type: 'hypnose', category: 'gesunde_ernaehrung' },
  { id: '0054_Gesunde_Ernaehrung', title: 'VANSOL Hypnose Gesunde Ernährung', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Gesunde-Ernaehrung/payment', image: '/Produktcover/0054_Gesunde_Ernährung.jpg', description: 'Entwickle ein gesundes Essverhalten.', type: 'hypnose', category: 'gesunde_ernaehrung' },
  { id: '0055_Vom_Alten_zum_Neuen_Ich', title: 'VANSOL Hypnose Vom Alten zum Neuen Ich', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Vom-Alten-zum-Neuen-Ich/payment', image: '/Produktcover/0055_Vom_Alten_zum_Neuen_Ich.jpg', description: 'Lasse dein altes Ich los.', type: 'hypnose', category: 'gesunde_ernaehrung' },
  { id: '0056_Wasser_trinken', title: 'VANSOL Hypnose Wasser trinken', price: '96,00 €', link: 'https://katrin-van-sol.my-ablefy.com/s/katrin-van-sol/Wasser-trinken/payment', image: '/Produktcover/0056_Wasser_trinken.jpg', description: 'Mehr Wasser trinken leicht gemacht.', type: 'hypnose', category: 'gesunde_ernaehrung' },
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}
