import './styles.css';
import { Welcome } from "../../components/portada/welcome";
import { FeaturedArticle } from "../../components/portada/featuredArticle";
import { GoodArticle } from "../../components/portada/goodArticle";
import { RecursoDelDia } from "../../components/portada/recursoDelDia";
export function Portada() {
  return (
    <>
      <Welcome />
      <FeaturedArticle />
      <GoodArticle />
      <RecursoDelDia />
    </>
  );
}
