import classes from "./styles.module.css";

export function Welcome() {
  return (
    <section className={classes.welcome}>
      <p>
        <span>
          <a href="#">Bienvenidos</a> a Wikipedia,
        </span>
        <br />
        la enciclopedia de contenido libre
        <br />
        que <a href="#">todos pueden editar</a>.
      </p>
      <p>
        <b>
          <a href="#">1 783 266</a>
        </b>{" "}
        artículos en español
      </p>
      <ul>
        <li>
          <a href="#">Café</a>
        </li>
        <li>
          <a href="#">¿Como colaborar?</a>
        </li>
        <li>
          <a href="#">Primeros pasos</a>
        </li>
        <li>
          <a href="#">Ayuda</a>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
      </ul>
    </section>
  );
}
