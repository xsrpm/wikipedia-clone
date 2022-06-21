import { LinkButton } from "../../linkButton";
import { SoftLinkButton } from "../../softLinkButton";
import classes from "@/layouts/sectionLayout/styles.module.css";
import madona from "@/assets/images/Madonna-take-a-bow-album-version-1994-2.jpg.webp";
import elipsis from "@/assets/images/30px-OOjs-UI-icon-ellipsis.svg.webp";
import sture from "@/assets/images/Sture_Allén,_Bokmässan_2013_2_(crop).jpg.webp";

export function Actualidad() {
  return (
    <section className={classes.section}>
      <header>
        <h2 className={classes.title}>
          <a href="#">Actualidad</a>
        </h2>
      </header>
      <ul>
        <li>
          <a href="#">Manifestaciones en Ecuador</a>
        </li>
        <li>
          <a href="#">Ola de calor en Europa</a>
        </li>
        <li>
          <a href="#">
            Brote de hepatitis aguda grave de causa desconocida en niños
          </a>
        </li>
        <li>
          <a href="#">Brote de viruela símica</a>
        </li>
        <li>
          <a href="#">Invasión rusa de Ucrania</a>
        </li>
        <li>
          <a href="#">Pandemia de COVID-19</a>
        </li>
        <li>
          20-26 de junio: Torneos de <a href="#">Eastbourne</a> y{" "}
          <a href="#">Mallorca</a> de tenis
        </li>
        <li>
          19 de junio: Segunda vuelta de las{" "}
          <a href="#">elecciones presidenciales de Colombia</a>
        </li>
        <li>
          18 de junio-3 de julio:{" "}
          <a href="#">Campeonato Mundial de Waterpolo Masculino</a>
        </li>
        <li>
          18 de junio-3 de julio:{" "}
          <a href="#">Campeonato Mundial de Waterpolo Femenino</a>
        </li>
        <li>
          17 de junio-3 de julio: <a href="#">Campeonato Mundial de Natación</a>
        </li>
        <li>
          17-22 de junio: <a href="#">Campeonato Europeo de Esgrima</a>
        </li>
      </ul>
      <p>
        <a href="#">
          <strong>Fallecimientos</strong>
        </a>
      </p>
      <img
        className={classes.floatRight}
        src={sture}
        alt="El lingüista sueco Sture Allén"
        width="120"
        height="120"
      />
      <ul>
        <li>
          20 de junio: <a href="#">Sture Allén</a>, lingüista sueco (93; en la
          imagen)
        </li>
        <li>
          20 de junio: <a href="#">Chelo De Castro</a> , periodista colombiano
          (102)
        </li>
        <li>
          19 de junio: <a href="#">Adolfo Riquelme</a>, futbolista paraguayo
          (93)
        </li>
        <li>
          19 de junio: <a href="#">Rafael Campanero Guzmán</a>, empresario
          español (95-96)
        </li>
        <li>
          19 de junio: <a href="#">Tim White</a>, árbitro de lucha libre
          profesional estadounidense (68)
        </li>
        <li>
          19 de junio: <a href="#">José García Pérez</a>, político y escritor
          español (85-86)
        </li>
        <li>
          19 de junio: <a href="#">Gennadi Búrbulis</a>, político ruso (76)
        </li>
      </ul>
      <p>
        <strong>Conmemoraciones y fiestas</strong>
      </p>
      <ul>
        <li>
          21 de junio: <a href="#">Fiesta de la Música</a>
        </li>
        <li>
          21 de junio: Día Mundial de la{" "}
          <a href="#">Esclerosis Lateral Amiotrófica</a>
        </li>
        <li>
          21 de junio: Día Internacional del <a href="#">Yoga</a>
        </li>
        <li>
          20 de junio: Día Mundial de los <a href="#">Refugiados</a>
        </li>
      </ul>
      <p>
        <strong>Véase también</strong>: <a href="#">Categoría:Actualidad</a> ,{" "}
        <a href="#">2022</a>, <a href="#">Categoría:2022</a>
      </p>
      <footer>
        <ul>
          <li>
            <LinkButton name="Otros eventos actuales" />
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
