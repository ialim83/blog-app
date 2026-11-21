import { BarChart3, BookOpen, FilePenLine, LayoutDashboard } from "lucide-react";

export const adminRoutes = [
  {
    title: "Administration",
    items: [
      { 
        title: "Admin dashboard", 
        href: "/admin-dashboard", 
        icon: LayoutDashboard },
      { 
        title: "Create blog", 
        href: "/admin-dashboard/writing-blog", 
        icon: FilePenLine 
      },
      { 
        title: "Analytics", 
        href: "/admin-dashboard/analytics", 
        icon: BarChart3 
      },
    ],
  },
];
