import { BookOpen, FilePenLine, LayoutDashboard } from "lucide-react";

export const userRoutes = [
  {
    title: "My workspace",
    items: [
      { 
        title: "Dashboard", 
        href: "/dashboard", 
        icon: LayoutDashboard 
      },
      { 
        title: "Write a post", 
        href: "/dashboard/writing-blog", 
        icon: FilePenLine 
      },
      { 
        title: "Blog", 
        href: "/blog", 
        icon: BookOpen 
      },
      
    ],
  },
];
