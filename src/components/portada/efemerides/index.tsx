import classes from "@/layouts/sectionLayout/styles.module.css";
import { LinkButton } from "../../linkButton";
import { SoftLinkButton } from "../../softLinkButton";
import elipsis from "@/assets/images/30px-OOjs-UI-icon-ellipsis.svg.webp";

export function Efemerides() {
  return (
    <section className={classes.section}>
      <header>
        <p className={classes.cardType}>Efemérides</p>
        <h2 className={classes.title}>
          <a href="#">21 de junio</a>
        </h2>
      </header>
      <ul>
        <li>
          <a href="#">
            <strong>1947</strong>
          </a>{" "}
          (hace 75 años): Nace{" "}
          <a href="#">
            <strong>Shirin Ebadi</strong>
          </a>
          , abogada activista iraní, premio Nobel de la paz en 2003 (en la
          imagen).
        </li>
        <li>
          <a href="#">
            <strong>1982</strong>
          </a>{" "}
          (hace 40 años): Nace{" "}
          <a href="#">
            <strong>Guillermo de Cambridge</strong>
          </a>
          , príncipe británico.
        </li>
        <li>
          <a href="#">
            <strong>1992</strong>
          </a>{" "}
          (hace 30 años): Fallece{" "}
          <a href="#">
            <strong>Joan Fuster</strong>
          </a>
          , escritor español (n. 1922).
        </li>
        <li>
          <a href="#">
            <strong>1997</strong>
          </a>{" "}
          (hace 25 años): Nace{" "}
          <a href="#">
            <strong>Rebecca Black</strong>
          </a>
          , cantante estadounidense.
        </li>
        <li>
          <a href="#">
            <strong>2002</strong>
          </a>{" "}
          (hace 20 años): Se estrena la película estadounidense{" "}
          <a href="#">
            <strong>Lilo & Stitch</strong>
          </a>
          , de Walt Disney Pictures.
        </li>
      </ul>

      <footer>
        <ul>
          <li>
            <SoftLinkButton name="20 de junio" />
          </li>
          <li>
            <LinkButton name="21 de junio" />
          </li>
          <li>
            <SoftLinkButton name="22 de junio" />
          </li>
        </ul>
        <div>
          <img
            alt="Acciones adicionales"
            src={elipsis}
            width="20"
            height="20"
          />
        </div>
      </footer>
    </section>
  );
}
