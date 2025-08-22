"use client";
import { useEffect, useState } from "react";
import { ensureI18n } from "@/lib/i18n";
import { brandTheme } from "@/lib/brand";

export default function Home() {
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

  const tiles = [
    { key: "missedPunch" },
    { key: "discussAssignment" },
    { key: "nurseTriage" },
    { key: "benefits" },
    { key: "newPaycard" },
    { key: "referral" },
    { key: "directDeposit" },
    { key: "payStub" },
    { key: "textOut" },
    { key: "timeOff" },
  ];

  return (
    <main className="min-h-screen p-4 md:p-8 bg-brand">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6 md:mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/brand/EB Logo.png" alt={brandTheme.name} className="h-10" />
            <h1 className="text-2xl md:text-3xl font-bold" style={{ color: brandTheme.primary }}>
              {i18n.t("kioskTitle")}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <label className="text-sm text-slate-600" htmlFor="lang">
              {i18n.t("language")}
            </label>
            <select
              id="lang"
              className="border border-[var(--brand-border)] rounded-md px-3 py-2 text-sm"
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
            <a href="/admin" className="text-sm hover:underline" style={{ color: brandTheme.primary }}>
              {i18n.t("admin")}
            </a>
          </div>
        </header>

        <div className="mb-5">
          <input
            type="search"
            placeholder={i18n.t("search") as string}
            className="w-full md:w-96 border border-[var(--brand-border)] rounded-xl px-4 py-3 shadow-sm"
          />
        </div>

        <section className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {tiles.map(({ key }) => (
            <button
              key={key}
              className="aspect-square rounded-2xl bg-white shadow hover:shadow-lg transition flex items-center justify-center text-center p-5 text-lg font-medium hover:-translate-y-[1px]"
              style={{ border: `1px solid ${brandTheme.border}` }}
              aria-label={i18n.t(`tiles.${key}`) as string}
            >
              {i18n.t(`tiles.${key}`)}
            </button>
          ))}
        </section>
      </div>
    </main>
  );
}
