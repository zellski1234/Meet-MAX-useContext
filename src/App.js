import './App.css';
import ComponentC from './components/ComponentC';

const UserContext = React.createContext()

function App() {
  return (
    <div className="App">
      <ComponentC />    
    </div>
  );
}

export default App;
