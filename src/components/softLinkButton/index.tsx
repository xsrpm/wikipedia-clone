import classes from "./styles.module.css";

type props = {
  name: string;
  padding?: string;
  title?: string;
};

export function SoftLinkButton({ name, padding, title }: props) {
  return (
    <a href="#" className={classes.softLinkButton} title={title}>
      <span style={{ padding }}>{name}</span>
    </a>
  );
}
