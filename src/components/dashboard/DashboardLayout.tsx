"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
// import { authClient } from "@/lib/auth-client";
import { createAuthClient } from "better-auth/client";

interface DashboardLayoutProps {
  children: React.ReactNode;
  user?: any;
}

const authClient = createAuthClient({
  baseURL: "http://localhost:4000",
  fetchOptions: {
    credentials: "include",
  },
});

export default function DashboardLayout({
  children,
  user,
}: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  console.log("User in DashboardLayout:", user?.role);

  const TUTOR_ITEMS = [
    { name: "Dashboard", href: "/dashboard", icon: "📊" },
    { name: "Create Course", href: "/dashboard/create", icon: "📚" },
  ];
  const STUDENT_ITEMS = [
    { name: "Dashboard", href: "/dashboard", icon: "📊" },
    { name: "Create Booking", href: "/dashboard/createBook", icon: "📚" },
  ];
  const ADMIN_ITEMS = [
    { name: "Dashboard", href: "/dashboard", icon: "📊" },
    { name: "Manage Users", href: "/dashboard/users", icon: "👥" },
    { name: "Manage Courses", href: "/dashboard/course", icon: "📚" },
    { name: "Manage Categories", href: "/dashboard/category", icon: "📂" },
  ];

  // ✅ Conditionally set navItems based on user role
  const role = user?.role;
  let navItems = [];

  if (role === "Tutor") {
    navItems = TUTOR_ITEMS;
  } else if (role === "Student") {
    navItems = STUDENT_ITEMS;
  } else if (role === "Admin") {
    navItems = ADMIN_ITEMS;
  } else {
    // Default items if no role
    navItems = [
      { name: "Dashboard", href: "/dashboard", icon: "📊" },
      { name: "Courses", href: "/dashboard/courses", icon: "📚" },
    ];
  }

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out flex flex-col`}
      >
        {/* Sidebar Header */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200 dark:border-gray-700">
          {isSidebarOpen && (
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">
              TutorHub
            </h1>
          )}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
          >
            {isSidebarOpen ? "◀" : "▶"}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <span className="text-xl">{item.icon}</span>
                  {isSidebarOpen && (
                    <span className="font-medium">{item.name}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* User Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 p-4">
          {user ? (
            // User logged in
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
                {user.name?.charAt(0).toUpperCase() || "U"}
              </div>
              {isSidebarOpen && (
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 truncate">
                    {user.name || "User Account"}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                    {user.email || "user@example.com"}
                  </p>
                </div>
              )}
            </div>
          ) : (
            // No user
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-white font-semibold">
                ?
              </div>
              {isSidebarOpen && (
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 truncate">
                    Guest
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                    Please login
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center px-6">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            Dashboard
          </h2>

          {/* User info in header (optional) */}
          {user && (
            <div className="ml-auto flex items-center gap-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Welcome, {user.name}
              </span>
            </div>
          )}
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
