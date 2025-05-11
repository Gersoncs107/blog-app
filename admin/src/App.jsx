import { useState } from 'react';
import Login from './components/Login';
import PostList from './components/PostList';
import './App.css';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token')); // Define token and setToken

  const handleLogout = () => {
    // Define handleLogout
    localStorage.removeItem('token');
    setToken(null);
  };

  return (
    <div className="App">
      <header>
        <h1>Gerenciamento do Blog</h1>
        {token && <button onClick={handleLogout}>Sair</button>}
      </header>
      {token ? <PostList token={token} /> : <Login setToken={setToken} />}
    </div>
  );
}

export default App;
