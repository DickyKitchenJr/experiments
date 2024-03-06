import { ProductBrowser } from "@ecwid/nextjs-ecwid-plugin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

const house = <FontAwesomeIcon icon={faHouse} />

function App() {

  return (
    <>
      <h1 className="hero">
        <a href="https://mayhemmills.com/" className="house">
          {house}
        </a>
        <div className="logo">
          MAYHEM<span>MILLS</span>.COM
        </div>
      </h1>
      <ProductBrowser storeId="99936715" />
    </>
  );
}

export default App
