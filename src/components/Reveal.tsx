"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right" | "scale";
  delay?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  threshold?: number;
}

const DIRECTION_CLASS: Record<string, string> = {
  up: "reveal-visible",
  left: "reveal-visible-left",
  right: "reveal-visible-right",
  scale: "reveal-visible-scale",
};

export function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
  threshold = 0.15,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={cn(
        !visible && "reveal-hidden",
        visible && DIRECTION_CLASS[direction],
        delay > 0 && visible && `stagger-${delay}`,
        className
      )}
    >
      {children}
    </div>
  );
}
