import logo from "../../assets/logo.svg";
import "./App.scss";
import "../../styles/index.scss";

import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{t("welcome")}</p>
        <a
          className="App-link"
          href="http://www.pleincagnard.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("link")}
        </a>
      </header>
    </div>
  );
}

export default App;
