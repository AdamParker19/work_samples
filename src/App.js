import React, { useState } from 'react';

import './App.scss';
import { Button, Form, FormGroup, Label, Input, Card, Container } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import LoginForm from './LoginForm';

function App() {
  const history = useHistory();

  const [User, setUser] = useState();
  const [Pass, setPass] = useState();

  if (localStorage.getItem('token') != null) {
    history.push('/dashboard');
  }
  const changeUser = (e) => {
    setUser(e.target.value);
  }

  const changePass = (e) => {
    setPass(e.target.value);
  }



  return (
    <div className="App">
      <title>Github_repo</title>
      <header className="App-header">
        <LoginForm />
      </header>
    </div>

  );


}

export default App;
