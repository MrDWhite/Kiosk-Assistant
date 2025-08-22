"use client";
import { useEffect, useState } from "react";
import { ensureI18n } from "@/lib/i18n";
import { brandTheme } from "@/lib/brand";

type Props = {
  titleKey?: string;
  rightSlot?: React.ReactNode;
};

export function BrandHeader({ titleKey = "kioskTitle", rightSlot }: Props) {
  const [lng, setLng] = useState<string>(
    typeof window !== "undefined"
      ? (document.cookie.match(/(?:^|; )locale=([^;]+)/)?.[1] ??
          process.env.NEXT_PUBLIC_DEFAULT_LOCALE ?? "en")
      : "en"
  );
  const i18n = ensureI18n(lng);

  useEffect(() => {
    i18n.changeLanguage(lng);
    document.cookie = `locale=${lng}; path=/; max-age=31536000`;
  }, [lng, i18n]);

  return (
    <header className="mb-6 md:mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div className="flex items-center gap-3">
        <img src="/brand/EB Logo.png" alt={brandTheme.name} className="h-10" />
        <h1 className="text-2xl md:text-3xl font-bold" style={{ color: brandTheme.primary }}>
          {i18n.t(titleKey) as string}
        </h1>
      </div>
      <div className="flex items-center gap-3">
        <label className="text-sm text-slate-600" htmlFor="lang">
          {i18n.t("language")}
        </label>
        <select
          id="lang"
          className="border rounded-md px-3 py-2 text-sm"
          value={lng}
          onChange={(e) => setLng(e.target.value)}
        >
          {(process.env.NEXT_PUBLIC_SUPPORTED_LOCALES || "en,es")
            .split(",")
            .map((l) => (
              <option key={l} value={l}>
                {l === "en" ? "English" : l === "es" ? "Español" : l}
              </option>
            ))}
        </select>
        {rightSlot}
      </div>
    </header>
  );
}


