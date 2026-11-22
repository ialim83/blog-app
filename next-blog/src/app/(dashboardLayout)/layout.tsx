import type { ReactNode } from "react";
import DashboardShell from "@/components/dashboard-shell";

export default function DashboardLayout({
  admin,
  user,
}: {
  admin: ReactNode;
  user: ReactNode;
}) {
  return <DashboardShell admin={admin} user={user} />;
}
