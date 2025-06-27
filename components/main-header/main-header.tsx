import Link from "next/link";
import NavLinks from "../nav-links/nav-links";
import classes from "./main-header.module.css";
import logo from "@/public/images/logo.png";
import Image from "next/image";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      {/* logo */}
      <Link href="/" className={classes.logo}>
        <Image src={logo} alt="logo" height={50} width={50} />
      </Link>

      {/* navigation */}
      <nav>
        <ul className={classes.navigations}>
          <li>
            <NavLinks href="/">Home</NavLinks>
          </li>
          <li>
            <NavLinks href="/gallery">Gallery</NavLinks>
          </li>
          <li>
            <NavLinks href="/contact">Contact</NavLinks>
          </li>
        </ul>
      </nav>

      <div>Cart</div>
    </header>
  );
}
