import { BrandHeader } from "@/components/BrandHeader";

export default function WorkflowsPage() {
  return (
    <main className="min-h-screen p-6 md:p-10 bg-brand">
      <div className="mx-auto max-w-6xl">
        <BrandHeader titleKey="admin" />
        <h2 className="text-xl font-semibold mb-4">Workflows</h2>
        <p className="text-slate-600 mb-4">Create a workflow with one of the types: Notify, FAQ, Link. Integrations are stubbed.</p>
        <div className="rounded-xl border p-6">
          <form className="grid gap-4 max-w-xl">
            <label className="grid gap-1">
              <span className="text-sm font-medium">Name</span>
              <input className="border rounded p-2" placeholder="Missed Punch Notify" />
            </label>
            <label className="grid gap-1">
              <span className="text-sm font-medium">Type</span>
              <select className="border rounded p-2">
                <option>NOTIFY</option>
                <option>FAQ</option>
                <option>LINK</option>
              </select>
            </label>
            <label className="grid gap-1">
              <span className="text-sm font-medium">Parameters (JSON)</span>
              <textarea className="border rounded p-2 h-40" placeholder='{"channels":["email"],"recipients":["ops@example.com"]}' />
            </label>
            <button className="bg-sky-600 text-white rounded px-4 py-2 w-fit" type="button">Save (stub)</button>
          </form>
        </div>
      </div>
    </main>
  );
}


