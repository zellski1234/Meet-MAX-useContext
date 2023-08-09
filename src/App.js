import './App.css';
import ComponentC from './components/ComponentC';

export const UserContext = React.createContext()

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Vishwas'}>
        <ComponentC />    
      </UserContext.Provider>
    </div>
  );
}

export default App;
