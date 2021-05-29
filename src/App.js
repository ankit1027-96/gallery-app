import "./App.css";
import Images from "./components/images";
import Nav from "./components/nav";
import Footer from "./components/footer";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("nature");
  return (
      <div className="App">
        <Nav />
        <div className="appOne">
          <Images search={search} />
        </div>
        <div>
          <Footer setSearch={setSearch} />
        </div>
      </div>
  );
}

export default App;
