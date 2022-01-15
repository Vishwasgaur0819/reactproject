import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <div>
      <Navbar title='TextUtills' abouttext="About" />
      <div className='container my-2'>
      
      <TextForm/>
      
      </div>
      
    </div>
  );
}

export default App;
