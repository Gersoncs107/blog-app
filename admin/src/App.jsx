import { useState } from 'react';
import Login from './components/Login';
import PostList from './components/PostList'
import logo from './logo.svg';
import './App.css';

function App() {
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
