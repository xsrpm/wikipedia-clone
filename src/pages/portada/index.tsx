import './styles.css';
import { Welcome } from "../../components/welcome";
import { FeaturedArticle } from "../../components/featuredArticle";
import { GoodArticle } from "../../components/goodArticle";
export function Portada() {
  return (
    <>
      <Welcome />
      <FeaturedArticle />
      <GoodArticle />
    </>
  );
}
