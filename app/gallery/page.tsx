import Image from "next/image";
import classes from "./gallery.module.css";
import M1 from "@/public/images/gallery/murti-1.png";

export default function Gallery() {
  return (
    <section className={`container ${classes.gallery}`}>
      <h1>Gallery</h1>

      <div className={classes.cards}>
        <div className={classes.card}>
          <Image src={M1} alt="m1" width={350} height={400} />
          <div className={classes.card_content}>
            <p className={classes.size}>2.5 Ft.</p>
            <p className={classes.seating}>Raja Baithak</p>
          </div>
          <div className={classes.actions}>
            <p className={classes.price}>Rs.6,000</p>
            <button className={`btn ${classes.addToCart}`}>Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
}
