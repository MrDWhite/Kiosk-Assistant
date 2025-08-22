import { BrandHeader } from "@/components/BrandHeader";

export default function KiosksPage() {
  return (
    <main className="min-h-screen p-6 md:p-10 bg-brand">
      <div className="mx-auto max-w-6xl">
        <BrandHeader titleKey="admin" />
        <h2 className="text-xl font-semibold mb-4">Kiosks</h2>
        <div className="rounded-xl border p-6">
          <form className="grid gap-4 max-w-xl">
            <label className="grid gap-1">
              <span className="text-sm font-medium">Name</span>
              <input className="border rounded p-2" placeholder="Coach - Line 2" />
            </label>
            <label className="grid gap-1">
              <span className="text-sm font-medium">Default Locale</span>
              <select className="border rounded p-2">
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
            </label>
            <label className="grid gap-1">
              <span className="text-sm font-medium">PIN (optional)</span>
              <input className="border rounded p-2" placeholder="****" />
            </label>
            <button className="bg-sky-600 text-white rounded px-4 py-2 w-fit" type="button">Save (stub)</button>
          </form>
        </div>
      </div>
    </main>
  );
}


