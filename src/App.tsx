import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import Landing from "@/pages/Landing";
import Menu from "@/pages/Menu";
import { CartProvider } from "@/context/CartContext";
import { ReservationProvider } from "@/context/ReservationContext";
import CartDrawer from "@/components/vantillu/CartDrawer";
import BookTableModal from "@/components/vantillu/BookTableModal";

function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const id = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, []);
  return <>{children}</>;
}

export function App() {
  return (
    <ReservationProvider>
      <CartProvider>
        <div className="App selection:bg-[#5c1a1b] selection:text-[#f9f6f0]">
          <BrowserRouter>
            <SmoothScroll>
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/menu" element={<Menu />} />
              </Routes>
              <CartDrawer />
              <BookTableModal />
            </SmoothScroll>
          </BrowserRouter>
        </div>
      </CartProvider>
    </ReservationProvider>
  );
}

export default App;
