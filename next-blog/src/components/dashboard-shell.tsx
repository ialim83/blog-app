"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
import {
  ArrowUpRight,
  Bell,
  ChevronRight,
  FileText,
  Menu,
  Search,
  X,
} from "lucide-react";
import { adminRoutes } from "@/routes/adminRoute";
import { userRoutes } from "@/routes/userRoute";

type Role = "admin" | "user";

function DashboardNavigation({
  role,
  closeMenu,
}: {
  role: Role;
  closeMenu?: () => void;
}) {
  const pathname = usePathname();
  const routeGroups = role === "admin" ? adminRoutes : userRoutes;
  const [query, setQuery] = useState("");
  const filteredGroups = routeGroups
    .map((group) => ({
      ...group,
      items: group.items.filter((item) =>
        item.title.toLowerCase().includes(query.trim().toLowerCase()),
      ),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <>
      <div className="flex h-[76px] items-center justify-between border-b border-slate-100 px-5">
        <Link
          href={role === "admin" ? "/admin-dashboard" : "/dashboard"}
          onClick={closeMenu}
          className="flex min-w-0 items-center gap-3"
        >
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm shadow-blue-600/25">
            <FileText size={20} strokeWidth={2.2} />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-sm font-bold tracking-tight text-slate-800">
              Draft &amp; Publish
            </span>
            <span className="mt-1 block text-[9px] font-semibold tracking-[0.14em] text-slate-400">
              BLOG STUDIO
            </span>
          </span>
        </Link>
        <button
          type="button"
          aria-label="Close dashboard menu"
          onClick={closeMenu}
          className="rounded-md p-1 text-slate-400 hover:bg-slate-100 lg:hidden"
        >
          <X size={18} />
        </button>
      </div>
      <div className="px-4 pt-4">
        <label className="flex h-9 items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 text-slate-400 focus-within:border-blue-300 focus-within:bg-white">
          <Search size={15} />
          <input
            aria-label="Search dashboard navigation"
            placeholder="Search menu"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="w-full bg-transparent text-xs text-slate-700 outline-none placeholder:text-slate-400"
          />
        </label>
      </div>
      <nav
        aria-label={`${role} dashboard navigation`}
        className="flex-1 px-2.5 py-5"
      >
        {filteredGroups.map((group) => (
          <div key={group.title}>
            <p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
              {group.title}
            </p>
            <div className="space-y-1">
              {group.items.map(({ title, href, icon: Icon }) => {
                const active =
                  pathname === href || pathname.startsWith(`${href}/`);
                return (
                  <Link
                    key={href}
                    href={href}
                    aria-current={active ? "page" : undefined}
                    onClick={closeMenu}
                    className={`flex min-h-11 items-center gap-3 rounded-r-lg border-l-[3px] px-3 text-[13px] font-semibold transition-colors ${active ? "border-blue-600 bg-blue-600 text-white shadow-sm shadow-blue-600/20" : "border-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`}
                  >
                    <Icon size={17} strokeWidth={1.9} />
                    <span>{title}</span>
                    {active && (
                      <ChevronRight size={15} className="ml-auto opacity-75" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
      <div className="mt-auto border-t border-slate-100">
        <Link
          href="/contact"
          onClick={closeMenu}
          className="flex items-center gap-2.5 px-5 py-4 text-xs font-medium text-slate-500 hover:text-blue-600"
        >
          <span className="text-base">?</span>
          <span>Help &amp; support</span>
        </Link>
        <div className="flex items-center gap-3 border-t border-slate-100 px-4 py-4">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
            {role === "admin" ? "AD" : "US"}
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-xs font-bold capitalize text-slate-700">
              {role} account
            </span>
            <span className="mt-0.5 block truncate text-[11px] text-slate-400">
              {role === "admin" ? "Administrator" : "Workspace member"}
            </span>
          </span>
          <ArrowUpRight size={15} className="text-slate-400" />
        </div>
      </div>
    </>
  );
}

const pageTitles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/admin-dashboard": "Admin dashboard",
};

export default function DashboardShell({
  admin,
  user,
}: {
  admin: ReactNode;
  user: ReactNode;
}) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const role: Role =
    pathname === "/admin-dashboard" || pathname.startsWith("/admin-dashboard/")
      ? "admin"
      : "user";
  const title =
    pageTitles[pathname] ?? (role === "admin" ? "Administration" : "Workspace");
  const page = role === "admin" ? admin : user;

  return (
    <div className="min-h-screen bg-[#eef2f9] p-0 sm:p-4 lg:p-6">
      <div className="mx-auto flex min-h-screen max-w-[1600px] overflow-hidden border-0 border-[#344b87] bg-white shadow-xl sm:min-h-[calc(100svh-2rem)] sm:rounded-[28px] sm:border-[5px] lg:min-h-[calc(100svh-3rem)]">
        <aside className="hidden w-[245px] shrink-0 flex-col bg-white lg:flex">
          <DashboardNavigation role={role} />
        </aside>
        {mobileOpen && (
          <button
            type="button"
            aria-label="Close dashboard menu"
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-40 bg-slate-950/35 lg:hidden"
          />
        )}
        <aside
          className={`fixed inset-y-0 left-0 z-50 flex w-[270px] flex-col bg-white shadow-2xl transition-transform duration-200 lg:hidden ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <DashboardNavigation
            role={role}
            closeMenu={() => setMobileOpen(false)}
          />
        </aside>
        <div className="flex min-w-0 flex-1 flex-col bg-[#f2f5fb]">
          <header className="flex h-[72px] shrink-0 items-center justify-between border-b border-slate-200/80 bg-white/80 px-4 backdrop-blur-sm sm:px-6 lg:px-8">
            <div className="flex min-w-0 items-center gap-3">
              <button
                type="button"
                aria-label="Open dashboard menu"
                onClick={() => setMobileOpen(true)}
                className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
              >
                <Menu size={19} />
              </button>
              <div className="hidden text-xs text-slate-400 sm:block">
                {role === "admin" ? "Admin workspace" : "My workspace"}
              </div>
              <ChevronRight
                size={15}
                className="hidden text-slate-300 sm:block"
              />
              <h1 className="truncate text-base font-bold text-slate-800 sm:text-lg">
                {title}
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <label className="hidden h-9 w-44 items-center gap-2 rounded-full border border-slate-200 bg-white px-3 text-slate-400 sm:flex">
                <Search size={15} />
                <input
                  aria-label="Search"
                  placeholder="Search"
                  className="w-full bg-transparent text-xs text-slate-700 outline-none placeholder:text-slate-400"
                />
              </label>
              <button
                type="button"
                aria-label="Notifications"
                className="relative flex size-9 items-center justify-center rounded-full bg-white text-slate-500 ring-1 ring-slate-200 hover:bg-slate-50"
              >
                <Bell size={17} />
                <span className="absolute right-1.5 top-1.5 size-2 rounded-full bg-rose-500 ring-2 ring-white" />
              </button>
            </div>
          </header>
          <div className="flex h-12 shrink-0 items-center border-b border-slate-200/70 px-5 text-xs sm:px-8">
            <span className="font-semibold text-blue-600">
              {role === "admin" ? "Admin workspace" : "Workspace"}
            </span>
            <span className="mx-3 text-slate-300">›</span>
            <span className="truncate text-slate-500">{title}</span>
          </div>
          <main className="flex flex-1 flex-col p-4 text-slate-800 sm:p-6 lg:p-8">{page}</main>
        </div>
      </div>
    </div>
  );
}

