export const products = [
  {
    id: 1,
    slug: "all-purpose-cleaner",
    name: "All-Purpose Cleaner",
    description: "Plant-based formula for kitchens, counters, and more.",
    longDescription:
      "Our All-Purpose Cleaner is crafted with coconut-derived surfactants and essential oils to safely lift grease and grime without harsh chemicals. Safe for food surfaces and gentle on skin.",
    features: [
      "Plant-based, biodegradable ingredients",
      "Naturally scented with essential oils",
      "Safe for kids, pets, and food surfaces",
      "Refill-friendly aluminum bottle",
    ],
    price: 12.99,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1604335399105-a0c9c9c9b7f6?q=80&w=1887&auto=format&fit=crop",
  },
  {
    id: 2,
    slug: "glass-mirror-spray",
    name: "Glass & Mirror Spray",
    description: "Streak-free shine with zero harsh fumes.",
    longDescription:
      "A crystal-clear finish on glass, mirrors, and chrome. Our ammonia-free formula uses sugar-derived solvents for a streak-free, quick-dry clean.",
    features: [
      "Ammonia-free streak-free formula",
      "Fast drying with zero residue",
      "Safe on glass, chrome, and stainless",
      "Subtle citrus aroma",
    ],
    price: 10.5,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1615484477875-6d26667b2d38?q=80&w=1887&auto=format&fit=crop",
  },
  {
    id: 3,
    slug: "bathroom-foam-cleaner",
    name: "Bathroom Foam Cleaner",
    description: "Cuts through soap scum and hard water safely.",
    longDescription:
      "Foaming action clings to tile and glass to break down soap scum and mineral buildup. Non-chlorine, low-odor performance that actually works.",
    features: [
      "Clinging foam for longer contact",
      "Non-chlorine, low odor",
      "Great on tile, grout, and glass",
      "Rinse-free on light soils",
    ],
    price: 14.0,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1887&auto=format&fit=crop",
  },
  {
    id: 4,
    slug: "floor-concentrate",
    name: "Floor Concentrate",
    description: "Powerful clean for wood, tile, and laminate.",
    longDescription:
      "Highly concentrated plant-based cleaner that leaves floors spotless with a low-sheen finish. Mix 1:10 with water for routine cleaning.",
    features: [
      "Concentrated to reduce plastic waste",
      "Low-sheen, non-sticky finish",
      "Safe on sealed wood and stone",
      "Fresh eucalyptus scent",
    ],
    price: 16.0,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1603714228685-8d6d0d9c5b5e?q=80&w=1887&auto=format&fit=crop",
  },
];

export const getProductById = (id) => products.find((p) => String(p.id) === String(id));
