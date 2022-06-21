import './styles.css';
import { Welcome } from "../../components/portada/welcome";
import { FeaturedArticle } from "../../components/portada/featuredArticle";
import { GoodArticle } from "../../components/portada/goodArticle";
import { RecursoDelDia } from "../../components/portada/recursoDelDia";
import { Portales } from "../../components/portada/portales";
import { Actualidad } from "../../components/portada/actualidad";
import { Efemerides } from "../../components/portada/efemerides";
export function Portada() {
  return (
    <>
      <Welcome />
      <FeaturedArticle />
      <GoodArticle />
      <RecursoDelDia />
      <Portales />
      <Actualidad />
      <Efemerides />
    </>
  );
}
