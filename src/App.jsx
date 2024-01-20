import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white">
      {/* <div className="mx-auto 2xl:max-w-7xl"> */}
      <div className="mx-auto min-h-screen">
        <Header />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
