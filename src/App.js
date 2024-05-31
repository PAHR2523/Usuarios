import React, { useEffect, useState } from 'react';
import './App.css';
import UserTable from './UserTable';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Función para obtener los datos de la API
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de Usuarios</h1>
        <UserTable users={users} />
      </header>
    </div>
  );
}

export default App;


