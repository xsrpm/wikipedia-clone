import classes from "./styles.module.css";

type props = {
  name: string;
  padding?: string;
};

export function LinkButton({ name, padding }: props) {
  console.log(classes.linkButton);
  return (
    <a href="#" className={classes.linkButton}>
      <span style={{ padding }}>{name}</span>
    </a>
  );
}
