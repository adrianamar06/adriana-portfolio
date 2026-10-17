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
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 cursor-pointer no-underline";

  const variantStyles = {
    primary: "bg-sky-500 text-white shadow-md shadow-sky-500/25 hover:bg-sky-600",
    secondary: "border border-sky-200 bg-white/75 text-slate-700 shadow-sm hover:border-sky-300 hover:bg-sky-50",
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