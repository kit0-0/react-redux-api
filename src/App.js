import logo from './logo.svg';
import './App.css';
import UsersList from './components/UsersList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Random Users</h1>
      <UsersList />
      </header>
    </div>
  );
}

export default App;
