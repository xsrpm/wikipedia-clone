import classes from "./styles.module.css";

type props = {
  name: string;
  padding?: string;
  title?: string;
};

export function LinkButton({ name, padding, title }: props) {
  return (
    <a href="#" className={classes.linkButton} title={title}>
      <span style={{ padding }}>{name}</span>
    </a>
  );
}
