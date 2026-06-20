// Shared Vantillu content & constants
export const WHATSAPP_NUMBER = "919999999999"; // placeholder
export const WHATSAPP_RESERVE = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Namaste Vantillu, I'd like to reserve a table."
)}`;
export const WHATSAPP_ORDER = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Namaste Vantillu, I'd like to place an order."
)}`;

export const CONTACT_INFO = {
  address: "12-3-456, Banjara Hills, Road No. 4, Hyderabad, Telangana 500034",
  phone: "+91 99999 99999",
  email: "hello@vantillu.com",
  hoursWeek: "Mon – Thu · 12:00 – 23:00",
  hoursWeekend: "Fri – Sun · 12:00 – 00:00",
};

export const NAV_LINKS = [
  { label: "Story", href: "#story" },
  { label: "Dishes", href: "#dishes" },
  { label: "Menu", href: "/menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const IMAGES = {
  hero: "https://images.pexels.com/photos/30691575/pexels-photo-30691575.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1400&w=2000",
  story:
    "https://images.unsplash.com/photo-1753202048970-16fe8f5e55fa?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
  digitalMenuBg:
    "https://images.unsplash.com/photo-1716816211590-c15a328a5ff0?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
  dishes: {
    biryani:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    thali:
      "https://images.pexels.com/photos/14132112/pexels-photo-14132112.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=1600",
    dosa: "https://images.pexels.com/photos/20422123/pexels-photo-20422123.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=1200",
    spices:
      "https://images.pexels.com/photos/10126645/pexels-photo-10126645.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=1200",
    gongura:
      "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    sweet:
      "https://images.unsplash.com/photo-1633383718081-22ac93e3db65?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  },
  interiors: [
    "https://images.pexels.com/photos/33321182/pexels-photo-33321182.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=1600",
    "https://images.unsplash.com/photo-1730965804534-eff996ac3249?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    "https://images.pexels.com/photos/29707937/pexels-photo-29707937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=1600",
    "https://images.pexels.com/photos/5410418/pexels-photo-5410418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=1600",
  ],
  gallery: [
    "https://images.unsplash.com/photo-1589302168068-964664d93dc0?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    "https://images.pexels.com/photos/14132112/pexels-photo-14132112.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
    "https://images.pexels.com/photos/20422123/pexels-photo-20422123.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
    "https://images.pexels.com/photos/33321182/pexels-photo-33321182.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
    "https://images.unsplash.com/photo-1730965804534-eff996ac3249?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    "https://images.pexels.com/photos/10126645/pexels-photo-10126645.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
    "https://images.pexels.com/photos/29707937/pexels-photo-29707937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
    "https://images.pexels.com/photos/5410418/pexels-photo-5410418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
    "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
  ],
};

export const SIGNATURE_DISHES = [
  {
    name: "Hyderabadi Dum Biryani",
    sub: "Slow-cooked basmati, saffron, succulent meat — sealed in tradition.",
    image: IMAGES.dishes.biryani,
  },
  {
    name: "Banana Leaf Thali",
    sub: "A meal of memories — rice, rasam, pappu, ghee, and ten home-style sides.",
    image: IMAGES.dishes.thali,
  },
  {
    name: "Gongura Mamsam",
    sub: "Tangy sorrel leaves slow-cooked with tender mutton, the soul of Andhra.",
    image: IMAGES.dishes.gongura,
  },
  {
    name: "Pesarattu & Upma",
    sub: "Crisp moong-dal crepes, paired with ginger chutney and warm upma.",
    image: IMAGES.dishes.dosa,
  },
  {
    name: "Garelu & Spices",
    sub: "Hand-ground masalas — the unseen artistry behind every bite.",
    image: IMAGES.dishes.spices,
  },
  {
    name: "Pootharekulu",
    sub: "Paper-thin sweets folded with jaggery — a Telugu festival on a plate.",
    image: IMAGES.dishes.sweet,
  },
];

export const TESTIMONIALS_DATA = [
  {
    quote:
      "Vantillu doesn't just serve food, it serves memory. Every bite of the gongura pappu reminded me of my grandmother's kitchen.",
    name: "Aarthi R.",
    role: "Hyderabad",
  },
  {
    quote:
      "The most authentic Telugu dining experience I've had outside a home. Warm hosts, exquisite biryani, soulful ambience.",
    name: "Karthik V.",
    role: "Bangalore",
  },
  {
    quote:
      "Beautifully designed space, banana-leaf meals, and a thali that brings tears to your eyes. Tradition done right.",
    name: "Lakshmi P.",
    role: "Chennai",
  },
  {
    quote:
      "A love letter to Andhra cuisine. The pootharekulu is unforgettable. We brought our whole family — they wouldn't leave.",
    name: "Ravi & Sneha",
    role: "Vijayawada",
  },
];

export const SAMPLE_MENU = [
  {
    section: "Starters",
    items: [
      { name: "Garelu (3 pcs)", desc: "Crisp lentil donuts with ginger chutney.", price: "₹220" },
      { name: "Punugulu", desc: "Fluffy fermented rice fritters, coconut chutney.", price: "₹180" },
      { name: "Chepa Vepudu", desc: "Andhra-style fish fry, curry leaves, lemon.", price: "₹420" },
      { name: "Kodi Vepudu", desc: "Slow-fried chicken, ghee, freshly pounded masala.", price: "₹380" },
    ],
  },
  {
    section: "Biryani & Rice",
    items: [
      { name: "Hyderabadi Dum Biryani (Chicken)", desc: "Sealed pot dum, saffron, mirchi ka salan.", price: "₹420" },
      { name: "Mutton Dum Biryani", desc: "Slow-cooked tender mutton, basmati, raita.", price: "₹520" },
      { name: "Veg Bagara Khana", desc: "Aromatic spiced rice, served with dalcha.", price: "₹320" },
      { name: "Curd Rice", desc: "Tempered curd rice, pomegranate, ginger.", price: "₹180" },
    ],
  },
  {
    section: "Andhra Curries",
    items: [
      { name: "Gongura Mamsam", desc: "Mutton in sorrel leaf gravy — the Andhra classic.", price: "₹540" },
      { name: "Chepala Pulusu", desc: "Tangy tamarind fish curry, mustard tempering.", price: "₹480" },
      { name: "Pappu Charu", desc: "Toor dal, tamarind, drumsticks — comfort in a bowl.", price: "₹220" },
      { name: "Vankaya Kothimeera", desc: "Brinjal in coriander-coconut gravy.", price: "₹260" },
    ],
  },
  {
    section: "Tiffins",
    items: [
      { name: "Pesarattu Upma", desc: "Crisp moong crepe with ginger upma.", price: "₹220" },
      { name: "Mysore Bonda", desc: "Soft urad bonda, two chutneys.", price: "₹180" },
      { name: "Idli Karam", desc: "Steamed idli, kandi podi, sesame oil.", price: "₹160" },
    ],
  },
  {
    section: "Sweets",
    items: [
      { name: "Pootharekulu", desc: "Paper-thin rice sweet, jaggery, ghee.", price: "₹180" },
      { name: "Bobbatlu (Puran Poli)", desc: "Stuffed lentil flatbread, warm ghee.", price: "₹160" },
      { name: "Qubani ka Meetha", desc: "Slow-cooked apricot dessert, malai.", price: "₹220" },
    ],
  },
];
