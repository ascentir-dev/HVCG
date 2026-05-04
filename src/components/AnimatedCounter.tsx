"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string; // e.g. "500+" or "4.9★" or "15+"
  label: string;
  className?: string;
}

function extractNumber(val: string): { num: number; suffix: string } {
  const match = val.match(/^(\d+(?:\.\d+)?)(.*)/);
  if (!match) return { num: 0, suffix: val };
  return { num: parseFloat(match[1]), suffix: match[2] };
}

export function AnimatedCounter({ value, label, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState("0");
  const [started, setStarted] = useState(false);
  const { num, suffix } = extractNumber(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1600;
    const steps = 50;
    const increment = num / steps;
    let current = 0;
    let step = 0;
    const isDecimal = num % 1 !== 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(increment * step, num);
      const eased = num * (1 - Math.pow(1 - step / steps, 3));
      const clamped = Math.min(eased, num);
      setDisplay(isDecimal ? clamped.toFixed(1) : Math.round(clamped).toString());
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [started, num]);

  return (
    <div ref={ref} className={className}>
      <p
        className="text-4xl font-black text-primary"
        style={{
          animation: started ? "count-up 0.4s ease forwards" : undefined,
        }}
      >
        {display}{suffix}
      </p>
      <p className="text-sm font-semibold text-gray-600 mt-1">{label}</p>
    </div>
  );
}
