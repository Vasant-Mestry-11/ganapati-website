import Link from "next/link";
import NavLinks from "../nav-links/nav-links";

export default function MainHeader() {
  return (
    <header>
      {/* logo */}
      <Link href="/">Ganpati Logo</Link>

      {/* navigation */}
      <nav>
        <ul>
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
