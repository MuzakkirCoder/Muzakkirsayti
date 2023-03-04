import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Card from './Components/Card/Card';
import Practive from './Components/Practive/Practive';
import Business from './Components/Business/Business';
import Get from './Components/Get_In_Touch/Get';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Card />
      <Practive />
      <Business />
      <Get />
      <Footer />
    </div>
  );
}

export default App;
