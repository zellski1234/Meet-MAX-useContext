import './App.css';
import ComponentC from './components/ComponentC';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Vishwas'}>
        <ChannelContext.provider value={'Codevolution'}>
          <ComponentC />    
        </ChannelContext.provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
