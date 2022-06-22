import classes from "./styles.module.css";
import userAvatar from "@/assets/images/user-avatar.svg";
import tabNormalFade from "@/assets/images/tab-normal-fade.png";

export function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.personal}>
        <div>
          <img src={userAvatar} width="15px" height="15px" />
          <span title="La página de usuario de la IP desde la que editas">
            No has accedido
          </span>
        </div>
        <ul>
          <li>
            <a
              href="#"
              title="Discusión sobre ediciones hechas desde esta dirección IP [alt-shift-n]"
            >
              Discusión
            </a>
          </li>
          <li>
            <a
              href="#"
              title="Una lista de modificaciones hechas desde esta dirección IP [alt-shift-y]"
            >
              Contribuciones
            </a>
          </li>
          <li>
            <a
              href="#"
              title="Te recomendamos crear una cuenta e iniciar sesión; sin embargo, no es obligatorio"
            >
              Crear una cuenta
            </a>
          </li>
          <li>
            <a
              href="#"
              title="Te recomendamos iniciar sesión, aunque no es obligatorio [alt-shift-o]"
            >
              Acceder
            </a>
          </li>
        </ul>
      </div>
      <ul className={classes.left}>
        <li className={classes.selected}>
          <a href="#" title="Ver la página del proyecto [alt-shift-a]">
            Portada
          </a>
        </li>
        <li>
          <a href="#" title="Discusión acerca de la página [alt-shift-t]">
            Discusión
          </a>
        </li>
      </ul>
      <div className={classes.right}>
        <ul>
          <li className={classes.selected}>
            <a href="#">Leer</a>
          </li>
          <li>
            <a
              href="#"
              title="Esta página está protegida, pero puedes ver su código fuente [alt-shift-e]"
            >
              Ver código fuente
            </a>
          </li>
          <li>
            <a
              href="#"
              title="Versiones anteriores de esta página [alt-shift-h]"
            >
              Ver historial
            </a>
          </li>
        </ul>
        <div>
          <div className={classes.searchInput}>
            <input
              type="search"
              placeholder="Buscar en Wikipedia"
              autoComplete="off"
              title="Buscar en este wiki [alt-shift-f]"
            />
            <input
              type="submit"
              title="Ir a la página con este nombre exacto si existe"
              value="Ir"
            ></input>
          </div>
        </div>
      </div>
    </header>
  );
}
