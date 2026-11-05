// Shared Vantillu content, menu catalog & constants
import { getDishImage } from "./dishImages";

export const WHATSAPP_NUMBER = "919999999999";

export const RESTAURANT_ADDRESS = "Vikas Nagar Colony, Kamareddy, Telangana 503111";

export const GOOGLE_MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  RESTAURANT_ADDRESS
)}`;

export const GOOGLE_MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  RESTAURANT_ADDRESS
)}&output=embed`;

export const WHATSAPP_RESERVE = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Namaste Vantillu (Kamareddy), I would like to reserve a table."
)}`;

export const WHATSAPP_ORDER = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Namaste Vantillu (Kamareddy), I would like to place an order."
)}`;

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hoursWeek: string;
  hoursWeekend: string;
}

export const CONTACT_INFO: ContactInfo = {
  address: RESTAURANT_ADDRESS,
  phone: "+91 99999 99999",
  email: "hello@vantillu.com",
  hoursWeek: "Mon – Thu · 11:30 – 23:00",
  hoursWeekend: "Fri – Sun · 11:30 – 23:30",
};

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Story", href: "/#story" },
  { label: "Menu", href: "/menu" },
  { label: "Services & Amenities", href: "/#services" },
  { label: "Collaborate", href: "/#collaborate" },
  { label: "Contact", href: "/#contact" },
];

export const IMAGES = {
  hero: "https://images.pexels.com/photos/30691575/pexels-photo-30691575.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1400&w=2000",
  story:
    "https://images.unsplash.com/photo-1596797038530-2c107229654b?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
  digitalMenuBg:
    "https://images.unsplash.com/photo-1546833999-b9f581a1996d?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
  menuCardPhoto: "/assets/aistudio/image_48ac0d25.png",
  dishes: {
    biryani:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    thali:
      "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    dosa: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    spices:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    gongura:
      "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    sweet:
      "https://images.unsplash.com/photo-1633383718081-22ac93e3db65?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    soup:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    starter:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    curry:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    bread:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    chinese:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    dessert:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    beverage:
      "https://images.unsplash.com/photo-1556881286-fc6915169721?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  },
  interiors: [
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    "https://images.unsplash.com/photo-1543007630-9710e4a00a20?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
  ],
  gallery: [
    "https://images.unsplash.com/photo-1589302168068-964664d93dc0?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    "https://images.unsplash.com/photo-1559742811-822873691df8?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    "https://images.unsplash.com/photo-1546833999-b9f581a1996d?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
  ],
};

export interface SignatureDish {
  name: string;
  sub: string;
  image: string;
}

export const SIGNATURE_DISHES: SignatureDish[] = [
  {
    name: "Hyderabadi Dum Biryani",
    sub: "Slow-cooked fragrant basmati, saffron, succulent marinated chicken — sealed in tradition.",
    image: IMAGES.dishes.biryani,
  },
  {
    name: "Golchina Mamsam",
    sub: "Tender Telangana mutton pan-roasted with hand-ground spices and curry leaves.",
    image: IMAGES.dishes.gongura,
  },
  {
    name: "Vantillu Special Putta Godugula Vepudu",
    sub: "Crispy battered wild mushrooms sauteed with spicy Andhra green chilli & garlic.",
    image: IMAGES.dishes.starter,
  },
  {
    name: "Elli Paya Karam Royyalu",
    sub: "Fresh prawns tossed in fiery garlic paste and roasted red chillies.",
    image: IMAGES.dishes.spices,
  },
  {
    name: "Nattu Kodi Biryani",
    sub: "Country chicken cooked in aromatic spices, herbs and aged seeraga/basmati rice.",
    image: IMAGES.dishes.biryani,
  },
  {
    name: "Vantillu Apricot Delight",
    sub: "Slow-reduced Khubani compote layered with rich custard and fresh malai.",
    image: IMAGES.dishes.sweet,
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    quote:
      "Vantillu in Kamareddy is hands down the finest culinary stop. The Golchina Mamsam and Special Chicken Biryani taste like authentic Telangana celebrations.",
    name: "Srinivas Rao",
    role: "Kamareddy Local",
  },
  {
    quote:
      "Zero food coloring, 100% authentic hand-ground flavours. We frequently travel from Nizamabad just for the Ulavacharu Kodi Pulao and Apricot Delight.",
    name: "Harika Reddy",
    role: "Food Enthusiast",
  },
  {
    quote:
      "A family-friendly haven with private dining, calm atmosphere, and courteous service. The best tandoori & biryani in Vikas Nagar Colony.",
    name: "Dr. Mahesh Kumar",
    role: "Kamareddy",
  },
  {
    quote:
      "Their delivery service is prompt and the food arrives piping hot. Order via WhatsApp makes it effortless for our family gatherings.",
    name: "Swathi P.",
    role: "Verified Guest",
  },
];

// Portion pricing structure for biryanis / multi-size items
export interface PortionPricing {
  mini?: number;
  plate?: number;
  family?: number;
}

export interface MenuItem {
  id: string;
  name: string;
  desc?: string;
  price: number; // default or base price
  portions?: PortionPricing;
  category: string;
  subCategory?: string;
  diet: "veg" | "non-veg" | "seafood" | "egg";
  isSpecial?: boolean;
  image?: string;
}

// Complete menu directly extracted from the restaurant menu card photo
const RAW_MENU: MenuItem[] = [
  // --- SOUPS ---
  // Veg Soups
  { id: "soup-1", name: "Tomato Soup", category: "Soups", subCategory: "Veg Soups", price: 130, diet: "veg", image: IMAGES.dishes.soup },
  { id: "soup-2", name: "Veg Hot & Sour Soup", category: "Soups", subCategory: "Veg Soups", price: 130, diet: "veg", image: IMAGES.dishes.soup },
  { id: "soup-3", name: "Veg Manchow Soup", category: "Soups", subCategory: "Veg Soups", price: 130, diet: "veg", image: IMAGES.dishes.soup },
  { id: "soup-4", name: "Veg Sweet Corn Soup", category: "Soups", subCategory: "Veg Soups", price: 130, diet: "veg", image: IMAGES.dishes.soup },
  { id: "soup-5", name: "Mushroom Soup", category: "Soups", subCategory: "Veg Soups", price: 130, diet: "veg", image: IMAGES.dishes.soup },
  { id: "soup-6", name: "Baby Corn Soup", category: "Soups", subCategory: "Veg Soups", price: 130, diet: "veg", image: IMAGES.dishes.soup },
  { id: "soup-7", name: "Lemon Coriander Soup", category: "Soups", subCategory: "Veg Soups", price: 130, diet: "veg", image: IMAGES.dishes.soup },
  { id: "soup-8", name: "Munakaya Rasam", desc: "Authentic drumstick pepper rasam, warm and comforting", category: "Soups", subCategory: "Veg Soups", price: 130, diet: "veg", image: IMAGES.dishes.soup },

  // Non Veg Soups
  { id: "soup-9", name: "Chicken Clear Soup", category: "Soups", subCategory: "Non Veg Soups", price: 150, diet: "non-veg", image: IMAGES.dishes.soup },
  { id: "soup-10", name: "Chicken Contessa Soup", category: "Soups", subCategory: "Non Veg Soups", price: 150, diet: "non-veg", image: IMAGES.dishes.soup },
  { id: "soup-11", name: "Chicken Corn Soup", category: "Soups", subCategory: "Non Veg Soups", price: 150, diet: "non-veg", image: IMAGES.dishes.soup },
  { id: "soup-12", name: "Chicken Hot & Sour Soup", category: "Soups", subCategory: "Non Veg Soups", price: 150, diet: "non-veg", image: IMAGES.dishes.soup },
  { id: "soup-13", name: "Chicken Manchow Soup", category: "Soups", subCategory: "Non Veg Soups", price: 150, diet: "non-veg", image: IMAGES.dishes.soup },
  { id: "soup-14", name: "Paya Shorba", desc: "Slow-simmered rich trotters soup with traditional spices", category: "Soups", subCategory: "Non Veg Soups", price: 220, diet: "non-veg", isSpecial: true, image: IMAGES.dishes.soup },

  // --- STARTERS ---
  // Vantillu Special Starters
  { id: "sp-star-1", name: "Putta Godugula Vepudu", desc: "Special mushroom fry in chef's spiced masala", category: "Starters", subCategory: "Vantillu Special Starters", price: 280, diet: "veg", isSpecial: true, image: IMAGES.dishes.starter },
  { id: "sp-star-2", name: "Paneer Pockets - 6 Pcs", desc: "Crisp golden envelopes filled with spiced cottage cheese", category: "Starters", subCategory: "Vantillu Special Starters", price: 290, diet: "veg", isSpecial: true, image: IMAGES.dishes.starter },
  { id: "sp-star-3", name: "Masala Fried Chicken Wings - 6 Pcs", desc: "Crispy coated chicken wings with signature spice blend", category: "Starters", subCategory: "Vantillu Special Starters", price: 380, diet: "non-veg", isSpecial: true, image: IMAGES.dishes.starter },
  { id: "sp-star-4", name: "Kodi Chips", desc: "Thin crunchy chicken crisps spiced to perfection", category: "Starters", subCategory: "Vantillu Special Starters", price: 380, diet: "non-veg", isSpecial: true, image: IMAGES.dishes.starter },
  { id: "sp-star-5", name: "Chicken Kaju Pakoda", desc: "Crispy chicken fritters tossed with roasted cashews", category: "Starters", subCategory: "Vantillu Special Starters", price: 380, diet: "non-veg", isSpecial: true, image: IMAGES.dishes.starter },
  { id: "sp-star-6", name: "Golchina Mamsam", desc: "Signature tender mutton pan roasted with Telangana spices", category: "Starters", subCategory: "Vantillu Special Starters", price: 410, diet: "non-veg", isSpecial: true, image: IMAGES.dishes.gongura },
  { id: "sp-star-7", name: "Elli Paya Karam Royyalu", desc: "Juicy prawns tossed in fiery garlic-chilli tadka", category: "Starters", subCategory: "Vantillu Special Starters", price: 390, diet: "seafood", isSpecial: true, image: IMAGES.dishes.starter },
  { id: "sp-star-8", name: "Chitti Royala Pakodi", desc: "Small shrimp golden fritters with curry leaf crunch", category: "Starters", subCategory: "Vantillu Special Starters", price: 390, diet: "seafood", isSpecial: true, image: IMAGES.dishes.starter },
  { id: "sp-star-9", name: "Tandoori Chicken Wings - 6 Pcs", desc: "Charcoal grilled marinated juicy chicken wings", category: "Starters", subCategory: "Vantillu Special Starters", price: 390, diet: "non-veg", isSpecial: true, image: IMAGES.dishes.starter },

  // Veg Starters
  { id: "veg-star-1", name: "Masala Papad", category: "Starters", subCategory: "Veg Starters", price: 60, diet: "veg", image: IMAGES.dishes.starter },
  { id: "veg-star-2", name: "Veg Manchuria", category: "Starters", subCategory: "Veg Starters", price: 240, diet: "veg", image: IMAGES.dishes.starter },
  { id: "veg-star-3", name: "Crispy Corn", category: "Starters", subCategory: "Veg Starters", price: 240, diet: "veg", image: IMAGES.dishes.starter },
  { id: "veg-star-4", name: "Finger Chips", category: "Starters", subCategory: "Veg Starters", price: 240, diet: "veg", image: IMAGES.dishes.starter },
  { id: "veg-star-5", name: "Star Manchuria Dry", category: "Starters", subCategory: "Veg Starters", price: 260, diet: "veg", image: IMAGES.dishes.starter },
  { id: "veg-star-6", name: "Gobi 65", category: "Starters", subCategory: "Veg Starters", price: 260, diet: "veg", image: IMAGES.dishes.starter },
  { id: "veg-star-7", name: "Crispy Veg", category: "Starters", subCategory: "Veg Starters", price: 270, diet: "veg", image: IMAGES.dishes.starter },
  { id: "veg-star-8", name: "Veg Spring Roll", category: "Starters", subCategory: "Veg Starters", price: 280, diet: "veg", image: IMAGES.dishes.starter },
  { id: "veg-star-9", name: "Pepper Mushroom", category: "Starters", subCategory: "Veg Starters", price: 270, diet: "veg", image: IMAGES.dishes.starter },
  { id: "veg-star-10", name: "Chilli Mushroom", category: "Starters", subCategory: "Veg Starters", price: 270, diet: "veg", image: IMAGES.dishes.starter },
  { id: "veg-star-11", name: "Chilli Paneer", category: "Starters", subCategory: "Veg Starters", price: 280, diet: "veg", image: IMAGES.dishes.starter },
  { id: "veg-star-12", name: "Paneer 65", category: "Starters", subCategory: "Veg Starters", price: 280, diet: "veg", image: IMAGES.dishes.starter },
  { id: "veg-star-13", name: "Paneer Mushroom Dry", category: "Starters", subCategory: "Veg Starters", price: 280, diet: "veg", image: IMAGES.dishes.starter },
  { id: "veg-star-14", name: "Paneer Majestic", category: "Starters", subCategory: "Veg Starters", price: 280, diet: "veg", image: IMAGES.dishes.starter },
  { id: "veg-star-15", name: "Baby Corn Majestic", category: "Starters", subCategory: "Veg Starters", price: 280, diet: "veg", image: IMAGES.dishes.starter },
  { id: "veg-star-16", name: "Chilli Baby Corn", category: "Starters", subCategory: "Veg Starters", price: 280, diet: "veg", image: IMAGES.dishes.starter },

  // Non Veg Starters
  { id: "nv-star-1", name: "Boiled Egg", category: "Starters", subCategory: "Non Veg Starters", price: 40, diet: "egg", image: IMAGES.dishes.starter },
  { id: "nv-star-2", name: "Chilli Egg", category: "Starters", subCategory: "Non Veg Starters", price: 250, diet: "egg", image: IMAGES.dishes.starter },
  { id: "nv-star-3", name: "Chicken 65", category: "Starters", subCategory: "Non Veg Starters", price: 330, diet: "non-veg", image: IMAGES.dishes.starter },
  { id: "nv-star-4", name: "Chilli Chicken", category: "Starters", subCategory: "Non Veg Starters", price: 330, diet: "non-veg", image: IMAGES.dishes.starter },
  { id: "nv-star-5", name: "Chicken Manchuria", category: "Starters", subCategory: "Non Veg Starters", price: 330, diet: "non-veg", image: IMAGES.dishes.starter },
  { id: "nv-star-6", name: "Chicken Roast", category: "Starters", subCategory: "Non Veg Starters", price: 330, diet: "non-veg", image: IMAGES.dishes.starter },
  { id: "nv-star-7", name: "Chicken Drumstick", category: "Starters", subCategory: "Non Veg Starters", price: 330, diet: "non-veg", image: IMAGES.dishes.starter },
  { id: "nv-star-8", name: "Chicken Lollipop", category: "Starters", subCategory: "Non Veg Starters", price: 350, diet: "non-veg", image: IMAGES.dishes.starter },
  { id: "nv-star-9", name: "Chicken Majestic", category: "Starters", subCategory: "Non Veg Starters", price: 330, diet: "non-veg", image: IMAGES.dishes.starter },
  { id: "nv-star-10", name: "Chicken Hyderabadi Dry", category: "Starters", subCategory: "Non Veg Starters", price: 330, diet: "non-veg", image: IMAGES.dishes.starter },
  { id: "nv-star-11", name: "Pepper Chicken", category: "Starters", subCategory: "Non Veg Starters", price: 350, diet: "non-veg", image: IMAGES.dishes.starter },
  { id: "nv-star-12", name: "Kaju Chicken Dry", category: "Starters", subCategory: "Non Veg Starters", price: 350, diet: "non-veg", image: IMAGES.dishes.starter },
  { id: "nv-star-13", name: "Crispy Chicken Fingers", category: "Starters", subCategory: "Non Veg Starters", price: 350, diet: "non-veg", image: IMAGES.dishes.starter },
  { id: "nv-star-14", name: "Mutton Roast", category: "Starters", subCategory: "Non Veg Starters", price: 380, diet: "non-veg", image: IMAGES.dishes.starter },
  { id: "nv-star-15", name: "Pepper Mutton Dry", category: "Starters", subCategory: "Non Veg Starters", price: 390, diet: "non-veg", image: IMAGES.dishes.starter },

  // Sea Food Starters
  { id: "sf-star-1", name: "Apollo Fish", category: "Starters", subCategory: "Sea Food Starters", price: 350, diet: "seafood", image: IMAGES.dishes.starter },
  { id: "sf-star-2", name: "Chilli Fish", category: "Starters", subCategory: "Sea Food Starters", price: 350, diet: "seafood", image: IMAGES.dishes.starter },
  { id: "sf-star-3", name: "Chilli Prawns", category: "Starters", subCategory: "Sea Food Starters", price: 380, diet: "seafood", image: IMAGES.dishes.starter },
  { id: "sf-star-4", name: "Loose Prawns", category: "Starters", subCategory: "Sea Food Starters", price: 380, diet: "seafood", image: IMAGES.dishes.starter },
  { id: "sf-star-5", name: "Golden Prawns", category: "Starters", subCategory: "Sea Food Starters", price: 380, diet: "seafood", image: IMAGES.dishes.starter },

  // Tandoori Starters
  { id: "td-star-1", name: "Paneer Tikka", category: "Starters", subCategory: "Tandoori Starters", price: 320, diet: "veg", image: IMAGES.dishes.starter },
  { id: "td-star-2", name: "Chicken Tikka", category: "Starters", subCategory: "Tandoori Starters", price: 340, diet: "non-veg", image: IMAGES.dishes.starter },
  { id: "td-star-3", name: "Chicken Reshmi Kabab", category: "Starters", subCategory: "Tandoori Starters", price: 350, diet: "non-veg", image: IMAGES.dishes.starter },
  { id: "td-star-4", name: "Tandoori Chicken", desc: "Available 2pc or 4pc full", category: "Starters", subCategory: "Tandoori Starters", price: 320, portions: { plate: 320, family: 630 }, diet: "non-veg", image: IMAGES.dishes.starter },
  { id: "td-star-5", name: "Tangadi Kabab", desc: "Juicy marinated chicken drumsticks (1pc/2pc/4pc)", category: "Starters", subCategory: "Tandoori Starters", price: 160, portions: { mini: 160, plate: 320, family: 630 }, diet: "non-veg", image: IMAGES.dishes.starter },

  // --- BREADS ---
  { id: "br-1", name: "Pulka", desc: "Options: Plain (₹30) / Butter (₹40)", category: "Breads", price: 30, diet: "veg", image: IMAGES.dishes.bread },
  { id: "br-2", name: "Tandoori Roti", desc: "Options: Plain (₹30) / Butter (₹40)", category: "Breads", price: 30, diet: "veg", image: IMAGES.dishes.bread },
  { id: "br-3", name: "Naan", desc: "Options: Plain (₹40) / Butter (₹50) / Garlic (₹60)", category: "Breads", price: 40, diet: "veg", image: IMAGES.dishes.bread },
  { id: "br-4", name: "Kulcha", desc: "Options: Plain (₹60) / Butter (₹70) / Garlic (₹80)", category: "Breads", price: 60, diet: "veg", image: IMAGES.dishes.bread },
  { id: "br-5", name: "Parota", desc: "Options: Aloo (₹60) / Lacha (₹60) / Onion (₹70)", category: "Breads", price: 60, diet: "veg", image: IMAGES.dishes.bread },
  { id: "br-6", name: "Roti Basket", desc: "Includes 1-Pulka, 1-Plain Naan, 1-Tandoori Roti, 1-Paratha, 1-Kulcha", category: "Breads", price: 210, diet: "veg", isSpecial: true, image: IMAGES.dishes.bread },

  // --- CURRIES ---
  // Veg Curries
  { id: "vc-1", name: "Dal Fry", category: "Curries", subCategory: "Veg Curries", price: 220, diet: "veg", image: IMAGES.dishes.curry },
  { id: "vc-2", name: "Dal Tadka", category: "Curries", subCategory: "Veg Curries", price: 230, diet: "veg", image: IMAGES.dishes.curry },
  { id: "vc-3", name: "Pachi Pulusu", desc: "Traditional uncooked raw tamarind rasam with onions & chillies", category: "Curries", subCategory: "Veg Curries", price: 60, diet: "veg", isSpecial: true, image: IMAGES.dishes.curry },
  { id: "vc-4", name: "Tomato Masala", category: "Curries", subCategory: "Veg Curries", price: 230, diet: "veg", image: IMAGES.dishes.curry },
  { id: "vc-5", name: "Veg Kolhapuri", category: "Curries", subCategory: "Veg Curries", price: 270, diet: "veg", image: IMAGES.dishes.curry },
  { id: "vc-6", name: "Malai Kofta", category: "Curries", subCategory: "Veg Curries", price: 290, diet: "veg", image: IMAGES.dishes.curry },
  { id: "vc-7", name: "Baby Corn Masala", category: "Curries", subCategory: "Veg Curries", price: 290, diet: "veg", image: IMAGES.dishes.curry },
  { id: "vc-8", name: "Mix Veg Curry", category: "Curries", subCategory: "Veg Curries", price: 280, diet: "veg", image: IMAGES.dishes.curry },
  { id: "vc-9", name: "Mushroom Masala", category: "Curries", subCategory: "Veg Curries", price: 290, diet: "veg", image: IMAGES.dishes.curry },
  { id: "vc-10", name: "Paneer Mushroom Curry", category: "Curries", subCategory: "Veg Curries", price: 320, diet: "veg", image: IMAGES.dishes.curry },
  { id: "vc-11", name: "Kaju Mushroom Curry", category: "Curries", subCategory: "Veg Curries", price: 340, diet: "veg", image: IMAGES.dishes.curry },
  { id: "vc-12", name: "Mutter Paneer", category: "Curries", subCategory: "Veg Curries", price: 300, diet: "veg", image: IMAGES.dishes.curry },
  { id: "vc-13", name: "Palak Paneer", category: "Curries", subCategory: "Veg Curries", price: 300, diet: "veg", image: IMAGES.dishes.curry },
  { id: "vc-14", name: "Paneer Butter Masala", category: "Curries", subCategory: "Veg Curries", price: 300, diet: "veg", image: IMAGES.dishes.curry },
  { id: "vc-15", name: "Paneer Shai Kurma", category: "Curries", subCategory: "Veg Curries", price: 300, diet: "veg", image: IMAGES.dishes.curry },
  { id: "vc-16", name: "Kaju Masala", category: "Curries", subCategory: "Veg Curries", price: 340, diet: "veg", image: IMAGES.dishes.curry },
  { id: "vc-17", name: "Kaju Paneer Masala", category: "Curries", subCategory: "Veg Curries", price: 340, diet: "veg", image: IMAGES.dishes.curry },
  { id: "vc-18", name: "Paneer Tikka Masala", category: "Curries", subCategory: "Veg Curries", price: 350, diet: "veg", image: IMAGES.dishes.curry },

  // Non Veg Curries
  { id: "nvc-1", name: "Ragi Mudda (Sankati)", desc: "Traditional wholesome finger millet balls, pairs with natukodi", category: "Curries", subCategory: "Non Veg Curries", price: 100, diet: "veg", isSpecial: true, image: IMAGES.dishes.curry },
  { id: "nvc-2", name: "Egg Burji", category: "Curries", subCategory: "Non Veg Curries", price: 190, diet: "egg", image: IMAGES.dishes.curry },
  { id: "nvc-3", name: "Kodi Gudla Pulusu", desc: "Spiced country egg tamarind curry", category: "Curries", subCategory: "Non Veg Curries", price: 250, diet: "egg", image: IMAGES.dishes.curry },
  { id: "nvc-4", name: "Kodi Vepudu", desc: "Telangana slow fried chicken with fresh roasted masala", category: "Curries", subCategory: "Non Veg Curries", price: 350, diet: "non-veg", image: IMAGES.dishes.curry },
  { id: "nvc-5", name: "Telangana Chicken Curry", desc: "Homestyle spicy chicken gravy", category: "Curries", subCategory: "Non Veg Curries", price: 350, diet: "non-veg", isSpecial: true, image: IMAGES.dishes.curry },
  { id: "nvc-6", name: "Punjabi Chicken", category: "Curries", subCategory: "Non Veg Curries", price: 360, diet: "non-veg", image: IMAGES.dishes.curry },
  { id: "nvc-7", name: "Butter Chicken", category: "Curries", subCategory: "Non Veg Curries", price: 380, diet: "non-veg", image: IMAGES.dishes.curry },
  { id: "nvc-8", name: "Chicken Kholapuri", category: "Curries", subCategory: "Non Veg Curries", price: 380, diet: "non-veg", image: IMAGES.dishes.curry },
  { id: "nvc-9", name: "Kadai Chicken", category: "Curries", subCategory: "Non Veg Curries", price: 380, diet: "non-veg", image: IMAGES.dishes.curry },
  { id: "nvc-10", name: "Telangana Chicken (Boneless)", category: "Curries", subCategory: "Non Veg Curries", price: 380, diet: "non-veg", image: IMAGES.dishes.curry },
  { id: "nvc-11", name: "Chicken Mughlai (Boneless)", category: "Curries", subCategory: "Non Veg Curries", price: 390, diet: "non-veg", image: IMAGES.dishes.curry },
  { id: "nvc-12", name: "Chicken Tikka Masala", category: "Curries", subCategory: "Non Veg Curries", price: 380, diet: "non-veg", image: IMAGES.dishes.curry },
  { id: "nvc-13", name: "Chicken Afghani", category: "Curries", subCategory: "Non Veg Curries", price: 390, diet: "non-veg", image: IMAGES.dishes.curry },
  { id: "nvc-14", name: "Nattu Kodi Curry", desc: "Desi country chicken slow cooked with native Telangana spices", category: "Curries", subCategory: "Non Veg Curries", price: 400, diet: "non-veg", isSpecial: true, image: IMAGES.dishes.curry },
  { id: "nvc-15", name: "Mutton Fry", category: "Curries", subCategory: "Non Veg Curries", price: 410, diet: "non-veg", image: IMAGES.dishes.curry },
  { id: "nvc-16", name: "Telangana Mamsam Curry", desc: "Authentic slow cooked mutton with bone in spiced gravy", category: "Curries", subCategory: "Non Veg Curries", price: 410, diet: "non-veg", isSpecial: true, image: IMAGES.dishes.curry },
  { id: "nvc-17", name: "Telangana Mamsam (Boneless)", category: "Curries", subCategory: "Non Veg Curries", price: 440, diet: "non-veg", image: IMAGES.dishes.curry },
  { id: "nvc-18", name: "Keema Fry", category: "Curries", subCategory: "Non Veg Curries", price: 440, diet: "non-veg", image: IMAGES.dishes.curry },
  { id: "nvc-19", name: "Keema Masala", category: "Curries", subCategory: "Non Veg Curries", price: 440, diet: "non-veg", image: IMAGES.dishes.curry },
  { id: "nvc-20", name: "Chepala Koora", desc: "Tamarind infused traditional fish curry", category: "Curries", subCategory: "Non Veg Curries", price: 350, diet: "seafood", image: IMAGES.dishes.curry },
  { id: "nvc-21", name: "Chepala Fry", category: "Curries", subCategory: "Non Veg Curries", price: 350, diet: "seafood", image: IMAGES.dishes.curry },
  { id: "nvc-22", name: "Telangana Chepala Koora", category: "Curries", subCategory: "Non Veg Curries", price: 350, diet: "seafood", image: IMAGES.dishes.curry },
  { id: "nvc-23", name: "Royyala Vepudu", category: "Curries", subCategory: "Non Veg Curries", price: 370, diet: "seafood", image: IMAGES.dishes.curry },
  { id: "nvc-24", name: "Telangana Royyala Curry", category: "Curries", subCategory: "Non Veg Curries", price: 370, diet: "seafood", image: IMAGES.dishes.curry },

  // --- BIRYANI'S ---
  // Veg Biryani
  { id: "bir-v-1", name: "Biryani Rice", category: "Biryani", subCategory: "Veg Biryani", price: 170, portions: { mini: 170 }, diet: "veg", image: IMAGES.dishes.biryani },
  { id: "bir-v-2", name: "Veg Biryani", category: "Biryani", subCategory: "Veg Biryani", price: 250, portions: { mini: 160, plate: 250, family: 500 }, diet: "veg", image: IMAGES.dishes.biryani },
  { id: "bir-v-3", name: "Veg Pulao", category: "Biryani", subCategory: "Veg Biryani", price: 260, portions: { mini: 170, plate: 260, family: 520 }, diet: "veg", image: IMAGES.dishes.biryani },
  { id: "bir-v-4", name: "Paneer Biryani", category: "Biryani", subCategory: "Veg Biryani", price: 300, portions: { mini: 210, plate: 300, family: 600 }, diet: "veg", image: IMAGES.dishes.biryani },
  { id: "bir-v-5", name: "Mushroom Biryani", category: "Biryani", subCategory: "Veg Biryani", price: 300, portions: { mini: 210, plate: 300, family: 600 }, diet: "veg", image: IMAGES.dishes.biryani },
  { id: "bir-v-6", name: "Veg Manchuria Biryani", category: "Biryani", subCategory: "Veg Biryani", price: 310, portions: { mini: 220, plate: 310, family: 620 }, diet: "veg", image: IMAGES.dishes.biryani },
  { id: "bir-v-7", name: "Kaju Paneer Biryani", category: "Biryani", subCategory: "Veg Biryani", price: 320, portions: { mini: 230, plate: 320, family: 640 }, diet: "veg", image: IMAGES.dishes.biryani },
  { id: "bir-v-8", name: "Palamanchu Veg Pulao", category: "Biryani", subCategory: "Veg Biryani", price: 340, portions: { mini: 250, plate: 340, family: 680 }, diet: "veg", image: IMAGES.dishes.biryani },
  { id: "bir-v-9", name: "Ulavacharu Veg Pulao", desc: "Slow simmered horse-gram extract spiced pulao", category: "Biryani", subCategory: "Veg Biryani", price: 340, portions: { mini: 250, plate: 340, family: 680 }, diet: "veg", isSpecial: true, image: IMAGES.dishes.biryani },

  // Non Veg Biryani - Chicken
  { id: "bir-c-1", name: "Biryani Piece", category: "Biryani", subCategory: "Non Veg Biryani - Chicken", price: 120, diet: "non-veg", image: IMAGES.dishes.biryani },
  { id: "bir-c-2", name: "Egg Biryani", category: "Biryani", subCategory: "Non Veg Biryani - Chicken", price: 190, portions: { mini: 190, plate: 400 }, diet: "egg", image: IMAGES.dishes.biryani },
  { id: "bir-c-3", name: "Chicken Dum Biryani", desc: "Dum cooked basmati rice with marinated chicken & saffron", category: "Biryani", subCategory: "Non Veg Biryani - Chicken", price: 350, portions: { mini: 220, plate: 350, family: 650 }, diet: "non-veg", isSpecial: true, image: IMAGES.dishes.biryani },
  { id: "bir-c-4", name: "Special Chicken Biryani (Boneless)", desc: "Boneless fried chicken masala served over fragrant biryani", category: "Biryani", subCategory: "Non Veg Biryani - Chicken", price: 360, portions: { mini: 240, plate: 360, family: 680 }, diet: "non-veg", isSpecial: true, image: IMAGES.dishes.biryani },
  { id: "bir-c-5", name: "Fry Piece Chicken Biryani", category: "Biryani", subCategory: "Non Veg Biryani - Chicken", price: 360, portions: { mini: 240, plate: 360, family: 680 }, diet: "non-veg", image: IMAGES.dishes.biryani },
  { id: "bir-c-6", name: "Nattu Kodi Biryani", desc: "Authentic country chicken biryani cooked slow in brass pot", category: "Biryani", subCategory: "Non Veg Biryani - Chicken", price: 430, portions: { mini: 320, plate: 430, family: 820 }, diet: "non-veg", isSpecial: true, image: IMAGES.dishes.biryani },
  { id: "bir-c-7", name: "Mughlai Chicken Biryani (Boneless)", category: "Biryani", subCategory: "Non Veg Biryani - Chicken", price: 390, portions: { mini: 280, plate: 390, family: 770 }, diet: "non-veg", image: IMAGES.dishes.biryani },
  { id: "bir-c-8", name: "Chicken Tikka Biryani", category: "Biryani", subCategory: "Non Veg Biryani - Chicken", price: 390, portions: { mini: 280, plate: 390, family: 770 }, diet: "non-veg", image: IMAGES.dishes.biryani },
  { id: "bir-c-9", name: "Kodi Vepudu Pulao", category: "Biryani", subCategory: "Non Veg Biryani - Chicken", price: 390, portions: { mini: 280, plate: 390, family: 770 }, diet: "non-veg", image: IMAGES.dishes.biryani },
  { id: "bir-c-10", name: "Ulavacharu Kodi Pulao", desc: "Telangana signature horsegram sauce infused chicken pulao", category: "Biryani", subCategory: "Non Veg Biryani - Chicken", price: 390, portions: { mini: 280, plate: 390, family: 770 }, diet: "non-veg", isSpecial: true, image: IMAGES.dishes.biryani },
  { id: "bir-c-11", name: "Onion Chilli Kodi Pulao", category: "Biryani", subCategory: "Non Veg Biryani - Chicken", price: 390, portions: { mini: 280, plate: 390, family: 770 }, diet: "non-veg", image: IMAGES.dishes.biryani },
  { id: "bir-c-12", name: "Palamanchu Kodi Pulao", category: "Biryani", subCategory: "Non Veg Biryani - Chicken", price: 390, portions: { mini: 280, plate: 390, family: 770 }, diet: "non-veg", image: IMAGES.dishes.biryani },
  { id: "bir-c-13", name: "Mixed Non Veg Biryani", desc: "Generous combination of chicken, mutton and egg", category: "Biryani", subCategory: "Non Veg Biryani - Chicken", price: 470, portions: { plate: 470 }, diet: "non-veg", isSpecial: true, image: IMAGES.dishes.biryani },

  // Non Veg Biryani - Mutton
  { id: "bir-m-1", name: "Mutton Dum Biryani", desc: "Slow cooked tender mutton sealed with saffron basmati", category: "Biryani", subCategory: "Non Veg Biryani - Mutton", price: 380, portions: { mini: 270, plate: 380, family: 720 }, diet: "non-veg", isSpecial: true, image: IMAGES.dishes.biryani },
  { id: "bir-m-2", name: "Special Mutton Biryani (Boneless)", category: "Biryani", subCategory: "Non Veg Biryani - Mutton", price: 460, portions: { mini: 310, plate: 460, family: 900 }, diet: "non-veg", isSpecial: true, image: IMAGES.dishes.biryani },
  { id: "bir-m-3", name: "Mutton Bilal Biryani", category: "Biryani", subCategory: "Non Veg Biryani - Mutton", price: 430, portions: { mini: 300, plate: 430 }, diet: "non-veg", image: IMAGES.dishes.biryani },
  { id: "bir-m-4", name: "Mughlai Mutton Biryani", category: "Biryani", subCategory: "Non Veg Biryani - Mutton", price: 450, portions: { mini: 320, plate: 450 }, diet: "non-veg", image: IMAGES.dishes.biryani },
  { id: "bir-m-5", name: "Keema Biryani", category: "Biryani", subCategory: "Non Veg Biryani - Mutton", price: 460, portions: { mini: 310, plate: 460, family: 900 }, diet: "non-veg", image: IMAGES.dishes.biryani },
  { id: "bir-m-6", name: "Mastani Keema Pulao", category: "Biryani", subCategory: "Non Veg Biryani - Mutton", price: 460, portions: { mini: 330, plate: 460 }, diet: "non-veg", image: IMAGES.dishes.biryani },
  { id: "bir-m-7", name: "Potlam Keema Pulao", desc: "Keema pulao wrapped in delicate steamed omelette parcel", category: "Biryani", subCategory: "Non Veg Biryani - Mutton", price: 460, portions: { mini: 330, plate: 460 }, diet: "non-veg", isSpecial: true, image: IMAGES.dishes.biryani },

  // Sea Food Biryani
  { id: "bir-sf-1", name: "Fish Biryani", category: "Biryani", subCategory: "Sea Food Biryani", price: 380, portions: { mini: 270, plate: 380, family: 740 }, diet: "seafood", image: IMAGES.dishes.biryani },
  { id: "bir-sf-2", name: "Prawns Biryani", category: "Biryani", subCategory: "Sea Food Biryani", price: 390, portions: { mini: 280, plate: 390, family: 760 }, diet: "seafood", image: IMAGES.dishes.biryani },

  // --- CHINESE ---
  // Chinese Veg
  { id: "ch-v-1", name: "Plain Rice", category: "Chinese", subCategory: "Chinese Veg", price: 70, diet: "veg", image: IMAGES.dishes.chinese },
  { id: "ch-v-2", name: "Curd Rice", category: "Chinese", subCategory: "Chinese Veg", price: 140, diet: "veg", image: IMAGES.dishes.chinese },
  { id: "ch-v-3", name: "Jeera Rice", category: "Chinese", subCategory: "Chinese Veg", price: 200, diet: "veg", image: IMAGES.dishes.chinese },
  { id: "ch-v-4", name: "Dal Kichidi", category: "Chinese", subCategory: "Chinese Veg", price: 200, diet: "veg", image: IMAGES.dishes.chinese },
  { id: "ch-v-5", name: "Tomato Rice", category: "Chinese", subCategory: "Chinese Veg", price: 200, diet: "veg", image: IMAGES.dishes.chinese },
  { id: "ch-v-6", name: "Veg Fried Rice", category: "Chinese", subCategory: "Chinese Veg", price: 210, diet: "veg", image: IMAGES.dishes.chinese },
  { id: "ch-v-7", name: "Veg Soft Noodles", category: "Chinese", subCategory: "Chinese Veg", price: 220, diet: "veg", image: IMAGES.dishes.chinese },
  { id: "ch-v-8", name: "Veg Schezwan Fried Rice", category: "Chinese", subCategory: "Chinese Veg", price: 230, diet: "veg", image: IMAGES.dishes.chinese },
  { id: "ch-v-9", name: "Baby Corn Fried Rice", category: "Chinese", subCategory: "Chinese Veg", price: 240, diet: "veg", image: IMAGES.dishes.chinese },
  { id: "ch-v-10", name: "Corn Fried Rice", category: "Chinese", subCategory: "Chinese Veg", price: 240, diet: "veg", image: IMAGES.dishes.chinese },
  { id: "ch-v-11", name: "Mushroom Fried Rice", category: "Chinese", subCategory: "Chinese Veg", price: 240, diet: "veg", image: IMAGES.dishes.chinese },
  { id: "ch-v-12", name: "Paneer Fried Rice", category: "Chinese", subCategory: "Chinese Veg", price: 250, diet: "veg", image: IMAGES.dishes.chinese },
  { id: "ch-v-13", name: "Mix Veg Fried Rice", category: "Chinese", subCategory: "Chinese Veg", price: 280, diet: "veg", image: IMAGES.dishes.chinese },
  { id: "ch-v-14", name: "Mix Veg Noodles", category: "Chinese", subCategory: "Chinese Veg", price: 260, diet: "veg", image: IMAGES.dishes.chinese },
  { id: "ch-v-15", name: "Kaju Fried Rice", category: "Chinese", subCategory: "Chinese Veg", price: 270, diet: "veg", image: IMAGES.dishes.chinese },

  // Chinese Non Veg
  { id: "ch-nv-1", name: "Egg Fried Rice", category: "Chinese", subCategory: "Chinese Non Veg", price: 220, diet: "egg", image: IMAGES.dishes.chinese },
  { id: "ch-nv-2", name: "Chicken Fried Rice", category: "Chinese", subCategory: "Chinese Non Veg", price: 280, diet: "non-veg", image: IMAGES.dishes.chinese },
  { id: "ch-nv-3", name: "Chicken Schezwan Fried Rice", category: "Chinese", subCategory: "Chinese Non Veg", price: 290, diet: "non-veg", image: IMAGES.dishes.chinese },
  { id: "ch-nv-4", name: "Chicken Soft Noodles", category: "Chinese", subCategory: "Chinese Non Veg", price: 280, diet: "non-veg", image: IMAGES.dishes.chinese },
  { id: "ch-nv-5", name: "Chicken London Fried Rice", desc: "Chef's signature spicy fusion fried rice", category: "Chinese", subCategory: "Chinese Non Veg", price: 300, diet: "non-veg", isSpecial: true, image: IMAGES.dishes.chinese },
  { id: "ch-nv-6", name: "Mix Non Veg Fried Rice", desc: "Packed with chicken, prawns and egg", category: "Chinese", subCategory: "Chinese Non Veg", price: 330, diet: "non-veg", isSpecial: true, image: IMAGES.dishes.chinese },

  // --- RAITHA & BEVERAGES ---
  { id: "rai-1", name: "Boondhi Raitha", category: "Raitha & Drinks", price: 80, diet: "veg", image: IMAGES.dishes.beverage },
  { id: "rai-2", name: "Onion Raitha", category: "Raitha & Drinks", price: 80, diet: "veg", image: IMAGES.dishes.beverage },
  { id: "rai-3", name: "Mix Veg Raitha", category: "Raitha & Drinks", price: 90, diet: "veg", image: IMAGES.dishes.beverage },
  { id: "bev-1", name: "Plain Curd", category: "Raitha & Drinks", price: 30, diet: "veg", image: IMAGES.dishes.beverage },
  { id: "bev-2", name: "Fresh Lime Juice", category: "Raitha & Drinks", price: 30, diet: "veg", image: IMAGES.dishes.beverage },
  { id: "bev-3", name: "Butter Milk (Majjiga)", desc: "Fresh churned spiced buttermilk with ginger, chilli & coriander", category: "Raitha & Drinks", price: 50, diet: "veg", isSpecial: true, image: IMAGES.dishes.beverage },
  { id: "bev-4", name: "Fresh Lime Soda", category: "Raitha & Drinks", price: 50, diet: "veg", image: IMAGES.dishes.beverage },
  { id: "bev-5", name: "Sweet Lassi", category: "Raitha & Drinks", price: 60, diet: "veg", image: IMAGES.dishes.beverage },
  { id: "bev-6", name: "Milk Shake", category: "Raitha & Drinks", price: 100, diet: "veg", image: IMAGES.dishes.beverage },

  // --- DESSERTS ---
  { id: "des-1", name: "Gulab Jamun (2 Pcs)", desc: "Warm melt-in-mouth cottage cheese dumplings in cardamom syrup", category: "Desserts", price: 50, diet: "veg", image: IMAGES.dishes.dessert },
  { id: "des-2", name: "Vantillu Apricot Delight", desc: "Signature Royal Hyderabadi Qubani layered with malai cream", category: "Desserts", price: 180, diet: "veg", isSpecial: true, image: IMAGES.dishes.dessert },
  { id: "des-3", name: "Gulab Jamun with Vanilla Ice Cream", category: "Desserts", price: 130, diet: "veg", image: IMAGES.dishes.dessert },
];

export const VANTILLU_FULL_MENU: MenuItem[] = RAW_MENU.map((item) => ({
  ...item,
  image: getDishImage(item.name, item.category),
}));

export const RESTAURANT_RULES = [
  "We do not use any artificial food colours in any dish.",
  "Once an order is placed, it cannot be canceled or exchanged.",
  "Every order is freshly prepared; minimum 15–20 minutes required.",
  "All menu prices are strictly inclusive of GST.",
  "All items are subject to daily kitchen availability.",
  "Alcohol consumption is strictly prohibited on restaurant premises.",
  "Outside food and beverages are not allowed.",
  "Please take care of your personal belongings before leaving.",
];

// Complete Services & Amenities requested by user
export const RESTAURANT_SERVICES_AMENITIES = {
  serviceOptions: [
    { title: "Kerbside Pickup", desc: "Pull up to our dedicated parking bay and our staff brings your packed order." },
    { title: "Delivery", desc: "Doorstep delivery across Kamareddy — simply enter your location details." },
    { title: "Takeaway", desc: "Hot, hygiene-packed meals prepared in 15–20 minutes for quick pickup." },
    { title: "Dine-In", desc: "Comfortable air-conditioned family seating and traditional table hospitality." },
  ],
  popularFor: [
    { title: "Lunch", desc: "Wholesome banana-leaf meals, tiffins, and aromatic biryanis." },
    { title: "Dinner", desc: "Relaxed evening dinners, tandoori starters, curries and breads." },
    { title: "Solo Dining", desc: "Peaceful ambience and quick-service mini portion choices." },
  ],
  offerings: [
    { title: "Late-Night Food", desc: "Serving warm food for late travellers and hungry families." },
    { title: "Private Dining Room", desc: "Dedicated AC private dining space for parties, meetings and gatherings." },
    { title: "Quick Bite", desc: "Quick tiffins, starters, and refreshing beverages." },
    { title: "Small Plates", desc: "Perfect tasting plates of starters and spicy vepudus." },
    { title: "Vegan Options", desc: "Plant-based dal tadka, pachi pulusu, and ragi mudda." },
    { title: "Vegetarian Options", desc: "Wide array of paneer, kaju, mushroom, and fresh vegetable curries." },
    { title: "Authentic Cuisine", desc: "Genuine Telangana & Andhra spice traditions with no artificial coloring." },
  ],
  diningOptions: [
    { title: "Lunch & Dinner", desc: "Continuous kitchen service from noon until night." },
    { title: "Counter Service", desc: "Quick order placement and parcel collection counters." },
    { title: "Seating & Table Service", desc: "Attentive table service with traditional hospitality." },
  ],
  amenities: [
    { title: "Clean Restroom", desc: "Spotless, sanitized, separate male and female washrooms maintained round the clock." },
    { title: "Handwash Stations", desc: "Dedicated hygienic handwashing bays with fragrant liquid soaps and automatic dryers." },
    { title: "Full Air-Conditioning (AC)", desc: "Climate-controlled central dining hall and private family dining spaces." },
    { title: "Free High-Speed Wi-Fi", desc: "Complimentary reliable Wi-Fi for all diners and remote catch-ups." },
    { title: "Pure RO Drinking Water", desc: "Multi-stage reverse osmosis and UV filtered healthy drinking water provided free." },
    { title: "Wheelchair Accessibility", desc: "Step-free ramp entrance and easily accessible ground-floor seating." },
    { title: "High Chairs for Toddlers", desc: "Safe, comfortable wooden high chairs ready for visiting families with little ones." },
    { title: "100% Power Generator Backup", desc: "Seamless continuous power backup ensures cool dining and zero interruption." },
  ],
  atmosphere: [
    { title: "Casual & Welcoming", desc: "Warm earth tones, wood-accented furnishings, and heritage ambience." },
    { title: "Quiet & Peaceful", desc: "Thoughtful acoustic layout away from highway noise for calm conversations." },
  ],
  crowd: [
    { title: "Family Friendly", desc: "Spacious booths, kid-friendly seating, and mild dish options." },
    { title: "Groups & Celebrations", desc: "Easily accommodate large family reunions, birthdays, and office teams." },
  ],
  payments: [
    { title: "Google Pay & UPI", desc: "Instant QR scan payments via all UPI apps." },
    { title: "Credit Cards", desc: "Visa, Mastercard, RuPay & Amex accepted." },
    { title: "Debit Cards", desc: "All major bank debit cards accepted." },
    { title: "NFC Mobile Payments", desc: "Tap-to-pay via NFC enabled smartphones and smartwatches." },
  ],
  children: [
    { title: "Good for Kids", desc: "Mild sweet corn soups, non-spicy butter chicken, noodles and ice creams." },
  ],
  parking: [
    { title: "Free Parking Lot", desc: "Designated complimentary parking space right outside the entrance." },
    { title: "Free Street Parking", desc: "Wide, unobstructed street parking on Vikas Nagar Colony road." },
    { title: "Plenty of Parking", desc: "Ample room for both two-wheelers and four-wheelers during peak hours." },
  ],
};
