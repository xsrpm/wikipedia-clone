import classes from "@/layouts/sectionLayout/styles.module.css";
import classesRecurso from "./styles.module.css";
import phobos from "@/assets/images/Phobos_colour_2008.jpg";
import { SoftLinkButton } from "../../softLinkButton";

export function RecursoDelDia() {
  return (
    <section className={classes.section}>
      <header>
        <h2 className={classes.title}>
          <a href="#">Recurso del día</a>
        </h2>
      </header>
      <figure className={classesRecurso.figure}>
        <img src={phobos} alt="Fobos" width="500" height="471" />
        <figcaption>Fobos</figcaption>
      </figure>
      <p>
        <a href="#">
          <strong>Fobos</strong>
        </a>{" "}
        es el mayor de los dos <a href="#">satélites</a> de{" "}
        <a href="#">Marte</a> y el más cercano a este planeta. Al igual que
        <a href="#">Deimos</a> , el otro satélite de Marte, fue descubierto en{" "}
        <a href="#">1877</a> por el <a href="#">astrónomo</a>{" "}
        <a href="#">estadounidense</a> <a href="#">Asaph Hall</a>. Fotografía
        tomada en 2008 por la <a href="#">Mars Reconnaissance Orbiter</a>.
      </p>
      <footer>
        <SoftLinkButton name="Archivo" />
      </footer>
    </section>
  );
}
