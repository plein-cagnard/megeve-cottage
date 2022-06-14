import logo from "../../assets/logo.svg";
import "./App.scss";
import "../../styles/index.scss";
import {API_URL, SITE_NAME} from '../../config/constant';


import { useTranslation } from "react-i18next";
import { getEntities, getSingle } from "../../helpers/entity";

function App() {

  getEntities('chalets?populate=*');
  getSingle('about?populate=*');

  const { t } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{t("welcome")} to {SITE_NAME} at the url: {API_URL}</p>
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
