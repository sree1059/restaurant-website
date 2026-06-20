import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import Landing from "@/pages/Landing";
import Menu from "@/pages/Menu";

function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const id = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, []);
  return children;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SmoothScroll>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </SmoothScroll>
      </BrowserRouter>
    </div>
  );
}

export default App;
