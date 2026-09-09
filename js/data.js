// ============================================================
// NEW RED OVEN — Business config + full menu data
// ============================================================

const BUSINESS = {
  name: "New Red Oven Caterers & Biryani Center",
  shortName: "New Red Oven",
  phoneDisplay: "0311 7337888",
  phoneTel: "+923117337888",
  whatsappNumber: "923117337888",
  address: "Unnamed Road, Block 3, Shah Faisal Colony No. 3, Shah Faisal Town, Karachi, Pakistan 75230",
  hours: "1:00 PM – 3:00 AM, Daily",
  instagram: "@newredoven.pk",
  instagramUrl: "https://instagram.com/newredoven.pk",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=New+Red+Oven+Caterers+%26+Biryani+Center+Shah+Faisal+Colony+No+3+Karachi",
};

// Food images — matched by category/dish as closely as possible.
const IMG = {
  biryaniChicken: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=800&q=80",
  biryaniBeef: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=800&q=80",
  biryaniSmoke: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&q=80",
  biryaniMatka: "https://images.unsplash.com/photo-1642821373181-696a54913e93?w=800&q=80",
  pulao: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800&q=80",
  degiBiryani: "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?w=800&q=80",
  tikka: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&q=80",
  malaiTikka: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=800&q=80",
  seekhKabab: "https://images.unsplash.com/photo-1626082927389-6cd097cee6a6?w=800&q=80",
  bbqPlatter: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
  boti: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=800&q=80",
  karahi: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80",
  handi: "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?w=800&q=80",
  paneerHandi: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80",
  burger: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
  cheeseBurger: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80",
  sandwich: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=800&q=80",
  broast: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&q=80",
  fries: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=80",
  roll: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=80",
  cheeseRoll: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=80",
};

// ============================================================
// MENU — category key, name, dishes
// price: number (single price) OR { half, full } OR { label, price } pairs
// ============================================================
const MENU = [
  {
    key: "biryani",
    label: "Biryani & Rice",
    items: [
      { id: "b1", name: "Chicken Biryani", desc: "Slow-cooked layered rice with tender chicken and warm spice.", img: IMG.biryaniChicken, variants: [{ label: "Half", price: 200 }, { label: "Full", price: 400 }] },
      { id: "b2", name: "Beef Biryani", desc: "Rich beef biryani cooked in a deep masala base.", img: IMG.biryaniBeef, variants: [{ label: "Half", price: 250 }, { label: "Full", price: 500 }] },
      { id: "b3", name: "Chicken Pulao", desc: "Fragrant chicken pulao, mild and aromatic.", img: IMG.pulao, variants: [{ label: "Half", price: 200 }, { label: "Full", price: 400 }] },
      { id: "b4", name: "Beef Pulao", desc: "Classic beef pulao with whole spices.", img: IMG.pulao, variants: [{ label: "Half", price: 250 }, { label: "Full", price: 500 }] },
      { id: "b5", name: "Beef Nalli Biryani", desc: "Bone-marrow beef biryani, deeply flavoured.", img: IMG.biryaniBeef, variants: [{ label: "Regular", price: 1300 }] },
      { id: "b6", name: "Chicken Family Pack Biryani", desc: "Generous family-size chicken biryani.", img: IMG.biryaniChicken, variants: [{ label: "Family Pack", price: 1050 }] },
      { id: "b7", name: "Beef Family Pack Biryani", desc: "Generous family-size beef biryani.", img: IMG.biryaniBeef, variants: [{ label: "Family Pack", price: 1300 }] },
      { id: "b8", name: "Chicken Biryani (Order to Cook)", desc: "Freshly cooked to order for maximum flavour.", img: IMG.biryaniChicken, variants: [{ label: "Half", price: 1250 }, { label: "Full", price: 2500 }] },
      { id: "b9", name: "Beef White Biryani", desc: "Creamy white-masala beef biryani.", img: IMG.biryaniBeef, variants: [{ label: "Half", price: 1400 }, { label: "Full", price: 2800 }] },
      { id: "b10", name: "Fish Biryani (Order to Cook)", desc: "Fresh fish biryani, made on order.", img: IMG.biryaniChicken, variants: [{ label: "Half", price: 1700 }, { label: "Full", price: 3400 }] },
      { id: "b11", name: "Mutton Biryani (Order to Cook)", desc: "Rich mutton biryani, made on order.", img: IMG.biryaniBeef, variants: [{ label: "Half", price: 1800 }, { label: "Full", price: 3600 }] },
      { id: "b12", name: "Beef Biryani (Premium)", desc: "Premium beef biryani preparation.", img: IMG.biryaniBeef, variants: [{ label: "Half", price: 1350 }, { label: "Full", price: 2700 }] },
      { id: "b13", name: "Red Oven Live Smoke Chicken Biryani", desc: "Our signature smoked chicken biryani.", img: IMG.biryaniSmoke, variants: [{ label: "Half", price: 1300 }, { label: "Full", price: 2600 }], signature: true },
      { id: "b14", name: "Bombay Matka Biryani", desc: "Slow-cooked in a clay matka for authentic aroma.", img: IMG.biryaniMatka, variants: [{ label: "Half", price: 1400 }, { label: "Full", price: 2800 }], signature: true },
      { id: "b15", name: "Chicken White Biryani", desc: "Mild, creamy white chicken biryani.", img: IMG.biryaniChicken, variants: [{ label: "Half", price: 1300 }, { label: "Full", price: 2600 }] },
      { id: "b16", name: "1 KG Chicken Degi Biryani", desc: "Large-format degi chicken biryani.", img: IMG.degiBiryani, variants: [{ label: "1 KG", price: 2500 }] },
      { id: "b17", name: "1 KG Beef Curry Biryani", desc: "Large-format beef curry biryani.", img: IMG.degiBiryani, variants: [{ label: "1 KG", price: 3200 }] },
      { id: "b18", name: "1.5 KG Chicken Degi Biryani", desc: "Extra-large degi chicken biryani.", img: IMG.degiBiryani, variants: [{ label: "1.5 KG", price: 3800 }] },
      { id: "b19", name: "1.5 KG Beef Degi Biryani", desc: "Extra-large degi beef biryani.", img: IMG.degiBiryani, variants: [{ label: "1.5 KG", price: 4800 }] },
      { id: "b20", name: "2 KG Chicken Degi Biryani", desc: "Party-size degi chicken biryani.", img: IMG.degiBiryani, variants: [{ label: "2 KG", price: 5000 }] },
      { id: "b21", name: "2 KG Beef Curry Biryani", desc: "Party-size beef curry biryani.", img: IMG.degiBiryani, variants: [{ label: "2 KG", price: 6400 }] },
    ]
  },
  {
    key: "bbq",
    label: "BBQ",
    items: [
      { id: "q1", name: "Chicken Tikka Chest", desc: "Charcoal-grilled chest piece, marinated overnight.", img: IMG.tikka, variants: [{ label: "Regular", price: 520 }], signature: true },
      { id: "q2", name: "Chicken Tikka Leg", desc: "Charcoal-grilled leg piece, marinated overnight.", img: IMG.tikka, variants: [{ label: "Regular", price: 470 }] },
      { id: "q3", name: "Chicken Malai Tikka Chest", desc: "Creamy malai marinade, chest piece.", img: IMG.malaiTikka, variants: [{ label: "Regular", price: 520 }] },
      { id: "q4", name: "Chicken Malai Tikka Leg", desc: "Creamy malai marinade, leg piece.", img: IMG.malaiTikka, variants: [{ label: "Regular", price: 470 }] },
      { id: "q5", name: "Afghani Tikka Chest", desc: "Afghani-style marinade, chest piece.", img: IMG.tikka, variants: [{ label: "Regular", price: 520 }] },
      { id: "q6", name: "Afghan Tikka Leg", desc: "Afghani-style marinade, leg piece.", img: IMG.tikka, variants: [{ label: "Regular", price: 470 }] },
      { id: "q7", name: "Chicken Bihari Tikka Chest", desc: "Bihari spice blend, chest piece.", img: IMG.tikka, variants: [{ label: "Regular", price: 520 }] },
      { id: "q8", name: "Chicken Bihari Tikka Leg", desc: "Bihari spice blend, leg piece.", img: IMG.tikka, variants: [{ label: "Regular", price: 470 }] },
      { id: "q9", name: "Dry Balouchi Tikka", desc: "Balouchi-style dry roasted tikka.", img: IMG.tikka, variants: [{ label: "Half", price: 900 }, { label: "Full", price: 1800 }] },
      { id: "q10", name: "BBQ Platter", desc: "A generous mixed grill platter. Serves 4–5 persons (Half).", img: IMG.bbqPlatter, variants: [{ label: "Half (4–5 persons)", price: 5000 }, { label: "Full (7–8 persons)", price: 10000 }], signature: true },
      { id: "q11", name: "Seekh Kabab", desc: "Classic minced-meat seekh kabab.", img: IMG.seekhKabab, variants: [{ label: "Half", price: 420 }, { label: "Full", price: 840 }] },
      { id: "q12", name: "Chandan Kabab", desc: "Signature chandan-style kabab.", img: IMG.seekhKabab, variants: [{ label: "Half", price: 420 }, { label: "Full", price: 840 }] },
      { id: "q13", name: "Reshmi Kabab", desc: "Soft, creamy reshmi kabab.", img: IMG.seekhKabab, variants: [{ label: "Half", price: 420 }, { label: "Full", price: 840 }] },
      { id: "q14", name: "Turkish Kebab", desc: "Turkish-style spiced kebab.", img: IMG.seekhKabab, variants: [{ label: "Half", price: 500 }, { label: "Full", price: 1000 }] },
      { id: "q15", name: "Gola Kebab", desc: "Round-shaped minced kebab.", img: IMG.seekhKabab, variants: [{ label: "Half", price: 420 }, { label: "Full", price: 840 }] },
      { id: "q16", name: "Beef Behari", desc: "Beef behari boti, charcoal-grilled.", img: IMG.boti, variants: [{ label: "Half", price: 420 }, { label: "Full", price: 840 }] },
    ]
  },
  {
    key: "pakistani",
    label: "Pakistani Foods",
    items: [
      { id: "p1", name: "Chicken Peshawari Karahi", desc: "Traditional Peshawari-style karahi.", img: IMG.karahi, variants: [{ label: "Half", price: 1300 }, { label: "Full", price: 2400 }], signature: true },
      { id: "p2", name: "Chicken White Karahi", desc: "Mild, creamy white karahi.", img: IMG.karahi, variants: [{ label: "Half", price: 1400 }, { label: "Full", price: 2800 }] },
      { id: "p3", name: "Chicken White Karahi with Butter", desc: "White karahi finished with extra butter.", img: IMG.karahi, variants: [{ label: "Half", price: 1500 }, { label: "Full", price: 3000 }] },
      { id: "p4", name: "Chicken Shinwari Karahi", desc: "Shinwari-style, minimal spice, maximum flavour.", img: IMG.karahi, variants: [{ label: "Half", price: 1400 }, { label: "Full", price: 2800 }] },
      { id: "p5", name: "Chicken Namkeen Karahi", desc: "Salt-forward namkeen karahi.", img: IMG.karahi, variants: [{ label: "Half", price: 1400 }, { label: "Full", price: 2800 }] },
      { id: "p6", name: "Red Oven Chicken Special Karahi", desc: "Our house special karahi recipe.", img: IMG.karahi, variants: [{ label: "Regular", price: 1500 }], signature: true },
      { id: "p7", name: "Mutton Peshawari Karahi", desc: "Peshawari-style mutton karahi.", img: IMG.karahi, variants: [{ label: "Half", price: 2200 }, { label: "Full", price: 4400 }] },
      { id: "p8", name: "Mutton White Karahi", desc: "Mild, creamy mutton karahi.", img: IMG.karahi, variants: [{ label: "Half", price: 2200 }, { label: "Full", price: 4400 }] },
      { id: "p9", name: "Mutton White Karahi with Butter", desc: "Mutton white karahi finished with butter.", img: IMG.karahi, variants: [{ label: "Half", price: 2300 }, { label: "Full", price: 4600 }] },
      { id: "p10", name: "Mutton Shinwari Karahi", desc: "Shinwari-style mutton karahi.", img: IMG.karahi, variants: [{ label: "Half", price: 2200 }, { label: "Full", price: 4400 }] },
    ]
  },
  {
    key: "handi",
    label: "Handi",
    items: [
      { id: "h1", name: "Paneer Reshmi Handi", desc: "Silky paneer handi, mildly spiced.", img: IMG.paneerHandi, variants: [{ label: "Half", price: 1600 }, { label: "Full", price: 3200 }] },
      { id: "h2", name: "Makhni Handi", desc: "Buttery makhni-style handi.", img: IMG.handi, variants: [{ label: "Half", price: 1600 }, { label: "Full", price: 3200 }] },
      { id: "h3", name: "Chicken Handi", desc: "House-style chicken handi.", img: IMG.handi, variants: [{ label: "Half", price: 1600 }, { label: "Full", price: 3200 }], signature: true },
    ]
  },
  {
    key: "fastfood",
    label: "Fast Food",
    items: [
      { id: "f1", name: "Fries Pizza", desc: "Loaded pizza-style fries.", img: IMG.fries, variants: [{ label: "Regular", price: 400 }] },
      { id: "f2", name: "Cheese Fries", desc: "Crispy fries loaded with melted cheese.", img: IMG.fries, variants: [{ label: "Regular", price: 350 }] },
      { id: "f3", name: "Crispy Chicken Broast with Fries (Chest, 2pcs)", desc: "Crispy fried chicken chest with fries.", img: IMG.broast, variants: [{ label: "2 pcs", price: 470 }] },
      { id: "f4", name: "Crispy Chicken Broast with Fries (Leg, 2pcs)", desc: "Crispy fried chicken leg with fries.", img: IMG.broast, variants: [{ label: "2 pcs", price: 420 }] },
      { id: "f5", name: "Chicken Burger with Fries", desc: "Classic chicken burger, served with fries.", img: IMG.burger, variants: [{ label: "Regular", price: 370 }] },
      { id: "f6", name: "Chicken Crispy Burger with Fries", desc: "Crispy fried chicken burger with fries.", img: IMG.burger, variants: [{ label: "Regular", price: 420 }] },
      { id: "f7", name: "Chicken Crispy Mega with Fries", desc: "Extra-large crispy chicken burger with fries.", img: IMG.burger, variants: [{ label: "Regular", price: 570 }] },
      { id: "f8", name: "Club Sandwich with Fries", desc: "Triple-layer club sandwich with fries.", img: IMG.sandwich, variants: [{ label: "Regular", price: 380 }] },
      { id: "f9", name: "Red Oven Special Sandwich with Fries", desc: "Our house-special sandwich with fries.", img: IMG.sandwich, variants: [{ label: "Regular", price: 450 }], signature: true },
      { id: "f10", name: "Beef Burger with Fries", desc: "Juicy beef patty burger with fries.", img: IMG.burger, variants: [{ label: "Regular", price: 400 }] },
      { id: "f11", name: "Beef Chapli Burger with Fries", desc: "Chapli-kabab style beef burger with fries.", img: IMG.burger, variants: [{ label: "Regular", price: 400 }] },
      { id: "f12", name: "Jalapeño Burger with Fries", desc: "Spicy jalapeño-topped burger with fries.", img: IMG.burger, variants: [{ label: "Regular", price: 420 }] },
      { id: "f13", name: "Chicken Cheese Burger", desc: "Chicken burger loaded with cheese.", img: IMG.cheeseBurger, variants: [{ label: "Regular", price: 420 }] },
      { id: "f14", name: "Beef Cheese Burger", desc: "Beef burger loaded with cheese.", img: IMG.cheeseBurger, variants: [{ label: "Regular", price: 450 }] },
      { id: "f15", name: "Crispy Cheese Burger", desc: "Crispy fried chicken burger with cheese.", img: IMG.cheeseBurger, variants: [{ label: "Regular", price: 470 }] },
      { id: "f16", name: "Beef Chapli Cheese Burger", desc: "Chapli-style beef burger with cheese.", img: IMG.cheeseBurger, variants: [{ label: "Regular", price: 450 }] },
      { id: "f17", name: "Crispy Mega with Cheese Burger", desc: "Extra-large crispy burger loaded with cheese.", img: IMG.cheeseBurger, variants: [{ label: "Regular", price: 620 }] },
      { id: "f18", name: "BBQ Club Sandwich", desc: "Club sandwich with smoky BBQ filling.", img: IMG.sandwich, variants: [{ label: "Regular", price: 520 }] },
      { id: "f19", name: "Crispy Club Sandwich", desc: "Club sandwich with crispy chicken.", img: IMG.sandwich, variants: [{ label: "Regular", price: 520 }] },
      { id: "f20", name: "Beef Loaded Burger", desc: "Fully loaded beef burger.", img: IMG.cheeseBurger, variants: [{ label: "Regular", price: 520 }] },
      { id: "f21", name: "Malai Boti Club Sandwich", desc: "Club sandwich with malai boti filling.", img: IMG.sandwich, variants: [{ label: "Regular", price: 520 }] },
    ]
  },
  {
    key: "rolls",
    label: "BBQ Rolls",
    items: [
      { id: "r1", name: "Chicken Chatni Roll", desc: "Grilled chicken roll with tangy chatni.", img: IMG.roll, variants: [{ label: "Regular", price: 200 }] },
      { id: "r2", name: "Chicken Mayo Roll", desc: "Chicken roll with creamy mayo.", img: IMG.roll, variants: [{ label: "Regular", price: 220 }] },
      { id: "r3", name: "Chicken Arabic Roll", desc: "Arabic-style spiced chicken roll.", img: IMG.roll, variants: [{ label: "Regular", price: 320 }] },
      { id: "r4", name: "Chicken Malai Boat Roll", desc: "Malai boti roll, boat-style.", img: IMG.roll, variants: [{ label: "Regular", price: 270 }] },
      { id: "r5", name: "Chicken Pizza Roll", desc: "Cheesy pizza-style chicken roll.", img: IMG.roll, variants: [{ label: "Regular", price: 320 }] },
      { id: "r6", name: "Chicken Zinger Roll", desc: "Spicy zinger-style chicken roll.", img: IMG.roll, variants: [{ label: "Regular", price: 320 }] },
      { id: "r7", name: "Beef Boti Roll", desc: "Grilled beef boti roll.", img: IMG.roll, variants: [{ label: "Regular", price: 320 }] },
      { id: "r8", name: "Beef Chatni Roll", desc: "Beef roll with tangy chatni.", img: IMG.roll, variants: [{ label: "Regular", price: 200 }] },
      { id: "r9", name: "Beef Mayo Roll", desc: "Beef roll with creamy mayo.", img: IMG.roll, variants: [{ label: "Regular", price: 220 }] },
      { id: "r10", name: "Red Oven Special Roll", desc: "Our signature house special roll.", img: IMG.roll, variants: [{ label: "Regular", price: 320 }], signature: true },
      { id: "r11", name: "Seekh Kabab Roll", desc: "Seekh kabab wrapped in warm paratha.", img: IMG.roll, variants: [{ label: "Regular", price: 270 }] },
      { id: "r12", name: "Cheese Roll", desc: "Melted cheese roll.", img: IMG.cheeseRoll, variants: [{ label: "Regular", price: 270 }] },
    ]
  },
];

// Flat list helper
function getAllItems() {
  const all = [];
  MENU.forEach(cat => cat.items.forEach(item => all.push({ ...item, category: cat.key, categoryLabel: cat.label })));
  return all;
}

function getSignatureItems() {
  return getAllItems().filter(i => i.signature);
}

function findItemById(id) {
  return getAllItems().find(i => i.id === id);
}
