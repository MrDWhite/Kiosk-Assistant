"use client";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { brandTheme } from "@/lib/brand";

export function BrandProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const css = useMemo(() => {
    let primary = brandTheme.primary;
    let secondary = brandTheme.secondary;
    let surface = brandTheme.surface;
    let border = brandTheme.border;
    try {
      if (typeof window !== "undefined") {
        const raw = localStorage.getItem("brand.config");
        if (raw) {
          const cfg = JSON.parse(raw);
          primary = cfg.primary || primary;
          secondary = cfg.secondary || secondary;
          surface = cfg.surface || surface;
          border = cfg.border || border;
        }
      }
    } catch {}
    return `:root{--brand-primary:${primary};--brand-secondary:${secondary};--brand-surface:${surface};--brand-border:${border};}`;
  }, []);

  useEffect(() => setMounted(true), []);
  return (
    <>
      {/* Inject brand variables at runtime from env so UI stays consistent */}
      <style id="brand-vars" dangerouslySetInnerHTML={{ __html: css }} />
      {mounted && children}
    </>
  );
}


