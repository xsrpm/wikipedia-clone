import classes from "./styles.module.css";
import { pages, tools, printExport, projects, languages } from "./links.js";
import esWiki from "@/assets/eswiki.png";

export function Aside() {
  return (
    <aside>
      <section className={classes.logo}>
        <a href="#">
          <img src={esWiki} alt="wikipedia logo" />
        </a>
      </section>
      <section>
        <ul>
          {pages.map(({ title, url }) => (
            <li key={title}>
              <a href={url}>{title}</a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>
          <span>Herramientas</span>
        </h2>
        <ul>
          {tools.map(({ title, url }) => (
            <li key={title}>
              <a href={url}>{title}</a>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>
          <span>Imprimir/exportar</span>
        </h2>
        <ul>
          {printExport.map(({ title, url }) => (
            <li key={title}>
              <a href={url}>{title}</a>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>
          <span>En otros proyectos</span>
        </h2>
        <ul>
          {projects.map(({ title, url }) => (
            <li key={title}>
              <a href={url}>{title}</a>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>
          <span>En otros idiomas</span>{" "}
          <button title="Opciones de idioma">O</button>
        </h2>
        <ul>
          {languages.map(({ title, url }) => (
            <li key={title}>
              <a href={url}>{title}</a>
            </li>
          ))}
          <li>
            <a href="#">Lista completa</a>
          </li>
        </ul>
      </section>
    </aside>
  );
}
