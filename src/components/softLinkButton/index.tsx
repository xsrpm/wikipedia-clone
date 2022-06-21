import classes from "./styles.module.css";

type props = {
  name: string;
  padding?: string;
};

export function SoftLinkButton({ name, padding }: props) {
  return (
    <a href="#" className={classes.softLinkButton}>
      <span style={{ padding }}>{name}</span>
    </a>
  );
}
