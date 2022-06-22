import classes from "@/layouts/sectionLayout/styles.module.css";
import classesOtros from "./styles.module.css";
import commons from "@/assets/icons/45px-Notification-icon-Commons-logo.svg.webp";
import wikcionario from "@/assets/icons/45px-Notification-icon-Wiktionary-logo.svg.webp";
import metawiki from "@/assets/icons/45px-Notification-icon-Meta-logo.svg.webp";
import wikidata from "@/assets/icons/45px-Notification-icon-Wikidata-logo.svg.webp";
import wikibooks from "@/assets/icons/45px-Notification-icon-Wikibooks-logo.svg.webp";
import wikinews from "@/assets/icons/45px-Notification-icon-Wikinews-logo.svg.webp";
import wikiquote from "@/assets/icons/45px-Notification-icon-Wikiquote.svg.webp";
import wikisource from "@/assets/icons/45px-Notification-icon-Wikisource-logo.svg.webp";
import wikispecies from "@/assets/icons/Notification-icon-Wikispecies-logo.svg.webp";
import wikiversity from "@/assets/icons/Notification-icon-Wikiversity-logo.svg.png";
import wikivoyage from "@/assets/icons/45px-Notification-icon-Wikivoyage-logo.svg.webp";

export function OtrosProyectos() {
  return (
    <section className={classes.section}>
      <header>
        <h2 className={classes.title}>
          <a href="#" title="meta:Special:MyLanguage/Wikimedia projects">
            Otros proyectos
          </a>{" "}
          de la{" "}
          <a href="#" title="Fundación Wikimedia">
            Fundación Wikimedia
          </a>
        </h2>
      </header>
      <table className={classesOtros.table}>
        <tbody>
          <tr>
            <td>
              <picture>
                <img
                  src={commons}
                  alt="Wikimedia Commons"
                  width="30"
                  height="30"
                />
              </picture>
              <div>
                <p>
                  <a href="#">
                    <strong>Commons</strong>
                  </a>
                </p>
                <p>Imágenes y multimedia</p>
              </div>
            </td>
            <td>
              <picture>
                <img
                  src={wikcionario}
                  alt="Wikcionario"
                  width="30"
                  height="30"
                />
              </picture>
              <div>
                <p>
                  <a href="#">
                    <strong>Wikcionario</strong>
                  </a>
                </p>
                <p>Diccionario libre</p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <picture>
                <img src={wikidata} alt="WIkidata" width="30" height="30" />
              </picture>
              <div>
                <p>
                  <a href="#">
                    <strong>Wikidata</strong>
                  </a>
                </p>
                <p>Base de datos libre</p>
              </div>
            </td>
            <td>
              <picture>
                <img src={wikibooks} alt="Wikilibros" width="30" height="30" />
              </picture>
              <div>
                <p>
                  <a href="#">
                    <strong>Wikilibros</strong>
                  </a>
                </p>
                <p>Libros de texto y manuales</p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <picture>
                <img src={wikinews} alt="Wikinoticias" width="30" height="30" />
              </picture>
              <div>
                <p>
                  <a href="#">
                    <strong>Wikinoticias</strong>
                  </a>
                </p>
                <p>Noticias libres</p>
              </div>
            </td>
            <td>
              <picture>
                <img src={wikiquote} alt="Wikiquote" width="30" height="30" />
              </picture>
              <div>
                <p>
                  <a href="#">
                    <strong>Wikiquote</strong>
                  </a>
                </p>
                <p>Colección de citas</p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <picture>
                <img src={wikisource} alt="Wikisource" width="30" height="30" />
              </picture>
              <div>
                <p>
                  <a href="#">
                    <strong>Wikisource</strong>
                  </a>
                </p>
                <p>Biblioteca libre</p>
              </div>
            </td>
            <td>
              <picture>
                <img
                  src={wikispecies}
                  alt="Wikispecies"
                  width="30"
                  height="30"
                />
              </picture>
              <div>
                <p>
                  <a href="#">
                    <strong>Wikispecies</strong>
                  </a>
                </p>
                <p>Directorio de especies</p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <picture>
                <img
                  src={wikiversity}
                  alt="Wikiversidad"
                  width="30"
                  height="30"
                />
              </picture>
              <div>
                <p>
                  <a href="#">
                    <strong>Wikiversidad</strong>
                  </a>
                </p>
                <p>Recursos de aprendizaje</p>
              </div>
            </td>
            <td>
              <picture>
                <img src={wikivoyage} alt="Wikiviajes" width="30" height="30" />
              </picture>
              <div>
                <p>
                  <a href="#">
                    <strong>Wikiviajes</strong>
                  </a>
                </p>
                <p>Guía de viajes</p>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className={classesOtros.colspan}>
              <picture>
                <img src={metawiki} alt="Wikcionario" width="30" height="30" />
              </picture>
              <div>
                <p>
                  <a href="#">
                    <strong>Meta-Wiki</strong>
                  </a>
                  {" –"}&nbsp;
                </p>
                <p>Coordinación de proyectos</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
