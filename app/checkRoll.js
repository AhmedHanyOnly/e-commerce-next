"use client";
import { usePathname } from "next/navigation";

export function checkRollLayout() {
  const pathname = usePathname();
  const isAdmin = pathname === "/dashboard";
  return isAdmin;
}
