import About from "./components/About";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Interest from "./components/Interest";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div className = "card">
      <Info />
      <About />
      <Interest />
      <Footer />
      </div>
    </div>
  );
}

export default App;
