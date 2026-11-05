import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Search,
  PlusCircle,
  ShoppingBag,
  Sparkles,
  Info,
  Check,
  Filter,
  UtensilsCrossed,
} from "lucide-react";
import Logo from "@/components/vantillu/Logo";
import Footer from "@/components/vantillu/Footer";
import AddMenuItemModal from "@/components/vantillu/AddMenuItemModal";
import {
  VANTILLU_FULL_MENU,
  RESTAURANT_RULES,
  IMAGES,
  type MenuItem,
} from "@/lib/vantillu";
import { useCart } from "@/context/CartContext";

const CUSTOM_ITEMS_STORAGE_KEY = "vantillu_custom_menu_items";

export const MenuPage: React.FC = () => {
  const { addToCart, totalItems, subtotal, setIsCartOpen } = useCart();

  const [customItems, setCustomItems] = useState<MenuItem[]>(() => {
    try {
      const saved = localStorage.getItem(CUSTOM_ITEMS_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [dietFilter, setDietFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Selected portion selection map for dishes with portions: { [itemId]: 'mini' | 'plate' | 'family' }
  const [selectedPortions, setSelectedPortions] = useState<Record<string, "mini" | "plate" | "family">>({});

  // Direct typed quantity state for each dish card: { [itemId]: number }
  const [cardQuantities, setCardQuantities] = useState<Record<string, number>>({});

  // Just added toast effect map
  const [addedEffect, setAddedEffect] = useState<Record<string, boolean>>({});

  useEffect(() => {
    document.title = "Menu & Online Ordering — Vantillu Kamareddy";
    window.scrollTo(0, 0);
  }, []);

  const allMenuItems = useMemo(() => {
    return [...customItems, ...VANTILLU_FULL_MENU];
  }, [customItems]);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(allMenuItems.map((item) => item.category)));
    return ["All", ...cats];
  }, [allMenuItems]);

  const handleAddNewItem = (item: MenuItem) => {
    const updated = [item, ...customItems];
    setCustomItems(updated);
    try {
      localStorage.setItem(CUSTOM_ITEMS_STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const handlePortionChange = (itemId: string, portion: "mini" | "plate" | "family") => {
    setSelectedPortions((prev) => ({ ...prev, [itemId]: portion }));
  };

  const handleQuantityStep = (itemId: string, delta: number) => {
    setCardQuantities((prev) => {
      const current = prev[itemId] || 1;
      const next = Math.max(1, Math.min(999, current + delta));
      return { ...prev, [itemId]: next };
    });
  };

  const handleQuantityInput = (itemId: string, value: string) => {
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed) && parsed > 0) {
      setCardQuantities((prev) => ({ ...prev, [itemId]: Math.min(999, parsed) }));
    } else if (value === "") {
      setCardQuantities((prev) => ({ ...prev, [itemId]: 1 }));
    }
  };

  const handleAddToCart = (item: MenuItem) => {
    let portionLabel: string | undefined = undefined;
    let priceToUse = item.price;

    if (item.portions) {
      const currentPortion = selectedPortions[item.id] || (item.portions.plate ? "plate" : "mini");
      portionLabel = currentPortion.toUpperCase();
      if (currentPortion === "mini" && item.portions.mini) {
        priceToUse = item.portions.mini;
      } else if (currentPortion === "plate" && item.portions.plate) {
        priceToUse = item.portions.plate;
      } else if (currentPortion === "family" && item.portions.family) {
        priceToUse = item.portions.family;
      }
    }

    const qty = cardQuantities[item.id] || 1;
    addToCart(item, portionLabel, priceToUse, qty);

    // Visual button feedback
    setAddedEffect((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedEffect((prev) => ({ ...prev, [item.id]: false }));
    }, 1200);
  };

  const filteredItems = useMemo(() => {
    return allMenuItems.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;
      const matchesDiet =
        dietFilter === "all" ||
        (dietFilter === "veg" && item.diet === "veg") ||
        (dietFilter === "non-veg" && (item.diet === "non-veg" || item.diet === "seafood" || item.diet === "egg"));
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.desc && item.desc.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.subCategory && item.subCategory.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesDiet && matchesSearch;
    });
  }, [allMenuItems, activeCategory, dietFilter, searchQuery]);

  return (
    <main className="bg-[#F9F6F0] text-[#2C1E16] min-h-screen pb-28">
      {/* Top Header */}
      <header className="sticky top-0 z-30 bg-[#F9F6F0]/90 backdrop-blur-xl border-b border-[#E5D8C8]">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#2C1E16] hover:text-[#5C1A1B] transition-colors"
          >
            <ArrowLeft size={14} /> Back to Home
          </Link>

          <Link to="/">
            <Logo className="text-3xl" color="#5C1A1B" />
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#5C1A1B] text-[#F9F6F0] text-xs uppercase tracking-wider font-medium hover:bg-[#4a1516] transition-colors shadow-xs cursor-pointer"
            >
              <PlusCircle size={15} />
              <span>Add Dish</span>
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full bg-[#E5D8C8] text-[#5C1A1B] hover:bg-[#d8c8b4] transition-colors flex items-center justify-center cursor-pointer"
              aria-label="View Cart"
            >
              <ShoppingBag size={18} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#C65D47] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="pt-12 md:pt-16 pb-8 bg-gradient-to-b from-[#F2EBE1] to-[#F9F6F0]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
          <p className="text-[#C65D47] text-[11px] uppercase tracking-[0.35em] font-medium mb-3">
            — Authentic Telugu & Telangana Kitchen —
          </p>
          <h1
            className="font-serif-display text-[#2C1E16] leading-[0.95]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
          >
            A family<br />
            <span className="italic text-[#5C1A1B]">cookbook,</span> opened.
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-[#5A453A] font-light text-sm md:text-base leading-relaxed">
            All authentic items freshly cooked upon order. Zero food colouring. All prices
            inclusive of GST. Delivered across Kamareddy or served piping hot at your table.
          </p>

          {/* Quick Notice Banner */}
          <div className="mt-8 max-w-3xl mx-auto bg-amber-50/80 border border-amber-200 rounded-2xl p-4 text-xs text-amber-950 flex items-start gap-3 text-left">
            <Info size={18} className="text-[#C65D47] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold block mb-0.5">Vantillu Kitchen Promise:</span>
              <span>
                1. No artificial colours used. 2. Orders take 15–20 mins for authentic preparation.
                3. Choose your portion (Mini, Plate, Family) where applicable and order directly via WhatsApp!
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Controls */}
      <section className="sticky top-20 z-20 bg-[#F9F6F0]/95 backdrop-blur-md py-4 border-b border-[#E5D8C8] shadow-xs">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12 space-y-3">
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5A453A]/60"
              />
              <input
                type="text"
                placeholder="Search biryanis, gongura, soups, curries, starters..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-[#E5D8C8] bg-white text-xs focus:outline-hidden focus:border-[#5C1A1B]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#5A453A] hover:text-[#2C1E16]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Diet Pills & Add Custom Item Action */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
              <button
                onClick={() => setDietFilter("all")}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-colors shrink-0 ${
                  dietFilter === "all"
                    ? "bg-[#2C1E16] text-[#F9F6F0] border-[#2C1E16]"
                    : "bg-white text-[#5A453A] border-[#E5D8C8]"
                }`}
              >
                All Diets
              </button>
              <button
                onClick={() => setDietFilter("veg")}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-colors flex items-center gap-1.5 shrink-0 ${
                  dietFilter === "veg"
                    ? "bg-green-700 text-white border-green-700"
                    : "bg-white text-green-800 border-[#E5D8C8]"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-green-600 inline-block" />
                Pure Veg
              </button>
              <button
                onClick={() => setDietFilter("non-veg")}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-colors flex items-center gap-1.5 shrink-0 ${
                  dietFilter === "non-veg"
                    ? "bg-red-700 text-white border-red-700"
                    : "bg-white text-red-800 border-[#E5D8C8]"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-red-600 inline-block" />
                Non-Veg & Sea Food
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1">
            {categories.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium transition-all shrink-0 cursor-pointer ${
                    active
                      ? "bg-[#5C1A1B] text-[#F9F6F0] shadow-sm"
                      : "bg-white text-[#5A453A] border border-[#E5D8C8] hover:bg-[#F2EBE1]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Menu Cards Display */}
      <section className="pt-8 pb-16">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between mb-6">
            <p className="text-xs text-[#5A453A]">
              Showing <span className="font-semibold text-[#2C1E16]">{filteredItems.length}</span> dishes
              {activeCategory !== "All" && ` in ${activeCategory}`}
            </p>
            {customItems.length > 0 && (
              <span className="text-xs text-[#C65D47] font-medium">
                ({customItems.length} custom dishes added by you)
              </span>
            )}
          </div>

          {filteredItems.length === 0 ? (
            <div className="py-20 text-center text-[#5A453A]">
              <UtensilsCrossed size={44} className="mx-auto text-[#E5D8C8] mb-3" />
              <p className="font-serif-display text-2xl text-[#2C1E16]">
                No dishes found matching your criteria
              </p>
              <p className="text-xs mt-1">Try resetting the search or selecting a different category.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                  setDietFilter("all");
                }}
                className="mt-4 px-5 py-2 rounded-full bg-[#5C1A1B] text-[#F9F6F0] text-xs uppercase tracking-wider"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => {
                const currentPortion =
                  item.portions && (selectedPortions[item.id] || (item.portions.plate ? "plate" : "mini"));

                let displayPrice = item.price;
                if (item.portions && currentPortion) {
                  if (currentPortion === "mini" && item.portions.mini) {
                    displayPrice = item.portions.mini;
                  } else if (currentPortion === "plate" && item.portions.plate) {
                    displayPrice = item.portions.plate;
                  } else if (currentPortion === "family" && item.portions.family) {
                    displayPrice = item.portions.family;
                  }
                }

                const isAdded = addedEffect[item.id];

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl border border-[#E5D8C8] overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col group"
                  >
                    {/* Dish Image with Badges */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#2C1E16]">
                      <img
                        src={item.image || IMAGES.dishes.starter}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = IMAGES.dishes.starter;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase shadow-xs ${
                            item.diet === "veg"
                              ? "bg-green-600 text-white"
                              : item.diet === "egg"
                              ? "bg-amber-600 text-white"
                              : "bg-red-600 text-white"
                          }`}
                        >
                          {item.diet === "veg" ? "Pure Veg" : item.diet === "egg" ? "Egg" : item.diet === "seafood" ? "Sea Food" : "Non-Veg"}
                        </span>

                        {item.isSpecial && (
                          <span className="px-2 py-0.5 rounded-full bg-[#E8C77B] text-[#2C1E16] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-xs">
                            <Sparkles size={11} /> Chef's Special
                          </span>
                        )}
                      </div>

                      {/* Subcategory Pill */}
                      {item.subCategory && (
                        <span className="absolute bottom-3 left-3 text-[10px] text-[#F9F6F0]/90 uppercase tracking-wider font-medium">
                          {item.subCategory}
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <div className="flex justify-between items-start gap-2">
                          <h3 className="font-serif-display text-xl text-[#2C1E16] group-hover:text-[#5C1A1B] transition-colors leading-snug">
                            {item.name}
                          </h3>
                        </div>

                        {item.desc && (
                          <p className="mt-1.5 text-xs text-[#5A453A] font-light leading-relaxed line-clamp-2">
                            {item.desc}
                          </p>
                        )}
                      </div>

                      {/* Portions Selector (if item has portions) */}
                      {item.portions && (
                        <div className="pt-2 border-t border-[#E5D8C8]/60">
                          <span className="text-[10px] uppercase tracking-wider text-[#5A453A] font-semibold block mb-1.5">
                            Portion Size
                          </span>
                          <div className="grid grid-cols-3 gap-1.5 bg-[#F2EBE1] p-1 rounded-lg">
                            {item.portions.mini !== undefined && (
                              <button
                                type="button"
                                onClick={() => handlePortionChange(item.id, "mini")}
                                className={`py-1 text-center rounded text-[11px] font-medium transition-all ${
                                  currentPortion === "mini"
                                    ? "bg-[#5C1A1B] text-white shadow-xs"
                                    : "text-[#5A453A] hover:bg-white/60"
                                }`}
                              >
                                <span>Mini</span>
                                <span className="block text-[10px] font-bold">₹{item.portions.mini}</span>
                              </button>
                            )}

                            {item.portions.plate !== undefined && (
                              <button
                                type="button"
                                onClick={() => handlePortionChange(item.id, "plate")}
                                className={`py-1 text-center rounded text-[11px] font-medium transition-all ${
                                  currentPortion === "plate"
                                    ? "bg-[#5C1A1B] text-white shadow-xs"
                                    : "text-[#5A453A] hover:bg-white/60"
                                }`}
                              >
                                <span>Plate</span>
                                <span className="block text-[10px] font-bold">₹{item.portions.plate}</span>
                              </button>
                            )}

                            {item.portions.family !== undefined && (
                              <button
                                type="button"
                                onClick={() => handlePortionChange(item.id, "family")}
                                className={`py-1 text-center rounded text-[11px] font-medium transition-all ${
                                  currentPortion === "family"
                                    ? "bg-[#5C1A1B] text-white shadow-xs"
                                    : "text-[#5A453A] hover:bg-white/60"
                                }`}
                              >
                                <span>Family</span>
                                <span className="block text-[10px] font-bold">₹{item.portions.family}</span>
                              </button>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Action Price & Add to Cart with direct quantity typing */}
                      <div className="pt-3 border-t border-[#E5D8C8]/60 space-y-2.5">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-[#5A453A] uppercase tracking-wider block">
                              Price
                            </span>
                            <span className="font-serif-display text-2xl font-bold text-[#5C1A1B]">
                              ₹{displayPrice}
                            </span>
                          </div>

                          {/* Typeable Quantity Selector */}
                          <div className="flex items-center gap-1 bg-[#F2EBE1] rounded-lg p-1 border border-[#E5D8C8]">
                            <button
                              type="button"
                              onClick={() => handleQuantityStep(item.id, -1)}
                              className="w-7 h-7 rounded bg-white text-[#5C1A1B] hover:bg-[#5C1A1B] hover:text-white flex items-center justify-center font-bold text-sm transition-colors cursor-pointer"
                              aria-label="Decrease quantity"
                            >
                              -
                            </button>
                            <input
                              type="number"
                              min="1"
                              max="999"
                              value={cardQuantities[item.id] !== undefined ? cardQuantities[item.id] : 1}
                              onChange={(e) => handleQuantityInput(item.id, e.target.value)}
                              className="w-12 h-7 text-center font-bold text-xs bg-transparent text-[#2C1E16] focus:outline-hidden"
                              title="Type any quantity"
                            />
                            <button
                              type="button"
                              onClick={() => handleQuantityStep(item.id, 1)}
                              className="w-7 h-7 rounded bg-white text-[#5C1A1B] hover:bg-[#5C1A1B] hover:text-white flex items-center justify-center font-bold text-sm transition-colors cursor-pointer"
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleAddToCart(item)}
                          className={`w-full py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer ${
                            isAdded
                              ? "bg-green-700 text-white scale-[1.02]"
                              : "bg-[#5C1A1B] text-[#F9F6F0] hover:bg-[#4a1516] shadow-xs hover:shadow-md"
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <Check size={14} /> Added {cardQuantities[item.id] || 1} to Cart!
                            </>
                          ) : (
                            <>
                              <ShoppingBag size={14} /> Add {cardQuantities[item.id] && cardQuantities[item.id] > 1 ? `(${cardQuantities[item.id]})` : ""} to Cart
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Floating Bottom Cart Bar for mobile & instant checkout */}
      {totalItems > 0 && (
        <div className="fixed bottom-6 inset-x-0 z-30 px-6 pointer-events-none">
          <div className="max-w-md mx-auto pointer-events-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-[#2C1E16] text-[#F9F6F0] p-3.5 rounded-full shadow-2xl flex items-center justify-between border border-[#E8C77B]/40"
            >
              <div className="flex items-center gap-3 pl-3">
                <div className="w-8 h-8 rounded-full bg-[#E8C77B] text-[#2C1E16] flex items-center justify-center font-bold text-xs">
                  {totalItems}
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#F9F6F0]/70 block">
                    Total
                  </span>
                  <span className="font-serif-display text-lg font-bold text-[#E8C77B]">
                    ₹{subtotal}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsCartOpen(true)}
                className="px-6 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg transition-colors cursor-pointer"
              >
                <span>View Cart & Order</span>
                <ShoppingBag size={14} />
              </button>
            </motion.div>
          </div>
        </div>
      )}

      {/* Add Dish Modal */}
      <AddMenuItemModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddItem={handleAddNewItem}
      />

      <Footer />
    </main>
  );
};

export default MenuPage;
