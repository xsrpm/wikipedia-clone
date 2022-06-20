import classes from "./style.module.css";
import madona from "@/assets/images/Madonna-take-a-bow-album-version-1994-2.jpg.webp";
import elipsis from "@/assets/images/30px-OOjs-UI-icon-ellipsis.svg.webp";
import { LinkButton } from "../linkButton";
import { SoftLinkButton } from "../softLinkButton";

export function Destacado() {
  return (
    <section className={classes.destacado}>
      <header>
        <p className={classes.cardType}>Artículo destacado</p>
        <h2 className={classes.title}>
          <a href="#">Take a Bow</a>
        </h2>
      </header>
      <picture className={classes.floatRight}>
        <img src={madona} alt="madona disc" width="150px" height="150" />
      </picture>
      <p>
        <strong>«Take a Bow»</strong> es una canción interpretada por la
        cantante estadounidense <a href="#">Madonna</a>, incluida en su sexto
        álbum de estudio, <a href="#">Bedtime Stories</a> (1994). Las compañías{" "}
        <a href="#">Maverick</a>,<a href="#">Sire</a> y{" "}
        <a href="#">Warner Bros. Records </a>la publicaron como el segundo{" "}
        <a href="#">sencillo</a> del disco, después de «<a href="#">Secret</a>»,
        el 6 de diciembre de 1994. Posteriormente, figuró en el{" "}
        <a href="#">recopilatorio</a> de baladas{" "}
        <a href="#">Something to Remember</a> (1995) y en los{" "}
        <a href="#">grandes éxitos</a>
        <a href="#">GHV2</a> (2001) y <a href="#">Celebration</a> (2009). Tras
        el lanzamiento de
        <a href="#">Erotica</a> (1992), su anterior trabajo discográfico,
        Madonna quería adoptar una imagen nueva y más atenuada para su siguiente
        material, por lo tanto, experimentó con <a href="#">géneros</a> como el{" "}
        <a href="#">R&B</a> y el <a href="#">hip hop</a>, que dominaban las
        radios y las listas de aquella época. En este sentido, colaboró con
        productores reconocidos de ese tipo de música, entre ellos{" "}
        <a href="#">Babyface</a>, cuyo trabajo con otros artistas había
        impresionado a Madonna. Compuesta y producida por ambos, es una{" "}
        <a href="#">balada</a>
        pop y R&B de <a href="#">tempo</a> medio con influencias musicales
        japonesas, cuya <a href="#">letra</a>
        trata sobre un amor no correspondido en la cual la cantante se despide
        de su amante.
      </p>
      <div className={classes.clear}></div>
      <footer className={classes.footer}>
        <ul>
          <li>
            <LinkButton name="Leer" />
          </li>
          <li>
            <SoftLinkButton name="Todos los articulos destacados" />
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
