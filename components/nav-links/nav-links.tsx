"use client";

import Link from "next/link";
import classes from "./nav-link.module.css";
import { usePathname } from "next/navigation";

export default function NavLinks({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const path = usePathname();
  const isActive = path === href;

  return (
    <Link
      href={href}
      className={
        isActive ? `${classes.link} ${classes.active}` : `${classes.link}`
      }
    >
      {children}
    </Link>
  );
}
