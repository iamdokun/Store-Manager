import React from 'react';
import {Form, Button} from 'react-bootstrap';

const Login = (props) => {
    const [state, setState] = React.useState({username: '', password: ''});

    const handleLogin = () => {
        const {username, password} = state;
    
        // alert(`username ${username} - password ${password}`)
        
        const isManager = username === 'manager' && password === 'manager';
        const isCashier = username === 'cashier' && password === 'cashier';
    
        if(!isManager && !isCashier){
          alert('Invalid login details');
          return;
        } 
    
        props.onLoginSuccess()
      }

    return (
      <div className="login-component">
        <Form>
          <h2 className="text-center mb-4">Staff Login</h2>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              onChange={(e) => setState({ ...state, username: e.target.value })}
              value={state.username}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setState({ ...state, password: e.target.value })}
              value={state.password}
            />
          </Form.Group>

          <Button type="submit" onClick={handleLogin}>
            Submit
          </Button>
        </Form>
      </div>
    );
}

export default Login;
