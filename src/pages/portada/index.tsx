import './styles.css';
import { Welcome } from "../../components/welcome";
import { FeaturedArticle } from "../../components/featuredArticle";
export function Portada() {
  return (
    <>
      <Welcome />
      <FeaturedArticle />
    </>
  );
}
