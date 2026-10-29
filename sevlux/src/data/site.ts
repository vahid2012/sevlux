export const SITE = {
  name: 'Istanbul Service',
  url: 'https://istanbulservice.ir',
  description:
    'Your trusted partner for Istanbul travel, business consulting, and real estate investment services.',
  whatsapp: '989143403431',
  instagram: 'https://instagram.com/akay.iran.travel',
  telegram: 'https://t.me/09143403431',
  email: 'info@istanbulservice.ir',
};

export const WHATSAPP_NUMBER = '989143403431';

export function whatsappUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Travel Guide', href: '/istanbul-travel-guide/' },
  { label: 'Business', href: '/istanbul-business-guide/' },
  { label: 'Real Estate', href: '/istanbul-real-estate/' },
  { label: 'Blog', href: '/blog/' },
];

export interface NavItem {
  label: string;
  href: string;
}

export interface NavGroup {
  label: string;
  href?: string;
  children?: NavItem[];
}

export const NAV_MENU: NavGroup[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Travel & Tours',
    children: [
      { label: 'Travel Guide', href: '/istanbul-travel-guide/' },
      { label: 'Guided Tours', href: '/istanbul-tours/' },
      { label: 'Tour Guide', href: '/istanbul-tour-guide/' },
      { label: 'Hotels', href: '/istanbul-hotels/' },
      { label: 'Browse & Reserve Hotels', href: '/hotels/' },
      { label: 'Book Flights', href: '/flights/' },
      { label: 'Airport Transfer', href: '/istanbul-airport-transfer/' },
      { label: 'Car Rental with Driver', href: '/istanbul-car-rental-with-driver/' },
      { label: 'VIP Services', href: '/istanbul-vip-services/' },
      { label: '— Private Jet Charter', href: '/vip-services/private-jet-charter-istanbul/' },
      { label: '— Luxury Yacht Charter', href: '/vip-services/luxury-yacht-charter-istanbul/' },
      { label: '— Restaurant Reservations', href: '/vip-services/exclusive-restaurant-reservations-istanbul/' },
      { label: '— Personal Shopper', href: '/vip-services/personal-shopper-istanbul/' },
      { label: '— Private Museum Tours', href: '/vip-services/private-museum-tours-istanbul/' },
      { label: '— VIP Event Planning', href: '/vip-services/vip-event-planning-istanbul/' },
      { label: '— VIP Security & Privacy', href: '/vip-services/vip-security-privacy-istanbul/' },
      { label: '— VIP Airport Transfer', href: '/vip-services/vip-airport-transfer-istanbul/' },
      { label: 'Hamam & Spa', href: '/istanbul-hamam-spa-reservation/' },
      { label: 'Restaurant Reservations', href: '/istanbul-restaurant-reservation/' },
      { label: 'Shopping Guide', href: '/istanbul-shopping-guide/' },
      { label: 'Medical Tourism', href: '/istanbul-medical-tourism/' },
      { label: 'Event Organization', href: '/istanbul-event-organization/' },
    ],
  },
  {
    label: 'Business',
    children: [
      { label: 'Business Guide', href: '/istanbul-business-guide/' },
      { label: 'Business Consulting', href: '/istanbul-business-consulting/' },
      { label: 'Visa & Immigration', href: '/istanbul-visa-immigration/' },
    ],
  },
  {
    label: 'Real Estate',
    children: [
      { label: 'Real Estate Guide', href: '/istanbul-real-estate/' },
    ],
  },
  { label: 'Blog', href: '/blog/' },
];

export const SERVICE_LINKS = [
  { label: 'Istanbul Hotels', href: '/istanbul-hotels/' },
  { label: 'Istanbul Tours', href: '/istanbul-tours/' },
  { label: 'Tour Guide', href: '/istanbul-tour-guide/' },
  { label: 'Restaurant Reservation', href: '/istanbul-restaurant-reservation/' },
  { label: 'Event Organization', href: '/istanbul-event-organization/' },
  { label: 'Hamam & Spa', href: '/istanbul-hamam-spa-reservation/' },
  { label: 'Airport Transfer', href: '/istanbul-airport-transfer/' },
  { label: 'Car Rental with Driver', href: '/istanbul-car-rental-with-driver/' },
  { label: 'VIP Services', href: '/istanbul-vip-services/' },
  { label: 'Shopping Guide', href: '/istanbul-shopping-guide/' },
  { label: 'Visa & Immigration', href: '/istanbul-visa-immigration/' },
  { label: 'Medical Tourism', href: '/istanbul-medical-tourism/' },
];

export const EXTERNAL_LINKS = {
  istanbulservice: 'https://İstanbulservice.ir',
  tourvizaArmeniaTurkey: 'https://tourviza.ir/%D8%AA%D9%88%D8%B1%D9%87%D8%A7%DB%8C-%D9%85%D8%B3%D8%A7%D9%81%D8%B1%D8%AA%DB%8C-%D8%A7%D8%B1%D9%88%D9%85%DB%8C%D9%87-%D8%A8%D9%87-%D8%AA%D8%B1%DA%A9%DB%8C%D9%87/',
  service365PersianLawyer: 'https://service365.ir/%d9%88%da%a9%db%8c%d9%84-%d9%81%d8%a7%d8%b1%d8%b3%db%8c-%d8%b2%d8%a8%d8%a7%d9%86-%d8%af%d8%b1-%d8%a7%d8%b3%d8%aa%d8%a7%d9%86%d8%a8%d9%88%d9%84/',
  tourvizaAntalya: 'https://tourviza.ir/%D8%AA%D9%88%D8%B1-%D8%A2%D9%86%D8%AA%D8%A7%D9%84%DB%8C%D8%A7-%D8%A7%D8%B2-%D8%A7%D8%B1%D9%88%D9%85%DB%8C%D9%87/',
  year2026Christmas: 'https://www.year2026.ir/tours/christmas-armenia-yerevan',
};
