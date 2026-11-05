import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, Plus, Minus, ShoppingBag, MapPin, Bike, Store, Utensils, Car } from "lucide-react";
import { useCart, type OrderServiceType } from "@/context/CartContext";

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    totalItems,
    orderType,
    setOrderType,
    deliveryDetails,
    updateDeliveryDetails,
    sendWhatsAppOrder,
  } = useCart();

  const serviceOptions: { id: OrderServiceType; label: string; icon: React.FC<{ size?: number; className?: string }> }[] = [
    { id: "delivery", label: "Delivery", icon: Bike },
    { id: "takeaway", label: "Takeaway", icon: Store },
    { id: "dine-in", label: "Dine-In", icon: Utensils },
    { id: "kerbside", label: "Kerbside", icon: Car },
  ];

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-[#2C1E16]/60 backdrop-blur-xs transition-opacity"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="w-screen max-w-md bg-[#F9F6F0] text-[#2C1E16] shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="p-5 border-b border-[#E5D8C8] flex items-center justify-between bg-[#F2EBE1]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#5C1A1B] text-[#F9F6F0] flex items-center justify-center">
                    <ShoppingBag size={18} />
                  </div>
                  <div>
                    <h2 className="font-serif-display text-xl font-medium text-[#2C1E16]">
                      Your Order
                    </h2>
                    <p className="text-xs text-[#5A453A]">
                      {totalItems} {totalItems === 1 ? "item" : "items"} selected
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {items.length > 0 && (
                    <button
                      onClick={clearCart}
                      className="text-xs text-[#C65D47] hover:underline px-2 py-1"
                    >
                      Clear
                    </button>
                  )}
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="p-2 rounded-full hover:bg-[#E5D8C8] text-[#5A453A] transition-colors"
                    aria-label="Close cart"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12 text-[#5A453A]">
                    <ShoppingBag size={48} className="text-[#E5D8C8] mb-3" />
                    <p className="font-serif-display text-2xl text-[#2C1E16]">
                      Your cart is empty
                    </p>
                    <p className="text-sm mt-1 max-w-xs">
                      Explore our authentic soups, biryanis, curries, and starters.
                    </p>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="mt-6 px-6 py-2.5 rounded-full bg-[#5C1A1B] text-[#F9F6F0] text-xs uppercase tracking-wider font-medium hover:bg-[#4a1516] transition-colors"
                    >
                      Browse Menu
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="space-y-3">
                      {items.map((it) => (
                        <div
                          key={it.id}
                          className="p-3 bg-white/70 rounded-xl border border-[#E5D8C8] flex items-center gap-3 shadow-xs"
                        >
                          {it.image && (
                            <img
                              src={it.image}
                              alt={it.name}
                              className="w-14 h-14 object-cover rounded-lg shrink-0 border border-[#E5D8C8]"
                            />
                          )}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5">
                              <span
                                className={`w-2 h-2 rounded-full shrink-0 ${
                                  it.diet === "veg"
                                    ? "bg-green-600"
                                    : it.diet === "egg"
                                    ? "bg-amber-600"
                                    : "bg-red-600"
                                }`}
                              />
                              <h4 className="font-medium text-sm text-[#2C1E16] truncate">
                                {it.name}
                              </h4>
                            </div>
                            <div className="flex items-center gap-2 mt-0.5 text-xs text-[#5A453A]">
                              {it.portionLabel && (
                                <span className="px-1.5 py-0.5 rounded bg-[#F2EBE1] text-[#5C1A1B] font-semibold text-[10px]">
                                  {it.portionLabel}
                                </span>
                              )}
                              <span>₹{it.price} each</span>
                            </div>
                          </div>

                          {/* Quantity Controls - Typeable Number Input */}
                          <div className="flex items-center gap-1.5 bg-[#F2EBE1] rounded-lg p-1">
                            <button
                              type="button"
                              onClick={() => updateQuantity(it.id, it.quantity - 1)}
                              className="w-6 h-6 rounded flex items-center justify-center text-[#5C1A1B] hover:bg-white transition-colors cursor-pointer"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={12} />
                            </button>
                            <input
                              type="number"
                              min="1"
                              max="999"
                              value={it.quantity}
                              onChange={(e) => {
                                const val = parseInt(e.target.value, 10);
                                if (!isNaN(val) && val > 0) {
                                  updateQuantity(it.id, val);
                                }
                              }}
                              className="w-12 h-6 text-center text-xs font-bold bg-white text-[#2C1E16] rounded border border-[#E5D8C8] focus:outline-hidden focus:border-[#5C1A1B] p-0"
                              aria-label="Item quantity"
                            />
                            <button
                              type="button"
                              onClick={() => updateQuantity(it.id, it.quantity + 1)}
                              className="w-6 h-6 rounded flex items-center justify-center text-[#5C1A1B] hover:bg-white transition-colors cursor-pointer"
                              aria-label="Increase quantity"
                            >
                              <Plus size={12} />
                            </button>
                          </div>

                          <div className="text-right shrink-0">
                            <div className="font-serif-display text-base font-semibold text-[#5C1A1B]">
                              ₹{it.price * it.quantity}
                            </div>
                            <button
                              onClick={() => removeFromCart(it.id)}
                              className="text-red-500 hover:text-red-700 text-xs mt-1 transition-colors"
                              aria-label="Remove item"
                            >
                              <Trash2 size={13} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Service Type Selector */}
                    <div className="pt-4 border-t border-[#E5D8C8]">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#5A453A] block mb-2">
                        Select Service Option
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {serviceOptions.map((opt) => {
                          const Icon = opt.icon;
                          const active = orderType === opt.id;
                          return (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() => setOrderType(opt.id)}
                              className={`flex items-center gap-2 p-2.5 rounded-lg border text-xs font-medium transition-all ${
                                active
                                  ? "bg-[#5C1A1B] text-[#F9F6F0] border-[#5C1A1B] shadow-xs"
                                  : "bg-white text-[#2C1E16] border-[#E5D8C8] hover:bg-[#F2EBE1]"
                              }`}
                            >
                              <Icon size={15} />
                              <span>{opt.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Customer & Delivery Information Form */}
                    <div className="pt-2 space-y-3 bg-white/70 p-3.5 rounded-xl border border-[#E5D8C8]">
                      <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#5C1A1B]">
                        <MapPin size={14} />
                        <span>
                          {orderType === "delivery"
                            ? "Manual Delivery Location Details"
                            : orderType === "dine-in"
                            ? "Dine-In Table Details"
                            : "Contact & Pickup Details"}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="text-[11px] text-[#5A453A] block mb-1">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Ramesh"
                            value={deliveryDetails.fullName}
                            onChange={(e) => updateDeliveryDetails({ fullName: e.target.value })}
                            className="w-full text-xs p-2 rounded-md border border-[#E5D8C8] bg-[#F9F6F0] focus:outline-hidden focus:border-[#5C1A1B]"
                            required
                          />
                        </div>
                        <div>
                          <label className="text-[11px] text-[#5A453A] block mb-1">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            placeholder="e.g. 9876543210"
                            value={deliveryDetails.phone}
                            onChange={(e) => updateDeliveryDetails({ phone: e.target.value })}
                            className="w-full text-xs p-2 rounded-md border border-[#E5D8C8] bg-[#F9F6F0] focus:outline-hidden focus:border-[#5C1A1B]"
                            required
                          />
                        </div>
                      </div>

                      {orderType === "delivery" && (
                        <>
                          <div>
                            <label className="text-[11px] text-[#5A453A] block mb-1">
                              Delivery Location / Address (Enter Manually) *
                            </label>
                            <textarea
                              rows={2}
                              placeholder="House / Flat No., Colony / Street, Landmark (e.g. H.No 4-12, Near Bus Stand, Kamareddy)"
                              value={deliveryDetails.address}
                              onChange={(e) => updateDeliveryDetails({ address: e.target.value })}
                              className="w-full text-xs p-2 rounded-md border border-[#E5D8C8] bg-[#F9F6F0] focus:outline-hidden focus:border-[#5C1A1B]"
                              required
                            />
                            <p className="text-[10px] text-[#5A453A]/80 mt-0.5">
                              Deliveries serviced across Kamareddy municipality limits.
                            </p>
                          </div>
                          <div>
                            <label className="text-[11px] text-[#5A453A] block mb-1">
                              Landmark (Optional)
                            </label>
                            <input
                              type="text"
                              placeholder="e.g. Opposite Sai Baba Temple"
                              value={deliveryDetails.landmark}
                              onChange={(e) => updateDeliveryDetails({ landmark: e.target.value })}
                              className="w-full text-xs p-2 rounded-md border border-[#E5D8C8] bg-[#F9F6F0] focus:outline-hidden focus:border-[#5C1A1B]"
                            />
                          </div>
                        </>
                      )}

                      {orderType === "dine-in" && (
                        <div>
                          <label className="text-[11px] text-[#5A453A] block mb-1">
                            Table Number (if already seated)
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Table 5 or AC Private Room"
                            value={deliveryDetails.tableNumber}
                            onChange={(e) => updateDeliveryDetails({ tableNumber: e.target.value })}
                            className="w-full text-xs p-2 rounded-md border border-[#E5D8C8] bg-[#F9F6F0] focus:outline-hidden focus:border-[#5C1A1B]"
                          />
                        </div>
                      )}

                      <div>
                        <label className="text-[11px] text-[#5A453A] block mb-1">
                          Cooking / Spice Notes (Optional)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Less spicy, extra raitha, crispier wings"
                          value={deliveryDetails.specialInstructions}
                          onChange={(e) => updateDeliveryDetails({ specialInstructions: e.target.value })}
                          className="w-full text-xs p-2 rounded-md border border-[#E5D8C8] bg-[#F9F6F0] focus:outline-hidden focus:border-[#5C1A1B]"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Footer Checkout */}
              {items.length > 0 && (
                <div className="p-5 border-t border-[#E5D8C8] bg-[#F2EBE1] space-y-3">
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between text-[#5A453A]">
                      <span>Items Subtotal</span>
                      <span className="font-semibold text-[#2C1E16]">₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between text-[#5A453A]">
                      <span>Taxes & GST</span>
                      <span className="text-green-700 font-medium">Included</span>
                    </div>
                    {orderType === "delivery" && (
                      <div className="flex justify-between text-[#5A453A]">
                        <span>Delivery Fee</span>
                        <span className="text-xs text-[#5C1A1B]">Confirmed on WhatsApp</span>
                      </div>
                    )}
                    <div className="flex justify-between items-baseline pt-2 border-t border-[#E5D8C8]">
                      <span className="font-serif-display text-base font-semibold text-[#2C1E16]">
                        Grand Total
                      </span>
                      <span className="font-serif-display text-2xl font-bold text-[#5C1A1B]">
                        ₹{subtotal}
                      </span>
                    </div>
                  </div>

                  <p className="text-[10px] text-[#5A453A]/80 text-center">
                    Note: Fresh cooking takes 15–20 minutes. No artificial food coloring.
                  </p>

                  <button
                    onClick={sendWhatsAppOrder}
                    className="w-full py-3.5 px-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all cursor-pointer"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    <span>Order via WhatsApp (₹{subtotal})</span>
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
