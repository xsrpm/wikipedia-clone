import { SoftLinkButton } from "../../softLinkButton";
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
          <SoftLinkButton name="Cafe" padding="5px 0 5px 12px" />
        </li>
        <li>
          <SoftLinkButton name="¿Como colaborar?" padding="5px 0 5px 12px" />
        </li>
        <li>
          <SoftLinkButton name="Primeros pasos" padding="5px 0 5px 12px" />
        </li>
        <li>
          <SoftLinkButton name="Ayuda" padding="5px 0 5px 12px" />
        </li>
        <li>
          <SoftLinkButton name="Contacto" padding="5px 0 5px 12px" />
        </li>
      </ul>
    </section>
  );
}
