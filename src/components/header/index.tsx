import classes from "./styles.module.css";
import userAvatar from "@/assets/images/user-avatar.svg";
import tabNormalFade from "@/assets/images/tab-normal-fade.png";

export function Header() {
  return (
    <header>
      <div className={classes.personal}>
        <div>
          <img src={userAvatar} width="15px" height="15px" />
          <span>No has accedido</span>
        </div>
        <ul>
          <li>
            <a href="">Discusión</a>
          </li>
          <li>
            <a href="">Contribuciones</a>
          </li>
          <li>
            <a href="">Crear una cuenta</a>
          </li>
          <li>
            <a href="">Acceder</a>
          </li>
        </ul>
      </div>
      <ul className={classes.left}>
        <li className={classes.selected}>
          <a href="#">Portada</a>
        </li>
        <li>
          <a href="#">Discusión</a>
        </li>
      </ul>
      <div className={classes.right}>
        <ul>
          <li className={classes.selected}>
            <a href="#">Leer</a>
          </li>
          <li>
            <a href="#">Ver código fuente</a>
          </li>
          <li>
            <a href="#">Ver historial</a>
          </li>
        </ul>
        <div>
          <div className={classes.searchInput}>
            <input
              type="search"
              placeholder="Buscar en Wikipedia"
              autoComplete="off"
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
