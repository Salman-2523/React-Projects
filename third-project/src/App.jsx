import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data.js";
function App() {
    
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="card-container">
        {data.map((item) => {
          return <Card item={item} key = {item.id} />;
        })}
      </div>
    </div>
  );
}

export default App;
