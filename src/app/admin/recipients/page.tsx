import { BrandHeader } from "@/components/BrandHeader";

export default function RecipientsPage() {
  return (
    <main className="min-h-screen p-6 md:p-10 bg-brand">
      <div className="mx-auto max-w-6xl">
        <BrandHeader titleKey="admin" />
        <h2 className="text-xl font-semibold mb-4">Recipients</h2>
        <div className="rounded-xl border p-6">
          <form className="grid gap-4 max-w-xl">
            <label className="grid gap-1">
              <span className="text-sm font-medium">Display Name</span>
              <input className="border rounded p-2" placeholder="Onsite Recruiter" />
            </label>
            <label className="grid gap-1">
              <span className="text-sm font-medium">Type</span>
              <select className="border rounded p-2">
                <option>PERSON</option>
                <option>GROUP</option>
              </select>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="grid gap-1">
                <span className="text-sm font-medium">Email</span>
                <input className="border rounded p-2" placeholder="user@example.com" />
              </label>
              <label className="grid gap-1">
                <span className="text-sm font-medium">Phone (SMS)</span>
                <input className="border rounded p-2" placeholder="+14045551234" />
              </label>
            </div>
            <button className="bg-sky-600 text-white rounded px-4 py-2 w-fit" type="button">Save (stub)</button>
          </form>
        </div>
      </div>
    </main>
  );
}


