import Image from "next/image";
import classes from "./hero-banner.module.css";
import Hero1 from "../../public/images/hero-image-2.png";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className={`container ${classes.banner}`}>
      <div className={classes.heroText}>
        <h2 className={classes.heading}>
          Bring Home <br /> Divinity This <br />
          Ganesh Chaturthi
        </h2>
        <p className={classes.subheading}>
          Handcrafted Eco-friendly Ganapti <br />
          Murti&apos;s Delivered to Your Doorstep
        </p>
        <Link href="/gallery">
          <button className={`btn ${classes.cta}`}>Browse Murti&apos;s</button>
        </Link>
      </div>
      <div className={classes.heroImage}>
        <Image
          src={Hero1}
          alt="hero1"
          height={500}
          width={500}
          className={classes.heroImage}
        />
      </div>
    </section>
  );
}
