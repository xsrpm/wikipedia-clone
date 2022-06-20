import './styles.css';
import { Welcome } from "../../components/welcome";
import { Destacado } from "../../components/destacado";

export function Portada() {
  return (
    <>
      <Welcome />
      <Destacado />
    </>
  );
}
