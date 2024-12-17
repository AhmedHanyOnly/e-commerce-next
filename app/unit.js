"use client";
import { usePathname, useRouter } from "next/navigation";

export function checkRollLayout() {
  const pathname = usePathname();
  const isAdmin = pathname === "/dashboard";
  return isAdmin;
}


export function checkLogin() {
  const token = localStorage.getItem('token')
  const router = useRouter()
  if (token){
    router.push('/')
  }
}