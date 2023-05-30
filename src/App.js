
import './App.css';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Quote from './Components/Quote';
function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Hero></Hero>
    <Banner></Banner>
   <Quote></Quote>
    </div>
  );
}

export default App;
