import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    // <div className="flex flex-col justify-center min-h-screen">
    <div className="2xl:max-w-7xl mx-auto">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
