// Image URLs — AI-generated food photography (permanent URLs).
const BASE = "https://media.base44.com/images/public/6aa1d933daa9b05596793b9d";

export const IMAGES = {
  heroHandi: `${BASE}/4f9a64300_generated_fcb88d32.jpg`,
  southIndian: `${BASE}/8234ce248_generated_7b886878.jpg`,
  gallery: {
    naan: `${BASE}/b5fc8bcf5_generated_ba6b93f6.jpg`,
    noodles: `${BASE}/e4eb0c5a1_generated_efe19a1d.jpg`,
    gulabJamun: `${BASE}/36c848baa_generated_fe75ea50.jpg`,
    tandoori: `${BASE}/3719ec469_generated_288fa9e1.jpg`,
  },
};

// Dish name -> image URL (featured cards, menu cards, biryani collection)
export const DISH_IMAGES = {
  "Vijayawada Boneless Biryani": `${BASE}/f01e06ff6_generated_0c18a7e2.jpg`,
  "Mutton Keema Biryani": `${BASE}/d02b29b99_generated_47b02494.jpg`,
  "Chicken 65 Biryani": `${BASE}/e5c333398_generated_462bd0bf.jpg`,
  "Rajugari Kodi Pulao": `${BASE}/4ada342e7_generated_fde9f45d.jpg`,
  "Butter Chicken": `${BASE}/cfe21d714_generated_6198b669.jpg`,
  "Paneer Butter Masala": `${BASE}/afbd063dd_generated_db9b0914.jpg`,
  "Masala Dosa": `${BASE}/901c3992a_generated_0f2c9b2a.jpg`,
  "Chicken 65": `${BASE}/b28f46e74_generated_3c70551f.jpg`,
  "Mango Lassi": `${BASE}/8a6b938ad_generated_c4279c99.jpg`,
  "Apricot Delight": `${BASE}/d30fa21a_generated_4b65ced5.jpg`,
  // Biryani collection (reuse closest matching images)
  "Mutton Ghee Roast Biryani": `${BASE}/d02b29b99_generated_47b02494.jpg`,
  "Chicken Ghee Roast Biryani": `${BASE}/f01e06ff6_generated_0c18a7e2.jpg`,
  "Lamb Biryani": `${BASE}/4ada342e7_generated_fde9f45d.jpg`,
  "Shrimp Biryani": `${BASE}/e5c333398_generated_462bd0bf.jpg`,
};

export const dishImage = (name) => DISH_IMAGES[name];