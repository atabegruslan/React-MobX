import logo from './logo.svg';
import './App.css';

import List from "./components/List";
import entriesStore from "./store/EntriesStore";

function App() {
  return (
    <div className="App">
      <List entriesStore={entriesStore} />
    </div>
  );
}

export default App;
