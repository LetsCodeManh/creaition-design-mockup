import CallOnAction from "./components/CallOnAction";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Preview from "./components/Preview";
import Morph from "./components/Morph";
import Design from "./components/Design";

const App = () => {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Preview />
        <Morph />
        <Design />
        <CallOnAction />
      </main>
      <Footer />
    </>
  );
};

export default App;
