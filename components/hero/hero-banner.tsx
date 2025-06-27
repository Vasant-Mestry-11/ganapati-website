import classes from "./hero-banner.module.css";

export default function HeroBanner() {
  return (
    <section className={classes.banner}>
      <div className={classes.heroText}>
        <h2 className={classes.text}>
          Bring Home Divinity This Ganesh Chaturthi
        </h2>
      </div>
      <div className={classes.heroImage}></div>
    </section>
  );
}
