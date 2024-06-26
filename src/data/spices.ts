export type Spices = {
  id: number;
  name: string;
  description: string;
  origin: string;
  usage: string;
  aroma: string;
  flavor: string;
  healthBenefits: string;
  image: string;
};

export const dataSpices: Spices[] = [
  {
    id: 1,
    name: "galangal",
    description: "A root similar to ginger, with a sharper and more citrusy flavor.",
    origin: "Southeast Asia",
    usage: "Commonly used in Thai, Indonesian, and Malaysian cuisines for soups, curries, and marinades.",
    aroma: "Pungent, sharp, and slightly citrusy.",
    flavor: "Sharp, citrusy, and slightly piney.",
    healthBenefits: "Anti-inflammatory, digestive aid, and may boost cognitive function.",
    image: "https://example.com/images/galangal.jpg",
  },
  {
    id: 2,
    name: "ginger",
    description: "A spicy, aromatic root used fresh or dried in cooking and baking.",
    origin: "China and India",
    usage: "Used in a variety of dishes, from savory stir-fries to sweet desserts, and also in beverages like tea and ginger ale.",
    aroma: "Warm, spicy, and slightly sweet.",
    flavor: "Spicy, peppery, and slightly sweet.",
    healthBenefits: "Aids digestion, reduces nausea, and has anti-inflammatory properties.",
    image: "https://example.com/images/ginger.jpg",
  },
  {
    id: 3,
    name: "turmeric",
    description: "A bright yellow spice with a warm, bitter taste, often used for coloring and flavoring.",
    origin: "India",
    usage: "Essential in curry powders and many South Asian dishes, also known for its medicinal properties.",
    aroma: "Earthy, warm, and slightly peppery.",
    flavor: "Bitter, earthy, and slightly pungent.",
    healthBenefits: "Anti-inflammatory, antioxidant, and may improve brain function.",
    image: "https://example.com/images/turmeric.jpg",
  },
  {
    id: 4,
    name: "cinnamon",
    description: "A sweet and woody spice obtained from the inner bark of trees from the genus Cinnamomum.",
    origin: "Sri Lanka",
    usage: "Used in both sweet and savory dishes, including baked goods, beverages, and curries.",
    aroma: "Warm, sweet, and woody.",
    flavor: "Sweet, woody, and slightly spicy.",
    healthBenefits: "May lower blood sugar levels, has antioxidant properties, and can reduce heart disease risk.",
    image: "https://example.com/images/cinnamon.jpg",
  },
  {
    id: 5,
    name: "cloves",
    description: "A strongly aromatic spice made from the dried flower buds of a tree in the myrtle family.",
    origin: "Indonesia",
    usage: "Used in spice blends, baked goods, and as a key ingredient in various cuisines for its pungent flavor.",
    aroma: "Strong, pungent, and slightly sweet.",
    flavor: "Pungent, slightly sweet, and bitter.",
    healthBenefits: "Antimicrobial, may improve liver health, and rich in antioxidants.",
    image: "https://example.com/images/cloves.jpg",
  },
  {
    id: 6,
    name: "cardamom",
    description: "A spice with a strong, unique taste, often described as slightly sweet and floral.",
    origin: "India",
    usage: "Common in Indian and Middle Eastern cuisines, used in both sweet and savory dishes, as well as in teas and coffee.",
    aroma: "Sweet, floral, and slightly spicy.",
    flavor: "Sweet, floral, and slightly peppery.",
    healthBenefits: "Aids digestion, may lower blood pressure, and has anti-inflammatory effects.",
    image: "https://example.com/images/cardamom.jpg",
  },
  {
    id: 7,
    name: "cumin",
    description: "A spice with a warm, earthy flavor and aroma, used whole or ground.",
    origin: "Mediterranean to South Asia",
    usage: "Widely used in Latin American, Middle Eastern, and Indian cuisines, essential in spice blends like curry powder and garam masala.",
    aroma: "Warm, earthy, and slightly nutty.",
    flavor: "Warm, earthy, and slightly bitter.",
    healthBenefits: "Aids digestion, may improve blood cholesterol, and has antioxidant properties.",
    image: "https://example.com/images/cumin.jpg",
  },
];
