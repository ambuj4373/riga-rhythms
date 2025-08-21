import type { Listing } from './types';
import { ListingCategory } from './types';

export const CATEGORIES: { name: string; value: ListingCategory | 'all' }[] = [
  { name: 'All', value: 'all' },
  { name: 'Restaurants', value: ListingCategory.Restaurant },
  { name: 'Cafes', value: ListingCategory.Cafe },
  { name: 'Culture', value: ListingCategory.Culture },
  { name: 'Events', value: ListingCategory.Event },
  { name: 'Parks', value: ListingCategory.Park },
  { name: 'Landmarks', value: ListingCategory.Landmark },
  { name: 'Shopping', value: ListingCategory.Shopping },
  { name: 'Nightlife', value: ListingCategory.Nightlife },
];

export const PLACES_OF_THE_DAY_IDS = [1, 6, 15, 22, 45, 101, 205];

const generateListings = (): Listing[] => {
  const initialListings: Listing[] = [
    {
      id: 1,
      name: 'Vincents',
      description: 'Exquisite fine dining with a focus on local, seasonal ingredients.',
      longDescription: 'A legendary fine dining establishment in Riga, Vincents is renowned for its innovative cuisine that celebrates the best of Latvian produce. The tasting menu is a journey through the flavors of the region, meticulously crafted by master chefs.',
      category: ListingCategory.Restaurant,
      image: 'https://picsum.photos/seed/fine+dining+riga/600/400',
      isPremium: true,
      insiderTip: "Call ahead to request Table 7 for a more private and intimate dining experience with a view of the kitchen's artistry.",
      offer: {
        title: "Complimentary Glass of Crémant",
        description: "Receive a complimentary glass of Crémant per person when you mention Rīga Rhythms Premium upon booking.",
      },
    },
    {
      id: 2,
      name: 'Latvian National Museum of Art',
      description: 'Explore the richest collection of national art in Latvia.',
      longDescription: 'Housing more than 52,000 works of art, this magnificent museum is a must-visit for anyone interested in Latvian culture and history. The beautifully renovated building itself is a masterpiece, offering a serene environment to explore art from the 19th century to the present day.',
      category: ListingCategory.Culture,
      image: 'https://picsum.photos/seed/art+museum+gallery/600/400',
      isPremium: false,
    },
    {
      id: 3,
      name: 'Positivus Festival',
      description: 'The biggest music and arts festival in the Baltics.',
      longDescription: 'An annual summer festival that brings together international chart-toppers and emerging artists. Enjoy music, art installations, and a vibrant atmosphere by the sea in Salacgrīva, a short trip from Riga. It is a cornerstone of the Latvian summer cultural calendar.',
      category: ListingCategory.Event,
      image: 'https://picsum.photos/seed/music+festival+summer/600/400',
      isPremium: false,
    },
    {
      id: 4,
      name: 'Rocket Bean Roastery',
      description: 'Specialty coffee and a vibrant, modern atmosphere.',
      longDescription: 'A haven for coffee lovers, Rocket Bean Roastery offers expertly brewed coffee from beans roasted on-site. Their brunch menu is also a local favorite, served in a spacious, industrial-chic setting that invites you to stay for hours.',
      category: ListingCategory.Cafe,
      image: 'https://picsum.photos/seed/specialty+coffee+shop/600/400',
      isPremium: false,
    },
    {
      id: 5,
      name: '3 Pavāru Restorāns "Tam labam būs augt!"',
      description: 'Creative "chef\'s table" concept with a stunning river view.',
      longDescription: 'Meaning "The 3 Chefs Restaurant - For Good Things to Grow!", this spot offers a dynamic dining experience where chefs create art on your table before the meal. It combines performance with delicious, modern Latvian cuisine.',
      category: ListingCategory.Restaurant,
      image: 'https://picsum.photos/seed/modern+latvian+cuisine/600/400',
      isPremium: false,
    },
    {
      id: 6,
      name: 'House of the Black Heads',
      description: 'A magnificent, reconstructed landmark in the Old Town.',
      longDescription: 'Originally built in the 14th century for a guild of unmarried merchants, this stunning building was destroyed in WWII and meticulously rebuilt. Its ornate facade is one of the most photographed sights in Riga, a symbol of the city\'s resilience and beauty.',
      category: ListingCategory.Landmark,
      image: 'https://picsum.photos/seed/riga+old+town+architecture/600/400',
      isPremium: true,
      insiderTip: "Don't miss the medieval cellars below the main hall. They are often overlooked but contain fascinating artifacts and a much quieter atmosphere.",
      audioGuideUrl: "/audio/house-of-blackheads.mp3",
    },
    {
      id: 7,
      name: 'Miera iela',
      description: 'Discover the "Peace Street" - Riga\'s creative and hipster quarter.',
      longDescription: 'Stroll down Miera iela to find independent boutiques, cozy cafes, art galleries, and the Laima Chocolate Museum. It\'s a vibrant neighborhood with a unique, bohemian charm that captures the creative spirit of modern Riga.',
      category: ListingCategory.Shopping,
      image: 'https://picsum.photos/seed/creative+street+riga/600/400',
      isPremium: false,
    },
    {
      id: 8,
      name: 'Kalnciema Quarter Market',
      description: 'Lively weekly market in a historic wooden architectural setting.',
      longDescription: 'Every Saturday, the Kalnciema Quarter comes alive with a market featuring local farmers, artisans, and food vendors. A great place to taste Latvian specialties, find unique souvenirs, and enjoy live music in a beautifully restored area of wooden houses.',
      category: ListingCategory.Event,
      image: 'https://picsum.photos/seed/farmers+market+latvia/600/400',
      isPremium: false,
    },
    {
      id: 9,
      name: 'Miit Coffee',
      description: 'Urban-style cafe with a passion for bikes and specialty coffee.',
      longDescription: 'Miit Coffee combines two passions: great coffee and cycling culture. It\'s a relaxed space to enjoy a flat white, a delicious vegetarian lunch, and admire the custom bikes. A hub for the city\'s urban cyclists.',
      category: ListingCategory.Cafe,
      image: 'https://picsum.photos/seed/urban+cafe+bikes/600/400',
      isPremium: false,
    },
    {
      id: 10,
      name: 'Folkklubs ALA Pagrabs',
      description: 'Lively folk club with traditional food, music, and dancing.',
      longDescription: 'Experience authentic Latvian culture in this bustling underground tavern. With a huge selection of local beers, hearty food, and live folk music most nights, it\'s a guaranteed good time and a favorite for both locals and tourists.',
      category: ListingCategory.Nightlife,
      image: 'https://picsum.photos/seed/folk+club+tavern/600/400',
      isPremium: false,
    },
    {
      id: 11,
      name: 'Art Nouveau Museum',
      description: 'An immersive journey into a stunning Art Nouveau apartment.',
      longDescription: 'Located in the former apartment of renowned Latvian architect Konstantīns Pēkšēns, this museum perfectly preserves the interior of a Riga apartment from the early 20th century, complete with period furniture and decor.',
      category: ListingCategory.Culture,
      image: 'https://picsum.photos/seed/art+nouveau+interior/600/400',
      isPremium: true,
      insiderTip: 'After touring the apartment, don\'t forget to go up the main building\'s grand staircase. It\'s not officially part of the museum tour but is one of the most beautiful Art Nouveau staircases in the world and is publicly accessible.',
      audioGuideUrl: '/audio/art-nouveau-museum.mp3',
      offer: {
        title: '15% Off Souvenirs',
        description: 'Show your Rīga Rhythms Premium app at the museum gift shop to receive a 15% discount on your purchase.'
      }
    },
     {
      id: 12,
      name: 'Bastejkalna Parks',
      description: 'A romantic park with a canal, bridges, and beautiful sculptures.',
      longDescription: 'This 19th-century park surrounds the Freedom Monument and is perfect for a peaceful stroll, a boat ride on the canal, or simply relaxing on a bench. It forms part of the green belt around the Old Town.',
      category: ListingCategory.Park,
      image: 'https://picsum.photos/seed/riga+canal+park/600/400',
      isPremium: false,
    },
    {
      id: 13,
      name: 'Andalūzijas Suns',
      description: 'Artsy cafe and bar with a bohemian vibe.',
      longDescription: 'Named after the surrealist film, this cafe in the Bergs Bazaar is a long-standing favorite among Riga\'s creative crowd for its artistic atmosphere, cozy courtyard, and lively evening events.',
      category: ListingCategory.Cafe,
      image: 'https://picsum.photos/seed/artsy+courtyard+cafe/600/400',
      isPremium: false,
    },
    {
      id: 14,
      name: 'Bibliotēka No. 1',
      description: 'An urban oasis for fine dining opposite a beautiful park.',
      longDescription: 'This stylish restaurant offers a sophisticated dining experience with a view of Vērmanes Garden. The menu features modern European cuisine with an emphasis on quality and elegant presentation. Its interior is as impressive as its food.',
      category: ListingCategory.Restaurant,
      image: 'https://picsum.photos/seed/elegant+restaurant+view/600/400',
      isPremium: true,
      insiderTip: 'For the best view and a more relaxed atmosphere, book a table on their terrace during the summer months. It overlooks the park and is perfect for a long lunch.',
       offer: {
        title: "Free Signature Dessert",
        description: "Premium members get a complimentary signature dessert with any main course ordered.",
      },
    },
    {
      id: 15,
      name: 'Museum of the Occupation of Latvia',
      description: 'A poignant look at Latvia\'s history under totalitarian regimes.',
      longDescription: 'This museum provides a powerful and essential understanding of the hardships Latvia faced during the Soviet and Nazi occupations from 1940 to 1991. The exhibits are a moving testament to the resilience of the Latvian people.',
      category: ListingCategory.Culture,
      image: 'https://picsum.photos/seed/history+museum+dark/600/400',
      isPremium: false,
    },
  ];
  
  const templates = {
    [ListingCategory.Restaurant]: {
      names: ['Riviera', 'Mio', 'Kaļķu Vārti', 'Province', 'Aqua Luna', 'Valtera Restorāns', 'COD Robata Grill', 'Neiburgs', 'Le Dome', 'Ferma', 'Rozengrāls', 'Muusu'],
      descriptions: ['Modern Mediterranean dishes in an elegant setting.', 'Authentic Italian flavors with a romantic ambiance.', 'A contemporary twist on classic Latvian cuisine.', 'Hearty, traditional Latvian food in a rustic atmosphere.', 'Riverside dining with spectacular city views.', 'Celebrates the farm-to-table philosophy with local produce.', 'Japanese robata grill and sushi of the highest quality.', 'Stylish hotel restaurant known for its refined menu.', 'Renowned fish restaurant located in a historic building.', 'High-end restaurant with a creative and seasonal menu.', 'Step back in time in this medieval-themed restaurant.', 'Artful dishes served in a minimalist, chic interior.'],
      keywords: 'restaurant+food+dining'
    },
    [ListingCategory.Culture]: {
      names: ['Wagner Hall', 'Riga Bourse Art Museum', 'National History Museum', 'Laima Chocolate Museum', 'Latvian War Museum', 'Pauls Stradiņš Museum for History of Medicine', 'The World of Hat Museum', 'Museum of Decorative Arts and Design'],
      descriptions: ['The historic concert hall where Richard Wagner once worked.', 'Foreign art from ancient times to the present day.', 'Chronicles the history of Latvia from ancient times.', 'A sweet and interactive history of Latvia\'s famous chocolate.', 'Exhibits on Latvia\'s military history from ancient times.', 'One of the largest medical history museums in the world.', 'A unique collection of hats and headwear from around the globe.', 'Showcasing the best of Latvian design from the 20th century onwards.'],
      keywords: 'museum+art+culture+history'
    },
    [ListingCategory.Event]: {
      names: ['Jāņi Celebration', 'Riga Opera Festival', 'Latvian Song and Dance Festival', 'Rimi Riga Marathon', 'Salsa Festival', 'Craft Beer Weekend', 'Street Food Festival', 'International Film Festival "Baltic Pearl"', 'Design Week', 'White Night (Baltā Nakts)', 'Christmas Markets', 'Komēta Festival'],
      descriptions: ['Experience the magic of the traditional Latvian midsummer festival.', 'A showcase of the best new productions of the opera season.', 'A massive and spectacular celebration of Latvian culture held every five years.', 'The biggest running event in the Baltic states.', 'A weekend of passionate dancing with workshops and parties.', 'Taste the best local and international craft brews.', 'Discover diverse and delicious street food from around the world.', 'A prestigious cinema event screening world classics and new films.', 'A week celebrating the best of Latvian and international design.', 'An annual contemporary culture forum with events all night long.', 'Festive markets in the Old Town with mulled wine and gifts.', 'A non-commercial culture and music festival on Daugavgriva island.'],
      keywords: 'festival+event+crowd+music'
    },
    [ListingCategory.Cafe]: {
      names: ['Art Cafe Sienna', 'Black Magic Balsam Bar', 'Parunāsim. Kafe\'teeka', 'Rigensis', 'Kuuka Kafe', 'Caffeine', 'Stars Coffee', 'Tinto', 'Innocent Cafe', 'Mierā', 'Trusis Kafe', 'PAGALMS'],
      descriptions: ['An elegant, art-filled cafe perfect for a quiet moment.', 'Discover the secrets of Riga\'s famous herbal liqueur.', 'A cozy, antique-filled cafe for a heart-to-heart chat.', 'Old-world charm with classic cakes and pastries.', 'Famous for its delicious cakes and cozy atmosphere.', 'A popular local chain for a quick and reliable coffee fix.', 'Grab your favorite coffee drink in this well-known cafe.', 'A stylish spot for wine, coffee, and light bites.', 'One of the pioneers of specialty coffee culture in Riga.', 'A creative cafe on the famous Miera iela.', 'A charming vegetarian cafe with a creative menu.', 'A hidden gem in a courtyard with a relaxed vibe.'],
      keywords: 'cafe+coffee+pastry+cozy'
    },
    [ListingCategory.Park]: {
        names: ['Vērmanes Garden', 'Kronvalda Park', 'Esplanāde Park', 'Victory Park (Uzvaras Parks)', 'Mežaparks', 'Arkādija Park', 'Dzegužkalns', 'Lucavsala Recreation Park'],
        descriptions: ['Riga\'s second oldest public garden, perfect for a chess game or a walk.', 'Home to fountains, monuments, and the Riga Congress Centre.', 'A spacious park located between the Art Museum and the Orthodox Cathedral.', 'A large memorial park on the left bank of the Daugava.', 'A vast park with a zoo, an amusement park, and a large lake.', 'A picturesque park in Pārdaugava with small waterfalls and bridges.', 'The highest natural point in Riga, offering great views.', 'An island park for swimming, sports, and relaxing by the river.'],
        keywords: 'park+nature+green+trees'
    },
    [ListingCategory.Landmark]: {
        names: ['Freedom Monument', 'Riga Cathedral', 'St. Peter\'s Church', 'Three Brothers', 'Swedish Gate', 'Powder Tower', 'Riga Castle', 'The Cat House', 'Academy of Sciences "Stalin\'s Birthday Cake"'],
        descriptions: ['An iconic symbol of Latvia\'s freedom and independence.', 'A majestic medieval cathedral with a world-famous organ.', 'Offers breathtaking panoramic views of Riga from its spire.', 'The oldest complex of dwelling houses in Riga.', 'The last remaining gate from the old city walls.', 'A massive stone tower, once part of Riga\'s fortifications.', 'The official residence of the President of Latvia.', 'Famous for the two cat sculptures with arched backs on its roof.', 'An example of Stalinist architecture with an observation deck.'],
        keywords: 'landmark+architecture+historic+building'
    },
    [ListingCategory.Shopping]: {
        names: ['Riga Central Market', 'Bergs Bazaar', 'Galerija Centrs', 'Origo', 'Spice', 'Stockmann', 'Riija', 'Look at Riga'],
        descriptions: ['One of Europe\'s largest markets, housed in former Zeppelin hangars.', 'An elegant historical shopping passage with boutiques and cafes.', 'A modern shopping mall inside a beautiful historic building.', 'A shopping center connected to the central railway station.', 'A large shopping complex with a wide variety of stores.', 'A premium department store offering fashion, cosmetics, and food.', 'A craft and design store showcasing contemporary Latvian artisans.', 'A popular souvenir shop with unique and tasteful gifts.'],
        keywords: 'shopping+store+boutique+market'
    },
    [ListingCategory.Nightlife]: {
        names: ['Skyline Bar', 'Coyote Fly', 'Kaļķu Vārti Club', 'Rock Cafe', 'Cuba Cafe', 'B Bārs', 'Herbārijs', 'Labietis'],
        descriptions: ['Enjoy cocktails with the best panoramic view of Riga.', 'One of the city\'s most popular and largest nightclubs.', 'A trendy club with several dance floors in the heart of Old Town.', 'A lively spot with live music, karaoke, and a fun atmosphere.', 'A vibrant bar with a Latin American theme and great cocktails.', 'A stylish bar famous for its extensive Black Balsam cocktail menu.', 'A rooftop "botanical garden" cocktail bar with amazing views.', 'A craft brewery and pub specializing in unique Latvian beers.'],
        keywords: 'bar+nightlife+cocktail+club'
    }
  };

  const generatedListings: Listing[] = [];
  const totalListings = 1000;
  let id = initialListings.length + 1;

  while (generatedListings.length < totalListings - initialListings.length) {
    const categoryValues = Object.keys(templates) as ListingCategory[];
    const category = categoryValues[id % categoryValues.length];
    const categoryTemplate = templates[category];
    
    const name = categoryTemplate.names[id % categoryTemplate.names.length];
    const description = categoryTemplate.descriptions[id % categoryTemplate.descriptions.length];
    const seed = `${categoryTemplate.keywords}+${id}`;
    
    generatedListings.push({
      id,
      name: `${name} #${Math.floor(id / categoryTemplate.names.length)}`,
      description,
      longDescription: `${description} Located in the vibrant city of Riga, this establishment is a must-visit for anyone looking to experience the best the city has to offer. With its unique atmosphere and high-quality offerings, it promises an unforgettable experience. This description is expanded to provide more context about what makes this place special, inviting visitors to explore further and enjoy the local culture.`,
      category,
      image: `https://picsum.photos/seed/${seed}/600/400`,
      isPremium: Math.random() < 0.2,
    });
    id++;
  }

  return [...initialListings, ...generatedListings];
};

export const LISTINGS: Listing[] = generateListings();


export const RIGA_FACTS: string[] = [
  "Riga has the highest concentration of Art Nouveau architecture in the world.",
  "The Christmas tree tradition is believed to have started in Riga in 1510.",
  "Riga's Central Market is one of the largest and oldest in Europe, housed in former Zeppelin hangars.",
  "The Daugava River, which flows through Riga, is Latvia's largest river.",
  "Latvian is one of the oldest and most unchanged languages in Europe.",
  "Riga is known as the 'Paris of the North' for its beautiful architecture.",
  "The iconic Freedom Monument is affectionately nicknamed 'Milda'.",
  "Riga Black Balsam, a traditional herbal liqueur, has been made since 1752.",
  "The Latvian Song and Dance Festival, held in Riga, is a UNESCO Masterpiece of Oral and Intangible Heritage.",
  "About 50% of Latvia is covered by forests.",
  "The white stork is the national bird of Latvia.",
  "Ice hockey is the most popular sport in Latvia.",
  "Riga's Old Town is a UNESCO World Heritage site.",
  "The VEF Minox, the world's most famous subminiature camera, was invented in Riga.",
  "The Three Brothers are the oldest complex of dwelling houses in Riga.",
  "St. Peter's Church in Riga once had the tallest wooden spire in Europe.",
  "Jeans were invented by a Riga-born tailor named Jākobs Jufess (Jacob W. Davis).",
  "The first state-supported theater in Riga was the German-language Stadttheater, where Richard Wagner once worked.",
  "Riga is home to the largest collection of vintage cars in the Baltics at the Riga Motor Museum.",
  "Latvia was the first of the three Baltic states to host the Eurovision Song Contest, in Riga in 2003.",
  ...Array.from({ length: 480 }, (_, i) => `Generated fact number ${i + 21}: Riga's history is both long and fascinating, with many tales yet to be told. Explore more to find them!`)
];

export const RIGA_MOODS: { mood: string; icon: string; color: string; description: string }[] = [
    { mood: 'Vibrant & Energetic', icon: '⚡️', color: 'text-amber-500', description: "The city is buzzing with activity and life." },
    { mood: 'Calm & Contemplative', icon: '🧘', color: 'text-blue-500', description: "A peaceful atmosphere, perfect for a quiet stroll." },
    { mood: 'Creative & Inspired', icon: '🎨', color: 'text-purple-500', description: "Art and culture are in the air today." },
    { mood: 'Historic & Proud', icon: '🏛️', color: 'text-stone-600', description: "A day to connect with the city's deep roots." },
    { mood: 'Festive & Joyful', icon: '🎉', color: 'text-pink-500', description: "There's a sense of celebration all around." },
    { mood: 'Cozy & Hygge', icon: '☕', color: 'text-orange-700', description: "Perfect for enjoying a warm drink in a cafe." },
    { mood: 'Mysterious & Foggy', icon: '🌫️', color: 'text-gray-500', description: "The old streets hold secrets in the mist." },
];