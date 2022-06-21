import classes from "@/layouts/sectionLayout/styles.module.css";
import classesPortales from "./styles.module.css";
import nuvola from "@/assets/icons/30px-Nuvola_apps_package_graphics.svg.webp";
import sciences from "@/assets/icons/30px-Sciences_humaines.svg.webp";

export function Portales() {
  return (
    <section className={classes.section}>
      <header>
        <h2 className={classes.title}>
          <a href="#">Portales</a>
        </h2>
        <ul className={classesPortales.ulPortales}>
          <li>
            <div>
              {" "}
              <a href="#">
                <strong>Artes </strong>
              </a>
              : &nbsp;<a href="#">Arquitectura</a> – <a href="#">Cine</a> –{" "}
              <a href="#">Danza</a> – <a href="#">Literatura</a> –{" "}
              <a href="#">Música</a> – <a href="#">Música clásica</a>–{" "}
              <a href="#">Pintura</a> – <a href="#">Teatro</a>
            </div>
            <img src={nuvola} alt="Artes" />
          </li>
          <li>
            <div>
              <a href="#">
                <strong>Ciencias sociales</strong>
              </a>
              : &nbsp;<a href="#">Comunicación</a> – <a href="#">Deporte</a> –{" "}
              <a href="#">Derecho</a> – <a href="#">Economía</a> –
              <a href="#">Filosofía</a> – <a href="#">Lingüística</a> –{" "}
              <a href="#">Psicología</a> – <a href="#">Sociología</a>
            </div>
            <img src={sciences} alt="Ciencias" />
          </li>
          {/*
            <li>
            Ciencias naturales: Astronomía – Biología – Botánica – Física –
            Medicina – Matemática – Química Geografía Geografía: África –
            América – Antártida – Asia – Europa – Oceanía – Países
          </li>
          <li>
            Historia: Prehistoria – Edad Antigua – Edad Media – Edad Moderna –
            Edad Contemporánea Política Política: Feminismo – LGBT – Marxismo –
            Nacionalismo – Socialismo – Terrorismo
          </li>
          <li>
            Religión: Ateísmo – Budismo – Cristianismo – Iglesia católica –
            Islam – Judaísmo – Mitología
          </li>
          <li>
            Tecnologías: Biotecnología – Exploración espacial – Informática –
            Ingeniería – Software libre – Videojuegos
          </li>
            */}
        </ul>
      </header>
    </section>
  );
}
