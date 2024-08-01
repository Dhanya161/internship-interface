import styles from "./style";

import { Navbar, Hero, Footer } from "./components";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div
          className={`bg-world bg-no-repeat bg-contain bg-right  ${styles.boxWidth}`}
        >
          <Hero />
        </div>
      </div>

      <div
        className={`bg-footer bg-no-repeat bg-contain bg-right ${styles.paddingX} ${styles.flexStart}`}
      >
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
