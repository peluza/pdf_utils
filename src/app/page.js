import styles from "./page.module.css";
import FooterComponents from "./components/Footer/FooterComponents";
import NavComponents from "./components/Nav/NavComponents";
import "bootstrap/dist/css/bootstrap.min.css";
import WelcomeCoponents from "./components/Welcome/WelcomeCoponents";


export default function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavComponents />
      <main className={`${styles.main} bg-light`}>
        <WelcomeCoponents />
      </main>
      <FooterComponents />
    </div>
  );
}
