import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'
import { AboutMe } from './components/AboutMe'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <hr class="border-8 border-border" />
      <AboutMe/>
      <hr class="border-8 border-border" />
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
