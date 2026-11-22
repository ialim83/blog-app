import { BarChart3, FilePenLine, Eye, Users } from "lucide-react";

const stats = [
  { label: "Published posts", value: "12", detail: "+2 this month", icon: FilePenLine },
  { label: "Total readers", value: "1,284", detail: "+18% this month", icon: Users },
  { label: "Post views", value: "8,642", detail: "Across all posts", icon: Eye },
];

export default function UserDashboard() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-6 text-slate-800">
      <section>
        <p className="text-sm font-medium text-slate-500">Your overview</p>
        <h2 className="mt-1 text-2xl font-bold tracking-tight">Welcome to your dashboard</h2>
        <p className="mt-2 text-sm text-slate-500">Here is a quick look at your blog activity.</p>
      </section>
      <section aria-label="Blog statistics" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {stats.map(({ label, value, detail, icon: Icon }) => (
          <article key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-500">{label}</span>
              <span className="flex size-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><Icon size={18} /></span>
            </div>
            <p className="mt-4 text-3xl font-bold tracking-tight">{value}</p>
            <p className="mt-1 text-xs text-slate-500">{detail}</p>
          </article>
        ))}
      </section>
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex items-center gap-2"><BarChart3 size={18} className="text-blue-600" /><h3 className="font-semibold">Getting started</h3></div>
        <p className="mt-2 text-sm leading-6 text-slate-500">Your dashboard is ready. Use the sidebar to write a post or review your analytics.</p>
      </section>
    </div>
  );
}
