import Image from "next/image";
import classes from "./card.module.css";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type CardProps = {
  id: number;
  imageSrc: StaticImport;
  alt: string;
  imageWidth: number;
  imageHeight: number;
  murtiHeight: number;
  murtiName: string;
  price: number;
};

export default function Card({
  imageSrc,
  alt,
  imageWidth,
  imageHeight,
  murtiHeight,
  murtiName,
  price,
}: CardProps) {
  return (
    <section className={classes.card}>
      <Image src={imageSrc} alt={alt} width={imageWidth} height={imageHeight} />
      <div className={classes.card_content}>
        <p className={classes.size}>{murtiHeight} Ft.</p>
        <p className={classes.seating}>{murtiName}</p>
      </div>
      <div className={classes.actions}>
        <p className={classes.price}>Rs.{price}</p>
        <button className={`btn ${classes.addToCart}`}>Add to Cart</button>
      </div>
    </section>
  );
}
