import HeroBanner from "@/components/hero/hero-banner";
import classes from "./page.module.css";

export default function Home() {
  return (
    <div className={classes.page}>
      <HeroBanner />
    </div>
  );
}
