import './styles.css';
import { Welcome } from "../../components/welcome";
import { FeaturedArticle } from "../../components/featuredArticle";
import { GoodArticle } from "../../components/goodArticle";
import { RecursoDelDia } from "../../components/recursoDelDia";
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
