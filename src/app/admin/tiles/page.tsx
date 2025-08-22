import { BrandHeader } from "@/components/BrandHeader";

export default function TilesPage() {
  return (
    <main className="min-h-screen p-6 md:p-10 bg-brand">
      <div className="mx-auto max-w-6xl">
        <BrandHeader titleKey="admin" />
        <h2 className="text-xl font-semibold mb-4">Tiles</h2>
        <div className="rounded-xl border p-6">
          <form className="grid gap-4 max-w-2xl">
            <label className="grid gap-1">
              <span className="text-sm font-medium">Label (English)</span>
              <input className="border rounded p-2" placeholder="Missed Punch" />
            </label>
            <label className="grid gap-1">
              <span className="text-sm font-medium">Etiqueta (Español)</span>
              <input className="border rounded p-2" placeholder="Falta de marcación" />
            </label>
            <label className="grid gap-1">
              <span className="text-sm font-medium">Workflow</span>
              <select className="border rounded p-2">
                <option>Choose…</option>
                <option>Missed Punch Notify</option>
              </select>
            </label>
            <button className="bg-sky-600 text-white rounded px-4 py-2 w-fit" type="button">Save (stub)</button>
          </form>
        </div>
      </div>
    </main>
  );
}


