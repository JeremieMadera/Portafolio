import Header from './components/Header';
import Home from './components/Home';
import SobreMi from './components/SobreMi';
import Proyectos from './components/Proyectos';
import Habilidades from './components/Habilidades';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <SobreMi />
        <Proyectos />
        <Habilidades />
      </main>
      <Footer />
    </>
  );
}

export default App;
