import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CollapsibleExample from './componentes/Navbar';
import UncontrolledExample from './componentes/Carousel';
import Columna1 from './componentes/column1';
import FAQ from './componentes/faq';
import Explicacion from './componentes/Explicacion';
import Fundamentacion from './componentes/Fundamentacion';
import Hero from './componentes/Hero';
import Video from './componentes/ytvideo';
import Obj from './componentes/obj';
import Footer from './componentes/Footer';


function App() {
  return (
    <div className="App">
    <CollapsibleExample />
    <Hero />
    <Obj />
    <Columna1 />
    <Explicacion />
    <UncontrolledExample />
    <Fundamentacion />
    <FAQ />
    <Video />
    <Footer/>
    </div>
  );
}

export default App;
