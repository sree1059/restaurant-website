// Calligraphic "Vantillu" wordmark — gold serif/script lettering
export const Logo = ({ className = "", color = "currentColor" }) => {
  return (
    <span
      className={`font-script select-none leading-none ${className}`}
      style={{ color, letterSpacing: "0.01em" }}
    >
      Vantillu
    </span>
  );
};

export default Logo;
