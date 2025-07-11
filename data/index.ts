// data/index.ts

// Data pro experty (pro stránku s detaily experta a vyhledávání)
export const experts = {
  'ukazkovy-expert': { // Klíč odpovídá 'slug' experta
      slug: 'ukazkovy-expert',
      name: 'Ukázkový Expert',
      profession: 'Obchodník',
      avatar: '/images/expert-avatar.jpg', // Důležité: Ujistěte se, že cesta k tomuto obrázku existuje (např. public/images/expert-avatar.jpg)
      rating: 4.5,
      reviews: [
        { rating: 5, author: 'Klient A', text: 'Skvělý odborník!' },
        { rating: 4, author: 'Klient B', text: 'Velmi nápomocný.' }
      ],
      city: 'Praha'
  },
  // Zde můžete přidat další experty ve stejném formátu
};

// Data pro produkty (pro vyhledávání)
export const products = [
  { id: 'produkt-1', name: 'Ukázkový Produkt', description: 'Popis ukázkového produktu', price: 100 },
  // Zde můžete přidat další produkty
];

// Data pro služby (pro vyhledávání)
export const services = [
  { slug: 'sluzba-1', name: 'Ukázková Služba', desc: 'Popis ukázkové služby' },
  // Zde můžete přidat další služby
];