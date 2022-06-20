import { Aside } from "../components/aside";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import classes from "./App.module.css";
import { Portada } from "../pages/portada";
import { PageLayout } from "../layouts/pageLayout";

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <Aside />
      <PageLayout>
        <Portada />
      </PageLayout>
      <Footer />
    </div>
  );
}

export default App;
