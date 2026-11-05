import React from "react";

interface LogoProps {
  className?: string;
  color?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  color = "currentColor",
}) => {
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
