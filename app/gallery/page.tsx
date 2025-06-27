import { MURTI_DETAILS } from "@/constants/gallery";
import classes from "./gallery.module.css";
import Card from "@/components/card/card";

export default function Gallery() {
  return (
    <section className={`container ${classes.gallery}`}>
      <h1>Gallery</h1>

      <div className={classes.cards}>
        {MURTI_DETAILS.map((murti) => {
          const {
            id,
            imageSrc,
            alt,
            imageWidth,
            imageHeight,
            murtiHeight,
            murtiName,
            price,
          } = murti;
          return (
            <Card
              id={id}
              key={id}
              imageSrc={imageSrc}
              alt={alt}
              imageWidth={imageWidth}
              imageHeight={imageHeight}
              murtiHeight={murtiHeight}
              murtiName={murtiName}
              price={price}
            />
          );
        })}
      </div>
    </section>
  );
}
