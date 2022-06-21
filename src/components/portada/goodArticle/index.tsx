import { LinkButton } from "../../linkButton";
import { SoftLinkButton } from "../../softLinkButton";
import classes from "@/layouts/sectionLayout/styles.module.css";
import elipsis from "@/assets/images/30px-OOjs-UI-icon-ellipsis.svg.webp";
import poznan from "@/assets/images/Poznan_1956.jpg.webp";

export function GoodArticle() {
  return (
    <section className={classes.section}>
      <header>
        <p className={classes.cardType}>Artículo bueno</p>
        <h2 className={classes.title}>
          <a href="#">Protestas de Poznań de 1956</a>
        </h2>
      </header>
      <picture className={classes.floatRight}>
        <img src={poznan} alt="poznan 1956" width="150px" height="150" />
      </picture>
      <p>
        Las <strong>protestas de Poznań de 1956</strong> (también conocidas como
        la <strong>sublevación de Poznań de 1956</strong> o{" "}
        <strong>Junio de Poznań</strong>; en <a href="#">polaco</a>,{" "}
        <i>Poznański Czerwiec 56</i>) fueron las primeras de varias protestas
        masivas llevadas a cabo por el <a href="#">pueblo polaco</a> contra el
        gobierno comunista de la <a href="#">República Popular de Polonia</a>.
        Las manifestaciones de obreros que pedían mejores condiciones comenzaron
        el 28 de junio de 1956 en las fábricas Cegielski de{" "}
        <a href="#">Poznan</a> y debieron hacer frente a una{" "}
        <a href="#">represión</a> violenta.
      </p>
      <div className={classes.clear}></div>
      <footer>
        <ul>
          <li>
            <LinkButton name="Leer" />
          </li>
          <li>
            <SoftLinkButton name="Todos los artículos buenos" />
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
