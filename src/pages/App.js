import './App.css';
import Header from '../components/Header.js';
import Masters from '../components/Masters.js';
import Services from '../components/Services.js';
import FAQ from '../components/FAQ.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Gallery} from '../components/Gallery.js';
import Map from '../components/Map.js'
import Footer from '../components/Footer.js';


function App() {
  return(
    <div>
        <Header/>
        <Services/>
        <Gallery/>
        <Masters/>
        <FAQ/>
        <Map/>
        <Footer/>
    </div>
  );
}

export default App;
