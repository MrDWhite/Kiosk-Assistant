import { BrandHeader } from "@/components/BrandHeader";

export default function AdminHome() {
  return (
    <main className="min-h-screen p-6 md:p-10 bg-brand">
      <div className="mx-auto max-w-6xl">
        <BrandHeader titleKey="admin" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <a className="rounded-xl border p-6 hover:shadow" href="/admin/kiosks">Kiosks</a>
          <a className="rounded-xl border p-6 hover:shadow" href="/admin/tiles">Tiles</a>
          <a className="rounded-xl border p-6 hover:shadow" href="/admin/workflows">Workflows</a>
          <a className="rounded-xl border p-6 hover:shadow" href="/admin/recipients">Recipients</a>
          <a className="rounded-xl border p-6 hover:shadow" href="/admin/translations">Translations</a>
          <a className="rounded-xl border p-6 hover:shadow" href="/admin/settings">Settings</a>
        </div>
      </div>
    </main>
  );
}


