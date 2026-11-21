import Link from "next/link";

function AnalyticsLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <nav>
        <Link href="/admin-dashboard/analytics">Analytics</Link>
        <Link href="/admin-dashboard/analytics/monthly">Monthly</Link>
        <Link href="/admin-dashboard/analytics/weekly">Weekly</Link>
      </nav>
      {children}
    </div>
  );
}

export default AnalyticsLayout;
