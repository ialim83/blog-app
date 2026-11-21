import { FilePenLine, Users, Eye, ShieldCheck } from "lucide-react";

const stats = [
  { label: "Total posts", value: "48", icon: FilePenLine },
  { label: "Registered users", value: "326", icon: Users },
  { label: "Monthly views", value: "24.8k", icon: Eye },
];

export default function AdminDashboard() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-6 text-slate-800">
      <section>
        <p className="text-sm font-medium text-slate-500">Administration</p>
        <h2 className="mt-1 text-2xl font-bold tracking-tight">Admin dashboard</h2>
        <p className="mt-2 text-sm text-slate-500">A summary of your blog platform.</p>
      </section>
      <section aria-label="Platform statistics" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {stats.map(({ label, value, icon: Icon }) => (
          <article key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between"><span className="text-sm font-medium text-slate-500">{label}</span><span className="flex size-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><Icon size={18} /></span></div>
            <p className="mt-4 text-3xl font-bold tracking-tight">{value}</p>
          </article>
        ))}
      </section>
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex items-center gap-2"><ShieldCheck size={18} className="text-emerald-600" /><h3 className="font-semibold">Platform status</h3></div>
        <p className="mt-2 text-sm text-slate-500">Your admin workspace is ready.</p>
      </section>
    </div>
  );
}
