import React, { useState } from "react";
import { X, PlusCircle, Image as ImageIcon, Sparkles } from "lucide-react";
import { type MenuItem, IMAGES } from "@/lib/vantillu";
import { getDishImage } from "@/lib/dishImages";

interface AddMenuItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddItem: (item: MenuItem) => void;
}

const PRESET_IMAGES = [
  { label: "Biryani", url: IMAGES.dishes.biryani },
  { label: "Starters / Fry", url: IMAGES.dishes.starter },
  { label: "Traditional Curry", url: IMAGES.dishes.curry },
  { label: "Gongura / Roast", url: IMAGES.dishes.gongura },
  { label: "Warm Soup", url: IMAGES.dishes.soup },
  { label: "Breads / Roti", url: IMAGES.dishes.bread },
  { label: "Noodles / Rice", url: IMAGES.dishes.chinese },
  { label: "Sweets / Dessert", url: IMAGES.dishes.dessert },
];

export const AddMenuItemModal: React.FC<AddMenuItemModalProps> = ({
  isOpen,
  onClose,
  onAddItem,
}) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("Starters");
  const [subCategory, setSubCategory] = useState("Vantillu Special Starters");
  const [diet, setDiet] = useState<"veg" | "non-veg" | "seafood" | "egg">("non-veg");
  const [price, setPrice] = useState<number | "">(350);
  const [hasPortions, setHasPortions] = useState(false);
  const [miniPrice, setMiniPrice] = useState<number | "">("");
  const [platePrice, setPlatePrice] = useState<number | "">("");
  const [familyPrice, setFamilyPrice] = useState<number | "">("");
  const [imageUrl, setImageUrl] = useState(PRESET_IMAGES[1].url);
  const [isSpecial, setIsSpecial] = useState(false);

  if (!isOpen) return null;

  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setImageUrl(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !price) return;

    const newItem: MenuItem = {
      id: `custom-${Date.now()}`,
      name: name.trim(),
      desc: desc.trim() || undefined,
      category,
      subCategory: subCategory.trim() || undefined,
      diet,
      price: Number(price),
      portions: hasPortions
        ? {
            mini: miniPrice ? Number(miniPrice) : undefined,
            plate: platePrice ? Number(platePrice) : Number(price),
            family: familyPrice ? Number(familyPrice) : undefined,
          }
        : undefined,
      isSpecial,
      image: imageUrl || getDishImage(name.trim(), category),
    };

    onAddItem(newItem);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-xs" onClick={onClose} />
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-lg rounded-2xl bg-[#F9F6F0] p-6 shadow-2xl border border-[#E5D8C8] text-[#2C1E16] z-10">
          <div className="flex items-center justify-between pb-4 border-b border-[#E5D8C8]">
            <div className="flex items-center gap-2">
              <PlusCircle className="text-[#5C1A1B]" size={22} />
              <h3 className="font-serif-display text-2xl font-semibold">
                Add New Dish to Menu
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-[#E5D8C8] text-[#5A453A]"
            >
              <X size={20} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="mt-4 space-y-4 text-xs">
            {/* Dish Name */}
            <div>
              <label className="block text-[#5A453A] font-semibold mb-1">
                Dish Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Telangana Gongura Chicken Vepudu"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2.5 rounded-lg border border-[#E5D8C8] bg-white focus:outline-hidden focus:border-[#5C1A1B] text-sm"
              />
            </div>

            {/* Category & Diet */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[#5A453A] font-semibold mb-1">
                  Category *
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-[#E5D8C8] bg-white focus:outline-hidden focus:border-[#5C1A1B]"
                >
                  <option value="Starters">Starters</option>
                  <option value="Biryani">Biryani</option>
                  <option value="Curries">Curries</option>
                  <option value="Soups">Soups</option>
                  <option value="Breads">Breads</option>
                  <option value="Chinese">Chinese</option>
                  <option value="Desserts">Desserts</option>
                  <option value="Raitha & Drinks">Raitha & Drinks</option>
                </select>
              </div>

              <div>
                <label className="block text-[#5A453A] font-semibold mb-1">
                  Diet Type *
                </label>
                <select
                  value={diet}
                  onChange={(e) => setDiet(e.target.value as any)}
                  className="w-full p-2.5 rounded-lg border border-[#E5D8C8] bg-white focus:outline-hidden focus:border-[#5C1A1B]"
                >
                  <option value="veg">🟢 Pure Veg</option>
                  <option value="non-veg">🔴 Non-Veg (Chicken/Mutton)</option>
                  <option value="seafood">🦐 Sea Food (Fish/Prawns)</option>
                  <option value="egg">🟡 Egg</option>
                </select>
              </div>
            </div>

            {/* Sub-Category */}
            <div>
              <label className="block text-[#5A453A] font-semibold mb-1">
                Section / Sub-Category
              </label>
              <input
                type="text"
                placeholder="e.g. Vantillu Special Starters, Veg Curries"
                value={subCategory}
                onChange={(e) => setSubCategory(e.target.value)}
                className="w-full p-2 rounded-lg border border-[#E5D8C8] bg-white focus:outline-hidden focus:border-[#5C1A1B]"
              />
            </div>

            {/* Base Price & Portions */}
            <div className="p-3 bg-[#F2EBE1] rounded-xl border border-[#E5D8C8] space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <label className="block text-[#5A453A] font-semibold">
                    Standard Price (₹) *
                  </label>
                  <input
                    type="number"
                    min="10"
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value === "" ? "" : Number(e.target.value))}
                    className="w-32 mt-1 p-2 rounded-lg border border-[#E5D8C8] bg-white font-semibold text-sm focus:outline-hidden"
                  />
                </div>
                <label className="flex items-center gap-2 cursor-pointer pt-3">
                  <input
                    type="checkbox"
                    checked={hasPortions}
                    onChange={(e) => setHasPortions(e.target.checked)}
                    className="rounded text-[#5C1A1B] focus:ring-0"
                  />
                  <span className="font-medium text-[#5A453A]">
                    Enable Mini/Plate/Family Pricing
                  </span>
                </label>
              </div>

              {hasPortions && (
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#E5D8C8]">
                  <div>
                    <label className="text-[10px] text-[#5A453A] block">Mini (₹)</label>
                    <input
                      type="number"
                      placeholder="e.g. 240"
                      value={miniPrice}
                      onChange={(e) => setMiniPrice(e.target.value === "" ? "" : Number(e.target.value))}
                      className="w-full p-1.5 rounded border border-[#E5D8C8] bg-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-[#5A453A] block">Plate (₹)</label>
                    <input
                      type="number"
                      placeholder="e.g. 360"
                      value={platePrice}
                      onChange={(e) => setPlatePrice(e.target.value === "" ? "" : Number(e.target.value))}
                      className="w-full p-1.5 rounded border border-[#E5D8C8] bg-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-[#5A453A] block">Family (₹)</label>
                    <input
                      type="number"
                      placeholder="e.g. 680"
                      value={familyPrice}
                      onChange={(e) => setFamilyPrice(e.target.value === "" ? "" : Number(e.target.value))}
                      className="w-full p-1.5 rounded border border-[#E5D8C8] bg-white text-xs"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Image Selection with Previews */}
            <div>
              <label className="block text-[#5A453A] font-semibold mb-1 flex items-center justify-between">
                <span>Dish Image (Required) *</span>
                <span className="text-[10px] font-normal text-[#C65D47]">
                  Choose preset or enter custom image URL
                </span>
              </label>

              {/* Preset Thumbnails */}
              <div className="grid grid-cols-4 gap-2 mb-2">
                {PRESET_IMAGES.map((img) => (
                  <button
                    key={img.label}
                    type="button"
                    onClick={() => setImageUrl(img.url)}
                    className={`relative rounded-lg overflow-hidden border p-0.5 transition-all text-left group ${
                      imageUrl === img.url
                        ? "border-[#5C1A1B] ring-2 ring-[#5C1A1B]"
                        : "border-[#E5D8C8] opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img.url}
                      alt={img.label}
                      className="w-full h-12 object-cover rounded-md"
                    />
                    <span className="text-[9px] block text-center truncate pt-0.5 text-[#5A453A]">
                      {img.label}
                    </span>
                  </button>
                ))}
              </div>

              <div className="flex gap-2">
                <input
                  type="url"
                  placeholder="Paste direct Image URL (https://...)"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="flex-1 p-2 rounded-lg border border-[#E5D8C8] bg-white text-xs focus:outline-hidden"
                />
                <label className="px-3 py-2 rounded-lg border border-[#E5D8C8] bg-white cursor-pointer hover:bg-[#F2EBE1] flex items-center gap-1.5 shrink-0 text-xs text-[#5A453A]">
                  <ImageIcon size={14} />
                  <span>Upload</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageFileChange}
                    className="hidden"
                  />
                </label>
              </div>

              {imageUrl && (
                <div className="mt-2 flex items-center gap-2 p-2 bg-[#F2EBE1] rounded-lg border border-[#E5D8C8]">
                  <img
                    src={imageUrl}
                    alt="Preview"
                    className="w-12 h-12 object-cover rounded-md border border-[#E5D8C8]"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = IMAGES.dishes.starter;
                    }}
                  />
                  <div className="text-[11px] text-[#5A453A]">
                    <span className="font-semibold text-[#5C1A1B]">Image Selected</span>
                    <p className="text-[10px] text-[#5A453A]/80 truncate max-w-[260px]">
                      {imageUrl}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="block text-[#5A453A] font-semibold mb-1">
                Description / Notes (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Key spices, preparation style, or traditional background..."
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="w-full p-2 rounded-lg border border-[#E5D8C8] bg-white focus:outline-hidden focus:border-[#5C1A1B]"
              />
            </div>

            {/* Special highlight tag */}
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={isSpecial}
                onChange={(e) => setIsSpecial(e.target.checked)}
                className="rounded text-[#5C1A1B] focus:ring-0"
              />
              <span className="font-medium text-[#5A453A] flex items-center gap-1">
                <Sparkles size={13} className="text-[#D4AF37]" />
                Mark as Chef's Special / Signature Item
              </span>
            </label>

            <div className="pt-3 border-t border-[#E5D8C8] flex justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-full border border-[#E5D8C8] hover:bg-[#E5D8C8] font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-full bg-[#5C1A1B] text-[#F9F6F0] font-medium hover:bg-[#4a1516] transition-colors shadow-md"
              >
                Add Dish to Menu
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMenuItemModal;
