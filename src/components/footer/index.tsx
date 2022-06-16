import classes from "./styles.module.css";
import wikimediaButton from "@/assets/images/wikimedia-button.png";
import poweredByMediaWiki from "@/assets/images/poweredby-mediawiki-88x31.png";

export function Footer() {
  return (
    <footer>
      <div>
        <p>
          El texto está disponible bajo la{" "}
          <a href="#">
            Licencia Creative Commons Atribución Compartir Igual 3.0
          </a>
          ; pueden aplicarse cláusulas adicionales. Al usar este sitio, usted
          acepta nuestros <a href="#">términos de uso</a> y nuestra{" "}
          <a href="">política de privacidad</a>.
        </p>
        <p>
          Wikipedia® es una marca registrada de la{" "}
          <a href="#">Fundación Wikimedia, Inc.</a>, una organización sin ánimo
          de lucro.
        </p>
      </div>
      <ul className={classes.links}>
        <li>
          <a href="#"> Política de privacidad</a>
        </li>
        <li>
          <a href="#">Acerca de Wikipedia</a>
        </li>
        <li>
          <a href="#">Limitación de responsabilidad</a>
        </li>
        <li>
          <a href="#">Versión para móviles</a>
        </li>
        <li>
          <a href="#">Desarrolladores</a>
        </li>
        <li>
          <a href="#">Estadísticas</a>
        </li>
        <li>
          <a href="#">Declaración de cookies</a>
        </li>
      </ul>
      <ul className={classes.buttons}>
        <li>
          <a href="#">
            <img
              src={wikimediaButton}
              width="88"
              height="31"
              alt="Wikimedia Foundation"
              loading="lazy"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src={poweredByMediaWiki}
              alt="Powered by MediaWiki"
              width="88"
              height="31"
              loading="lazy"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
}
