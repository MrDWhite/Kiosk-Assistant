import { BrandHeader } from "@/components/BrandHeader";

export default function TranslationsPage() {
  return (
    <main className="min-h-screen p-6 md:p-10 bg-brand">
      <div className="mx-auto max-w-6xl">
        <BrandHeader titleKey="admin" />
        <h2 className="text-xl font-semibold mb-4">Translations</h2>
        <div className="rounded-xl border p-6">
          <p className="text-slate-600 mb-4">Edit UI strings per locale. Missing keys view will be added.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            <textarea className="border rounded p-2 h-80" defaultValue='{
  "kioskTitle": "Employbridge Kiosk",
  "admin": "Admin"
}' />
            <textarea className="border rounded p-2 h-80" defaultValue='{
  "kioskTitle": "Kiosco de Employbridge",
  "admin": "Administración"
}' />
          </div>
          <button className="mt-4 bg-sky-600 text-white rounded px-4 py-2 w-fit" type="button">Save (stub)</button>
        </div>
      </div>
    </main>
  );
}


