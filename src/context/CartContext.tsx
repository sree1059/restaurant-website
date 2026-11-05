import React, { createContext, useContext, useEffect, useState } from "react";
import { type MenuItem, WHATSAPP_NUMBER } from "@/lib/vantillu";

export interface CartItem {
  id: string; // composite key e.g. "soup-1-default" or "bir-c-3-plate"
  menuItemId: string;
  name: string;
  portionLabel?: string; // "Mini" | "Plate" | "Family" or undefined
  price: number;
  quantity: number;
  diet: "veg" | "non-veg" | "seafood" | "egg";
  category: string;
  image?: string;
}

export type OrderServiceType = "delivery" | "takeaway" | "dine-in" | "kerbside";

export interface DeliveryDetails {
  fullName: string;
  phone: string;
  address: string; // Manually entered delivery location / colony
  landmark: string;
  tableNumber: string;
  specialInstructions: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: MenuItem, portionLabel?: string, customPrice?: number, quantity?: number) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  orderType: OrderServiceType;
  setOrderType: (type: OrderServiceType) => void;
  deliveryDetails: DeliveryDetails;
  updateDeliveryDetails: (details: Partial<DeliveryDetails>) => void;
  sendWhatsAppOrder: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = "vantillu_cart_items";

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orderType, setOrderType] = useState<OrderServiceType>("delivery");
  const [deliveryDetails, setDeliveryDetails] = useState<DeliveryDetails>({
    fullName: "",
    phone: "",
    address: "",
    landmark: "",
    tableNumber: "",
    specialInstructions: "",
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error(e);
    }
  }, [items]);

  const addToCart = (
    item: MenuItem,
    portionLabel?: string,
    customPrice?: number,
    quantityToAdd: number = 1
  ) => {
    const finalPrice = customPrice !== undefined ? customPrice : item.price;
    const cartId = portionLabel ? `${item.id}-${portionLabel.toLowerCase()}` : `${item.id}-default`;
    const qty = Math.max(1, Math.floor(quantityToAdd) || 1);

    setItems((prev) => {
      const existing = prev.find((i) => i.id === cartId);
      if (existing) {
        return prev.map((i) =>
          i.id === cartId ? { ...i, quantity: i.quantity + qty } : i
        );
      }
      return [
        ...prev,
        {
          id: cartId,
          menuItemId: item.id,
          name: item.name,
          portionLabel,
          price: finalPrice,
          quantity: qty,
          diet: item.diet,
          category: item.category,
          image: item.image,
        },
      ];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId: string) => {
    setItems((prev) => prev.filter((i) => i.id !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.id === cartItemId ? { ...i, quantity } : i))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((acc, curr) => acc + curr.quantity, 0);
  const subtotal = items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

  const updateDeliveryDetails = (details: Partial<DeliveryDetails>) => {
    setDeliveryDetails((prev) => ({ ...prev, ...details }));
  };

  const sendWhatsAppOrder = () => {
    if (items.length === 0) return;

    let msg = `*🍱 NEW ORDER - VANTILLU (Kamareddy)*\n`;
    msg += `------------------------------------\n`;
    msg += `*Order Type:* ${orderType.toUpperCase()}\n`;
    if (deliveryDetails.fullName) {
      msg += `*Customer Name:* ${deliveryDetails.fullName}\n`;
    }
    if (deliveryDetails.phone) {
      msg += `*Contact Phone:* ${deliveryDetails.phone}\n`;
    }

    if (orderType === "delivery") {
      msg += `*📍 Delivery Location / Address:* ${deliveryDetails.address || "To be provided on call"}\n`;
      if (deliveryDetails.landmark) {
        msg += `*Landmark:* ${deliveryDetails.landmark}\n`;
      }
    } else if (orderType === "dine-in" && deliveryDetails.tableNumber) {
      msg += `*Table Number:* ${deliveryDetails.tableNumber}\n`;
    }

    msg += `------------------------------------\n`;
    msg += `*ITEMS ORDERED:*\n`;
    items.forEach((item, index) => {
      const portionText = item.portionLabel ? ` (${item.portionLabel})` : "";
      const itemTotal = item.price * item.quantity;
      msg += `${index + 1}. ${item.name}${portionText} x ${item.quantity} = ₹${itemTotal}\n`;
    });

    msg += `------------------------------------\n`;
    msg += `*Total Amount:* ₹${subtotal} (GST Included)\n`;
    msg += `*Payment:* Cash on Delivery / UPI / Card on Delivery\n`;

    if (deliveryDetails.specialInstructions) {
      msg += `*Cooking / Delivery Notes:* ${deliveryDetails.specialInstructions}\n`;
    }

    msg += `------------------------------------\n`;
    msg += `_Please confirm my order and share the preparation/delivery estimate. Thank you!_`;

    const encoded = encodeURIComponent(msg);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
    window.open(url, "_blank");
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        isCartOpen,
        setIsCartOpen,
        orderType,
        setOrderType,
        deliveryDetails,
        updateDeliveryDetails,
        sendWhatsAppOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
