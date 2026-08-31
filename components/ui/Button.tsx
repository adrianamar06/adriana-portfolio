"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
  onClick?: () => void;
  className?: string;
}

export const Button = ({
  children,
  variant = "primary",
  href,
  target,
  rel,
  download,
  onClick,
  className = "",
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-medium text-sm transition-all focus:outline-none gap-2 cursor-pointer no-underline";

  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/20",
    secondary: "bg-zinc-800 text-zinc-100 hover:bg-zinc-700",
    outline: "border border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white",
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="inline-block"
      >
        <Link
          href={href}
          target={target}
          rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
          download={download}
          className={combinedStyles}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={onClick}
      className={combinedStyles}
    >
      {children}
    </motion.button>
  );
};

export default Button;