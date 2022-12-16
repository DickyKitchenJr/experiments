import Dog from "./Image/dog-drawing.png";
import "./App.css";

function App() {
  return (
    <>
      <div className="main-box">
        <div className="interior-box">
          <img className="dog" src={Dog} alt="drawing of a dog" />
        </div>
        <h1>Under Construction</h1>
        <p>
          To see past projects, visit <a href="https://dickykitchen.com/">my portfolio</a>.
        </p>
      </div>
    </>
  );
}

export default App;
