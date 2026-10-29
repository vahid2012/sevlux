export interface FlightDestination {
  d: string;
  ap: string;
  al: string;
  t: string;
  kw: string;
  tip: string;
  bt: string;
  img: string;
}

export const FLIGHT_HERO_IMAGE =
  'https://images.pexels.com/photos/20015429/pexels-photo-20015429.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export const FLIGHT_DESTINATIONS: FlightDestination[] = [
  { d: 'Dubai', ap: 'DXB', al: 'Emirates, Turkish Airlines, Flydubai, Pegasus, AJet', t: '4h15m–4h30m', kw: 'Istanbul to Dubai flights', tip: 'Afternoon flights cheaper; Tue/Wed/Sat cheaper; book 2–3 months ahead.', bt: '2–3 months ahead', img: 'https://images.pexels.com/photos/18341554/pexels-photo-18341554.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { d: 'London', ap: 'LHR/LGW/STN/LTN', al: 'Pegasus, Turkish Airlines, British Airways, Wizz Air, AJet', t: '4h–4h10m', kw: 'Istanbul to London direct flights', tip: 'October cheapest; book 5 weeks ahead; compare all London airports.', bt: '5 weeks ahead', img: 'https://images.pexels.com/photos/39473887/pexels-photo-39473887.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { d: 'Paris', ap: 'CDG/ORY', al: 'Turkish Airlines, Air France, Pegasus, AJet, Transavia France', t: '3h40m–3h45m', kw: 'Istanbul to Paris flights', tip: 'November cheapest; book 2–3 months ahead.', bt: '2–3 months ahead', img: 'https://images.pexels.com/photos/16496484/pexels-photo-16496484.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { d: 'Tbilisi', ap: 'TBS', al: 'Turkish Airlines, AJet, Pegasus, regional carriers', t: '2h10m', kw: 'cheap flights Istanbul to Tbilisi', tip: 'Book 6–8 weeks ahead.', bt: '6–8 weeks ahead', img: 'https://images.pexels.com/photos/7539985/pexels-photo-7539985.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { d: 'Baku', ap: 'GYD', al: 'AZAL, Turkish Airlines, AJet, Pegasus', t: '2h45m–2h51m', kw: 'Istanbul to Baku direct flights', tip: 'Book ~40 days ahead; Tue/Wed/Sat cheaper; November cheapest.', bt: '~40 days ahead', img: 'https://images.pexels.com/photos/8412720/pexels-photo-8412720.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { d: 'Amsterdam', ap: 'AMS', al: 'KLM, Turkish Airlines, Pegasus, AJet, TUI Netherlands', t: '3h25m–3h31m', kw: 'Istanbul to Amsterdam flights', tip: 'Midweek cheaper; ~6 direct flights daily.', bt: 'Midweek', img: 'https://images.pexels.com/photos/12705128/pexels-photo-12705128.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { d: 'Athens', ap: 'ATH', al: 'Aegean Airlines, Pegasus, Turkish Airlines', t: '1h25m–1h30m', kw: 'cheap flights Istanbul to Athens', tip: 'Book 5 weeks ahead; October cheapest; Tuesday cheapest.', bt: '5 weeks ahead', img: 'https://images.pexels.com/photos/5961718/pexels-photo-5961718.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { d: 'Rome', ap: 'FCO', al: 'Turkish Airlines, AJet, Pegasus, ITA Airways', t: '2h40m–2h55m', kw: 'Istanbul to Rome direct flights', tip: 'Travel outside summer; sample one-way from $68.', bt: 'Outside summer', img: 'https://images.pexels.com/photos/14836534/pexels-photo-14836534.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { d: 'Antalya', ap: 'AYT', al: 'Turkish Airlines, Pegasus, AJet', t: '1h15m', kw: 'cheap flights Istanbul to Antalya', tip: 'Busiest domestic route; choose midweek.', bt: 'Midweek', img: 'https://images.pexels.com/photos/18761176/pexels-photo-18761176.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { d: 'Ankara', ap: 'ESB', al: 'Turkish Airlines, AJet, Pegasus', t: '1h5m–1h10m', kw: 'cheap flights Istanbul to Ankara', tip: 'September cheapest; early/late flights cheaper; from ~$25.', bt: 'September', img: 'https://images.pexels.com/photos/29043804/pexels-photo-29043804.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
];

export const FLIGHT_FAQS = [
  { q: 'What is the cheapest destination from Istanbul?', a: 'Ankara and Antalya are the cheapest; Istanbul to Ankara flights start from about $25.' },
  { q: 'What is the best time to book flights to Europe?', a: 'Book 5–8 weeks before departure for the best fares.' },
  { q: 'Are there direct flights from Istanbul to Dubai?', a: 'Yes, with about 254 direct flights per week.' },
  { q: 'Which airline flies most often from Istanbul to Antalya?', a: 'Turkish Airlines, with about 110 flights per week.' },
];
