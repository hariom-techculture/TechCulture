// components/GlowingCard.tsx

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface GlowingCardProps extends React.ComponentProps<"div"> {
  glowColor?: "blue" | "purple" | "green" | "red" | "orange";
}

const glowColorMap = {
  blue: { base: 220, spread: 200 },
  purple: { base: 280, spread: 300 },
  green: { base: 120, spread: 200 },
  red: { base: 0, spread: 200 },
  orange: { base: 30, spread: 200 },
};

export const GlowingCard = React.forwardRef<HTMLDivElement, GlowingCardProps>(
  ({ className, glowColor = "blue", children, ...props }, ref) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const syncPointer = (e: PointerEvent) => {
        const { clientX: x, clientY: y } = e;
        if (cardRef.current) {
          cardRef.current.style.setProperty("--x", x.toFixed(2));
          cardRef.current.style.setProperty("--xp", (x / window.innerWidth).toFixed(2));
          cardRef.current.style.setProperty("--y", y.toFixed(2));
          cardRef.current.style.setProperty("--yp", (y / window.innerHeight).toFixed(2));
        }
      };
      document.addEventListener("pointermove", syncPointer);
      return () => document.removeEventListener("pointermove", syncPointer);
    }, []);

    const { base, spread } = glowColorMap[glowColor];

    const glowStyles = {
      "--base": base,
      "--spread": spread,
      "--radius": "14",
      "--border": "3",
      "--backdrop": "hsl(0 0% 60% / 0.12)",
      "--backup-border": "var(--backdrop)",
      "--size": "200",
      "--outer": "1",
      "--border-size": "3px",
      "--spotlight-size": "200px",
      "--hue": `calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))`,
      backgroundImage: `radial-gradient(
        var(--spotlight-size) var(--spotlight-size) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(var(--hue, 210) 100% 70% / 0.1), transparent
      )`,
      backgroundColor: "var(--backdrop)",
      border: "var(--border-size) solid var(--backup-border)",
      backgroundSize: "calc(100% + 6px) calc(100% + 6px)",
      backgroundAttachment: "fixed",
    } as React.CSSProperties;

    const beforeAfterStyles = `
      [data-glow]::before,
      [data-glow]::after {
        pointer-events: none;
        content: "";
        position: absolute;
        inset: calc(var(--border-size) * -1);
        border: var(--border-size) solid transparent;
        border-radius: calc(var(--radius) * 1px);
        background-attachment: fixed;
        background-size: calc(100% + 6px) calc(100% + 6px);
        background-position: 50% 50%;
        background-repeat: no-repeat;
        mask: linear-gradient(white, white), linear-gradient(white, white);
        mask-clip: padding-box, border-box;
        mask-composite: intersect;
      }

      [data-glow]::before {
        background-image: radial-gradient(
          150px 150px at var(--x, 0px) var(--y, 0px),
          hsl(var(--hue, 210) 100% 50% / 0.7), transparent
        );
      }

      [data-glow]::after {
        background-image: radial-gradient(
          100px 100px at var(--x, 0px) var(--y, 0px),
          white 0%, transparent 100%
        );
      }
    `;

    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: beforeAfterStyles }} />
        <div
          ref={cardRef}
          data-glow
          className={cn("relative rounded-xl", className)}
          style={glowStyles}
          {...props}
        >
          {children}
        </div>
      </>
    );
  }
);

GlowingCard.displayName = "GlowingCard";
