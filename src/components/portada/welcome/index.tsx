import { SoftLinkButton } from "../../softLinkButton";
import classes from "./styles.module.css";

export function Welcome() {
  return (
    <section className={classes.welcome}>
      <p>
        <span>
          <a href="#" title="Wikipedia:Bienvenidos">
            Bienvenidos
          </a>{" "}
          a Wikipedia,
        </span>
        <br />
        la enciclopedia de contenido libre
        <br />
        que{" "}
        <a href="#" title="Ayuda:Introducción">
          todos pueden editar
        </a>
        .
      </p>
      <p>
        <b>
          <a href="#" title="Especial:Estadísticas">
            1 783 266
          </a>
        </b>{" "}
        artículos{" "}
        <a href="#" title="Wikipedia en español">
          en español
        </a>
      </p>
      <ul>
        <li>
          <SoftLinkButton
            name="Cafe"
            padding="5px 0 5px 12px"
            title="Wikipedia:Café"
          />
        </li>
        <li>
          <SoftLinkButton
            name="¿Como colaborar?"
            padding="5px 0 5px 12px"
            title="Ayuda:Cómo puedes colaborar"
          />
        </li>
        <li>
          <SoftLinkButton
            name="Primeros pasos"
            padding="5px 0 5px 12px"
            title="Ayuda:Introdución"
          />
        </li>
        <li>
          <SoftLinkButton
            name="Ayuda"
            padding="5px 0 5px 12px"
            title="Ayuda:Contenidos"
          />
        </li>
        <li>
          <SoftLinkButton
            name="Contacto"
            padding="5px 0 5px 12px"
            title="Wikipedia:Contacto"
          />
        </li>
      </ul>
    </section>
  );
}
