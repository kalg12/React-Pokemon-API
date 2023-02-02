import Api from "./components/Api";
import Navbar from "./components/Navbar";
import "../src/styles/styles.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container-xl">
        <div className="tarjetas">
          <Api />
        </div>
      </div>
    </div>
  );
}

export default App;
