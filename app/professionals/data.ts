export const experts = {
  'jan-novak': {
    name: 'Jan Novák',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    profession: 'Elektrikář',
    city: 'Praha',
    rating: 4.8,
    overview: `Jan má více než 15 let zkušeností s elektroinstalacemi v domácnostech i průmyslu. Specializuje se na moderní technologie, chytré domácnosti a bezpečnostní revize.`,
    membership: {
      type: 'Platinum',
      perks: [
        'Ověřený odborník',
        'Prioritní zobrazení v katalogu',
        'Možnost přijímat poptávky online',
        'Odborné certifikace',
      ],
    },
    reviews: [
      {
        author: 'Petr S.',
        text: 'Rychlá domluva, precizní práce. Doporučuji!',
        rating: 5,
      },
      {
        author: 'Marie D.',
        text: 'Oprava elektroinstalace proběhla bez problémů.',
        rating: 4,
      },
    ],
  },
  'petr-svoboda': {
    name: 'Petr Svoboda',
    avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
    profession: 'Tesař',
    city: 'Brno',
    rating: 4.6,
    overview: `Petr pracuje jako tesař již 10 let. Má zkušenosti s rekonstrukcemi střech, dřevostaveb i výrobou nábytku na míru.`,
    membership: {
      type: 'Gold',
      perks: [
        'Ověřený odborník',
        'Zvýhodněné poplatky',
        'Možnost využívat partnerské slevy',
      ],
    },
    reviews: [
      {
        author: 'Karel H.',
        text: 'Střecha hotová v termínu, doporučuji.',
        rating: 5,
      },
    ],
  },
  'marie-dvorakova': {
    name: 'Marie Dvořáková',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    profession: 'Malířka',
    city: 'Plzeň',
    rating: 4.9,
    overview: `Marie se věnuje malování a dekorativním technikám. Pomůže s vymalováním bytu i návrhem barevného řešení.`,
    membership: {
      type: 'Silver',
      perks: [
        'Ověřený odborník',
        'Základní zobrazení v katalogu',
      ],
    },
    reviews: [
      {
        author: 'Lenka N.',
        text: 'Krásné barvy, skvělá domluva.',
        rating: 5,
      },
      {
        author: 'Tomáš F.',
        text: 'Všechno v pořádku, doporučuji.',
        rating: 4,
      },
    ],
  },
};