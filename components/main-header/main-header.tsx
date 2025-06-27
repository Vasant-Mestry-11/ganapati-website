import Link from "next/link";
import NavLinks from "../nav-links/nav-links";
import classes from "./main-header.module.css";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      {/* logo */}
      <Link href="/" className={classes.logo}>
        Ganpati Logo
      </Link>

      {/* navigation */}
      <nav>
        <ul className={classes.navigations}>
          <li>
            <NavLinks href="/">Home</NavLinks>
          </li>
          <li>
            <NavLinks href="/gallary">Gallery</NavLinks>
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
